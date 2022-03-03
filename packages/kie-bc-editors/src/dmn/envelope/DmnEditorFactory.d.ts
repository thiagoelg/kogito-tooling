import { DmnEditorChannelApi } from "../api";
import { EditorFactory, EditorInitArgs, KogitoEditorEnvelopeContextType } from "@kie-tools-core/editor/dist/api";
import { DmnEditor } from "./DmnEditor";
import { PMMLEditorMarshallerApi } from "../../common/api/PMMLEditorMarshallerApi";
export interface CustomWindow extends Window {
  envelope: {
    pmmlEditorMarshallerService: PMMLEditorMarshallerApi;
  };
}
export declare class DmnEditorFactory implements EditorFactory<DmnEditor, DmnEditorChannelApi> {
  private readonly gwtEditorEnvelopeConfig;
  constructor(gwtEditorEnvelopeConfig: { shouldLoadResourcesDynamically: boolean });
  createEditor(ctx: KogitoEditorEnvelopeContextType<DmnEditorChannelApi>, initArgs: EditorInitArgs): Promise<DmnEditor>;
}
//# sourceMappingURL=DmnEditorFactory.d.ts.map
