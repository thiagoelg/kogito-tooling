import { ContentType } from "@kie-tools-core/workspace/dist/api";
import { Editor, StandaloneEditorApi } from "../common/Editor";
import { DmnEditorDiagramApi } from "../jsdiagram/DmnEditorDiagramApi";
declare global {
  interface Window {
    DmnEditor: Editor;
  }
}
export declare function open(args: {
  container: Element;
  initialContent: Promise<string>;
  readOnly?: boolean;
  origin?: string;
  onError?: () => any;
  resources?: Map<
    string,
    {
      contentType: ContentType;
      content: Promise<string>;
    }
  >;
}): StandaloneEditorApi & DmnEditorDiagramApi;
//# sourceMappingURL=index.d.ts.map
