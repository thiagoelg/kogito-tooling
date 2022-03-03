import { WorkspaceApi } from "@kie-tools-core/workspace/dist/api";
import { Notification, NotificationsApi } from "../api";
import { I18n } from "@kie-tools-core/i18n/dist/core";
import { NotificationsApiVsCodeI18nDictionary } from "./i18n";
export declare class PopupMessagesNotificationHandler implements NotificationsApi {
  private readonly workspaceApi;
  private readonly i18n;
  constructor(workspaceApi: WorkspaceApi, i18n: I18n<NotificationsApiVsCodeI18nDictionary>);
  kogitoNotifications_createNotification(notification: Notification): void;
  kogitoNotifications_setNotifications(path: string, notifications: Notification[]): void;
  kogitoNotifications_removeNotifications(path: string): void;
  private getHandleStrategyForSeverity;
  private handleStrategy;
  private consolidateMessages;
}
//# sourceMappingURL=PopupMessagesNotificationHandler.d.ts.map
