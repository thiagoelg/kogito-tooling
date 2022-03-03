"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKieSandboxExtendedServices = exports.KieSandboxExtendedServicesContext = exports.DependentFeature = void 0;
var React = require("react");
var react_1 = require("react");
var DependentFeature;
(function (DependentFeature) {
  DependentFeature["DMN_RUNNER"] = "DMN_RUNNER";
  DependentFeature["DMN_DEV_SANDBOX"] = "DMN_DEV_SANDBOX";
})((DependentFeature = exports.DependentFeature || (exports.DependentFeature = {})));
exports.KieSandboxExtendedServicesContext = React.createContext({});
function useKieSandboxExtendedServices() {
  return (0, react_1.useContext)(exports.KieSandboxExtendedServicesContext);
}
exports.useKieSandboxExtendedServices = useKieSandboxExtendedServices;
//# sourceMappingURL=KieSandboxExtendedServicesContext.js.map
