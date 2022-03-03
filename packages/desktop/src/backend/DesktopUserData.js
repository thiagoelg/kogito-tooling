"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesktopUserData = void 0;
var UserData_1 = require("../storage/core/UserData");
var Files_1 = require("../storage/core/Files");
var FS_1 = require("../storage/core/FS");
var path = require("path");
var crypto_1 = require("crypto");
var NUMBER_OF_RECENT_FILES_TO_KEEP = 50;
var USER_DATA_FILE_NAME = "config";
var LAST_OPENED_FILES_FIELD_NAME = "lastOpenedFiles";
var THUMBNAILS_RESOURCE_TYPE = "thumbnails";
var DesktopUserData = (function () {
  function DesktopUserData() {
    this.userData = new UserData_1.UserData({
      configName: USER_DATA_FILE_NAME,
      resourceTypes: [THUMBNAILS_RESOURCE_TYPE],
      defaults: {
        lastOpenedFiles: [],
      },
    });
  }
  DesktopUserData.prototype.registerFile = function (fullPath) {
    var lastOpenedFiles = this.userData.get(LAST_OPENED_FILES_FIELD_NAME);
    lastOpenedFiles.unshift(fullPath);
    this.userData.set(
      LAST_OPENED_FILES_FIELD_NAME,
      lastOpenedFiles
        .filter(function (item, i, ar) {
          return ar.indexOf(item) === i;
        })
        .slice(0, NUMBER_OF_RECENT_FILES_TO_KEEP)
    );
  };
  DesktopUserData.prototype.saveFileThumbnail = function (filePath, fileType, fileContent) {
    var thumbnailFileName = this.buildThumbnailFileName(filePath) + "." + fileType;
    this.userData.saveResource(THUMBNAILS_RESOURCE_TYPE, thumbnailFileName, fileContent);
  };
  DesktopUserData.prototype.getLastOpenedFiles = function () {
    var _this = this;
    var updatedData = this.userData.get(LAST_OPENED_FILES_FIELD_NAME).filter(function (file) {
      return Files_1.Files.exists(FS_1.FS.newFile(file));
    });
    this.userData.set(LAST_OPENED_FILES_FIELD_NAME, updatedData);
    var validThumbnails = updatedData.map(function (file) {
      return path.join(
        _this.userData.getBasePath(),
        THUMBNAILS_RESOURCE_TYPE,
        _this.buildThumbnailFileName(file) + ".svg"
      );
    });
    var thumbnailsToRemove = this.userData.listResources(THUMBNAILS_RESOURCE_TYPE).filter(function (thumbnailPath) {
      return !validThumbnails.includes(thumbnailPath);
    });
    this.userData.deleteResources(thumbnailsToRemove);
    return this.getPromisedRecentOpenedFiles(
      updatedData.map(function (filePath) {
        var thumbnailFilePath = _this.buildThumbnailFileName(filePath) + ".svg";
        return {
          filePath: filePath,
          previewPromise: _this.userData.readResource(THUMBNAILS_RESOURCE_TYPE, thumbnailFilePath).catch(function (e) {
            console.log("No thumbnail for file " + filePath);
            return Promise.resolve("");
          }),
        };
      })
    );
  };
  DesktopUserData.prototype.getPromisedRecentOpenedFiles = function (promisedFiles) {
    var _this = this;
    var filesPath = promisedFiles.map(function (file) {
      return file.filePath;
    });
    var previewPromises = promisedFiles.map(function (file) {
      return file.previewPromise;
    });
    return Promise.all(previewPromises)
      .then(function (resolvedPreviews) {
        var recentOpenedFiles = [];
        for (var i = 0; i < resolvedPreviews.length; i++) {
          if (resolvedPreviews[i] !== "") {
            recentOpenedFiles.push({ filePath: filesPath[i], preview: resolvedPreviews[i] });
          }
        }
        return recentOpenedFiles;
      })
      .catch(function (e) {
        console.info("Error while listing last opened files: " + e);
        _this.clear();
        return Promise.resolve([]);
      });
  };
  DesktopUserData.prototype.clear = function () {
    this.userData.clearData();
    this.userData.clearResources(THUMBNAILS_RESOURCE_TYPE);
  };
  DesktopUserData.prototype.buildThumbnailFileName = function (filePath) {
    return (0, crypto_1.createHash)("md5").update(filePath).digest("hex");
  };
  return DesktopUserData;
})();
exports.DesktopUserData = DesktopUserData;
//# sourceMappingURL=DesktopUserData.js.map
