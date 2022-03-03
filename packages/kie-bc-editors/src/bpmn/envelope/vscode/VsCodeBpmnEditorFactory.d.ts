import { EditorFactory, EditorInitArgs, KogitoEditorEnvelopeContextType } from "@kie-tools-core/editor/dist/api";
import { BpmnEditor } from "../BpmnEditor";
import { JavaCodeCompletionApi } from "@kie-tools-core/vscode-java-code-completion/dist/api";
import { VsCodeBpmnEditorChannelApi } from "./VsCodeBpmnEditorChannelApi";
export interface CustomWindow extends Window {
  envelope: {
    javaCodeCompletionService: JavaCodeCompletionApi;
  };
}
export declare class VsCodeBpmnEditorFactory implements EditorFactory<BpmnEditor, VsCodeBpmnEditorChannelApi> {
  private readonly gwtEditorEnvelopeConfig;
  constructor(gwtEditorEnvelopeConfig: { shouldLoadResourcesDynamically: boolean });
  createEditor(
    ctx: KogitoEditorEnvelopeContextType<VsCodeBpmnEditorChannelApi>,
    initArgs: EditorInitArgs
  ): Promise<BpmnEditor>;
}
//# sourceMappingURL=VsCodeBpmnEditorFactory.d.ts.map
