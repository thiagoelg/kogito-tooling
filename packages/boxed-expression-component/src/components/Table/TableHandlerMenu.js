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
exports.TableHandlerMenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./TableHandlerMenu.css");
var react_core_1 = require("@patternfly/react-core");
var _ = require("lodash");
var TableHandlerMenu = function (_a) {
  var handlerConfiguration = _a.handlerConfiguration,
    allowedOperations = _a.allowedOperations,
    onOperation = _a.onOperation;
  return (0, jsx_runtime_1.jsx)(
    react_core_1.Menu,
    __assign(
      {
        ouiaId: "expression-table-handler-menu",
        className: "table-handler-menu",
        onSelect: function (event, itemId) {
          return onOperation(itemId);
        },
      },
      {
        children: handlerConfiguration.map(function (groupOperation) {
          return (0, jsx_runtime_1.jsx)(
            react_core_1.MenuGroup,
            __assign(
              {
                label: groupOperation.group,
                className: _.every(groupOperation.items, function (operation) {
                  return !_.includes(allowedOperations, operation.type);
                })
                  ? "no-allowed-actions-in-group"
                  : "",
              },
              {
                children: (0, jsx_runtime_1.jsx)(
                  react_core_1.MenuList,
                  {
                    children: groupOperation.items.map(function (operation) {
                      return (0,
                      jsx_runtime_1.jsx)(react_core_1.MenuItem, __assign({ "data-ouia-component-id": "expression-table-handler-menu-" + operation.name, itemId: operation.type, isDisabled: !_.includes(allowedOperations, operation.type) }, { children: operation.name }), operation.type);
                    }),
                  },
                  void 0
                ),
              }
            ),
            groupOperation.group
          );
        }),
      }
    ),
    void 0
  );
};
exports.TableHandlerMenu = TableHandlerMenu;
//# sourceMappingURL=TableHandlerMenu.js.map
