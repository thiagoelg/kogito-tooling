"use strict";
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.FS = void 0;
var FileMetadata_1 = require("../api/FileMetadata");
var FileType_1 = require("../api/FileType");
var StorageTypes_1 = require("../api/StorageTypes");
var fs = require("fs");
var path = require("path");
var util = require("util");
var FS = (function () {
  function FS() {
    this.type = StorageTypes_1.StorageTypes.FS;
  }
  FS.prototype.read = function (file) {
    if (file.storage.valueOf() === StorageTypes_1.StorageTypes.FS.valueOf()) {
      var readFile = util.promisify(fs.readFile);
      return readFile(file.fullName, "utf-8");
    }
    return Promise.resolve("");
  };
  FS.prototype.write = function (file, content) {
    if (file.storage.valueOf() === StorageTypes_1.StorageTypes.FS.valueOf()) {
      var writeFile = util.promisify(fs.writeFile);
      return writeFile(file.fullName, content, "utf-8");
    }
    return Promise.resolve();
  };
  FS.prototype.exists = function (file) {
    if (file.storage.valueOf() === StorageTypes_1.StorageTypes.FS.valueOf()) {
      return fs.existsSync(file.fullName);
    }
    return false;
  };
  FS.prototype.remove = function (file) {
    if (file.storage.valueOf() === StorageTypes_1.StorageTypes.FS.valueOf()) {
      if (this.isDirectory(file)) {
        return fs.rmdirSync(file.fullName);
      } else {
        return fs.unlinkSync(file.fullName);
      }
    }
  };
  FS.prototype.list = function (directory) {
    var _this = this;
    var result = [];
    if (directory.storage.valueOf() === StorageTypes_1.StorageTypes.FS.valueOf()) {
      fs.readdirSync(directory.fullName).forEach(function (currentFile) {
        var currentFileFullPath = path.join(directory.fullName, currentFile);
        var currentFileObj = FS.newFile(currentFileFullPath);
        result.push(currentFileObj);
        if (_this.isDirectory(currentFileObj)) {
          result.push.apply(result, __spreadArray([], __read(_this.list(currentFileObj)), false));
        }
      });
    }
    return result;
  };
  FS.prototype.isDirectory = function (file) {
    if (file.storage.valueOf() === StorageTypes_1.StorageTypes.FS.valueOf()) {
      return fs.lstatSync(file.fullName).isDirectory();
    }
    return false;
  };
  FS.newFile = function (fullPath) {
    return FS._newFile(
      fullPath,
      fs.existsSync(fullPath) && fs.statSync(fullPath) ? FileType_1.FileType.FOLDER : FileType_1.FileType.FILE
    );
  };
  FS._newFile = function (fullPath, fileType) {
    return new FileMetadata_1.FileMetadata(
      path.basename(fullPath),
      fullPath,
      fullPath,
      fileType,
      "file://".concat(fullPath),
      StorageTypes_1.StorageTypes.FS,
      "",
      fullPath
    );
  };
  return FS;
})();
exports.FS = FS;
//# sourceMappingURL=FS.js.map
