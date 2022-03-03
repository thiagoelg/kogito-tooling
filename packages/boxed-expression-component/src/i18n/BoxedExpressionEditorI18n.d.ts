import { ReferenceDictionary } from "@kie-tools-core/i18n/dist/core";
import { CommonI18n } from "@kie-tools/i18n-common-dictionary";
interface BoxedExpressionEditorDictionary extends ReferenceDictionary {
  addParameter: string;
  builtInAggregator: string;
  choose: string;
  columns: string;
  columnOperations: {
    delete: string;
    insertLeft: string;
    insertRight: string;
  };
  class: string;
  clear: string;
  context: string;
  contextEntry: string;
  dataType: string;
  dataTypeDropDown: {
    default: string;
    custom: string;
  };
  decisionRule: string;
  decisionTable: string;
  document: string;
  editClause: {
    input: string;
    output: string;
  };
  editContextEntry: string;
  editExpression: string;
  editHitPolicy: string;
  editParameter: string;
  editParameters: string;
  editRelation: string;
  enterFunction: string;
  enterText: string;
  delete: string;
  function: string;
  hitPolicy: string;
  inputClause: string;
  invocation: string;
  list: string;
  literalExpression: string;
  manage: string;
  methodSignature: string;
  model: string;
  name: string;
  parameters: string;
  outputClause: string;
  pmml: {
    firstSelection: string;
    secondSelection: string;
  };
  relation: string;
  rows: string;
  rowOperations: {
    clear: string;
    delete: string;
    duplicate: string;
    insertAbove: string;
    insertBelow: string;
  };
  ruleAnnotation: string;
  selectExpression: string;
  selectFunctionKind: string;
  selectLogicType: string;
}
export interface BoxedExpressionEditorI18n extends BoxedExpressionEditorDictionary, CommonI18n {}
export {};
//# sourceMappingURL=BoxedExpressionEditorI18n.d.ts.map
