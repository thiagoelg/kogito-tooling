/// <reference types="react" />
import { Notification } from "@kie-tools-core/notifications/dist/api";
import { Rect } from "@kie-tools-core/guided-tour/dist/api";
export interface Editor extends EditorApi {
  af_isReact: boolean;
  af_componentId: string;
  af_componentTitle: string;
  af_componentRoot(): React.ReactPortal | React.ReactElement | HTMLElement | string;
  af_onStartup?(): void;
  af_onOpen?(): void;
}
export interface EditorApi {
  setContent(path: string, content: string): Promise<void>;
  getContent(): Promise<string>;
  getPreview(): Promise<string | undefined>;
  getElementPosition(selector: string): Promise<Rect | undefined>;
  undo(): Promise<void>;
  redo(): Promise<void>;
  validate(): Promise<Notification[]>;
}
//# sourceMappingURL=Editor.d.ts.map
