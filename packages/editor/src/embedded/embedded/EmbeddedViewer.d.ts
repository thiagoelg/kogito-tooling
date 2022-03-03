/// <reference types="react" />
import { EditorEnvelopeLocator, ChannelType } from "../../api";
import { EmbeddedEditorFile } from "../../channel";
import { Props as EmbeddedEditorProps } from "./EmbeddedEditor";
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
declare type ChannelApiMethodsThatAreNoOpOnEmbeddedViewer =
  | "kogitoEditor_setContentError"
  | "kogitoEditor_ready"
  | "kogitoWorkspace_openFile"
  | "kogitoWorkspace_newEdit"
  | "kogitoEditor_stateControlCommandUpdate";
declare type EmbeddedViewerChannelApiOverrides = Partial<
  Omit<EmbeddedEditorProps, ChannelApiMethodsThatAreNoOpOnEmbeddedViewer>
>;
export declare type Props = EmbeddedViewerChannelApiOverrides & {
  file: EmbeddedEditorFile;
  editorEnvelopeLocator: EditorEnvelopeLocator;
  channelType: ChannelType;
  locale: string;
};
export declare const EmbeddedViewer: (props: Props) => JSX.Element;
export {};
//# sourceMappingURL=EmbeddedViewer.d.ts.map
