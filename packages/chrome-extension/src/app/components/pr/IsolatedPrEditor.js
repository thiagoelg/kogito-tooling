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
exports.getModifiedFilePath = exports.getOriginalFilePath = exports.IsolatedPrEditor = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var FileStatusOnPr_1 = require("./FileStatusOnPr");
var customEffects_1 = require("../common/customEffects");
var IsolatedEditorRef_1 = require("../common/IsolatedEditorRef");
var IsolatedEditorContext_1 = require("../common/IsolatedEditorContext");
var ReactDOM = require("react-dom");
var PrToolbar_1 = require("./PrToolbar");
var IsolatedEditor_1 = require("../common/IsolatedEditor");
var constants_1 = require("../../constants");
var api_1 = require("../../github/api");
var GitHubContext_1 = require("../common/GitHubContext");
var GlobalContext_1 = require("../common/GlobalContext");
var i18n_1 = require("../../i18n");
function IsolatedPrEditor(props) {
  var _a;
  var githubApi = (0, GitHubContext_1.useGitHubApi)();
  var globals = (0, GlobalContext_1.useGlobals)();
  var i18n = (0, i18n_1.useChromeExtensionI18n)().i18n;
  var _b = __read((0, react_1.useState)(false), 2),
    showOriginal = _b[0],
    setShowOriginal = _b[1];
  var _c = __read((0, react_1.useState)(true), 2),
    textMode = _c[0],
    setTextMode = _c[1];
  var _d = __read((0, react_1.useState)(false), 2),
    editorReady = _d[0],
    setEditorReady = _d[1];
  var _e = __read((0, react_1.useState)(FileStatusOnPr_1.FileStatusOnPr.UNKNOWN), 2),
    fileStatusOnPr = _e[0],
    setFileStatusOnPr = _e[1];
  var isolatedEditorRef = (0, IsolatedEditorRef_1.useIsolatedEditorRef)().isolatedEditorRef;
  var originalFilePath = (0, react_1.useMemo)(function () {
    return getOriginalFilePath(props.unprocessedFilePath);
  }, []);
  var modifiedFilePath = (0, react_1.useMemo)(function () {
    return getModifiedFilePath(props.unprocessedFilePath);
  }, []);
  (0, customEffects_1.useIsolatedEditorTogglingEffect)(
    textMode,
    iframeContainer(globals.id, props.prFileContainer),
    props.githubTextEditorToReplace
  );
  (0, customEffects_1.useInitialAsyncCallEffect)(function () {
    return discoverFileStatusOnPr(githubApi.octokit(), props.prInfo, originalFilePath, modifiedFilePath);
  }, setFileStatusOnPr);
  var closeDiagram = (0, react_1.useCallback)(function () {
    setTextMode(true);
    setEditorReady(false);
  }, []);
  var filePath = (0, react_1.useMemo)(
    function () {
      return showOriginal || fileStatusOnPr === FileStatusOnPr_1.FileStatusOnPr.DELETED
        ? originalFilePath
        : modifiedFilePath;
    },
    [showOriginal, fileStatusOnPr, originalFilePath, modifiedFilePath]
  );
  var getFileContents = (0, react_1.useMemo)(
    function () {
      return showOriginal || fileStatusOnPr === FileStatusOnPr_1.FileStatusOnPr.DELETED
        ? function () {
            return getOriginalFileContents(githubApi.octokit(), props.prInfo, originalFilePath);
          }
        : function () {
            return getModifiedFileContents(githubApi.octokit(), props.prInfo, modifiedFilePath);
          };
    },
    [showOriginal, fileStatusOnPr, originalFilePath, modifiedFilePath, githubApi.octokit]
  );
  var shouldAddLinkToOriginalFile = (0, react_1.useMemo)(
    function () {
      return (
        fileStatusOnPr === FileStatusOnPr_1.FileStatusOnPr.CHANGED ||
        fileStatusOnPr === FileStatusOnPr_1.FileStatusOnPr.DELETED
      );
    },
    [fileStatusOnPr]
  );
  var openExternalEditor = (0, react_1.useCallback)(
    function () {
      getFileContents().then(function (fileContent) {
        var _a, _b;
        return (_b = (_a = globals.externalEditorManager) === null || _a === void 0 ? void 0 : _a.open) === null ||
          _b === void 0
          ? void 0
          : _b.call(_a, filePath, fileContent, true);
      });
    },
    [globals.externalEditorManager, filePath, getFileContents]
  );
  var repoInfo = (0, react_1.useMemo)(
    function () {
      return showOriginal
        ? {
            owner: props.prInfo.targetOrg,
            gitref: props.prInfo.targetGitRef,
            repo: props.prInfo.repo,
          }
        : {
            owner: props.prInfo.org,
            gitref: props.prInfo.gitRef,
            repo: props.prInfo.repo,
          };
    },
    [showOriginal]
  );
  var onEditorReady = (0, react_1.useCallback)(function () {
    setEditorReady(true);
  }, []);
  var toggleOriginal = (0, react_1.useCallback)(
    function () {
      setShowOriginal(!showOriginal);
    },
    [showOriginal]
  );
  var setDiagramMode = (0, react_1.useCallback)(function () {
    setTextMode(false);
  }, []);
  return (0, jsx_runtime_1.jsxs)(
    IsolatedEditorContext_1.IsolatedEditorContext.Provider,
    __assign(
      {
        value: {
          textMode: textMode,
          fullscreen: false,
          repoInfo: repoInfo,
          onEditorReady: onEditorReady,
        },
      },
      {
        children: [
          shouldAddLinkToOriginalFile &&
            ReactDOM.createPortal(
              (0, jsx_runtime_1.jsx)(
                "a",
                __assign(
                  {
                    className: "pl-5 dropdown-item btn-link",
                    href: viewOriginalFileHref(props.prInfo, originalFilePath),
                  },
                  { children: i18n.pr.isolated.viewOriginal }
                ),
                void 0
              ),
              viewOriginalFileLinkContainer(
                globals.id,
                props.prFileContainer,
                globals.dependencies.all.pr__viewOriginalFileLinkContainer(props.prFileContainer)
              )
            ),
          ((_a = globals.externalEditorManager) === null || _a === void 0 ? void 0 : _a.open) &&
            ReactDOM.createPortal(
              (0, jsx_runtime_1.jsx)(
                "a",
                __assign(
                  { className: "pl-5 dropdown-item btn-link", onClick: openExternalEditor },
                  { children: i18n.openIn(globals.externalEditorManager.name) }
                ),
                void 0
              ),
              openWithExternalEditorLinkContainer(
                props.prFileContainer,
                globals.dependencies.all.pr__openWithExternalEditorLinkContainer(props.prFileContainer)
              )
            ),
          ReactDOM.createPortal(
            (0, jsx_runtime_1.jsx)(
              PrToolbar_1.PrToolbar,
              {
                showOriginalChangesToggle: editorReady,
                fileStatusOnPr: fileStatusOnPr,
                textMode: textMode,
                originalDiagram: showOriginal,
                toggleOriginal: toggleOriginal,
                closeDiagram: closeDiagram,
                onSeeAsDiagram: setDiagramMode,
              },
              void 0
            ),
            toolbarContainer(
              globals.id,
              props.prFileContainer,
              globals.dependencies.prView.toolbarContainerTarget(props.prFileContainer)
            )
          ),
          ReactDOM.createPortal(
            (0, jsx_runtime_1.jsx)(
              IsolatedEditor_1.IsolatedEditor,
              {
                ref: isolatedEditorRef,
                textMode: textMode,
                getFileContents: getFileContents,
                contentPath: props.contentPath,
                openFileExtension: props.fileExtension,
                readonly: true,
                keepRenderedEditorInTextMode: false,
                onSetContentError: function () {},
              },
              void 0
            ),
            iframeContainer(globals.id, globals.dependencies.prView.iframeContainerTarget(props.prFileContainer))
          ),
        ],
      }
    ),
    void 0
  );
}
exports.IsolatedPrEditor = IsolatedPrEditor;
function discoverFileStatusOnPr(octokit, prInfo, originalFilePath, modifiedFilePath) {
  return __awaiter(this, void 0, void 0, function () {
    var hasOriginal, hasModified;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, getOriginalFileContents(octokit, prInfo, originalFilePath)];
        case 1:
          hasOriginal = _a.sent();
          return [4, getModifiedFileContents(octokit, prInfo, modifiedFilePath)];
        case 2:
          hasModified = _a.sent();
          if (hasOriginal && hasModified) {
            return [2, FileStatusOnPr_1.FileStatusOnPr.CHANGED];
          }
          if (hasOriginal) {
            return [2, FileStatusOnPr_1.FileStatusOnPr.DELETED];
          }
          if (hasModified) {
            return [2, FileStatusOnPr_1.FileStatusOnPr.ADDED];
          }
          throw new Error("Impossible status for file on PR");
      }
    });
  });
}
function getOriginalFilePath(path) {
  if (path.includes(constants_1.GITHUB_RENAMED_FILE_ARROW)) {
    return path.split(" ".concat(constants_1.GITHUB_RENAMED_FILE_ARROW, " "))[0];
  } else {
    return path;
  }
}
exports.getOriginalFilePath = getOriginalFilePath;
function getModifiedFilePath(path) {
  if (path.includes(constants_1.GITHUB_RENAMED_FILE_ARROW)) {
    return path.split(" ".concat(constants_1.GITHUB_RENAMED_FILE_ARROW, " "))[1];
  } else {
    return path;
  }
}
exports.getModifiedFilePath = getModifiedFilePath;
function viewOriginalFileLinkContainer(id, prFileContainer, container) {
  var element = function () {
    return prFileContainer.querySelector(
      ".".concat(constants_1.KOGITO_VIEW_ORIGINAL_LINK_CONTAINER_PR_CLASS, ".").concat(id)
    );
  };
  if (!element()) {
    container.insertAdjacentHTML(
      "afterend",
      '<div class="'.concat(constants_1.KOGITO_VIEW_ORIGINAL_LINK_CONTAINER_PR_CLASS, " ").concat(id, '"></div>')
    );
  }
  return element();
}
function openWithExternalEditorLinkContainer(prFileContainer, container) {
  var div = '<div class="'.concat(constants_1.KOGITO_OPEN_WITH_ONLINE_EDITOR_LINK_CONTAINER_PR_CLASS, '"></div>');
  var element = function () {
    return prFileContainer.querySelector(
      ".".concat(constants_1.KOGITO_OPEN_WITH_ONLINE_EDITOR_LINK_CONTAINER_PR_CLASS)
    );
  };
  if (!element()) {
    container.insertAdjacentHTML("beforebegin", div);
  }
  return element();
}
function toolbarContainer(id, prFileContainer, container) {
  var element = function () {
    return prFileContainer.querySelector(".".concat(constants_1.KOGITO_TOOLBAR_CONTAINER_PR_CLASS, ".").concat(id));
  };
  if (!element()) {
    container.insertAdjacentHTML(
      "afterend",
      '<div class="'.concat(constants_1.KOGITO_TOOLBAR_CONTAINER_PR_CLASS, " ").concat(id, '"></div>')
    );
  }
  return element();
}
function iframeContainer(id, container) {
  var element = function () {
    return container.querySelector(".".concat(constants_1.KOGITO_IFRAME_CONTAINER_PR_CLASS, ".").concat(id));
  };
  if (!element()) {
    container.insertAdjacentHTML(
      "beforeend",
      '<div class="'.concat(constants_1.KOGITO_IFRAME_CONTAINER_PR_CLASS, " ").concat(id, '"></div>')
    );
  }
  return element();
}
function getModifiedFileContents(octokit, prInfo, modifiedFilePath) {
  return (0, api_1.fetchFile)(octokit, prInfo.org, prInfo.repo, prInfo.gitRef, modifiedFilePath);
}
function getOriginalFileContents(octokit, prInfo, originalFilePath) {
  return (0, api_1.fetchFile)(octokit, prInfo.targetOrg, prInfo.repo, prInfo.targetGitRef, originalFilePath);
}
function viewOriginalFileHref(prInfo, originalFilePath) {
  var org = prInfo.targetOrg;
  var repo = prInfo.repo;
  var branch = prInfo.targetGitRef;
  return "/".concat(org, "/").concat(repo, "/blob/").concat(branch, "/").concat(originalFilePath);
}
//# sourceMappingURL=IsolatedPrEditor.js.map
