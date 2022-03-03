import PageFragment from "../PageFragment";
export default abstract class Editor extends PageFragment {
  private static readonly LOADING_POPUP_LOCATOR;
  private static readonly EXPLORE_ICON_LOCATOR;
  waitUntilLoaded(): Promise<void>;
  enter(): Promise<void>;
  leave(): Promise<void>;
}
//# sourceMappingURL=Editor.d.ts.map
