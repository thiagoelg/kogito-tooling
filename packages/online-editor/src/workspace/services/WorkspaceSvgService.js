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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceSvgService = void 0;
var FsCache_1 = require("./FsCache");
var WorkspacesContext_1 = require("../WorkspacesContext");
var StorageService_1 = require("./StorageService");
var WorkspaceSvgService = (function () {
  function WorkspaceSvgService(storageService, fsCache) {
    if (fsCache === void 0) {
      fsCache = new FsCache_1.FsCache();
    }
    this.storageService = storageService;
    this.fsCache = fsCache;
  }
  WorkspaceSvgService.prototype.getWorkspaceSvgsFs = function (workspaceId) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2, this.fsCache.getOrCreateFs("".concat(workspaceId, "__svgs"))];
      });
    });
  };
  WorkspaceSvgService.prototype.getSvg = function (workspaceFile) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, _b;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            _b = (_a = this.storageService).getFile;
            return [4, this.getWorkspaceSvgsFs(workspaceFile.workspaceId)];
          case 1:
            return [2, _b.apply(_a, [_c.sent(), "/".concat(workspaceFile.relativePath, ".svg")])];
        }
      });
    });
  };
  WorkspaceSvgService.prototype.deleteSvg = function (workspaceFile) {
    return __awaiter(this, void 0, void 0, function () {
      var svgFile, _a, _b;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            return [4, this.getSvg(workspaceFile)];
          case 1:
            svgFile = _c.sent();
            if (!svgFile) {
              console.debug(
                "Can't delete SVG, because it doesn't exist for file '"
                  .concat(workspaceFile.relativePath, "' on Workspace '")
                  .concat(workspaceFile.workspaceId, "'")
              );
              return [2];
            }
            _b = (_a = this.storageService).deleteFile;
            return [4, this.getWorkspaceSvgsFs(workspaceFile.workspaceId)];
          case 2:
            return [4, _b.apply(_a, [_c.sent(), "/".concat(workspaceFile.relativePath, ".svg")])];
          case 3:
            _c.sent();
            return [2];
        }
      });
    });
  };
  WorkspaceSvgService.prototype.createOrOverwriteSvg = function (workspaceFile, svgString) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, _b;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            _b = (_a = this.storageService).createOrOverwriteFile;
            return [4, this.getWorkspaceSvgsFs(workspaceFile.workspaceId)];
          case 1:
            return [
              4,
              _b.apply(_a, [
                _c.sent(),
                new StorageService_1.StorageFile({
                  getFileContents: function () {
                    return Promise.resolve(WorkspacesContext_1.encoder.encode(svgString));
                  },
                  path: "/".concat(workspaceFile.relativePath, ".svg"),
                }),
              ]),
            ];
          case 2:
            _c.sent();
            return [2];
        }
      });
    });
  };
  WorkspaceSvgService.prototype.renameSvg = function (workspaceFile, newFileNameWithoutExtension) {
    return __awaiter(this, void 0, void 0, function () {
      var svgFile, _a, _b;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            return [4, this.getSvg(workspaceFile)];
          case 1:
            svgFile = _c.sent();
            if (!svgFile) {
              console.debug(
                "Can't rename SVG, because it doesn't exist for file '"
                  .concat(workspaceFile.relativePath, "' on Workspace '")
                  .concat(workspaceFile.workspaceId, "'")
              );
              return [2];
            }
            _b = (_a = this.storageService).renameFile;
            return [4, this.getWorkspaceSvgsFs(workspaceFile.workspaceId)];
          case 2:
            return [
              2,
              _b.apply(_a, [
                _c.sent(),
                svgFile,
                "".concat(newFileNameWithoutExtension, ".").concat(workspaceFile.extension),
              ]),
            ];
        }
      });
    });
  };
  WorkspaceSvgService.prototype.delete = function (workspaceId) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        indexedDB.deleteDatabase(WorkspaceSvgService.getSvgStoreName(workspaceId));
        return [2];
      });
    });
  };
  WorkspaceSvgService.getSvgStoreName = function (workspaceId) {
    return "".concat(workspaceId, "__svgs");
  };
  return WorkspaceSvgService;
})();
exports.WorkspaceSvgService = WorkspaceSvgService;
//# sourceMappingURL=WorkspaceSvgService.js.map
