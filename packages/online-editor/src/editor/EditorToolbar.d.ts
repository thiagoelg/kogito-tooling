import * as React from "react";
import { EmbeddedEditorRef } from "@kie-tools-core/editor/dist/embedded";
import { AlertsController } from "../alerts/Alerts";
import { WorkspaceFile } from "../workspace/WorkspacesContext";
import { WorkspaceKind } from "../workspace/model/WorkspaceOrigin";
import { EditorPageDockDrawerRef } from "./EditorPageDockDrawer";
export interface Props {
  alerts: AlertsController | undefined;
  alertsRef: (controller: AlertsController) => void;
  editor: EmbeddedEditorRef | undefined;
  workspaceFile: WorkspaceFile;
  editorPageDock: EditorPageDockDrawerRef | undefined;
}
export declare function EditorToolbar(props: Props): JSX.Element;
export declare function PushToGitHubAlertActionLinks(props: {
  onPush: () => void;
  canPush?: boolean;
  kind?: WorkspaceKind;
  remoteRef?: string;
}): JSX.Element;
export declare function KebabDropdown(props: {
  id: string;
  items: React.ReactNode[];
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}): JSX.Element;
//# sourceMappingURL=EditorToolbar.d.ts.map
