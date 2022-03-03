import * as React from "react";
import { BoxedExpressionEditorGWTService, DataTypeProps, PMMLParams } from "../api";
export interface BoxedExpressionGlobalContextProps {
  boxedExpressionEditorGWTService?: BoxedExpressionEditorGWTService;
  decisionNodeId: string;
  pmmlParams?: PMMLParams;
  dataTypes: DataTypeProps[];
  supervisorHash: string;
  setSupervisorHash: (hash: string) => void;
  editorRef: React.RefObject<HTMLDivElement>;
  currentlyOpenedHandlerCallback: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentlyOpenedHandlerCallback: React.Dispatch<
    React.SetStateAction<React.Dispatch<React.SetStateAction<boolean>>>
  >;
}
export declare const BoxedExpressionGlobalContext: React.Context<BoxedExpressionGlobalContextProps>;
export declare function useBoxedExpression(): BoxedExpressionGlobalContextProps;
//# sourceMappingURL=BoxedExpressionGlobalContext.d.ts.map
