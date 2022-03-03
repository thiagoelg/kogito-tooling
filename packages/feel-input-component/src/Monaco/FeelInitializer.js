"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeFeelCompletionItemProvider =
  exports.initializeFeelTokensProvider =
  exports.initializeMonacoTheme =
  exports.initializeFeelLanguage =
    void 0;
var Monaco = require("@kie-tools-core/monaco-editor");
require("monaco-editor/dev/vs/editor/editor.main.css");
var _1 = require(".");
var initializeFeelLanguage = function () {
  Monaco.languages.register({
    id: _1.MONACO_FEEL_LANGUAGE,
    aliases: [_1.MONACO_FEEL_LANGUAGE, "feel", "feel-dmn"],
    mimetypes: ["text/feel"],
  });
};
exports.initializeFeelLanguage = initializeFeelLanguage;
var initializeMonacoTheme = function () {
  Monaco.editor.defineTheme(_1.MONACO_FEEL_THEME, (0, _1.feelTheme)());
};
exports.initializeMonacoTheme = initializeMonacoTheme;
var initializeFeelTokensProvider = function () {
  Monaco.languages.setMonarchTokensProvider(_1.MONACO_FEEL_LANGUAGE, (0, _1.feelTokensConfig)());
};
exports.initializeFeelTokensProvider = initializeFeelTokensProvider;
var initializeFeelCompletionItemProvider = function (suggestionProvider) {
  var provideCompletionItems = function (model, position) {
    var completionItems = (0, _1.feelDefaultSuggestions)();
    if (suggestionProvider) {
      var items = suggestionProvider(model.getValue(), position.lineNumber, position.column - 1);
      if (items.length > 0) {
        completionItems = items;
      }
    }
    return {
      suggestions: completionItems,
    };
  };
  Monaco.languages.registerCompletionItemProvider(_1.MONACO_FEEL_LANGUAGE, {
    provideCompletionItems: provideCompletionItems,
  });
  return provideCompletionItems;
};
exports.initializeFeelCompletionItemProvider = initializeFeelCompletionItemProvider;
//# sourceMappingURL=FeelInitializer.js.map
