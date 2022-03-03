export * from "./components";
export * from "./api";
import * as React from "react";
import { DataType } from "./api";
declare module "react-table" {
  interface ContextMenuEvent {
    preventDefault: () => void;
    target: React.SetStateAction<EventTarget>;
  }
  interface TableState {
    columnResizing: {
      isResizingColumn: boolean;
      columnWidths: {
        [columnName: string]: number;
      };
    };
  }
  interface TableOptions<D extends object> {
    onCellUpdate: (rowIndex: number, columnId: string, value: string) => void;
    onRowUpdate: (rowIndex: number, updatedRow: DataRecord) => void;
  }
  interface ColumnInstance {
    originalId?: string;
    accessor: string;
    groupType?: string;
    placeholderOf?: ColumnInstance;
    appendColumnsOnChildren?: boolean;
    cssClasses?: string;
    label: string | JSX.Element;
    headerCellElement?: JSX.Element;
    inlineEditable?: boolean;
    dataType: DataType;
    getResizerProps: (props?: Partial<TableResizerProps>) => TableResizerProps;
    isCountColumn: boolean;
    disableHandlerOnHeader?: boolean;
  }
}
//# sourceMappingURL=index.d.ts.map
