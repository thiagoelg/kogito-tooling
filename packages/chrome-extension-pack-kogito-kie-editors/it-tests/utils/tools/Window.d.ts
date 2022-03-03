import { WebDriver } from "selenium-webdriver";
export default class Window {
  private readonly driver;
  constructor(driver: WebDriver);
  leaveFrame(): Promise<void>;
  scrollToTop(): Promise<void>;
  switchToSecondWindow(): Promise<void>;
  private switchToWindow;
  private getWindowHandles;
  private waitForAnotherWindow;
}
//# sourceMappingURL=Window.d.ts.map
