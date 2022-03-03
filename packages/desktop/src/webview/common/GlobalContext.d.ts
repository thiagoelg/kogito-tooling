import * as React from "react";
import { EmbeddedEditorFile } from "@kie-tools-core/editor/dist/channel";
import { EditorEnvelopeLocator } from "@kie-tools-core/editor/dist/api";
export interface GlobalContextType {
  file: EmbeddedEditorFile;
  editorEnvelopeLocator: EditorEnvelopeLocator;
}
export declare const GlobalContext: React.Context<GlobalContextType>;
//# sourceMappingURL=GlobalContext.d.ts.map
