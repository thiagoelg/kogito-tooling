import { By } from "selenium-webdriver";
import Clipboard from "./tools/Clipboard";
import Element from "../framework/Element";
import Locator from "../framework/Locator";
import Page from "../framework/Page";
import PageFragment from "../framework/PageFragment";
import Window from "./tools/Window";
export default class Tools {
  private readonly driver;
  private readonly testName;
  private static readonly SCREENSHOTS_DIR;
  private readonly screenShot;
  private constructor();
  finishTest(): Promise<void>;
  makeScreenshots(screenshotNamePrefix: string): Promise<void>;
  sleep(timeout: number): Promise<void>;
  by(by: By): Locator;
  clipboard(): Clipboard;
  window(): Window;
  openPage<T extends Page>(type: new (tools: Tools) => T, url: string): Promise<T>;
  createPage<T extends Page>(type: new (tools: Tools) => T): Promise<T>;
  createPageFragment<T extends PageFragment>(type: new (tools: Tools, root: Element) => T, root: Element): Promise<T>;
  static init(testName: string): Promise<Tools>;
}
//# sourceMappingURL=Tools.d.ts.map
