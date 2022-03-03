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
exports.useDmnDevSandboxDropdownItems = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var React = require("react");
var react_1 = require("react");
var DmnDevSandboxContext_1 = require("./DmnDevSandboxContext");
var OpenShiftInstanceStatus_1 = require("../../openshift/OpenShiftInstanceStatus");
var FeatureDependentOnKieSandboxExtendedServices_1 = require("../../kieSandboxExtendedServices/FeatureDependentOnKieSandboxExtendedServices");
var KieSandboxExtendedServicesContext_1 = require("../../kieSandboxExtendedServices/KieSandboxExtendedServicesContext");
var KieSandboxExtendedServicesStatus_1 = require("../../kieSandboxExtendedServices/KieSandboxExtendedServicesStatus");
var SettingsContext_1 = require("../../settings/SettingsContext");
var SettingsModalBody_1 = require("../../settings/SettingsModalBody");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var FileLabel_1 = require("../../workspace/components/FileLabel");
var openshift_icon_1 = require("@patternfly/react-icons/dist/js/icons/openshift-icon");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
function useDmnDevSandboxDropdownItems(workspace) {
  var settings = (0, SettingsContext_1.useSettings)();
  var settingsDispatch = (0, SettingsContext_1.useSettingsDispatch)();
  var kieSandboxExtendedServices = (0, KieSandboxExtendedServicesContext_1.useKieSandboxExtendedServices)();
  var dmnDevSandbox = (0, DmnDevSandboxContext_1.useDmnDevSandbox)();
  var isKieSandboxExtendedServicesRunning = (0, react_1.useMemo)(
    function () {
      return (
        kieSandboxExtendedServices.status ===
        KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING
      );
    },
    [kieSandboxExtendedServices.status]
  );
  var isDmnDevSandboxConnected = (0, react_1.useMemo)(
    function () {
      return settings.openshift.status === OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.CONNECTED;
    },
    [settings.openshift.status]
  );
  var onDevSandboxSetup = (0, react_1.useCallback)(
    function () {
      settingsDispatch.open(SettingsModalBody_1.SettingsTabs.OPENSHIFT);
    },
    [settingsDispatch]
  );
  var onDevSandboxDeploy = (0, react_1.useCallback)(
    function () {
      if (isKieSandboxExtendedServicesRunning) {
        dmnDevSandbox.setConfirmDeployModalOpen(true);
        return;
      }
      kieSandboxExtendedServices.setInstallTriggeredBy(
        KieSandboxExtendedServicesContext_1.DependentFeature.DMN_DEV_SANDBOX
      );
      kieSandboxExtendedServices.setModalOpen(true);
    },
    [dmnDevSandbox, isKieSandboxExtendedServicesRunning, kieSandboxExtendedServices]
  );
  return (0, react_1.useMemo)(
    function () {
      return [
        (0, jsx_runtime_1.jsxs)(
          React.Fragment,
          {
            children: [
              workspace &&
                (0, jsx_runtime_1.jsx)(
                  FeatureDependentOnKieSandboxExtendedServices_1.FeatureDependentOnKieSandboxExtendedServices,
                  __assign(
                    { isLight: false, position: "left" },
                    {
                      children: (0, jsx_runtime_1.jsxs)(
                        Dropdown_1.DropdownItem,
                        __assign(
                          {
                            icon: (0, jsx_runtime_1.jsx)(openshift_icon_1.OpenshiftIcon, {}, void 0),
                            id: "dmn-dev-sandbox-deploy-your-model-button",
                            component: "button",
                            onClick: onDevSandboxDeploy,
                            isDisabled: isKieSandboxExtendedServicesRunning && !isDmnDevSandboxConnected,
                            ouiaId: "deploy-to-dmn-dev-sandbox-dropdown-button",
                          },
                          {
                            children: [
                              workspace.files.length > 1 &&
                                (0, jsx_runtime_1.jsx)(
                                  Flex_1.Flex,
                                  __assign(
                                    { flexWrap: { default: "nowrap" } },
                                    {
                                      children: (0, jsx_runtime_1.jsxs)(
                                        Flex_1.FlexItem,
                                        {
                                          children: [
                                            "Deploy ",
                                            (0, jsx_runtime_1.jsx)(
                                              "b",
                                              { children: '"'.concat(workspace.descriptor.name, '"') },
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
                              workspace.files.length === 1 &&
                                (0, jsx_runtime_1.jsxs)(
                                  Flex_1.Flex,
                                  __assign(
                                    { flexWrap: { default: "nowrap" } },
                                    {
                                      children: [
                                        (0, jsx_runtime_1.jsxs)(
                                          Flex_1.FlexItem,
                                          {
                                            children: [
                                              "Deploy ",
                                              (0, jsx_runtime_1.jsx)(
                                                "b",
                                                { children: '"'.concat(workspace.files[0].nameWithoutExtension, '"') },
                                                void 0
                                              ),
                                            ],
                                          },
                                          void 0
                                        ),
                                        (0, jsx_runtime_1.jsx)(
                                          Flex_1.FlexItem,
                                          {
                                            children: (0, jsx_runtime_1.jsx)(
                                              "b",
                                              {
                                                children: (0, jsx_runtime_1.jsx)(
                                                  FileLabel_1.FileLabel,
                                                  { extension: workspace.files[0].extension },
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
                        "dropdown-dmn-dev-sandbox-deploy"
                      ),
                    }
                  ),
                  void 0
                ),
              !isDmnDevSandboxConnected &&
                isKieSandboxExtendedServicesRunning &&
                (0, jsx_runtime_1.jsxs)(
                  jsx_runtime_1.Fragment,
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, void 0),
                      (0, jsx_runtime_1.jsx)(
                        Dropdown_1.DropdownItem,
                        __assign(
                          {
                            id: "dmn-dev-sandbox-setup-button",
                            onClick: onDevSandboxSetup,
                            ouiaId: "setup-dmn-dev-sandbox-dropdown-button",
                          },
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              Button_1.Button,
                              __assign(
                                { isInline: true, variant: Button_1.ButtonVariant.link },
                                { children: "Setup..." }
                              ),
                              void 0
                            ),
                          }
                        ),
                        "dropdown-dmn-dev-sandbox-setup"
                      ),
                    ],
                  },
                  void 0
                ),
            ],
          },
          "dmndev-sandbox-dropdown-items"
        ),
      ];
    },
    [isDmnDevSandboxConnected, isKieSandboxExtendedServicesRunning, onDevSandboxDeploy, onDevSandboxSetup, workspace]
  );
}
exports.useDmnDevSandboxDropdownItems = useDmnDevSandboxDropdownItems;
//# sourceMappingURL=DmnDevSandboxDropdownItems.js.map
