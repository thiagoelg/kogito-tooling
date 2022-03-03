import * as React from "react";
import { Column, ColumnInstance, TableInstance } from "react-table";
import { TableHeaderVisibility } from "../../api";
export interface TableHeaderProps {
  tableInstance: TableInstance;
  editColumnLabel?:
    | string
    | {
        [groupType: string]: string;
      };
  headerVisibility?: TableHeaderVisibility;
  skipLastHeaderGroup: boolean;
  getColumnKey: (column: Column) => string;
  tableColumns: Column[];
  onColumnsUpdate: (columns: Column[]) => void;
  thProps: (column: ColumnInstance) => any;
  editableHeader: boolean;
}
export declare const TableHeader: React.FunctionComponent<TableHeaderProps>;
//# sourceMappingURL=TableHeader.d.ts.map
