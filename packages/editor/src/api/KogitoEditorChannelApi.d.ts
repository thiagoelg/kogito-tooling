import { CapabilityChannelApi } from "@kie-tools-core/backend/dist/channel-api";
import { NotificationsApi } from "@kie-tools-core/notifications/dist/api";
import { GuidedTourChannelApi } from "@kie-tools-core/guided-tour/dist/api";
import { I18nChannelApi } from "@kie-tools-core/i18n/dist/api";
import { WorkspaceApi } from "@kie-tools-core/workspace/dist/api";
import { EditorContent } from "./EditorContent";
import { StateControlCommand } from "./StateControlCommand";
export interface KogitoEditorChannelApi
  extends GuidedTourChannelApi,
    I18nChannelApi,
    CapabilityChannelApi,
    WorkspaceApi,
    NotificationsApi {
  kogitoEditor_ready(): void;
  kogitoEditor_setContentError(content: EditorContent): void;
  kogitoEditor_stateControlCommandUpdate(command: StateControlCommand): void;
  kogitoEditor_contentRequest(): Promise<EditorContent>;
}
//# sourceMappingURL=KogitoEditorChannelApi.d.ts.map
