import * as React from "react";
import { NotificationsPanelRef } from "./NotificationsPanel/NotificationsPanel";
import { WorkspaceFile } from "../workspace/WorkspacesContext";
import { Notification } from "@kie-tools-core/notifications/dist/api";
export declare enum PanelId {
  DMN_RUNNER_TABULAR = "dmn-runner-tabular",
  NOTIFICATIONS_PANEL = "notifications-panel",
  NONE = "",
}
interface EditorPageDockDrawerProps {
  isEditorReady?: boolean;
  workspaceFile: WorkspaceFile;
}
export interface EditorPageDockDrawerRef {
  open: (panelId: PanelId) => void;
  toggle: (panelId: PanelId) => void;
  close: () => void;
  getNotificationsPanel: () => NotificationsPanelRef | undefined;
  setNotifications: (tabName: string, path: string, notifications: Notification[]) => void;
}
export declare const EditorPageDockDrawer: React.ForwardRefExoticComponent<
  EditorPageDockDrawerProps & {
    children?: React.ReactNode;
  } & React.RefAttributes<EditorPageDockDrawerRef>
>;
export {};
//# sourceMappingURL=EditorPageDockDrawer.d.ts.map
