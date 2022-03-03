"use strict";
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
exports.PromiseStateWrapper =
  exports.useCombinedPromiseState =
  exports.usePromiseState =
  exports.useDelayedPromiseState =
  exports.useDelay =
  exports.PromiseStateStatus =
    void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Hooks_1 = require("../../reactExt/Hooks");
var PromiseStateStatus;
(function (PromiseStateStatus) {
  PromiseStateStatus[(PromiseStateStatus["PENDING"] = 0)] = "PENDING";
  PromiseStateStatus[(PromiseStateStatus["RESOLVED"] = 1)] = "RESOLVED";
  PromiseStateStatus[(PromiseStateStatus["REJECTED"] = 2)] = "REJECTED";
})((PromiseStateStatus = exports.PromiseStateStatus || (exports.PromiseStateStatus = {})));
function useDelay(ms) {
  var _a = __read(usePromiseState(), 2),
    resolved = _a[0],
    setResolved = _a[1];
  (0, Hooks_1.useCancelableEffect)(
    (0, react_1.useCallback)(
      function (_a) {
        var canceled = _a.canceled;
        setTimeout(function () {
          if (canceled.get()) {
            return;
          }
          setResolved({ data: true });
        }, ms);
      },
      [setResolved, ms]
    )
  );
  return resolved;
}
exports.useDelay = useDelay;
function useDelayedPromiseState(ms) {
  var delay = useDelay(ms);
  var _a = __read(usePromiseState(), 2),
    state = _a[0],
    setState = _a[1];
  var combined = useCombinedPromiseState({ state: state, delay: delay });
  var ret = (0, react_1.useMemo)(
    function () {
      switch (combined.status) {
        case PromiseStateStatus.PENDING:
          return { status: PromiseStateStatus.PENDING };
        case PromiseStateStatus.REJECTED:
          return { status: PromiseStateStatus.REJECTED, error: combined.error };
        case PromiseStateStatus.RESOLVED:
          return { status: PromiseStateStatus.RESOLVED, data: combined.data.state };
      }
    },
    [combined]
  );
  return [ret, setState];
}
exports.useDelayedPromiseState = useDelayedPromiseState;
function usePromiseState() {
  var _a = __read((0, react_1.useState)({ status: PromiseStateStatus.PENDING }), 2),
    state = _a[0],
    setState = _a[1];
  var set = (0, react_1.useCallback)(function (newState) {
    if (newState.error) {
      setState({ status: PromiseStateStatus.REJECTED, error: [newState.error] });
    } else if (newState.data !== undefined) {
      setState({ status: PromiseStateStatus.RESOLVED, data: newState.data });
    } else if (newState.loading) {
      setState({ status: PromiseStateStatus.PENDING });
    } else {
      throw new Error("Invalid state");
    }
  }, []);
  return [state, set];
}
exports.usePromiseState = usePromiseState;
function useCombinedPromiseState(args) {
  return (0, react_1.useMemo)(
    function () {
      var _a, _b;
      var statuses = new Map();
      var data = {};
      var error = [];
      Object.entries(args).forEach(function (_a) {
        var _b, _c;
        var _d = __read(_a, 2),
          key = _d[0],
          state = _d[1];
        statuses.set(state.status, ((_b = statuses.get(state.status)) !== null && _b !== void 0 ? _b : 0) + 1);
        data[key] = state.data;
        error = __spreadArray(
          __spreadArray([], __read(error), false),
          __read((_c = state.error) !== null && _c !== void 0 ? _c : []),
          false
        );
      });
      if ((_a = statuses.get(PromiseStateStatus.PENDING)) !== null && _a !== void 0 ? _a : 0 > 0) {
        return { status: PromiseStateStatus.PENDING };
      }
      if ((_b = statuses.get(PromiseStateStatus.REJECTED)) !== null && _b !== void 0 ? _b : 0 > 0) {
        return { status: PromiseStateStatus.REJECTED, error: error };
      }
      return { status: PromiseStateStatus.RESOLVED, data: data };
    },
    [args]
  );
}
exports.useCombinedPromiseState = useCombinedPromiseState;
function PromiseStateWrapper(props) {
  var component = (0, react_1.useMemo)(
    function () {
      var _a, _b, _c, _d, _e;
      switch (props.promise.status) {
        case PromiseStateStatus.PENDING:
          return (_a = props.pending) !== null && _a !== void 0
            ? _a
            : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
        case PromiseStateStatus.REJECTED:
          return (_c =
            (_b = props.rejected) === null || _b === void 0 ? void 0 : _b.call(props, props.promise.error)) !== null &&
            _c !== void 0
            ? _c
            : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
        case PromiseStateStatus.RESOLVED:
          return (_e =
            (_d = props.resolved) === null || _d === void 0 ? void 0 : _d.call(props, props.promise.data)) !== null &&
            _e !== void 0
            ? _e
            : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
      }
    },
    [props]
  );
  return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: component }, void 0);
}
exports.PromiseStateWrapper = PromiseStateWrapper;
//# sourceMappingURL=PromiseState.js.map
