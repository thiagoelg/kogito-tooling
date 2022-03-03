import { LogicType } from "./LogicType";
import { DataType } from "./DataType";
import { Columns, Rows } from "./Table";
import { ContextEntries, EntryInfo } from "./ContextEntry";
import { HitPolicy } from "./HitPolicy";
import { BuiltinAggregation } from "./BuiltinAggregation";
import { Annotation, Clause, DecisionTableRule } from "./DecisionTableRule";
import { FeelFunctionProps, JavaFunctionProps, PmmlFunctionProps } from "./FunctionKind";
export interface ExpressionProps {
  id?: string;
  name?: string;
  dataType?: DataType;
  onUpdatingNameAndDataType?: (updatedName: string, updatedDataType: DataType) => void;
  logicType?: LogicType;
  isHeadless?: boolean;
  onUpdatingRecursiveExpression?: (expression: ExpressionProps) => void;
  noClearAction?: boolean;
}
export interface LiteralExpressionProps extends ExpressionProps {
  logicType: LogicType.LiteralExpression;
  content?: string;
  width?: number;
}
export interface PMMLLiteralExpressionProps extends ExpressionProps {
  logicType: LogicType.PMMLLiteralExpression;
  getOptions: () => string[];
  selected?: string;
  noOptionsLabel: string;
  testId?: string;
}
export interface RelationProps extends ExpressionProps {
  logicType: LogicType.Relation;
  columns?: Columns;
  rows?: Rows;
}
export interface ContextProps extends ExpressionProps {
  logicType: LogicType.Context;
  contextEntries?: ContextEntries;
  result?: ExpressionProps;
  renderResult?: boolean;
  entryInfoWidth?: number;
  entryExpressionWidth?: number;
  noHandlerMenu?: boolean;
}
export interface DecisionTableProps extends ExpressionProps {
  logicType: LogicType.DecisionTable;
  hitPolicy?: HitPolicy;
  aggregation?: BuiltinAggregation;
  annotations?: Annotation[];
  input?: Clause[];
  output?: Clause[];
  rules?: DecisionTableRule[];
}
export interface ListProps extends ExpressionProps {
  logicType: LogicType.List;
  items?: ExpressionProps[];
  width?: number;
}
export interface InvocationProps<T = ExpressionProps> extends ExpressionProps {
  logicType: LogicType.Invocation;
  invokedFunction?: string;
  bindingEntries?: ContextEntries<T>;
  entryInfoWidth?: number;
  entryExpressionWidth?: number;
}
export declare type FunctionProps = ExpressionProps & {
  logicType: LogicType.Function;
  formalParameters?: EntryInfo[];
  parametersWidth?: number;
} & (FeelFunctionProps | JavaFunctionProps | PmmlFunctionProps);
//# sourceMappingURL=ExpressionProps.d.ts.map
