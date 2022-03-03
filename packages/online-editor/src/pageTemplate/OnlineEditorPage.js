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
exports.OnlineEditorPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var Brand_1 = require("@patternfly/react-core/dist/js/components/Brand");
var Hooks_1 = require("../navigation/Hooks");
var react_router_1 = require("react-router");
var Masthead_1 = require("@patternfly/react-core/dist/js/components/Masthead");
var SettingsButton_1 = require("../settings/SettingsButton");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var KieSandboxExtendedServicesIcon_1 = require("../kieSandboxExtendedServices/KieSandboxExtendedServicesIcon");
var OpenshiftDeploymentsDropdown_1 = require("../editor/DmnDevSandbox/OpenshiftDeploymentsDropdown");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
function OnlineEditorPage(props) {
  var history = (0, react_router_1.useHistory)();
  var routes = (0, Hooks_1.useRoutes)();
  return (0, jsx_runtime_1.jsx)(
    Page_1.Page,
    __assign(
      {
        header: (0, jsx_runtime_1.jsx)(
          Masthead_1.Masthead,
          __assign(
            { "aria-label": "Page header", display: { default: "stack" } },
            {
              children: (0, jsx_runtime_1.jsxs)(
                Masthead_1.MastheadMain,
                __assign(
                  { style: { justifyContent: "space-between" } },
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        Page_1.PageHeaderToolsItem,
                        __assign(
                          { className: "pf-l-flex" },
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              Masthead_1.MastheadBrand,
                              __assign(
                                {
                                  onClick: function () {
                                    return history.push({ pathname: routes.home.path({}) });
                                  },
                                  style: { textDecoration: "none" },
                                },
                                {
                                  children: (0, jsx_runtime_1.jsxs)(
                                    Flex_1.Flex,
                                    __assign(
                                      { alignItems: { default: "alignItemsCenter" } },
                                      {
                                        children: [
                                          (0, jsx_runtime_1.jsx)(
                                            Flex_1.FlexItem,
                                            __assign(
                                              { style: { display: "flex", alignItems: "center" } },
                                              {
                                                children: (0, jsx_runtime_1.jsx)(
                                                  Brand_1.Brand,
                                                  {
                                                    src: routes.static.images.kieHorizontalLogoReverse.path({}),
                                                    alt: "Logo",
                                                    style: { display: "inline", height: "38px" },
                                                  },
                                                  void 0
                                                ),
                                              }
                                            ),
                                            void 0
                                          ),
                                          (0, jsx_runtime_1.jsx)(
                                            Flex_1.FlexItem,
                                            __assign(
                                              { style: { display: "flex", alignItems: "center" } },
                                              {
                                                children: (0, jsx_runtime_1.jsx)(
                                                  Text_1.TextContent,
                                                  {
                                                    children: (0, jsx_runtime_1.jsx)(
                                                      Text_1.Text,
                                                      __assign(
                                                        { component: Text_1.TextVariants.h3 },
                                                        { children: "Sandbox" }
                                                      ),
                                                      void 0
                                                    ),
                                                  },
                                                  void 0
                                                ),
                                              }
                                            ),
                                            void 0
                                          ),
                                        ],
                                      }
                                    ),
                                    void 0
                                  ),
                                }
                              ),
                              void 0
                            ),
                          }
                        ),
                        void 0
                      ),
                      (0, jsx_runtime_1.jsxs)(
                        Flex_1.Flex,
                        __assign(
                          { justifyContent: { default: "justifyContentFlexEnd" } },
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                Flex_1.FlexItem,
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    Page_1.PageHeaderToolsItem,
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        OpenshiftDeploymentsDropdown_1.OpenshiftDeploymentsDropdown,
                                        {},
                                        void 0
                                      ),
                                    },
                                    void 0
                                  ),
                                },
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                Flex_1.FlexItem,
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    Page_1.PageHeaderToolsItem,
                                    { children: (0, jsx_runtime_1.jsx)(SettingsButton_1.SettingsButton, {}, void 0) },
                                    void 0
                                  ),
                                },
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                Flex_1.FlexItem,
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    Page_1.PageHeaderToolsItem,
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        KieSandboxExtendedServicesIcon_1.KieSandboxExtendedServicesIcon,
                                        {},
                                        void 0
                                      ),
                                    },
                                    void 0
                                  ),
                                },
                                void 0
                              ),
                            ],
                          }
                        ),
                        void 0
                      ),
                    ],
                  }
                ),
                void 0
              ),
            }
          ),
          void 0
        ),
      },
      { children: props.children }
    ),
    void 0
  );
}
exports.OnlineEditorPage = OnlineEditorPage;
//# sourceMappingURL=OnlineEditorPage.js.map
