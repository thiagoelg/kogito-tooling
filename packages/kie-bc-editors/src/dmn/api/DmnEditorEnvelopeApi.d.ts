import { KogitoEditorEnvelopeApi } from "@kie-tools-core/editor/dist/api";
import { CanvasEnvelopeApi } from "../../jslienzo/CanvasApi";
export interface DmnEditorEnvelopeApi extends KogitoEditorEnvelopeApi, CanvasEnvelopeApi {
  myDmnEnvelopeMethod(): Promise<string>;
}
//# sourceMappingURL=DmnEditorEnvelopeApi.d.ts.map
