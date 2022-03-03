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
exports.renderOpenRepoInExternalEditorApp = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ReactDOM = require("react-dom");
var Main_1 = require("../common/Main");
var utils_1 = require("../../utils");
var OpenInExternalEditorButton_1 = require("./OpenInExternalEditorButton");
var constants_1 = require("../../constants");
function renderOpenRepoInExternalEditorApp(args) {
  cleanup(args.id);
  ReactDOM.render(
    (0, jsx_runtime_1.jsx)(
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
          children: ReactDOM.createPortal(
            (0, jsx_runtime_1.jsx)(
              OpenInExternalEditorButton_1.OpenInExternalEditorButton,
              { className: args.className, pageType: args.pageType },
              void 0
            ),
            (0, utils_1.openRepoInExternalEditorContainer)(args.id, args.container())
          ),
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
exports.renderOpenRepoInExternalEditorApp = renderOpenRepoInExternalEditorApp;
function cleanup(id) {
  Array.from(
    document.querySelectorAll(
      ".".concat(constants_1.KOGITO_OPEN_REPO_IN_EXTERNAL_EDITOR_CONTAINER_CLASS, ".").concat(id)
    )
  ).forEach(function (e) {
    (0, utils_1.removeAllChildren)(e);
  });
}
//# sourceMappingURL=openRepoInExternalEditorApp.js.map
