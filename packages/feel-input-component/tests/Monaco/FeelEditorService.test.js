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
var test_utils_1 = require("react-dom/test-utils");
var feel_input_component_1 = require("@kie-tools/feel-input-component");
describe("FeelEditorService", function () {
  it("createEditor, when DOM element is not present", function () {
    expect(function () {
      editorBuilder().createEditor();
    }).toThrow("FEEL editor cannot be created without a DOM element.");
  });
  it("isInitialized, when it's not intialized", function () {
    expect(feel_input_component_1.FeelEditorService.isInitialized()).toBeFalsy();
  });
  it("isInitialized, when it's intialized", function () {
    (0, test_utils_1.act)(function () {
      editorBuilder().withDomElement(domElement()).createEditor();
    });
    expect(feel_input_component_1.FeelEditorService.isInitialized()).toBeTruthy();
  });
  it("createEditor when all elements are present", function () {
    var onBlur = jest.fn();
    var onChange = jest.fn();
    var onKeyDown = jest.fn();
    var options = {};
    feel_input_component_1.FeelEditorService.setServiceInstance(undefined);
    feel_input_component_1.FeelEditorService.getEditorBuilder()
      .withDomElement(domElement())
      .withOnBlur(onBlur)
      .withOnChange(onChange)
      .withOnKeyDown(onKeyDown)
      .withOptions(options)
      .createEditor();
    expect(onBlur).toBeCalled();
    expect(onChange).toBeCalled();
    expect(onKeyDown).toBeCalled();
  });
  it("getEditorBuilder", function () {
    expect(editorBuilder()).toBe(feel_input_component_1.FeelEditorService.getEditorBuilder());
  });
  it("getStandaloneEditor", function () {
    var editor = editorBuilder().withDomElement(domElement()).createEditor();
    expect(editor).toBe(feel_input_component_1.FeelEditorService.getStandaloneEditor());
  });
  it("colorize", function () {
    feel_input_component_1.FeelEditorService.setServiceInstance(undefined);
    var builder = editorBuilder().withDomElement(domElement());
    var spyCreateEditor = jest.spyOn(builder, "createEditor");
    var spyDispose = jest.spyOn(builder, "dispose");
    builder.colorize("");
    expect(spyCreateEditor).toBeCalled();
    expect(spyDispose).toBeCalled();
  });
  it("dispose", function () {
    var editor = editorBuilder().withDomElement(domElement()).createEditor();
    var disposeSpy = jest.spyOn(editor, "dispose");
    feel_input_component_1.FeelEditorService.dispose();
    expect(disposeSpy).toBeCalled();
  });
});
var domElement = function () {
  return document.createElement("span");
};
var editorBuilder = function () {
  return feel_input_component_1.FeelEditorService.getEditorBuilder();
};
jest.mock("@kie-tools/feel-input-component/dist/Monaco", function () {
  var actualMonacoModule = jest.requireActual("@kie-tools/feel-input-component/dist/Monaco");
  return __assign(__assign({}, actualMonacoModule), {
    initializeFeelLanguage: jest.fn(),
    initializeMonacoTheme: jest.fn(),
    initializeFeelTokensProvider: jest.fn(),
    initializeFeelCompletionItemProvider: jest.fn(),
  });
});
//# sourceMappingURL=FeelEditorService.test.js.map
