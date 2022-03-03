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
exports.SettingsModalBody = exports.SettingsTabs = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Tabs_1 = require("@patternfly/react-core/dist/js/components/Tabs");
var GitHubSettingsTab_1 = require("./GitHubSettingsTab");
var SettingsContext_1 = require("./SettingsContext");
var OpenShiftSettingsTab_1 = require("./OpenShiftSettingsTab");
var KieSandboxExtendedServicesSettingsTab_1 = require("./KieSandboxExtendedServicesSettingsTab");
var SettingsTabs;
(function (SettingsTabs) {
  SettingsTabs["GITHUB"] = "github";
  SettingsTabs["OPENSHIFT"] = "openshift";
  SettingsTabs["KIE_SANDBOX_EXTENDED_SERVICES"] = "kie-sandbox-extended-services";
})((SettingsTabs = exports.SettingsTabs || (exports.SettingsTabs = {})));
function SettingsModalBody() {
  var settings = (0, SettingsContext_1.useSettings)();
  var settingsDispatch = (0, SettingsContext_1.useSettingsDispatch)();
  return (0, jsx_runtime_1.jsxs)(
    Tabs_1.Tabs,
    __assign(
      {
        activeKey: settings.activeTab,
        onSelect: function (e, k) {
          return settingsDispatch.open(k);
        },
        isVertical: false,
        isBox: false,
      },
      {
        children: [
          (0, jsx_runtime_1.jsx)(
            Tabs_1.Tab,
            __assign(
              {
                className: "kie-tools--settings-tab",
                eventKey: SettingsTabs.GITHUB,
                title: (0, jsx_runtime_1.jsx)(Tabs_1.TabTitleText, { children: "GitHub" }, void 0),
              },
              { children: (0, jsx_runtime_1.jsx)(GitHubSettingsTab_1.GitHubSettingsTab, {}, void 0) }
            ),
            void 0
          ),
          (0, jsx_runtime_1.jsx)(
            Tabs_1.Tab,
            __assign(
              {
                className: "kie-tools--settings-tab",
                eventKey: SettingsTabs.OPENSHIFT,
                title: (0, jsx_runtime_1.jsx)(Tabs_1.TabTitleText, { children: "OpenShift" }, void 0),
              },
              { children: (0, jsx_runtime_1.jsx)(OpenShiftSettingsTab_1.OpenShiftSettingsTab, {}, void 0) }
            ),
            void 0
          ),
          (0, jsx_runtime_1.jsx)(
            Tabs_1.Tab,
            __assign(
              {
                className: "kie-tools--settings-tab",
                eventKey: SettingsTabs.KIE_SANDBOX_EXTENDED_SERVICES,
                title: (0, jsx_runtime_1.jsx)(
                  Tabs_1.TabTitleText,
                  { children: "KIE Sandbox Extended Services" },
                  void 0
                ),
              },
              {
                children: (0, jsx_runtime_1.jsx)(
                  KieSandboxExtendedServicesSettingsTab_1.KieSandboxExtendedServicesSettingsTab,
                  {},
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
  );
}
exports.SettingsModalBody = SettingsModalBody;
//# sourceMappingURL=SettingsModalBody.js.map
