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
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenshiftDeploymentsDropdown = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var SettingsContext_1 = require("../../settings/SettingsContext");
var i18n_1 = require("../../i18n");
var DmnDevSandboxContext_1 = require("./DmnDevSandboxContext");
var OpenShiftInstanceStatus_1 = require("../../openshift/OpenShiftInstanceStatus");
var SettingsModalBody_1 = require("../../settings/SettingsModalBody");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var DmnDevSandboxDeploymentDropdownItem_1 = require("./DmnDevSandboxDeploymentDropdownItem");
var openshift_icon_1 = require("@patternfly/react-icons/dist/js/icons/openshift-icon");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var topology_icon_1 = require("@patternfly/react-icons/dist/js/icons/topology-icon");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var Bullseye_1 = require("@patternfly/react-core/dist/js/layouts/Bullseye");
var ResponsiveDropdown_1 = require("../ResponsiveDropdown/ResponsiveDropdown");
var ResponsiveDropdownToggle_1 = require("../ResponsiveDropdown/ResponsiveDropdownToggle");
function OpenshiftDeploymentsDropdown() {
  var settings = (0, SettingsContext_1.useSettings)();
  var settingsDispatch = (0, SettingsContext_1.useSettingsDispatch)();
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var dmnDevSandbox = (0, DmnDevSandboxContext_1.useDmnDevSandbox)();
  var isDmnDevSandboxConnected = (0, react_1.useMemo)(
    function () {
      return settings.openshift.status === OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.CONNECTED;
    },
    [settings.openshift.status]
  );
  var openOpenShiftSettings = (0, react_1.useCallback)(
    function () {
      settingsDispatch.open(SettingsModalBody_1.SettingsTabs.OPENSHIFT);
    },
    [settingsDispatch]
  );
  var items = (0, react_1.useMemo)(
    function () {
      var common = isDmnDevSandboxConnected
        ? [
            (0, jsx_runtime_1.jsx)(
              Dropdown_1.DropdownItem,
              __assign(
                {
                  component: "button",
                  onClick: openOpenShiftSettings,
                  ouiaId: "setup-as-dmn-dev-sandbox-dropdown-button",
                  description: "Change...",
                },
                { children: i18n.dmnDevSandbox.dropdown.connectedTo(settings.openshift.config.namespace) }
              ),
              "dropdown-dmn-dev-sandbox-setup-as"
            ),
            (0, jsx_runtime_1.jsx)(
              Dropdown_1.DropdownSeparator,
              {},
              "dropdown-dmn-dev-sandbox-separator-deployments-2"
            ),
          ]
        : [];
      if (dmnDevSandbox.deployments.length === 0) {
        return __spreadArray(
          __spreadArray([], __read(common), false),
          [
            (0, jsx_runtime_1.jsx)(
              Dropdown_1.DropdownItem,
              __assign(
                { isDisabled: true },
                {
                  children: (0, jsx_runtime_1.jsx)(
                    Bullseye_1.Bullseye,
                    {
                      children: (0, jsx_runtime_1.jsxs)(
                        EmptyState_1.EmptyState,
                        {
                          children: [
                            (0, jsx_runtime_1.jsx)(
                              EmptyState_1.EmptyStateIcon,
                              { icon: topology_icon_1.TopologyIcon },
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              Title_1.Title,
                              __assign({ headingLevel: "h4", size: "md" }, { children: "No deployments yet." }),
                              void 0
                            ),
                          ],
                        },
                        void 0
                      ),
                    },
                    void 0
                  ),
                }
              ),
              "disabled link"
            ),
          ],
          false
        );
      } else {
        return __spreadArray(
          __spreadArray([], __read(common), false),
          [
            dmnDevSandbox.deployments
              .sort(function (a, b) {
                return b.creationTimestamp.getTime() - a.creationTimestamp.getTime();
              })
              .map(function (deployment, i) {
                return (0,
                jsx_runtime_1.jsx)(DmnDevSandboxDeploymentDropdownItem_1.DmnDevSandboxDeploymentDropdownItem, { id: i, deployment: deployment }, deployment.creationTimestamp.getTime());
              }),
          ],
          false
        );
      }
    },
    [
      dmnDevSandbox.deployments,
      i18n,
      isDmnDevSandboxConnected,
      openOpenShiftSettings,
      settings.openshift.config.namespace,
    ]
  );
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: (0, jsx_runtime_1.jsx)(
        Tooltip_1.Tooltip,
        __assign(
          {
            className: "kogito--editor__light-tooltip",
            content: (0, jsx_runtime_1.jsx)(
              "div",
              { children: "You're not connected to any OpenShift instance." },
              void 0
            ),
            trigger: !isDmnDevSandboxConnected ? "mouseenter" : "",
            position: "auto",
          },
          {
            children: (0, jsx_runtime_1.jsx)(
              ResponsiveDropdown_1.ResponsiveDropdown,
              {
                position: "right",
                onSelect: function () {
                  return dmnDevSandbox.setDeploymentsDropdownOpen(false);
                },
                onClose: function () {
                  return dmnDevSandbox.setDeploymentsDropdownOpen(false);
                },
                toggle: (0, jsx_runtime_1.jsx)(
                  ResponsiveDropdownToggle_1.ResponsiveDropdownToggle,
                  __assign(
                    {
                      toggleIndicator: null,
                      onToggle: function () {
                        return dmnDevSandbox.setDeploymentsDropdownOpen(function (dropdownOpen) {
                          return isDmnDevSandboxConnected && !dropdownOpen;
                        });
                      },
                      className: "kie-tools--masthead-hoverable-dark",
                    },
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        openshift_icon_1.OpenshiftIcon,
                        { color: !isDmnDevSandboxConnected ? "gray" : undefined },
                        void 0
                      ),
                    }
                  ),
                  void 0
                ),
                isOpen: dmnDevSandbox.isDeploymentsDropdownOpen,
                isPlain: true,
                className: "kogito--editor__openshift-deployments-dropdown",
                title: "OpenShift deployments",
                dropdownItems: items,
              },
              void 0
            ),
          }
        ),
        void 0
      ),
    },
    void 0
  );
}
exports.OpenshiftDeploymentsDropdown = OpenshiftDeploymentsDropdown;
//# sourceMappingURL=OpenshiftDeploymentsDropdown.js.map
