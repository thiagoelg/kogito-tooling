import * as React from "react";
import { PanelId } from "../EditorPageDockDrawer";
import { Notification } from "@kie-tools-core/notifications/dist/api";
interface PropsCommon {
  isSelected: boolean;
  onChange: (id: PanelId) => void;
}
interface PropsEnabled extends PropsCommon {
  isDisabled: false;
}
interface PropsDisabled extends PropsCommon {
  isDisabled: true;
  disabledReason: string;
}
declare type Props = PropsEnabled | PropsDisabled;
interface NotificationsWithPath {
  path: string;
  notifications: Notification[];
}
export interface NotificationsPanelDockToggleRef {
  getNotifications: () => Map<string, NotificationsWithPath>;
  setNewNotifications: (tabName: string, notificationsWithPath: NotificationsWithPath) => void;
  deleteNotificationsFromTab: (tabName: string) => void;
}
export declare const NotificationsPanelDockToggle: React.ForwardRefExoticComponent<
  Props & React.RefAttributes<NotificationsPanelDockToggleRef>
>;
export {};
//# sourceMappingURL=NotificationsPanelDockToggle.d.ts.map
