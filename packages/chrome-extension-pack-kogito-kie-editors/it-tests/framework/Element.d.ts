import { By, WebElement } from "selenium-webdriver";
export default class Element {
  private readonly webElement;
  constructor(webElement: WebElement);
  dragAndDrop(x: number, y: number): Promise<void>;
  sendKeys(keys: string): Promise<void>;
  getText(): Promise<string>;
  clickJs(): Promise<void>;
  click(): Promise<void>;
  offsetClick(x: number, y: number): Promise<void>;
  offsetMove(x: number, y: number): Promise<void>;
  scroll(): Promise<void>;
  getAttribute(attributeName: string): Promise<string>;
  findElement(by: By): Promise<Element>;
  findElements(by: By): Promise<Element[]>;
  enterFrame(): Promise<void>;
  markWithRedColor(): Promise<void>;
}
//# sourceMappingURL=Element.d.ts.map
