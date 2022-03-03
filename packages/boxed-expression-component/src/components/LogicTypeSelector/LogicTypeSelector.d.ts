import "./LogicTypeSelector.css";
import * as React from "react";
import { DataType, ExpressionProps, LogicType } from "../../api";
export interface LogicTypeSelectorProps {
  selectedExpression: ExpressionProps;
  onLogicTypeUpdating: (logicType: LogicType) => void;
  onLogicTypeResetting: () => void;
  onUpdatingNameAndDataType?: (updatedName: string, updatedDataType: DataType) => void;
  getPlacementRef: () => HTMLDivElement;
  isHeadless?: boolean;
  onUpdatingRecursiveExpression?: (expression: ExpressionProps) => void;
}
export declare const LOGIC_TYPE_SELECTOR_CLASS = "logic-type-selector";
export declare const LogicTypeSelector: React.FunctionComponent<LogicTypeSelectorProps>;
//# sourceMappingURL=LogicTypeSelector.d.ts.map
