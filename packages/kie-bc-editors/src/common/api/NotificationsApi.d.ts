import { Notification } from "@kie-tools-core/notifications/dist/api";
export interface NotificationsApi {
  createNotification(notification: Notification): void;
  setNotifications(path: string, notifications: Notification[]): void;
  removeNotifications(path: string): void;
}
//# sourceMappingURL=NotificationsApi.d.ts.map
