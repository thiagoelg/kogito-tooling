"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
var React = require("react");
var ErrorBoundary = (function (_super) {
  __extends(ErrorBoundary, _super);
  function ErrorBoundary(props) {
    var _this = _super.call(this, props) || this;
    _this.state = { hasError: false };
    return _this;
  }
  ErrorBoundary.prototype.reset = function () {
    this.props.setHasError(false);
    this.setState({ hasError: false });
  };
  ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
    this.props.setHasError(true);
    console.error("Error", error, errorInfo);
  };
  ErrorBoundary.prototype.render = function () {
    if (this.state.hasError) {
      return this.props.error;
    }
    return this.props.children;
  };
  ErrorBoundary.getDerivedStateFromError = function (error) {
    return { hasError: true };
  };
  return ErrorBoundary;
})(React.Component);
exports.ErrorBoundary = ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map
