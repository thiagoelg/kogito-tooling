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
exports.Home = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_core_1 = require("@patternfly/react-core");
function Home() {
  return (0, jsx_runtime_1.jsx)(
    react_core_1.Page,
    {
      children: (0, jsx_runtime_1.jsx)(
        react_core_1.PageSection,
        {
          children: (0, jsx_runtime_1.jsxs)(
            react_core_1.TextContent,
            {
              children: [
                (0, jsx_runtime_1.jsx)(
                  react_core_1.Text,
                  __assign({ component: "h1" }, { children: "Welcome to KIE Tools Examples" }),
                  void 0
                ),
                (0, jsx_runtime_1.jsxs)(
                  react_core_1.Text,
                  __assign(
                    { component: "p" },
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)(
                          "span",
                          { children: "To understand what's in this webapp, please refer to the project " },
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          "a",
                          __assign(
                            { href: "https://github.com/kiegroup/kie-tools/blob/main/examples/webapp/README.md" },
                            { children: "README" }
                          ),
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)("span", { children: " on GitHub." }, void 0),
                      ],
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
      ),
    },
    void 0
  );
}
exports.Home = Home;
//# sourceMappingURL=Home.js.map
