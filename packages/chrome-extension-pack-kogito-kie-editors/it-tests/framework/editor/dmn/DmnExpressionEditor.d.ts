import PageFragment from "../../PageFragment";
export default class DmnExpressionEditor extends PageFragment {
  private static readonly RETURN_TO_GRAPH_LOCATOR;
  private static readonly BETA_VERSION_ACTIVATOR_LOCATOR;
  private static readonly BETA_VERSION_INDICATOR_LOCATOR;
  waitUntilLoaded(): Promise<void>;
  activateBetaVersion(): Promise<void>;
  assertExpressionIsPresent(expectedTitle: string, expectedType: string): Promise<void>;
}
//# sourceMappingURL=DmnExpressionEditor.d.ts.map
