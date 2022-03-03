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
exports.triggerClick =
  exports.renderedComponent =
  exports.render =
  exports.teardownContainer =
  exports.setupContainer =
  exports.useContextMock =
    void 0;
var react_dom_1 = require("react-dom");
var contextMock = {};
var componentContainer = null;
jest.mock("react", function () {
  var ActualReact = jest.requireActual("react");
  return __assign(__assign({}, ActualReact), {
    useContext: function () {
      return contextMock;
    },
  });
});
var useContextMock = function (ctx) {
  contextMock = ctx;
};
exports.useContextMock = useContextMock;
var setupContainer = function () {
  componentContainer = document.createElement("div");
  document.body.appendChild(componentContainer);
};
exports.setupContainer = setupContainer;
var teardownContainer = function () {
  if (componentContainer) {
    (0, react_dom_1.unmountComponentAtNode)(componentContainer);
    componentContainer.remove();
  }
  componentContainer = null;
};
exports.teardownContainer = teardownContainer;
var render = function (component) {
  if (componentContainer) {
    (0, react_dom_1.render)(component, componentContainer);
  } else {
    throw new Error("[Guided Tour] Test error: 'setupContainer' must be called on 'beforeEach'.");
  }
};
exports.render = render;
var renderedComponent = function () {
  return componentContainer;
};
exports.renderedComponent = renderedComponent;
var triggerClick = function (selector) {
  var element = document.querySelector(selector);
  if (element) {
    element.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  } else {
    throw new Error("[Guided Tour] Test error: clickable element could not be found.");
  }
};
exports.triggerClick = triggerClick;
//# sourceMappingURL=utils.js.map
