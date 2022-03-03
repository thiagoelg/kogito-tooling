import * as React from "react";
import "./BoxedExpressionProvider.css";
import { BoxedExpressionEditorProps } from "./BoxedExpressionEditor";
export interface BoxedExpressionProviderProps extends BoxedExpressionEditorProps {
  isRunnerTable: boolean;
  children: React.ReactNode;
}
export declare function BoxedExpressionProvider(props: BoxedExpressionProviderProps): JSX.Element;
//# sourceMappingURL=BoxedExpressionProvider.d.ts.map
