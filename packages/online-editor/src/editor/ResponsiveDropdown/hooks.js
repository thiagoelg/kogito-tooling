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
exports.useWindowSizeRelationToBreakpoint = exports.useWindowWidth = exports.RelationToBreakpoint = void 0;
var react_1 = require("react");
var global_breakpoint_xs_1 = require("@patternfly/react-tokens/dist/esm/global_breakpoint_xs");
var global_breakpoint_sm_1 = require("@patternfly/react-tokens/dist/esm/global_breakpoint_sm");
var global_breakpoint_md_1 = require("@patternfly/react-tokens/dist/esm/global_breakpoint_md");
var global_breakpoint_lg_1 = require("@patternfly/react-tokens/dist/esm/global_breakpoint_lg");
var global_breakpoint_xl_1 = require("@patternfly/react-tokens/dist/esm/global_breakpoint_xl");
var global_breakpoint_2xl_1 = require("@patternfly/react-tokens/dist/esm/global_breakpoint_2xl");
var RelationToBreakpoint;
(function (RelationToBreakpoint) {
  RelationToBreakpoint[(RelationToBreakpoint["Above"] = 0)] = "Above";
  RelationToBreakpoint[(RelationToBreakpoint["Below"] = 1)] = "Below";
})((RelationToBreakpoint = exports.RelationToBreakpoint || (exports.RelationToBreakpoint = {})));
var getPxValue = function (_a) {
  var value = _a.value;
  return parseInt(value.replace("px", ""), 10);
};
var breakpoints = {
  xs: getPxValue(global_breakpoint_xs_1.default),
  sm: getPxValue(global_breakpoint_sm_1.default),
  md: getPxValue(global_breakpoint_md_1.default),
  lg: getPxValue(global_breakpoint_lg_1.default),
  xl: getPxValue(global_breakpoint_xl_1.default),
  "2xl": getPxValue(global_breakpoint_2xl_1.default),
};
function throttle(func, timeout) {
  var ready = true;
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (!ready) {
      return;
    }
    ready = false;
    func.apply(void 0, __spreadArray([], __read(args), false));
    setTimeout(function () {
      ready = true;
    }, timeout);
  };
}
function useWindowWidth() {
  var _a = __read(
      (0, react_1.useState)(function () {
        return window.innerWidth;
      }),
      2
    ),
    width = _a[0],
    setWidth = _a[1];
  (0, react_1.useEffect)(function () {
    var getWidth = throttle(function () {
      return setWidth(window.innerWidth);
    }, 200);
    window.addEventListener("resize", getWidth);
    return function () {
      return window.removeEventListener("resize", getWidth);
    };
  }, []);
  return width;
}
exports.useWindowWidth = useWindowWidth;
function useWindowSizeRelationToBreakpoint(breakpoint) {
  var width = useWindowWidth();
  if (width >= breakpoints[breakpoint]) {
    return RelationToBreakpoint.Above;
  }
  return RelationToBreakpoint.Below;
}
exports.useWindowSizeRelationToBreakpoint = useWindowSizeRelationToBreakpoint;
//# sourceMappingURL=hooks.js.map
