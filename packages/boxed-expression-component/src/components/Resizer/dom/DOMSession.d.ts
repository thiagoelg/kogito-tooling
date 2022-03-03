import { Cell } from "./";
export declare const CELL_CSS_SELECTOR = ".react-resizable";
export declare class DOMSession {
  private readonly editorElement;
  private cells;
  constructor(editorElement: HTMLElement);
  getCells(): Cell[];
  private buildCells;
  private buildCell;
  private fetchCellElements;
}
//# sourceMappingURL=DOMSession.d.ts.map
