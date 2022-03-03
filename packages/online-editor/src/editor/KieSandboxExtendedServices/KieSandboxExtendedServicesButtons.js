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
exports.KieSandboxExtendedServicesButtons = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var react_1 = require("react");
var i18n_1 = require("../../i18n");
var DmnDevSandboxContext_1 = require("../DmnDevSandbox/DmnDevSandboxContext");
var DmnDevSandboxDropdownItems_1 = require("../DmnDevSandbox/DmnDevSandboxDropdownItems");
var OpenShiftInstanceStatus_1 = require("../../openshift/OpenShiftInstanceStatus");
var DmnRunnerContext_1 = require("../DmnRunner/DmnRunnerContext");
var FeatureDependentOnKieSandboxExtendedServices_1 = require("../../kieSandboxExtendedServices/FeatureDependentOnKieSandboxExtendedServices");
var KieSandboxExtendedServicesContext_1 = require("../../kieSandboxExtendedServices/KieSandboxExtendedServicesContext");
var KieSandboxExtendedServicesStatus_1 = require("../../kieSandboxExtendedServices/KieSandboxExtendedServicesStatus");
var SettingsContext_1 = require("../../settings/SettingsContext");
var DmnRunnerStatus_1 = require("../DmnRunner/DmnRunnerStatus");
var EditorPageDockDrawer_1 = require("../EditorPageDockDrawer");
var list_icon_1 = require("@patternfly/react-icons/dist/js/icons/list-icon");
var table_icon_1 = require("@patternfly/react-icons/dist/js/icons/table-icon");
function KieSandboxExtendedServicesButtons(props) {
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var kieSandboxExtendedServices = (0, KieSandboxExtendedServicesContext_1.useKieSandboxExtendedServices)();
  var dmnDevSandbox = (0, DmnDevSandboxContext_1.useDmnDevSandbox)();
  var dmnRunnerState = (0, DmnRunnerContext_1.useDmnRunnerState)();
  var dmnRunnerDispatch = (0, DmnRunnerContext_1.useDmnRunnerDispatch)();
  var settings = (0, SettingsContext_1.useSettings)();
  var dmnDevSandboxDropdownItems = (0, DmnDevSandboxDropdownItems_1.useDmnDevSandboxDropdownItems)(props.workspace);
  var toggleDmnRunnerDrawer = (0, react_1.useCallback)(
    function () {
      var _a;
      if (
        kieSandboxExtendedServices.status ===
        KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING
      ) {
        if (dmnRunnerState.mode === DmnRunnerStatus_1.DmnRunnerMode.TABLE) {
          (_a = props.editorPageDock) === null || _a === void 0
            ? void 0
            : _a.toggle(EditorPageDockDrawer_1.PanelId.DMN_RUNNER_TABULAR);
        } else {
          dmnRunnerDispatch.setExpanded(function (prev) {
            return !prev;
          });
        }
        return;
      }
      kieSandboxExtendedServices.setInstallTriggeredBy(KieSandboxExtendedServicesContext_1.DependentFeature.DMN_RUNNER);
      kieSandboxExtendedServices.setModalOpen(true);
    },
    [dmnRunnerState.mode, dmnRunnerDispatch, kieSandboxExtendedServices, props.editorPageDock]
  );
  var toggleDmnDevSandboxDropdown = (0, react_1.useCallback)(
    function (isOpen) {
      if (
        kieSandboxExtendedServices.status ===
        KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING
      ) {
        dmnDevSandbox.setDropdownOpen(isOpen);
        return;
      }
      kieSandboxExtendedServices.setInstallTriggeredBy(
        KieSandboxExtendedServicesContext_1.DependentFeature.DMN_DEV_SANDBOX
      );
      kieSandboxExtendedServices.setModalOpen(true);
    },
    [dmnDevSandbox, kieSandboxExtendedServices]
  );
  var isDevSandboxEnabled = (0, react_1.useMemo)(
    function () {
      return (
        kieSandboxExtendedServices.status ===
          KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING &&
        settings.openshift.status === OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.CONNECTED
      );
    },
    [kieSandboxExtendedServices.status, settings.openshift.status]
  );
  var _a = __read((0, react_1.useState)(false), 2),
    runModeOpen = _a[0],
    setRunModeOpen = _a[1];
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        (0, jsx_runtime_1.jsx)(
          FeatureDependentOnKieSandboxExtendedServices_1.FeatureDependentOnKieSandboxExtendedServices,
          __assign(
            { isLight: true, position: "top" },
            {
              children: (0, jsx_runtime_1.jsx)(
                Dropdown_1.Dropdown,
                {
                  className: isDevSandboxEnabled ? "pf-m-active" : "",
                  onSelect: function () {
                    return dmnDevSandbox.setDropdownOpen(false);
                  },
                  toggle: (0, jsx_runtime_1.jsx)(
                    Dropdown_1.DropdownToggle,
                    __assign(
                      {
                        id: "dmn-dev-sandbox-dropdown-button",
                        onToggle: toggleDmnDevSandboxDropdown,
                        "data-testid": "dmn-dev-sandbox-button",
                      },
                      { children: "Try on OpenShift" }
                    ),
                    void 0
                  ),
                  isOpen: dmnDevSandbox.isDropdownOpen,
                  position: Dropdown_1.DropdownPosition.right,
                  dropdownItems: dmnDevSandboxDropdownItems,
                },
                void 0
              ),
            }
          ),
          void 0
        ),
        "  ",
        (0, jsx_runtime_1.jsx)(
          FeatureDependentOnKieSandboxExtendedServices_1.FeatureDependentOnKieSandboxExtendedServices,
          __assign(
            { isLight: true, position: "top" },
            {
              children: (0, jsx_runtime_1.jsx)(
                Dropdown_1.Dropdown,
                {
                  onSelect: function () {
                    return setRunModeOpen(!runModeOpen);
                  },
                  toggle: (0, jsx_runtime_1.jsx)(
                    Dropdown_1.DropdownToggle,
                    {
                      splitButtonItems: [
                        (0, jsx_runtime_1.jsx)(
                          Dropdown_1.DropdownToggleAction,
                          __assign(
                            {
                              id: "dmn-runner-button",
                              onClick: toggleDmnRunnerDrawer,
                              className: dmnRunnerState.isExpanded ? "pf-m-active" : "",
                              "data-testid": "dmn-runner-button",
                            },
                            { children: i18n.terms.run }
                          ),
                          "dmn-runner-run-button"
                        ),
                      ],
                      splitButtonVariant: "action",
                      onToggle: function (isOpen) {
                        return setRunModeOpen(isOpen);
                      },
                    },
                    void 0
                  ),
                  isOpen: runModeOpen,
                  dropdownItems: [
                    (0, jsx_runtime_1.jsx)(
                      Dropdown_1.DropdownItem,
                      __assign(
                        {
                          component: "button",
                          icon: (0, jsx_runtime_1.jsx)(list_icon_1.ListIcon, {}, void 0),
                          onClick: function () {
                            var _a;
                            if (
                              kieSandboxExtendedServices.status ===
                              KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING
                            ) {
                              dmnRunnerDispatch.setMode(DmnRunnerStatus_1.DmnRunnerMode.FORM);
                              (_a = props.editorPageDock) === null || _a === void 0 ? void 0 : _a.close();
                              dmnRunnerDispatch.setExpanded(true);
                            }
                          },
                        },
                        { children: "as Form" }
                      ),
                      "form-view"
                    ),
                    (0, jsx_runtime_1.jsx)(
                      Dropdown_1.DropdownItem,
                      __assign(
                        {
                          component: "button",
                          icon: (0, jsx_runtime_1.jsx)(table_icon_1.TableIcon, {}, void 0),
                          onClick: function () {
                            var _a;
                            if (
                              kieSandboxExtendedServices.status ===
                              KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING
                            ) {
                              dmnRunnerDispatch.setMode(DmnRunnerStatus_1.DmnRunnerMode.TABLE);
                              (_a = props.editorPageDock) === null || _a === void 0
                                ? void 0
                                : _a.open(EditorPageDockDrawer_1.PanelId.DMN_RUNNER_TABULAR);
                              dmnRunnerDispatch.setExpanded(true);
                            }
                          },
                        },
                        { children: "as Table" }
                      ),
                      "table-view"
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
    },
    void 0
  );
}
exports.KieSandboxExtendedServicesButtons = KieSandboxExtendedServicesButtons;
//# sourceMappingURL=KieSandboxExtendedServicesButtons.js.map
