import EditorPage from "../editor/EditorPage";
export default class GitHubPrPage extends EditorPage {
  private static readonly SEE_AS_DIAGRAM_BUTTON_LOCATOR;
  private static readonly CLOSE_DIAGRAM_BUTTON_LOCATOR;
  private static readonly ORIGINAL_BUTTON_LOCATOR;
  private static readonly CHANGES_BUTTON_LOCATOR;
  private static readonly RAW_CONTENT_LOCATOR;
  private static readonly PR_HEADER_LOCATOR;
  waitUntilLoaded(): Promise<void>;
  scrollToPrHeader(): Promise<void>;
  isSourceOpened(): Promise<boolean>;
  isDiagramOpened(): Promise<boolean>;
  seeAsDiagram(): Promise<void>;
  closeDiagram(): Promise<void>;
  original(): Promise<void>;
  changes(): Promise<void>;
}
//# sourceMappingURL=GitHubPrPage.d.ts.map
