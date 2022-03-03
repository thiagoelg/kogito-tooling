import EditorPage from "../editor/EditorPage";
import GitHubEditorPage from "../github-editor/GitHubEditorPage";
export default class FullScreenPage extends EditorPage {
  private static readonly EXIT_BUTTON_LOCATOR;
  exitFullScreen(): Promise<GitHubEditorPage>;
  waitUntilLoaded(): Promise<void>;
  getExitFullScreenUrl(): Promise<string>;
}
//# sourceMappingURL=FullScreenPage.d.ts.map
