import { EditorInitArgs } from "./KogitoEditorEnvelopeApi";
import { Editor } from "./Editor";
import { KogitoEditorEnvelopeContextType } from "./KogitoEditorEnvelopeContext";
import { ApiDefinition } from "@kie-tools-core/envelope-bus/dist/api";
import { KogitoEditorChannelApi } from "./KogitoEditorChannelApi";
export interface EditorFactory<
  E extends Editor,
  ChannelApi extends KogitoEditorChannelApi & ApiDefinition<ChannelApi>
> {
  createEditor(envelopeContext: KogitoEditorEnvelopeContextType<ChannelApi>, initArgs: EditorInitArgs): Promise<E>;
}
//# sourceMappingURL=EditorFactory.d.ts.map
