import { Notification, NotificationsApi } from "../api";
import { WorkspaceApi } from "@kie-tools-core/workspace/dist/api";
import { I18n } from "@kie-tools-core/i18n/dist/core";
export declare class VsCodeNotificationsApi implements NotificationsApi {
  private readonly workspaceApi;
  private readonly i18n;
  private readonly strategies;
  constructor(workspaceApi: WorkspaceApi, i18n?: I18n<import("./i18n").NotificationsApiVsCodeI18nDictionary>);
  kogitoNotifications_createNotification(notification: Notification): void;
  kogitoNotifications_setNotifications(path: string, notifications: Notification[]): void;
  kogitoNotifications_removeNotifications(path: string): void;
  private handle;
  private get;
}
//# sourceMappingURL=VsCodeNotificationsApi.d.ts.map
