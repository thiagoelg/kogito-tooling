/// <reference types="react" />
import "./ExpressionContainer.css";
import { ExpressionProps } from "../../api";
export interface ExpressionContainerProps {
  selectedExpression: ExpressionProps;
  onExpressionChange?: (updatedExpression: ExpressionProps) => void;
}
export declare const ExpressionContainer: (props: ExpressionContainerProps) => JSX.Element;
//# sourceMappingURL=ExpressionContainer.d.ts.map
