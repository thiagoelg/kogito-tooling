"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveConfigCookie =
  exports.saveTokenCookie =
  exports.saveHostCookie =
  exports.saveNamespaceCookie =
  exports.saveProxyCookie =
  exports.resetConfigCookie =
  exports.readConfigCookie =
  exports.isTokenValid =
  exports.isHostValid =
  exports.isNamespaceValid =
  exports.isProxyValid =
  exports.isConfigValid =
  exports.EMPTY_CONFIG =
  exports.OPENSHIFT_TOKEN_COOKIE_NAME =
  exports.OPENSHIFT_HOST_COOKIE_NAME =
  exports.OPENSHIFT_NAMESPACE_COOKIE_NAME =
  exports.OPENSHIFT_PROXY_COOKIE_NAME =
    void 0;
var cookies_1 = require("../cookies");
exports.OPENSHIFT_PROXY_COOKIE_NAME = "KIE-TOOLS-COOKIE__serverless-workflow-chrome-extension--connection-proxy";
exports.OPENSHIFT_NAMESPACE_COOKIE_NAME =
  "KIE-TOOLS-COOKIE__serverless-workflow-chrome-extension--connection-namespace";
exports.OPENSHIFT_HOST_COOKIE_NAME = "KIE-TOOLS-COOKIE__serverless-workflow-chrome-extension--connection-host";
exports.OPENSHIFT_TOKEN_COOKIE_NAME = "KIE-TOOLS-COOKIE__serverless-workflow-chrome-extension--connection-token";
exports.EMPTY_CONFIG = {
  proxy: "",
  namespace: "",
  host: "",
  token: "",
};
function isConfigValid(config) {
  return (
    isProxyValid(config.proxy) &&
    isNamespaceValid(config.namespace) &&
    isHostValid(config.host) &&
    isTokenValid(config.token)
  );
}
exports.isConfigValid = isConfigValid;
function isProxyValid(proxy) {
  if (!proxy || proxy.trim().length === 0) {
    return false;
  }
  try {
    new URL(proxy);
    return true;
  } catch (_) {
    return false;
  }
}
exports.isProxyValid = isProxyValid;
function isNamespaceValid(username) {
  return username !== undefined && username.trim().length > 0;
}
exports.isNamespaceValid = isNamespaceValid;
function isHostValid(host) {
  if (!host || host.trim().length === 0) {
    return false;
  }
  try {
    new URL(host);
    return true;
  } catch (_) {
    return false;
  }
}
exports.isHostValid = isHostValid;
function isTokenValid(token) {
  return token !== undefined && token.trim().length > 0;
}
exports.isTokenValid = isTokenValid;
function readConfigCookie() {
  var _a, _b, _c, _d;
  return {
    proxy:
      (_a = (0, cookies_1.getCookie)(exports.OPENSHIFT_PROXY_COOKIE_NAME)) !== null && _a !== void 0
        ? _a
        : "https://kie-sandbox-extended-services-kie-sandbox.kie-tooling-0ad6762cc85bcef5745bb684498c2436-0000.us-south.containers.appdomain.cloud",
    namespace:
      (_b = (0, cookies_1.getCookie)(exports.OPENSHIFT_NAMESPACE_COOKIE_NAME)) !== null && _b !== void 0 ? _b : "",
    host: (_c = (0, cookies_1.getCookie)(exports.OPENSHIFT_HOST_COOKIE_NAME)) !== null && _c !== void 0 ? _c : "",
    token: (_d = (0, cookies_1.getCookie)(exports.OPENSHIFT_TOKEN_COOKIE_NAME)) !== null && _d !== void 0 ? _d : "",
  };
}
exports.readConfigCookie = readConfigCookie;
function resetConfigCookie() {
  saveConfigCookie(exports.EMPTY_CONFIG);
}
exports.resetConfigCookie = resetConfigCookie;
function saveProxyCookie(proxy) {
  (0, cookies_1.setCookie)(exports.OPENSHIFT_PROXY_COOKIE_NAME, proxy);
}
exports.saveProxyCookie = saveProxyCookie;
function saveNamespaceCookie(namespace) {
  (0, cookies_1.setCookie)(exports.OPENSHIFT_NAMESPACE_COOKIE_NAME, namespace);
}
exports.saveNamespaceCookie = saveNamespaceCookie;
function saveHostCookie(host) {
  (0, cookies_1.setCookie)(exports.OPENSHIFT_HOST_COOKIE_NAME, host);
}
exports.saveHostCookie = saveHostCookie;
function saveTokenCookie(token) {
  (0, cookies_1.setCookie)(exports.OPENSHIFT_TOKEN_COOKIE_NAME, token);
}
exports.saveTokenCookie = saveTokenCookie;
function saveConfigCookie(config) {
  saveProxyCookie(config.proxy);
  saveNamespaceCookie(config.namespace);
  saveHostCookie(config.host);
  saveTokenCookie(config.token);
}
exports.saveConfigCookie = saveConfigCookie;
//# sourceMappingURL=OpenShiftSettingsConfig.js.map
