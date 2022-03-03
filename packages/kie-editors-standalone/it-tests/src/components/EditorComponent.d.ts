/// <reference types="react" />
import { ContentType } from "@kie-tools-core/workspace/dist/api";
import { Editor } from "@kie-tools/kie-editors-standalone/dist/common/Editor";
export interface Props {
  id: string;
  initialContent: Promise<string>;
  readOnly: boolean;
  origin: string;
  resources?: Map<
    string,
    {
      contentType: ContentType;
      content: Promise<string>;
    }
  >;
}
export declare type InternalProps = Props & {
  openEditor: Editor["open"];
  defaultModelName?: string;
};
export declare const EditorComponent: (props: InternalProps) => JSX.Element;
//# sourceMappingURL=EditorComponent.d.ts.map
