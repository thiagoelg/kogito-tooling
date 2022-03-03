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
exports.AppContextProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var AppContext_1 = require("./AppContext");
var DmnDevSandboxAppDataApi_1 = require("./DmnDevSandboxAppDataApi");
function AppContextProvider(props) {
  var _a = __read((0, react_1.useState)(false), 2),
    fetchDone = _a[0],
    setFetchDone = _a[1];
  var _b = __read((0, react_1.useState)(), 2),
    data = _b[0],
    setData = _b[1];
  (0, react_1.useEffect)(function () {
    (0, DmnDevSandboxAppDataApi_1.fetchAppData)()
      .then(function (data) {
        return setData(data);
      })
      .catch(function (error) {
        return console.error(error);
      })
      .finally(function () {
        return setFetchDone(true);
      });
  }, []);
  return (0, jsx_runtime_1.jsx)(
    AppContext_1.AppContext.Provider,
    __assign({ value: { fetchDone: fetchDone, data: data } }, { children: props.children }),
    void 0
  );
}
exports.AppContextProvider = AppContextProvider;
//# sourceMappingURL=AppContextProvider.js.map
