import * as React from "react";
import { IsolatedEditorRef } from "./IsolatedEditorRef";
interface Props {
  getFileContents: () => Promise<string | undefined>;
  contentPath: string;
  openFileExtension: string;
  readonly: boolean;
  textMode: boolean;
  keepRenderedEditorInTextMode: boolean;
  onSetContentError: () => void;
}
export declare const IsolatedEditor: React.ForwardRefExoticComponent<Props & React.RefAttributes<IsolatedEditorRef>>;
export {};
//# sourceMappingURL=IsolatedEditor.d.ts.map
