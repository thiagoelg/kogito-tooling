import * as React from "react";
import { EditorEnvelopeLocator } from "@kie-tools-core/editor/dist/api";
import { EmbeddedEditorRef } from "@kie-tools-core/editor/dist/embedded";
import { EmbeddedEditorFile } from "@kie-tools-core/editor/dist/channel";
interface Props {
  editor?: EmbeddedEditorRef;
  editorEnvelopeLocator: EditorEnvelopeLocator;
  file: EmbeddedEditorFile;
  setFile: React.Dispatch<EmbeddedEditorFile>;
  fileExtension: string;
  accept: string;
}
export declare function Sidebar(props: Props): JSX.Element;
export {};
//# sourceMappingURL=Sidebar.d.ts.map
