import {
  ChannelType,
  EditorApi,
  EditorEnvelopeLocator,
  KogitoEditorChannelApi,
  KogitoEditorEnvelopeApi,
} from "../../api";
import * as React from "react";
import { EmbeddedEditorFile, StateControl } from "../../channel";
import { EnvelopeServer } from "@kie-tools-core/envelope-bus/dist/channel";
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
declare type ChannelApiMethodsAlreadyImplementedByEmbeddedEditor =
  | "kogitoGuidedTour_guidedTourUserInteraction"
  | "kogitoGuidedTour_guidedTourRegisterTutorial"
  | "kogitoEditor_contentRequest";
declare type EmbeddedEditorChannelApiOverrides = Partial<
  Omit<KogitoEditorChannelApi, ChannelApiMethodsAlreadyImplementedByEmbeddedEditor>
>;
export declare type Props = EmbeddedEditorChannelApiOverrides & {
  file: EmbeddedEditorFile;
  editorEnvelopeLocator: EditorEnvelopeLocator;
  channelType: ChannelType;
  locale: string;
};
export declare type EmbeddedEditorRef = EditorApi & {
  isReady: boolean;
  iframeRef: React.RefObject<HTMLIFrameElement>;
  getStateControl(): StateControl;
  getEnvelopeServer(): EnvelopeServer<KogitoEditorChannelApi, KogitoEditorEnvelopeApi>;
};
export declare const EmbeddedEditor: React.ForwardRefExoticComponent<
  Partial<Omit<KogitoEditorChannelApi, ChannelApiMethodsAlreadyImplementedByEmbeddedEditor>> & {
    file: EmbeddedEditorFile;
    editorEnvelopeLocator: EditorEnvelopeLocator;
    channelType: ChannelType;
    locale: string;
  } & React.RefAttributes<EmbeddedEditorRef | undefined>
>;
export {};
//# sourceMappingURL=EmbeddedEditor.d.ts.map
