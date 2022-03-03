/// <reference types="react" />
import {
  Editor,
  EditorInitArgs,
  KogitoEditorChannelApi,
  KogitoEditorEnvelopeContextType,
} from "@kie-tools-core/editor/dist/api";
import { Rect } from "@kie-tools-core/guided-tour/dist/api";
import { Notification } from "@kie-tools-core/notifications/dist/api";
export declare class Base64PngEditorInterface implements Editor {
  private readonly envelopeContext;
  private readonly initArgs;
  private editorRef;
  af_isReact: boolean;
  af_componentId: "base64png-editor";
  af_componentTitle: "Base64 PNG Editor";
  constructor(envelopeContext: KogitoEditorEnvelopeContextType<KogitoEditorChannelApi>, initArgs: EditorInitArgs);
  getContent(): Promise<string>;
  getElementPosition(selector: string): Promise<Rect | undefined>;
  setContent(path: string, content: string): Promise<void>;
  getPreview(): Promise<string | undefined>;
  undo(): Promise<void>;
  redo(): Promise<void>;
  validate(): Promise<Notification[]>;
  af_componentRoot(): JSX.Element;
}
//# sourceMappingURL=Base64PngEditorInterface.d.ts.map
