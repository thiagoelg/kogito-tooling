"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nWrapped = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
function I18nWrapped(props) {
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: Object.values(props.children).map(function (piece) {
        var _a;
        if (typeof piece === "string" || typeof piece === "number") {
          return piece;
        }
        return (_a = props.components) === null || _a === void 0 ? void 0 : _a[piece.name];
      }),
    },
    void 0
  );
}
exports.I18nWrapped = I18nWrapped;
//# sourceMappingURL=I18nWrapped.js.map
