import { I18n } from "@kie-tools-core/i18n/dist/core/I18n";
import { NotificationsApi } from "@kie-tools-core/notifications/dist/api";
import { WorkspaceApi } from "@kie-tools-core/workspace/dist/api";
import * as vscode from "vscode";
import { BackendI18n } from "../../i18n";
import { VsCodeBackendProxy } from "../VsCodeBackendProxy";
export declare function registerTestScenarioRunnerCommand(args: {
  command: string;
  context: vscode.ExtensionContext;
  backendProxy: VsCodeBackendProxy;
  backendI18n: I18n<BackendI18n>;
  workspaceApi: WorkspaceApi;
  notificationsApi: NotificationsApi;
}): void;
//# sourceMappingURL=runTestScenarioCommand.d.ts.map
