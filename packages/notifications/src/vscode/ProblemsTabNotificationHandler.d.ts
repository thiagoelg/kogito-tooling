import { Notification, NotificationsApi } from "../api";
export declare class ProblemsTabNotificationHandler implements NotificationsApi {
  private readonly diagnosticCollection;
  kogitoNotifications_createNotification(notification: Notification): void;
  kogitoNotifications_setNotifications(path: string, notifications: Notification[]): void;
  kogitoNotifications_removeNotifications(path: string): void;
  private buildDiagnostic;
  private getSeverity;
}
//# sourceMappingURL=ProblemsTabNotificationHandler.d.ts.map
