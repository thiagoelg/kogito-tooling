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
exports.I18nDictionariesProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var core_1 = require("../core");
var I18nDictionariesProvider = function (props) {
  var _a;
  var _b = __read(
      (0, react_1.useState)((_a = props.initialLocale) !== null && _a !== void 0 ? _a : props.defaults.locale),
      2
    ),
    locale = _b[0],
    setLocale = _b[1];
  var i18n = (0, react_1.useMemo)(
    function () {
      return new core_1.I18n(props.defaults, props.dictionaries, locale);
    },
    [locale, props.defaults, props.dictionaries]
  );
  var setNewLocale = (0, react_1.useCallback)(
    function (newLocale) {
      i18n.setLocale(newLocale);
      setLocale(newLocale);
    },
    [i18n]
  );
  var value = (0, react_1.useMemo)(
    function () {
      return {
        locale: locale,
        setLocale: setNewLocale,
        i18n: i18n.getCurrent(),
      };
    },
    [i18n, locale, setNewLocale]
  );
  return (0, jsx_runtime_1.jsx)(props.ctx.Provider, __assign({ value: value }, { children: props.children }), void 0);
};
exports.I18nDictionariesProvider = I18nDictionariesProvider;
//# sourceMappingURL=I18nDictionariesProvider.js.map
