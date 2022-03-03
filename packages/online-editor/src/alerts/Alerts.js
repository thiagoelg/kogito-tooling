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
var __values =
  (this && this.__values) ||
  function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAlert = exports.Alerts = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var AlertGroup_1 = require("@patternfly/react-core/dist/js/components/AlertGroup");
var AUTO_CLOSE_ALERTS_REFRESH_RATE_IN_MS = 1000;
exports.Alerts = React.forwardRef(function (props, forwardedRef) {
  var _a = __read((0, react_1.useState)(new Map()), 2),
    alerts = _a[0],
    setAlerts = _a[1];
  var _b = __read((0, react_1.useState)(new Map()), 2),
    autoCloseAlertsControl = _b[0],
    setAutoCloseAlertsControl = _b[1];
  var changeValueForKeys = (0, react_1.useCallback)(function (prev, keys, args) {
    var e_1, _a;
    var newAlerts = new Map(prev);
    try {
      for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
        var key = keys_1_1.value;
        newAlerts.set(key, __assign(__assign({}, newAlerts.get(key)), args));
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    return newAlerts;
  }, []);
  var imperativeHandle = (0, react_1.useMemo)(
    function () {
      return {
        closeAll: function () {
          setAlerts(function (prev) {
            return changeValueForKeys(prev, __spreadArray([], __read(prev.keys()), false), { isShowing: false });
          });
        },
        close: function (key) {
          setAlerts(function (prev) {
            return prev.has(key) ? changeValueForKeys(prev, [key], { isShowing: false }) : prev;
          });
        },
        show: function (key, staticArgs) {
          setAlerts(function (prev) {
            return prev.has(key)
              ? changeValueForKeys(prev, [key], { isShowing: true, lastShowedAt: new Date(), staticArgs: staticArgs })
              : prev;
          });
        },
        set: function (key, alertDelegate, autoCloseArgs) {
          setAlerts(function (prev) {
            var _a, _b, _c, _d;
            var next = new Map(prev);
            next.set(key, {
              alertDelegate: alertDelegate,
              isShowing:
                (_b = (_a = prev.get(key)) === null || _a === void 0 ? void 0 : _a.isShowing) !== null && _b !== void 0
                  ? _b
                  : false,
              lastShowedAt: (_c = prev.get(key)) === null || _c === void 0 ? void 0 : _c.lastShowedAt,
              staticArgs: (_d = prev.get(key)) === null || _d === void 0 ? void 0 : _d.staticArgs,
              autoCloseArgs: autoCloseArgs,
            });
            return next;
          });
        },
      };
    },
    [changeValueForKeys]
  );
  (0, react_1.useImperativeHandle)(
    forwardedRef,
    function () {
      return imperativeHandle;
    },
    [imperativeHandle]
  );
  var startRefreshingAlertWithKey = (0, react_1.useCallback)(
    function (k) {
      return setInterval(function () {
        setAutoCloseAlertsControl(function (prev) {
          var next = new Map(prev);
          var prevAlert = prev.get(k);
          if (prevAlert.secondsLeft > 1) {
            next.set(k, __assign(__assign({}, prevAlert), { secondsLeft: prevAlert.secondsLeft - 1 }));
          } else {
            imperativeHandle.close(k);
          }
          return next;
        });
      }, AUTO_CLOSE_ALERTS_REFRESH_RATE_IN_MS);
    },
    [imperativeHandle]
  );
  (0, react_1.useEffect)(
    function () {
      setAutoCloseAlertsControl(function (prev) {
        var next = new Map(prev);
        __spreadArray([], __read(alerts.entries()), false).forEach(function (_a) {
          var _b = __read(_a, 2),
            k = _b[0],
            v = _b[1];
          if (v.isShowing && prev.has(k) && v.autoCloseArgs) {
            next.set(k, { secondsLeft: v.autoCloseArgs.durationInSeconds, interval: prev.get(k).interval });
          } else if (v.isShowing && !prev.has(k) && v.autoCloseArgs) {
            var interval = startRefreshingAlertWithKey(k);
            next.set(k, { secondsLeft: v.autoCloseArgs.durationInSeconds, interval: interval });
          } else if (!v.isShowing) {
            var saved = prev.get(k);
            if (saved) {
              clearInterval(saved.interval);
              next.delete(k);
            }
          }
        });
        return next;
      });
    },
    [alerts, startRefreshingAlertWithKey]
  );
  return (0, jsx_runtime_1.jsx)(
    AlertGroup_1.AlertGroup,
    __assign(
      { className: "kogito--alert-container" },
      {
        children: (0, jsx_runtime_1.jsx)(
          "div",
          __assign(
            { style: { width: props.width } },
            {
              children: __spreadArray([], __read(alerts.entries()), false)
                .filter(function (_a) {
                  var _b = __read(_a, 2),
                    _ = _b[0],
                    isShowing = _b[1].isShowing;
                  return isShowing;
                })
                .sort(function (_a, _b) {
                  var _c = __read(_a, 2),
                    _ = _c[0],
                    a = _c[1];
                  var _d = __read(_b, 2),
                    __ = _d[0],
                    b = _d[1];
                  return a.lastShowedAt.getTime() - b.lastShowedAt.getTime();
                })
                .map(function (_a) {
                  var _b, _c;
                  var _d = __read(_a, 2),
                    key = _d[0],
                    _e = _d[1],
                    alertDelegate = _e.alertDelegate,
                    autoCloseArgs = _e.autoCloseArgs,
                    staticArgs = _e.staticArgs;
                  return (0, jsx_runtime_1.jsxs)(
                    React.Fragment,
                    {
                      children: [
                        alertDelegate(
                          {
                            close: function () {
                              return imperativeHandle.close(key);
                            },
                            secondsUntilAutoClose:
                              (_c =
                                (_b = autoCloseAlertsControl.get(key)) === null || _b === void 0
                                  ? void 0
                                  : _b.secondsLeft) !== null && _c !== void 0
                                ? _c
                                : autoCloseArgs === null || autoCloseArgs === void 0
                                ? void 0
                                : autoCloseArgs.durationInSeconds,
                            durationInSeconds:
                              autoCloseArgs === null || autoCloseArgs === void 0
                                ? void 0
                                : autoCloseArgs.durationInSeconds,
                          },
                          staticArgs
                        ),
                        (0, jsx_runtime_1.jsx)("br", {}, void 0),
                      ],
                    },
                    key
                  );
                }),
            }
          ),
          void 0
        ),
      }
    ),
    void 0
  );
});
function useAlert(alertsController, delegate, autoCloseArgs) {
  var key = (0, react_1.useMemo)(function () {
    return "".concat(Math.random());
  }, []);
  (0, react_1.useEffect)(
    function () {
      alertsController === null || alertsController === void 0
        ? void 0
        : alertsController.set(key, delegate, autoCloseArgs);
    },
    [alertsController, key, delegate, autoCloseArgs]
  );
  return (0, react_1.useMemo)(
    function () {
      return {
        close: function () {
          return alertsController === null || alertsController === void 0 ? void 0 : alertsController.close(key);
        },
        show: function (staticArgs) {
          return alertsController === null || alertsController === void 0
            ? void 0
            : alertsController.show(key, staticArgs);
        },
      };
    },
    [alertsController, key]
  );
}
exports.useAlert = useAlert;
//# sourceMappingURL=Alerts.js.map
