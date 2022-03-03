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
exports.DummyEditor = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var api_1 = require("@kie-tools-core/guided-tour/dist/api");
var DummyEditor = (function () {
  function DummyEditor() {
    this.af_componentTitle = "Dummy Editor";
    this.af_componentId = "dummy-editor";
    this.af_isReact = true;
  }
  DummyEditor.prototype.af_componentRoot = function () {
    var _this = this;
    return (0, jsx_runtime_1.jsx)(
      DummyEditorComponent,
      {
        exposing: function (self) {
          return (_this.ref = self);
        },
      },
      void 0
    );
  };
  DummyEditor.prototype.getContent = function () {
    return this.ref.getContent();
  };
  DummyEditor.prototype.getElementPosition = function (selector) {
    return Promise.resolve(api_1.DEFAULT_RECT);
  };
  DummyEditor.prototype.undo = function () {
    return Promise.resolve();
  };
  DummyEditor.prototype.redo = function () {
    return Promise.resolve();
  };
  DummyEditor.prototype.setContent = function (content) {
    return this.ref.setContent(content);
  };
  DummyEditor.prototype.getPreview = function () {
    return Promise.resolve(undefined);
  };
  DummyEditor.prototype.validate = function () {
    return Promise.resolve([]);
  };
  return DummyEditor;
})();
exports.DummyEditor = DummyEditor;
var DummyEditorComponent = (function (_super) {
  __extends(DummyEditorComponent, _super);
  function DummyEditorComponent(props) {
    var _this = _super.call(this, props) || this;
    _this.state = { content: "" };
    _this.props.exposing(_this);
    return _this;
  }
  DummyEditorComponent.prototype.getContent = function () {
    return Promise.resolve(this.state.content);
  };
  DummyEditorComponent.prototype.setContent = function (content) {
    var _this = this;
    return new Promise(function (res) {
      return _this.setState({ content: content }, res);
    });
  };
  DummyEditorComponent.prototype.render = function () {
    return (0, jsx_runtime_1.jsxs)("div", { children: ["Here's the dummy content: ", this.state.content] }, void 0);
  };
  return DummyEditorComponent;
})(React.Component);
//# sourceMappingURL=DummyEditor.js.map
