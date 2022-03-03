import { CellProps, ContextEntries } from "../../api";
import * as React from "react";
import { DataRecord } from "react-table";
export interface ContextEntryInfoCellProps extends CellProps {
  data: ContextEntries;
  onRowUpdate: (rowIndex: number, updatedRow: DataRecord) => void;
  editInfoPopoverLabel?: string;
}
export declare const ContextEntryInfoCell: React.FunctionComponent<ContextEntryInfoCellProps>;
export declare const getContextEntryInfoCell: (
  editInfoPopoverLabel: string
) => (props: ContextEntryInfoCellProps) => React.ReactElement<any, any> | null;
//# sourceMappingURL=ContextEntryInfoCell.d.ts.map
