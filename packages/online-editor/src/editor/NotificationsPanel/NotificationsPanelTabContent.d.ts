import * as React from "react";
import { Notification, NotificationsApi } from "@kie-tools-core/notifications/dist/api";
interface Props {
  name: string;
  onNotificationsLengthChange: (name: string, newQtt: number) => void;
  expandAll: boolean | undefined;
  setExpandAll: React.Dispatch<boolean | undefined>;
}
export declare const NotificationPanelTabContent: React.ForwardRefExoticComponent<
  Props & React.RefAttributes<NotificationsApi>
>;
interface NotificationDrawerGroupProps {
  path: string;
  notifications: Notification[];
  allExpanded: boolean | undefined;
  setAllExpanded: React.Dispatch<boolean | undefined>;
}
export declare function NotificationTabDrawerGroup(props: NotificationDrawerGroupProps): JSX.Element;
export {};
//# sourceMappingURL=NotificationsPanelTabContent.d.ts.map
