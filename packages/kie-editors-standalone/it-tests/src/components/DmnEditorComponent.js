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
exports.DmnEditorComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var DmnEditor = require("@kie-tools/kie-editors-standalone/dist/dmn");
var EditorComponent_1 = require("./EditorComponent");
var DmnEditorComponent = function (props) {
  return (0, jsx_runtime_1.jsx)(
    EditorComponent_1.EditorComponent,
    __assign({ openEditor: DmnEditor.open, defaultModelName: "new.dmn" }, props),
    void 0
  );
};
exports.DmnEditorComponent = DmnEditorComponent;
//# sourceMappingURL=DmnEditorComponent.js.map
