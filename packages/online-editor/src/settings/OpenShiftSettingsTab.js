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
exports.OpenShiftSettingsTab = exports.OpenShiftSettingsTabMode = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var SettingsContext_1 = require("./SettingsContext");
var OpenShiftInstanceStatus_1 = require("../openshift/OpenShiftInstanceStatus");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var check_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/check-circle-icon");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var OpenShiftSettingsTabSimpleConfig_1 = require("./OpenShiftSettingsTabSimpleConfig");
var GitHubSettingsTab_1 = require("./GitHubSettingsTab");
var OpenShiftSettingsConfig_1 = require("../openshift/OpenShiftSettingsConfig");
var OpenShiftSettingsTabWizardConfig_1 = require("./OpenShiftSettingsTabWizardConfig");
var OpenShiftSettingsTabMode;
(function (OpenShiftSettingsTabMode) {
  OpenShiftSettingsTabMode[(OpenShiftSettingsTabMode["SIMPLE"] = 0)] = "SIMPLE";
  OpenShiftSettingsTabMode[(OpenShiftSettingsTabMode["WIZARD"] = 1)] = "WIZARD";
})((OpenShiftSettingsTabMode = exports.OpenShiftSettingsTabMode || (exports.OpenShiftSettingsTabMode = {})));
function OpenShiftSettingsTab() {
  var settings = (0, SettingsContext_1.useSettings)();
  var settingsDispatch = (0, SettingsContext_1.useSettingsDispatch)();
  var _a = __read((0, react_1.useState)(OpenShiftSettingsTabMode.SIMPLE), 2),
    mode = _a[0],
    setMode = _a[1];
  var onDisconnect = (0, react_1.useCallback)(
    function () {
      settingsDispatch.openshift.setStatus(OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.DISCONNECTED);
      var newConfig = {
        namespace: settings.openshift.config.namespace,
        host: settings.openshift.config.host,
        token: "",
      };
      settingsDispatch.openshift.setConfig(newConfig);
      (0, OpenShiftSettingsConfig_1.saveConfigCookie)(newConfig);
    },
    [settings.openshift.config, settingsDispatch.openshift]
  );
  return (0, jsx_runtime_1.jsx)(
    Page_1.Page,
    {
      children: (0, jsx_runtime_1.jsxs)(
        Page_1.PageSection,
        {
          children: [
            settings.openshift.status === OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.CONNECTED &&
              (0, jsx_runtime_1.jsxs)(
                EmptyState_1.EmptyState,
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(
                      EmptyState_1.EmptyStateIcon,
                      { icon: check_circle_icon_1.CheckCircleIcon, color: "var(--pf-global--success-color--100)" },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      Text_1.TextContent,
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Text_1.Text,
                          __assign({ component: "h2" }, { children: "You're connected to OpenShift." }),
                          void 0
                        ),
                      },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsxs)(
                      EmptyState_1.EmptyStateBody,
                      {
                        children: [
                          (0, jsx_runtime_1.jsxs)(
                            Text_1.TextContent,
                            {
                              children: [
                                "Deploying DMN decisions is ",
                                (0, jsx_runtime_1.jsx)("b", { children: "enabled" }, void 0),
                                ".",
                              ],
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsxs)(
                            Text_1.TextContent,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)("b", { children: "Token: " }, void 0),
                                (0, jsx_runtime_1.jsx)(
                                  "i",
                                  { children: (0, GitHubSettingsTab_1.obfuscate)(settings.openshift.config.token) },
                                  void 0
                                ),
                              ],
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsxs)(
                            Text_1.TextContent,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)("b", { children: "Host: " }, void 0),
                                (0, jsx_runtime_1.jsx)("i", { children: settings.openshift.config.host }, void 0),
                              ],
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsxs)(
                            Text_1.TextContent,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)("b", { children: "Namespace (project): " }, void 0),
                                (0, jsx_runtime_1.jsx)("i", { children: settings.openshift.config.namespace }, void 0),
                              ],
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsx)(
                            Button_1.Button,
                            __assign(
                              { variant: Button_1.ButtonVariant.tertiary, onClick: onDisconnect },
                              { children: "Disconnect" }
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
            (settings.openshift.status === OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.DISCONNECTED ||
              settings.openshift.status === OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.EXPIRED) &&
              (0, jsx_runtime_1.jsxs)(
                jsx_runtime_1.Fragment,
                {
                  children: [
                    mode === OpenShiftSettingsTabMode.SIMPLE &&
                      (0, jsx_runtime_1.jsx)(
                        OpenShiftSettingsTabSimpleConfig_1.OpenShiftSettingsTabSimpleConfig,
                        { setMode: setMode },
                        void 0
                      ),
                    mode === OpenShiftSettingsTabMode.WIZARD &&
                      (0, jsx_runtime_1.jsx)(
                        OpenShiftSettingsTabWizardConfig_1.OpenShiftSettingsTabWizardConfig,
                        { setMode: setMode },
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
    void 0
  );
}
exports.OpenShiftSettingsTab = OpenShiftSettingsTab;
//# sourceMappingURL=OpenShiftSettingsTab.js.map
