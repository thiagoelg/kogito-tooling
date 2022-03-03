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
require("../../__mocks__/ReactWithSupervisor");
var react_1 = require("@testing-library/react");
var test_utils_1 = require("../test-utils");
var FunctionExpression_1 = require("@kie-tools/boxed-expression-component/dist/components/FunctionExpression");
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
var test_utils_2 = require("react-dom/test-utils");
describe("FunctionExpression tests", function () {
  var parameterId = "p1";
  test("should show a table with two levels visible header, with one row and one column", function () {
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            FunctionExpression_1.FunctionExpression,
            {
              logicType: boxed_expression_component_1.LogicType.Function,
              functionKind: boxed_expression_component_1.FunctionKind.Feel,
              formalParameters: [],
            },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".function-expression")).toBeTruthy();
    expect(container.querySelector(".function-expression table")).toBeTruthy();
    expect(container.querySelector(".function-expression table thead")).toBeTruthy();
    expect(container.querySelectorAll(".function-expression table thead tr")).toHaveLength(2);
    expect(container.querySelectorAll(".function-expression table tbody tr")).toHaveLength(1);
    expect(container.querySelectorAll(".function-expression table tbody td.data-cell")).toHaveLength(1);
  });
  test("should show a section in the header, with the list of parameters", function () {
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            FunctionExpression_1.FunctionExpression,
            {
              logicType: boxed_expression_component_1.LogicType.Function,
              functionKind: boxed_expression_component_1.FunctionKind.Feel,
              formalParameters: [
                {
                  id: "p1",
                  name: FunctionExpression_1.DEFAULT_FIRST_PARAM_NAME,
                  dataType: boxed_expression_component_1.DataType.Undefined,
                },
              ],
            },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".function-expression table thead .parameters-list")).toBeTruthy();
    expect(container.querySelector(".function-expression table thead .parameters-list p")).toContainHTML(
      "".concat(FunctionExpression_1.DEFAULT_FIRST_PARAM_NAME)
    );
  });
  test("should reset function kind to FEEL, when resetting table row", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var _a, mockedBroadcastDefinition, boxedExpressionEditorGWTService, _b, container, baseElement;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            (_a = mockBoxedExpressionEditorGWTService()),
              (mockedBroadcastDefinition = _a.mockedBroadcastDefinition),
              (boxedExpressionEditorGWTService = _a.boxedExpressionEditorGWTService);
            (_b = (0, react_1.render)(
              (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
                  (0, jsx_runtime_1.jsx)(
                    FunctionExpression_1.FunctionExpression,
                    {
                      logicType: boxed_expression_component_1.LogicType.Function,
                      functionKind: boxed_expression_component_1.FunctionKind.Java,
                      formalParameters: [],
                    },
                    void 0
                  ),
                  { boxedExpressionEditorGWTService: boxedExpressionEditorGWTService }
                ).wrapper
              ).wrapper
            )),
              (container = _b.container),
              (baseElement = _b.baseElement);
            return [4, clearTableRow(container, baseElement)];
          case 1:
            _c.sent();
            expect(mockedBroadcastDefinition).toHaveBeenLastCalledWith({
              dataType: boxed_expression_component_1.DataType.Undefined,
              expression: {
                logicType: boxed_expression_component_1.LogicType.LiteralExpression,
              },
              formalParameters: [],
              functionKind: "FEEL",
              logicType: "Function",
              name: "p-1",
              parametersWidth: 370,
              id: undefined,
            });
            return [2];
        }
      });
    });
  });
  describe("Formal Parameters", function () {
    beforeEach(function () {
      jest.clearAllTimers();
    });
    test("should render no parameter, if passed property is empty array", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, container, baseElement;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              (_a = (0, react_1.render)(
                (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                  (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
                    (0, jsx_runtime_1.jsx)(
                      FunctionExpression_1.FunctionExpression,
                      {
                        logicType: boxed_expression_component_1.LogicType.Function,
                        functionKind: boxed_expression_component_1.FunctionKind.Feel,
                        formalParameters: [],
                      },
                      void 0
                    )
                  ).wrapper
                ).wrapper
              )),
                (container = _a.container),
                (baseElement = _a.baseElement);
              return [4, (0, test_utils_1.activateSelector)(container, ".parameters-list")];
            case 1:
              _b.sent();
              expect(baseElement.querySelector(".parameters-editor")).toBeTruthy();
              expect(baseElement.querySelector(".parameters-editor .parameters-container")).toBeTruthy();
              expect(
                baseElement.querySelectorAll(".parameters-editor .parameters-container .parameter-entry")
              ).toHaveLength(0);
              return [2];
          }
        });
      });
    });
    test("should render all parameters, belonging to the passed property", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var paramName, paramDataType, _a, container, baseElement;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              paramName = "param";
              paramDataType = boxed_expression_component_1.DataType.Any;
              (_a = (0, react_1.render)(
                (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                  (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
                    (0, jsx_runtime_1.jsx)(
                      FunctionExpression_1.FunctionExpression,
                      {
                        logicType: boxed_expression_component_1.LogicType.Function,
                        functionKind: boxed_expression_component_1.FunctionKind.Feel,
                        formalParameters: [{ id: parameterId, name: paramName, dataType: paramDataType }],
                      },
                      void 0
                    )
                  ).wrapper
                ).wrapper
              )),
                (container = _a.container),
                (baseElement = _a.baseElement);
              return [4, (0, test_utils_1.activateSelector)(container, ".parameters-list")];
            case 1:
              _b.sent();
              expect(
                baseElement.querySelectorAll(".parameters-editor .parameters-container .parameter-entry")
              ).toHaveLength(1);
              expect(baseElement.querySelector(".parameter-name").value).toBe(paramName);
              expect(baseElement.querySelector(test_utils_1.EDIT_EXPRESSION_DATA_TYPE).textContent).toBe(paramDataType);
              return [2];
          }
        });
      });
    });
    test("should update the parameter name, when it gets changed by the user", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var newParamName, _a, mockedBroadcastDefinition, boxedExpressionEditorGWTService, _b, container, baseElement;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              newParamName = "new param";
              (_a = mockBoxedExpressionEditorGWTService()),
                (mockedBroadcastDefinition = _a.mockedBroadcastDefinition),
                (boxedExpressionEditorGWTService = _a.boxedExpressionEditorGWTService);
              (_b = (0, react_1.render)(
                (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                  (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
                    (0, jsx_runtime_1.jsx)(
                      FunctionExpression_1.FunctionExpression,
                      {
                        logicType: boxed_expression_component_1.LogicType.Function,
                        functionKind: boxed_expression_component_1.FunctionKind.Feel,
                        formalParameters: [
                          { id: parameterId, name: "param", dataType: boxed_expression_component_1.DataType.Any },
                        ],
                      },
                      void 0
                    ),
                    { boxedExpressionEditorGWTService: boxedExpressionEditorGWTService }
                  ).wrapper
                ).wrapper
              )),
                (container = _b.container),
                (baseElement = _b.baseElement);
              return [4, (0, test_utils_1.activateSelector)(container, ".parameters-list")];
            case 1:
              _c.sent();
              return [
                4,
                (0, test_utils_2.act)(function () {
                  return __awaiter(void 0, void 0, void 0, function () {
                    var input;
                    return __generator(this, function (_a) {
                      input = baseElement.querySelector(".parameter-name");
                      react_1.fireEvent.blur(input, { target: { value: newParamName } });
                      return [2];
                    });
                  });
                }),
              ];
            case 2:
              _c.sent();
              checkFormalParameters(mockedBroadcastDefinition, [
                {
                  id: parameterId,
                  dataType: boxed_expression_component_1.DataType.Any,
                  name: "".concat(newParamName),
                },
              ]);
              return [2];
          }
        });
      });
    });
    test("should update the parameter data type, when it gets changed by the user", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, mockedBroadcastDefinition, boxedExpressionEditorGWTService, _b, container, baseElement;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              (_a = mockBoxedExpressionEditorGWTService()),
                (mockedBroadcastDefinition = _a.mockedBroadcastDefinition),
                (boxedExpressionEditorGWTService = _a.boxedExpressionEditorGWTService);
              (_b = (0, react_1.render)(
                (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                  (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
                    (0, jsx_runtime_1.jsx)(
                      FunctionExpression_1.FunctionExpression,
                      {
                        logicType: boxed_expression_component_1.LogicType.Function,
                        functionKind: boxed_expression_component_1.FunctionKind.Feel,
                        formalParameters: [
                          { id: parameterId, name: "param", dataType: boxed_expression_component_1.DataType.Undefined },
                        ],
                      },
                      void 0
                    ),
                    { boxedExpressionEditorGWTService: boxedExpressionEditorGWTService }
                  ).wrapper
                ).wrapper
              )),
                (container = _b.container),
                (baseElement = _b.baseElement);
              return [4, (0, test_utils_1.activateSelector)(container, ".parameters-list")];
            case 1:
              _c.sent();
              return [
                4,
                (0, test_utils_2.act)(function () {
                  return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                      switch (_a.label) {
                        case 0:
                          baseElement
                            .querySelector("[data-ouia-component-id='edit-expression-data-type'] button")
                            .click();
                          return [4, (0, test_utils_1.flushPromises)()];
                        case 1:
                          _a.sent();
                          jest.runAllTimers();
                          baseElement
                            .querySelector(
                              "[data-ouia-component-id='".concat(boxed_expression_component_1.DataType.Boolean, "']")
                            )
                            .click();
                          return [2];
                      }
                    });
                  });
                }),
              ];
            case 2:
              _c.sent();
              checkFormalParameters(mockedBroadcastDefinition, [
                {
                  id: parameterId,
                  dataType: boxed_expression_component_1.DataType.Boolean,
                  name: "param",
                },
              ]);
              return [2];
          }
        });
      });
    });
    test("should add a new parameter, when the user adds it", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, mockedBroadcastDefinition, boxedExpressionEditorGWTService, _b, container, baseElement;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              (_a = mockBoxedExpressionEditorGWTService()),
                (mockedBroadcastDefinition = _a.mockedBroadcastDefinition),
                (boxedExpressionEditorGWTService = _a.boxedExpressionEditorGWTService);
              (_b = (0, react_1.render)(
                (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                  (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
                    (0, jsx_runtime_1.jsx)(
                      FunctionExpression_1.FunctionExpression,
                      {
                        logicType: boxed_expression_component_1.LogicType.Function,
                        functionKind: boxed_expression_component_1.FunctionKind.Feel,
                        formalParameters: [],
                      },
                      void 0
                    ),
                    { boxedExpressionEditorGWTService: boxedExpressionEditorGWTService }
                  ).wrapper
                ).wrapper
              )),
                (container = _b.container),
                (baseElement = _b.baseElement);
              return [4, (0, test_utils_1.activateSelector)(container, ".parameters-list")];
            case 1:
              _c.sent();
              return [
                4,
                (0, test_utils_2.act)(function () {
                  return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                      baseElement.querySelector("button.add-parameter").click();
                      return [2];
                    });
                  });
                }),
              ];
            case 2:
              _c.sent();
              checkFormalParameters(mockedBroadcastDefinition, [
                expect.objectContaining({
                  dataType: boxed_expression_component_1.DataType.Undefined,
                  name: FunctionExpression_1.DEFAULT_FIRST_PARAM_NAME,
                }),
              ]);
              return [2];
          }
        });
      });
    });
    test("should have no parameter, when the user delete the only existing one", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, mockedBroadcastDefinition, boxedExpressionEditorGWTService, _b, container, baseElement;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              (_a = mockBoxedExpressionEditorGWTService()),
                (mockedBroadcastDefinition = _a.mockedBroadcastDefinition),
                (boxedExpressionEditorGWTService = _a.boxedExpressionEditorGWTService);
              (_b = (0, react_1.render)(
                (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                  (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
                    (0, jsx_runtime_1.jsx)(
                      FunctionExpression_1.FunctionExpression,
                      {
                        logicType: boxed_expression_component_1.LogicType.Function,
                        functionKind: boxed_expression_component_1.FunctionKind.Feel,
                        formalParameters: [
                          {
                            id: parameterId,
                            dataType: boxed_expression_component_1.DataType.Undefined,
                            name: FunctionExpression_1.DEFAULT_FIRST_PARAM_NAME,
                          },
                        ],
                      },
                      void 0
                    ),
                    { boxedExpressionEditorGWTService: boxedExpressionEditorGWTService }
                  ).wrapper
                ).wrapper
              )),
                (container = _b.container),
                (baseElement = _b.baseElement);
              return [4, (0, test_utils_1.activateSelector)(container, ".parameters-list")];
            case 1:
              _c.sent();
              return [
                4,
                (0, test_utils_2.act)(function () {
                  return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                      baseElement.querySelector("button.delete-parameter").click();
                      return [2];
                    });
                  });
                }),
              ];
            case 2:
              _c.sent();
              checkFormalParameters(mockedBroadcastDefinition, []);
              return [2];
          }
        });
      });
    });
    function checkFormalParameters(mockedBroadcastDefinition, formalParameters) {
      expect(mockedBroadcastDefinition).toHaveBeenCalledWith({
        dataType: boxed_expression_component_1.DataType.Undefined,
        expression: {
          logicType: "Literal expression",
        },
        formalParameters: formalParameters,
        functionKind: "FEEL",
        logicType: "Function",
        name: "p-1",
        parametersWidth: 370,
        id: undefined,
      });
    }
  });
  describe("FEEL Function Kind", function () {
    test("should show, by default, an entry with an empty literal expression", function () {
      var container = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              FunctionExpression_1.FunctionExpression,
              {
                logicType: boxed_expression_component_1.LogicType.Function,
                functionKind: boxed_expression_component_1.FunctionKind.Feel,
                formalParameters: [],
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      expect(container.querySelector(".function-expression table tbody td.data-cell")).toBeVisible();
      expect(container.querySelector(".function-expression table tbody td.data-cell .literal-expression")).toBeTruthy();
      expect(
        container.querySelector(".function-expression table tbody td.data-cell .literal-expression textarea").value
      ).toBe("");
    });
    test("should show an entry corresponding to the passed expression", function () {
      var container = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              FunctionExpression_1.FunctionExpression,
              {
                logicType: boxed_expression_component_1.LogicType.Function,
                functionKind: boxed_expression_component_1.FunctionKind.Feel,
                formalParameters: [],
                expression: {
                  id: "id2",
                  logicType: boxed_expression_component_1.LogicType.Relation,
                },
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      expect(container.querySelector(".function-expression table tbody td.data-cell")).toBeVisible();
      expect(
        container.querySelector(".function-expression table tbody td.data-cell .relation-expression")
      ).toBeTruthy();
      expect(
        container.querySelector(".function-expression table tbody td.data-cell .relation-expression table")
      ).toBeTruthy();
    });
  });
  describe("JAVA Function Kind", function () {
    test("should show, by default, an entry with a context table, containing two entries: class and method", function () {
      var container = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              FunctionExpression_1.FunctionExpression,
              {
                logicType: boxed_expression_component_1.LogicType.Function,
                functionKind: boxed_expression_component_1.FunctionKind.Java,
                formalParameters: [],
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      checkContextEntries(container, "class", "method");
    });
    test("should show an entry corresponding to the passed class and method values", function () {
      var classValue = "class value";
      var methodValue = "method value";
      var container = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              FunctionExpression_1.FunctionExpression,
              {
                logicType: boxed_expression_component_1.LogicType.Function,
                functionKind: boxed_expression_component_1.FunctionKind.Java,
                formalParameters: [],
                className: classValue,
                methodName: methodValue,
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      checkContextEntries(container, classValue, methodValue, true);
    });
  });
  describe("PMML Function Kind", function () {
    test("should show, by default, an entry with a context table, containing two entries: document and model", function () {
      var container = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              FunctionExpression_1.FunctionExpression,
              {
                logicType: boxed_expression_component_1.LogicType.Function,
                functionKind: boxed_expression_component_1.FunctionKind.Pmml,
                formalParameters: [],
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      checkContextEntries(container, "document", "model");
    });
    test("should show an entry corresponding to the passed document and model values", function () {
      var document = "document";
      var model = "model";
      var container = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              FunctionExpression_1.FunctionExpression,
              {
                logicType: boxed_expression_component_1.LogicType.Function,
                functionKind: boxed_expression_component_1.FunctionKind.Pmml,
                formalParameters: [],
                document: document,
                model: model,
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      checkContextEntries(container, document, model, true);
    });
  });
  function mockBoxedExpressionEditorGWTService() {
    var mockedBroadcastDefinition = jest.fn();
    var boxedExpressionEditorGWTService = {
      broadcastFunctionExpressionDefinition: mockedBroadcastDefinition,
      notifyUserAction: function () {},
      selectObject: function () {},
    };
    return {
      mockedBroadcastDefinition: mockedBroadcastDefinition,
      boxedExpressionEditorGWTService: boxedExpressionEditorGWTService,
    };
  }
  function clearTableRow(container, baseElement) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              (0, test_utils_2.act)(function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        react_1.fireEvent.contextMenu(
                          container.querySelector(".function-expression table tbody td.counter-cell")
                        );
                        return [4, (0, test_utils_1.flushPromises)()];
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
            return [
              4,
              (0, test_utils_2.act)(function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        react_1.fireEvent.click(
                          baseElement.querySelector(
                            "[data-ouia-component-id='expression-table-handler-menu-Clear'] button"
                          )
                        );
                        return [4, (0, test_utils_1.flushPromises)()];
                      case 1:
                        _a.sent();
                        jest.runAllTimers();
                        return [2];
                    }
                  });
                });
              }),
            ];
          case 2:
            _a.sent();
            return [2];
        }
      });
    });
  }
  function checkContextEntries(container, firstEntry, secondEntry, checkExpression) {
    if (checkExpression === void 0) {
      checkExpression = false;
    }
    var specificClassToCheck = checkExpression ? ".context-entry-expression-cell" : ".context-entry-info-cell";
    var entriesSelector = ".function-expression table tbody td.data-cell .context-expression ".concat(
      specificClassToCheck
    );
    expect(container.querySelector(".function-expression table tbody td.data-cell")).toBeVisible();
    expect(container.querySelector(".function-expression table tbody td.data-cell .context-expression")).toBeTruthy();
    expect(container.querySelectorAll(entriesSelector)).toHaveLength(2);
    expect(container.querySelectorAll(entriesSelector)[0]).toContainHTML(firstEntry);
    expect(container.querySelectorAll(entriesSelector)[1]).toContainHTML(secondEntry);
  }
});
jest.useFakeTimers();
//# sourceMappingURL=FunctionExpression.test.js.map
