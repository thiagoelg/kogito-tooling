"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var feel_input_component_1 = require("@kie-tools/feel-input-component");
describe("FeelConfigs", function () {
  it("feelTheme", function () {
    var theme = (0, feel_input_component_1.feelTheme)();
    expect(theme.base).toBe("vs");
    expect(theme.inherit).toBeTruthy();
    expect(theme.rules).toHaveLength(5);
    expect(theme.colors["editorLineNumber.foreground"]).toBe("#000000");
  });
  it("feelTokensConfig", function () {
    var tokens = (0, feel_input_component_1.feelTokensConfig)().tokenizer.root;
    expect(tokens).toHaveLength(6);
    expect(
      tokens.map(function (t) {
        return t[1];
      })
    ).toEqual(["feel-boolean", "feel-numeric", "feel-string", "feel-function", "feel-keyword", "feel-keyword"]);
  });
  it("feelDefaultConfig", function () {
    var _a, _b;
    var value = "test";
    var config = (0, feel_input_component_1.feelDefaultConfig)({ value: value });
    expect(config.language).toBe(feel_input_component_1.MONACO_FEEL_LANGUAGE);
    expect(config.theme).toBe(feel_input_component_1.MONACO_FEEL_THEME);
    expect(config.fontSize).toBe(15);
    expect(config.contextmenu).toBe(false);
    expect(config.useTabStops).toBe(false);
    expect(config.folding).toBe(false);
    expect(config.automaticLayout).toBe(true);
    expect(config.lineNumbersMinChars).toBe(0);
    expect(config.overviewRulerBorder).toBe(false);
    expect(config.scrollBeyondLastLine).toBe(false);
    expect(config.hideCursorInOverviewRuler).toBe(true);
    expect((_a = config.scrollbar) === null || _a === void 0 ? void 0 : _a.useShadows).toBe(false);
    expect((_b = config.minimap) === null || _b === void 0 ? void 0 : _b.enabled).toBe(false);
    expect(config.value).toBe(value);
  });
  it("feelDefaultSuggestions", function () {
    var suggestions = (0, feel_input_component_1.feelDefaultSuggestions)();
    expect(suggestions).toHaveLength(47);
    expect(suggestions[0]).toEqual({
      kind: "Keyword",
      insertTextRules: "InsertAsSnippet",
      label: "if",
      insertText: "if $1 then\n\t$0\nelse\n\t",
    });
    expect(suggestions[1]).toEqual({
      kind: "Keyword",
      insertTextRules: "InsertAsSnippet",
      label: "for",
      insertText: "for element in $1 return\n\t$0",
    });
    expect(suggestions[2]).toEqual({
      kind: "Function",
      insertTextRules: "InsertAsSnippet",
      label: "substring(string, start position, length?)",
      insertText: "substring($1, $2, $3)",
    });
    expect(suggestions[3]).toEqual({
      kind: "Function",
      insertTextRules: "InsertAsSnippet",
      label: "string length(string)",
      insertText: "string length($1)",
    });
  });
});
//# sourceMappingURL=FeelConfigs.test.js.map
