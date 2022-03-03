import {
  ContextProps,
  DecisionTableProps,
  ExpressionProps,
  FunctionProps,
  InvocationProps,
  ListProps,
  LiteralExpressionProps,
  RelationProps,
} from "./ExpressionProps";
export interface BoxedExpressionEditorGWTService {
  resetExpressionDefinition: (definition: ExpressionProps) => void;
  broadcastLiteralExpressionDefinition: (definition: LiteralExpressionProps) => void;
  broadcastRelationExpressionDefinition: (definition: RelationProps) => void;
  broadcastContextExpressionDefinition: (definition: ContextProps) => void;
  broadcastListExpressionDefinition: (definition: ListProps) => void;
  broadcastInvocationExpressionDefinition: (definition: InvocationProps) => void;
  broadcastFunctionExpressionDefinition: (definition: FunctionProps) => void;
  broadcastDecisionTableExpressionDefinition: (definition: DecisionTableProps) => void;
  notifyUserAction: () => void;
  openManageDataType: () => void;
  onLogicTypeSelect: (selectedLogicType: string) => void;
  selectObject: (uuid?: string) => void;
}
//# sourceMappingURL=BoxedExpressionEditorGWTService.d.ts.map
