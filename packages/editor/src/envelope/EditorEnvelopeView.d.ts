import * as React from "react";
import { Editor } from "../api";
interface Props {
  setLocale: React.Dispatch<string>;
}
export interface EditorEnvelopeViewApi<E extends Editor> {
  getEditor: () => E | undefined;
  setEditor: (editor: E) => void;
  setLoading: () => void;
  setLoadingFinished: () => void;
  setLocale: (locale: string) => void;
}
export declare const EditorEnvelopeViewRef: React.ForwardRefRenderFunction<EditorEnvelopeViewApi<Editor>, Props>;
export declare const EditorEnvelopeView: React.ForwardRefExoticComponent<
  Props & React.RefAttributes<EditorEnvelopeViewApi<Editor>>
>;
export {};
//# sourceMappingURL=EditorEnvelopeView.d.ts.map
