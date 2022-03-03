"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nHtml = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var I18nHtml = function (_a) {
  var children = _a.children;
  var htmlText = children;
  if (Array.isArray(htmlText)) {
    htmlText = htmlText.join("");
  }
  return (0, jsx_runtime_1.jsx)(
    "p",
    { style: { display: "inline" }, dangerouslySetInnerHTML: { __html: htmlText } },
    void 0
  );
};
exports.I18nHtml = I18nHtml;
//# sourceMappingURL=I18nHtml.js.map
