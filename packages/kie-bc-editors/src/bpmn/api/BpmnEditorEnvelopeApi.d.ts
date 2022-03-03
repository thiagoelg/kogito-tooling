import { KogitoEditorEnvelopeApi } from "@kie-tools-core/editor/dist/api";
import { CanvasEnvelopeApi } from "../../jslienzo/CanvasApi";
export interface BpmnEditorEnvelopeApi extends KogitoEditorEnvelopeApi, CanvasEnvelopeApi {
  myBpmnEnvelopeMethod(): Promise<string>;
}
//# sourceMappingURL=BpmnEditorEnvelopeApi.d.ts.map
