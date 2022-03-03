import { EditorFactory, EditorInitArgs, KogitoEditorEnvelopeContextType } from "@kie-tools-core/editor/dist/api";
import { DmnEditor } from "../DmnEditor";
import { JavaCodeCompletionApi } from "@kie-tools-core/vscode-java-code-completion/dist/api";
import { VsCodeDmnEditorChannelApi } from "./VsCodeDmnEditorChannelApi";
export interface CustomWindow extends Window {
  envelope: {
    javaCodeCompletionService: JavaCodeCompletionApi;
  };
}
export declare class VsCodeDmnEditorFactory implements EditorFactory<DmnEditor, VsCodeDmnEditorChannelApi> {
  private readonly gwtEditorEnvelopeConfig;
  constructor(gwtEditorEnvelopeConfig: { shouldLoadResourcesDynamically: boolean });
  createEditor(
    ctx: KogitoEditorEnvelopeContextType<VsCodeDmnEditorChannelApi>,
    initArgs: EditorInitArgs
  ): Promise<DmnEditor>;
}
//# sourceMappingURL=VsCodeDmnEditorFactory.d.ts.map
