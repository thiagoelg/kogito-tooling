import { ExpressionProps } from "../../api";
import * as React from "react";
export interface ContextEntryExpressionProps {
  expression: ExpressionProps;
  onUpdatingRecursiveExpression: (expression: ExpressionProps) => void;
  onExpressionResetting?: () => void;
}
export declare const ContextEntryExpression: React.FunctionComponent<ContextEntryExpressionProps>;
//# sourceMappingURL=ContextEntryExpression.d.ts.map
