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
exports.GitHubContextProvider =
  exports.getCookie =
  exports.setCookie =
  exports.useGitHubApi =
  exports.GitHubContext =
    void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var rest_1 = require("@octokit/rest");
var React = require("react");
var react_1 = require("react");
var GlobalContext_1 = require("./GlobalContext");
exports.GitHubContext = React.createContext({});
function useGitHubApi() {
  return (0, react_1.useContext)(exports.GitHubContext);
}
exports.useGitHubApi = useGitHubApi;
function setCookie(name, value) {
  var date = new Date();
  date.setTime(date.getTime() + 10 * 365 * 24 * 60 * 60);
  document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
}
exports.setCookie = setCookie;
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}
exports.getCookie = getCookie;
var octokitInstance;
var GitHubContextProvider = function (props) {
  var globals = (0, GlobalContext_1.useGlobals)();
  var _a = __read((0, react_1.useState)(false), 2),
    ready = _a[0],
    setReady = _a[1];
  var _b = __read((0, react_1.useState)(getCookie(globals.githubAuthTokenCookieName)), 2),
    token = _b[0],
    setToken = _b[1];
  var userIsLoggedIn = (0, react_1.useCallback)(function () {
    return !!globals.dependencies.all.notificationIndicator();
  }, []);
  var octokit = (0, react_1.useCallback)(function () {
    return octokitInstance;
  }, []);
  (0, react_1.useEffect)(function () {
    if (token) {
      octokitInstance = new rest_1.Octokit({ auth: token });
      console.debug("Token found");
    } else {
      octokitInstance = new rest_1.Octokit();
      console.debug("Token not found.");
    }
    setReady(true);
  }, []);
  (0, react_1.useLayoutEffect)(
    function () {
      if (!token) {
        setCookie(globals.githubAuthTokenCookieName, "");
        octokitInstance = new rest_1.Octokit();
      } else {
        setCookie(globals.githubAuthTokenCookieName, token);
        octokitInstance = new rest_1.Octokit({ auth: token });
      }
    },
    [token]
  );
  return (0, jsx_runtime_1.jsx)(
    exports.GitHubContext.Provider,
    __assign(
      { value: { token: token, setToken: setToken, octokit: octokit, userIsLoggedIn: userIsLoggedIn } },
      { children: ready && props.children }
    ),
    void 0
  );
};
exports.GitHubContextProvider = GitHubContextProvider;
//# sourceMappingURL=GitHubContext.js.map
