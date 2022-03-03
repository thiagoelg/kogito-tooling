import DmnPalette from "./DmnPalette";
import DmnSideBar from "./DmnSideBar";
import Editor from "../Editor";
import DecisionNavigator from "./DecisionNavigator";
import DmnExpressionEditor from "./DmnExpressionEditor";
export default class DmnEditor extends Editor {
  private static readonly PALETTE_LOCATOR;
  private static readonly EXPRESSION_EDITOR_LOCATOR;
  private static readonly SIDE_BAR_LOCATOR;
  private static readonly LEFT_SIDE_BAR_LOCATOR;
  private static readonly DECISION_GRAPH_LOCATOR;
  getDmnPalette(): Promise<DmnPalette>;
  getExpressionEditor(): Promise<DmnExpressionEditor>;
  getSideBar(): Promise<DmnSideBar>;
  openLeftSideBar(): Promise<DecisionNavigator>;
  dragAndDropAnnotationToCanvas(): Promise<void>;
}
//# sourceMappingURL=DmnEditor.d.ts.map
