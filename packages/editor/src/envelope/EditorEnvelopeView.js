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
exports.EditorEnvelopeView = exports.EditorEnvelopeViewRef = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var LoadingScreen_1 = require("./LoadingScreen");
var KeyBindingsHelpOverlay_1 = require("./KeyBindingsHelpOverlay");
var react_1 = require("react");
var EditorEnvelopeViewRef = function (props, forwardingRef) {
  var _a = __read((0, react_1.useState)(undefined), 2),
    editor = _a[0],
    setEditor = _a[1];
  var _b = __read((0, react_1.useState)(true), 2),
    loading = _b[0],
    setLoading = _b[1];
  (0, react_1.useImperativeHandle)(
    forwardingRef,
    function () {
      return {
        getEditor: function () {
          return editor;
        },
        setEditor: function (newEditor) {
          return setEditor(newEditor);
        },
        setLoading: function () {
          return setLoading(true);
        },
        setLoadingFinished: function () {
          return setLoading(false);
        },
        setLocale: function (locale) {
          return props.setLocale(locale);
        },
      };
    },
    [props, editor]
  );
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        !loading && (0, jsx_runtime_1.jsx)(KeyBindingsHelpOverlay_1.KeyBindingsHelpOverlay, {}, void 0),
        (0, jsx_runtime_1.jsx)(LoadingScreen_1.LoadingScreen, { loading: loading }, void 0),
        (0, jsx_runtime_1.jsx)(
          "div",
          __assign(
            { style: { position: "absolute", width: "100vw", height: "100vh", top: "0", left: "0" } },
            { children: editor && editor.af_isReact && editor.af_componentRoot() }
          ),
          void 0
        ),
      ],
    },
    void 0
  );
};
exports.EditorEnvelopeViewRef = EditorEnvelopeViewRef;
exports.EditorEnvelopeView = React.forwardRef(exports.EditorEnvelopeViewRef);
//# sourceMappingURL=EditorEnvelopeView.js.map
