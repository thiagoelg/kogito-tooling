"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_utils_1 = require("react-dom/test-utils");
var electron = require("electron");
var ElectronFile_1 = require("../../common/ElectronFile");
var DesktopUserData_1 = require("../../backend/DesktopUserData");
var Menu_1 = require("../../backend/Menu");
var FileOperations_1 = require("../../backend/FileOperations");
var electron_1 = require("../../../__mocks__/electron");
var i18n_1 = require("../../backend/i18n");
var core_1 = require("@kie-tools-core/i18n/dist/core");
beforeEach(function () {
  document.execCommand = function () {
    return true;
  };
});
jest.mock("../../backend/DesktopUserData", function () {
  return {
    DesktopUserData: jest.fn().mockImplementation(),
  };
});
jest.mock("../../backend/Menu", function () {
  return {
    Menu: jest.fn().mockImplementation(),
  };
});
describe("saveFile ipc event", function () {
  test("check dialog for save file as operation", function () {
    var window = new electron.BrowserWindow();
    var userData = new DesktopUserData_1.DesktopUserData();
    var desktopI18n = new core_1.I18n(i18n_1.desktopI18nDefaults, i18n_1.desktopI18nDictionaries);
    var menu = new Menu_1.Menu(window, userData, desktopI18n);
    var fileOperations = new FileOperations_1.FileOperations(window, menu, userData, desktopI18n);
    (0, test_utils_1.act)(function () {
      return electron.ipcRenderer.send("saveFile", {
        action: ElectronFile_1.FileSaveActions.SAVE_AS,
        file: {
          fileType: "dmn",
          fileContent: "content",
        },
      });
    });
    expect(electron_1.showSaveDialogMock).toHaveBeenCalledTimes(1);
    expect(electron_1.showSaveDialogMock.mock.calls[0][0]).toEqual(window);
    expect(electron_1.showSaveDialogMock.mock.calls[0][1].defaultPath).toEqual("model.dmn");
    expect(electron_1.showSaveDialogMock.mock.calls[0][1].title).toEqual("Save file");
    expect(electron_1.showSaveDialogMock.mock.calls[0][1].filters).toHaveLength(1);
    expect(electron_1.showSaveDialogMock.mock.calls[0][1].filters[0].name).toEqual("DMN");
    expect(electron_1.showSaveDialogMock.mock.calls[0][1].filters[0].extensions).toHaveLength(1);
    expect(electron_1.showSaveDialogMock.mock.calls[0][1].filters[0].extensions[0]).toEqual("dmn");
  });
});
//# sourceMappingURL=FileOperations.test.js.map
