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
exports.AnimatedTripleDotLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
function AnimatedTripleDotLabel(_a) {
  var label = _a.label,
    _b = _a.interval,
    interval = _b === void 0 ? 1000 : _b;
  var _c = __read((0, react_1.useState)(""), 2),
    dots = _c[0],
    setDots = _c[1];
  (0, react_1.useEffect)(
    function () {
      var timeout = setTimeout(function () {
        if (dots.length === 3) {
          setDots("");
        } else {
          setDots(dots + ".");
        }
      }, interval);
      return function () {
        clearTimeout(timeout);
      };
    },
    [interval, dots]
  );
  return (0, jsx_runtime_1.jsxs)(
    "p",
    {
      children: [
        label,
        (0, jsx_runtime_1.jsx)(
          "span",
          __assign({ "data-testid": "animated-triple-dot-label" }, { children: dots }),
          void 0
        ),
      ],
    },
    void 0
  );
}
exports.AnimatedTripleDotLabel = AnimatedTripleDotLabel;
//# sourceMappingURL=AnimatedTripleDotLabel.js.map
