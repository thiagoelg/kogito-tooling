import { ExpressionProps } from "./ExpressionProps";
import { EntryInfo } from "./ContextEntry";
export declare enum FunctionKind {
  Feel = "FEEL",
  Java = "Java",
  Pmml = "PMML",
}
export interface FeelFunctionProps {
  functionKind: FunctionKind.Feel;
  expression?: ExpressionProps;
}
export interface JavaFunctionProps {
  functionKind: FunctionKind.Java;
  className?: string;
  methodName?: string;
  classFieldId?: string;
  methodFieldId?: string;
}
interface PMMLParam {
  document: string;
  modelsFromDocument?: {
    model: string;
    parametersFromModel?: EntryInfo[];
  }[];
}
export declare type PMMLParams = PMMLParam[];
export interface PmmlFunctionProps {
  functionKind: FunctionKind.Pmml;
  document?: string;
  model?: string;
  documentFieldId?: string;
  modelFieldId?: string;
}
export {};
//# sourceMappingURL=FunctionKind.d.ts.map
