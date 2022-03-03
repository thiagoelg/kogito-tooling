import { GwtEditorWrapper } from "../../common";
import { CanvasApi } from "../../jslienzo/CanvasApi";
export interface DmnEditor extends GwtEditorWrapper, CanvasApi {
  myDmnMethod(): string;
}
export declare class DmnEditorImpl extends GwtEditorWrapper implements DmnEditor {
  myDmnMethod(): string;
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
//# sourceMappingURL=DmnEditor.d.ts.map
