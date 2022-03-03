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
exports.KieSandboxExtendedServicesSettingsTab = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var InputGroup_1 = require("@patternfly/react-core/dist/js/components/InputGroup");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var SettingsContext_1 = require("./SettingsContext");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Alert_1 = require("@patternfly/react-core/dist/js/components/Alert");
var KieSandboxExtendedServicesContext_1 = require("../kieSandboxExtendedServices/KieSandboxExtendedServicesContext");
var KieSandboxExtendedServicesStatus_1 = require("../kieSandboxExtendedServices/KieSandboxExtendedServicesStatus");
function KieSandboxExtendedServicesSettingsTab() {
  var settings = (0, SettingsContext_1.useSettings)();
  var settingsDispatch = (0, SettingsContext_1.useSettingsDispatch)();
  var kieSandboxExtendedServices = (0, KieSandboxExtendedServicesContext_1.useKieSandboxExtendedServices)();
  var _a = __read((0, react_1.useState)(settings.kieSandboxExtendedServices.config.host), 2),
    host = _a[0],
    setHost = _a[1];
  var _b = __read((0, react_1.useState)(settings.kieSandboxExtendedServices.config.port), 2),
    port = _b[0],
    setPort = _b[1];
  var onSubmit = (0, react_1.useCallback)(
    function (e) {
      e.preventDefault();
      settingsDispatch.kieSandboxExtendedServices.setConfig(new SettingsContext_1.ExtendedServicesConfig(host, port));
    },
    [settingsDispatch, host, port]
  );
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: (0, jsx_runtime_1.jsx)(
        Page_1.Page,
        {
          children: (0, jsx_runtime_1.jsx)(
            Page_1.PageSection,
            {
              children: (0, jsx_runtime_1.jsx)(
                Page_1.PageSection,
                __assign(
                  { variant: "light", isFilled: true, style: { height: "100%" } },
                  {
                    children: (0, jsx_runtime_1.jsxs)(
                      Form_1.Form,
                      __assign(
                        { onSubmit: onSubmit },
                        {
                          children: [
                            (0, jsx_runtime_1.jsxs)(
                              Form_1.FormAlert,
                              {
                                children: [
                                  kieSandboxExtendedServices.status ===
                                    KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING &&
                                    (0, jsx_runtime_1.jsx)(
                                      Alert_1.Alert,
                                      {
                                        variant: "success",
                                        title: "You are connected to KIE Sandbox Extended Services",
                                        "aria-live": "polite",
                                        isInline: true,
                                      },
                                      void 0
                                    ),
                                  kieSandboxExtendedServices.status !==
                                    KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING &&
                                    (0, jsx_runtime_1.jsx)(
                                      Alert_1.Alert,
                                      {
                                        variant: "danger",
                                        title: "You are not connected to KIE Sandbox Extended Services",
                                        "aria-live": "polite",
                                        isInline: true,
                                      },
                                      void 0
                                    ),
                                ],
                              },
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              Form_1.FormGroup,
                              __assign(
                                {
                                  isRequired: true,
                                  helperTextInvalid: "",
                                  validated: "default",
                                  label: "Host",
                                  fieldId: "host-input",
                                },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    InputGroup_1.InputGroup,
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        TextInput_1.TextInput,
                                        {
                                          id: "host-input",
                                          name: "host",
                                          "aria-describedby": "host-text-input-helper",
                                          placeholder: "",
                                          validated: "default",
                                          value: host,
                                          onChange: setHost,
                                          autoFocus: true,
                                        },
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
                              Form_1.FormGroup,
                              __assign(
                                {
                                  isRequired: false,
                                  helperTextInvalid: "",
                                  validated: "default",
                                  label: "Port",
                                  fieldId: "port-input",
                                },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    InputGroup_1.InputGroup,
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        TextInput_1.TextInput,
                                        {
                                          id: "port-input",
                                          name: "port",
                                          "aria-describedby": "port-text-input-helper",
                                          placeholder: "",
                                          validated: "default",
                                          value: port,
                                          onChange: setPort,
                                          autoFocus: true,
                                        },
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
                              Form_1.ActionGroup,
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  Button_1.Button,
                                  __assign(
                                    {
                                      id: "dmn-dev-sandbox-config-save-button",
                                      variant: "primary",
                                      onClick: onSubmit,
                                      "data-testid": "save-config-button",
                                    },
                                    { children: "Change" }
                                  ),
                                  "save"
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
exports.KieSandboxExtendedServicesSettingsTab = KieSandboxExtendedServicesSettingsTab;
//# sourceMappingURL=KieSandboxExtendedServicesSettingsTab.js.map
