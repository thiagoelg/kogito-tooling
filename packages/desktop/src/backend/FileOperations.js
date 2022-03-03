"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileOperations = void 0;
var ElectronFile_1 = require("../common/ElectronFile");
var electron_1 = require("electron");
var Files_1 = require("../storage/core/Files");
var FS_1 = require("../storage/core/FS");
var utils_1 = require("../common/utils");
var path = require("path");
var FileOperations = (function () {
  function FileOperations(window, menu, userData, desktopI18n) {
    var _this = this;
    this.window = window;
    this.menu = menu;
    this.userData = userData;
    this.i18n = desktopI18n.getCurrent();
    electron_1.ipcMain.on("saveFile", function (event, data) {
      if (
        data.action !== ElectronFile_1.FileSaveActions.SAVE_AS &&
        data.file.filePath !== ElectronFile_1.UNSAVED_FILE_NAME &&
        data.file.filePath !== ElectronFile_1.SAMPLE
      ) {
        _this.writeFile(data.file.filePath, data.file.fileContent);
        return;
      }
      electron_1.dialog
        .showSaveDialog(_this.window, {
          defaultPath: "model." + data.file.fileType,
          title: _this.i18n.fileOperations.dialog.saveFile,
          filters: [{ name: data.file.fileType.toUpperCase(), extensions: [data.file.fileType] }],
        })
        .then(function (result) {
          if (result && !result.canceled) {
            _this.writeFile(result.filePath, data.file.fileContent);
          }
        });
    });
    electron_1.ipcMain.on("savePreview", function (event, data) {
      console.info((0, utils_1.removeFileExtension)(data.filePath) + "." + data.fileType);
      electron_1.dialog
        .showSaveDialog(_this.window, {
          defaultPath: (0, utils_1.removeFileExtension)(data.filePath) + "." + data.fileType,
          title: _this.i18n.fileOperations.dialog.savePreview,
          filters: [{ name: data.fileType.toUpperCase(), extensions: [data.fileType] }],
        })
        .then(function (result) {
          if (result && !result.canceled) {
            _this.savePreview(result.filePath, data.fileContent);
          }
        });
    });
    electron_1.ipcMain.on("saveThumbnail", function (event, data) {
      if (data.filePath !== ElectronFile_1.UNSAVED_FILE_NAME) {
        _this.userData.saveFileThumbnail(data.filePath, data.fileType, data.fileContent);
      }
    });
    electron_1.ipcMain.on("requestLastOpenedFiles", function () {
      _this.userData.getLastOpenedFiles().then(function (lastOpenedFiles) {
        _this.window.webContents.send("returnLastOpenedFiles", {
          lastOpenedFiles: lastOpenedFiles,
        });
      });
    });
    electron_1.ipcMain.on("openFileByPath", function (event, data) {
      _this.openFile(data.filePath);
    });
    electron_1.ipcMain.on("createNewFile", function (event, data) {
      _this.newFile(data.type);
    });
    electron_1.ipcMain.on("openSample", function (event, data) {
      _this.openSample(path.join(__dirname, "samples/sample." + data.type));
    });
    electron_1.ipcMain.on("mainWindowLoaded", function (event) {
      if (process.argv.length > 1 && process.argv[1] !== "dist") {
        _this.openFile(process.argv[1]);
      }
    });
  }
  FileOperations.prototype.newFile = function (type) {
    this.window.webContents.send("openFile", {
      file: {
        filePath: ElectronFile_1.UNSAVED_FILE_NAME,
        fileType: type,
        fileContent: "",
      },
    });
    this.menu.setFileMenusEnabled(true);
  };
  FileOperations.prototype.openFile = function (filePath) {
    var _this = this;
    Files_1.Files.read(FS_1.FS.newFile(filePath))
      .then(function (content) {
        _this.window.webContents.send("openFile", {
          file: {
            filePath: filePath,
            fileType: (0, utils_1.extractFileExtension)(filePath),
            fileContent: content,
          },
        });
        _this.menu.setFileMenusEnabled(true);
        _this.userData.registerFile(filePath);
        console.info("File " + filePath + " opened.");
      })
      .catch(function (error) {
        console.info("Failed to open file" + filePath + ":" + error);
        _this.window.webContents.send("returnLastOpenedFiles", {
          lastOpenedFiles: _this.userData.getLastOpenedFiles(),
        });
      });
  };
  FileOperations.prototype.openSample = function (filePath) {
    var _this = this;
    Files_1.Files.read(FS_1.FS.newFile(filePath))
      .then(function (content) {
        var fileExtension = (0, utils_1.extractFileExtension)(filePath);
        _this.window.webContents.send("openFile", {
          file: {
            filePath: ElectronFile_1.SAMPLE + "." + fileExtension,
            fileType: fileExtension,
            fileContent: content,
          },
        });
        _this.menu.setFileMenusEnabled(true);
        console.info("Sample " + filePath + " opened.");
      })
      .catch(function (error) {
        console.info("Failed to open sample" + filePath + ":" + error);
      });
  };
  FileOperations.prototype.saveFile = function () {
    this.window.webContents.send("requestOpenedFile", {
      action: ElectronFile_1.FileSaveActions.SAVE,
    });
  };
  FileOperations.prototype.saveFileAs = function () {
    this.window.webContents.send("requestOpenedFile", {
      action: ElectronFile_1.FileSaveActions.SAVE_AS,
    });
  };
  FileOperations.prototype.writeFile = function (filePath, fileContent) {
    var _this = this;
    Files_1.Files.write(FS_1.FS.newFile(filePath), fileContent)
      .then(function () {
        _this.userData.registerFile(filePath);
        console.info("File " + filePath + " saved.");
        _this.window.webContents.send("saveFileSuccess", { filePath: filePath });
      })
      .catch(function (error) {
        console.info("Failed to save file" + filePath + ":" + error);
      });
  };
  FileOperations.prototype.savePreview = function (filePath, fileContent) {
    var _this = this;
    Files_1.Files.write(FS_1.FS.newFile(filePath), fileContent)
      .then(function () {
        console.info("Preview " + filePath + " saved.");
        _this.window.webContents.send("savePreviewSuccess", {
          filePath: filePath,
        });
      })
      .catch(function (error) {
        console.info("Failed to save preview" + filePath + ":" + error);
      });
  };
  return FileOperations;
})();
exports.FileOperations = FileOperations;
//# sourceMappingURL=FileOperations.js.map
