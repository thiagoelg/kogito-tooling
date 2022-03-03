import { By, WebDriver } from "selenium-webdriver";
import Element from "./Element";
import LocatorWaitAction from "./LocatorWaitAction";
export default class Locator {
  private readonly driver;
  private readonly by;
  constructor(driver: WebDriver, by: By);
  wait(timeout?: number): LocatorWaitAction;
  getElements(): Promise<Element[]>;
  getElement(): Promise<Element>;
}
//# sourceMappingURL=Locator.d.ts.map
