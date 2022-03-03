import Editor from "../Editor";
import SideBar from "../SideBar";
export default class BpmnEditor extends Editor {
  private static readonly CANVAS_LOCATOR;
  private static readonly PALETTE_LOCATOR;
  private static readonly SIDE_BAR_LOCATOR;
  dragAndDropStartEventToCanvas(): Promise<void>;
  isPalettePresent(): Promise<boolean>;
  private getBpmnPalette;
  private clickToCanvas;
  getSideBar(): Promise<SideBar>;
}
//# sourceMappingURL=BpmnEditor.d.ts.map
