"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var feel_input_component_1 = require("@kie-tools/feel-input-component");
var Monaco = require("@kie-tools-core/monaco-editor");
describe("FeelInitializer", function () {
  it("initializeFeelLanguage", function () {
    (0, feel_input_component_1.initializeFeelLanguage)();
    var languages = Monaco.languages.getLanguages();
    var lastRegistered = languages[languages.length - 1];
    expect(lastRegistered).toEqual({
      aliases: ["feel-language", "feel", "feel-dmn"],
      id: "feel-language",
      mimetypes: ["text/feel"],
    });
  });
  it("initializeMonacoTheme", function () {
    var spyDefineTheme = jest.spyOn(Monaco.editor, "defineTheme");
    (0, feel_input_component_1.initializeMonacoTheme)();
    expect(spyDefineTheme).toBeCalledWith("feel-theme", (0, feel_input_component_1.feelTheme)());
  });
  it("initializeFeelTokensProvider", function () {
    var spySetMonarchTokensProvider = jest.spyOn(Monaco.languages, "setMonarchTokensProvider");
    (0, feel_input_component_1.initializeFeelTokensProvider)();
    expect(spySetMonarchTokensProvider).toBeCalledWith("feel-language", (0, feel_input_component_1.feelTokensConfig)());
  });
  it("initializeFeelCompletionItemProvider when provider is not passed returns default suggestions", function () {
    var spyRegisterCompletionItemProvider = jest.spyOn(Monaco.languages, "registerCompletionItemProvider");
    var model = {};
    var position = {};
    var suggestions = (0, feel_input_component_1.initializeFeelCompletionItemProvider)()(model, position).suggestions;
    expect(spyRegisterCompletionItemProvider).toBeCalledWith("feel-language", expect.anything());
    expect(suggestions).toHaveLength(47);
  });
  it("initializeFeelCompletionItemProvider when provider is passed returns provider suggestions", function () {
    var spyRegisterCompletionItemProvider = jest.spyOn(Monaco.languages, "registerCompletionItemProvider");
    var provider = function (_feelExpression, _row, _col) {
      return [
        {
          label: "label",
          insertText: "insertText",
        },
      ];
    };
    var model = {
      getValue: function () {
        return "value";
      },
    };
    var position = {};
    var suggestions = (0, feel_input_component_1.initializeFeelCompletionItemProvider)(provider)(
      model,
      position
    ).suggestions;
    expect(spyRegisterCompletionItemProvider).toBeCalledWith("feel-language", expect.anything());
    expect(suggestions).toHaveLength(1);
  });
});
//# sourceMappingURL=FeelInitializer.test.js.map
