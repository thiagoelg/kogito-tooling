"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var test_utils_1 = require("../test-utils");
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
var boxed_expression_component_2 = require("@kie-tools/boxed-expression-component");
var _ = require("lodash");
var menuItem = function (item) {
  return "[data-ouia-component-id='expression-table-handler-menu-" + item + "'] span";
};
describe("TableHandlerMenu tests", function () {
  test("should render the passed operations", function () {
    var groupName = "a group";
    var operationName = "insert left";
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, jsx_runtime_1.jsx)(
          boxed_expression_component_1.TableHandlerMenu,
          {
            allowedOperations: [boxed_expression_component_2.TableOperation.ColumnInsertLeft],
            handlerConfiguration: [
              {
                group: groupName,
                items: [{ name: operationName, type: boxed_expression_component_2.TableOperation.ColumnInsertLeft }],
              },
            ],
            onOperation: _.identity,
          },
          void 0
        )
      ).wrapper
    ).container;
    expect(container.querySelector("div.table-handler-menu")).toBeTruthy();
    expect(container.querySelector("h1.pf-c-menu__group-title")).toBeTruthy();
    expect(container.querySelector("h1.pf-c-menu__group-title").innerHTML).toContain(groupName);
    expect(container.querySelector(menuItem(operationName))).toBeTruthy();
    expect(container.querySelector(menuItem(operationName)).innerHTML).toContain(operationName);
  });
  test("should execute the clicked operation", function () {
    var onOperation = function (operation) {
      return _.identity(operation);
    };
    var mockedOnOperation = jest.fn(onOperation);
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, jsx_runtime_1.jsx)(
          boxed_expression_component_1.TableHandlerMenu,
          {
            allowedOperations: [boxed_expression_component_2.TableOperation.ColumnInsertLeft],
            handlerConfiguration: [
              {
                group: "a group",
                items: [{ name: "insert left", type: boxed_expression_component_2.TableOperation.ColumnInsertLeft }],
              },
            ],
            onOperation: mockedOnOperation,
          },
          void 0
        )
      ).wrapper
    ).container;
    container.querySelector(menuItem("insert left")).click();
    expect(mockedOnOperation).toHaveBeenCalled();
    expect(mockedOnOperation).toHaveBeenCalledWith(boxed_expression_component_2.TableOperation.ColumnInsertLeft);
  });
});
//# sourceMappingURL=TableHandlerMenu.test.js.map
