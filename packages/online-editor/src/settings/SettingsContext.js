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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.useSettingsDispatch =
  exports.useSettings =
  exports.SettingsContextProvider =
  exports.SettingsDispatchContext =
  exports.SettingsContext =
  exports.ExtendedServicesConfig =
  exports.GithubScopes =
  exports.AuthStatus =
  exports.OPENSHIFT_TOKEN_COOKIE_NAME =
  exports.OPENSHIFT_HOST_COOKIE_NAME =
  exports.OPENSHIFT_NAMESPACE_COOKIE_NAME =
  exports.KIE_SANDBOX_EXTENDED_SERVICES_PORT_COOKIE_NAME =
  exports.KIE_SANDBOX_EXTENDED_SERVICES_HOST_COOKIE_NAME =
    void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var cookies_1 = require("../cookies");
var rest_1 = require("@octokit/rest");
var QueryParamsContext_1 = require("../queryParams/QueryParamsContext");
var SettingsModalBody_1 = require("./SettingsModalBody");
var OpenShiftSettingsConfig_1 = require("../openshift/OpenShiftSettingsConfig");
var OpenShiftInstanceStatus_1 = require("../openshift/OpenShiftInstanceStatus");
var OpenShiftService_1 = require("../openshift/OpenShiftService");
var KieSandboxExtendedServicesContext_1 = require("../kieSandboxExtendedServices/KieSandboxExtendedServicesContext");
var react_router_1 = require("react-router");
var Modal_1 = require("@patternfly/react-core/dist/js/components/Modal");
var Routes_1 = require("../navigation/Routes");
var KieSandboxExtendedServicesStatus_1 = require("../kieSandboxExtendedServices/KieSandboxExtendedServicesStatus");
exports.KIE_SANDBOX_EXTENDED_SERVICES_HOST_COOKIE_NAME = "kie-tools-COOKIE__kie-sandbox-extended-services--host";
exports.KIE_SANDBOX_EXTENDED_SERVICES_PORT_COOKIE_NAME = "kie-tools-COOKIE__kie-sandbox-extended-services--port";
var GITHUB_AUTH_TOKEN_COOKIE_NAME = "kie-tools-COOKIE__github-oauth--token";
var GUIDED_TOUR_ENABLED_COOKIE_NAME = "kie-tools-COOKIE__guided-tour--is-enabled";
exports.OPENSHIFT_NAMESPACE_COOKIE_NAME = "kie-tools-COOKIE__dmn-dev-sandbox--connection-namespace";
exports.OPENSHIFT_HOST_COOKIE_NAME = "kie-tools-COOKIE__dmn-dev-sandbox--connection-host";
exports.OPENSHIFT_TOKEN_COOKIE_NAME = "kie-tools-COOKIE__dmn-dev-sandbox--connection-token";
var AuthStatus;
(function (AuthStatus) {
  AuthStatus[(AuthStatus["SIGNED_OUT"] = 0)] = "SIGNED_OUT";
  AuthStatus[(AuthStatus["TOKEN_EXPIRED"] = 1)] = "TOKEN_EXPIRED";
  AuthStatus[(AuthStatus["LOADING"] = 2)] = "LOADING";
  AuthStatus[(AuthStatus["SIGNED_IN"] = 3)] = "SIGNED_IN";
})((AuthStatus = exports.AuthStatus || (exports.AuthStatus = {})));
var GithubScopes;
(function (GithubScopes) {
  GithubScopes["GIST"] = "gist";
  GithubScopes["REPO"] = "repo";
})((GithubScopes = exports.GithubScopes || (exports.GithubScopes = {})));
var ExtendedServicesConfig = (function () {
  function ExtendedServicesConfig(host, port) {
    this.host = host;
    this.port = port;
  }
  ExtendedServicesConfig.prototype.buildUrl = function () {
    if (this.port.trim().length === 0) {
      return this.host;
    }
    return "".concat(this.host, ":").concat(this.port);
  };
  return ExtendedServicesConfig;
})();
exports.ExtendedServicesConfig = ExtendedServicesConfig;
exports.SettingsContext = React.createContext({});
exports.SettingsDispatchContext = React.createContext({});
function SettingsContextProvider(props) {
  var _this = this;
  var queryParams = (0, QueryParamsContext_1.useQueryParams)();
  var history = (0, react_router_1.useHistory)();
  var _a = __read((0, react_1.useState)(false), 2),
    isOpen = _a[0],
    setOpen = _a[1];
  var _b = __read((0, react_1.useState)(SettingsModalBody_1.SettingsTabs.GITHUB), 2),
    activeTab = _b[0],
    setActiveTab = _b[1];
  (0, react_1.useEffect)(
    function () {
      var _a;
      setOpen(queryParams.has(Routes_1.QueryParams.SETTINGS));
      setActiveTab(
        (_a = queryParams.get(Routes_1.QueryParams.SETTINGS)) !== null && _a !== void 0
          ? _a
          : SettingsModalBody_1.SettingsTabs.GITHUB
      );
    },
    [queryParams]
  );
  var open = (0, react_1.useCallback)(
    function (activeTab) {
      if (activeTab === void 0) {
        activeTab = SettingsModalBody_1.SettingsTabs.GITHUB;
      }
      history.replace({
        search: queryParams.with(Routes_1.QueryParams.SETTINGS, activeTab).toString(),
      });
    },
    [history, queryParams]
  );
  var close = (0, react_1.useCallback)(
    function () {
      history.replace({
        search: queryParams.without(Routes_1.QueryParams.SETTINGS).toString(),
      });
    },
    [history, queryParams]
  );
  var _c = __read((0, react_1.useState)(AuthStatus.LOADING), 2),
    githubAuthStatus = _c[0],
    setGitHubAuthStatus = _c[1];
  var _d = __read((0, react_1.useState)(new rest_1.Octokit()), 2),
    githubOctokit = _d[0],
    setGitHubOctokit = _d[1];
  var _e = __read((0, react_1.useState)(undefined), 2),
    githubToken = _e[0],
    setGitHubToken = _e[1];
  var _f = __read((0, react_1.useState)(undefined), 2),
    githubUser = _f[0],
    setGitHubUser = _f[1];
  var _g = __read((0, react_1.useState)(undefined), 2),
    githubScopes = _g[0],
    setGitHubScopes = _g[1];
  var githubAuthService = (0, react_1.useMemo)(function () {
    return {
      reset: function () {
        setGitHubOctokit(new rest_1.Octokit());
        setGitHubToken(undefined);
        setGitHubUser(undefined);
        setGitHubScopes(undefined);
        (0, cookies_1.setCookie)(GITHUB_AUTH_TOKEN_COOKIE_NAME, "");
        setGitHubAuthStatus(AuthStatus.SIGNED_OUT);
      },
      authenticate: function (token) {
        return __awaiter(_this, void 0, void 0, function () {
          var octokit, response, scopes, e_1;
          var _a, _b, _c, _d;
          return __generator(this, function (_e) {
            switch (_e.label) {
              case 0:
                _e.trys.push([0, 3, , 4]);
                setGitHubAuthStatus(AuthStatus.LOADING);
                octokit = new rest_1.Octokit({ auth: token });
                return [4, octokit.users.getAuthenticated()];
              case 1:
                response = _e.sent();
                return [4, delay(1000)];
              case 2:
                _e.sent();
                scopes =
                  (_b =
                    (_a = response.headers["x-oauth-scopes"]) === null || _a === void 0 ? void 0 : _a.split(", ")) !==
                    null && _b !== void 0
                    ? _b
                    : [];
                if (!scopes.includes("repo")) {
                  throw new Error("Token doesn't have 'repo' scope.");
                }
                setGitHubOctokit(octokit);
                setGitHubToken(token);
                setGitHubUser({
                  login: response.data.login,
                  name: (_c = response.data.name) !== null && _c !== void 0 ? _c : "",
                  email: (_d = response.data.email) !== null && _d !== void 0 ? _d : "",
                });
                setGitHubScopes(scopes);
                (0, cookies_1.setCookie)(GITHUB_AUTH_TOKEN_COOKIE_NAME, token);
                setGitHubAuthStatus(AuthStatus.SIGNED_IN);
                return [3, 4];
              case 3:
                e_1 = _e.sent();
                setGitHubAuthStatus(AuthStatus.SIGNED_OUT);
                throw e_1;
              case 4:
                return [2];
            }
          });
        });
      },
    };
  }, []);
  (0, react_1.useEffect)(
    function () {
      var tokenCookie = (0, cookies_1.getCookie)(GITHUB_AUTH_TOKEN_COOKIE_NAME);
      if (!tokenCookie) {
        setGitHubAuthStatus(AuthStatus.SIGNED_OUT);
        return;
      }
      githubAuthService.authenticate(tokenCookie).catch(function () {
        setGitHubAuthStatus(AuthStatus.TOKEN_EXPIRED);
      });
    },
    [githubAuthService]
  );
  var _h = __read((0, react_1.useState)(getBooleanCookieInitialValue(GUIDED_TOUR_ENABLED_COOKIE_NAME, true)), 2),
    isGuidedTourEnabled = _h[0],
    setGuidedTourEnabled = _h[1];
  (0, react_1.useEffect)(
    function () {
      (0, cookies_1.setCookie)(GUIDED_TOUR_ENABLED_COOKIE_NAME, "".concat(isGuidedTourEnabled));
    },
    [isGuidedTourEnabled]
  );
  var kieSandboxExtendedServices = (0, KieSandboxExtendedServicesContext_1.useKieSandboxExtendedServices)();
  var _j = __read((0, react_1.useState)((0, OpenShiftSettingsConfig_1.readConfigCookie)()), 2),
    openshiftConfig = _j[0],
    setOpenShiftConfig = _j[1];
  var _k = __read(
      (0, react_1.useState)(
        kieSandboxExtendedServices.status ===
          KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.AVAILABLE
          ? OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.DISCONNECTED
          : OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.UNAVAILABLE
      ),
      2
    ),
    openshiftStatus = _k[0],
    setOpenshiftStatus = _k[1];
  var openshiftService = (0, react_1.useMemo)(
    function () {
      return new OpenShiftService_1.OpenShiftService(
        "".concat(kieSandboxExtendedServices.config.buildUrl(), "/devsandbox")
      );
    },
    [kieSandboxExtendedServices.config]
  );
  var dispatch = (0, react_1.useMemo)(
    function () {
      return {
        open: open,
        close: close,
        openshift: {
          service: openshiftService,
          setStatus: setOpenshiftStatus,
          setConfig: setOpenShiftConfig,
        },
        github: {
          authService: githubAuthService,
          octokit: githubOctokit,
        },
        kieSandboxExtendedServices: {
          setConfig: kieSandboxExtendedServices.saveNewConfig,
        },
        general: {
          guidedTour: {
            setEnabled: setGuidedTourEnabled,
          },
        },
      };
    },
    [close, githubAuthService, githubOctokit, kieSandboxExtendedServices.saveNewConfig, open, openshiftService]
  );
  var value = (0, react_1.useMemo)(
    function () {
      return {
        isOpen: isOpen,
        activeTab: activeTab,
        openshift: {
          status: openshiftStatus,
          config: openshiftConfig,
        },
        github: {
          authStatus: githubAuthStatus,
          token: githubToken,
          user: githubUser,
          scopes: githubScopes,
        },
        kieSandboxExtendedServices: {
          config: kieSandboxExtendedServices.config,
        },
        general: {
          guidedTour: {
            isEnabled: isGuidedTourEnabled,
          },
        },
      };
    },
    [
      activeTab,
      githubAuthStatus,
      githubScopes,
      githubToken,
      githubUser,
      isGuidedTourEnabled,
      isOpen,
      kieSandboxExtendedServices.config,
      openshiftConfig,
      openshiftStatus,
    ]
  );
  return (0, jsx_runtime_1.jsx)(
    exports.SettingsContext.Provider,
    __assign(
      { value: value },
      {
        children: (0, jsx_runtime_1.jsxs)(
          exports.SettingsDispatchContext.Provider,
          __assign(
            { value: dispatch },
            {
              children: [
                githubAuthStatus !== AuthStatus.LOADING &&
                  (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props.children }, void 0),
                (0, jsx_runtime_1.jsx)(
                  Modal_1.Modal,
                  __assign(
                    { title: "Settings", isOpen: isOpen, onClose: close, variant: Modal_1.ModalVariant.large },
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        "div",
                        __assign(
                          { style: { height: "calc(100vh * 0.5)" }, className: "kie-tools--setings-modal-content" },
                          { children: (0, jsx_runtime_1.jsx)(SettingsModalBody_1.SettingsModalBody, {}, void 0) }
                        ),
                        void 0
                      ),
                    }
                  ),
                  void 0
                ),
              ],
            }
          ),
          void 0
        ),
      }
    ),
    void 0
  );
}
exports.SettingsContextProvider = SettingsContextProvider;
function useSettings() {
  return (0, react_1.useContext)(exports.SettingsContext);
}
exports.useSettings = useSettings;
function useSettingsDispatch() {
  return (0, react_1.useContext)(exports.SettingsDispatchContext);
}
exports.useSettingsDispatch = useSettingsDispatch;
function getBooleanCookieInitialValue(name, defaultValue) {
  return !(0, cookies_1.getCookie)(name) ? defaultValue : (0, cookies_1.getCookie)(name) === "true";
}
function delay(ms) {
  return new Promise(function (res) {
    setTimeout(function () {
      res();
    }, ms);
  });
}
//# sourceMappingURL=SettingsContext.js.map
