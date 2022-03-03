import { Editor, KogitoEditorChannelApi, KogitoEditorEnvelopeApi, KogitoEditorEnvelopeContextType } from "../api";
import { DefaultKeyboardShortcutsService } from "@kie-tools-core/keyboard-shortcuts/dist/envelope";
import { EditorEnvelopeViewApi } from "./EditorEnvelopeView";
import { Envelope, EnvelopeApiFactory } from "@kie-tools-core/envelope";
import { I18nService } from "@kie-tools-core/i18n/dist/envelope";
import { ApiDefinition } from "@kie-tools-core/envelope-bus/dist/api";
export declare class KogitoEditorEnvelope<
  E extends Editor,
  EnvelopeApi extends KogitoEditorEnvelopeApi & ApiDefinition<EnvelopeApi>,
  ChannelApi extends KogitoEditorChannelApi & ApiDefinition<ChannelApi>
> {
  private readonly kogitoEditorEnvelopeApiFactory;
  private readonly keyboardShortcutsService;
  private readonly i18nService;
  private readonly envelope;
  private readonly context;
  constructor(
    kogitoEditorEnvelopeApiFactory: EnvelopeApiFactory<
      EnvelopeApi,
      ChannelApi,
      EditorEnvelopeViewApi<E>,
      KogitoEditorEnvelopeContextType<ChannelApi>
    >,
    keyboardShortcutsService: DefaultKeyboardShortcutsService,
    i18nService: I18nService,
    envelope: Envelope<EnvelopeApi, ChannelApi, EditorEnvelopeViewApi<E>, KogitoEditorEnvelopeContextType<ChannelApi>>,
    context?: KogitoEditorEnvelopeContextType<ChannelApi>
  );
  start(
    container: HTMLElement
  ): Promise<import("@kie-tools-core/envelope-bus/dist/envelope").EnvelopeClient<EnvelopeApi, ChannelApi>>;
  private renderView;
}
//# sourceMappingURL=KogitoEditorEnvelope.d.ts.map
