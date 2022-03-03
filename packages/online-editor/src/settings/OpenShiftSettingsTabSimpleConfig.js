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
exports.OpenShiftSettingsTabSimpleConfig = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Alert_1 = require("@patternfly/react-core/dist/js/components/Alert");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var InputGroup_1 = require("@patternfly/react-core/dist/js/components/InputGroup");
var Popover_1 = require("@patternfly/react-core/dist/js/components/Popover");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var arrow_right_icon_1 = require("@patternfly/react-icons/dist/js/icons/arrow-right-icon");
var help_icon_1 = require("@patternfly/react-icons/dist/js/icons/help-icon");
var times_icon_1 = require("@patternfly/react-icons/dist/js/icons/times-icon");
var react_1 = require("react");
var SettingsContext_1 = require("./SettingsContext");
var i18n_1 = require("../i18n");
var OpenShiftInstanceStatus_1 = require("../openshift/OpenShiftInstanceStatus");
var OpenShiftSettingsConfig_1 = require("../openshift/OpenShiftSettingsConfig");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var OpenShiftSettingsTab_1 = require("./OpenShiftSettingsTab");
var KieSandboxExtendedServicesContext_1 = require("../kieSandboxExtendedServices/KieSandboxExtendedServicesContext");
var KieSandboxExtendedServicesStatus_1 = require("../kieSandboxExtendedServices/KieSandboxExtendedServicesStatus");
var FormValiationOptions;
(function (FormValiationOptions) {
  FormValiationOptions["INITIAL"] = "INITIAL";
  FormValiationOptions["INVALID"] = "INVALID";
  FormValiationOptions["CONNECTION_ERROR"] = "CONNECTION_ERROR";
  FormValiationOptions["CONFIG_EXPIRED"] = "CONFIG_EXPIRED";
})(FormValiationOptions || (FormValiationOptions = {}));
function OpenShiftSettingsTabSimpleConfig(props) {
  var _this = this;
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var settings = (0, SettingsContext_1.useSettings)();
  var settingsDispatch = (0, SettingsContext_1.useSettingsDispatch)();
  var kieSandboxExtendedServices = (0, KieSandboxExtendedServicesContext_1.useKieSandboxExtendedServices)();
  var _a = __read((0, react_1.useState)(settings.openshift.config), 2),
    config = _a[0],
    setConfig = _a[1];
  var _b = __read((0, react_1.useState)(FormValiationOptions.INITIAL), 2),
    isConfigValidated = _b[0],
    setConfigValidated = _b[1];
  var _c = __read((0, react_1.useState)(false), 2),
    isConnecting = _c[0],
    setConnecting = _c[1];
  (0, react_1.useEffect)(
    function () {
      setConfig(settings.openshift.config);
      setConfigValidated(
        kieSandboxExtendedServices.status ===
          KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING &&
          settings.openshift.status === OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.EXPIRED
          ? FormValiationOptions.CONFIG_EXPIRED
          : FormValiationOptions.INITIAL
      );
    },
    [kieSandboxExtendedServices.status, settings.openshift.config, settings.openshift.status]
  );
  var resetConfig = (0, react_1.useCallback)(
    function (config) {
      setConfigValidated(
        settings.openshift.status === OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.EXPIRED &&
          config !== OpenShiftSettingsConfig_1.EMPTY_CONFIG
          ? FormValiationOptions.CONFIG_EXPIRED
          : FormValiationOptions.INITIAL
      );
      setConnecting(false);
      setConfig(config);
    },
    [settings.openshift.status]
  );
  var onConnect = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var isConfigOk;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (isConnecting) {
                return [2];
              }
              if (!(0, OpenShiftSettingsConfig_1.isConfigValid)(config)) {
                setConfigValidated(FormValiationOptions.INVALID);
                return [2];
              }
              setConnecting(true);
              return [4, settingsDispatch.openshift.service.onCheckConfig(config)];
            case 1:
              isConfigOk = _a.sent();
              if (isConfigOk) {
                (0, OpenShiftSettingsConfig_1.saveConfigCookie)(config);
                settingsDispatch.openshift.setConfig(config);
                settingsDispatch.openshift.setStatus(OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.CONNECTED);
              }
              setConnecting(false);
              if (!isConfigOk) {
                setConfigValidated(FormValiationOptions.CONNECTION_ERROR);
                return [2];
              }
              resetConfig(config);
              return [2];
          }
        });
      });
    },
    [config, isConnecting, resetConfig, settingsDispatch.openshift]
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
  var onHostChanged = (0, react_1.useCallback)(
    function (newValue) {
      setConfig(__assign(__assign({}, config), { host: newValue }));
    },
    [config]
  );
  var onNamespaceChanged = (0, react_1.useCallback)(
    function (newValue) {
      setConfig(__assign(__assign({}, config), { namespace: newValue }));
    },
    [config]
  );
  var onTokenChanged = (0, react_1.useCallback)(
    function (newValue) {
      setConfig(__assign(__assign({}, config), { token: newValue }));
    },
    [config]
  );
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: (0, jsx_runtime_1.jsxs)(
        Page_1.PageSection,
        __assign(
          { variant: "light", isFilled: true, style: { height: "100%" } },
          {
            children: [
              kieSandboxExtendedServices.status !==
                KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING &&
                (0, jsx_runtime_1.jsxs)(
                  jsx_runtime_1.Fragment,
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        Form_1.FormAlert,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Alert_1.Alert,
                            {
                              variant: "danger",
                              title:
                                "Connect to KIE Sandbox Extended Services before configuring your OpenShift instance",
                              "aria-live": "polite",
                              isInline: true,
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    ],
                  },
                  void 0
                ),
              isConfigValidated === FormValiationOptions.INVALID &&
                (0, jsx_runtime_1.jsxs)(
                  jsx_runtime_1.Fragment,
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        Form_1.FormAlert,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Alert_1.Alert,
                            {
                              variant: "danger",
                              title: i18n.dmnDevSandbox.configModal.validationError,
                              "aria-live": "polite",
                              isInline: true,
                              "data-testid": "alert-validation-error",
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    ],
                  },
                  void 0
                ),
              isConfigValidated === FormValiationOptions.CONNECTION_ERROR &&
                (0, jsx_runtime_1.jsxs)(
                  jsx_runtime_1.Fragment,
                  {
                    children: [
                      " ",
                      (0, jsx_runtime_1.jsx)(
                        Form_1.FormAlert,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Alert_1.Alert,
                            {
                              variant: "danger",
                              title: i18n.dmnDevSandbox.configModal.connectionError,
                              "aria-live": "polite",
                              isInline: true,
                              "data-testid": "alert-connection-error",
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    ],
                  },
                  void 0
                ),
              isConfigValidated === FormValiationOptions.CONFIG_EXPIRED &&
                (0, jsx_runtime_1.jsxs)(
                  jsx_runtime_1.Fragment,
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        Form_1.FormAlert,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Alert_1.Alert,
                            {
                              variant: "warning",
                              title: i18n.dmnDevSandbox.configModal.configExpiredWarning,
                              "aria-live": "polite",
                              isInline: true,
                              "data-testid": "alert-config-expired-warning",
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    ],
                  },
                  void 0
                ),
              (0, jsx_runtime_1.jsxs)(
                Button_1.Button,
                __assign(
                  {
                    id: "dmn-dev-sandbox-config-use-wizard-button",
                    className: "pf-u-p-0",
                    variant: "link",
                    isDisabled:
                      kieSandboxExtendedServices.status !==
                      KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING,
                    onClick: function () {
                      return props.setMode(OpenShiftSettingsTab_1.OpenShiftSettingsTabMode.WIZARD);
                    },
                    "data-testid": "use-wizard-button",
                  },
                  {
                    children: [
                      i18n.dmnDevSandbox.configModal.useWizard,
                      (0, jsx_runtime_1.jsx)(arrow_right_icon_1.ArrowRightIcon, { className: "pf-u-ml-sm" }, void 0),
                    ],
                  }
                ),
                "use-wizard"
              ),
              (0, jsx_runtime_1.jsx)("br", {}, void 0),
              (0, jsx_runtime_1.jsx)("br", {}, void 0),
              (0, jsx_runtime_1.jsxs)(
                Form_1.Form,
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(
                      Form_1.FormGroup,
                      __assign(
                        {
                          label: i18n.terms.namespace,
                          labelIcon: (0, jsx_runtime_1.jsx)(
                            Popover_1.Popover,
                            __assign(
                              { bodyContent: i18n.dmnDevSandbox.configModal.namespaceInfo },
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
                                      isDisabled: isConnecting,
                                      tabIndex: 1,
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
                          label: i18n.terms.host,
                          labelIcon: (0, jsx_runtime_1.jsx)(
                            Popover_1.Popover,
                            __assign(
                              { bodyContent: i18n.dmnDevSandbox.configModal.hostInfo },
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
                                      isDisabled: isConnecting,
                                      tabIndex: 2,
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
                          label: i18n.terms.token,
                          labelIcon: (0, jsx_runtime_1.jsx)(
                            Popover_1.Popover,
                            __assign(
                              { bodyContent: i18n.dmnDevSandbox.configModal.tokenInfo },
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
                                      isDisabled: isConnecting,
                                      tabIndex: 3,
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
                    (0, jsx_runtime_1.jsx)(
                      Form_1.ActionGroup,
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Button_1.Button,
                          __assign(
                            {
                              id: "dmn-dev-sandbox-config-save-button",
                              variant: "primary",
                              onClick: onConnect,
                              "data-testid": "save-config-button",
                              isLoading: isConnecting,
                              isDisabled:
                                kieSandboxExtendedServices.status !==
                                KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING,
                              spinnerAriaValueText: isConnecting ? "Loading" : undefined,
                            },
                            { children: isConnecting ? "Connecting" : "Connect" }
                          ),
                          "save"
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
exports.OpenShiftSettingsTabSimpleConfig = OpenShiftSettingsTabSimpleConfig;
//# sourceMappingURL=OpenShiftSettingsTabSimpleConfig.js.map
