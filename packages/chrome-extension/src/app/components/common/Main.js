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
exports.Main = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var GlobalContext_1 = require("./GlobalContext");
var GitHubContext_1 = require("./GitHubContext");
var ReactDOM = require("react-dom");
var KogitoMenu_1 = require("./KogitoMenu");
var utils_1 = require("../../utils");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var i18n_1 = require("../../i18n");
function KogitoMenuPortal(props) {
  var githubApi = (0, GitHubContext_1.useGitHubApi)();
  var globals = (0, GlobalContext_1.useGlobals)();
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children:
        githubApi.userIsLoggedIn() &&
        ReactDOM.createPortal(
          (0, jsx_runtime_1.jsx)(KogitoMenu_1.KogitoMenu, {}, void 0),
          (0, utils_1.kogitoMenuContainer)(props.id, globals.dependencies.all.notificationIndicator().parentElement)
        ),
    },
    void 0
  );
}
var Main = function (props) {
  return (0, jsx_runtime_1.jsx)(
    react_components_1.I18nDictionariesProvider,
    __assign(
      {
        defaults: i18n_1.chromeExtensionI18nDefaults,
        dictionaries: i18n_1.chromeExtensionI18nDictionaries,
        initialLocale: navigator.language,
        ctx: i18n_1.ChromeExtensionI18nContext,
      },
      {
        children: (0, jsx_runtime_1.jsx)(
          GlobalContext_1.GlobalContext.Provider,
          __assign(
            {
              value: {
                id: props.id,
                logger: props.logger,
                dependencies: props.dependencies,
                envelopeLocator: props.editorEnvelopeLocator,
                githubAuthTokenCookieName: props.githubAuthTokenCookieName,
                extensionIconUrl: props.extensionIconUrl,
                resourceContentServiceFactory: props.resourceContentServiceFactory,
                externalEditorManager: props.externalEditorManager,
              },
            },
            {
              children: (0, jsx_runtime_1.jsxs)(
                GitHubContext_1.GitHubContextProvider,
                { children: [(0, jsx_runtime_1.jsx)(KogitoMenuPortal, { id: props.id }, void 0), props.children] },
                void 0
              ),
            }
          ),
          void 0
        ),
      }
    ),
    void 0
  );
};
exports.Main = Main;
//# sourceMappingURL=Main.js.map
