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
exports.LogoComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Logo_1 = require("./Logo");
var SRC_PROP = "src";
var WIDTH_PROP = "width";
var HEIGHT_PROP = "height";
function LogoComponent(props) {
  var _a = __read(
      (0, react_1.useState)({
        src: "",
      }),
      2
    ),
    logoProps = _a[0],
    setLogoProps = _a[1];
  (0, react_1.useEffect)(function () {
    props.controller.setOnInit(function (componentProps) {
      setLogoProps({
        src: componentProps.get(SRC_PROP) || "",
        width: componentProps.get(WIDTH_PROP),
        height: componentProps.get(HEIGHT_PROP),
      });
    });
  }, []);
  return (0, jsx_runtime_1.jsx)(Logo_1.Logo, __assign({}, logoProps), void 0);
}
exports.LogoComponent = LogoComponent;
//# sourceMappingURL=LogoComponent.js.map
