/*
 * Copyright 2022 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { useCallback, useMemo, useEffect } from "react";
import { VirtualServiceRegistryContext } from "./VirtualServiceRegistryContext";
import { VirtualServiceRegistryFunction } from "./models/VirtualServiceRegistryFunction";
import { useWorkspaces, WorkspaceFile } from "../workspace/WorkspacesContext";
import { GLOB_PATTERN } from "../extension";
import { WorkspaceDescriptor } from "../workspace/worker/api/WorkspaceDescriptor";
import { LfsStorageFile, LfsStorageService } from "../workspace/lfs/LfsStorageService";
import { encoder } from "../workspace/encoderdecoder/EncoderDecoder";
import { LfsWorkspaceDescriptorService } from "../workspace/lfs/LfsWorkspaceDescriptorService";
import { LfsWorkspaceService } from "../workspace/lfs/LfsWorkspaceService";
import { WorkspacesEvents, WORKSPACES_BROADCAST_CHANNEL } from "../workspace/worker/api/WorkspacesEvents";
import {
  toVsrFunctionPathFromFunctionName,
  toVsrFunctionPathFromWorkspaceFilePath,
  toVsrWorkspacePath,
} from "./VirtualServiceRegistryPathConverter";
import { LfsWorkspaceFsService } from "../workspace/lfs/LfsWorkspaceFsService";

export const VIRTUAL_SERVICE_REGISTRY_PATH_PREFIX = "sandbox::";
export const VIRTUAL_SERVICE_REGISTRY_EVENTS_PREFIX = "VSR";
const VIRTUAL_SERVICE_REGISTRY_DESCRIPTOR_DATABASE_NAME = "registryGroup";
const MAX_NEW_FILE_INDEX_ATTEMPTS = 10;

interface Props {
  children: React.ReactNode;
}

export function VirtualServiceRegistryContextProvider(props: Props) {
  const workspaces = useWorkspaces();

  const vsrStorageService = useMemo(() => new LfsStorageService(), []);
  const vsrDescriptorService = useMemo(
    () => new LfsWorkspaceDescriptorService(VIRTUAL_SERVICE_REGISTRY_DESCRIPTOR_DATABASE_NAME, vsrStorageService),
    [vsrStorageService]
  );
  const vsrService = useMemo(
    () =>
      new LfsWorkspaceService({
        storageService: vsrStorageService,
        descriptorService: vsrDescriptorService,
        fsMountPoint: VIRTUAL_SERVICE_REGISTRY_PATH_PREFIX,
        broadcastChannelPrefix: VIRTUAL_SERVICE_REGISTRY_EVENTS_PREFIX,
      }),
    [vsrStorageService, vsrDescriptorService]
  );
  const vsrFsService = useMemo(
    () => new LfsWorkspaceFsService(vsrDescriptorService, toVsrWorkspacePath),
    [vsrDescriptorService]
  );

  const listVsrWorkspaces = useCallback(async () => vsrDescriptorService.listAll(), [vsrDescriptorService]);

  const renameVsrFile = useCallback(
    async (args: { vsrFile: WorkspaceFile; newFileNameWithoutExtension: string }) =>
      vsrService.renameFile({
        fs: await vsrFsService.getFs(args.vsrFile.workspaceId),
        file: args.vsrFile,
        broadcastArgs: { broadcast: false },
        ...args,
      }),
    [vsrFsService, vsrService]
  );

  const getVsrFiles = useCallback(
    async (args: { vsrWorkspaceId: string; globPattern?: string }) =>
      vsrService.getFilesWithLazyContent({
        fs: await vsrFsService.getFs(args.vsrWorkspaceId),
        workspaceId: args.vsrWorkspaceId,
        ...args,
      }),
    [vsrService, vsrFsService]
  );

  const getVsrFile = useCallback(
    async (args: { vsrWorkspaceId: string; relativePath: string }) =>
      vsrService.getFile({
        fs: await vsrFsService.getFs(args.vsrWorkspaceId),
        relativePath: toVsrFunctionPathFromWorkspaceFilePath({
          vsrWorkspaceId: args.vsrWorkspaceId,
          relativePath: args.relativePath,
        }),
        workspaceId: args.vsrWorkspaceId,
      }),
    [vsrService, vsrFsService]
  );

  const deleteVsrFile = useCallback(
    async (args: { vsrFile: WorkspaceFile }) =>
      vsrService.deleteFile({
        fs: await vsrFsService.getFs(args.vsrFile.workspaceId),
        file: args.vsrFile,
        broadcastArgs: { broadcast: false },
      }),
    [vsrService, vsrFsService]
  );

  const updateVsrFile = useCallback(
    async (args: { vsrFile: WorkspaceFile; getNewContents: () => Promise<string> }) =>
      vsrService.updateFile({
        fs: await vsrFsService.getFs(args.vsrFile.workspaceId),
        file: args.vsrFile,
        broadcastArgs: { broadcast: false },
        ...args,
      }),
    [vsrService, vsrFsService]
  );

  const addVsrFileForWorkspaceFile = useCallback(
    async (workspaceFile: WorkspaceFile) => {
      const workspaceId = workspaceFile.workspaceId;
      const vsrFunction = new VirtualServiceRegistryFunction(workspaceFile);
      const vsrFunctionPath = toVsrFunctionPathFromFunctionName({
        vsrWorkspaceId: workspaceId,
        vsrFunctionName: vsrFunction.name,
      });
      const vsrFunctionContent = await vsrFunction.getOpenApiSpec().then((content) => encoder.encode(content));

      const fs = await vsrFsService.getFs(workspaceId);
      for (let i = 0; i < MAX_NEW_FILE_INDEX_ATTEMPTS; i++) {
        if (
          await vsrService.existsFile({
            fs,
            workspaceId,
            relativePath: vsrFunctionPath,
          })
        ) {
          continue;
        }

        const newFile = new WorkspaceFile({
          workspaceId,
          relativePath: vsrFunctionPath,
          getFileContents: () => Promise.resolve(vsrFunctionContent),
        });
        await vsrService.createOrOverwriteFile({ fs, file: newFile, broadcastArgs: { broadcast: false } });
        return newFile;
      }

      throw new Error("Max attempts of new empty file exceeded.");
    },
    [vsrFsService, vsrService]
  );

  useEffect(() => {
    const workspacesBroadcastChannel = new BroadcastChannel(WORKSPACES_BROADCAST_CHANNEL);

    workspacesBroadcastChannel.onmessage = async ({ data }: MessageEvent<WorkspacesEvents>) => {
      if (data.type === "ADD_WORKSPACE") {
        if (await vsrDescriptorService.exists(data.workspaceId)) {
          return;
        }
        const workspaceDescriptor = await workspaces.getWorkspace({ workspaceId: data.workspaceId });
        const storeRegistryFiles = async (vsrDescriptor: WorkspaceDescriptor) => {
          const workflowFiles = await workspaces.getFiles({
            workspaceId: vsrDescriptor.workspaceId,
            globPattern: GLOB_PATTERN.sw_spec,
          });

          const filesSpecs = workflowFiles.map((file) => {
            const vsrFunction = new VirtualServiceRegistryFunction(file);
            return new LfsStorageFile({
              path: `/${toVsrFunctionPathFromFunctionName({
                vsrWorkspaceId: data.workspaceId,
                vsrFunctionName: vsrFunction.name,
              })}`,
              getFileContents: () => vsrFunction.getOpenApiSpec().then((content) => encoder.encode(content)),
            });
          });

          const fs = await vsrFsService.getFs(vsrDescriptor.workspaceId);
          await vsrStorageService.createFiles(fs, filesSpecs);
          return vsrService.getFilesWithLazyContent({ fs, workspaceId: vsrDescriptor.workspaceId });
        };

        await vsrService.create({
          storeFiles: storeRegistryFiles,
          workspaceDescriptor,
          broadcastArgs: { broadcast: false },
        });
      } else if (data.type === "DELETE_WORKSPACE") {
        if (await vsrDescriptorService.exists(data.workspaceId)) {
          await vsrService.delete({ workspaceId: data.workspaceId, broadcastArgs: { broadcast: false } });
        }
      } else if (data.type === "RENAME_WORKSPACE") {
        const workspaceDescriptor = await workspaces.getWorkspace({ workspaceId: data.workspaceId });
        const vsrDescriptor = await vsrDescriptorService.get(data.workspaceId);
        if (vsrDescriptor.name === workspaceDescriptor.name) {
          return;
        }
        await vsrService.rename({
          workspaceId: data.workspaceId,
          newName: workspaceDescriptor.name,
          broadcastArgs: { broadcast: false },
        });
      }
    };

    return () => {
      workspacesBroadcastChannel.close();
    };
  }, [vsrService, vsrFsService, vsrDescriptorService, workspaces, vsrStorageService]);

  const value = useMemo(
    () => ({
      listVsrWorkspaces,
      addVsrFileForWorkspaceFile,
      deleteVsrFile,
      renameVsrFile,
      updateVsrFile,
      getVsrFiles,
      getVsrFile,
    }),
    [
      listVsrWorkspaces,
      addVsrFileForWorkspaceFile,
      deleteVsrFile,
      renameVsrFile,
      updateVsrFile,
      getVsrFiles,
      getVsrFile,
    ]
  );

  return (
    <VirtualServiceRegistryContext.Provider value={value}>{props.children}</VirtualServiceRegistryContext.Provider>
  );
}
