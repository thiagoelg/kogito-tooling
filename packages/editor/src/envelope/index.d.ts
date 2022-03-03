import "@patternfly/react-core/dist/styles/base.css";
import "./styles.scss";
import {
  Editor,
  EditorFactory,
  KogitoEditorChannelApi,
  KogitoEditorEnvelopeApi,
  KogitoEditorEnvelopeContextType,
} from "../api";
import { ApiDefinition, EnvelopeBus } from "@kie-tools-core/envelope-bus/dist/api";
import { EnvelopeApiFactory } from "@kie-tools-core/envelope";
import { EditorEnvelopeViewApi } from "./EditorEnvelopeView";
export declare function init(args: {
  container: HTMLElement;
  bus: EnvelopeBus;
  editorFactory: EditorFactory<Editor, KogitoEditorChannelApi>;
}): void;
export declare function initCustom<
  E extends Editor,
  EnvelopeApi extends KogitoEditorEnvelopeApi & ApiDefinition<EnvelopeApi>,
  ChannelApi extends KogitoEditorChannelApi & ApiDefinition<ChannelApi>
>(args: {
  container: HTMLElement;
  bus: EnvelopeBus;
  apiImplFactory: EnvelopeApiFactory<
    EnvelopeApi,
    ChannelApi,
    EditorEnvelopeViewApi<E>,
    KogitoEditorEnvelopeContextType<ChannelApi>
  >;
}): Promise<import("@kie-tools-core/envelope-bus/dist/envelope").EnvelopeClient<EnvelopeApi, ChannelApi>>;
export { EditorEnvelopeViewApi } from "./EditorEnvelopeView";
export * from "./KogitoEditorEnvelopeApiImpl";
//# sourceMappingURL=index.d.ts.map
