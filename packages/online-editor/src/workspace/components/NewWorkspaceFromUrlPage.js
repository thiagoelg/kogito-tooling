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
exports.NewWorkspaceFromUrlPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var WorkspacesContext_1 = require("../WorkspacesContext");
var Hooks_1 = require("../../navigation/Hooks");
var react_router_1 = require("react-router");
var react_1 = require("react");
var Bullseye_1 = require("@patternfly/react-core/dist/js/layouts/Bullseye");
var Spinner_1 = require("@patternfly/react-core/dist/js/components/Spinner");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Routes_1 = require("../../navigation/Routes");
var QueryParamsContext_1 = require("../../queryParams/QueryParamsContext");
var EditorPageErrorPage_1 = require("../../editor/EditorPageErrorPage");
var OnlineEditorPage_1 = require("../../pageTemplate/OnlineEditorPage");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var path_1 = require("path");
var WorkspaceOrigin_1 = require("../model/WorkspaceOrigin");
var GitService_1 = require("../services/GitService");
var ImportableUrlHooks_1 = require("../hooks/ImportableUrlHooks");
var Hooks_2 = require("../../github/Hooks");
var SettingsContext_1 = require("../../settings/SettingsContext");
function NewWorkspaceFromUrlPage() {
  var _this = this;
  var workspaces = (0, WorkspacesContext_1.useWorkspaces)();
  var routes = (0, Hooks_1.useRoutes)();
  var history = (0, react_router_1.useHistory)();
  var githubAuthInfo = (0, Hooks_2.useGitHubAuthInfo)();
  var settingsDispatch = (0, SettingsContext_1.useSettingsDispatch)();
  var _a = __read((0, react_1.useState)(""), 2),
    importingError = _a[0],
    setImportingError = _a[1];
  var queryParamUrl = (0, QueryParamsContext_1.useQueryParam)(Routes_1.QueryParams.URL);
  var queryParamBranch = (0, QueryParamsContext_1.useQueryParam)(Routes_1.QueryParams.BRANCH);
  var importGitWorkspace = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        var res, e_1, ee_1, workspace, suggestedFirstFile;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 7]);
              return [4, workspaces.createWorkspaceFromGitRepository(args)];
            case 1:
              res = _a.sent();
              return [3, 7];
            case 2:
              e_1 = _a.sent();
              if (queryParamBranch) {
                throw e_1;
              }
              _a.label = 3;
            case 3:
              _a.trys.push([3, 5, , 6]);
              return [
                4,
                workspaces.createWorkspaceFromGitRepository(
                  __assign(__assign({}, args), { origin: __assign(__assign({}, args.origin), { branch: "master" }) })
                ),
              ];
            case 4:
              res = _a.sent();
              return [3, 6];
            case 5:
              ee_1 = _a.sent();
              throw new Error(ee_1);
            case 6:
              return [3, 7];
            case 7:
              (workspace = res.workspace), (suggestedFirstFile = res.suggestedFirstFile);
              if (!suggestedFirstFile) {
                history.replace({ pathname: routes.home.path({}) });
                return [2, res];
              }
              history.replace({
                pathname: routes.workspaceWithFilePath.path({
                  workspaceId: workspace.workspaceId,
                  fileRelativePath: suggestedFirstFile.relativePathWithoutExtension,
                  extension: suggestedFirstFile.extension,
                }),
              });
              return [2, res];
          }
        });
      });
    },
    [routes, history, workspaces, queryParamBranch]
  );
  var createWorkspaceForFile = (0, react_1.useCallback)(
    function (file) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          workspaces.createWorkspaceFromLocal({ useInMemoryFs: false, localFiles: [file] }).then(function (_a) {
            var workspace = _a.workspace,
              suggestedFirstFile = _a.suggestedFirstFile;
            if (!suggestedFirstFile) {
              return;
            }
            history.replace({
              pathname: routes.workspaceWithFilePath.path({
                workspaceId: workspace.workspaceId,
                fileRelativePath: suggestedFirstFile.relativePathWithoutExtension,
                extension: suggestedFirstFile.extension,
              }),
            });
          });
          return [2];
        });
      });
    },
    [routes, history, workspaces]
  );
  var importableUrl = (0, ImportableUrlHooks_1.useImportableUrl)(queryParamUrl);
  (0, react_1.useEffect)(
    function () {
      function run() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
          var singleFile,
            shouldAttemptImportingAsGitRepository,
            url,
            e_2,
            _c,
            workspace,
            suggestedFirstFile,
            rawUrl,
            res,
            data,
            fileName,
            response,
            content_1,
            e_3;
          return __generator(this, function (_d) {
            switch (_d.label) {
              case 0:
                singleFile = [
                  ImportableUrlHooks_1.UrlType.FILE,
                  ImportableUrlHooks_1.UrlType.GIST_FILE,
                  ImportableUrlHooks_1.UrlType.GITHUB_FILE,
                ].includes(importableUrl.type);
                shouldAttemptImportingAsGitRepository =
                  !singleFile && importableUrl.type !== ImportableUrlHooks_1.UrlType.GIST;
                if (!shouldAttemptImportingAsGitRepository) return [3, 5];
                _d.label = 1;
              case 1:
                _d.trys.push([1, 4, , 5]);
                url = new URL(queryParamUrl);
                if (!(url.host !== window.location.host)) return [3, 3];
                return [
                  4,
                  importGitWorkspace({
                    origin: {
                      kind: WorkspaceOrigin_1.WorkspaceKind.GIT,
                      url: url,
                      branch:
                        queryParamBranch !== null && queryParamBranch !== void 0
                          ? queryParamBranch
                          : GitService_1.GIT_DEFAULT_BRANCH,
                    },
                    gitConfig: githubAuthInfo,
                  }),
                ];
              case 2:
                _d.sent();
                return [2];
              case 3:
                return [3, 5];
              case 4:
                e_2 = _d.sent();
                console.error(e_2);
                return [3, 5];
              case 5:
                _d.trys.push([5, 21, , 22]);
                if (importableUrl.error) {
                  setImportingError(importableUrl.error);
                  return [2];
                }
                if (!(importableUrl.type === ImportableUrlHooks_1.UrlType.GITHUB)) return [3, 7];
                return [
                  4,
                  importGitWorkspace({
                    origin: {
                      kind: WorkspaceOrigin_1.WorkspaceKind.GIT,
                      url: importableUrl.url,
                      branch:
                        (_a =
                          queryParamBranch !== null && queryParamBranch !== void 0
                            ? queryParamBranch
                            : importableUrl.branch) !== null && _a !== void 0
                          ? _a
                          : GitService_1.GIT_DEFAULT_BRANCH,
                    },
                    gitConfig: githubAuthInfo,
                    authInfo: githubAuthInfo,
                  }),
                ];
              case 6:
                _d.sent();
                return [3, 20];
              case 7:
                if (!(importableUrl.type === ImportableUrlHooks_1.UrlType.GIT)) return [3, 9];
                return [
                  4,
                  importGitWorkspace({
                    origin: {
                      kind: WorkspaceOrigin_1.WorkspaceKind.GIT,
                      url: importableUrl.url,
                      branch: GitService_1.GIT_DEFAULT_BRANCH,
                    },
                    gitConfig: githubAuthInfo,
                  }),
                ];
              case 8:
                _d.sent();
                return [3, 20];
              case 9:
                if (!(importableUrl.type === ImportableUrlHooks_1.UrlType.GIST)) return [3, 11];
                importableUrl.url.hash = "";
                return [
                  4,
                  workspaces.createWorkspaceFromGitRepository({
                    origin: {
                      kind: WorkspaceOrigin_1.WorkspaceKind.GITHUB_GIST,
                      url: importableUrl.url,
                      branch: GitService_1.GIST_DEFAULT_BRANCH,
                    },
                  }),
                ];
              case 10:
                (_c = _d.sent()), (workspace = _c.workspace), (suggestedFirstFile = _c.suggestedFirstFile);
                if (!suggestedFirstFile) {
                  history.replace({ pathname: routes.home.path({}) });
                  return [2];
                }
                history.replace({
                  pathname: routes.workspaceWithFilePath.path({
                    workspaceId: workspace.workspaceId,
                    fileRelativePath: suggestedFirstFile.relativePathWithoutExtension,
                    extension: suggestedFirstFile.extension,
                  }),
                });
                return [3, 20];
              case 11:
                if (!singleFile) return [3, 19];
                rawUrl = importableUrl.url;
                if (!(importableUrl.type === ImportableUrlHooks_1.UrlType.GITHUB_FILE)) return [3, 13];
                return [
                  4,
                  settingsDispatch.github.octokit.repos.getContent({
                    repo: importableUrl.repo,
                    owner: importableUrl.org,
                    ref: importableUrl.branch,
                    path: decodeURIComponent(importableUrl.filePath),
                    headers: {
                      "If-None-Match": "",
                    },
                  }),
                ];
              case 12:
                res = _d.sent();
                rawUrl = new URL(res.data.download_url);
                _d.label = 13;
              case 13:
                if (!(importableUrl.type === ImportableUrlHooks_1.UrlType.GIST_FILE)) return [3, 15];
                return [4, settingsDispatch.github.octokit.gists.get({ gist_id: importableUrl.gistId })];
              case 14:
                data = _d.sent().data;
                fileName =
                  (_b = Object.keys(data.files).find(function (k) {
                    return k.toLowerCase() === importableUrl.fileName.toLowerCase();
                  })) !== null && _b !== void 0
                    ? _b
                    : Object.keys(data.files)[0];
                rawUrl = new URL(data.files[fileName].raw_url);
                _d.label = 15;
              case 15:
                return [4, fetch(rawUrl.toString())];
              case 16:
                response = _d.sent();
                if (!response.ok) {
                  setImportingError(
                    "".concat(response.status).concat(response.statusText ? "- ".concat(response.statusText) : "")
                  );
                  return [2];
                }
                return [4, response.text()];
              case 17:
                content_1 = _d.sent();
                return [
                  4,
                  createWorkspaceForFile({
                    path: (0, path_1.basename)(decodeURIComponent(rawUrl.pathname)),
                    getFileContents: function () {
                      return Promise.resolve(WorkspacesContext_1.encoder.encode(content_1));
                    },
                  }),
                ];
              case 18:
                _d.sent();
                return [3, 20];
              case 19:
                if (importableUrl.type === ImportableUrlHooks_1.UrlType.ZIP) {
                  throw new Error("Importing ZIPs is not supported yet.");
                } else {
                  throw new Error("Invalid UrlType " + importableUrl.type);
                }
                _d.label = 20;
              case 20:
                return [3, 22];
              case 21:
                e_3 = _d.sent();
                setImportingError(e_3.toString());
                return [2];
              case 22:
                return [2];
            }
          });
        });
      }
      run();
    },
    [
      createWorkspaceForFile,
      routes,
      history,
      importGitWorkspace,
      importableUrl,
      queryParamBranch,
      queryParamUrl,
      githubAuthInfo,
      workspaces,
      settingsDispatch,
    ]
  );
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: (0, jsx_runtime_1.jsxs)(
        OnlineEditorPage_1.OnlineEditorPage,
        {
          children: [
            importingError &&
              (0, jsx_runtime_1.jsx)(
                EditorPageErrorPage_1.EditorPageErrorPage,
                { path: importableUrl.url.toString(), errors: [importingError] },
                void 0
              ),
            !importingError &&
              (0, jsx_runtime_1.jsx)(
                Page_1.PageSection,
                __assign(
                  { variant: "light", isFilled: true, padding: { default: "noPadding" } },
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      Bullseye_1.Bullseye,
                      {
                        children: (0, jsx_runtime_1.jsxs)(
                          Text_1.TextContent,
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                Bullseye_1.Bullseye,
                                { children: (0, jsx_runtime_1.jsx)(Spinner_1.Spinner, {}, void 0) },
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)("br", {}, void 0),
                              (0, jsx_runtime_1.jsx)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.p },
                                  { children: "Importing from '".concat(queryParamUrl, "'") }
                                ),
                                void 0
                              ),
                            ],
                          },
                          void 0
                        ),
                      },
                      void 0
                    ),
                  }
                ),
                void 0
              ),
          ],
        },
        void 0
      ),
    },
    void 0
  );
}
exports.NewWorkspaceFromUrlPage = NewWorkspaceFromUrlPage;
//# sourceMappingURL=NewWorkspaceFromUrlPage.js.map
