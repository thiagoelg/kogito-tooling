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
exports.ServerlessWorkflowManagementPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var ExpandableSection_1 = require("@patternfly/react-core/dist/js/components/ExpandableSection");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var InputGroup_1 = require("@patternfly/react-core/dist/js/components/InputGroup");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var Popover_1 = require("@patternfly/react-core/dist/js/components/Popover");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var help_icon_1 = require("@patternfly/react-icons/dist/js/icons/help-icon");
var plus_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/plus-circle-icon");
var times_icon_1 = require("@patternfly/react-icons/dist/js/icons/times-icon");
var React = require("react");
var react_1 = require("react");
var OpenShiftContext_1 = require("../../openshift/OpenShiftContext");
var OpenShiftSettingsConfig_1 = require("../../openshift/OpenShiftSettingsConfig");
var CreateServerlessWorkflowModal_1 = require("./CreateServerlessWorkflowModal");
function ServerlessWorkflowManagementPage() {
  var openshift = (0, OpenShiftContext_1.useOpenShift)();
  var _a = __read((0, react_1.useState)((0, OpenShiftSettingsConfig_1.readConfigCookie)()), 2),
    config = _a[0],
    setConfig = _a[1];
  var _b = __read(React.useState(false), 2),
    configExpanded = _b[0],
    setConfigExpanded = _b[1];
  var _c = __read((0, react_1.useState)([]), 2),
    workflows = _c[0],
    setWorkflows = _c[1];
  var _d = __read((0, react_1.useState)(false), 2),
    showModal = _d[0],
    setShowModal = _d[1];
  var onClearProxy = (0, react_1.useCallback)(
    function () {
      return setConfig(__assign(__assign({}, config), { proxy: "" }));
    },
    [config]
  );
  var onClearHost = (0, react_1.useCallback)(
    function () {
      return setConfig(__assign(__assign({}, config), { host: "" }));
    },
    [config]
  );
  var onClearNamespace = (0, react_1.useCallback)(
    function () {
      return setConfig(__assign(__assign({}, config), { namespace: "" }));
    },
    [config]
  );
  var onClearToken = (0, react_1.useCallback)(
    function () {
      return setConfig(__assign(__assign({}, config), { token: "" }));
    },
    [config]
  );
  var onProxyChanged = (0, react_1.useCallback)(
    function (newValue) {
      setConfig(__assign(__assign({}, config), { proxy: newValue }));
      (0, OpenShiftSettingsConfig_1.saveProxyCookie)(newValue);
    },
    [config]
  );
  var onHostChanged = (0, react_1.useCallback)(
    function (newValue) {
      setConfig(__assign(__assign({}, config), { host: newValue }));
      (0, OpenShiftSettingsConfig_1.saveHostCookie)(newValue);
    },
    [config]
  );
  var onNamespaceChanged = (0, react_1.useCallback)(
    function (newValue) {
      setConfig(__assign(__assign({}, config), { namespace: newValue }));
      (0, OpenShiftSettingsConfig_1.saveNamespaceCookie)(newValue);
    },
    [config]
  );
  var onTokenChanged = (0, react_1.useCallback)(
    function (newValue) {
      setConfig(__assign(__assign({}, config), { token: newValue }));
      (0, OpenShiftSettingsConfig_1.saveTokenCookie)(newValue);
    },
    [config]
  );
  (0, react_1.useEffect)(
    function () {
      openshift.fetchWorkflows(config).then(setWorkflows);
    },
    [config, openshift]
  );
  var configContent = (0, react_1.useMemo)(
    function () {
      return (0, jsx_runtime_1.jsx)(
        ExpandableSection_1.ExpandableSection,
        __assign(
          {
            toggleText: "Connection Settings",
            onToggle: function () {
              return setConfigExpanded(!configExpanded);
            },
            isExpanded: configExpanded,
          },
          {
            children: (0, jsx_runtime_1.jsxs)(
              Form_1.Form,
              {
                children: [
                  (0, jsx_runtime_1.jsx)(
                    Form_1.FormGroup,
                    __assign(
                      {
                        label: "Proxy URL",
                        labelIcon: (0, jsx_runtime_1.jsx)(
                          Popover_1.Popover,
                          __assign(
                            { bodyContent: "Proxy URL" },
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                "button",
                                __assign(
                                  {
                                    type: "button",
                                    "aria-label": "More info for proxy field",
                                    onClick: function (e) {
                                      return e.preventDefault();
                                    },
                                    "aria-describedby": "proxy-field",
                                    className: "pf-c-form__group-label-help",
                                  },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      help_icon_1.default,
                                      { noVerticalAlign: true },
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
                        isRequired: true,
                        fieldId: "proxy-field",
                      },
                      {
                        children: (0, jsx_runtime_1.jsxs)(
                          InputGroup_1.InputGroup,
                          __assign(
                            { className: "pf-u-mt-sm" },
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  TextInput_1.TextInput,
                                  {
                                    autoFocus: true,
                                    autoComplete: "off",
                                    isRequired: true,
                                    type: "text",
                                    id: "proxy-field",
                                    name: "proxy-field",
                                    "aria-label": "Proxy field",
                                    "aria-describedby": "proxy-field-helper",
                                    value: config.proxy,
                                    onChange: onProxyChanged,
                                    tabIndex: 1,
                                    "data-testid": "proxy-text-field",
                                  },
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  InputGroup_1.InputGroupText,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Button_1.Button,
                                      __assign(
                                        {
                                          isSmall: true,
                                          variant: "plain",
                                          "aria-label": "Clear proxy button",
                                          onClick: onClearProxy,
                                        },
                                        { children: (0, jsx_runtime_1.jsx)(times_icon_1.TimesIcon, {}, void 0) }
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
                      }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    Form_1.FormGroup,
                    __assign(
                      {
                        label: "Namespace",
                        labelIcon: (0, jsx_runtime_1.jsx)(
                          Popover_1.Popover,
                          __assign(
                            { bodyContent: "Namespace" },
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                "button",
                                __assign(
                                  {
                                    type: "button",
                                    "aria-label": "More info for namespace field",
                                    onClick: function (e) {
                                      return e.preventDefault();
                                    },
                                    "aria-describedby": "namespace-field",
                                    className: "pf-c-form__group-label-help",
                                  },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      help_icon_1.default,
                                      { noVerticalAlign: true },
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
                        isRequired: true,
                        fieldId: "namespace-field",
                      },
                      {
                        children: (0, jsx_runtime_1.jsxs)(
                          InputGroup_1.InputGroup,
                          __assign(
                            { className: "pf-u-mt-sm" },
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  TextInput_1.TextInput,
                                  {
                                    autoFocus: true,
                                    autoComplete: "off",
                                    isRequired: true,
                                    type: "text",
                                    id: "namespace-field",
                                    name: "namespace-field",
                                    "aria-label": "Namespace field",
                                    "aria-describedby": "namespace-field-helper",
                                    value: config.namespace,
                                    onChange: onNamespaceChanged,
                                    tabIndex: 2,
                                    "data-testid": "namespace-text-field",
                                  },
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  InputGroup_1.InputGroupText,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Button_1.Button,
                                      __assign(
                                        {
                                          isSmall: true,
                                          variant: "plain",
                                          "aria-label": "Clear namespace button",
                                          onClick: onClearNamespace,
                                        },
                                        { children: (0, jsx_runtime_1.jsx)(times_icon_1.TimesIcon, {}, void 0) }
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
                      }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    Form_1.FormGroup,
                    __assign(
                      {
                        label: "Host",
                        labelIcon: (0, jsx_runtime_1.jsx)(
                          Popover_1.Popover,
                          __assign(
                            { bodyContent: "Host" },
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                "button",
                                __assign(
                                  {
                                    type: "button",
                                    "aria-label": "More info for host field",
                                    onClick: function (e) {
                                      return e.preventDefault();
                                    },
                                    "aria-describedby": "host-field",
                                    className: "pf-c-form__group-label-help",
                                  },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      help_icon_1.default,
                                      { noVerticalAlign: true },
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
                        isRequired: true,
                        fieldId: "host-field",
                      },
                      {
                        children: (0, jsx_runtime_1.jsxs)(
                          InputGroup_1.InputGroup,
                          __assign(
                            { className: "pf-u-mt-sm" },
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  TextInput_1.TextInput,
                                  {
                                    autoComplete: "off",
                                    isRequired: true,
                                    type: "text",
                                    id: "host-field",
                                    name: "host-field",
                                    "aria-label": "Host field",
                                    "aria-describedby": "host-field-helper",
                                    value: config.host,
                                    onChange: onHostChanged,
                                    tabIndex: 3,
                                    "data-testid": "host-text-field",
                                  },
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  InputGroup_1.InputGroupText,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Button_1.Button,
                                      __assign(
                                        {
                                          isSmall: true,
                                          variant: "plain",
                                          "aria-label": "Clear host button",
                                          onClick: onClearHost,
                                        },
                                        { children: (0, jsx_runtime_1.jsx)(times_icon_1.TimesIcon, {}, void 0) }
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
                      }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    Form_1.FormGroup,
                    __assign(
                      {
                        label: "Token",
                        labelIcon: (0, jsx_runtime_1.jsx)(
                          Popover_1.Popover,
                          __assign(
                            { bodyContent: "Token" },
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                "button",
                                __assign(
                                  {
                                    type: "button",
                                    "aria-label": "More info for token field",
                                    onClick: function (e) {
                                      return e.preventDefault();
                                    },
                                    "aria-describedby": "token-field",
                                    className: "pf-c-form__group-label-help",
                                  },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      help_icon_1.default,
                                      { noVerticalAlign: true },
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
                        isRequired: true,
                        fieldId: "token-field",
                      },
                      {
                        children: (0, jsx_runtime_1.jsxs)(
                          InputGroup_1.InputGroup,
                          __assign(
                            { className: "pf-u-mt-sm" },
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  TextInput_1.TextInput,
                                  {
                                    autoComplete: "off",
                                    isRequired: true,
                                    type: "text",
                                    id: "token-field",
                                    name: "token-field",
                                    "aria-label": "Token field",
                                    "aria-describedby": "token-field-helper",
                                    value: config.token,
                                    onChange: onTokenChanged,
                                    tabIndex: 4,
                                    "data-testid": "token-text-field",
                                  },
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  InputGroup_1.InputGroupText,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Button_1.Button,
                                      __assign(
                                        {
                                          isSmall: true,
                                          variant: "plain",
                                          "aria-label": "Clear token button",
                                          onClick: onClearToken,
                                        },
                                        { children: (0, jsx_runtime_1.jsx)(times_icon_1.TimesIcon, {}, void 0) }
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
                      }
                    ),
                    void 0
                  ),
                ],
              },
              void 0
            ),
          }
        ),
        void 0
      );
    },
    [
      config,
      configExpanded,
      onClearHost,
      onClearNamespace,
      onClearProxy,
      onClearToken,
      onHostChanged,
      onNamespaceChanged,
      onProxyChanged,
      onTokenChanged,
    ]
  );
  var emptyState = (0, react_1.useMemo)(function () {
    return (0, jsx_runtime_1.jsxs)(
      EmptyState_1.EmptyState,
      {
        children: [
          (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateIcon, { icon: plus_circle_icon_1.PlusCircleIcon }, void 0),
          (0, jsx_runtime_1.jsx)(
            Title_1.Title,
            __assign(
              { headingLevel: "h4", size: "lg" },
              { children: "Your deployed Serverless Workflows are shown here" }
            ),
            void 0
          ),
          (0, jsx_runtime_1.jsxs)(
            EmptyState_1.EmptyStateBody,
            {
              children: [
                "For help getting started, access the ",
                (0, jsx_runtime_1.jsx)("a", { children: "quick start guide" }, void 0),
                ".",
              ],
            },
            void 0
          ),
          (0, jsx_runtime_1.jsx)(
            Button_1.Button,
            __assign(
              {
                variant: "primary",
                onClick: function () {
                  return setShowModal(true);
                },
              },
              { children: "Create Serverless Workflow" }
            ),
            void 0
          ),
        ],
      },
      void 0
    );
  }, []);
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        showModal &&
          (0, jsx_runtime_1.jsx)(
            CreateServerlessWorkflowModal_1.CreateServerlessWorkflowModal,
            {
              isOpen: showModal,
              onClose: function () {
                return setShowModal(false);
              },
              config: config,
            },
            void 0
          ),
        (0, jsx_runtime_1.jsxs)(
          Page_1.Page,
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                Page_1.PageSection,
                __assign(
                  { variant: Page_1.PageSectionVariants.light },
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      Text_1.TextContent,
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Text_1.Text,
                          __assign({ component: Text_1.TextVariants.h1 }, { children: "Serverless Workflow" }),
                          void 0
                        ),
                      },
                      void 0
                    ),
                  }
                ),
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                Page_1.PageSection,
                __assign({ variant: Page_1.PageSectionVariants.light }, { children: configContent }),
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                Page_1.PageSection,
                {
                  children:
                    workflows.length === 0
                      ? emptyState
                      : (0, jsx_runtime_1.jsxs)("div", { children: ["workflows ", workflows.length] }, void 0),
                },
                void 0
              ),
            ],
          },
          void 0
        ),
      ],
    },
    void 0
  );
}
exports.ServerlessWorkflowManagementPage = ServerlessWorkflowManagementPage;
//# sourceMappingURL=ServerlessWorkflowManagementPage.js.map
