import { EditorContent } from "./EditorContent";
import { KeyboardShortcutsEnvelopeApi } from "@kie-tools-core/keyboard-shortcuts/dist/api";
import { GuidedTourEnvelopeApi } from "@kie-tools-core/guided-tour/dist/api";
import { I18nEnvelopeApi } from "@kie-tools-core/i18n/dist/api";
import { Notification } from "@kie-tools-core/notifications/dist/api";
export interface Association {
  origin: string;
  envelopeServerId: string;
}
export declare enum ChannelType {
  VSCODE = "VSCODE",
  ONLINE = "ONLINE",
  GITHUB = "GITHUB",
  DESKTOP = "DESKTOP",
  EMBEDDED = "EMBEDDED",
  OTHER = "OTHER",
  ONLINE_MULTI_FILE = "ONLINE_MULTI_FILE",
}
export interface EditorInitArgs {
  resourcesPathPrefix: string;
  fileExtension: string;
  initialLocale: string;
  isReadOnly: boolean;
  channel: ChannelType;
}
export interface KogitoEditorEnvelopeApi extends KeyboardShortcutsEnvelopeApi, GuidedTourEnvelopeApi, I18nEnvelopeApi {
  kogitoEditor_contentChanged(content: EditorContent): Promise<void>;
  kogitoEditor_editorUndo(): void;
  kogitoEditor_editorRedo(): void;
  kogitoEditor_initRequest(association: Association, editorInit: EditorInitArgs): Promise<void>;
  kogitoEditor_contentRequest(): Promise<EditorContent>;
  kogitoEditor_previewRequest(): Promise<string>;
  kogitoEditor_validate(): Promise<Notification[]>;
}
//# sourceMappingURL=KogitoEditorEnvelopeApi.d.ts.map
