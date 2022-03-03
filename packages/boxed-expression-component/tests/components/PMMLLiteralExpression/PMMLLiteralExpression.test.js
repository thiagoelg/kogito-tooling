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
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
var LiteralExpression_1 = require("@kie-tools/boxed-expression-component/dist/components/LiteralExpression");
describe("PMMLLiteralExpression tests", function () {
  test("should show noOptionsLabel when no options are available", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var noOptionsLabel, container;
      return __generator(this, function (_a) {
        noOptionsLabel = "no options label";
        container = (0, react_1.render)(
          (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
            (0, jsx_runtime_1.jsx)(
              LiteralExpression_1.PMMLLiteralExpression,
              {
                logicType: boxed_expression_component_1.LogicType.PMMLLiteralExpression,
                getOptions: function () {
                  return [];
                },
                noOptionsLabel: noOptionsLabel,
              },
              void 0
            )
          ).wrapper
        ).container;
        expect(container.querySelector(".pmml-literal-expression")).toBeTruthy();
        expect(container.querySelector(".pmml-literal-expression button")).toContainHTML(noOptionsLabel);
        return [2];
      });
    });
  });
  test("should show noOptionsLabel when selected option is not present in the options list", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var noOptionsLabel, container;
      return __generator(this, function (_a) {
        noOptionsLabel = "no options label";
        container = (0, react_1.render)(
          (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
            (0, jsx_runtime_1.jsx)(
              LiteralExpression_1.PMMLLiteralExpression,
              {
                logicType: boxed_expression_component_1.LogicType.PMMLLiteralExpression,
                getOptions: function () {
                  return ["a", "b", "c"];
                },
                selected: "selected",
                noOptionsLabel: noOptionsLabel,
              },
              void 0
            )
          ).wrapper
        ).container;
        expect(container.querySelector(".pmml-literal-expression")).toBeTruthy();
        expect(container.querySelector(".pmml-literal-expression button")).toContainHTML(noOptionsLabel);
        return [2];
      });
    });
  });
  test("should show selected option when it is passed and it is present in the options list", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var selectedOption, container;
      return __generator(this, function (_a) {
        selectedOption = "selected";
        container = (0, react_1.render)(
          (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
            (0, jsx_runtime_1.jsx)(
              LiteralExpression_1.PMMLLiteralExpression,
              {
                logicType: boxed_expression_component_1.LogicType.PMMLLiteralExpression,
                getOptions: function () {
                  return ["a", "b", "c", selectedOption];
                },
                selected: selectedOption,
                noOptionsLabel: "no options",
              },
              void 0
            )
          ).wrapper
        ).container;
        expect(container.querySelector(".pmml-literal-expression")).toBeTruthy();
        expect(container.querySelector(".pmml-literal-expression button")).toContainHTML(selectedOption);
        return [2];
      });
    });
  });
  test("should change the selected option when the user manually select it", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var changedOption, selectedOption, _a, baseElement, container;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            changedOption = "changed";
            selectedOption = "selected";
            (_a = (0, react_1.render)(
              (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                (0, jsx_runtime_1.jsx)(
                  LiteralExpression_1.PMMLLiteralExpression,
                  {
                    logicType: boxed_expression_component_1.LogicType.PMMLLiteralExpression,
                    getOptions: function () {
                      return [changedOption, "a", "b", "c", selectedOption];
                    },
                    selected: selectedOption,
                    noOptionsLabel: "no options",
                  },
                  void 0
                )
              ).wrapper
            )),
              (baseElement = _a.baseElement),
              (container = _a.container);
            return [4, (0, test_utils_1.activateSelector)(container, ".pmml-literal-expression button")];
          case 1:
            _b.sent();
            baseElement.querySelector("[data-ouia-component-id='".concat(changedOption, "']")).click();
            expect(container.querySelector(".pmml-literal-expression")).toBeTruthy();
            expect(container.querySelector(".pmml-literal-expression button")).toContainHTML(changedOption);
            return [2];
        }
      });
    });
  });
});
//# sourceMappingURL=PMMLLiteralExpression.test.js.map
