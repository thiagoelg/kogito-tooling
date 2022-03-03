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
exports.WorkspacesContextProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("@kie-tools-core/workspace/dist/api");
var react_1 = require("react");
var GitService_1 = require("./services/GitService");
var StorageService_1 = require("./services/StorageService");
var WorkspaceService_1 = require("./services/WorkspaceService");
var WorkspacesContext_1 = require("./WorkspacesContext");
var EditorEnvelopeLocatorContext_1 = require("../envelopeLocator/EditorEnvelopeLocatorContext");
var path_1 = require("path");
var buffer_1 = require("buffer");
var WorkspaceDescriptorService_1 = require("./services/WorkspaceDescriptorService");
var WorkspaceFsService_1 = require("./services/WorkspaceFsService");
var WorkspaceOrigin_1 = require("./model/WorkspaceOrigin");
var WorkspaceSvgService_1 = require("./services/WorkspaceSvgService");
var EnvContext_1 = require("../env/EnvContext");
var MAX_NEW_FILE_INDEX_ATTEMPTS = 10;
var NEW_FILE_DEFAULT_NAME = "Untitled";
function WorkspacesContextProvider(props) {
  var _this = this;
  var env = (0, EnvContext_1.useEnv)();
  var editorEnvelopeLocator = (0, EditorEnvelopeLocatorContext_1.useEditorEnvelopeLocator)();
  var storageService = (0, react_1.useMemo)(function () {
    return new StorageService_1.StorageService();
  }, []);
  var descriptorService = (0, react_1.useMemo)(
    function () {
      return new WorkspaceDescriptorService_1.WorkspaceDescriptorService(storageService);
    },
    [storageService]
  );
  var svgService = (0, react_1.useMemo)(
    function () {
      return new WorkspaceSvgService_1.WorkspaceSvgService(storageService);
    },
    [storageService]
  );
  var fsService = (0, react_1.useMemo)(
    function () {
      return new WorkspaceFsService_1.WorkspaceFsService(descriptorService);
    },
    [descriptorService]
  );
  var service = (0, react_1.useMemo)(
    function () {
      return new WorkspaceService_1.WorkspaceService(storageService, descriptorService, fsService);
    },
    [storageService, descriptorService, fsService]
  );
  var gitService = (0, react_1.useMemo)(
    function () {
      var envUrl = EnvContext_1.DEFAULT_CORS_PROXY_URL;
      if (envUrl !== env.vars.CORS_PROXY_URL) {
        try {
          new URL(env.vars.CORS_PROXY_URL);
          envUrl = env.vars.CORS_PROXY_URL;
        } catch (e) {
          console.error("Invalid CORS_PROXY_URL: ".concat(env.vars.CORS_PROXY_URL), e);
        }
      }
      return new GitService_1.GitService(envUrl);
    },
    [env.vars.CORS_PROXY_URL]
  );
  var getAbsolutePath = (0, react_1.useCallback)(
    function (args) {
      return service.getAbsolutePath(args);
    },
    [service]
  );
  var getUniqueFileIdentifier = (0, react_1.useCallback)(
    function (args) {
      return service.getUniqueFileIdentifier(args);
    },
    [service]
  );
  var createWorkspace = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, workspace, files, suggestedFirstFile;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              return [
                4,
                service.create({
                  useInMemoryFs: args.useInMemoryFs,
                  storeFiles: args.storeFiles,
                  broadcastArgs: { broadcast: true },
                  origin: args.origin,
                  preferredName: args.preferredName,
                }),
              ];
            case 1:
              (_a = _b.sent()), (workspace = _a.workspace), (files = _a.files);
              if (files.length <= 0) {
                return [2, { workspace: workspace, suggestedFirstFile: undefined }];
              }
              suggestedFirstFile = files
                .filter(function (file) {
                  return editorEnvelopeLocator.hasMappingFor(file.relativePath);
                })
                .sort(function (a, b) {
                  return a.relativePath.localeCompare(b.relativePath);
                })[0];
              return [2, { workspace: workspace, suggestedFirstFile: suggestedFirstFile }];
          }
        });
      });
    },
    [editorEnvelopeLocator, service]
  );
  var hasLocalChanges = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                gitService.hasLocalChanges({
                  fs: args.fs,
                  dir: service.getAbsolutePath({ workspaceId: args.workspaceId }),
                }),
              ];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    },
    [gitService, service]
  );
  var pull = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        var workspace, broadcastChannel2, workspaceEvent;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
          switch (_e.label) {
            case 0:
              return [4, descriptorService.get(args.workspaceId)];
            case 1:
              workspace = _e.sent();
              return [
                4,
                gitService.pull({
                  fs: args.fs,
                  dir: service.getAbsolutePath({ workspaceId: args.workspaceId }),
                  ref: workspace.origin.branch,
                  author: {
                    name:
                      (_b = (_a = args.gitConfig) === null || _a === void 0 ? void 0 : _a.name) !== null &&
                      _b !== void 0
                        ? _b
                        : "Unknown",
                    email:
                      (_d = (_c = args.gitConfig) === null || _c === void 0 ? void 0 : _c.email) !== null &&
                      _d !== void 0
                        ? _d
                        : "unknown@email.com",
                  },
                  authInfo: args.authInfo,
                }),
              ];
            case 2:
              _e.sent();
              broadcastChannel2 = new BroadcastChannel(args.workspaceId);
              workspaceEvent = { type: "PULL", workspaceId: args.workspaceId };
              broadcastChannel2.postMessage(workspaceEvent);
              return [2];
          }
        });
      });
    },
    [descriptorService, gitService, service]
  );
  var createSavePoint = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        var descriptor, workspaceRootDirPath, fileRelativePaths, broadcastChannel, workspaceEvent;
        var _this = this;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
          switch (_e.label) {
            case 0:
              return [4, descriptorService.get(args.workspaceId)];
            case 1:
              descriptor = _e.sent();
              workspaceRootDirPath = service.getAbsolutePath({ workspaceId: args.workspaceId });
              return [
                4,
                gitService.unstagedModifiedFileRelativePaths({
                  fs: args.fs,
                  dir: workspaceRootDirPath,
                }),
              ];
            case 2:
              fileRelativePaths = _e.sent();
              if (fileRelativePaths.length === 0) {
                console.debug("Nothing to commit.");
                return [2];
              }
              return [
                4,
                Promise.all(
                  fileRelativePaths.map(function (relativePath) {
                    return __awaiter(_this, void 0, void 0, function () {
                      return __generator(this, function (_a) {
                        switch (_a.label) {
                          case 0:
                            return [
                              4,
                              service.existsFile({
                                fs: args.fs,
                                workspaceId: args.workspaceId,
                                relativePath: relativePath,
                              }),
                            ];
                          case 1:
                            if (!_a.sent()) return [3, 3];
                            return [
                              4,
                              gitService.add({
                                fs: args.fs,
                                dir: workspaceRootDirPath,
                                relativePath: relativePath,
                              }),
                            ];
                          case 2:
                            _a.sent();
                            return [3, 5];
                          case 3:
                            return [
                              4,
                              gitService.rm({
                                fs: args.fs,
                                dir: workspaceRootDirPath,
                                relativePath: relativePath,
                              }),
                            ];
                          case 4:
                            _a.sent();
                            _a.label = 5;
                          case 5:
                            return [2];
                        }
                      });
                    });
                  })
                ),
              ];
            case 3:
              _e.sent();
              return [
                4,
                gitService.commit({
                  fs: args.fs,
                  dir: workspaceRootDirPath,
                  targetBranch: descriptor.origin.branch,
                  message: "Changes from KIE Sandbox",
                  author: {
                    name:
                      (_b = (_a = args.gitConfig) === null || _a === void 0 ? void 0 : _a.name) !== null &&
                      _b !== void 0
                        ? _b
                        : "Unknown",
                    email:
                      (_d = (_c = args.gitConfig) === null || _c === void 0 ? void 0 : _c.email) !== null &&
                      _d !== void 0
                        ? _d
                        : "unknown@email.com",
                  },
                }),
              ];
            case 4:
              _e.sent();
              broadcastChannel = new BroadcastChannel(args.workspaceId);
              workspaceEvent = { type: "CREATE_SAVE_POINT", workspaceId: args.workspaceId };
              broadcastChannel.postMessage(workspaceEvent);
              return [2];
          }
        });
      });
    },
    [descriptorService, gitService, service]
  );
  var createWorkspaceFromLocal = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                createWorkspace({
                  preferredName: args.preferredName,
                  origin: { kind: WorkspaceOrigin_1.WorkspaceKind.LOCAL, branch: GitService_1.GIT_DEFAULT_BRANCH },
                  useInMemoryFs: args.useInMemoryFs,
                  storeFiles: function (fs, workspace) {
                    return __awaiter(_this, void 0, void 0, function () {
                      var files, workspaceRootDirPath, ignoredPaths;
                      var _this = this;
                      var _a, _b, _c, _d;
                      return __generator(this, function (_e) {
                        switch (_e.label) {
                          case 0:
                            files = args.localFiles
                              .filter(function (file) {
                                return !file.path.startsWith(".git/");
                              })
                              .map(function (localFile) {
                                return new StorageService_1.StorageFile({
                                  path: service.getAbsolutePath({
                                    workspaceId: workspace.workspaceId,
                                    relativePath: localFile.path,
                                  }),
                                  getFileContents: localFile.getFileContents,
                                });
                              });
                            return [4, storageService.createFiles(fs, files)];
                          case 1:
                            _e.sent();
                            return [4, service.getAbsolutePath({ workspaceId: workspace.workspaceId })];
                          case 2:
                            workspaceRootDirPath = _e.sent();
                            return [
                              4,
                              storageService.walk({
                                fs: fs,
                                shouldExcludeDir: function () {
                                  return false;
                                },
                                startFromDirPath: workspaceRootDirPath,
                                onVisit: function (_a) {
                                  var absolutePath = _a.absolutePath,
                                    relativePath = _a.relativePath;
                                  return __awaiter(_this, void 0, void 0, function () {
                                    var isIgnored;
                                    return __generator(this, function (_b) {
                                      switch (_b.label) {
                                        case 0:
                                          return [
                                            4,
                                            gitService.isIgnored({
                                              fs: fs,
                                              dir: workspaceRootDirPath,
                                              filepath: relativePath,
                                            }),
                                          ];
                                        case 1:
                                          isIgnored = _b.sent();
                                          return [2, isIgnored ? absolutePath : undefined];
                                      }
                                    });
                                  });
                                },
                              }),
                            ];
                          case 3:
                            ignoredPaths = _e.sent();
                            return [4, storageService.deleteFiles(fs, ignoredPaths)];
                          case 4:
                            _e.sent();
                            return [
                              4,
                              gitService.init({
                                fs: fs,
                                dir: workspaceRootDirPath,
                              }),
                            ];
                          case 5:
                            _e.sent();
                            return [
                              4,
                              gitService.add({
                                fs: fs,
                                dir: workspaceRootDirPath,
                                relativePath: ".",
                              }),
                            ];
                          case 6:
                            _e.sent();
                            return [
                              4,
                              gitService.commit({
                                fs: fs,
                                dir: workspaceRootDirPath,
                                message: "Initial commit from KIE Sandbox",
                                targetBranch: GitService_1.GIT_DEFAULT_BRANCH,
                                author: {
                                  name:
                                    (_b = (_a = args.gitConfig) === null || _a === void 0 ? void 0 : _a.name) !==
                                      null && _b !== void 0
                                      ? _b
                                      : "Unknown",
                                  email:
                                    (_d = (_c = args.gitConfig) === null || _c === void 0 ? void 0 : _c.email) !==
                                      null && _d !== void 0
                                      ? _d
                                      : "unknown@email.com",
                                },
                              }),
                            ];
                          case 7:
                            _e.sent();
                            return [2, service.getFilesWithLazyContent(fs, workspace.workspaceId)];
                        }
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
    },
    [createWorkspace, gitService, storageService, service]
  );
  var createWorkspaceFromGitRepository = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [
                4,
                createWorkspace({
                  preferredName: args.origin.url.pathname.substring(1),
                  origin: args.origin,
                  useInMemoryFs: true,
                  storeFiles: function (fs, workspace) {
                    return __awaiter(_this, void 0, void 0, function () {
                      return __generator(this, function (_a) {
                        switch (_a.label) {
                          case 0:
                            return [
                              4,
                              gitService.clone({
                                fs: fs,
                                dir: service.getAbsolutePath({ workspaceId: workspace.workspaceId }),
                                repositoryUrl: args.origin.url,
                                gitConfig: args.gitConfig,
                                authInfo: args.authInfo,
                                sourceBranch: args.origin.branch,
                              }),
                            ];
                          case 1:
                            _a.sent();
                            return [2, service.getFilesWithLazyContent(fs, workspace.workspaceId)];
                        }
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
    },
    [createWorkspace, gitService, service]
  );
  var renameFile = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        var newFile;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              newFile = service.renameFile({
                fs: args.fs,
                file: args.file,
                newFileNameWithoutExtension: args.newFileNameWithoutExtension,
                broadcastArgs: { broadcast: true },
              });
              return [4, svgService.renameSvg(args.file, args.newFileNameWithoutExtension)];
            case 1:
              _a.sent();
              return [2, newFile];
          }
        });
      });
    },
    [service, svgService]
  );
  var getFiles = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          return [2, service.getFilesWithLazyContent(args.fs, args.workspaceId)];
        });
      });
    },
    [service]
  );
  var getFile = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          return [2, service.getFile(args)];
        });
      });
    },
    [service]
  );
  var deleteFile = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4, service.deleteFile(args.fs, args.file, { broadcast: true })];
            case 1:
              _a.sent();
              return [4, svgService.deleteSvg(args.file)];
            case 2:
              _a.sent();
              return [2];
          }
        });
      });
    },
    [service, svgService]
  );
  var updateFile = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4, service.updateFile(args.fs, args.file, args.getNewContents, { broadcast: true })];
            case 1:
              _a.sent();
              return [2];
          }
        });
      });
    },
    [service]
  );
  var addFile = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        var i, index, fileName, relativePath, newFile;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              i = 0;
              _a.label = 1;
            case 1:
              if (!(i < MAX_NEW_FILE_INDEX_ATTEMPTS)) return [3, 5];
              index = i === 0 ? "" : "-".concat(i);
              fileName = "".concat(args.name).concat(index, ".").concat(args.extension);
              relativePath = (0, path_1.join)(args.destinationDirRelativePath, fileName);
              return [
                4,
                service.existsFile({ fs: args.fs, workspaceId: args.workspaceId, relativePath: relativePath }),
              ];
            case 2:
              if (_a.sent()) {
                return [3, 4];
              }
              newFile = new WorkspacesContext_1.WorkspaceFile({
                workspaceId: args.workspaceId,
                getFileContents: function () {
                  return Promise.resolve(WorkspacesContext_1.encoder.encode(args.content));
                },
                relativePath: relativePath,
              });
              return [4, service.createOrOverwriteFile(args.fs, newFile, { broadcast: true })];
            case 3:
              _a.sent();
              return [2, newFile];
            case 4:
              i++;
              return [3, 1];
            case 5:
              throw new Error("Max attempts of new empty file exceeded.");
          }
        });
      });
    },
    [service]
  );
  var existsFile = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4, service.existsFile(args)];
            case 1:
              return [2, _a.sent()];
          }
        });
      });
    },
    [service]
  );
  var addEmptyFile = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          return [2, addFile(__assign(__assign({}, args), { name: NEW_FILE_DEFAULT_NAME, content: "" }))];
        });
      });
    },
    [addFile]
  );
  var prepareZip = (0, react_1.useCallback)(
    function (args) {
      return service.prepareZip(args.fs, args.workspaceId, args.onlyExtensions);
    },
    [service]
  );
  var resourceContentGet = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        var file, content, e_1;
        var _a;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              return [4, service.getFile(args)];
            case 1:
              file = _b.sent();
              if (!file) {
                throw new Error(
                  "File '".concat(args.relativePath, "' not found in Workspace ").concat(args.workspaceId)
                );
              }
              _b.label = 2;
            case 2:
              _b.trys.push([2, 4, , 5]);
              return [4, file.getFileContents()];
            case 3:
              content = _b.sent();
              if (((_a = args.opts) === null || _a === void 0 ? void 0 : _a.type) === "binary") {
                return [
                  2,
                  new api_1.ResourceContent(
                    args.relativePath,
                    buffer_1.Buffer.from(content).toString("base64"),
                    api_1.ContentType.BINARY
                  ),
                ];
              }
              return [
                2,
                new api_1.ResourceContent(
                  args.relativePath,
                  WorkspacesContext_1.decoder.decode(content),
                  api_1.ContentType.TEXT
                ),
              ];
            case 4:
              e_1 = _b.sent();
              console.error(e_1);
              throw e_1;
            case 5:
              return [2];
          }
        });
      });
    },
    [service]
  );
  var resourceContentList = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        var files, matchingPaths;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4, service.getFilesWithLazyContent(args.fs, args.workspaceId, args.globPattern)];
            case 1:
              files = _a.sent();
              matchingPaths = files.map(function (file) {
                return file.relativePath;
              });
              return [2, new api_1.ResourcesList(args.globPattern, matchingPaths)];
          }
        });
      });
    },
    [service]
  );
  var deleteWorkspace = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4, service.delete(args.workspaceId, { broadcast: true })];
            case 1:
              _a.sent();
              return [4, svgService.delete(args.workspaceId)];
            case 2:
              _a.sent();
              return [2];
          }
        });
      });
    },
    [service, svgService]
  );
  var renameWorkspace = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4, service.rename(args.workspaceId, args.newName, { broadcast: true })];
            case 1:
              _a.sent();
              return [2];
          }
        });
      });
    },
    [service]
  );
  var value = (0, react_1.useMemo)(
    function () {
      return {
        service: service,
        gitService: gitService,
        fsService: fsService,
        svgService: svgService,
        descriptorService: descriptorService,
        resourceContentGet: resourceContentGet,
        resourceContentList: resourceContentList,
        createWorkspaceFromLocal: createWorkspaceFromLocal,
        createWorkspaceFromGitRepository: createWorkspaceFromGitRepository,
        renameWorkspace: renameWorkspace,
        deleteWorkspace: deleteWorkspace,
        prepareZip: prepareZip,
        getAbsolutePath: getAbsolutePath,
        getUniqueFileIdentifier: getUniqueFileIdentifier,
        createSavePoint: createSavePoint,
        pull: pull,
        getFiles: getFiles,
        hasLocalChanges: hasLocalChanges,
        addEmptyFile: addEmptyFile,
        addFile: addFile,
        existsFile: existsFile,
        renameFile: renameFile,
        updateFile: updateFile,
        deleteFile: deleteFile,
        getFile: getFile,
      };
    },
    [
      addEmptyFile,
      addFile,
      existsFile,
      createSavePoint,
      createWorkspaceFromGitRepository,
      createWorkspaceFromLocal,
      deleteFile,
      deleteWorkspace,
      descriptorService,
      fsService,
      getAbsolutePath,
      getFile,
      getFiles,
      getUniqueFileIdentifier,
      gitService,
      hasLocalChanges,
      prepareZip,
      pull,
      renameFile,
      renameWorkspace,
      resourceContentGet,
      resourceContentList,
      service,
      svgService,
      updateFile,
    ]
  );
  return (0, jsx_runtime_1.jsx)(
    WorkspacesContext_1.WorkspacesContext.Provider,
    __assign({ value: value }, { children: props.children }),
    void 0
  );
}
exports.WorkspacesContextProvider = WorkspacesContextProvider;
//# sourceMappingURL=WorkspacesContextProvider.js.map
