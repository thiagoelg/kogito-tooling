import { Notification } from "./Notification";
export interface NotificationsApi {
  kogitoNotifications_createNotification(notification: Notification): void;
  kogitoNotifications_setNotifications(path: string, notifications: Notification[]): void;
  kogitoNotifications_removeNotifications(path: string): void;
}
//# sourceMappingURL=NotificationsApi.d.ts.map
