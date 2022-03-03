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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceService = void 0;
var WorkspacesContext_1 = require("../WorkspacesContext");
var jszip_1 = require("jszip");
var StorageService_1 = require("./StorageService");
var path_1 = require("path");
var minimatch_1 = require("minimatch");
var WorkspaceService = (function () {
  function WorkspaceService(storageService, workspaceDescriptorService, fsService) {
    this.storageService = storageService;
    this.workspaceDescriptorService = workspaceDescriptorService;
    this.fsService = fsService;
  }
  WorkspaceService.prototype.create = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var workspace, files, _a, _b, _c, broadcastChannel1, broadcastChannel2, e_1;
      return __generator(this, function (_d) {
        switch (_d.label) {
          case 0:
            return [
              4,
              this.workspaceDescriptorService.create({
                origin: args.origin,
                preferredName: args.preferredName,
              }),
            ];
          case 1:
            workspace = _d.sent();
            _d.label = 2;
          case 2:
            _d.trys.push([2, 7, , 9]);
            if (!args.useInMemoryFs) return [3, 3];
            _a = this.fsService.withInMemoryFs(workspace.workspaceId, function (fs) {
              return args.storeFiles(fs, workspace);
            });
            return [3, 5];
          case 3:
            _c = (_b = args).storeFiles;
            return [4, this.fsService.getWorkspaceFs(workspace.workspaceId)];
          case 4:
            _a = _c.apply(_b, [_d.sent(), workspace]);
            _d.label = 5;
          case 5:
            return [4, _a];
          case 6:
            files = _d.sent();
            if (args.broadcastArgs.broadcast) {
              broadcastChannel1 = new BroadcastChannel("workspaces");
              broadcastChannel2 = new BroadcastChannel(workspace.workspaceId);
              broadcastChannel1.postMessage({
                type: "ADD_WORKSPACE",
                workspaceId: workspace.workspaceId,
              });
              broadcastChannel2.postMessage({ type: "ADD", workspaceId: workspace.workspaceId });
            }
            return [2, { workspace: workspace, files: files }];
          case 7:
            e_1 = _d.sent();
            return [4, this.workspaceDescriptorService.delete(workspace.workspaceId)];
          case 8:
            _d.sent();
            throw e_1;
          case 9:
            return [2];
        }
      });
    });
  };
  WorkspaceService.prototype.getFilesWithLazyContent = function (fs, workspaceId, globPattern) {
    return __awaiter(this, void 0, void 0, function () {
      var matcher, gitDirPath;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            matcher = globPattern ? new minimatch_1.Minimatch(globPattern, { dot: true }) : undefined;
            gitDirPath = this.getAbsolutePath({ workspaceId: workspaceId, relativePath: ".git" });
            return [
              4,
              this.storageService.walk({
                fs: fs,
                startFromDirPath: this.getAbsolutePath({ workspaceId: workspaceId }),
                shouldExcludeDir: function (dirPath) {
                  return dirPath === gitDirPath;
                },
                onVisit: function (_a) {
                  var absolutePath = _a.absolutePath,
                    relativePath = _a.relativePath;
                  return __awaiter(_this, void 0, void 0, function () {
                    var workspaceFile;
                    var _this = this;
                    return __generator(this, function (_b) {
                      workspaceFile = new WorkspacesContext_1.WorkspaceFile({
                        workspaceId: workspaceId,
                        relativePath: relativePath,
                        getFileContents: function () {
                          return _this.storageService.getFile(fs, absolutePath).then(function (f) {
                            return f.getFileContents();
                          });
                        },
                      });
                      if (matcher && !matcher.match(workspaceFile.name)) {
                        return [2, undefined];
                      }
                      return [2, workspaceFile];
                    });
                  });
                },
              }),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  WorkspaceService.prototype.delete = function (workspaceId, broadcastArgs) {
    return __awaiter(this, void 0, void 0, function () {
      var broadcastChannel1, broadcastChannel2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.workspaceDescriptorService.delete(workspaceId)];
          case 1:
            _a.sent();
            indexedDB.deleteDatabase(workspaceId);
            if (broadcastArgs.broadcast) {
              broadcastChannel1 = new BroadcastChannel("workspaces");
              broadcastChannel2 = new BroadcastChannel(workspaceId);
              broadcastChannel1.postMessage({ type: "DELETE_WORKSPACE", workspaceId: workspaceId });
              broadcastChannel2.postMessage({ type: "DELETE", workspaceId: workspaceId });
            }
            return [2];
        }
      });
    });
  };
  WorkspaceService.prototype.rename = function (workspaceId, newName, broadcastArgs) {
    return __awaiter(this, void 0, void 0, function () {
      var broadcastChannel1, broadcastChannel2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.workspaceDescriptorService.rename(workspaceId, newName)];
          case 1:
            _a.sent();
            if (!broadcastArgs.broadcast) return [3, 3];
            return [4, this.workspaceDescriptorService.bumpLastUpdatedDate(workspaceId)];
          case 2:
            _a.sent();
            broadcastChannel1 = new BroadcastChannel("workspaces");
            broadcastChannel2 = new BroadcastChannel(workspaceId);
            broadcastChannel1.postMessage({ type: "RENAME_WORKSPACE", workspaceId: workspaceId });
            broadcastChannel2.postMessage({ type: "RENAME", workspaceId: workspaceId });
            _a.label = 3;
          case 3:
            return [2];
        }
      });
    });
  };
  WorkspaceService.prototype.prepareZip = function (fs, workspaceId, onlyExtensions) {
    return __awaiter(this, void 0, void 0, function () {
      var workspaceRootDirPath, gitDirPath, paths, files, zip, files_1, files_1_1, file;
      var e_2, _a;
      var _this = this;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            workspaceRootDirPath = this.getAbsolutePath({ workspaceId: workspaceId });
            gitDirPath = this.getAbsolutePath({ workspaceId: workspaceId, relativePath: ".git" });
            return [
              4,
              this.storageService.walk({
                fs: fs,
                startFromDirPath: workspaceRootDirPath,
                shouldExcludeDir: function (dirPath) {
                  return dirPath === gitDirPath;
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
            paths = _b.sent();
            return [4, this.storageService.getFiles(fs, paths)];
          case 2:
            files = _b.sent().filter(function (f) {
              return !onlyExtensions || onlyExtensions.includes((0, path_1.extname)(f.path).slice(1));
            });
            zip = new jszip_1.default();
            try {
              for (files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                file = files_1_1.value;
                zip.file((0, path_1.relative)(workspaceRootDirPath, file.path), file.content);
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
              } finally {
                if (e_2) throw e_2.error;
              }
            }
            return [4, zip.generateAsync({ type: "blob" })];
          case 3:
            return [2, _b.sent()];
        }
      });
    });
  };
  WorkspaceService.prototype.createOrOverwriteFile = function (fs, file, broadcastArgs) {
    return __awaiter(this, void 0, void 0, function () {
      var broadcastChannel1, broadcastChannel2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.storageService.createOrOverwriteFile(fs, this.toStorageFile(file))];
          case 1:
            _a.sent();
            if (!broadcastArgs.broadcast) return [3, 3];
            return [4, this.workspaceDescriptorService.bumpLastUpdatedDate(file.workspaceId)];
          case 2:
            _a.sent();
            broadcastChannel1 = new BroadcastChannel(this.getUniqueFileIdentifier(file));
            broadcastChannel2 = new BroadcastChannel(file.workspaceId);
            broadcastChannel1.postMessage({
              type: "ADD",
              relativePath: file.relativePath,
            });
            broadcastChannel2.postMessage({
              type: "ADD_FILE",
              relativePath: file.relativePath,
            });
            _a.label = 3;
          case 3:
            return [2];
        }
      });
    });
  };
  WorkspaceService.prototype.getFile = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var absolutePath, storageFile;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            absolutePath = this.getAbsolutePath(args);
            return [4, this.storageService.getFile(args.fs, absolutePath)];
          case 1:
            storageFile = _a.sent();
            if (!storageFile) {
              return [2];
            }
            return [2, this.toWorkspaceFile(args.workspaceId, storageFile)];
        }
      });
    });
  };
  WorkspaceService.prototype.updateFile = function (fs, file, getNewContents, broadcastArgs) {
    return __awaiter(this, void 0, void 0, function () {
      var broadcastChannel1, broadcastChannel2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              this.storageService.updateFile(
                fs,
                this.toStorageFile(
                  new WorkspacesContext_1.WorkspaceFile({
                    relativePath: file.relativePath,
                    workspaceId: file.workspaceId,
                    getFileContents: function () {
                      return getNewContents().then(function (c) {
                        return WorkspacesContext_1.encoder.encode(c);
                      });
                    },
                  })
                )
              ),
            ];
          case 1:
            _a.sent();
            if (!broadcastArgs.broadcast) return [3, 3];
            return [4, this.workspaceDescriptorService.bumpLastUpdatedDate(file.workspaceId)];
          case 2:
            _a.sent();
            broadcastChannel1 = new BroadcastChannel(this.getUniqueFileIdentifier(file));
            broadcastChannel2 = new BroadcastChannel(file.workspaceId);
            broadcastChannel1.postMessage({
              type: "UPDATE",
              relativePath: file.relativePath,
            });
            broadcastChannel2.postMessage({
              type: "UPDATE_FILE",
              relativePath: file.relativePath,
            });
            _a.label = 3;
          case 3:
            return [2];
        }
      });
    });
  };
  WorkspaceService.prototype.deleteFile = function (fs, file, broadcastArgs) {
    return __awaiter(this, void 0, void 0, function () {
      var broadcastChannel1, broadcastChannel2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.storageService.deleteFile(fs, this.toStorageFile(file).path)];
          case 1:
            _a.sent();
            if (!broadcastArgs.broadcast) return [3, 3];
            return [4, this.workspaceDescriptorService.bumpLastUpdatedDate(file.workspaceId)];
          case 2:
            _a.sent();
            broadcastChannel1 = new BroadcastChannel(this.getUniqueFileIdentifier(file));
            broadcastChannel2 = new BroadcastChannel(file.workspaceId);
            broadcastChannel1.postMessage({
              type: "DELETE",
              relativePath: file.relativePath,
            });
            broadcastChannel2.postMessage({
              type: "DELETE_FILE",
              relativePath: file.relativePath,
            });
            _a.label = 3;
          case 3:
            return [2];
        }
      });
    });
  };
  WorkspaceService.prototype.renameFile = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var renamedStorageFile, renamedWorkspaceFile, broadcastChannel1, broadcastChannel2, broadcastChannel3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              this.storageService.renameFile(args.fs, this.toStorageFile(args.file), args.newFileNameWithoutExtension),
            ];
          case 1:
            renamedStorageFile = _a.sent();
            renamedWorkspaceFile = this.toWorkspaceFile(args.file.workspaceId, renamedStorageFile);
            if (!args.broadcastArgs.broadcast) return [3, 3];
            return [4, this.workspaceDescriptorService.bumpLastUpdatedDate(args.file.workspaceId)];
          case 2:
            _a.sent();
            broadcastChannel1 = new BroadcastChannel(this.getUniqueFileIdentifier(args.file));
            broadcastChannel2 = new BroadcastChannel(this.getUniqueFileIdentifier(renamedWorkspaceFile));
            broadcastChannel3 = new BroadcastChannel(args.file.workspaceId);
            broadcastChannel1.postMessage({
              type: "RENAME",
              oldRelativePath: args.file.relativePath,
              newRelativePath: renamedWorkspaceFile.relativePath,
            });
            broadcastChannel2.postMessage({
              type: "ADD",
              relativePath: renamedWorkspaceFile.relativePath,
            });
            broadcastChannel3.postMessage({
              type: "RENAME_FILE",
              oldRelativePath: args.file.relativePath,
              newRelativePath: renamedWorkspaceFile.relativePath,
            });
            _a.label = 3;
          case 3:
            return [2, renamedWorkspaceFile];
        }
      });
    });
  };
  WorkspaceService.prototype.existsFile = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2, this.storageService.exists(args.fs, this.getAbsolutePath(args))];
      });
    });
  };
  WorkspaceService.prototype.getAbsolutePath = function (args) {
    var _a;
    return (0, path_1.join)("/", (_a = args.relativePath) !== null && _a !== void 0 ? _a : "");
  };
  WorkspaceService.prototype.deleteFiles = function (fs, files, broadcastArgs) {
    return __awaiter(this, void 0, void 0, function () {
      var relativePaths, broadcastChannel;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (files.length === 0) {
              return [2];
            }
            return [
              4,
              Promise.all(
                files
                  .map(function (f) {
                    return _this.toStorageFile(f);
                  })
                  .map(function (f) {
                    return _this.storageService.deleteFile(fs, f.path);
                  })
              ),
            ];
          case 1:
            _a.sent();
            if (!broadcastArgs.broadcast) return [3, 3];
            return [4, this.workspaceDescriptorService.bumpLastUpdatedDate(files[0].workspaceId)];
          case 2:
            _a.sent();
            relativePaths = files.map(function (file) {
              return file.relativePath;
            });
            broadcastChannel = new BroadcastChannel(files[0].workspaceId);
            broadcastChannel.postMessage({
              type: "DELETE_BATCH",
              workspaceId: files[0].workspaceId,
              relativePaths: relativePaths,
            });
            _a.label = 3;
          case 3:
            return [2];
        }
      });
    });
  };
  WorkspaceService.prototype.moveFiles = function (fs, files, newDirPath, broadcastArgs) {
    return __awaiter(this, void 0, void 0, function () {
      var relativePaths, broadcastChannel;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (files.length === 0) {
              return [2];
            }
            return [
              4,
              this.storageService.moveFiles(
                fs,
                files.map(function (f) {
                  return _this.toStorageFile(f);
                }),
                newDirPath
              ),
            ];
          case 1:
            relativePaths = _a.sent();
            if (!broadcastArgs.broadcast) return [3, 3];
            return [4, this.workspaceDescriptorService.bumpLastUpdatedDate(files[0].workspaceId)];
          case 2:
            _a.sent();
            broadcastChannel = new BroadcastChannel(files[0].workspaceId);
            broadcastChannel.postMessage({
              type: "MOVE_BATCH",
              workspaceId: files[0].workspaceId,
              relativePaths: relativePaths,
            });
            _a.label = 3;
          case 3:
            return [2];
        }
      });
    });
  };
  WorkspaceService.prototype.toWorkspaceFile = function (workspaceId, storageFile) {
    return new WorkspacesContext_1.WorkspaceFile({
      workspaceId: workspaceId,
      getFileContents: storageFile.getFileContents,
      relativePath: (0, path_1.relative)(this.getAbsolutePath({ workspaceId: workspaceId }), storageFile.path),
    });
  };
  WorkspaceService.prototype.toStorageFile = function (workspaceFile) {
    return new StorageService_1.StorageFile({
      path: this.getAbsolutePath(workspaceFile),
      getFileContents: workspaceFile.getFileContents,
    });
  };
  WorkspaceService.prototype.getUniqueFileIdentifier = function (args) {
    return args.workspaceId + "__" + this.getAbsolutePath(args);
  };
  return WorkspaceService;
})();
exports.WorkspaceService = WorkspaceService;
//# sourceMappingURL=WorkspaceService.js.map
