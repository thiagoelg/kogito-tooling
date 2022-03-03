import EditorPage from "../editor/EditorPage";
import FullScreenPage from "../fullscreen-editor/FullScreenPage";
export default class GitHubEditorPage extends EditorPage {
  private static readonly SEE_AS_SOURCE_BUTTON_LOCATOR;
  private static readonly COPY_LINK_BUTTON_LOCATOR;
  private static readonly COPY_LINK_ALERT_LOCATOR;
  private static readonly SEE_AS_DIAGRAM_BUTTON_LOCATOR;
  private static readonly FULL_SCREEN_BUTTON_LOCATOR;
  private static readonly SOURCE_VIEW_LOCATOR;
  private static readonly KOGITO_CONTAINER_LOCATOR;
  private static readonly KOGITO_TOOLBAR_LOCATOR;
  waitUntilLoaded(): Promise<void>;
  copyLinkToOnlineEditor(): Promise<void>;
  seeAsSource(): Promise<void>;
  seeAsDiagram(): Promise<void>;
  isSourceVisible(): Promise<boolean>;
  isEditorVisible(): Promise<boolean>;
  fullScreen(): Promise<FullScreenPage>;
}
//# sourceMappingURL=GitHubEditorPage.d.ts.map
