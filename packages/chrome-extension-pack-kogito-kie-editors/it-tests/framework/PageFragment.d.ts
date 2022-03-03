import Element from "./Element";
import Tools from "../utils/Tools";
export default abstract class PageFragment {
  protected readonly tools: Tools;
  protected readonly root: Element;
  constructor(tools: Tools, root: Element);
  abstract waitUntilLoaded(): Promise<void>;
  static create<T extends PageFragment>(
    type: new (tools: Tools, root: Element) => T,
    tools: Tools,
    root: Element
  ): Promise<T>;
}
//# sourceMappingURL=PageFragment.d.ts.map
