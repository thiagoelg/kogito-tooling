export declare class Cell {
  element: HTMLElement;
  children: Cell[];
  depth: number;
  private editorElement;
  private id?;
  private lastColumn?;
  private rect?;
  private parentRow?;
  constructor(element: HTMLElement, children: Cell[], depth: number, editorElement: HTMLElement);
  getId(): string;
  getRect(): DOMRect;
  isLastColumn(): boolean;
  setWidth(width: number): void;
  refreshWidthAsParent(): void;
  refreshWidthAsLastColumn(): void;
  refreshWidthAsLastGroupColumn(): void;
  refreshWidthAsLastGroupColumnRunner(properties: any): void;
  isColSpanHeader(): boolean;
  private getHeaderType;
  private getParent;
  private getParentRow;
  private fetchChildWidth;
}
//# sourceMappingURL=Cell.d.ts.map
