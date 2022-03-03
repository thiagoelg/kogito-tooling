import { KogitoEditorEnvelopeContextType } from "@kie-tools-core/editor/dist/api";
import { EditorEnvelopeViewApi, KogitoEditorEnvelopeApiImpl } from "@kie-tools-core/editor/dist/envelope";
import { EnvelopeApiFactoryArgs } from "@kie-tools-core/envelope";
import { BpmnEditorChannelApi, BpmnEditorEnvelopeApi } from "../api";
import { BpmnEditor } from "./BpmnEditor";
export declare type BpmnEnvelopeApiFactoryArgs = EnvelopeApiFactoryArgs<
  BpmnEditorEnvelopeApi,
  BpmnEditorChannelApi,
  EditorEnvelopeViewApi<BpmnEditor>,
  KogitoEditorEnvelopeContextType<BpmnEditorChannelApi>
>;
export declare class BpmnEditorEnvelopeApiImpl
  extends KogitoEditorEnvelopeApiImpl<BpmnEditor, BpmnEditorEnvelopeApi, BpmnEditorChannelApi>
  implements BpmnEditorEnvelopeApi
{
  private readonly bpmnArgs;
  constructor(
    bpmnArgs: BpmnEnvelopeApiFactoryArgs,
    gwtEditorEnvelopeConfig: {
      shouldLoadResourcesDynamically: boolean;
    }
  );
  myBpmnEnvelopeMethod(): Promise<string>;
  canvas_getNodeIds(): Promise<string[]>;
  canvas_getBackgroundColor(uuid: string): Promise<string>;
  canvas_setBackgroundColor(uuid: string, backgroundColor: string): Promise<void>;
  canvas_getBorderColor(uuid: string): Promise<string>;
  canvas_setBorderColor(uuid: string, borderColor: string): Promise<void>;
  canvas_getLocation(uuid: string): Promise<number[]>;
  canvas_getAbsoluteLocation(uuid: string): Promise<number[]>;
  canvas_getDimensions(uuid: string): Promise<number[]>;
  canvas_applyState(uuid: string, state: string): Promise<void>;
  canvas_centerNode(uuid: string): Promise<void>;
}
//# sourceMappingURL=BpmnEnvelopeApiFactory.d.ts.map
