import { SceSimEditor } from "./SceSimEditor";
import { SceSimEditorChannelApi } from "../api";
import { EditorFactory, EditorInitArgs, KogitoEditorEnvelopeContextType } from "@kie-tools-core/editor/dist/api";
export declare class SceSimEditorFactory implements EditorFactory<SceSimEditor, SceSimEditorChannelApi> {
  private readonly gwtEditorEnvelopeConfig;
  constructor(gwtEditorEnvelopeConfig: { shouldLoadResourcesDynamically: boolean });
  createEditor(
    ctx: KogitoEditorEnvelopeContextType<SceSimEditorChannelApi>,
    initArgs: EditorInitArgs
  ): Promise<SceSimEditor>;
}
//# sourceMappingURL=SceSimEditorFactory.d.ts.map
