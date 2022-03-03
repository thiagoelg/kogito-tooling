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
exports.LearnMorePage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Card_1 = require("@patternfly/react-core/dist/js/components/Card");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Split_1 = require("@patternfly/react-core/dist/js/layouts/Split");
var Stack_1 = require("@patternfly/react-core/dist/js/layouts/Stack");
var Grid_1 = require("@patternfly/react-core/dist/js/layouts/Grid");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var external_link_alt_icon_1 = require("@patternfly/react-icons/dist/js/icons/external-link-alt-icon");
var electron = require("electron");
var i18n_1 = require("../common/i18n");
function LearnMorePage() {
  var i18n = (0, i18n_1.useDesktopI18n)().i18n;
  var externalLink = (0, react_1.useCallback)(function (event, link) {
    event.preventDefault();
    electron.shell.openExternal(link).catch(function (e) {
      console.error("Error while opening link: " + e);
    });
  }, []);
  return (0, jsx_runtime_1.jsx)(
    Page_1.PageSection,
    {
      children: (0, jsx_runtime_1.jsxs)(
        Grid_1.Grid,
        __assign(
          { sm: 12, lg: 6, hasGutter: true },
          {
            children: [
              (0, jsx_runtime_1.jsxs)(
                Card_1.Card,
                __assign(
                  { ouiaId: "why-bpmn-card" },
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        Card_1.CardHeader,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Title_1.Title,
                            __assign({ size: "lg", headingLevel: "h2" }, { children: i18n.learnMorePage.bpmn.title }),
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        Card_1.CardBody,
                        {
                          children: (0, jsx_runtime_1.jsxs)(
                            Text_1.TextContent,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  Text_1.Text,
                                  __assign(
                                    { component: Text_1.TextVariants.p },
                                    { children: i18n.learnMorePage.bpmn.explanation }
                                  ),
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  Text_1.Text,
                                  __assign(
                                    { component: Text_1.TextVariants.p },
                                    {
                                      children: (0, jsx_runtime_1.jsxs)(
                                        Button_1.Button,
                                        __assign(
                                          {
                                            isInline: true,
                                            type: "button",
                                            variant: "link",
                                            onClick: function (event) {
                                              return externalLink(event, "https://www.omg.org/bpmn/");
                                            },
                                            ouiaId: "bpmn-read-more-button",
                                          },
                                          {
                                            children: [
                                              i18n.learnMorePage.readMore,
                                              " ",
                                              (0, jsx_runtime_1.jsx)(
                                                external_link_alt_icon_1.ExternalLinkAltIcon,
                                                { className: "pf-u-ml-xs" },
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
                              ],
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        Card_1.CardFooter,
                        __assign(
                          { component: "div" },
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              Button_1.Button,
                              __assign(
                                {
                                  variant: "secondary",
                                  onClick: function () {
                                    return electron.ipcRenderer.send("createNewFile", { type: "bpmn" });
                                  },
                                  ouiaId: "create-bpmn-button",
                                },
                                { children: i18n.learnMorePage.bpmn.create }
                              ),
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
              (0, jsx_runtime_1.jsxs)(
                Card_1.Card,
                __assign(
                  { ouiaId: "why-dmn-card" },
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        Card_1.CardHeader,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Title_1.Title,
                            __assign({ size: "lg", headingLevel: "h2" }, { children: i18n.learnMorePage.dmn.title }),
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        Card_1.CardBody,
                        {
                          children: (0, jsx_runtime_1.jsxs)(
                            Text_1.TextContent,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  Text_1.Text,
                                  __assign(
                                    { component: Text_1.TextVariants.p },
                                    { children: i18n.learnMorePage.dmn.explanation }
                                  ),
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  Text_1.Text,
                                  __assign(
                                    { component: Text_1.TextVariants.p },
                                    {
                                      children: (0, jsx_runtime_1.jsxs)(
                                        Button_1.Button,
                                        __assign(
                                          {
                                            isInline: true,
                                            type: "button",
                                            variant: "link",
                                            onClick: function (event) {
                                              return externalLink(event, "https://www.omg.org/dmn/");
                                            },
                                            ouiaId: "dmn-read-more-button",
                                          },
                                          {
                                            children: [
                                              i18n.learnMorePage.readMore,
                                              (0, jsx_runtime_1.jsx)(
                                                external_link_alt_icon_1.ExternalLinkAltIcon,
                                                { className: "pf-u-ml-xs" },
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
                                (0, jsx_runtime_1.jsx)(
                                  Text_1.Text,
                                  __assign(
                                    { component: Text_1.TextVariants.p },
                                    {
                                      children: (0, jsx_runtime_1.jsxs)(
                                        Button_1.Button,
                                        __assign(
                                          {
                                            isInline: true,
                                            type: "button",
                                            variant: "link",
                                            onClick: function (event) {
                                              return externalLink(event, "http://learn-dmn-in-15-minutes.com/");
                                            },
                                            ouiaId: "learn-dmn-button",
                                          },
                                          {
                                            children: [
                                              i18n.learnMorePage.dmn.learn,
                                              " ",
                                              (0, jsx_runtime_1.jsx)(
                                                external_link_alt_icon_1.ExternalLinkAltIcon,
                                                { className: "pf-u-ml-xs" },
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
                              ],
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        Card_1.CardFooter,
                        __assign(
                          { component: "div" },
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              Button_1.Button,
                              __assign(
                                {
                                  variant: "secondary",
                                  onClick: function () {
                                    return electron.ipcRenderer.send("createNewFile", { type: "dmn" });
                                  },
                                  ouiaId: "create-dmn-button",
                                },
                                { children: i18n.learnMorePage.dmn.create }
                              ),
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
              (0, jsx_runtime_1.jsxs)(
                Card_1.Card,
                __assign(
                  { span: 12, style: { gridColumn: "span 12" }, ouiaId: "about-card" },
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        Card_1.CardHeader,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Title_1.Title,
                            __assign({ size: "lg", headingLevel: "h2" }, { children: i18n.learnMorePage.about }),
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        Card_1.CardBody,
                        {
                          children: (0, jsx_runtime_1.jsxs)(
                            Split_1.Split,
                            __assign(
                              { hasGutter: true },
                              {
                                children: [
                                  (0, jsx_runtime_1.jsxs)(
                                    Split_1.SplitItem,
                                    __assign(
                                      { isFilled: true },
                                      {
                                        children: [
                                          "".concat(i18n.learnMorePage.editorsExplanation, " "),
                                          (0, jsx_runtime_1.jsx)(
                                            Button_1.Button,
                                            __assign(
                                              {
                                                type: "button",
                                                variant: "link",
                                                isInline: true,
                                                onClick: function (event) {
                                                  return externalLink(
                                                    event,
                                                    "https://groups.google.com/forum/#!forum/kogito-development"
                                                  );
                                                },
                                                ouiaId: "forum-button",
                                              },
                                              { children: i18n.terms.forum.toLowerCase() }
                                            ),
                                            void 0
                                          ),
                                          ".",
                                        ],
                                      }
                                    ),
                                    void 0
                                  ),
                                  (0, jsx_runtime_1.jsx)(
                                    Split_1.SplitItem,
                                    {
                                      children: (0, jsx_runtime_1.jsxs)(
                                        Stack_1.Stack,
                                        {
                                          children: [
                                            (0, jsx_runtime_1.jsx)(
                                              Stack_1.StackItem,
                                              {
                                                children: (0, jsx_runtime_1.jsxs)(
                                                  Button_1.Button,
                                                  __assign(
                                                    {
                                                      type: "button",
                                                      variant: "link",
                                                      onClick: function (event) {
                                                        return externalLink(
                                                          event,
                                                          "https://github.com/kiegroup/kie-tools/releases"
                                                        );
                                                      },
                                                      ouiaId: "chrome-ext-button",
                                                    },
                                                    {
                                                      children: [
                                                        i18n.learnMorePage.getChromeExtension,
                                                        (0, jsx_runtime_1.jsx)(
                                                          external_link_alt_icon_1.ExternalLinkAltIcon,
                                                          { className: "pf-u-ml-xs" },
                                                          void 0
                                                        ),
                                                      ],
                                                    }
                                                  ),
                                                  void 0
                                                ),
                                              },
                                              void 0
                                            ),
                                            (0, jsx_runtime_1.jsx)(
                                              Stack_1.StackItem,
                                              {
                                                children: (0, jsx_runtime_1.jsxs)(
                                                  Button_1.Button,
                                                  __assign(
                                                    {
                                                      type: "button",
                                                      variant: "link",
                                                      onClick: function (event) {
                                                        return externalLink(
                                                          event,
                                                          "https://github.com/kiegroup/kie-tools/releases"
                                                        );
                                                      },
                                                      ouiaId: "vs-code-button",
                                                    },
                                                    {
                                                      children: [
                                                        i18n.learnMorePage.getVsCodeExtension,
                                                        (0, jsx_runtime_1.jsx)(
                                                          external_link_alt_icon_1.ExternalLinkAltIcon,
                                                          { className: "pf-u-ml-xs" },
                                                          void 0
                                                        ),
                                                      ],
                                                    }
                                                  ),
                                                  void 0
                                                ),
                                              },
                                              void 0
                                            ),
                                            (0, jsx_runtime_1.jsx)(
                                              Stack_1.StackItem,
                                              {
                                                children: (0, jsx_runtime_1.jsxs)(
                                                  Button_1.Button,
                                                  __assign(
                                                    {
                                                      type: "button",
                                                      variant: "link",
                                                      onClick: function (event) {
                                                        return externalLink(
                                                          event,
                                                          "https://www.redhat.com/en/about/open-source"
                                                        );
                                                      },
                                                      ouiaId: "open-source-button",
                                                    },
                                                    {
                                                      children: [
                                                        i18n.learnMorePage.redHatOpenSource,
                                                        (0, jsx_runtime_1.jsx)(
                                                          external_link_alt_icon_1.ExternalLinkAltIcon,
                                                          { className: "pf-u-ml-xs" },
                                                          void 0
                                                        ),
                                                      ],
                                                    }
                                                  ),
                                                  void 0
                                                ),
                                              },
                                              void 0
                                            ),
                                            (0, jsx_runtime_1.jsx)(
                                              Stack_1.StackItem,
                                              {
                                                children: (0, jsx_runtime_1.jsxs)(
                                                  Button_1.Button,
                                                  __assign(
                                                    {
                                                      type: "button",
                                                      variant: "link",
                                                      onClick: function (event) {
                                                        return externalLink(event, "http://kogito.kie.org");
                                                      },
                                                      ouiaId: "kogito-website-button",
                                                    },
                                                    {
                                                      children: [
                                                        i18n.learnMorePage.kogitoWebsite,
                                                        (0, jsx_runtime_1.jsx)(
                                                          external_link_alt_icon_1.ExternalLinkAltIcon,
                                                          { className: "pf-u-ml-xs" },
                                                          void 0
                                                        ),
                                                      ],
                                                    }
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
    },
    void 0
  );
}
exports.LearnMorePage = LearnMorePage;
//# sourceMappingURL=LearnMorePage.js.map
