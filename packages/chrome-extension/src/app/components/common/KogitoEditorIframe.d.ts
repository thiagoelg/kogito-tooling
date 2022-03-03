import * as React from "react";
import { IsolatedEditorRef } from "./IsolatedEditorRef";
interface Props {
  openFileExtension: string;
  contentPath: string;
  getFileContents: () => Promise<string | undefined>;
  readonly: boolean;
  onSetContentError: () => void;
}
export declare const KogitoEditorIframe: React.ForwardRefExoticComponent<
  Props & React.RefAttributes<IsolatedEditorRef | undefined>
>;
export {};
//# sourceMappingURL=KogitoEditorIframe.d.ts.map
