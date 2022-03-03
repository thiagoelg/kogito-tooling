"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDmnDevSandbox = exports.DmnDevSandboxContext = void 0;
var React = require("react");
var react_1 = require("react");
exports.DmnDevSandboxContext = React.createContext({
  deployments: [],
  isDropdownOpen: false,
  isDeploymentsDropdownOpen: false,
  isConfirmDeployModalOpen: false,
});
function useDmnDevSandbox() {
  return (0, react_1.useContext)(exports.DmnDevSandboxContext);
}
exports.useDmnDevSandbox = useDmnDevSandbox;
//# sourceMappingURL=DmnDevSandboxContext.js.map
