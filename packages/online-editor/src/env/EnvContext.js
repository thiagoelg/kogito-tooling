"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEnv =
  exports.EnvContext =
  exports.DEFAULT_ENV_VARS =
  exports.DEFAULT_CORS_PROXY_URL =
  exports.DEFAULT_KIE_SANDBOX_EXTENDED_SERVICES_PORT =
  exports.DEFAULT_KIE_SANDBOX_EXTENDED_SERVICES_HOST =
    void 0;
var React = require("react");
var react_1 = require("react");
exports.DEFAULT_KIE_SANDBOX_EXTENDED_SERVICES_HOST = "http://localhost";
exports.DEFAULT_KIE_SANDBOX_EXTENDED_SERVICES_PORT = "21345";
exports.DEFAULT_CORS_PROXY_URL = "https://cors.isomorphic-git.org";
exports.DEFAULT_ENV_VARS = {
  KIE_SANDBOX_EXTENDED_SERVICES_URL: ""
    .concat(exports.DEFAULT_KIE_SANDBOX_EXTENDED_SERVICES_HOST, ":")
    .concat(exports.DEFAULT_KIE_SANDBOX_EXTENDED_SERVICES_PORT),
  CORS_PROXY_URL: exports.DEFAULT_CORS_PROXY_URL,
};
exports.EnvContext = React.createContext({});
function useEnv() {
  return (0, react_1.useContext)(exports.EnvContext);
}
exports.useEnv = useEnv;
//# sourceMappingURL=EnvContext.js.map
