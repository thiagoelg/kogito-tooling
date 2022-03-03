"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveConfigCookie =
  exports.resetConfigCookie =
  exports.readConfigCookie =
  exports.isTokenValid =
  exports.isHostValid =
  exports.isNamespaceValid =
  exports.isConfigValid =
  exports.EMPTY_CONFIG =
    void 0;
var cookies_1 = require("../cookies");
var SettingsContext_1 = require("../settings/SettingsContext");
exports.EMPTY_CONFIG = {
  namespace: "",
  host: "",
  token: "",
};
function isConfigValid(config) {
  return isNamespaceValid(config.namespace) && isHostValid(config.host) && isTokenValid(config.token);
}
exports.isConfigValid = isConfigValid;
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
  var _a, _b, _c;
  return {
    namespace:
      (_a = (0, cookies_1.getCookie)(SettingsContext_1.OPENSHIFT_NAMESPACE_COOKIE_NAME)) !== null && _a !== void 0
        ? _a
        : "",
    host:
      (_b = (0, cookies_1.getCookie)(SettingsContext_1.OPENSHIFT_HOST_COOKIE_NAME)) !== null && _b !== void 0 ? _b : "",
    token:
      (_c = (0, cookies_1.getCookie)(SettingsContext_1.OPENSHIFT_TOKEN_COOKIE_NAME)) !== null && _c !== void 0
        ? _c
        : "",
  };
}
exports.readConfigCookie = readConfigCookie;
function resetConfigCookie() {
  saveConfigCookie(exports.EMPTY_CONFIG);
}
exports.resetConfigCookie = resetConfigCookie;
function saveConfigCookie(config) {
  (0, cookies_1.setCookie)(SettingsContext_1.OPENSHIFT_NAMESPACE_COOKIE_NAME, config.namespace);
  (0, cookies_1.setCookie)(SettingsContext_1.OPENSHIFT_HOST_COOKIE_NAME, config.host);
  (0, cookies_1.setCookie)(SettingsContext_1.OPENSHIFT_TOKEN_COOKIE_NAME, config.token);
}
exports.saveConfigCookie = saveConfigCookie;
//# sourceMappingURL=OpenShiftSettingsConfig.js.map
