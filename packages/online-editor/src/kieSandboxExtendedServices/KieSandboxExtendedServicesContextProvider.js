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
exports.KieSandboxExtendedServicesContextProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var cookies_1 = require("../cookies");
var KieSandboxExtendedServicesBridge_1 = require("./KieSandboxExtendedServicesBridge");
var KieSandboxExtendedServicesContext_1 = require("./KieSandboxExtendedServicesContext");
var KieSandboxExtendedServicesStatus_1 = require("./KieSandboxExtendedServicesStatus");
var SettingsContext_1 = require("../settings/SettingsContext");
var KieSandboxExtendedServicesModal_1 = require("./KieSandboxExtendedServicesModal");
var EnvContext_1 = require("../env/EnvContext");
var KIE_SANDBOX_EXTENDED_SERVICES_POLLING_TIME = 1000;
function KieSandboxExtendedServicesContextProvider(props) {
  var env = (0, EnvContext_1.useEnv)();
  var _a = __read(
      (0, react_1.useState)(KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.AVAILABLE),
      2
    ),
    status = _a[0],
    setStatus = _a[1];
  var _b = __read((0, react_1.useState)(false), 2),
    isModalOpen = _b[0],
    setModalOpen = _b[1];
  var _c = __read((0, react_1.useState)(undefined), 2),
    installTriggeredBy = _c[0],
    setInstallTriggeredBy = _c[1];
  var _d = __read((0, react_1.useState)(false), 2),
    outdated = _d[0],
    setOutdated = _d[1];
  var _e = __read(
      (0, react_1.useState)(
        new SettingsContext_1.ExtendedServicesConfig(
          EnvContext_1.DEFAULT_KIE_SANDBOX_EXTENDED_SERVICES_HOST,
          EnvContext_1.DEFAULT_KIE_SANDBOX_EXTENDED_SERVICES_PORT
        )
      ),
      2
    ),
    config = _e[0],
    setConfig = _e[1];
  var bridge = (0, react_1.useMemo)(
    function () {
      return new KieSandboxExtendedServicesBridge_1.KieSandboxExtendedServicesBridge(config.buildUrl());
    },
    [config]
  );
  var version = (0, react_1.useMemo)(function () {
    var _a;
    return (_a = process.env.WEBPACK_REPLACE__kieSandboxExtendedServicesCompatibleVersion) !== null && _a !== void 0
      ? _a
      : "0.0.0";
  }, []);
  var saveNewConfig = (0, react_1.useCallback)(function (newConfig) {
    setConfig(newConfig);
    (0, cookies_1.setCookie)(SettingsContext_1.KIE_SANDBOX_EXTENDED_SERVICES_HOST_COOKIE_NAME, newConfig.host);
    (0, cookies_1.setCookie)(SettingsContext_1.KIE_SANDBOX_EXTENDED_SERVICES_PORT_COOKIE_NAME, newConfig.port);
  }, []);
  (0, react_1.useEffect)(
    function () {
      var _a, _b;
      var envHost = EnvContext_1.DEFAULT_KIE_SANDBOX_EXTENDED_SERVICES_HOST;
      var envPort = EnvContext_1.DEFAULT_KIE_SANDBOX_EXTENDED_SERVICES_PORT;
      try {
        var envUrl = new URL(env.vars.KIE_SANDBOX_EXTENDED_SERVICES_URL);
        envHost = "".concat(envUrl.protocol, "//").concat(envUrl.hostname);
        envPort = envUrl.port;
      } catch (e) {
        console.error("Invalid KIE_SANDBOX_EXTENDED_SERVICES_URL", e);
      }
      var host =
        (_a = (0, cookies_1.getCookie)(SettingsContext_1.KIE_SANDBOX_EXTENDED_SERVICES_HOST_COOKIE_NAME)) !== null &&
        _a !== void 0
          ? _a
          : envHost;
      var port =
        (_b = (0, cookies_1.getCookie)(SettingsContext_1.KIE_SANDBOX_EXTENDED_SERVICES_PORT_COOKIE_NAME)) !== null &&
        _b !== void 0
          ? _b
          : envPort;
      var newConfig = new SettingsContext_1.ExtendedServicesConfig(host, port);
      setConfig(newConfig);
      new KieSandboxExtendedServicesBridge_1.KieSandboxExtendedServicesBridge(newConfig.buildUrl())
        .check()
        .then(function (checked) {
          if (checked) {
            saveNewConfig(newConfig);
          }
        });
    },
    [env.vars.KIE_SANDBOX_EXTENDED_SERVICES_URL, saveNewConfig]
  );
  (0, react_1.useEffect)(
    function () {
      var detectCrashesOrStops;
      if (status === KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING) {
        detectCrashesOrStops = window.setInterval(function () {
          bridge.check().catch(function () {
            setStatus(KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.STOPPED);
            setModalOpen(true);
            window.clearInterval(detectCrashesOrStops);
          });
        }, KIE_SANDBOX_EXTENDED_SERVICES_POLLING_TIME);
        return function () {
          return window.clearInterval(detectCrashesOrStops);
        };
      }
      var detectKieSandboxExtendedServices = window.setInterval(function () {
        bridge
          .version()
          .then(function (receivedVersion) {
            if (receivedVersion !== version) {
              setOutdated(true);
            } else {
              window.clearInterval(detectKieSandboxExtendedServices);
              setOutdated(false);
              setStatus(KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING);
            }
          })
          .catch(function (err) {
            console.debug(err);
          });
      }, KIE_SANDBOX_EXTENDED_SERVICES_POLLING_TIME);
      return function () {
        return window.clearInterval(detectKieSandboxExtendedServices);
      };
    },
    [status, bridge, version]
  );
  var value = (0, react_1.useMemo)(
    function () {
      return {
        status: status,
        config: config,
        version: version,
        outdated: outdated,
        isModalOpen: isModalOpen,
        installTriggeredBy: installTriggeredBy,
        setStatus: setStatus,
        setModalOpen: setModalOpen,
        setInstallTriggeredBy: setInstallTriggeredBy,
        saveNewConfig: saveNewConfig,
      };
    },
    [config, installTriggeredBy, isModalOpen, outdated, saveNewConfig, status, version]
  );
  return (0, jsx_runtime_1.jsxs)(
    KieSandboxExtendedServicesContext_1.KieSandboxExtendedServicesContext.Provider,
    __assign(
      { value: value },
      {
        children: [
          props.children,
          (0, jsx_runtime_1.jsx)(KieSandboxExtendedServicesModal_1.KieSandboxExtendedServicesModal, {}, void 0),
        ],
      }
    ),
    void 0
  );
}
exports.KieSandboxExtendedServicesContextProvider = KieSandboxExtendedServicesContextProvider;
//# sourceMappingURL=KieSandboxExtendedServicesContextProvider.js.map
