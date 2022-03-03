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
exports.usingTestingChromeExtensionI18nContext =
  exports.usingTestingGitHubContext =
  exports.usingTestingGlobalContext =
    void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var GlobalContext_1 = require("@kie-tools-core/chrome-extension/dist/app/components/common/GlobalContext");
var ChromeResourceContentService_1 = require("@kie-tools-core/chrome-extension/dist/app/components/common/ChromeResourceContentService");
var GitHubContext_1 = require("@kie-tools-core/chrome-extension/dist/app/components/common/GitHubContext");
var Logger_1 = require("@kie-tools-core/chrome-extension/dist/Logger");
var Dependencies_1 = require("@kie-tools-core/chrome-extension/dist/app/Dependencies");
var api_1 = require("@kie-tools-core/editor/dist/api");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var i18n_1 = require("@kie-tools-core/chrome-extension/dist/app/i18n");
function usingTestingGlobalContext(children, ctx) {
  var editorEnvelopeLocator = new api_1.EditorEnvelopeLocator("localhost:8888", [
    new api_1.EnvelopeMapping("txt", "**/*.txt", "envelope", "chrome-testing://https://my-url.com/"),
  ]);
  var usedCtx = __assign(
    {
      id: "test-extension123",
      envelopeLocator: editorEnvelopeLocator,
      githubAuthTokenCookieName: "test-github-pat-name",
      logger: new Logger_1.Logger("test-extension"),
      dependencies: new Dependencies_1.Dependencies(),
      extensionIconUrl: "/extension/icon.jpg",
      resourceContentServiceFactory: new ChromeResourceContentService_1.ResourceContentServiceFactory(),
      externalEditorManager: {
        name: "Test Online Editor",
        getLink: jest.fn(function (path) {
          return "https://external-editor-link/".concat(path);
        }),
        open: jest.fn(),
      },
    },
    ctx
  );
  return {
    ctx: usedCtx,
    wrapper: (0, jsx_runtime_1.jsx)(
      GlobalContext_1.GlobalContext.Provider,
      __assign({ value: usedCtx }, { children: children }),
      ""
    ),
  };
}
exports.usingTestingGlobalContext = usingTestingGlobalContext;
function usingTestingGitHubContext(children, ctx) {
  var usedCtx = __assign(
    {
      octokit: jest.fn(),
      setToken: jest.fn(),
      token: "",
      userIsLoggedIn: jest.fn(function () {
        return true;
      }),
    },
    ctx
  );
  return {
    ctx: usedCtx,
    wrapper: (0, jsx_runtime_1.jsx)(
      GitHubContext_1.GitHubContext.Provider,
      __assign({ value: usedCtx }, { children: children }),
      void 0
    ),
  };
}
exports.usingTestingGitHubContext = usingTestingGitHubContext;
function usingTestingChromeExtensionI18nContext(children, ctx) {
  var usedCtx = __assign(
    {
      defaults: i18n_1.chromeExtensionI18nDefaults,
      dictionaries: i18n_1.chromeExtensionI18nDictionaries,
      ctx: i18n_1.ChromeExtensionI18nContext,
      children: children,
    },
    ctx
  );
  return {
    ctx: usedCtx,
    wrapper: (0, jsx_runtime_1.jsx)(
      react_components_1.I18nDictionariesProvider,
      __assign(
        { defaults: usedCtx.defaults, dictionaries: usedCtx.dictionaries, ctx: usedCtx.ctx },
        { children: usedCtx.children }
      ),
      void 0
    ),
  };
}
exports.usingTestingChromeExtensionI18nContext = usingTestingChromeExtensionI18nContext;
//# sourceMappingURL=testing_utils.js.map
