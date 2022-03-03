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
exports.FeatureDependentOnKieSandboxExtendedServices = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var i18n_1 = require("../i18n");
var KieSandboxExtendedServicesContext_1 = require("./KieSandboxExtendedServicesContext");
var KieSandboxExtendedServicesStatus_1 = require("./KieSandboxExtendedServicesStatus");
function FeatureDependentOnKieSandboxExtendedServices(props) {
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var kieSandboxExtendedServices = (0, KieSandboxExtendedServicesContext_1.useKieSandboxExtendedServices)();
  if (
    kieSandboxExtendedServices.status === KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING
  ) {
    return props.children;
  }
  return (0, jsx_runtime_1.jsx)(
    Tooltip_1.Tooltip,
    __assign(
      {
        content: i18n.kieSandboxExtendedServices.dropdown.tooltip.install,
        position: props.position,
        className: props.isLight ? "kogito--editor__light-tooltip" : "",
      },
      { children: props.children }
    ),
    void 0
  );
}
exports.FeatureDependentOnKieSandboxExtendedServices = FeatureDependentOnKieSandboxExtendedServices;
//# sourceMappingURL=FeatureDependentOnKieSandboxExtendedServices.js.map
