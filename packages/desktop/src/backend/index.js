"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var Menu_1 = require("./Menu");
var FS_1 = require("../storage/core/FS");
var Files_1 = require("../storage/core/Files");
var DesktopUserData_1 = require("./DesktopUserData");
var core_1 = require("@kie-tools-core/i18n/dist/core");
var i18n_1 = require("./i18n");
var mainWindow = null;
var forceQuit = false;
electron_1.app.on("ready", function () {
  Files_1.Files.register(new FS_1.FS());
  createWindow();
});
electron_1.app.on("before-quit", function () {
  forceQuit = true;
});
var createWindow = function () {
  mainWindow = new electron_1.BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 800,
    minHeight: 480,
    show: false,
    icon: path.join(__dirname, "images/icon.png"),
    webPreferences: {
      contextIsolation: false,
      enableRemoteModule: true,
      nodeIntegration: true,
    },
  });
  mainWindow.loadFile(path.join(__dirname, "index.html")).catch(function (e) {
    return console.error("Error while loading webview index.html");
  });
  mainWindow.once("ready-to-show", function () {
    mainWindow === null || mainWindow === void 0 ? void 0 : mainWindow.show();
  });
  if (process.platform === "darwin") {
    mainWindow.on("close", function (e) {
      if (!forceQuit) {
        e.preventDefault();
        mainWindow === null || mainWindow === void 0 ? void 0 : mainWindow.hide();
      }
    });
  }
  var desktopI18n = new core_1.I18n(i18n_1.desktopI18nDefaults, i18n_1.desktopI18nDictionaries);
  var userData = new DesktopUserData_1.DesktopUserData();
  var menu = new Menu_1.Menu(mainWindow, userData, desktopI18n);
  menu.setup();
};
electron_1.app.on("activate", function () {
  if (electron_1.BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  } else {
    mainWindow === null || mainWindow === void 0 ? void 0 : mainWindow.show();
  }
});
electron_1.app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    electron_1.app.quit();
  }
});
//# sourceMappingURL=index.js.map
