import {
  EditorFactory,
  EditorInitArgs,
  KogitoEditorChannelApi,
  KogitoEditorEnvelopeContextType,
} from "@kie-tools-core/editor/dist/api";
import { Base64PngEditorInterface } from "./Base64PngEditorInterface";
export declare class Base64PngEditorFactory implements EditorFactory<Base64PngEditorInterface, KogitoEditorChannelApi> {
  supports(fileExtension: string): boolean;
  createEditor(
    envelopeContext: KogitoEditorEnvelopeContextType<KogitoEditorChannelApi>,
    initArgs: EditorInitArgs
  ): Promise<Base64PngEditorInterface>;
}
//# sourceMappingURL=Base64PngEditorFactory.d.ts.map
