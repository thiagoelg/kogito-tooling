"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __values =
  (this && this.__values) ||
  function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = exports.StorageFile = exports.EagerStorageFile = void 0;
var path_1 = require("path");
var EagerStorageFile = (function () {
  function EagerStorageFile(args) {
    this.args = args;
  }
  Object.defineProperty(EagerStorageFile.prototype, "path", {
    get: function () {
      return this.args.path;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(EagerStorageFile.prototype, "content", {
    get: function () {
      return this.args.content;
    },
    enumerable: false,
    configurable: true,
  });
  return EagerStorageFile;
})();
exports.EagerStorageFile = EagerStorageFile;
var StorageFile = (function () {
  function StorageFile(args) {
    this.args = args;
  }
  Object.defineProperty(StorageFile.prototype, "path", {
    get: function () {
      return this.args.path;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(StorageFile.prototype, "getFileContents", {
    get: function () {
      return this.args.getFileContents;
    },
    enumerable: false,
    configurable: true,
  });
  return StorageFile;
})();
exports.StorageFile = StorageFile;
var StorageService = (function () {
  function StorageService() {}
  StorageService.prototype.createOrOverwriteFile = function (fs, file) {
    return __awaiter(this, void 0, void 0, function () {
      var contents, err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, file.getFileContents()];
          case 1:
            contents = _a.sent();
            _a.label = 2;
          case 2:
            _a.trys.push([2, 4, , 7]);
            return [4, fs.promises.writeFile(file.path, contents)];
          case 3:
            _a.sent();
            return [3, 7];
          case 4:
            err_1 = _a.sent();
            return [4, this.mkdirDeep(fs, (0, path_1.dirname)(file.path))];
          case 5:
            _a.sent();
            return [4, fs.promises.writeFile(file.path, contents)];
          case 6:
            _a.sent();
            return [3, 7];
          case 7:
            return [2];
        }
      });
    });
  };
  StorageService.prototype.createFiles = function (fs, files) {
    return __awaiter(this, void 0, void 0, function () {
      var files_1, files_1_1, file, e_1_1, filesArray;
      var e_1, _a;
      var _this = this;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (!fs.promises.writeFileBulk) {
              throw new Error("Can't write bulk");
            }
            _b.label = 1;
          case 1:
            _b.trys.push([1, 6, 7, 8]);
            (files_1 = __values(files)), (files_1_1 = files_1.next());
            _b.label = 2;
          case 2:
            if (!!files_1_1.done) return [3, 5];
            file = files_1_1.value;
            return [4, this.mkdirDeep(fs, (0, path_1.dirname)(file.path))];
          case 3:
            _b.sent();
            _b.label = 4;
          case 4:
            files_1_1 = files_1.next();
            return [3, 2];
          case 5:
            return [3, 8];
          case 6:
            e_1_1 = _b.sent();
            e_1 = { error: e_1_1 };
            return [3, 8];
          case 7:
            try {
              if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
            } finally {
              if (e_1) throw e_1.error;
            }
            return [7];
          case 8:
            return [
              4,
              Promise.all(
                files.map(function (f) {
                  return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                      switch (_b.label) {
                        case 0:
                          _a = [f.path];
                          return [4, f.getFileContents()];
                        case 1:
                          return [2, _a.concat([_b.sent()])];
                      }
                    });
                  });
                })
              ),
            ];
          case 9:
            filesArray = _b.sent();
            return [4, fs.promises.writeFileBulk(filesArray)];
          case 10:
            _b.sent();
            return [2];
        }
      });
    });
  };
  StorageService.prototype.updateFile = function (fs, file) {
    return __awaiter(this, void 0, void 0, function () {
      var content;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.exists(fs, file.path)];
          case 1:
            if (!_a.sent()) {
              throw new Error("File ".concat(file.path, " does not exist"));
            }
            return [4, file.getFileContents()];
          case 2:
            content = _a.sent();
            return [4, fs.promises.writeFile(file.path, content)];
          case 3:
            _a.sent();
            return [2];
        }
      });
    });
  };
  StorageService.prototype.deleteFile = function (fs, path) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, fs.promises.unlink(path)];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  StorageService.prototype.renameFile = function (fs, file, newFileName) {
    return __awaiter(this, void 0, void 0, function () {
      var newPath, newFile;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.exists(fs, file.path)];
          case 1:
            if (!_a.sent()) {
              throw new Error("File ".concat(file.path, " does not exist"));
            }
            if ((0, path_1.basename)(file.path) === newFileName) {
              return [2, file];
            }
            newPath = (0, path_1.join)(
              (0, path_1.dirname)(file.path),
              "".concat(newFileName).concat((0, path_1.extname)(file.path))
            );
            return [4, this.exists(fs, newPath)];
          case 2:
            if (_a.sent()) {
              throw new Error("File ".concat(newPath, " already exists"));
            }
            newFile = new StorageFile({
              path: newPath,
              getFileContents: file.getFileContents,
            });
            return [4, fs.promises.rename(file.path, newFile.path)];
          case 3:
            _a.sent();
            return [2, newFile];
        }
      });
    });
  };
  StorageService.prototype.moveFile = function (fs, file, newDirPath) {
    return __awaiter(this, void 0, void 0, function () {
      var newPath, newFile;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.exists(fs, file.path)];
          case 1:
            if (!_a.sent()) {
              throw new Error("File ".concat(file.path, " does not exist"));
            }
            newPath = (0, path_1.join)(newDirPath, (0, path_1.basename)(file.path));
            newFile = new StorageFile({
              getFileContents: file.getFileContents,
              path: newPath,
            });
            return [4, this.createOrOverwriteFile(fs, newFile)];
          case 2:
            _a.sent();
            return [4, this.deleteFile(fs, file.path)];
          case 3:
            _a.sent();
            return [2, newFile];
        }
      });
    });
  };
  StorageService.prototype.moveFiles = function (fs, files, newDirPath) {
    return __awaiter(this, void 0, void 0, function () {
      var paths, files_2, files_2_1, fileToMove, movedFile, e_2_1;
      var e_2, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            paths = new Map();
            _b.label = 1;
          case 1:
            _b.trys.push([1, 6, 7, 8]);
            (files_2 = __values(files)), (files_2_1 = files_2.next());
            _b.label = 2;
          case 2:
            if (!!files_2_1.done) return [3, 5];
            fileToMove = files_2_1.value;
            return [4, this.moveFile(fs, fileToMove, newDirPath)];
          case 3:
            movedFile = _b.sent();
            paths.set(fileToMove.path, movedFile.path);
            _b.label = 4;
          case 4:
            files_2_1 = files_2.next();
            return [3, 2];
          case 5:
            return [3, 8];
          case 6:
            e_2_1 = _b.sent();
            e_2 = { error: e_2_1 };
            return [3, 8];
          case 7:
            try {
              if (files_2_1 && !files_2_1.done && (_a = files_2.return)) _a.call(files_2);
            } finally {
              if (e_2) throw e_2.error;
            }
            return [7];
          case 8:
            return [2, paths];
        }
      });
    });
  };
  StorageService.prototype.getFile = function (fs, path) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.exists(fs, path)];
          case 1:
            if (!_a.sent()) {
              return [2];
            }
            return [
              2,
              new StorageFile({
                path: path,
                getFileContents: function () {
                  return fs.promises.readFile(path);
                },
              }),
            ];
        }
      });
    });
  };
  StorageService.prototype.getFiles = function (fs, paths) {
    return __awaiter(this, void 0, void 0, function () {
      var files;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!fs.promises.readFileBulk) {
              throw new Error("Can't read bulk");
            }
            return [4, fs.promises.readFileBulk(paths)];
          case 1:
            files = _a.sent();
            return [
              2,
              files.map(function (_a) {
                var _b = __read(_a, 2),
                  path = _b[0],
                  content = _b[1];
                return new EagerStorageFile({
                  path: path,
                  content: content,
                });
              }),
            ];
        }
      });
    });
  };
  StorageService.prototype.mkdirDeep = function (fs, dirPath, _selfCall) {
    if (_selfCall === void 0) {
      _selfCall = false;
    }
    return __awaiter(this, void 0, void 0, function () {
      var err_2, parent_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 6]);
            return [4, fs.promises.mkdir(dirPath)];
          case 1:
            _a.sent();
            return [2];
          case 2:
            err_2 = _a.sent();
            if (err_2 === null) {
              return [2];
            }
            if (err_2.code === "EEXIST") {
              return [2];
            }
            if (_selfCall) {
              throw err_2;
            }
            if (!(err_2.code === "ENOENT")) return [3, 5];
            parent_1 = (0, path_1.dirname)(dirPath);
            if (parent_1 === "." || parent_1 === "/" || parent_1 === dirPath) {
              throw err_2;
            }
            return [4, this.mkdirDeep(fs, parent_1)];
          case 3:
            _a.sent();
            return [4, this.mkdirDeep(fs, dirPath, true)];
          case 4:
            _a.sent();
            _a.label = 5;
          case 5:
            return [3, 6];
          case 6:
            return [2];
        }
      });
    });
  };
  StorageService.prototype.exists = function (fs, path) {
    return __awaiter(this, void 0, void 0, function () {
      var err_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4, fs.promises.stat(path)];
          case 1:
            _a.sent();
            return [2, true];
          case 2:
            err_3 = _a.sent();
            if (err_3.code === "ENOENT" || err_3.code === "ENOTDIR") {
              return [2, false];
            } else {
              console.log("Unexpected error when trying to check if file exists", err_3);
              throw err_3;
            }
            return [3, 3];
          case 3:
            return [2];
        }
      });
    });
  };
  StorageService.prototype.walk = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var subDirPaths, files;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, args.fs.promises.readdir(args.startFromDirPath)];
          case 1:
            subDirPaths = _a.sent();
            return [
              4,
              Promise.all(
                subDirPaths.map(function (subDirPath) {
                  return __awaiter(_this, void 0, void 0, function () {
                    var absolutePath, relativePath;
                    var _a, _b;
                    return __generator(this, function (_c) {
                      switch (_c.label) {
                        case 0:
                          absolutePath = (0, path_1.resolve)(args.startFromDirPath, subDirPath);
                          relativePath = (0, path_1.relative)(
                            (_a = args.originalStartingDirPath) !== null && _a !== void 0 ? _a : args.startFromDirPath,
                            absolutePath
                          );
                          return [4, args.fs.promises.stat(absolutePath)];
                        case 1:
                          return [
                            2,
                            !_c.sent().isDirectory()
                              ? args.onVisit({ absolutePath: absolutePath, relativePath: relativePath })
                              : args.shouldExcludeDir(absolutePath)
                              ? []
                              : this.walk({
                                  fs: args.fs,
                                  startFromDirPath: absolutePath,
                                  shouldExcludeDir: args.shouldExcludeDir,
                                  onVisit: args.onVisit,
                                  originalStartingDirPath:
                                    (_b = args.originalStartingDirPath) !== null && _b !== void 0
                                      ? _b
                                      : args.startFromDirPath,
                                }),
                          ];
                      }
                    });
                  });
                })
              ),
            ];
          case 2:
            files = _a.sent();
            return [
              2,
              files.reduce(function (paths, path) {
                return path ? paths.concat(path) : paths;
              }, []),
            ];
        }
      });
    });
  };
  StorageService.prototype.deleteFiles = function (fs, paths) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!fs.promises.unlinkBulk) {
              throw new Error("Can't unlink bulk");
            }
            return [4, fs.promises.unlinkBulk(paths)];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  return StorageService;
})();
exports.StorageService = StorageService;
//# sourceMappingURL=StorageService.js.map
