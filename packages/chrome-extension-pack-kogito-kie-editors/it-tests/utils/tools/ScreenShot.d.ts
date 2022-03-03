import { WebDriver } from "selenium-webdriver";
export default class Screenshots {
  private readonly driver;
  private readonly screenshotsDir;
  constructor(driver: WebDriver, screenshotsDir: string);
  takePng(fileName: string): Promise<void>;
  takeHtml(fileName: string): Promise<void>;
}
//# sourceMappingURL=ScreenShot.d.ts.map
