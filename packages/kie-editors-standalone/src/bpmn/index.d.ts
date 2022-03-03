import { ContentType } from "@kie-tools-core/workspace/dist/api";
import { Editor, StandaloneEditorApi } from "../common/Editor";
import { BpmnEditorDiagramApi } from "../jsdiagram/BpmnEditorDiagramApi";
declare global {
  interface Window {
    BpmnEditor: Editor;
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
}): StandaloneEditorApi & BpmnEditorDiagramApi;
//# sourceMappingURL=index.d.ts.map
