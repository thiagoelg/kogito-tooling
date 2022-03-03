import { Rect } from "@kie-tools-core/guided-tour/dist/api";
import { Notification } from "@kie-tools-core/notifications/dist/api";
declare global {
  interface Window {
    gwtEditorBeans: Map<
      string,
      {
        get(): GwtEditor;
      }
    >;
    appFormerGwtFinishedLoading: () => any;
    erraiBusApplicationRoot: string;
    erraiBusRemoteCommunicationEnabled: boolean;
    JsInterop__Envelope__GuidedTour__GuidedTourCustomSelectorPositionProvider: GuidedTourCustomSelectorPositionProvider;
  }
}
export declare const getGuidedTourElementPosition: (selector: string) => Rect;
interface GuidedTourCustomSelectorPositionProvider {
  getPosition(querySelector: string): Rect;
  getInstance(): GuidedTourCustomSelectorPositionProvider;
}
export interface GwtEditor {
  getContent(): Promise<string>;
  setContent(path: string, content: string): Promise<void>;
  getPreview(): Promise<string | undefined>;
  validate(): Promise<Notification[]>;
}
export declare class GwtAppFormerApi {
  onFinishedLoading(callback: () => Promise<any>): void;
  getEditor(editorId: string): import("../../dist/common/GwtAppFormerApi").GwtEditor;
}
export {};
//# sourceMappingURL=GwtAppFormerApi.d.ts.map
