import Tools from "../utils/Tools";
export default abstract class Page {
  protected readonly tools: Tools;
  constructor(tools: Tools);
  abstract waitUntilLoaded(): Promise<void>;
  scrollToTop(): Promise<void>;
  static create<T extends Page>(type: new (tools: Tools) => T, tools: Tools): Promise<T>;
}
//# sourceMappingURL=Page.d.ts.map
