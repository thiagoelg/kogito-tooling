import {
  ContentType,
  KogitoEdit,
  ResourceContent,
  ResourceContentRequest,
  ResourceListRequest,
  ResourcesList,
} from "@kie-tools-core/workspace/dist/api";
import { EditorContent, KogitoEditorChannelApi, StateControlCommand } from "@kie-tools-core/editor/dist/api";
import { Tutorial, UserInteraction } from "@kie-tools-core/guided-tour/dist/api";
import { EmbeddedEditorFile, StateControl } from "@kie-tools-core/editor/dist/channel";
import { Notification } from "@kie-tools-core/notifications/dist/api";
export declare class KogitoEditorChannelApiImpl implements KogitoEditorChannelApi {
  private readonly stateControl;
  private readonly file;
  private readonly locale;
  private readonly overrides;
  private readonly resources?;
  constructor(
    stateControl: StateControl,
    file: EmbeddedEditorFile,
    locale: string,
    overrides: Partial<KogitoEditorChannelApi>,
    resources?:
      | Map<
          string,
          {
            contentType: ContentType;
            content: Promise<string>;
          }
        >
      | undefined
  );
  kogitoWorkspace_newEdit(edit: KogitoEdit): void;
  kogitoEditor_stateControlCommandUpdate(command: StateControlCommand): void;
  kogitoGuidedTour_guidedTourUserInteraction(userInteraction: UserInteraction): void;
  kogitoGuidedTour_guidedTourRegisterTutorial(tutorial: Tutorial): void;
  kogitoEditor_contentRequest(): Promise<{
    content: string;
    path: string;
  }>;
  kogitoWorkspace_resourceContentRequest(request: ResourceContentRequest): Promise<ResourceContent>;
  kogitoWorkspace_resourceListRequest(request: ResourceListRequest): Promise<ResourcesList>;
  kogitoWorkspace_openFile(path: string): void;
  kogitoEditor_ready(): void;
  kogitoEditor_setContentError(editorContent: EditorContent): void;
  kogitoI18n_getLocale(): Promise<string>;
  kogitoNotifications_createNotification(notification: Notification): void;
  kogitoNotifications_setNotifications(path: string, notifications: Notification[]): void;
  kogitoNotifications_removeNotifications(path: string): void;
}
//# sourceMappingURL=KogitoEditorChannelApiImpl.d.ts.map
