/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates.
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
import { useCallback, useEffect, useRef, useState } from "react";
import { decoder, useWorkspaces, WorkspaceFile } from "../workspace/WorkspacesContext";
import { FileLabel } from "../workspace/components/FileLabel";
import { Flex, FlexItem } from "@patternfly/react-core/dist/js/layouts/Flex";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import {
  DrilldownMenu,
  Menu,
  MenuContent,
  MenuInput,
  MenuItem,
  MenuList,
} from "@patternfly/react-core/dist/js/components/Menu";
import { SupportedFileExtensions, useEditorEnvelopeLocator } from "../envelopeLocator/EditorEnvelopeLocatorContext";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button";
import { AlertsController, useAlert } from "../alerts/Alerts";
import { Alert, AlertActionCloseButton } from "@patternfly/react-core/dist/js/components/Alert";
import { basename, extname } from "path";
import { ImportFromUrlForm } from "../workspace/components/ImportFromUrlForm";
import { UrlType } from "../workspace/hooks/ImportableUrlHooks";
import { useRoutes } from "../navigation/Hooks";
import { isSandboxAsset, resolveExtension } from "../fixme";

export function NewFileDropdownMenu(props: {
  alerts: AlertsController | undefined;
  destinationDirPath: string;
  workspaceId: string;
  onAddFile: (file?: WorkspaceFile) => Promise<void>;
}) {
  const uploadFileInputRef = useRef<HTMLInputElement>(null);

  const [menuDrilledIn, setMenuDrilledIn] = useState<string[]>([]);
  const [drilldownPath, setDrilldownPath] = useState<string[]>([]);
  const [menuHeights, setMenuHeights] = useState<{ [key: string]: number }>({});
  const [activeMenu, setActiveMenu] = useState("addFileRootMenu");

  const drillIn = useCallback((fromMenuId, toMenuId, pathId) => {
    setMenuDrilledIn((prev) => [...prev, fromMenuId]);
    setDrilldownPath((prev) => [...prev, pathId]);
    setActiveMenu(toMenuId);
  }, []);

  const drillOut = useCallback((toMenuId) => {
    setMenuDrilledIn((prev) => prev.slice(0, prev.length - 1));
    setDrilldownPath((prev) => prev.slice(0, prev.length - 1));
    setActiveMenu(toMenuId);
  }, []);

  const setHeight = useCallback((menuId: string, height: number) => {
    // do not try to simplify this ternary's condition as some heights are 0, resulting in an infinite loop.
    setMenuHeights((prev) => (prev[menuId] !== undefined ? prev : { ...prev, [menuId]: height }));
  }, []);

  const workspaces = useWorkspaces();
  const routes = useRoutes();
  const editorEnvelopeLocator = useEditorEnvelopeLocator();

  const addEmptyFile = useCallback(
    async (extension: SupportedFileExtensions) => {
      if (extension === "db") {
        //FIXME: remove it
        return;
      }

      const file = await workspaces.addEmptyFile({
        fs: await workspaces.fsService.getWorkspaceFs(props.workspaceId),
        workspaceId: props.workspaceId,
        destinationDirRelativePath: props.destinationDirPath,
        extension,
      });
      await props.onAddFile(file);
    },
    [props, workspaces]
  );

  const urlInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (activeMenu === "importFromUrlMenu") {
      setTimeout(() => {
        urlInputRef.current?.focus();
      }, 500);
    }
  }, [activeMenu, urlInputRef]);

  const [isImporting, setImporting] = useState(false);
  const [importingError, setImportingError] = useState<string>();

  const importFromUrl = useCallback(
    async (urlString?: string) => {
      if (!urlString) {
        return;
      }

      setImporting(true);
      setImportingError(undefined);

      try {
        const url = new URL(urlString);
        const extension = resolveExtension(url.pathname);
        const name = decodeURIComponent(basename(url.pathname, `.${extension}`));

        const response = await fetch(urlString);
        if (!response.ok) {
          setImportingError(`${response.status}${response.statusText ? `- ${response.statusText}` : ""}`);
          return;
        }

        const content = await response.text();

        const file = await workspaces.addFile({
          fs: await workspaces.fsService.getWorkspaceFs(props.workspaceId),
          workspaceId: props.workspaceId,
          name,
          extension,
          content,
          destinationDirRelativePath: props.destinationDirPath,
        });
        await props.onAddFile(file);
      } catch (e) {
        setImportingError(e.toString());
      } finally {
        // setImporting(false);
      }
    },
    [props, workspaces]
  );

  const addSample = useCallback(
    (extension: SupportedFileExtensions) => {
      if (extension === "db") {
        //FIXME: remove it
        return;
      }
      importFromUrl(
        `${window.location.origin}${window.location.pathname}${routes.static.sample.path({
          type: extension,
          name: "greetings",
        })}`
      );
    },
    [importFromUrl, routes]
  );

  const successfullyUploadedAlert = useAlert(
    props.alerts,
    useCallback(({ close }, staticArgs: { qtt: number }) => {
      return (
        <Alert
          variant="success"
          title={`Successfully uploaded ${staticArgs.qtt} file(s).`}
          actionClose={<AlertActionCloseButton onClose={close} />}
        />
      );
    }, []),
    { durationInSeconds: 4 }
  );

  const handleFileUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const filesToUpload = await Promise.all(
        Array.from(e.target.files ?? []).map(async (file: File) => {
          return {
            path: file.name,
            content: await new Promise<string>((res) => {
              const reader = new FileReader();
              reader.onload = (event: ProgressEvent<FileReader>) =>
                res(decoder.decode(event.target?.result as ArrayBuffer));
              reader.readAsArrayBuffer(file);
            }),
          };
        })
      );

      const uploadedFiles = await Promise.all(
        filesToUpload.map(async (file) => {
          return workspaces.addFile({
            fs: await workspaces.fsService.getWorkspaceFs(props.workspaceId),
            workspaceId: props.workspaceId,
            name: file.path,
            extension: extname(file.path).replace(".", ""),
            content: file.content,
            destinationDirRelativePath: props.destinationDirPath,
          });
        })
      );

      const fileToGoTo = uploadedFiles.filter((file) => isSandboxAsset(file.relativePath)).pop();

      await props.onAddFile(fileToGoTo);
      successfullyUploadedAlert.show({ qtt: uploadedFiles.length });
    },
    [workspaces, props, successfullyUploadedAlert]
  );

  const [url, setUrl] = useState("");

  return (
    <Menu
      style={{ boxShadow: "none", minWidth: "400px" }}
      id="addFileRootMenu"
      containsDrilldown={true}
      onDrillIn={drillIn}
      onDrillOut={drillOut}
      activeMenu={activeMenu}
      onGetMenuHeight={setHeight}
      drilldownItemPath={drilldownPath}
      drilledInMenus={menuDrilledIn}
    >
      <MenuContent menuHeight={`${menuHeights[activeMenu]}px`}>
        <MenuList>
          <MenuItem
            itemId={"newSwfItemId"}
            onClick={() => addEmptyFile("sw.json")}
            description="Serverless Workflow files are used to define orchestration logic for services."
          >
            <b>
              <FileLabel style={{ marginBottom: "4px" }} extension={"sw.json"} />
            </b>
          </MenuItem>
          <MenuItem
            itemId={"newSdItemId"}
            onClick={() => addEmptyFile("yard.json")}
            description="Serverless Decision files are used to define decision logic for services."
          >
            <b>
              <FileLabel style={{ marginBottom: "4px" }} extension={"yard.json"} />
            </b>
          </MenuItem>
          <MenuItem
            itemId={"newDashboardItemId"}
            onClick={() => addEmptyFile("db")}
            description="Dashboard files are used to define data visualization extracted from business applications."
          >
            <b>
              <FileLabel style={{ marginBottom: "4px" }} extension={"db"} />
            </b>
          </MenuItem>
          <Divider />
          <MenuItem
            description={"Try sample models"}
            itemId="samplesItemId"
            direction={"down"}
            drilldownMenu={
              <DrilldownMenu id={"samplesMenu"}>
                <MenuItem direction="up">Back</MenuItem>
                <Divider />
                <MenuItem
                  onClick={() => addSample("sw.json")}
                  description="Serverless Workflow files are used to define orchestration logic for services."
                >
                  <Flex>
                    <FlexItem>Sample</FlexItem>
                    <FlexItem>
                      <FileLabel extension={"sw.json"} />
                    </FlexItem>
                  </Flex>
                </MenuItem>
                <MenuItem
                  onClick={() => addSample("yard.json")}
                  description="Serverless Decision files are used to define decision logic for services."
                >
                  <Flex>
                    <FlexItem>Sample</FlexItem>
                    <FlexItem>
                      <FileLabel extension={"yard.json"} />
                    </FlexItem>
                  </Flex>
                </MenuItem>
                <MenuItem
                  onClick={() => addSample("db")}
                  description="Dashboard files are used to define data visualization extracted from business applications."
                >
                  <Flex>
                    <FlexItem>Sample</FlexItem>
                    <FlexItem>
                      <FileLabel extension={"db"} />
                    </FlexItem>
                  </Flex>
                </MenuItem>
              </DrilldownMenu>
            }
          >
            Samples
          </MenuItem>
          <Divider />
          <MenuItem
            itemId={"importFromUrlItemId"}
            direction={"down"}
            drilldownMenu={
              <DrilldownMenu id={"importFromUrlMenu"}>
                <MenuItem direction="up">Back</MenuItem>
                <Divider />
                <MenuInput>
                  <ImportFromUrlForm
                    importingError={importingError}
                    allowedTypes={[UrlType.FILE, UrlType.GIST_FILE, UrlType.GITHUB_FILE]}
                    urlInputRef={urlInputRef}
                    url={url}
                    onChange={(url) => {
                      setUrl(url);
                      setImportingError(undefined);
                    }}
                    onSubmit={() => importFromUrl(url)}
                  />
                </MenuInput>
                <MenuInput>
                  <Button
                    variant={url.length > 0 ? ButtonVariant.primary : ButtonVariant.secondary}
                    isLoading={isImporting}
                    onClick={() => importFromUrl(url)}
                  >
                    Import
                  </Button>
                </MenuInput>
              </DrilldownMenu>
            }
          >
            From URL
          </MenuItem>
          <MenuItem itemId={"importUploadingItemId"} onClick={() => uploadFileInputRef.current?.click()}>
            Upload...
            <input
              ref={uploadFileInputRef}
              type="file"
              multiple={true}
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
}
