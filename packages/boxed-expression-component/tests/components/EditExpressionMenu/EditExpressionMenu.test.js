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
var EditExpressionMenu_1 = require("@kie-tools/boxed-expression-component/dist/components/EditExpressionMenu");
var PopoverMenu_test_1 = require("../PopoverMenu/PopoverMenu.test");
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
var _ = require("lodash");
var test_utils_2 = require("react-dom/test-utils");
jest.useFakeTimers();
describe("EditExpressionMenu tests", function () {
  test("should render Edit Expression title", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var title, container;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            title = "Edit Expression";
            container = (0, react_1.render)(
              (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                (0, jsx_runtime_1.jsxs)(
                  "div",
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)("div", __assign({ id: "container" }, { children: "Popover" }), void 0),
                      (0, jsx_runtime_1.jsx)(
                        EditExpressionMenu_1.EditExpressionMenu,
                        {
                          selectedExpressionName: "Expression Name",
                          title: title,
                          arrowPlacement: function () {
                            return document.getElementById("container");
                          },
                          appendTo: function () {
                            return document.getElementById("container");
                          },
                          onExpressionUpdate: function (expression) {
                            console.log(expression);
                          },
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0
                )
              ).wrapper
            ).container;
            return [4, (0, PopoverMenu_test_1.activatePopover)(container)];
          case 1:
            _a.sent();
            expect(container.querySelector(".selector-menu-title")).toBeTruthy();
            expect(container.querySelector(".selector-menu-title").innerHTML).toBe(title);
            return [2];
        }
      });
    });
  });
  test("should render custom name field label", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var nameFieldLabel, container;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            nameFieldLabel = "custom name field label";
            container = (0, react_1.render)(
              (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                (0, jsx_runtime_1.jsxs)(
                  "div",
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)("div", __assign({ id: "container" }, { children: "Popover" }), void 0),
                      (0, jsx_runtime_1.jsx)(
                        EditExpressionMenu_1.EditExpressionMenu,
                        {
                          selectedExpressionName: "Expression Name",
                          nameField: nameFieldLabel,
                          arrowPlacement: function () {
                            return document.getElementById("container");
                          },
                          appendTo: function () {
                            return document.getElementById("container");
                          },
                          onExpressionUpdate: function (expression) {
                            console.log(expression);
                          },
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0
                )
              ).wrapper
            ).container;
            return [4, (0, PopoverMenu_test_1.activatePopover)(container)];
          case 1:
            _a.sent();
            expect(container.querySelector(".expression-name label")).toBeTruthy();
            expect(container.querySelector(".expression-name label").innerHTML).toBe(nameFieldLabel);
            return [2];
        }
      });
    });
  });
  test("should render custom data type field label", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var dataTypeFieldLabel, container;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            dataTypeFieldLabel = "custom data type field label";
            container = (0, react_1.render)(
              (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                (0, jsx_runtime_1.jsxs)(
                  "div",
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)("div", __assign({ id: "container" }, { children: "Popover" }), void 0),
                      (0, jsx_runtime_1.jsx)(
                        EditExpressionMenu_1.EditExpressionMenu,
                        {
                          selectedExpressionName: "Expression Name",
                          dataTypeField: dataTypeFieldLabel,
                          arrowPlacement: function () {
                            return document.getElementById("container");
                          },
                          appendTo: function () {
                            return document.getElementById("container");
                          },
                          onExpressionUpdate: function (expression) {
                            console.log(expression);
                          },
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0
                )
              ).wrapper
            ).container;
            return [4, (0, PopoverMenu_test_1.activatePopover)(container)];
          case 1:
            _a.sent();
            expect(container.querySelector(".expression-data-type label")).toBeTruthy();
            expect(container.querySelector(".expression-data-type label").innerHTML).toBe(dataTypeFieldLabel);
            return [2];
        }
      });
    });
  });
  test("should render manage data type button", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var container;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            container = (0, react_1.render)(
              (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                (0, jsx_runtime_1.jsxs)(
                  "div",
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)("div", __assign({ id: "container" }, { children: "Popover" }), void 0),
                      (0, jsx_runtime_1.jsx)(
                        EditExpressionMenu_1.EditExpressionMenu,
                        {
                          selectedExpressionName: "Expression Name",
                          arrowPlacement: function () {
                            return document.getElementById("container");
                          },
                          appendTo: function () {
                            return document.getElementById("container");
                          },
                          onExpressionUpdate: function (expression) {
                            console.log(expression);
                          },
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0
                )
              ).wrapper
            ).container;
            return [4, (0, PopoverMenu_test_1.activatePopover)(container)];
          case 1:
            _a.sent();
            expect(container.querySelector("button.manage-datatype")).toBeTruthy();
            return [2];
        }
      });
    });
  });
  test("should render undefined as data type, when it is not pre-selected", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var container;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            container = (0, react_1.render)(
              (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                (0, jsx_runtime_1.jsxs)(
                  "div",
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)("div", __assign({ id: "container" }, { children: "Popover" }), void 0),
                      (0, jsx_runtime_1.jsx)(
                        EditExpressionMenu_1.EditExpressionMenu,
                        {
                          selectedExpressionName: "Expression Name",
                          arrowPlacement: function () {
                            return document.getElementById("container");
                          },
                          appendTo: function () {
                            return document.getElementById("container");
                          },
                          onExpressionUpdate: function (expression) {
                            console.log(expression);
                          },
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0
                )
              ).wrapper
            ).container;
            return [4, (0, PopoverMenu_test_1.activatePopover)(container)];
          case 1:
            _a.sent();
            expect(container.querySelector("[id^='pf-select-toggle-id-']")).toBeTruthy();
            expect(container.querySelector("[id^='pf-select-toggle-id-'] span").textContent).toBe(
              boxed_expression_component_1.LogicType.Undefined
            );
            return [2];
        }
      });
    });
  });
  test("should render passed data type, when it is pre-selected", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var selectedDataType, container;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            selectedDataType = boxed_expression_component_1.DataType.Date;
            container = (0, react_1.render)(
              (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                (0, jsx_runtime_1.jsxs)(
                  "div",
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)("div", __assign({ id: "container" }, { children: "Popover" }), void 0),
                      (0, jsx_runtime_1.jsx)(
                        EditExpressionMenu_1.EditExpressionMenu,
                        {
                          selectedExpressionName: "Expression Name",
                          selectedDataType: selectedDataType,
                          arrowPlacement: function () {
                            return document.getElementById("container");
                          },
                          appendTo: function () {
                            return document.getElementById("container");
                          },
                          onExpressionUpdate: function (expression) {
                            console.log(expression);
                          },
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0
                )
              ).wrapper
            ).container;
            return [4, (0, PopoverMenu_test_1.activatePopover)(container)];
          case 1:
            _a.sent();
            expect(container.querySelector("[id^='pf-select-toggle-id-']")).toBeTruthy();
            expect(container.querySelector("[id^='pf-select-toggle-id-'] span").textContent).toBe(selectedDataType);
            return [2];
        }
      });
    });
  });
  test("should render passed expression name, when it is pre-selected", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var expressionName, container;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            expressionName = "a name";
            container = (0, react_1.render)(
              (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                (0, jsx_runtime_1.jsxs)(
                  "div",
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)("div", __assign({ id: "container" }, { children: "Popover" }), void 0),
                      (0, jsx_runtime_1.jsx)(
                        EditExpressionMenu_1.EditExpressionMenu,
                        {
                          selectedExpressionName: expressionName,
                          arrowPlacement: function () {
                            return document.getElementById("container");
                          },
                          appendTo: function () {
                            return document.getElementById("container");
                          },
                          onExpressionUpdate: function (expression) {
                            console.log(expression);
                          },
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0
                )
              ).wrapper
            ).container;
            return [4, (0, PopoverMenu_test_1.activatePopover)(container)];
          case 1:
            _a.sent();
            expect(container.querySelector("#expression-name")).toBeTruthy();
            expect(container.querySelector("#expression-name").value).toBe(expressionName);
            return [2];
        }
      });
    });
  });
  test("should trigger the onExpressionUpdate callback when the expression name is changed", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var onExpressionUpdate, mockedOnExpressionUpdate, container, input;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            onExpressionUpdate = function (expression) {
              _.identity(expression);
            };
            mockedOnExpressionUpdate = jest.fn(onExpressionUpdate);
            container = (0, react_1.render)(
              (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                (0, jsx_runtime_1.jsxs)(
                  "div",
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)("div", __assign({ id: "container" }, { children: "Popover" }), void 0),
                      (0, jsx_runtime_1.jsx)(
                        EditExpressionMenu_1.EditExpressionMenu,
                        {
                          selectedExpressionName: "init",
                          arrowPlacement: function () {
                            return document.getElementById("container");
                          },
                          appendTo: function () {
                            return document.getElementById("container");
                          },
                          onExpressionUpdate: mockedOnExpressionUpdate,
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0
                )
              ).wrapper
            ).container;
            return [4, (0, PopoverMenu_test_1.activatePopover)(container)];
          case 1:
            _a.sent();
            input = container.querySelector("#expression-name");
            react_1.fireEvent.blur(input, { target: { value: "changed" } });
            expect(mockedOnExpressionUpdate).toHaveBeenCalled();
            expect(mockedOnExpressionUpdate).toHaveBeenCalledWith({
              name: "changed",
              dataType: boxed_expression_component_1.DataType.Undefined,
            });
            return [2];
        }
      });
    });
  });
  test("should filter the list of data types when user search for it", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var booleanDataType, container, input;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            booleanDataType = "boolean";
            container = (0, react_1.render)(
              (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
                  (0, jsx_runtime_1.jsxs)(
                    "div",
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)("div", __assign({ id: "container" }, { children: "Popover" }), void 0),
                        (0, jsx_runtime_1.jsx)(
                          EditExpressionMenu_1.EditExpressionMenu,
                          {
                            selectedExpressionName: "init",
                            arrowPlacement: function () {
                              return document.getElementById("container");
                            },
                            appendTo: function () {
                              return document.getElementById("container");
                            },
                            onExpressionUpdate: _.identity,
                          },
                          void 0
                        ),
                      ],
                    },
                    void 0
                  )
                ).wrapper
              ).wrapper
            ).container;
            return [4, (0, PopoverMenu_test_1.activatePopover)(container)];
          case 1:
            _a.sent();
            return [
              4,
              (0, test_utils_2.act)(function () {
                return __awaiter(void 0, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    react_1.fireEvent.click(container.querySelector("[id^='pf-select-toggle-id-'] span"));
                    return [2];
                  });
                });
              }),
            ];
          case 2:
            _a.sent();
            input = container.querySelector("div.pf-c-select__menu-search input.pf-c-form-control");
            react_1.fireEvent.change(input, { target: { value: booleanDataType } });
            expect(container.querySelectorAll(".pf-c-select__menu button")).toHaveLength(1);
            expect(container.querySelectorAll(".pf-c-select__menu button")[0]).toHaveTextContent(booleanDataType);
            return [2];
        }
      });
    });
  });
});
//# sourceMappingURL=EditExpressionMenu.test.js.map
