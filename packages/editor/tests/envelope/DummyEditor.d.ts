/// <reference types="react" />
import { Editor } from "@kie-tools-core/editor/dist/api";
import { Notification } from "@kie-tools-core/notifications/dist/api";
export declare class DummyEditor implements Editor {
  private ref;
  readonly af_componentTitle = "Dummy Editor";
  readonly af_componentId = "dummy-editor";
  readonly af_isReact = true;
  af_componentRoot(): JSX.Element;
  getContent(): Promise<string>;
  getElementPosition(selector: string): Promise<import("@kie-tools-core/guided-tour/dist/api").Rect>;
  undo(): Promise<void>;
  redo(): Promise<void>;
  setContent(path: string, content: string): Promise<void>;
  getPreview(): Promise<string | undefined>;
  validate(): Promise<Notification[]>;
}
//# sourceMappingURL=DummyEditor.d.ts.map
