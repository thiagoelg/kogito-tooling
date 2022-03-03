import * as React from "react";
import "./SelectionBox.css";
export interface SelectionBoxProps {
  ignoredElements?: string[];
  onDragStart?: (startPosition: SelectionStart) => void;
  onDragMove?: () => void;
  onDragStop?: (endRect: SelectionRect) => void;
}
interface SelectionStart {
  x: number;
  y: number;
}
export interface SelectionRect extends SelectionStart {
  width: number;
  height: number;
}
export declare const SelectionBox: React.FunctionComponent<SelectionBoxProps>;
export {};
//# sourceMappingURL=SelectionBox.d.ts.map
