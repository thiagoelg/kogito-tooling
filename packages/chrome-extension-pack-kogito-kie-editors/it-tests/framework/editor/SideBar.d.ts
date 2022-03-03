import Element from "../Element";
import Explorer from "./Explorer";
import PageFragment from "../PageFragment";
import Properties from "./Properties";
export default class SideBar extends PageFragment {
  private static readonly PROP_BUTTON_LOCATOR;
  private static readonly EXPLORER_BUTTON_LOCATOR;
  private static readonly EXPANDED_BAR_LOCATOR;
  private static readonly TITLE_LOCATOR;
  waitUntilLoaded(): Promise<void>;
  protected openSideBar(byIcon: Element, sideBarTitle: string): Promise<Element>;
  private isSideBarOpen;
  openExplorer(): Promise<Explorer>;
  openProperties(): Promise<Properties>;
}
//# sourceMappingURL=SideBar.d.ts.map
