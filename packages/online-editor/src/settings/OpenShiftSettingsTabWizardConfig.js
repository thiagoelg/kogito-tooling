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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.OpenShiftSettingsTabWizardConfig = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var Alert_1 = require("@patternfly/react-core/dist/js/components/Alert");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var InputGroup_1 = require("@patternfly/react-core/dist/js/components/InputGroup");
var List_1 = require("@patternfly/react-core/dist/js/components/List");
var Spinner_1 = require("@patternfly/react-core/dist/js/components/Spinner");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var Wizard_1 = require("@patternfly/react-core/dist/js/components/Wizard");
var external_link_alt_icon_1 = require("@patternfly/react-icons/dist/js/icons/external-link-alt-icon");
var times_icon_1 = require("@patternfly/react-icons/dist/js/icons/times-icon");
var react_1 = require("react");
var KieSandboxExtendedServicesContext_1 = require("../kieSandboxExtendedServices/KieSandboxExtendedServicesContext");
var i18n_1 = require("../i18n");
var SettingsContext_1 = require("./SettingsContext");
var OpenShiftSettingsConfig_1 = require("../openshift/OpenShiftSettingsConfig");
var KieSandboxExtendedServicesStatus_1 = require("../kieSandboxExtendedServices/KieSandboxExtendedServicesStatus");
var OpenShiftService_1 = require("../openshift/OpenShiftService");
var OpenShiftSettingsTab_1 = require("./OpenShiftSettingsTab");
var OpenShiftInstanceStatus_1 = require("../openshift/OpenShiftInstanceStatus");
var WizardStepIds;
(function (WizardStepIds) {
  WizardStepIds["NAMESPACE"] = "NAMESPACE";
  WizardStepIds["CREDENTIALS"] = "CREDENTIALS";
  WizardStepIds["CONNECT"] = "CONNECT";
})(WizardStepIds || (WizardStepIds = {}));
function OpenShiftSettingsTabWizardConfig(props) {
  var _this = this;
  var kieSandboxExtendedServices = (0, KieSandboxExtendedServicesContext_1.useKieSandboxExtendedServices)();
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var settings = (0, SettingsContext_1.useSettings)();
  var settingsDispatch = (0, SettingsContext_1.useSettingsDispatch)();
  var _a = __read((0, react_1.useState)(settings.openshift.config), 2),
    config = _a[0],
    setConfig = _a[1];
  var _b = __read((0, react_1.useState)(false), 2),
    isConfigValidated = _b[0],
    setConfigValidated = _b[1];
  var _c = __read((0, react_1.useState)(false), 2),
    isSaveLoading = _c[0],
    setSaveLoading = _c[1];
  var _d = __read((0, react_1.useState)(false), 2),
    isConnectLoading = _d[0],
    setConnectLoading = _d[1];
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
  var isNamespaceValidated = (0, react_1.useMemo)(
    function () {
      return (0, OpenShiftSettingsConfig_1.isNamespaceValid)(config.namespace);
    },
    [config.namespace]
  );
  var isHostValidated = (0, react_1.useMemo)(
    function () {
      return (0, OpenShiftSettingsConfig_1.isHostValid)(config.host);
    },
    [config.host]
  );
  var isTokenValidated = (0, react_1.useMemo)(
    function () {
      return (0, OpenShiftSettingsConfig_1.isTokenValid)(config.token);
    },
    [config.token]
  );
  (0, react_1.useEffect)(
    function () {
      setConfigValidated((0, OpenShiftSettingsConfig_1.isConfigValid)(config));
    },
    [config]
  );
  (0, react_1.useEffect)(
    function () {
      if (
        kieSandboxExtendedServices.status !==
        KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING
      ) {
        return;
      }
      setConfig(settings.openshift.config);
    },
    [settings.openshift.config, kieSandboxExtendedServices.status]
  );
  var onClose = (0, react_1.useCallback)(function () {
    props.setMode(OpenShiftSettingsTab_1.OpenShiftSettingsTabMode.SIMPLE);
  }, []);
  var resetConfig = (0, react_1.useCallback)(function (config) {
    setConfigValidated(false);
    setSaveLoading(false);
    setConnectLoading(false);
    setConfig(config);
  }, []);
  var onNamespaceInputChanged = (0, react_1.useCallback)(function (newValue) {
    setConfig(function (c) {
      return __assign(__assign({}, c), { namespace: newValue });
    });
  }, []);
  var onHostInputChanged = (0, react_1.useCallback)(function (newValue) {
    setConfig(function (c) {
      return __assign(__assign({}, c), { host: newValue });
    });
  }, []);
  var onTokenInputChanged = (0, react_1.useCallback)(function (newValue) {
    setConfig(function (c) {
      return __assign(__assign({}, c), { token: newValue });
    });
  }, []);
  var onStepChanged = (0, react_1.useCallback)(
    function (_a) {
      var id = _a.id;
      return __awaiter(_this, void 0, void 0, function () {
        var _b;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              if (!(id === WizardStepIds.CONNECT)) return [3, 2];
              setConnectLoading(true);
              _b = setConfigValidated;
              return [4, settingsDispatch.openshift.service.onCheckConfig(config)];
            case 1:
              _b.apply(void 0, [_c.sent()]);
              setConnectLoading(false);
              _c.label = 2;
            case 2:
              return [2];
          }
        });
      });
    },
    [config, settingsDispatch.openshift.service]
  );
  var onFinish = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var isConfigOk;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (isSaveLoading) {
                return [2];
              }
              setSaveLoading(true);
              return [4, settingsDispatch.openshift.service.onCheckConfig(config)];
            case 1:
              isConfigOk = _a.sent();
              if (isConfigOk) {
                settingsDispatch.openshift.setConfig(config);
                (0, OpenShiftSettingsConfig_1.saveConfigCookie)(config);
                settingsDispatch.openshift.setStatus(OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.CONNECTED);
              }
              setConfigValidated(isConfigOk);
              setSaveLoading(false);
              if (!isConfigOk) {
                return [2];
              }
              resetConfig(config);
              return [2];
          }
        });
      });
    },
    [config, isSaveLoading, resetConfig, settingsDispatch.openshift]
  );
  var wizardSteps = (0, react_1.useMemo)(
    function () {
      return [
        {
          id: WizardStepIds.NAMESPACE,
          name: i18n.dmnDevSandbox.configWizard.steps.first.name,
          component: (0, jsx_runtime_1.jsxs)(
            "div",
            {
              children: [
                (0, jsx_runtime_1.jsx)(
                  Text_1.Text,
                  __assign(
                    { component: Text_1.TextVariants.p },
                    { children: i18n.dmnDevSandbox.configWizard.steps.first.introduction }
                  ),
                  void 0
                ),
                (0, jsx_runtime_1.jsxs)(
                  List_1.List,
                  __assign(
                    { component: List_1.ListComponent.ol, type: List_1.OrderType.number, className: "pf-u-mt-md" },
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)(
                          List_1.ListItem,
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              Text_1.TextContent,
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  Text_1.Text,
                                  __assign(
                                    { component: Text_1.TextVariants.p },
                                    {
                                      children: (0, jsx_runtime_1.jsxs)(
                                        "a",
                                        __assign(
                                          {
                                            href: OpenShiftService_1.DEVELOPER_SANDBOX_GET_STARTED_URL,
                                            target: "_blank",
                                          },
                                          {
                                            children: [
                                              i18n.dmnDevSandbox.configWizard.steps.first.goToGetStartedPage,
                                              (0, jsx_runtime_1.jsx)(
                                                external_link_alt_icon_1.ExternalLinkAltIcon,
                                                { className: "pf-u-mx-sm" },
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
                              void 0
                            ),
                          },
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          List_1.ListItem,
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              Text_1.TextContent,
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  Text_1.Text,
                                  __assign(
                                    { component: Text_1.TextVariants.p },
                                    { children: i18n.dmnDevSandbox.configWizard.steps.first.followSteps }
                                  ),
                                  void 0
                                ),
                              },
                              void 0
                            ),
                          },
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          List_1.ListItem,
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              Text_1.TextContent,
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  Text_1.Text,
                                  __assign(
                                    { component: Text_1.TextVariants.p },
                                    { children: i18n.dmnDevSandbox.configWizard.steps.first.informNamespace }
                                  ),
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
                (0, jsx_runtime_1.jsx)(
                  Form_1.Form,
                  __assign(
                    {
                      isHorizontal: true,
                      className: "pf-u-mt-md",
                      onSubmit: function (e) {
                        return e.preventDefault();
                      },
                    },
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        Form_1.FormGroup,
                        __assign(
                          {
                            fieldId: "dmn-dev-sandbox-config-namespace",
                            label: i18n.terms.namespace,
                            validated: isNamespaceValidated ? "success" : "error",
                            helperTextInvalid: i18n.dmnDevSandbox.common.requiredField,
                          },
                          {
                            children: (0, jsx_runtime_1.jsxs)(
                              InputGroup_1.InputGroup,
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
                                      "aria-label": "namespace field",
                                      value: config.namespace,
                                      placeholder: i18n.dmnDevSandbox.configWizard.steps.first.namespacePlaceholder,
                                      onChange: onNamespaceInputChanged,
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
                              },
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
                (0, jsx_runtime_1.jsx)(
                  Text_1.Text,
                  __assign(
                    { className: "pf-u-my-md", component: Text_1.TextVariants.p },
                    { children: i18n.dmnDevSandbox.configWizard.steps.first.inputReason }
                  ),
                  void 0
                ),
              ],
            },
            void 0
          ),
        },
        {
          id: WizardStepIds.CREDENTIALS,
          name: i18n.dmnDevSandbox.configWizard.steps.second.name,
          component: (0, jsx_runtime_1.jsxs)(
            "div",
            {
              children: [
                (0, jsx_runtime_1.jsx)(
                  Text_1.Text,
                  __assign(
                    { component: Text_1.TextVariants.p },
                    { children: i18n.dmnDevSandbox.configWizard.steps.second.introduction }
                  ),
                  void 0
                ),
                (0, jsx_runtime_1.jsxs)(
                  List_1.List,
                  __assign(
                    { className: "pf-u-my-md", component: List_1.ListComponent.ol, type: List_1.OrderType.number },
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)(
                          List_1.ListItem,
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              Text_1.TextContent,
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  Text_1.Text,
                                  __assign(
                                    { component: Text_1.TextVariants.p },
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        react_components_1.I18nHtml,
                                        { children: i18n.dmnDevSandbox.configWizard.steps.second.accessLoginCommand },
                                        void 0
                                      ),
                                    }
                                  ),
                                  void 0
                                ),
                              },
                              void 0
                            ),
                          },
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          List_1.ListItem,
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              Text_1.TextContent,
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  Text_1.Text,
                                  __assign(
                                    { component: Text_1.TextVariants.p },
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        react_components_1.I18nHtml,
                                        { children: i18n.dmnDevSandbox.configWizard.steps.second.accessDisplayToken },
                                        void 0
                                      ),
                                    }
                                  ),
                                  void 0
                                ),
                              },
                              void 0
                            ),
                          },
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          List_1.ListItem,
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              Text_1.TextContent,
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  Text_1.Text,
                                  __assign(
                                    { component: Text_1.TextVariants.p },
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        react_components_1.I18nHtml,
                                        { children: i18n.dmnDevSandbox.configWizard.steps.second.copyInformation },
                                        void 0
                                      ),
                                    }
                                  ),
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
                (0, jsx_runtime_1.jsxs)(
                  Form_1.Form,
                  __assign(
                    { isHorizontal: true, className: "pf-u-mt-md" },
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)(
                          Form_1.FormGroup,
                          __assign(
                            {
                              fieldId: "dmn-dev-sandbox-config-host",
                              label: i18n.terms.host,
                              validated: isHostValidated ? "success" : "error",
                              helperTextInvalid: i18n.dmnDevSandbox.common.requiredField,
                            },
                            {
                              children: (0, jsx_runtime_1.jsxs)(
                                InputGroup_1.InputGroup,
                                {
                                  children: [
                                    (0, jsx_runtime_1.jsx)(
                                      TextInput_1.TextInput,
                                      {
                                        autoFocus: true,
                                        autoComplete: "off",
                                        isRequired: true,
                                        type: "text",
                                        id: "host-field",
                                        name: "host-field",
                                        "aria-label": "Host field",
                                        value: config.host,
                                        placeholder: i18n.dmnDevSandbox.configWizard.steps.second.hostPlaceholder,
                                        onChange: onHostInputChanged,
                                        tabIndex: 1,
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
                                },
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
                              fieldId: "dmn-dev-sandbox-config-token",
                              label: i18n.terms.token,
                              validated: isTokenValidated ? "success" : "error",
                              helperTextInvalid: i18n.dmnDevSandbox.common.requiredField,
                            },
                            {
                              children: (0, jsx_runtime_1.jsxs)(
                                InputGroup_1.InputGroup,
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
                                        value: config.token,
                                        placeholder: i18n.dmnDevSandbox.configWizard.steps.second.tokenPlaceholder,
                                        onChange: onTokenInputChanged,
                                        tabIndex: 2,
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
                (0, jsx_runtime_1.jsx)(
                  Text_1.Text,
                  __assign(
                    { className: "pf-u-my-md", component: Text_1.TextVariants.p },
                    { children: i18n.dmnDevSandbox.configWizard.steps.second.inputReason }
                  ),
                  void 0
                ),
              ],
            },
            void 0
          ),
        },
        {
          id: WizardStepIds.CONNECT,
          name: i18n.dmnDevSandbox.configWizard.steps.final.name,
          component: (0, jsx_runtime_1.jsxs)(
            jsx_runtime_1.Fragment,
            {
              children: [
                isConnectLoading &&
                  (0, jsx_runtime_1.jsx)(
                    "div",
                    __assign(
                      { className: "kogito--editor__dmn-dev-sandbox-wizard-loading-spinner" },
                      { children: (0, jsx_runtime_1.jsx)(Spinner_1.Spinner, { isSVG: true, size: "xl" }, void 0) }
                    ),
                    void 0
                  ),
                !isConnectLoading &&
                  isConfigValidated &&
                  (0, jsx_runtime_1.jsxs)(
                    "div",
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)(
                          Alert_1.Alert,
                          {
                            variant: "default",
                            isInline: true,
                            title: i18n.dmnDevSandbox.configWizard.steps.final.connectionSuccess,
                          },
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          Text_1.Text,
                          __assign(
                            { className: "pf-u-mt-md", component: Text_1.TextVariants.p },
                            { children: i18n.dmnDevSandbox.configWizard.steps.final.introduction }
                          ),
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          Text_1.Text,
                          __assign(
                            { className: "pf-u-mt-md", component: Text_1.TextVariants.p },
                            { children: i18n.dmnDevSandbox.configWizard.steps.final.configNote }
                          ),
                          void 0
                        ),
                      ],
                    },
                    void 0
                  ),
                !isConnectLoading &&
                  !isConfigValidated &&
                  (0, jsx_runtime_1.jsxs)(
                    "div",
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)(
                          Alert_1.Alert,
                          {
                            variant: "danger",
                            isInline: true,
                            title: i18n.dmnDevSandbox.configWizard.steps.final.connectionError,
                          },
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          Text_1.Text,
                          __assign(
                            { className: "pf-u-mt-md", component: Text_1.TextVariants.p },
                            { children: i18n.dmnDevSandbox.configWizard.steps.final.connectionErrorLong }
                          ),
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          Text_1.Text,
                          __assign(
                            { className: "pf-u-mt-md", component: Text_1.TextVariants.p },
                            { children: i18n.dmnDevSandbox.configWizard.steps.final.possibleErrorReasons.introduction }
                          ),
                          void 0
                        ),
                        (0, jsx_runtime_1.jsxs)(
                          List_1.List,
                          __assign(
                            { className: "pf-u-my-md" },
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  List_1.ListItem,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Text_1.TextContent,
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          Text_1.Text,
                                          __assign(
                                            { component: Text_1.TextVariants.p },
                                            {
                                              children:
                                                i18n.dmnDevSandbox.configWizard.steps.final.possibleErrorReasons
                                                  .emptyField,
                                            }
                                          ),
                                          void 0
                                        ),
                                      },
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  List_1.ListItem,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Text_1.TextContent,
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          Text_1.Text,
                                          __assign(
                                            { component: Text_1.TextVariants.p },
                                            {
                                              children:
                                                i18n.dmnDevSandbox.configWizard.steps.final.possibleErrorReasons
                                                  .instanceExpired,
                                            }
                                          ),
                                          void 0
                                        ),
                                      },
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  List_1.ListItem,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Text_1.TextContent,
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          Text_1.Text,
                                          __assign(
                                            { component: Text_1.TextVariants.p },
                                            {
                                              children:
                                                i18n.dmnDevSandbox.configWizard.steps.final.possibleErrorReasons
                                                  .tokenExpired,
                                            }
                                          ),
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
                        (0, jsx_runtime_1.jsx)(
                          Text_1.Text,
                          __assign(
                            { className: "pf-u-mt-md", component: Text_1.TextVariants.p },
                            { children: i18n.dmnDevSandbox.configWizard.steps.final.checkInfo }
                          ),
                          void 0
                        ),
                      ],
                    },
                    void 0
                  ),
              ],
            },
            void 0
          ),
        },
      ];
    },
    [
      i18n,
      isNamespaceValidated,
      config,
      onNamespaceInputChanged,
      onClearNamespace,
      isHostValidated,
      onHostInputChanged,
      onClearHost,
      isTokenValidated,
      onTokenInputChanged,
      onClearToken,
      isConnectLoading,
      isConfigValidated,
    ]
  );
  var wizardFooter = (0, react_1.useMemo)(
    function () {
      return (0, jsx_runtime_1.jsx)(
        Wizard_1.WizardFooter,
        {
          children: (0, jsx_runtime_1.jsx)(
            Wizard_1.WizardContextConsumer,
            {
              children: function (_a) {
                var activeStep = _a.activeStep,
                  goToStepByName = _a.goToStepByName,
                  goToStepById = _a.goToStepById,
                  onNext = _a.onNext,
                  onBack = _a.onBack;
                if (activeStep.name !== i18n.dmnDevSandbox.configWizard.steps.final.name) {
                  return (0, jsx_runtime_1.jsxs)(
                    jsx_runtime_1.Fragment,
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)(
                          Button_1.Button,
                          __assign({ variant: "primary", onClick: onNext }, { children: i18n.terms.next }),
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          Button_1.Button,
                          __assign(
                            {
                              variant: "secondary",
                              onClick: onBack,
                              isDisabled: activeStep.name === i18n.dmnDevSandbox.configWizard.steps.first.name,
                            },
                            { children: i18n.terms.back }
                          ),
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          Button_1.Button,
                          __assign({ variant: "link", onClick: onClose }, { children: i18n.terms.cancel }),
                          void 0
                        ),
                      ],
                    },
                    void 0
                  );
                }
                return (0, jsx_runtime_1.jsxs)(
                  jsx_runtime_1.Fragment,
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        Button_1.Button,
                        __assign(
                          {
                            id: "dmn-dev-sandbox-config-continue-editing-button",
                            onClick: function () {
                              return onFinish();
                            },
                            isDisabled: !isConfigValidated,
                            variant: Button_1.ButtonVariant.primary,
                            isLoading: isSaveLoading,
                            spinnerAriaValueText: isSaveLoading ? "Loading" : undefined,
                          },
                          { children: isSaveLoading ? i18n.dmnDevSandbox.common.saving : i18n.terms.save }
                        ),
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        Button_1.Button,
                        __assign({ variant: "secondary", onClick: onBack }, { children: i18n.terms.back }),
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        Button_1.Button,
                        __assign({ variant: "link", onClick: onClose }, { children: i18n.terms.cancel }),
                        void 0
                      ),
                    ],
                  },
                  void 0
                );
              },
            },
            void 0
          ),
        },
        void 0
      );
    },
    [i18n, isConfigValidated, isSaveLoading, onClose, onFinish]
  );
  return (0, jsx_runtime_1.jsx)(
    Wizard_1.Wizard,
    { steps: wizardSteps, footer: wizardFooter, onNext: onStepChanged, onGoToStep: onStepChanged },
    void 0
  );
}
exports.OpenShiftSettingsTabWizardConfig = OpenShiftSettingsTabWizardConfig;
//# sourceMappingURL=OpenShiftSettingsTabWizardConfig.js.map
