"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGitHubAuthInfo = void 0;
var react_1 = require("react");
var SettingsContext_1 = require("../settings/SettingsContext");
function useGitHubAuthInfo() {
  var settings = (0, SettingsContext_1.useSettings)();
  return (0, react_1.useMemo)(
    function () {
      if (settings.github.authStatus !== SettingsContext_1.AuthStatus.SIGNED_IN) {
        return undefined;
      }
      return {
        name: settings.github.user.name,
        email: settings.github.user.email,
        username: settings.github.user.login,
        password: settings.github.token,
      };
    },
    [settings.github]
  );
}
exports.useGitHubAuthInfo = useGitHubAuthInfo;
//# sourceMappingURL=Hooks.js.map
