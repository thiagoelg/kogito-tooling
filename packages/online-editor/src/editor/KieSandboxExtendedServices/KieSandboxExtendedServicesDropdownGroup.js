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
exports.KieSandboxExtendedServicesDropdownGroup = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var react_1 = require("react");
var i18n_1 = require("../../i18n");
var DmnDevSandboxDropdownItems_1 = require("../DmnDevSandbox/DmnDevSandboxDropdownItems");
var DmnRunnerContext_1 = require("../DmnRunner/DmnRunnerContext");
var FeatureDependentOnKieSandboxExtendedServices_1 = require("../../kieSandboxExtendedServices/FeatureDependentOnKieSandboxExtendedServices");
var KieSandboxExtendedServicesContext_1 = require("../../kieSandboxExtendedServices/KieSandboxExtendedServicesContext");
var KieSandboxExtendedServicesStatus_1 = require("../../kieSandboxExtendedServices/KieSandboxExtendedServicesStatus");
var KieSandboxExtendedServicesIcon_1 = require("../../kieSandboxExtendedServices/KieSandboxExtendedServicesIcon");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
function KieSandboxExtendedServicesDropdownGroup(props) {
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var kieSandboxExtendedServices = (0, KieSandboxExtendedServicesContext_1.useKieSandboxExtendedServices)();
  var dmnRunnerState = (0, DmnRunnerContext_1.useDmnRunnerState)();
  var dmnDevSandboxDropdownItems = (0, DmnDevSandboxDropdownItems_1.useDmnDevSandboxDropdownItems)(props.workspace);
  var dmnRunnerDispatch = (0, DmnRunnerContext_1.useDmnRunnerDispatch)();
  var isKieSandboxExtendedServicesRunning = (0, react_1.useMemo)(
    function () {
      return (
        kieSandboxExtendedServices.status ===
        KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING
      );
    },
    [kieSandboxExtendedServices.status]
  );
  var onToggleDmnRunner = (0, react_1.useCallback)(
    function () {
      if (isKieSandboxExtendedServicesRunning) {
        dmnRunnerDispatch.setExpanded(function (prev) {
          return !prev;
        });
        return;
      }
      kieSandboxExtendedServices.setInstallTriggeredBy(KieSandboxExtendedServicesContext_1.DependentFeature.DMN_RUNNER);
      kieSandboxExtendedServices.setModalOpen(true);
    },
    [dmnRunnerDispatch, isKieSandboxExtendedServicesRunning, kieSandboxExtendedServices]
  );
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        (0, jsx_runtime_1.jsx)(
          Dropdown_1.DropdownGroup,
          __assign(
            {
              label: (0, jsx_runtime_1.jsxs)(
                jsx_runtime_1.Fragment,
                {
                  children: [
                    "Run",
                    (0, jsx_runtime_1.jsx)(KieSandboxExtendedServicesIcon_1.KieSandboxExtendedServicesIcon, {}, void 0),
                  ],
                },
                void 0
              ),
            },
            {
              children: (0, jsx_runtime_1.jsx)(
                FeatureDependentOnKieSandboxExtendedServices_1.FeatureDependentOnKieSandboxExtendedServices,
                __assign(
                  { isLight: false, position: "left" },
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      Dropdown_1.DropdownItem,
                      __assign(
                        {
                          id: "dmn-runner-kebab-toggle",
                          component: "button",
                          onClick: onToggleDmnRunner,
                          ouiaId: "toggle-dmn-runner-dropdown-button",
                        },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.Text,
                            { children: dmnRunnerState.isExpanded ? i18n.terms.close : i18n.terms.open },
                            void 0
                          ),
                        }
                      ),
                      "kie-sandbox-extended-services-dropdown-dmn-runner-toggle"
                    ),
                  }
                ),
                void 0
              ),
            }
          ),
          "dmn-runner-group"
        ),
        (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, "divider-kie-extended-service-dropdown-items"),
        (0, jsx_runtime_1.jsx)(
          Dropdown_1.DropdownGroup,
          __assign(
            {
              label: (0, jsx_runtime_1.jsxs)(
                jsx_runtime_1.Fragment,
                {
                  children: [
                    "Try on OpenShift",
                    (0, jsx_runtime_1.jsx)(KieSandboxExtendedServicesIcon_1.KieSandboxExtendedServicesIcon, {}, void 0),
                  ],
                },
                void 0
              ),
            },
            { children: dmnDevSandboxDropdownItems }
          ),
          "dmn-dev-sandbox-group"
        ),
      ],
    },
    void 0
  );
}
exports.KieSandboxExtendedServicesDropdownGroup = KieSandboxExtendedServicesDropdownGroup;
//# sourceMappingURL=KieSandboxExtendedServicesDropdownGroup.js.map
