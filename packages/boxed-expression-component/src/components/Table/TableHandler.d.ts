import * as React from "react";
import { TableHandlerConfiguration, TableOperation } from "../../api";
import { Column, ColumnInstance, DataRecord } from "react-table";
export interface TableHandlerProps {
  getColumnPrefix: (groupType?: string) => string;
  tableColumns: Column[];
  lastSelectedColumn: ColumnInstance;
  lastSelectedRowIndex: number;
  tableRows: React.MutableRefObject<DataRecord[]>;
  onRowsUpdate: (rows: DataRecord[], operation?: TableOperation, rowIndex?: number) => void;
  onRowAdding: () => DataRecord;
  showTableHandler: boolean;
  setShowTableHandler: React.Dispatch<React.SetStateAction<boolean>>;
  tableHandlerTarget: HTMLElement;
  handlerConfiguration: TableHandlerConfiguration;
  tableHandlerAllowedOperations: TableOperation[];
  resetRowCustomFunction?: (row: DataRecord) => DataRecord;
  onColumnsUpdate: (columns: Column[], operation?: TableOperation, columnIndex?: number) => void;
}
export declare const TableHandler: React.FunctionComponent<TableHandlerProps>;
//# sourceMappingURL=TableHandler.d.ts.map
