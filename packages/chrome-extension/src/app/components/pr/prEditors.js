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
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePrInfo = exports.renderPrEditorsApp = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ReactDOM = require("react-dom");
var PrEditorsApp_1 = require("./PrEditorsApp");
var utils_1 = require("../../utils");
var Main_1 = require("../common/Main");
var constants_1 = require("../../constants");
var OpenInExternalEditorButton_1 = require("../openRepoInExternalEditor/OpenInExternalEditorButton");
var GitHubPageType_1 = require("../../github/GitHubPageType");
function renderPrEditorsApp(args) {
  cleanup(args.id);
  ReactDOM.render(
    (0, jsx_runtime_1.jsxs)(
      Main_1.Main,
      __assign(
        {
          id: args.id,
          editorEnvelopeLocator: args.editorEnvelopeLocator,
          dependencies: args.dependencies,
          logger: args.logger,
          githubAuthTokenCookieName: args.githubAuthTokenCookieName,
          extensionIconUrl: args.extensionIconUrl,
          resourceContentServiceFactory: args.resourceContentServiceFactory,
          externalEditorManager: args.externalEditorManager,
        },
        {
          children: [
            (0, jsx_runtime_1.jsx)(
              PrEditorsApp_1.PrEditorsApp,
              { prInfo: parsePrInfo(args.dependencies), contentPath: args.contentPath },
              void 0
            ),
            ReactDOM.createPortal(
              (0, jsx_runtime_1.jsx)(
                OpenInExternalEditorButton_1.OpenInExternalEditorButton,
                { className: "btn btn-sm", pageType: GitHubPageType_1.GitHubPageType.PR_FILES_OR_COMMITS },
                void 0
              ),
              (0, utils_1.openRepoInExternalEditorContainer)(
                args.id,
                args.dependencies.openRepoInExternalEditor.buttonContainerOnPrs()
              )
            ),
          ],
        }
      ),
      void 0
    ),
    (0, utils_1.createAndGetMainContainer)(args.id, args.dependencies.all.body()),
    function () {
      return args.logger.log("Mounted.");
    }
  );
}
exports.renderPrEditorsApp = renderPrEditorsApp;
function parsePrInfo(dependencies) {
  var prInfos = dependencies.all.array.pr__prInfoContainer().map(function (e) {
    return e.textContent;
  });
  var targetOrganization = window.location.pathname.split("/")[1];
  var repository = window.location.pathname.split("/")[2];
  if (prInfos.length < 6) {
    return {
      repo: repository,
      targetOrg: targetOrganization,
      targetGitRef: prInfos[1],
      org: targetOrganization,
      gitRef: prInfos[3],
    };
  }
  return {
    repo: repository,
    targetOrg: targetOrganization,
    targetGitRef: prInfos[2],
    org: prInfos[4],
    gitRef: prInfos[5],
  };
}
exports.parsePrInfo = parsePrInfo;
function cleanup(id) {
  Array.from(
    document.querySelectorAll(".".concat(constants_1.KOGITO_IFRAME_CONTAINER_PR_CLASS, ".").concat(id))
  ).forEach(function (e) {
    (0, utils_1.removeAllChildren)(e);
  });
  Array.from(
    document.querySelectorAll(".".concat(constants_1.KOGITO_VIEW_ORIGINAL_LINK_CONTAINER_PR_CLASS, ".").concat(id))
  ).forEach(function (e) {
    (0, utils_1.removeAllChildren)(e);
  });
  Array.from(
    document.querySelectorAll(".".concat(constants_1.KOGITO_TOOLBAR_CONTAINER_PR_CLASS, ".").concat(id))
  ).forEach(function (e) {
    (0, utils_1.removeAllChildren)(e);
  });
  Array.from(
    document.querySelectorAll(
      ".".concat(constants_1.KOGITO_OPEN_REPO_IN_EXTERNAL_EDITOR_CONTAINER_CLASS, ".").concat(id)
    )
  ).forEach(function (e) {
    (0, utils_1.removeAllChildren)(e);
  });
}
//# sourceMappingURL=prEditors.js.map
