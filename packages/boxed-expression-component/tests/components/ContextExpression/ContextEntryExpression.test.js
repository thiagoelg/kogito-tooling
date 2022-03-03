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
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
var react_1 = require("@testing-library/react");
var test_utils_1 = require("../test-utils");
var ContextExpression_1 = require("@kie-tools/boxed-expression-component/dist/components/ContextExpression");
var _ = require("lodash");
describe("ContextEntryExpression tests", function () {
  var name = "Expression Name";
  var dataType = boxed_expression_component_1.DataType.Boolean;
  var emptyExpression = { name: name, dataType: dataType };
  test("should show a context entry element with logic type not selected, when rendering it with an empty expression", function () {
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, jsx_runtime_1.jsx)(
          ContextExpression_1.ContextEntryExpression,
          { expression: emptyExpression, onUpdatingRecursiveExpression: _.identity },
          void 0
        )
      ).wrapper
    ).container;
    expect(container.querySelector(".entry-expression")).toBeTruthy();
    expect(container.querySelector(".entry-expression .logic-type-selector")).toHaveClass("logic-type-not-present");
  });
  test("should show a context entry element with selected logic type, when rendering it with an expression", function () {
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, jsx_runtime_1.jsx)(
          ContextExpression_1.ContextEntryExpression,
          {
            expression: __assign(__assign({}, emptyExpression), {
              logicType: boxed_expression_component_1.LogicType.LiteralExpression,
            }),
            onUpdatingRecursiveExpression: _.identity,
          },
          void 0
        )
      ).wrapper
    ).container;
    expect(container.querySelector(".entry-expression")).toBeTruthy();
    expect(container.querySelector(".entry-expression .logic-type-selector")).toHaveClass("logic-type-selected");
  });
  test("should show a context entry element with logic type not selected, when rendering it with an empty expression", function () {
    var content = (0, jsx_runtime_1.jsx)("div", __assign({ id: "content" }, { children: "content" }), void 0);
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, jsx_runtime_1.jsx)(
          ContextExpression_1.ContextEntryExpression,
          __assign({ expression: emptyExpression, onUpdatingRecursiveExpression: _.identity }, { children: content }),
          void 0
        )
      ).wrapper
    ).container;
    expect(container.querySelector(".entry-expression")).toBeTruthy();
    expect(container.querySelector(".entry-expression .logic-type-selector")).toHaveClass("logic-type-not-present");
  });
});
//# sourceMappingURL=ContextEntryExpression.test.js.map
