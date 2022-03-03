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
export {};
declare global {
  interface BeeApi {
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
  interface Window {
    beeApi: BeeApi;
    beeApiWrapper: BeeApi;
  }
}
export declare const executeIfExpressionDefinitionChanged: (
  prevDef: ExpressionProps,
  updatedDef: ExpressionProps,
  functionToExecute: () => void,
  propertiesToCheck?: string[] | undefined
) => void;
export declare const generateUuid: () => string;
//# sourceMappingURL=BoxedExpressionEditor.d.ts.map
