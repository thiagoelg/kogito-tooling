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
exports.DmnFormApp = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var react_router_1 = require("react-router");
var react_router_dom_1 = require("react-router-dom");
var AppContext_1 = require("./AppContext");
var AppContextProvider_1 = require("./AppContextProvider");
var DmnFormErrorPage_1 = require("./DmnFormErrorPage");
var DmnFormPage_1 = require("./DmnFormPage");
var i18n_1 = require("./i18n");
var NoMatchPage_1 = require("./NoMatchPage");
var Routes_1 = require("./Routes");
function DmnFormApp() {
  return (0, jsx_runtime_1.jsx)(
    react_components_1.I18nDictionariesProvider,
    __assign(
      {
        defaults: i18n_1.dmnFormI18nDefaults,
        dictionaries: i18n_1.dmnFormI18nDictionaries,
        initialLocale: navigator.language,
        ctx: i18n_1.DmnFormI18nContext,
      },
      {
        children: (0, jsx_runtime_1.jsx)(
          AppContextProvider_1.AppContextProvider,
          {
            children: (0, jsx_runtime_1.jsx)(
              AppContext_1.AppContext.Consumer,
              {
                children: function (app) {
                  return (
                    app.fetchDone &&
                    (0, jsx_runtime_1.jsx)(
                      react_router_dom_1.HashRouter,
                      {
                        children: (0, jsx_runtime_1.jsxs)(
                          react_router_1.Switch,
                          {
                            children: [
                              app.data &&
                                (0, jsx_runtime_1.jsx)(
                                  react_router_1.Route,
                                  __assign(
                                    {
                                      path: Routes_1.routes.form.path({
                                        filePath: ":filePath*",
                                      }),
                                    },
                                    {
                                      children: function (_a) {
                                        var match = _a.match;
                                        var formData = app.data.forms.find(function (form) {
                                          return form.uri === "/".concat(match.params.filePath);
                                        });
                                        return formData
                                          ? (0, jsx_runtime_1.jsx)(
                                              DmnFormPage_1.DmnFormPage,
                                              { formData: formData },
                                              void 0
                                            )
                                          : (0, jsx_runtime_1.jsx)(
                                              react_router_dom_1.Redirect,
                                              { to: Routes_1.routes.error.path({}) },
                                              void 0
                                            );
                                      },
                                    }
                                  ),
                                  void 0
                                ),
                              app.data &&
                                (0, jsx_runtime_1.jsx)(
                                  react_router_1.Route,
                                  __assign(
                                    { exact: true, path: Routes_1.routes.root.path({}) },
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        react_router_dom_1.Redirect,
                                        { to: Routes_1.routes.form.path({ filePath: app.data.forms[0].uri.slice(1) }) },
                                        void 0
                                      ),
                                    }
                                  ),
                                  void 0
                                ),
                              (0, jsx_runtime_1.jsx)(
                                react_router_1.Route,
                                __assign(
                                  { path: Routes_1.routes.error.path({}) },
                                  { children: (0, jsx_runtime_1.jsx)(DmnFormErrorPage_1.DmnFormErrorPage, {}, void 0) }
                                ),
                                void 0
                              ),
                              !app.data &&
                                (0, jsx_runtime_1.jsx)(
                                  react_router_dom_1.Redirect,
                                  { to: Routes_1.routes.error.path({}) },
                                  void 0
                                ),
                              (0, jsx_runtime_1.jsx)(
                                react_router_1.Route,
                                { component: NoMatchPage_1.NoMatchPage },
                                void 0
                              ),
                            ],
                          },
                          void 0
                        ),
                      },
                      void 0
                    )
                  );
                },
              },
              void 0
            ),
          },
          void 0
        ),
      }
    ),
    void 0
  );
}
exports.DmnFormApp = DmnFormApp;
//# sourceMappingURL=DmnFormApp.js.map
