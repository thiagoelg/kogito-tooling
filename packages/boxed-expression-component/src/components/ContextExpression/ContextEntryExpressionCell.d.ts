import "./ContextEntryExpressionCell.css";
import * as React from "react";
import { CellProps, ContextEntries } from "../../api";
import { DataRecord } from "react-table";
export interface ContextEntryExpressionCellProps extends CellProps {
  data: ContextEntries;
  onRowUpdate: (rowIndex: number, updatedRow: DataRecord) => void;
}
export declare const ContextEntryExpressionCell: React.FunctionComponent<ContextEntryExpressionCellProps>;
//# sourceMappingURL=ContextEntryExpressionCell.d.ts.map
