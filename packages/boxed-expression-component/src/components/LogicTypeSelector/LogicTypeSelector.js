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
exports.LogicTypeSelector = exports.LOGIC_TYPE_SELECTOR_CLASS = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./LogicTypeSelector.css");
var react_1 = require("react");
var api_1 = require("../../api");
var LiteralExpression_1 = require("../LiteralExpression");
var RelationExpression_1 = require("../RelationExpression");
var ContextExpression_1 = require("../ContextExpression");
var i18n_1 = require("../../i18n");
var PopoverMenu_1 = require("../PopoverMenu");
var react_core_1 = require("@patternfly/react-core");
var _ = require("lodash");
var hooks_1 = require("../../hooks");
var context_1 = require("../../context");
var DecisionTableExpression_1 = require("../DecisionTableExpression");
var ListExpression_1 = require("../ListExpression");
var InvocationExpression_1 = require("../InvocationExpression");
var FunctionExpression_1 = require("../FunctionExpression");
exports.LOGIC_TYPE_SELECTOR_CLASS = "logic-type-selector";
var LogicTypeSelector = function (_a) {
  var _b, _c;
  var selectedExpression = _a.selectedExpression,
    onLogicTypeUpdating = _a.onLogicTypeUpdating,
    onLogicTypeResetting = _a.onLogicTypeResetting,
    onUpdatingNameAndDataType = _a.onUpdatingNameAndDataType,
    getPlacementRef = _a.getPlacementRef,
    isHeadless = _a.isHeadless,
    onUpdatingRecursiveExpression = _a.onUpdatingRecursiveExpression;
  var i18n = (0, i18n_1.useBoxedExpressionEditorI18n)().i18n;
  var boxedExpression = (0, context_1.useBoxedExpression)();
  var expression = (0, react_1.useMemo)(
    function () {
      var _a;
      return __assign(__assign({}, selectedExpression), {
        id: (_a = selectedExpression.id) !== null && _a !== void 0 ? _a : (0, api_1.generateUuid)(),
        isHeadless: isHeadless !== null && isHeadless !== void 0 ? isHeadless : false,
        onUpdatingNameAndDataType: onUpdatingNameAndDataType,
        onUpdatingRecursiveExpression: onUpdatingRecursiveExpression,
      });
    },
    [selectedExpression, isHeadless, onUpdatingNameAndDataType, onUpdatingRecursiveExpression]
  );
  var isLogicTypeSelected = (0, react_1.useMemo)(
    function () {
      return selectedExpression.logicType && selectedExpression.logicType !== api_1.LogicType.Undefined;
    },
    [selectedExpression.logicType]
  );
  var _d = (0, hooks_1.useContextMenuHandler)(
      (_c = (_b = boxedExpression.editorRef) === null || _b === void 0 ? void 0 : _b.current) !== null && _c !== void 0
        ? _c
        : document
    ),
    contextMenuRef = _d.contextMenuRef,
    contextMenuXPos = _d.contextMenuXPos,
    contextMenuYPos = _d.contextMenuYPos,
    contextMenuVisibility = _d.contextMenuVisibility,
    setContextMenuVisibility = _d.setContextMenuVisibility,
    targetElement = _d.targetElement;
  var renderExpression = (0, react_1.useMemo)(
    function () {
      switch (expression.logicType) {
        case api_1.LogicType.LiteralExpression:
          return (0, jsx_runtime_1.jsx)(LiteralExpression_1.LiteralExpression, __assign({}, expression), void 0);
        case api_1.LogicType.PMMLLiteralExpression:
          return (0, jsx_runtime_1.jsx)(LiteralExpression_1.PMMLLiteralExpression, __assign({}, expression), void 0);
        case api_1.LogicType.Relation:
          return (0, jsx_runtime_1.jsx)(RelationExpression_1.RelationExpression, __assign({}, expression), void 0);
        case api_1.LogicType.Context:
          return (0, jsx_runtime_1.jsx)(ContextExpression_1.ContextExpression, __assign({}, expression), void 0);
        case api_1.LogicType.DecisionTable:
          return (0, jsx_runtime_1.jsx)(
            DecisionTableExpression_1.DecisionTableExpression,
            __assign({}, expression),
            void 0
          );
        case api_1.LogicType.Invocation:
          return (0, jsx_runtime_1.jsx)(InvocationExpression_1.InvocationExpression, __assign({}, expression), void 0);
        case api_1.LogicType.List:
          return (0, jsx_runtime_1.jsx)(ListExpression_1.ListExpression, __assign({}, expression), void 0);
        case api_1.LogicType.Function:
          return (0, jsx_runtime_1.jsx)(
            FunctionExpression_1.FunctionExpression,
            __assign({}, _.defaults(expression, { functionKind: api_1.FunctionKind.Feel })),
            void 0
          );
        default:
          return expression.logicType;
      }
    },
    [expression]
  );
  var getSelectableLogicTypes = (0, react_1.useCallback)(function () {
    return Object.values(api_1.LogicType).filter(function (logicType) {
      return !_.includes([api_1.LogicType.Undefined, api_1.LogicType.PMMLLiteralExpression], logicType);
    });
  }, []);
  var renderLogicTypeItems = (0, react_1.useCallback)(
    function () {
      return _.map(getSelectableLogicTypes(), function (key) {
        return (0, jsx_runtime_1.jsx)(react_core_1.MenuItem, __assign({ itemId: key }, { children: key }), key);
      });
    },
    [getSelectableLogicTypes]
  );
  var getArrowPlacement = (0, react_1.useCallback)(
    function () {
      return getPlacementRef();
    },
    [getPlacementRef]
  );
  var getAppendToPlacement = (0, react_1.useCallback)(
    function () {
      var _a, _b;
      return (_b = (_a = boxedExpression.editorRef) === null || _a === void 0 ? void 0 : _a.current) !== null &&
        _b !== void 0
        ? _b
        : getArrowPlacement;
    },
    [getArrowPlacement, boxedExpression.editorRef]
  );
  var onLogicTypeSelect = (0, react_1.useCallback)(
    function (event, itemId) {
      var _a, _b;
      (_a = boxedExpression.boxedExpressionEditorGWTService) === null || _a === void 0 ? void 0 : _a.notifyUserAction();
      var selectedLogicType = itemId;
      onLogicTypeUpdating(selectedLogicType);
      if (!isHeadless) {
        (_b = boxedExpression.boxedExpressionEditorGWTService) === null || _b === void 0
          ? void 0
          : _b.onLogicTypeSelect(selectedLogicType);
      }
    },
    [boxedExpression.boxedExpressionEditorGWTService, isHeadless, onLogicTypeUpdating]
  );
  var buildLogicSelectorMenu = (0, react_1.useMemo)(
    function () {
      return (0, jsx_runtime_1.jsx)(
        PopoverMenu_1.PopoverMenu,
        {
          title: i18n.selectLogicType,
          arrowPlacement: getArrowPlacement,
          appendTo: getAppendToPlacement(),
          className: "logic-type-popover",
          hasAutoWidth: true,
          body: (0, jsx_runtime_1.jsx)(
            react_core_1.Menu,
            __assign(
              { onSelect: onLogicTypeSelect },
              { children: (0, jsx_runtime_1.jsx)(react_core_1.MenuList, { children: renderLogicTypeItems() }, void 0) }
            ),
            void 0
          ),
        },
        void 0
      );
    },
    [i18n.selectLogicType, getArrowPlacement, getAppendToPlacement, onLogicTypeSelect, renderLogicTypeItems]
  );
  var executeClearAction = (0, react_1.useCallback)(
    function () {
      setContextMenuVisibility(false);
      onLogicTypeResetting();
    },
    [onLogicTypeResetting, setContextMenuVisibility]
  );
  var buildContextMenu = (0, react_1.useMemo)(
    function () {
      var _a;
      return (0, jsx_runtime_1.jsx)(
        "div",
        __assign(
          {
            className: "context-menu-container no-table-context-menu",
            style: {
              top: contextMenuYPos,
              left: contextMenuXPos,
            },
          },
          {
            children: (0, jsx_runtime_1.jsx)(
              react_core_1.Menu,
              __assign(
                { className: "table-handler-menu" },
                {
                  children: (0, jsx_runtime_1.jsx)(
                    react_core_1.MenuGroup,
                    __assign(
                      {
                        label: ((_a = expression === null || expression === void 0 ? void 0 : expression.logicType) !==
                          null && _a !== void 0
                          ? _a
                          : api_1.LogicType.Undefined
                        ).toLocaleUpperCase(),
                      },
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          react_core_1.MenuList,
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              react_core_1.MenuItem,
                              __assign(
                                { isDisabled: !isLogicTypeSelected, onClick: executeClearAction },
                                { children: i18n.clear }
                              ),
                              void 0
                            ),
                          },
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                }
              ),
              void 0
            ),
          }
        ),
        void 0
      );
    },
    [contextMenuYPos, contextMenuXPos, expression.logicType, isLogicTypeSelected, executeClearAction, i18n.clear]
  );
  var shouldClearContextMenuBeOpened = (0, react_1.useMemo)(
    function () {
      var _a, _b;
      var notClickedOnTable = _.isNil((_a = targetElement) === null || _a === void 0 ? void 0 : _a.closest("table"));
      var clickedOnTableRemainderContent = !_.isNil(
        (_b = targetElement) === null || _b === void 0 ? void 0 : _b.closest(".row-remainder-content")
      );
      var clickedOnAllowedTableSection = notClickedOnTable || clickedOnTableRemainderContent;
      return !selectedExpression.noClearAction && contextMenuVisibility && clickedOnAllowedTableSection;
    },
    [contextMenuVisibility, selectedExpression.noClearAction, targetElement]
  );
  var cssClasses = (0, react_1.useMemo)(
    function () {
      var classes = [];
      if (!isHeadless) {
        classes.push("".concat(boxedExpression.decisionNodeId));
      }
      classes.push(exports.LOGIC_TYPE_SELECTOR_CLASS);
      if (isLogicTypeSelected) {
        classes.push("logic-type-selected");
      } else {
        classes.push("logic-type-not-present");
      }
      return classes.join(" ");
    },
    [boxedExpression.decisionNodeId, isHeadless, isLogicTypeSelected]
  );
  var onRootSelectorClick = (0, react_1.useCallback)(
    function (event) {
      var _a;
      if (!isHeadless && event.target === contextMenuRef.current) {
        (_a = boxedExpression.boxedExpressionEditorGWTService) === null || _a === void 0
          ? void 0
          : _a.selectObject(boxedExpression.decisionNodeId);
      }
    },
    [boxedExpression.boxedExpressionEditorGWTService, boxedExpression.decisionNodeId, contextMenuRef, isHeadless]
  );
  return (0, jsx_runtime_1.jsxs)(
    "div",
    __assign(
      { className: cssClasses, ref: contextMenuRef, onClick: onRootSelectorClick },
      {
        children: [
          isLogicTypeSelected ? renderExpression : i18n.selectExpression,
          !isLogicTypeSelected && buildLogicSelectorMenu,
          shouldClearContextMenuBeOpened && buildContextMenu,
        ],
      }
    ),
    void 0
  );
};
exports.LogicTypeSelector = LogicTypeSelector;
//# sourceMappingURL=LogicTypeSelector.js.map
