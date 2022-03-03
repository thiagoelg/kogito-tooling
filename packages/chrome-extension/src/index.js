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
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __exportStar =
  (this && this.__exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.discoverCurrentGitHubPageType = exports.extractFileInfoFromUrl = exports.startExtension = void 0;
var GitHubPageType_1 = require("./app/github/GitHubPageType");
var singleEditorEdit_1 = require("./app/components/single/singleEditorEdit");
var singleEditorView_1 = require("./app/components/single/singleEditorView");
var prEditors_1 = require("./app/components/pr/prEditors");
var utils_1 = require("./app/utils");
var Dependencies_1 = require("./app/Dependencies");
var ReactDOM = require("react-dom");
require("../resources/style.css");
var Logger_1 = require("./Logger");
var ChromeResourceContentService_1 = require("./app/components/common/ChromeResourceContentService");
var openRepoInExternalEditorApp_1 = require("./app/components/openRepoInExternalEditor/openRepoInExternalEditorApp");
function startExtension(args) {
  var logger = new Logger_1.Logger(args.name);
  var resourceContentServiceFactory = new ChromeResourceContentService_1.ResourceContentServiceFactory();
  var dependencies = new Dependencies_1.Dependencies();
  var runInit = function () {
    return init({
      id: chrome.runtime.id,
      logger: logger,
      dependencies: dependencies,
      githubAuthTokenCookieName: args.githubAuthTokenCookieName,
      extensionIconUrl: args.extensionIconUrl,
      editorEnvelopeLocator: args.editorEnvelopeLocator,
      resourceContentServiceFactory: resourceContentServiceFactory,
      externalEditorManager: args.externalEditorManager,
    });
  };
  (0, utils_1.runAfterUriChange)(logger, function () {
    return setTimeout(runInit, 0);
  });
  setTimeout(runInit, 0);
}
exports.startExtension = startExtension;
function init(globals) {
  globals.logger.log("---");
  globals.logger.log("Starting GitHub extension.");
  unmountPreviouslyRenderedFeatures(globals.id, globals.logger, globals.dependencies);
  var fileInfo = extractFileInfoFromUrl();
  var pageType = discoverCurrentGitHubPageType();
  if (pageType === GitHubPageType_1.GitHubPageType.ANY) {
    globals.logger.log("This GitHub page is not supported.");
    return;
  }
  if (pageType === GitHubPageType_1.GitHubPageType.EDIT) {
    (0, singleEditorEdit_1.renderSingleEditorApp)(__assign(__assign({}, globals), { fileInfo: fileInfo }));
  } else if (pageType === GitHubPageType_1.GitHubPageType.VIEW) {
    (0, singleEditorView_1.renderSingleEditorReadonlyApp)(__assign(__assign({}, globals), { fileInfo: fileInfo }));
  } else if (pageType === GitHubPageType_1.GitHubPageType.PR_FILES_OR_COMMITS) {
    (0, prEditors_1.renderPrEditorsApp)(__assign(__assign({}, globals), { contentPath: fileInfo.path }));
  } else if (pageType === GitHubPageType_1.GitHubPageType.PR_HOME) {
    (0, openRepoInExternalEditorApp_1.renderOpenRepoInExternalEditorApp)(
      __assign(__assign({}, globals), {
        pageType: pageType,
        className: "btn btn-sm",
        container: function () {
          return globals.dependencies.openRepoInExternalEditor.buttonContainerOnPrs();
        },
      })
    );
  } else if (pageType === GitHubPageType_1.GitHubPageType.CAN_OPEN_REPO_IN_EXTERNAL_EDITOR) {
    (0, openRepoInExternalEditorApp_1.renderOpenRepoInExternalEditorApp)(
      __assign(__assign({}, globals), {
        pageType: pageType,
        className: "btn ml-2 d-none d-md-block",
        container: function () {
          return globals.dependencies.openRepoInExternalEditor.buttonContainerOnRepoFilesList();
        },
      })
    );
  } else {
    throw new Error("Unknown GitHubPageType ".concat(pageType));
  }
}
function extractFileInfoFromUrl() {
  var split = window.location.pathname.split("/");
  return {
    gitRef: split[4],
    repo: split[2],
    org: split[1],
    path: split.slice(5).join("/"),
  };
}
exports.extractFileInfoFromUrl = extractFileInfoFromUrl;
function unmountPreviouslyRenderedFeatures(id, logger, dependencies) {
  try {
    if ((0, utils_1.mainContainer)(id, dependencies.all.body())) {
      ReactDOM.unmountComponentAtNode((0, utils_1.mainContainer)(id, dependencies.all.body()));
      logger.log("Unmounted previous features.");
    }
  } catch (e) {
    logger.log("Ignoring exception while unmounting features.");
  }
}
function pathnameMatches(regex) {
  return !!window.location.pathname.match(new RegExp(regex));
}
function discoverCurrentGitHubPageType() {
  if (pathnameMatches(".*/.*/edit/.*")) {
    return GitHubPageType_1.GitHubPageType.EDIT;
  }
  if (pathnameMatches(".*/.*/blob/.*")) {
    return GitHubPageType_1.GitHubPageType.VIEW;
  }
  var isOrgSlashRepo = window.location.pathname.split("/").length === 3;
  if (pathnameMatches("/.*/.*/tree/.*") || isOrgSlashRepo) {
    return GitHubPageType_1.GitHubPageType.CAN_OPEN_REPO_IN_EXTERNAL_EDITOR;
  }
  if (pathnameMatches(".*/.*/pull/[0-9]+/files.*")) {
    return GitHubPageType_1.GitHubPageType.PR_FILES_OR_COMMITS;
  }
  if (pathnameMatches(".*/.*/pull/[0-9]+/commits.*")) {
    return GitHubPageType_1.GitHubPageType.PR_FILES_OR_COMMITS;
  }
  if (pathnameMatches(".*/.*/pull/[0-9]+.*")) {
    return GitHubPageType_1.GitHubPageType.PR_HOME;
  }
  return GitHubPageType_1.GitHubPageType.ANY;
}
exports.discoverCurrentGitHubPageType = discoverCurrentGitHubPageType;
__exportStar(require("./ExternalEditorManager"), exports);
//# sourceMappingURL=index.js.map
