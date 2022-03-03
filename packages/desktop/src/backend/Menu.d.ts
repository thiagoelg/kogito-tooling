import { BrowserWindow } from "electron";
import { DesktopUserData } from "./DesktopUserData";
import { I18n } from "@kie-tools-core/i18n/dist/core";
import { DesktopI18n } from "./i18n";
export declare class Menu {
  private readonly window;
  private readonly userData;
  private readonly fileOperations;
  private readonly i18n;
  private menu;
  private newMenu;
  private openMenu;
  private saveMenu;
  private saveAsMenu;
  private savePreviewAsMenu;
  private closeWindowMenu;
  private quitMenu;
  private fileMenu;
  private macOsFileMenu;
  private macOsAppMenu;
  private editMenu;
  private devMenu;
  constructor(window: BrowserWindow, userData: DesktopUserData, desktopI18n: I18n<DesktopI18n>);
  private initializeMenuProperties;
  setFileMenusEnabled(enabled: boolean): void;
  private getMenuItem;
  setup(): void;
}
//# sourceMappingURL=Menu.d.ts.map
