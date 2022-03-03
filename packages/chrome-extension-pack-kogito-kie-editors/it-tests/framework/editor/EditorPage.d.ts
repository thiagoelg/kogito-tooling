import BpmnEditor from "./bpmn/BpmnEditor";
import { By } from "selenium-webdriver";
import DmnEditor from "./dmn/DmnEditor";
import Page from "../Page";
export default abstract class EditorPage extends Page {
  protected static readonly FRAME_LOCATOR: By;
  private getEditor;
  getDmnEditor(): Promise<DmnEditor>;
  getBpmnEditor(): Promise<BpmnEditor>;
}
//# sourceMappingURL=EditorPage.d.ts.map
