import { WebDriver } from "selenium-webdriver";
export default class Clipboard {
  private readonly driver;
  constructor(driver: WebDriver);
  getContent(): Promise<string>;
  private getTextFromHelperInput;
  private pasteContentToHelperInput;
  private getCtrvKeys;
  private addHelperInputToPage;
}
//# sourceMappingURL=Clipboard.d.ts.map
