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
exports.KieSandboxExtendedServicesIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var react_1 = require("react");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var exclamation_triangle_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon");
var KieSandboxExtendedServicesStatus_1 = require("./KieSandboxExtendedServicesStatus");
var connected_icon_1 = require("@patternfly/react-icons/dist/js/icons/connected-icon");
var disconnected_icon_1 = require("@patternfly/react-icons/dist/js/icons/disconnected-icon");
var KieSandboxExtendedServicesContext_1 = require("./KieSandboxExtendedServicesContext");
var i18n_1 = require("../i18n");
var SettingsContext_1 = require("../settings/SettingsContext");
var SettingsModalBody_1 = require("../settings/SettingsModalBody");
function KieSandboxExtendedServicesIcon() {
  var kieSandboxExtendedServices = (0, KieSandboxExtendedServicesContext_1.useKieSandboxExtendedServices)();
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var settingsDispatch = (0, SettingsContext_1.useSettingsDispatch)();
  var toggleKieSandboxExtendedServices = (0, react_1.useCallback)(
    function () {
      if (
        kieSandboxExtendedServices.status ===
        KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING
      ) {
        settingsDispatch.open(SettingsModalBody_1.SettingsTabs.KIE_SANDBOX_EXTENDED_SERVICES);
      }
      if (!kieSandboxExtendedServices.outdated) {
        return;
      }
      kieSandboxExtendedServices.setModalOpen(true);
    },
    [settingsDispatch, kieSandboxExtendedServices]
  );
  var dropdownToggleIcon = (0, react_1.useMemo)(
    function () {
      return (0, jsx_runtime_1.jsxs)(
        jsx_runtime_1.Fragment,
        {
          children: [
            kieSandboxExtendedServices.outdated &&
              (0, jsx_runtime_1.jsx)(
                Tooltip_1.Tooltip,
                __assign(
                  {
                    className: "kogito--editor__light-tooltip",
                    content: i18n.kieSandboxExtendedServices.dropdown.tooltip.outdated,
                    flipBehavior: ["left"],
                    distance: 20,
                  },
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      exclamation_triangle_icon_1.ExclamationTriangleIcon,
                      {
                        "data-testid": "outdated-icon",
                        className:
                          "kogito--editor__kie-sandbox-extended-services-dropdown-icon-outdated static-opacity",
                        id: "kie-sandbox-extended-services-outdated-icon",
                      },
                      void 0
                    ),
                  }
                ),
                "outdated"
              ),
            !kieSandboxExtendedServices.outdated &&
              (0, jsx_runtime_1.jsx)(
                jsx_runtime_1.Fragment,
                {
                  children:
                    kieSandboxExtendedServices.status ===
                    KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING
                      ? (0, jsx_runtime_1.jsx)(
                          Tooltip_1.Tooltip,
                          __assign(
                            {
                              className: "kogito--editor__light-tooltip",
                              content: i18n.kieSandboxExtendedServices.dropdown.tooltip.connected,
                              flipBehavior: ["left"],
                              distance: 20,
                            },
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                connected_icon_1.ConnectedIcon,
                                {
                                  "data-testid": "connected-icon",
                                  className:
                                    "kogito--editor__kie-sandbox-extended-services-dropdown-icon-connected blink-opacity",
                                  id: "kie-sandbox-extended-services-connected-icon",
                                },
                                void 0
                              ),
                            }
                          ),
                          "connected"
                        )
                      : (0, jsx_runtime_1.jsx)(
                          Tooltip_1.Tooltip,
                          __assign(
                            {
                              className: "kogito--editor__light-tooltip",
                              content: i18n.kieSandboxExtendedServices.dropdown.tooltip.disconnected,
                              flipBehavior: ["left"],
                              distance: 20,
                            },
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                disconnected_icon_1.DisconnectedIcon,
                                {
                                  "data-testid": "disconnected-icon",
                                  className: "static-opacity",
                                  id: "kie-sandbox-extended-services-disconnected-icon",
                                },
                                void 0
                              ),
                            }
                          ),
                          "disconnected"
                        ),
                },
                void 0
              ),
          ],
        },
        void 0
      );
    },
    [i18n, kieSandboxExtendedServices.outdated, kieSandboxExtendedServices.status]
  );
  return (0, jsx_runtime_1.jsx)(
    Dropdown_1.Dropdown,
    {
      toggle: (0, jsx_runtime_1.jsx)(
        Dropdown_1.DropdownToggle,
        __assign(
          {
            id: "kie-sandbox-extended-services-button",
            toggleIndicator: null,
            onToggle: toggleKieSandboxExtendedServices,
            className: "kie-tools--masthead-hoverable-dark",
            "data-testid": "kie-sandbox-extended-services-button",
          },
          { children: dropdownToggleIcon }
        ),
        void 0
      ),
      isPlain: true,
      position: Dropdown_1.DropdownPosition.right,
    },
    void 0
  );
}
exports.KieSandboxExtendedServicesIcon = KieSandboxExtendedServicesIcon;
//# sourceMappingURL=KieSandboxExtendedServicesIcon.js.map
