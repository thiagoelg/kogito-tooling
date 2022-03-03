import PageFragment from "../PageFragment";
export default class Explorer extends PageFragment {
  private static readonly PANEL_LOCATOR;
  private static readonly ITEM_LOCATOR;
  waitUntilLoaded(): Promise<void>;
  private getItems;
  private getNodes;
  private getNode;
  getProcessName(): Promise<string>;
  getNodeNames(): Promise<string[]>;
  selectNode(name: string): Promise<void>;
}
//# sourceMappingURL=Explorer.d.ts.map
