import { DataType } from "./DataType";
import * as React from "react";
import { Column as ReactTableColumn, DataRecord, Row as ReactTableRow } from "react-table";
export interface ColumnsUpdateArgs<T = ReactTableColumn> {
  columns: T[];
  operation?: TableOperation;
  columnIndex?: number;
}
export interface RowsUpdateArgs<T = DataRecord> {
  rows: T[];
  operation?: TableOperation;
  rowIndex?: number;
  columns?: ReactTableColumn[];
}
export interface TableProps {
  tableId?: string;
  children?: React.ReactElement[];
  getColumnPrefix?: (groupType?: string) => string;
  editColumnLabel?:
    | string
    | {
        [groupType: string]: string;
      };
  editableHeader?: boolean;
  controllerCell?: string | JSX.Element;
  defaultCell?: {
    [columnName: string]: React.FunctionComponent<CellProps>;
  };
  columns: ReactTableColumn[];
  rows: DataRecord[];
  onColumnsUpdate?: (args: ColumnsUpdateArgs) => void;
  onRowsUpdate?: (args: RowsUpdateArgs) => void;
  onRowAdding?: () => DataRecord;
  handlerConfiguration?: TableHandlerConfiguration;
  headerVisibility?: TableHeaderVisibility;
  headerLevels?: number;
  skipLastHeaderGroup?: boolean;
  getRowKey?: (row: ReactTableRow) => string;
  getColumnKey?: (column: ReactTableColumn) => string;
  resetRowCustomFunction?: (row: DataRecord) => DataRecord;
  readOnlyCells?: boolean;
}
export declare enum TableHeaderVisibility {
  Full = 0,
  LastLevel = 1,
  SecondToLastLevel = 2,
  None = 3,
}
export declare enum TableOperation {
  ColumnInsertLeft = 0,
  ColumnInsertRight = 1,
  ColumnDelete = 2,
  RowInsertAbove = 3,
  RowInsertBelow = 4,
  RowDelete = 5,
  RowClear = 6,
  RowDuplicate = 7,
}
export interface GroupOperations {
  group: string;
  items: {
    name: string;
    type: TableOperation;
  }[];
}
export declare type GroupOperationsByColumnType = {
  [columnGroupType: string]: GroupOperations[];
};
export declare type TableHandlerConfiguration = GroupOperations[] | GroupOperationsByColumnType;
export declare type AllowedOperations = TableOperation[];
export declare type Row = {
  id: string;
  cells: string[];
};
export declare type Rows = Row[];
export interface Column {
  id: string;
  name: string;
  dataType: DataType;
  width?: string | number;
  setWidth?: (width: string | number) => void;
}
export declare type Columns = Column[];
export interface CellProps {
  rowIndex: number;
  columnId: string;
}
//# sourceMappingURL=Table.d.ts.map
