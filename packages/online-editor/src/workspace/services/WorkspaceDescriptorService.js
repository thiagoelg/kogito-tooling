"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
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
exports.WorkspaceDescriptorService = exports.NEW_WORKSPACE_DEFAULT_NAME = void 0;
var uuid_1 = require("uuid");
var kie_sandbox_fs_1 = require("@kie-tools/kie-sandbox-fs");
var DefaultBackend_1 = require("@kie-tools/kie-sandbox-fs/dist/DefaultBackend");
var DexieBackend_1 = require("@kie-tools/kie-sandbox-fs/dist/DexieBackend");
var StorageService_1 = require("./StorageService");
var WorkspacesContext_1 = require("../WorkspacesContext");
var WorkspaceOrigin_1 = require("../model/WorkspaceOrigin");
var GitService_1 = require("./GitService");
var JsonParse_1 = require("../../json/JsonParse");
var WORKSPACE_DESCRIPTORS_FS_NAME = "workspaces";
exports.NEW_WORKSPACE_DEFAULT_NAME = "Untitled Folder";
var WorkspaceDescriptorService = (function () {
  function WorkspaceDescriptorService(storageService, descriptorsFs) {
    if (descriptorsFs === void 0) {
      descriptorsFs = new kie_sandbox_fs_1.default(WORKSPACE_DESCRIPTORS_FS_NAME, {
        backend: new DefaultBackend_1.default({
          idbBackendDelegate: function (fileDbName, fileStoreName) {
            return new DexieBackend_1.default(fileDbName, fileStoreName);
          },
        }),
      });
    }
    this.storageService = storageService;
    this.descriptorsFs = descriptorsFs;
  }
  WorkspaceDescriptorService.prototype.listAll = function () {
    return __awaiter(this, void 0, void 0, function () {
      var workspaceDescriptorsFilePaths, workspaceDescriptorFiles;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              this.storageService.walk({
                fs: this.descriptorsFs,
                startFromDirPath: "/",
                shouldExcludeDir: function () {
                  return false;
                },
                onVisit: function (_a) {
                  var absolutePath = _a.absolutePath;
                  return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_b) {
                      return [2, absolutePath];
                    });
                  });
                },
              }),
            ];
          case 1:
            workspaceDescriptorsFilePaths = _a.sent();
            return [4, this.storageService.getFiles(this.descriptorsFs, workspaceDescriptorsFilePaths)];
          case 2:
            workspaceDescriptorFiles = _a.sent();
            return [
              2,
              workspaceDescriptorFiles.map(function (workspaceDescriptorFile) {
                return (0,
                JsonParse_1.jsonParseWithUrl)(WorkspacesContext_1.decoder.decode(workspaceDescriptorFile.content));
              }),
            ];
        }
      });
    });
  };
  WorkspaceDescriptorService.prototype.bumpLastUpdatedDate = function (workspaceId) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, _b, _c, _d, _e;
      return __generator(this, function (_f) {
        switch (_f.label) {
          case 0:
            _b = (_a = this.storageService).updateFile;
            _c = [this.descriptorsFs];
            _d = this.toStorageFile;
            _e = [{}];
            return [4, this.get(workspaceId)];
          case 1:
            return [
              4,
              _b.apply(
                _a,
                _c.concat([
                  _d.apply(this, [
                    __assign.apply(void 0, [
                      __assign.apply(void 0, _e.concat([_f.sent()])),
                      { lastUpdatedDateISO: new Date().toISOString() },
                    ]),
                  ]),
                ])
              ),
            ];
          case 2:
            _f.sent();
            return [2];
        }
      });
    });
  };
  WorkspaceDescriptorService.prototype.get = function (workspaceId) {
    return __awaiter(this, void 0, void 0, function () {
      var workspaceDescriptorFile, _a, _b, _c;
      return __generator(this, function (_d) {
        switch (_d.label) {
          case 0:
            return [4, this.storageService.getFile(this.descriptorsFs, "/".concat(workspaceId))];
          case 1:
            workspaceDescriptorFile = _d.sent();
            if (!workspaceDescriptorFile) {
              throw new Error("Workspace not found (".concat(workspaceId, ")"));
            }
            _a = JsonParse_1.jsonParseWithUrl;
            _c = (_b = WorkspacesContext_1.decoder).decode;
            return [4, workspaceDescriptorFile.getFileContents()];
          case 2:
            return [2, _a.apply(void 0, [_c.apply(_b, [_d.sent()])])];
        }
      });
    });
  };
  WorkspaceDescriptorService.prototype.create = function (args) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
      var workspace;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            workspace = {
              workspaceId: this.newWorkspaceId(),
              name:
                ((_a = args.preferredName) === null || _a === void 0 ? void 0 : _a.trim()) ||
                exports.NEW_WORKSPACE_DEFAULT_NAME,
              origin: args.origin,
              createdDateISO: new Date().toISOString(),
              lastUpdatedDateISO: new Date().toISOString(),
            };
            return [4, this.storageService.createOrOverwriteFile(this.descriptorsFs, this.toStorageFile(workspace))];
          case 1:
            _b.sent();
            return [2, workspace];
        }
      });
    });
  };
  WorkspaceDescriptorService.prototype.delete = function (workspaceId) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.storageService.deleteFile(this.descriptorsFs, "/".concat(workspaceId))];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  WorkspaceDescriptorService.prototype.rename = function (workspaceId, newName) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, _b, _c, _d, _e;
      return __generator(this, function (_f) {
        switch (_f.label) {
          case 0:
            _b = (_a = this.storageService).updateFile;
            _c = [this.descriptorsFs];
            _d = this.toStorageFile;
            _e = [{}];
            return [4, this.get(workspaceId)];
          case 1:
            return [
              4,
              _b.apply(
                _a,
                _c.concat([
                  _d.apply(this, [
                    __assign.apply(void 0, [__assign.apply(void 0, _e.concat([_f.sent()])), { name: newName }]),
                  ]),
                ])
              ),
            ];
          case 2:
            _f.sent();
            return [2];
        }
      });
    });
  };
  WorkspaceDescriptorService.prototype.turnIntoGist = function (workspaceId, gistUrl) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, _b, _c, _d, _e;
      return __generator(this, function (_f) {
        switch (_f.label) {
          case 0:
            _b = (_a = this.storageService).updateFile;
            _c = [this.descriptorsFs];
            _d = this.toStorageFile;
            _e = [{}];
            return [4, this.get(workspaceId)];
          case 1:
            return [
              4,
              _b.apply(
                _a,
                _c.concat([
                  _d.apply(this, [
                    __assign.apply(void 0, [
                      __assign.apply(void 0, _e.concat([_f.sent()])),
                      {
                        origin: {
                          kind: WorkspaceOrigin_1.WorkspaceKind.GITHUB_GIST,
                          url: gistUrl,
                          branch: GitService_1.GIST_DEFAULT_BRANCH,
                        },
                      },
                    ]),
                  ]),
                ])
              ),
            ];
          case 2:
            _f.sent();
            return [2];
        }
      });
    });
  };
  WorkspaceDescriptorService.prototype.turnIntoGit = function (workspaceId, url) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, _b, _c, _d, _e;
      return __generator(this, function (_f) {
        switch (_f.label) {
          case 0:
            _b = (_a = this.storageService).updateFile;
            _c = [this.descriptorsFs];
            _d = this.toStorageFile;
            _e = [{}];
            return [4, this.get(workspaceId)];
          case 1:
            return [
              4,
              _b.apply(
                _a,
                _c.concat([
                  _d.apply(this, [
                    __assign.apply(void 0, [
                      __assign.apply(void 0, _e.concat([_f.sent()])),
                      {
                        origin: {
                          kind: WorkspaceOrigin_1.WorkspaceKind.GIT,
                          url: url,
                          branch: GitService_1.GIT_DEFAULT_BRANCH,
                        },
                      },
                    ]),
                  ]),
                ])
              ),
            ];
          case 2:
            _f.sent();
            return [2];
        }
      });
    });
  };
  WorkspaceDescriptorService.prototype.toStorageFile = function (descriptor) {
    return new StorageService_1.StorageFile({
      path: "/".concat(descriptor.workspaceId),
      getFileContents: function () {
        return Promise.resolve(WorkspacesContext_1.encoder.encode(JSON.stringify(descriptor)));
      },
    });
  };
  WorkspaceDescriptorService.prototype.newWorkspaceId = function () {
    return (0, uuid_1.v4)();
  };
  return WorkspaceDescriptorService;
})();
exports.WorkspaceDescriptorService = WorkspaceDescriptorService;
//# sourceMappingURL=WorkspaceDescriptorService.js.map
