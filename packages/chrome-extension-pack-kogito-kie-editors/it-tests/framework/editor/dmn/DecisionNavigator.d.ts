import PageFragment from "../../PageFragment";
export default class DecisionNavigator extends PageFragment {
  private static readonly DECISION_GRAPH_LOCATOR;
  private static readonly ITEM_LOCATOR;
  waitUntilLoaded(): Promise<void>;
  private getItems;
  private getNodes;
  getDmnName(): Promise<string>;
  getNodeNames(): Promise<string[]>;
  selectNode(name: string): Promise<void>;
  selectNodeExpression(name: string): Promise<void>;
}
//# sourceMappingURL=DecisionNavigator.d.ts.map
