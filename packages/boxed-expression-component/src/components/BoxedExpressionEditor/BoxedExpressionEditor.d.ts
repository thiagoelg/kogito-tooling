/// <reference types="react" />
import { BoxedExpressionEditorGWTService, DataTypeProps, ExpressionProps, PMMLParams } from "../../api";
import "@patternfly/react-styles/css/components/Drawer/drawer.css";
import "./base-no-reset-wrapped.css";
export interface BoxedExpressionEditorProps {
  boxedExpressionEditorGWTService?: BoxedExpressionEditorGWTService;
  decisionNodeId: string;
  expressionDefinition: ExpressionProps;
  dataTypes: DataTypeProps[];
  clearSupportedOnRootExpression?: boolean;
  pmmlParams?: PMMLParams;
}
export declare function BoxedExpressionEditor(props: BoxedExpressionEditorProps): JSX.Element;
//# sourceMappingURL=BoxedExpressionEditor.d.ts.map
