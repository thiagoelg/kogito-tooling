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
exports.NoMatchPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Hooks_1 = require("./navigation/Hooks");
var react_router_1 = require("react-router");
var Bullseye_1 = require("@patternfly/react-core/dist/js/layouts/Bullseye");
function NoMatchPage() {
  var routes = (0, Hooks_1.useRoutes)();
  var history = (0, react_router_1.useHistory)();
  var returnHome = (0, react_1.useCallback)(
    function () {
      history.push({ pathname: routes.home.path({}) });
    },
    [history, routes]
  );
  return (0, jsx_runtime_1.jsx)(
    Bullseye_1.Bullseye,
    {
      children: (0, jsx_runtime_1.jsxs)(
        EmptyState_1.EmptyState,
        {
          children: [
            (0, jsx_runtime_1.jsx)(
              Text_1.TextContent,
              {
                children: (0, jsx_runtime_1.jsx)(
                  Text_1.Text,
                  __assign({ component: "h1" }, { children: "404" }),
                  void 0
                ),
              },
              void 0
            ),
            (0, jsx_runtime_1.jsx)(
              EmptyState_1.EmptyStateBody,
              { children: "The requested page could not be found." },
              void 0
            ),
            (0, jsx_runtime_1.jsx)(
              EmptyState_1.EmptyStateSecondaryActions,
              {
                children: (0, jsx_runtime_1.jsx)(
                  Button_1.Button,
                  __assign({ variant: Button_1.ButtonVariant.link, onClick: returnHome }, { children: "Return home" }),
                  void 0
                ),
              },
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
exports.NoMatchPage = NoMatchPage;
//# sourceMappingURL=NoMatchPage.js.map
