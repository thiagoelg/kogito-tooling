import { ActiveWorkspace } from "../workspace/model/ActiveWorkspace";
import { WorkspaceFile } from "../workspace/WorkspacesContext";
import * as React from "react";
import { WorkspaceDescriptor } from "../workspace/model/WorkspaceDescriptor";
declare enum FilesDropdownMode {
  LIST_MODELS = 0,
  LIST_MODELS_AND_OTHERS = 1,
  CAROUSEL = 2,
}
export declare function FileSwitcher(props: { workspace: ActiveWorkspace; workspaceFile: WorkspaceFile }): JSX.Element;
export declare function WorkspacesMenuItems(props: {
  activeMenu: string;
  currentWorkspace: ActiveWorkspace;
  onSelectFile: () => void;
  filesDropdownMode: FilesDropdownMode;
  setFilesDropdownMode: React.Dispatch<React.SetStateAction<FilesDropdownMode>>;
}): JSX.Element;
export declare function FileSvg(props: { workspaceFile: WorkspaceFile }): JSX.Element;
export declare function SearchableFilesMenuGroup(props: {
  maxHeight: string;
  shouldFocusOnSearch: boolean;
  filesDropdownMode: FilesDropdownMode;
  label: string;
  allFiles: WorkspaceFile[];
  children: (args: { filteredFiles: WorkspaceFile[] }) => React.ReactNode;
}): JSX.Element;
export declare function FilesMenuItems(props: {
  workspaceDescriptor: WorkspaceDescriptor;
  workspaceFiles: WorkspaceFile[];
  currentWorkspaceFile?: WorkspaceFile;
  onSelectFile: () => void;
  filesDropdownMode: FilesDropdownMode;
  setFilesDropdownMode: React.Dispatch<React.SetStateAction<FilesDropdownMode>>;
  shouldFocusOnSearch: boolean;
}): JSX.Element;
export declare function FileName(props: { file: WorkspaceFile }): JSX.Element;
export declare function FileMenuItem(props: { file: WorkspaceFile; onSelectFile: () => void }): JSX.Element;
export declare function FilesDropdownModeIcons(props: {
  filesDropdownMode: FilesDropdownMode;
  setFilesDropdownMode: React.Dispatch<React.SetStateAction<FilesDropdownMode>>;
}): JSX.Element;
export {};
//# sourceMappingURL=FileSwitcher.d.ts.map
