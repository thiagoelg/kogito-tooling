import { BrowserWindow } from "electron";
import { DesktopUserData } from "./DesktopUserData";
import { Menu } from "./Menu";
import { DesktopI18n } from "./i18n";
import { I18n } from "@kie-tools-core/i18n/dist/core";
export declare class FileOperations {
  private readonly window;
  private readonly menu;
  private readonly userData;
  private readonly i18n;
  constructor(window: BrowserWindow, menu: Menu, userData: DesktopUserData, desktopI18n: I18n<DesktopI18n>);
  newFile(type: string): void;
  openFile(filePath: string): void;
  openSample(filePath: string): void;
  saveFile(): void;
  saveFileAs(): void;
  private writeFile;
  private savePreview;
}
//# sourceMappingURL=FileOperations.d.ts.map
