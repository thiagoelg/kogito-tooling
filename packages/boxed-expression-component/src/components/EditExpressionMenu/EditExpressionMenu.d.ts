import "./EditExpressionMenu.css";
import * as React from "react";
import { DataType, ExpressionProps } from "../../api";
export interface EditExpressionMenuProps {
  children?: React.ReactElement;
  appendTo?: HTMLElement | ((ref?: HTMLElement) => HTMLElement);
  arrowPlacement?: () => HTMLElement;
  nameField?: string;
  dataTypeField?: string;
  title?: string;
  selectedDataType?: DataType;
  selectedExpressionName: string;
  onExpressionUpdate: (expression: ExpressionProps) => void;
}
export declare const EXPRESSION_NAME = "Expression Name";
export declare const EditExpressionMenu: React.FunctionComponent<EditExpressionMenuProps>;
//# sourceMappingURL=EditExpressionMenu.d.ts.map
