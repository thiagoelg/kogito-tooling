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
exports.App = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_1 = require("react-router");
var react_router_dom_1 = require("react-router-dom");
var EditorEnvelopeLocatorContext_1 = require("./envelopeLocator/EditorEnvelopeLocatorContext");
var EditorPage_1 = require("./editor/EditorPage");
var i18n_1 = require("./i18n");
var NoMatchPage_1 = require("./NoMatchPage");
var KieSandboxExtendedServicesContextProvider_1 = require("./kieSandboxExtendedServices/KieSandboxExtendedServicesContextProvider");
var SettingsContext_1 = require("./settings/SettingsContext");
var WorkspacesContextProvider_1 = require("./workspace/WorkspacesContextProvider");
var HomePage_1 = require("./home/HomePage");
var NewWorkspaceWithEmptyFilePage_1 = require("./workspace/components/NewWorkspaceWithEmptyFilePage");
var NewWorkspaceFromUrlPage_1 = require("./workspace/components/NewWorkspaceFromUrlPage");
var DmnDevSandboxContextProvider_1 = require("./editor/DmnDevSandbox/DmnDevSandboxContextProvider");
var NavigationContextProvider_1 = require("./navigation/NavigationContextProvider");
var Hooks_1 = require("./navigation/Hooks");
var EnvContextProvider_1 = require("./env/EnvContextProvider");
function App() {
  return (0, jsx_runtime_1.jsx)(
    react_router_dom_1.HashRouter,
    {
      children: nest(
        [i18n_1.OnlineI18nContextProvider, {}],
        [EditorEnvelopeLocatorContext_1.EditorEnvelopeLocatorContextProvider, {}],
        [EnvContextProvider_1.EnvContextProvider, {}],
        [KieSandboxExtendedServicesContextProvider_1.KieSandboxExtendedServicesContextProvider, {}],
        [SettingsContext_1.SettingsContextProvider, {}],
        [WorkspacesContextProvider_1.WorkspacesContextProvider, {}],
        [DmnDevSandboxContextProvider_1.DmnDevSandboxContextProvider, {}],
        [NavigationContextProvider_1.NavigationContextProvider, {}],
        [RoutesSwitch, {}]
      ),
    },
    void 0
  );
}
exports.App = App;
function RoutesSwitch() {
  var routes = (0, Hooks_1.useRoutes)();
  var editorEnvelopeLocator = (0, EditorEnvelopeLocatorContext_1.useEditorEnvelopeLocator)();
  var supportedExtensions = (0, react_1.useMemo)(
    function () {
      return "bpmn|bpmn2|dmn|pmml";
    },
    [editorEnvelopeLocator]
  );
  return (0, jsx_runtime_1.jsxs)(
    react_router_1.Switch,
    {
      children: [
        (0, jsx_runtime_1.jsx)(
          react_router_1.Route,
          __assign(
            { path: routes.editor.path({ extension: ":extension(".concat(supportedExtensions, ")") }) },
            {
              children: function (_a) {
                var match = _a.match;
                return (0, jsx_runtime_1.jsx)(
                  react_router_1.Redirect,
                  { to: routes.newModel.path({ extension: match.params.extension }) },
                  void 0
                );
              },
            }
          ),
          void 0
        ),
        (0, jsx_runtime_1.jsx)(
          react_router_1.Route,
          __assign(
            { path: routes.newModel.path({ extension: ":extension(".concat(supportedExtensions, ")") }) },
            {
              children: function (_a) {
                var match = _a.match;
                return (0, jsx_runtime_1.jsx)(
                  NewWorkspaceWithEmptyFilePage_1.NewWorkspaceWithEmptyFilePage,
                  { extension: match.params.extension },
                  void 0
                );
              },
            }
          ),
          void 0
        ),
        (0, jsx_runtime_1.jsx)(
          react_router_1.Route,
          __assign(
            { path: routes.importModel.path({}) },
            { children: (0, jsx_runtime_1.jsx)(NewWorkspaceFromUrlPage_1.NewWorkspaceFromUrlPage, {}, void 0) }
          ),
          void 0
        ),
        (0, jsx_runtime_1.jsx)(
          react_router_1.Route,
          __assign(
            {
              path: routes.workspaceWithFilePath.path({
                workspaceId: ":workspaceId",
                fileRelativePath: ":fileRelativePath*",
                extension: ":extension(".concat(supportedExtensions, ")"),
              }),
            },
            {
              children: function (_a) {
                var match = _a.match;
                return (0, jsx_runtime_1.jsx)(
                  EditorPage_1.EditorPage,
                  {
                    workspaceId: match.params.workspaceId,
                    fileRelativePath: "".concat(match.params.fileRelativePath, ".").concat(match.params.extension),
                  },
                  void 0
                );
              },
            }
          ),
          void 0
        ),
        (0, jsx_runtime_1.jsx)(
          react_router_1.Route,
          __assign(
            { exact: true, path: routes.home.path({}) },
            { children: (0, jsx_runtime_1.jsx)(HomePage_1.HomePage, {}, void 0) }
          ),
          void 0
        ),
        (0, jsx_runtime_1.jsx)(react_router_1.Route, { component: NoMatchPage_1.NoMatchPage }, void 0),
      ],
    },
    void 0
  );
}
function nest() {
  var components = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    components[_i] = arguments[_i];
  }
  return components.reduceRight(function (acc, _a) {
    var _b = __read(_a, 2),
      Component = _b[0],
      props = _b[1];
    return (0, jsx_runtime_1.jsx)(Component, __assign({}, props, { children: acc }), void 0);
  }, (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0));
}
//# sourceMappingURL=App.js.map
