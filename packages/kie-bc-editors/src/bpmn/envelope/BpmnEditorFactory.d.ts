import { BpmnEditor } from "./BpmnEditor";
import { BpmnEditorChannelApi } from "../api";
import { EditorFactory, EditorInitArgs, KogitoEditorEnvelopeContextType } from "@kie-tools-core/editor/dist/api";
export declare class BpmnEditorFactory implements EditorFactory<BpmnEditor, BpmnEditorChannelApi> {
  private readonly gwtEditorEnvelopeConfig;
  constructor(gwtEditorEnvelopeConfig: { shouldLoadResourcesDynamically: boolean });
  createEditor(
    ctx: KogitoEditorEnvelopeContextType<BpmnEditorChannelApi>,
    initArgs: EditorInitArgs
  ): Promise<BpmnEditor>;
}
//# sourceMappingURL=BpmnEditorFactory.d.ts.map
