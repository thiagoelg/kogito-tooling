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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var test_utils_1 = require("../test-utils");
var EditExpressionMenu_1 = require("@kie-tools/boxed-expression-component/dist/components/EditExpressionMenu");
var _ = require("lodash");
describe("EditTextInline tests", function () {
  test("should render inline text", function () {
    var value = "Value";
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, jsx_runtime_1.jsx)(EditExpressionMenu_1.EditTextInline, { value: value, onTextChange: _.identity }, void 0)
      ).wrapper
    ).container;
    expect(container.querySelector("p")).toBeTruthy();
    expect(container.querySelector("p")).toHaveTextContent(value);
  });
  test("should activate text editing, when double clicking on it", function () {
    var value = "Value";
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, jsx_runtime_1.jsx)(EditExpressionMenu_1.EditTextInline, { value: value, onTextChange: _.identity }, void 0)
      ).wrapper
    ).container;
    react_1.fireEvent.click(container.querySelector("p"));
    expect(container.querySelector("input")).toBeTruthy();
    expect(container.querySelector("input")).toHaveValue(value);
  });
  test("should call text editing callback, when clicking outside", function () {
    var value = "Value";
    var newValue = "New Value";
    var mockedOnTextChange = jest.fn();
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, jsx_runtime_1.jsx)(
          "div",
          __assign(
            { id: "container" },
            {
              children: (0, jsx_runtime_1.jsx)(
                EditExpressionMenu_1.EditTextInline,
                { value: value, onTextChange: mockedOnTextChange },
                void 0
              ),
            }
          ),
          void 0
        )
      ).wrapper
    ).container;
    react_1.fireEvent.click(container.querySelector("p"));
    react_1.fireEvent.blur(changeInputValue(container, newValue));
    expect(mockedOnTextChange).toHaveBeenCalledWith(newValue);
  });
  test("should call text editing callback, when pressing enter", function () {
    var value = "Value";
    var newValue = "New Value";
    var mockedOnTextChange = jest.fn();
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, jsx_runtime_1.jsx)(
          "div",
          __assign(
            { id: "container" },
            {
              children: (0, jsx_runtime_1.jsx)(
                EditExpressionMenu_1.EditTextInline,
                { value: value, onTextChange: mockedOnTextChange },
                void 0
              ),
            }
          ),
          void 0
        )
      ).wrapper
    ).container;
    react_1.fireEvent.click(container.querySelector("p"));
    react_1.fireEvent.keyDown(changeInputValue(container, newValue), { key: "enter", keyCode: 13 });
    expect(mockedOnTextChange).toHaveBeenCalledWith(newValue);
  });
  test("should not call text editing callback, when pressing escape", function () {
    var value = "Value";
    var newValue = "New Value";
    var mockedOnTextChange = jest.fn();
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, jsx_runtime_1.jsx)(
          "div",
          __assign(
            { id: "container" },
            {
              children: (0, jsx_runtime_1.jsx)(
                EditExpressionMenu_1.EditTextInline,
                { value: value, onTextChange: mockedOnTextChange },
                void 0
              ),
            }
          ),
          void 0
        )
      ).wrapper
    ).container;
    react_1.fireEvent.click(container.querySelector("p"));
    react_1.fireEvent.keyDown(changeInputValue(container, newValue), { key: "escape", keyCode: 27 });
    expect(mockedOnTextChange).toHaveBeenCalledTimes(0);
  });
  function changeInputValue(container, newValue) {
    var inputElement = container.querySelector("input");
    react_1.fireEvent.change(inputElement, {
      target: { value: newValue },
    });
    return inputElement;
  }
});
//# sourceMappingURL=EditTextInline.test.js.map
