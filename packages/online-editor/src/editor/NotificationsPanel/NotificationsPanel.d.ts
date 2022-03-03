import * as React from "react";
import { NotificationsApi } from "@kie-tools-core/notifications/dist/api";
interface Props {
  tabNames: string[];
}
export interface NotificationsPanelRef {
  getTab: (name: string) => NotificationsApi | undefined;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
export declare const NotificationsPanel: React.ForwardRefExoticComponent<
  Props & React.RefAttributes<NotificationsPanelRef>
>;
export {};
//# sourceMappingURL=NotificationsPanel.d.ts.map
