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
exports.ContextEntryInfo = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./ContextEntryInfo.css");
var react_1 = require("react");
var EditExpressionMenu_1 = require("../EditExpressionMenu");
var ContextEntryInfo = function (_a) {
  var id = _a.id,
    name = _a.name,
    dataType = _a.dataType,
    onContextEntryUpdate = _a.onContextEntryUpdate,
    editInfoPopoverLabel = _a.editInfoPopoverLabel;
  var onEntryNameOrDataTypeUpdate = (0, react_1.useCallback)(
    function (_a) {
      var name = _a.name,
        dataType = _a.dataType;
      onContextEntryUpdate(name, dataType);
    },
    [onContextEntryUpdate]
  );
  var renderEntryDefinition = (0, react_1.useCallback)(
    function (additionalCssClass) {
      return (0, jsx_runtime_1.jsxs)(
        "div",
        __assign(
          { className: "entry-definition ".concat(additionalCssClass) },
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                "p",
                __assign({ className: "entry-name pf-u-text-truncate", title: name }, { children: name }),
                void 0
              ),
              (0, jsx_runtime_1.jsxs)(
                "p",
                __assign(
                  { className: "entry-data-type pf-u-text-truncate", title: dataType },
                  { children: ["(", dataType, ")"] }
                ),
                void 0
              ),
            ],
          }
        ),
        void 0
      );
    },
    [dataType, name]
  );
  var renderEntryDefinitionWithPopoverMenu = (0, react_1.useMemo)(
    function () {
      return (0, jsx_runtime_1.jsx)(
        EditExpressionMenu_1.EditExpressionMenu,
        __assign(
          {
            title: editInfoPopoverLabel,
            selectedExpressionName: name,
            selectedDataType: dataType,
            onExpressionUpdate: onEntryNameOrDataTypeUpdate,
          },
          { children: renderEntryDefinition("with-popover-menu") }
        ),
        void 0
      );
    },
    [editInfoPopoverLabel, dataType, name, onEntryNameOrDataTypeUpdate, renderEntryDefinition]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { className: "".concat(id, " entry-info") },
      { children: editInfoPopoverLabel ? renderEntryDefinitionWithPopoverMenu : renderEntryDefinition() }
    ),
    void 0
  );
};
exports.ContextEntryInfo = ContextEntryInfo;
//# sourceMappingURL=ContextEntryInfo.js.map
