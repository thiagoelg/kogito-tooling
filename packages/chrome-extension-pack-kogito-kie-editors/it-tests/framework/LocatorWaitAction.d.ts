import { By, WebDriver } from "selenium-webdriver";
export default class LocatorWaitAction {
  private readonly driver;
  private readonly by;
  private readonly timeout;
  private static readonly DEFAULT_TIMEOUT;
  constructor(driver: WebDriver, by: By, timeout?: number);
  private absent;
  untilAbsent(): Promise<void>;
  isAbsent(): Promise<boolean>;
  private present;
  untilPresent(): Promise<void>;
  isPresent(): Promise<boolean>;
  private visible;
  untilVisible(): Promise<void>;
  isVisible(): Promise<boolean>;
  private value;
  untilHasValue(): Promise<string>;
  hasValue(): Promise<boolean>;
  private enabled;
  untilEnabled(): Promise<void>;
}
//# sourceMappingURL=LocatorWaitAction.d.ts.map
