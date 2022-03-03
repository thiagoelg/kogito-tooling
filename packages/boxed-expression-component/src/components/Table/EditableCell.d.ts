/// <reference types="react" />
import { CellProps } from "../../api";
import "./EditableCell.css";
export declare const READ_MODE = "editable-cell--read-mode";
export declare const EDIT_MODE = "editable-cell--edit-mode";
export interface EditableCellProps extends CellProps {
  value: string;
  onCellUpdate: (rowIndex: number, columnId: string, value: string) => void;
  readOnly?: boolean;
}
export declare function EditableCell({
  value,
  rowIndex,
  columnId,
  onCellUpdate,
  readOnly,
}: EditableCellProps): JSX.Element;
//# sourceMappingURL=EditableCell.d.ts.map
