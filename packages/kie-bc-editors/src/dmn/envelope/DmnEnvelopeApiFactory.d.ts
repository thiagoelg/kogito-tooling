import { EnvelopeApiFactoryArgs } from "@kie-tools-core/envelope";
import { DmnEditorChannelApi, DmnEditorEnvelopeApi } from "../api";
import { EditorEnvelopeViewApi, KogitoEditorEnvelopeApiImpl } from "@kie-tools-core/editor/dist/envelope";
import { DmnEditor } from "./DmnEditor";
import { KogitoEditorEnvelopeContextType } from "@kie-tools-core/editor/dist/api";
export declare type DmnEnvelopeApiFactoryArgs = EnvelopeApiFactoryArgs<
  DmnEditorEnvelopeApi,
  DmnEditorChannelApi,
  EditorEnvelopeViewApi<DmnEditor>,
  KogitoEditorEnvelopeContextType<DmnEditorChannelApi>
>;
export declare class DmnEditorEnvelopeApiImpl
  extends KogitoEditorEnvelopeApiImpl<DmnEditor, DmnEditorEnvelopeApi, DmnEditorChannelApi>
  implements DmnEditorEnvelopeApi
{
  private readonly dmnArgs;
  constructor(
    dmnArgs: DmnEnvelopeApiFactoryArgs,
    gwtEditorEnvelopeConfig: {
      shouldLoadResourcesDynamically: boolean;
    }
  );
  myDmnEnvelopeMethod(): Promise<string>;
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
//# sourceMappingURL=DmnEnvelopeApiFactory.d.ts.map
