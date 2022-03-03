import {
  Association,
  Editor,
  EditorContent,
  EditorFactory,
  EditorInitArgs,
  KogitoEditorChannelApi,
  KogitoEditorEnvelopeApi,
  KogitoEditorEnvelopeContextType,
} from "../api";
import { EnvelopeApiFactoryArgs } from "@kie-tools-core/envelope";
import { EditorEnvelopeViewApi } from "./EditorEnvelopeView";
import { ChannelKeyboardEvent } from "@kie-tools-core/keyboard-shortcuts/dist/api";
import { I18n } from "@kie-tools-core/i18n/dist/core";
import { EditorEnvelopeI18n } from "./i18n";
import { ApiDefinition } from "@kie-tools-core/envelope-bus/dist/api";
export declare class KogitoEditorEnvelopeApiImpl<
  E extends Editor,
  EnvelopeApi extends KogitoEditorEnvelopeApi & ApiDefinition<EnvelopeApi> = KogitoEditorEnvelopeApi,
  ChannelApi extends KogitoEditorChannelApi & ApiDefinition<ChannelApi> = KogitoEditorChannelApi
> implements KogitoEditorEnvelopeApi
{
  private readonly args;
  private readonly editorFactory;
  private readonly i18n;
  protected view: () => EditorEnvelopeViewApi<E>;
  private capturedInitRequestYet;
  private editor;
  constructor(
    args: EnvelopeApiFactoryArgs<
      EnvelopeApi,
      ChannelApi,
      EditorEnvelopeViewApi<E>,
      KogitoEditorEnvelopeContextType<KogitoEditorChannelApi>
    >,
    editorFactory: EditorFactory<E, KogitoEditorChannelApi>,
    i18n?: I18n<EditorEnvelopeI18n>
  );
  private hasCapturedInitRequestYet;
  private ackCapturedInitRequest;
  kogitoEditor_initRequest: (association: Association, initArgs: EditorInitArgs) => Promise<void>;
  kogitoEditor_contentChanged: (editorContent: EditorContent) => Promise<void>;
  kogitoEditor_editorUndo(): void;
  kogitoEditor_editorRedo(): void;
  kogitoEditor_contentRequest(): Promise<{
    content: string;
  }>;
  kogitoEditor_previewRequest(): Promise<string>;
  kogitoGuidedTour_guidedTourElementPositionRequest: (
    selector: string
  ) => Promise<import("@kie-tools-core/guided-tour/dist/api").Rect>;
  kogitoKeyboardShortcuts_channelKeyboardEvent: (channelKeyboardEvent: ChannelKeyboardEvent) => void;
  kogitoI18n_localeChange(locale: string): void;
  kogitoEditor_validate(): Promise<import("@kie-tools-core/notifications/dist/api").Notification[]>;
  private setupI18n;
  private registerDefaultShortcuts;
}
//# sourceMappingURL=KogitoEditorEnvelopeApiImpl.d.ts.map
