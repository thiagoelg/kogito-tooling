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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyComponent = exports.DummyContext = exports.dummyDefault = exports.interpolationFunction = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var interpolationFunction = function (name) {
  return "Hi ".concat(name, "!");
};
exports.interpolationFunction = interpolationFunction;
exports.dummyDefault = {
  greeting: exports.interpolationFunction,
  welcome: "Welcome",
  modal: {
    title: "My title",
    text: "My text",
  },
};
exports.DummyContext = React.createContext({});
function DummyComponent() {
  var i18n = (0, react_1.useContext)(exports.DummyContext).i18n;
  return (0, jsx_runtime_1.jsx)(
    "p",
    __assign({ "data-testid": "dummy-component" }, { children: JSON.stringify(i18n) }),
    void 0
  );
}
exports.DummyComponent = DummyComponent;
//# sourceMappingURL=utils.js.map
