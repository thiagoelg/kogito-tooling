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
exports.DmnFormErrorPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var exclamation_triangle_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon");
var i18n_1 = require("./i18n");
var KOGITO_JIRA_LINK = "https://issues.jboss.org/projects/KOGITO";
function DmnFormErrorPage() {
  var i18n = (0, i18n_1.useDmnFormI18n)().i18n;
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: (0, jsx_runtime_1.jsxs)(
        EmptyState_1.EmptyState,
        __assign(
          { "data-testid": "dmn-form-error-page" },
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                EmptyState_1.EmptyStateIcon,
                { icon: exclamation_triangle_icon_1.ExclamationTriangleIcon },
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                Text_1.TextContent,
                {
                  children: (0, jsx_runtime_1.jsx)(
                    Text_1.Text,
                    __assign({ component: "h2" }, { children: i18n.page.error.title }),
                    void 0
                  ),
                },
                void 0
              ),
              (0, jsx_runtime_1.jsxs)(
                EmptyState_1.EmptyStateBody,
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(
                      Text_1.TextContent,
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Text_1.Text,
                          __assign({ component: Text_1.TextVariants.p }, { children: i18n.page.error.explanation }),
                          void 0
                        ),
                      },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    (0, jsx_runtime_1.jsx)(
                      Text_1.TextContent,
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          react_components_1.I18nWrapped,
                          __assign(
                            {
                              components: {
                                jira: (0, jsx_runtime_1.jsx)(
                                  "a",
                                  __assign(
                                    { href: KOGITO_JIRA_LINK, target: "_blank" },
                                    { children: KOGITO_JIRA_LINK }
                                  ),
                                  void 0
                                ),
                              },
                            },
                            { children: i18n.page.error.referToJira }
                          ),
                          void 0
                        ),
                      },
                      void 0
                    ),
                  ],
                },
                void 0
              ),
            ],
          }
        ),
        void 0
      ),
    },
    void 0
  );
}
exports.DmnFormErrorPage = DmnFormErrorPage;
//# sourceMappingURL=DmnFormErrorPage.js.map
