import { KogitoEditorEnvelopeContextType } from "@kie-tools-core/editor/dist/api";
import { EditorEnvelopeViewApi, KogitoEditorEnvelopeApiImpl } from "@kie-tools-core/editor/dist/envelope";
import { EnvelopeApiFactoryArgs } from "@kie-tools-core/envelope";
import { SceSimEditorChannelApi, SceSimEditorEnvelopeApi } from "../api";
import { SceSimEditor } from "./SceSimEditor";
export declare type SceSimEnvelopeApiFactoryArgs = EnvelopeApiFactoryArgs<
  SceSimEditorEnvelopeApi,
  SceSimEditorChannelApi,
  EditorEnvelopeViewApi<SceSimEditor>,
  KogitoEditorEnvelopeContextType<SceSimEditorChannelApi>
>;
export declare class SceSimEditorEnvelopeApiImpl
  extends KogitoEditorEnvelopeApiImpl<SceSimEditor, SceSimEditorEnvelopeApi, SceSimEditorChannelApi>
  implements SceSimEditorEnvelopeApi
{
  private readonly sceSimArgs;
  constructor(
    sceSimArgs: SceSimEnvelopeApiFactoryArgs,
    gwtEditorEnvelopeConfig: {
      shouldLoadResourcesDynamically: boolean;
    }
  );
  mySceSimEnvelopeMethod(): Promise<string>;
}
//# sourceMappingURL=SceSimEnvelopeApiFactory.d.ts.map
