import { GwtEditorWrapper } from "../../common";
import { CanvasApi } from "../../jslienzo/CanvasApi";
export interface BpmnEditor extends GwtEditorWrapper, CanvasApi {
  myBpmnMethod(): string;
}
export declare class BpmnEditorImpl extends GwtEditorWrapper implements BpmnEditor {
  myBpmnMethod(): string;
  getNodeIds(): string[];
  getBackgroundColor(uuid: string): string;
  setBackgroundColor(uuid: string, backgroundColor: string): void;
  getBorderColor(uuid: string): string;
  setBorderColor(uuid: string, borderColor: string): void;
  getLocation(uuid: string): number[];
  getAbsoluteLocation(uuid: string): number[];
  getDimensions(uuid: string): number[];
  applyState(uuid: string, state: string): void;
  centerNode(uuid: string): void;
}
//# sourceMappingURL=BpmnEditor.d.ts.map
