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
exports.PopoverMenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_core_1 = require("@patternfly/react-core");
require("./PopoverMenu.css");
var PopoverMenu = function (_a) {
  var children = _a.children,
    arrowPlacement = _a.arrowPlacement,
    body = _a.body,
    title = _a.title,
    appendTo = _a.appendTo,
    className = _a.className,
    hasAutoWidth = _a.hasAutoWidth,
    minWidth = _a.minWidth;
  return (0, jsx_runtime_1.jsx)(
    react_core_1.Popover,
    __assign(
      {
        "data-ouia-component-id": "expression-popover-menu",
        className: "popover-menu-selector".concat(className ? " " + className : ""),
        hasAutoWidth: hasAutoWidth,
        minWidth: minWidth,
        position: "bottom",
        distance: 0,
        id: "menu-selector",
        reference: arrowPlacement,
        appendTo: appendTo,
        headerContent: (0, jsx_runtime_1.jsx)(
          "div",
          __assign(
            { className: "selector-menu-title", "data-ouia-component-id": "expression-popover-menu-title" },
            { children: title }
          ),
          void 0
        ),
        bodyContent: body,
      },
      { children: children }
    ),
    void 0
  );
};
exports.PopoverMenu = PopoverMenu;
//# sourceMappingURL=PopoverMenu.js.map
