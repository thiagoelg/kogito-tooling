export interface CanvasEditorApi {
  getNodeIds(): Promise<string[]>;
  getBackgroundColor(uuid: string): Promise<string>;
  setBackgroundColor(uuid: string, backgroundColor: string): Promise<void>;
  getBorderColor(uuid: string): Promise<string>;
  setBorderColor(uuid: string, borderColor: string): Promise<void>;
  getLocation(uuid: string): Promise<number[]>;
  getAbsoluteLocation(uuid: string): Promise<number[]>;
  getDimensions(uuid: string): Promise<number[]>;
  applyState(uuid: string, state: string): Promise<void>;
  centerNode(uuid: string): Promise<void>;
}
//# sourceMappingURL=CanvasEditorApi.d.ts.map
