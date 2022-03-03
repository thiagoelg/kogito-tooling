/// <reference types="jest" />
import * as electron from "electron";
export declare const ipcRenderer: {
  on(channel: string, listener: (event?: electron.IpcRendererEvent | undefined, ...args: any[]) => void): void;
  send(channel: string, ...args: any[]): void;
  removeListener(channel: string, callback: () => void): void;
  removeAllListeners(channel: string): void;
};
export declare const ipcMain: {
  on(channel: string, listener: (event: electron.IpcMainEvent, ...args: any[]) => void): void;
  removeAllListeners(channel: string): void;
};
export declare class BrowserWindow {
  constructor(options?: electron.BrowserWindowConstructorOptions);
}
export declare const showSaveDialogMock: jest.Mock<
  Promise<void>,
  [browserWindow: BrowserWindow, options: electron.SaveDialogOptions]
>;
export declare const dialog: {
  showSaveDialog: jest.Mock<Promise<void>, [browserWindow: BrowserWindow, options: electron.SaveDialogOptions]>;
};
//# sourceMappingURL=electron.d.ts.map
