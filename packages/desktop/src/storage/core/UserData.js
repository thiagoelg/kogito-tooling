"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserData = void 0;
var electron = require("electron");
var path = require("path");
var fs = require("fs");
var Files_1 = require("./Files");
var FS_1 = require("./FS");
var UserData = (function () {
  function UserData(options) {
    this.basePath = (electron.app || electron.remote.app).getPath("userData");
    this.dataPath = path.join(this.basePath, options.configName + ".json");
    this.defaults = options.defaults;
    this.resourceTypes = options.resourceTypes;
  }
  UserData.prototype.get = function (key) {
    return this.parseDataFile(this.dataPath, this.defaults)[key];
  };
  UserData.prototype.set = function (key, value) {
    var data = this.parseDataFile(this.dataPath, this.defaults);
    data[key] = value;
    fs.writeFileSync(this.dataPath, JSON.stringify(data));
  };
  UserData.prototype.saveResource = function (type, fileName, fileContent) {
    var resourcePath = path.join(this.basePath, type, fileName);
    Files_1.Files.write(FS_1.FS.newFile(resourcePath), fileContent)
      .then(function () {
        console.info("User resource " + resourcePath + " saved.");
      })
      .catch(function (error) {
        console.info("Failed to save user resource" + resourcePath + ":" + error);
      });
  };
  UserData.prototype.readResource = function (type, fileName) {
    this.createResourceFolderIfNecessary(type);
    var resourcePath = path.join(this.basePath, type, fileName);
    return Files_1.Files.read(FS_1.FS.newFile(resourcePath));
  };
  UserData.prototype.listResources = function (type) {
    this.createResourceFolderIfNecessary(type);
    return Files_1.Files.list(FS_1.FS.newFile(path.join(this.basePath, type))).map(function (file) {
      return file.fullName;
    });
  };
  UserData.prototype.deleteResources = function (files) {
    files.forEach(function (file) {
      Files_1.Files.delete(FS_1.FS.newFile(file));
    });
  };
  UserData.prototype.clearData = function () {
    var data = JSON.parse(JSON.stringify(this.defaults));
    fs.writeFileSync(this.dataPath, JSON.stringify(data));
  };
  UserData.prototype.clearResources = function () {
    var _this = this;
    var resourceTypes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      resourceTypes[_i] = arguments[_i];
    }
    resourceTypes.forEach(function (resourceType) {
      _this.createResourceFolderIfNecessary(resourceType);
      var resourceTypeDir = path.join(_this.basePath, resourceType);
      Files_1.Files.delete(FS_1.FS.newFile(resourceTypeDir));
    });
  };
  UserData.prototype.getBasePath = function () {
    return this.basePath;
  };
  UserData.prototype.createResourceFolderIfNecessary = function (type) {
    var resourceTypeDir = path.join(this.getBasePath(), type);
    if (!fs.existsSync(resourceTypeDir)) {
      fs.mkdirSync(resourceTypeDir);
    }
  };
  UserData.prototype.createDataFileIfNecessary = function () {
    if (!fs.existsSync(this.dataPath)) {
      fs.writeFileSync(this.dataPath, JSON.stringify(this.defaults));
      return true;
    }
    return false;
  };
  UserData.prototype.parseDataFile = function (filePath, defaults) {
    if (this.createDataFileIfNecessary()) {
      return this.defaults;
    }
    try {
      return JSON.parse(fs.readFileSync(filePath).toString());
    } catch (error) {
      return defaults;
    }
  };
  return UserData;
})();
exports.UserData = UserData;
//# sourceMappingURL=UserData.js.map
