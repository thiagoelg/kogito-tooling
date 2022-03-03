import { DataRecord } from "react-table";
export declare const PASTE_OPERATION = "PASTE_OPERATION";
export declare const paste: (pasteValue: string, reference: Element, editorElement: HTMLElement) => void;
export declare const pasteOnTable: (
  pasteValue: string,
  rows: DataRecord[],
  rowFactory: () => DataRecord,
  x?: number,
  y?: number
) => DataRecord[];
export declare const iterableValue: (value: string) => string[][];
export declare const firstIterableValue: (value: string) => string;
//# sourceMappingURL=CopyAndPasteUtils.d.ts.map
