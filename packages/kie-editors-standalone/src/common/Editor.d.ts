import { ContentType } from "@kie-tools-core/workspace/dist/api";
import { EditorApi, KogitoEditorEnvelopeApi } from "@kie-tools-core/editor/dist/api";
import { StateControl } from "@kie-tools-core/editor/dist/channel";
import { MessageBusClientApi } from "@kie-tools-core/envelope-bus/dist/api";
export interface StandaloneEditorApi extends EditorApi {
  subscribeToContentChanges: StateControl["subscribe"];
  unsubscribeToContentChanges: StateControl["unsubscribe"];
  markAsSaved: StateControl["setSavedCommand"];
  envelopeApi: MessageBusClientApi<KogitoEditorEnvelopeApi>;
  close: () => void;
}
export interface Editor {
  open: (args: {
    container: Element;
    initialContent: Promise<string>;
    readOnly: boolean;
    origin?: string;
    resources?: Map<
      string,
      {
        contentType: ContentType;
        content: Promise<string>;
      }
    >;
  }) => StandaloneEditorApi;
}
export declare const createEditor: (
  envelopeApi: MessageBusClientApi<KogitoEditorEnvelopeApi>,
  stateControl: StateControl,
  listener: (message: MessageEvent) => void,
  iframe: HTMLIFrameElement
) => StandaloneEditorApi;
//# sourceMappingURL=Editor.d.ts.map
