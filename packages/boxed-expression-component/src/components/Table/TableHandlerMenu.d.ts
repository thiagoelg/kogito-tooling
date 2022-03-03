import "./TableHandlerMenu.css";
import * as React from "react";
import { AllowedOperations, GroupOperations, TableOperation } from "../../api";
export interface TableHandlerMenuProps {
  handlerConfiguration: GroupOperations[];
  allowedOperations: AllowedOperations;
  onOperation: (operation: TableOperation) => void;
}
export declare const TableHandlerMenu: React.FunctionComponent<TableHandlerMenuProps>;
//# sourceMappingURL=TableHandlerMenu.d.ts.map
