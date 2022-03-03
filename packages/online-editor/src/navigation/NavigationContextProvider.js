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
exports.NavigationContextProvider = exports.NavigationStatusContext = exports.NavigationBlockerContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var react_router_1 = require("react-router");
exports.NavigationBlockerContext = React.createContext({});
exports.NavigationStatusContext = React.createContext({});
function NavigationContextProvider(props) {
  var history = (0, react_router_1.useHistory)();
  var _a = __read(
      (0, react_1.useState)({
        blockers: new Map(),
        lastBlockedLocation: undefined,
        bypassBlockers: false,
      }),
      2
    ),
    status = _a[0],
    setStatus = _a[1];
  var blockerCtx = (0, react_1.useMemo)(function () {
    return {
      block: function (location) {
        return setStatus(function (prev) {
          return __assign(__assign({}, prev), { lastBlockedLocation: location });
        });
      },
      unblock: function () {
        return setStatus(function (prev) {
          return __assign(__assign({}, prev), { lastBlockedLocation: undefined });
        });
      },
      bypass: function (callback) {
        setStatus(function (prev) {
          return __assign(__assign({}, prev), { bypassBlockers: true });
        });
        setTimeout(function () {
          callback();
          setStatus(function (prev) {
            return __assign(__assign({}, prev), { bypassBlockers: false, lastBlockedLocation: undefined });
          });
        }, 0);
      },
      addBlocker: function (name, blocker) {
        return setStatus(function (prev) {
          if (prev.blockers.get(name) === blocker) {
            return prev;
          }
          var newBlockers = new Map(prev.blockers);
          newBlockers.set(name, blocker);
          return __assign(__assign({}, prev), { blockers: newBlockers });
        });
      },
      removeBlocker: function (name) {
        return setStatus(function (prev) {
          if (!prev.blockers.has(name)) {
            return prev;
          }
          var newBlockers = new Map(prev.blockers);
          newBlockers.delete(name);
          return __assign(__assign({}, prev), { blockers: newBlockers });
        });
      },
    };
  }, []);
  var shouldBlockNavigationTo = (0, react_1.useCallback)(
    function (location) {
      return __spreadArray([], __read(status.blockers.values()), false).reduce(function (acc, blockerDelegate) {
        return acc || blockerDelegate({ location: location });
      }, false);
    },
    [status.blockers]
  );
  (0, react_1.useEffect)(
    function () {
      var cleanup = history.block(function (location, action) {
        if (action === "REPLACE") {
          return;
        }
        blockerCtx.unblock();
        if (status.bypassBlockers) {
          return;
        }
        if (!shouldBlockNavigationTo(location)) {
          return;
        }
        blockerCtx.block(location);
        return false;
      });
      return function () {
        cleanup();
      };
    },
    [blockerCtx, history, shouldBlockNavigationTo, status.bypassBlockers]
  );
  var statusCtx = (0, react_1.useMemo)(
    function () {
      return __assign(__assign({}, status), { shouldBlockNavigationTo: shouldBlockNavigationTo });
    },
    [status, shouldBlockNavigationTo]
  );
  return (0, jsx_runtime_1.jsx)(
    exports.NavigationBlockerContext.Provider,
    __assign(
      { value: blockerCtx },
      {
        children: (0, jsx_runtime_1.jsx)(
          exports.NavigationStatusContext.Provider,
          __assign(
            { value: statusCtx },
            { children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props.children }, void 0) }
          ),
          void 0
        ),
      }
    ),
    void 0
  );
}
exports.NavigationContextProvider = NavigationContextProvider;
//# sourceMappingURL=NavigationContextProvider.js.map
