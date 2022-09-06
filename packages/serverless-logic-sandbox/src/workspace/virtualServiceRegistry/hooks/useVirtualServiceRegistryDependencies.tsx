import * as React from "react";
import { useState, useEffect, useCallback, useMemo } from "react";
import { isServerlessWorkflow } from "../../../extension";
import { ActiveWorkspace } from "../../model/ActiveWorkspace";
import { getVirtualServiceRegistryDependencies, VirtualServiceRegistryGroup } from "../models/VirtualServiceRegistry";
import { useWorkspaces, WorkspaceFile } from "../../WorkspacesContext";
import { useVirtualServiceRegistry } from "../VirtualServiceRegistryContext";

export type VirtualServiceRegistryDependency = ActiveWorkspace & { registryGroup: VirtualServiceRegistryGroup };

export function useVirtualServiceRegistryDependencies(props: {
  workspace: ActiveWorkspace;
  workspaceFile: WorkspaceFile;
  deployAsProject: boolean;
  canUploadOpenApi: boolean;
}) {
  const [virtualServiceRegistryDependencies, setVirtualServiceRegistryDependencies] = useState<
    Array<VirtualServiceRegistryDependency>
  >([]);
  const workspaces = useWorkspaces();
  const virtualServiceRegistry = useVirtualServiceRegistry();

  useEffect(() => {
    const updateWorkspacesList = async () => {
      let dependencies: Array<string> = [];
      if (props.deployAsProject) {
        if (props.workspace?.files) {
          dependencies = (
            await Promise.all(
              props.workspace.files
                .map((file) => isServerlessWorkflow(file.relativePath) && getVirtualServiceRegistryDependencies(file))
                .filter((value): value is Promise<Array<string>> => Boolean(value))
            )
          ).flat();
        }
      } else {
        dependencies = await getVirtualServiceRegistryDependencies(props.workspaceFile);
      }

      setVirtualServiceRegistryDependencies(
        await Promise.all(
          dependencies.map(async (workspaceId) => ({
            descriptor: await workspaces.descriptorService.get(workspaceId),
            registryGroup: await virtualServiceRegistry.vsrGroupService.get(workspaceId),
            files: await workspaces.getFiles({ fs: await workspaces.fsService.getFs(workspaceId), workspaceId }),
          }))
        )
      );
    };
    updateWorkspacesList();
  }, [
    props.deployAsProject,
    props.workspace.files,
    props.workspaceFile,
    virtualServiceRegistry.vsrGroupService,
    workspaces,
  ]);

  const needsDependencyDeployment = useMemo(
    () => virtualServiceRegistryDependencies.length > 0,
    [virtualServiceRegistryDependencies]
  );

  return { needsDependencyDeployment, virtualServiceRegistryDependencies };
}
