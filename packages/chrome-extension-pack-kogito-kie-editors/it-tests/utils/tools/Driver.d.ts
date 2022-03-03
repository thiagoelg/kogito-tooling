import { WebDriver } from "selenium-webdriver";
export default class Driver {
  static init(): Promise<WebDriver>;
  static openUrl(driver: WebDriver, url: string): Promise<void>;
  static quit(driver: WebDriver): Promise<void>;
}
//# sourceMappingURL=Driver.d.ts.map
