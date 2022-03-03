export interface CanvasApi {
  getNodeIds(): string[];
  getBackgroundColor(uuid: string): string;
  setBackgroundColor(uuid: string, backgroundColor: string): void;
  getBorderColor(uuid: string): string;
  setBorderColor(uuid: string, backgroundColor: string): void;
  getLocation(uuid: string): number[];
  getAbsoluteLocation(uuid: string): number[];
  getDimensions(uuid: string): number[];
  applyState(uuid: string, state: string): void;
  centerNode(uuid: string): void;
}
export interface CanvasEnvelopeApi {
  canvas_getNodeIds(): Promise<string[]>;
  canvas_getBackgroundColor(uuid: string): Promise<string>;
  canvas_setBackgroundColor(uuid: string, backgroundColor: string): Promise<void>;
  canvas_getBorderColor(uuid: string): Promise<string>;
  canvas_setBorderColor(uuid: string, borderColor: string): Promise<void>;
  canvas_getLocation(uuid: string): Promise<number[]>;
  canvas_getAbsoluteLocation(uuid: string): Promise<number[]>;
  canvas_getDimensions(uuid: string): Promise<number[]>;
  canvas_applyState(uuid: string, state: string): Promise<void>;
  canvas_centerNode(uuid: string): Promise<void>;
}
//# sourceMappingURL=CanvasApi.d.ts.map
