import * as React from "react";
import { Column, ColumnInstance } from "react-table";
import { TableProps } from "../../api";
import "./Table.css";
export declare const NO_TABLE_CONTEXT_MENU_CLASS = "no-table-context-menu";
export declare const DEFAULT_ON_ROW_ADDING: () => {};
export declare const getColumnsAtLastLevel: (columns: ColumnInstance[] | Column[], depth?: number) => ColumnInstance[];
export declare const getColumnSearchPredicate: (column: ColumnInstance) => (columnToCompare: ColumnInstance) => boolean;
export declare const Table: React.FunctionComponent<TableProps>;
//# sourceMappingURL=Table.d.ts.map
