"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var test_utils_1 = require("../test-utils");
var LiteralExpression_1 = require("@kie-tools/boxed-expression-component/dist/components/LiteralExpression");
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
var test_utils_2 = require("react-dom/test-utils");
jest.useFakeTimers();
var flushPromises = function () {
  return new Promise(function (resolve) {
    return process.nextTick(resolve);
  });
};
describe("LiteralExpression tests", function () {
  describe("LiteralExpression Header", function () {
    test("should render expression's name, when name property is passed", function () {
      var expressionName = "expression name";
      var container = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              LiteralExpression_1.LiteralExpression,
              {
                logicType: boxed_expression_component_1.LogicType.LiteralExpression,
                name: expressionName,
                dataType: boxed_expression_component_1.DataType.Undefined,
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      expect(container.querySelector(".expression-name")).toBeTruthy();
      expect(container.querySelector(".expression-name").innerHTML).toBe(expressionName);
    });
    test("should render expression's data type, when dataType property is passed", function () {
      var dataType = boxed_expression_component_1.DataType.Boolean;
      var container = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              LiteralExpression_1.LiteralExpression,
              {
                logicType: boxed_expression_component_1.LogicType.LiteralExpression,
                name: "expressionName",
                dataType: dataType,
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      expect(container.querySelector(".expression-data-type")).toBeTruthy();
      expect(container.querySelector(".expression-data-type").innerHTML).toBe("(" + dataType + ")");
    });
    test("should render no header section, when isHeadless property is passed", function () {
      var container = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              LiteralExpression_1.LiteralExpression,
              {
                isHeadless: true,
                logicType: boxed_expression_component_1.LogicType.LiteralExpression,
                name: "expressionName",
                dataType: boxed_expression_component_1.DataType.Undefined,
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      expect(container.querySelector(".literal-expression-header")).toBeFalsy();
    });
    test("should render header section, when isHeadless property is not passed or it is false", function () {
      var container = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              LiteralExpression_1.LiteralExpression,
              {
                logicType: boxed_expression_component_1.LogicType.LiteralExpression,
                name: "expressionName",
                dataType: boxed_expression_component_1.DataType.Undefined,
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      expect(container.querySelector(".literal-expression-header")).toBeTruthy();
    });
    test("should render edit expression menu, when header is clicked", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var container;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              container = (0, react_1.render)(
                (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                  (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
                    (0, jsx_runtime_1.jsx)(
                      LiteralExpression_1.LiteralExpression,
                      {
                        logicType: boxed_expression_component_1.LogicType.LiteralExpression,
                        name: "expressionName",
                        dataType: boxed_expression_component_1.DataType.Boolean,
                      },
                      void 0
                    )
                  ).wrapper
                ).wrapper
              ).container;
              return [
                4,
                (0, test_utils_2.act)(function () {
                  return __awaiter(void 0, void 0, void 0, function () {
                    var literalExpressionHeader;
                    return __generator(this, function (_a) {
                      switch (_a.label) {
                        case 0:
                          literalExpressionHeader = container.querySelector(
                            ".literal-expression-header .expression-info"
                          );
                          literalExpressionHeader.click();
                          return [4, flushPromises()];
                        case 1:
                          _a.sent();
                          jest.runAllTimers();
                          return [2];
                      }
                    });
                  });
                }),
              ];
            case 1:
              _a.sent();
              expect(document.querySelector(".selector-menu-title")).toBeTruthy();
              return [2];
          }
        });
      });
    });
  });
  describe("LiteralExpression Body", function () {
    test("should render expression's content, when content property is passed", function () {
      var content = "content";
      var container = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              LiteralExpression_1.LiteralExpression,
              {
                logicType: boxed_expression_component_1.LogicType.LiteralExpression,
                name: "expressionName",
                dataType: boxed_expression_component_1.DataType.Boolean,
                content: content,
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      expect(container.querySelector(".literal-expression-body textarea")).toBeTruthy();
      expect(container.querySelector(".literal-expression-body textarea").innerHTML).toBe(content);
    });
    test("should render nothing, when content property is not passed", function () {
      var container = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              LiteralExpression_1.LiteralExpression,
              {
                logicType: boxed_expression_component_1.LogicType.LiteralExpression,
                name: "expressionName",
                dataType: boxed_expression_component_1.DataType.Boolean,
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      expect(container.querySelector(".literal-expression-body textarea")).toBeTruthy();
      expect(container.querySelector(".literal-expression-body textarea").innerHTML).toBe("");
    });
  });
});
//# sourceMappingURL=LiteralExpression.test.js.map
