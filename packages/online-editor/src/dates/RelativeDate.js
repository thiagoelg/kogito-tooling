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
exports.RelativeDate = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var moment_1 = require("moment");
var react_1 = require("react");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var Hooks_1 = require("../reactExt/Hooks");
function RelativeDate(props) {
  var _a = __read((0, react_1.useState)((0, moment_1.default)(props.date).fromNow()), 2),
    dateToDisplay = _a[0],
    setDateToDisplay = _a[1];
  (0, Hooks_1.useCancelableEffect)(
    (0, react_1.useCallback)(
      function (_a) {
        var canceled = _a.canceled;
        var interval = setInterval(function () {
          if (canceled.get()) {
            return;
          }
          setDateToDisplay((0, moment_1.default)(props.date).fromNow());
        }, 1000);
        return function () {
          clearInterval(interval);
        };
      },
      [props.date]
    )
  );
  return (0, jsx_runtime_1.jsx)(
    Tooltip_1.Tooltip,
    __assign(
      { content: props.date.toLocaleString() },
      { children: (0, jsx_runtime_1.jsx)("span", { children: dateToDisplay }, void 0) }
    ),
    void 0
  );
}
exports.RelativeDate = RelativeDate;
//# sourceMappingURL=RelativeDate.js.map
