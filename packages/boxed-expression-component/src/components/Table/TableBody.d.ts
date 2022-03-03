import * as React from "react";
import { TableHeaderVisibility } from "../../api";
import { Column, Row, TableInstance } from "react-table";
export interface TableBodyProps {
  tableInstance: TableInstance;
  headerVisibility?: TableHeaderVisibility;
  children?: React.ReactElement[];
  getRowKey: (row: Row) => string;
  getColumnKey: (column: Column) => string;
  onColumnsUpdate?: (columns: Column[]) => void;
  tdProps: (cellIndex: number, rowIndex: number) => any;
}
export declare const TableBody: React.FunctionComponent<TableBodyProps>;
//# sourceMappingURL=TableBody.d.ts.map
