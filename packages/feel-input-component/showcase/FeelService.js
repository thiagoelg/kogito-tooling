"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeelService = void 0;
var Monaco = require("@kie-tools-core/monaco-editor");
var FeelService = (function () {
  function FeelService(feelGwt) {
    this.feelGwt = feelGwt;
  }
  FeelService.getInstance = function () {
    if (window.__KIE__FEEL__ === undefined) {
      try {
        window.__KIE__FEEL__ = new FeelService(new org.kie.dmn.feel.client.showcase.FeelJS());
      } catch (e) {
        return new FeelService();
      }
    }
    return window.__KIE__FEEL__;
  };
  FeelService.prototype.getSuggestions = function (feelExpression, row, col) {
    var _a;
    var sortValue = 0;
    try {
      var suggestions =
        ((_a = this.feelGwt) === null || _a === void 0
          ? void 0
          : _a.getSuggestions(feelExpression, row, col).toArray()) || [];
      return (
        suggestions
          .filter(function (value, index, self) {
            return self.indexOf(value) === index;
          })
          .map(function (s) {
            return {
              kind: Monaco.languages.CompletionItemKind.Function,
              insertTextRules: Monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              label: s,
              insertText: s,
              sortText: String(++sortValue).padStart(5, "0"),
            };
          }) || []
      );
    } catch (e) {
      return [];
    }
  };
  FeelService.prototype.evaluate = function (expression) {
    var _a;
    var defaultResult = "";
    var result = "";
    try {
      result = ((_a = this.feelGwt) === null || _a === void 0 ? void 0 : _a.evaluate(expression)) || defaultResult;
    } catch (e) {
      return defaultResult;
    }
    if (result === "Eval error." || result.startsWith("org.kie.dmn.feel")) {
      result = defaultResult;
    }
    return result;
  };
  return FeelService;
})();
exports.FeelService = FeelService;
//# sourceMappingURL=FeelService.js.map
