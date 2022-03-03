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
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitPolicySelector = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./HitPolicySelector.css");
var api_1 = require("../../api");
var react_1 = require("react");
var PopoverMenu_1 = require("../PopoverMenu");
var react_core_1 = require("@patternfly/react-core");
var _ = require("lodash");
var i18n_1 = require("../../i18n");
var context_1 = require("../../context");
var BUILT_IN_AGGREGATION_AVAILABILITY = [api_1.HitPolicy.Collect];
var HitPolicySelector = function (_a) {
  var _b, _c, _d, _e, _f, _g;
  var onBuiltInAggregatorSelect = _a.onBuiltInAggregatorSelect,
    onHitPolicySelect = _a.onHitPolicySelect,
    selectedBuiltInAggregator = _a.selectedBuiltInAggregator,
    selectedHitPolicy = _a.selectedHitPolicy;
  var i18n = (0, i18n_1.useBoxedExpressionEditorI18n)().i18n;
  var boxedExpression = (0, context_1.useBoxedExpression)();
  var _h = __read((0, react_1.useState)(false), 2),
    hitPolicySelectOpen = _h[0],
    setHitPolicySelectOpen = _h[1];
  var _j = __read((0, react_1.useState)(false), 2),
    builtInAggregatorSelectOpen = _j[0],
    setBuiltInAggregatorSelectOpen = _j[1];
  var _k = __read((0, react_1.useState)(!_.includes(BUILT_IN_AGGREGATION_AVAILABILITY, selectedHitPolicy)), 2),
    builtInAggregatorSelectDisabled = _k[0],
    setBuiltInAggregatorSelectDisabled = _k[1];
  var onHitPolicySelectToggle = (0, react_1.useCallback)(function (isOpen) {
    return setHitPolicySelectOpen(isOpen);
  }, []);
  var onBuiltInAggregatorSelectToggle = (0, react_1.useCallback)(function (isOpen) {
    return setBuiltInAggregatorSelectOpen(isOpen);
  }, []);
  var hitPolicySelectionCallback = (0, react_1.useCallback)(
    function (event, itemId) {
      var _a;
      var updatedHitPolicy = itemId;
      var hitPolicySupportsAggregation = _.includes(BUILT_IN_AGGREGATION_AVAILABILITY, updatedHitPolicy);
      (_a = boxedExpression.boxedExpressionEditorGWTService) === null || _a === void 0 ? void 0 : _a.notifyUserAction();
      onHitPolicySelect(updatedHitPolicy);
      if (hitPolicySupportsAggregation) {
        setBuiltInAggregatorSelectDisabled(false);
      } else {
        setBuiltInAggregatorSelectDisabled(true);
        onBuiltInAggregatorSelect("<None>");
      }
      setHitPolicySelectOpen(false);
    },
    [boxedExpression.boxedExpressionEditorGWTService, onBuiltInAggregatorSelect, onHitPolicySelect]
  );
  var renderHitPolicyItems = (0, react_1.useCallback)(function () {
    return _.map(Object.values(api_1.HitPolicy), function (key) {
      return (0,
      jsx_runtime_1.jsx)(react_core_1.SelectOption, __assign({ value: key, "data-ouia-component-id": key }, { children: key }), key);
    });
  }, []);
  var builtInAggregatorSelectionCallback = (0, react_1.useCallback)(
    function (event, itemId) {
      var _a;
      (_a = boxedExpression.boxedExpressionEditorGWTService) === null || _a === void 0 ? void 0 : _a.notifyUserAction();
      onBuiltInAggregatorSelect(itemId);
      setBuiltInAggregatorSelectOpen(false);
    },
    [boxedExpression.boxedExpressionEditorGWTService, onBuiltInAggregatorSelect]
  );
  var renderBuiltInAggregationItems = (0, react_1.useCallback)(function () {
    return _.map(Object.keys(api_1.BuiltinAggregation), function (key) {
      return (0,
      jsx_runtime_1.jsx)(react_core_1.SelectOption, __assign({ value: key, "data-ouia-component-id": key }, { children: key }), key);
    });
  }, []);
  var renderAggregator = (0, react_1.useCallback)(function (builtInAggregator, hitPolicy) {
    if (_.includes(BUILT_IN_AGGREGATION_AVAILABILITY, hitPolicy)) {
      return builtInAggregator;
    }
    return "";
  }, []);
  return (0, jsx_runtime_1.jsx)(
    PopoverMenu_1.PopoverMenu,
    __assign(
      {
        title: i18n.editHitPolicy,
        appendTo:
          (_c = (_b = boxedExpression.editorRef) === null || _b === void 0 ? void 0 : _b.current) !== null &&
          _c !== void 0
            ? _c
            : undefined,
        className: "hit-policy-popover",
        hasAutoWidth: true,
        body: (0, jsx_runtime_1.jsxs)(
          "div",
          __assign(
            { className: "hit-policy-container" },
            {
              children: [
                (0, jsx_runtime_1.jsxs)(
                  "div",
                  __assign(
                    { className: "hit-policy-section" },
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)("label", { children: i18n.hitPolicy }, void 0),
                        (0, jsx_runtime_1.jsx)(
                          react_core_1.Select,
                          __assign(
                            {
                              className: "hit-policy-selector",
                              menuAppendTo:
                                (_e =
                                  (_d = boxedExpression.editorRef) === null || _d === void 0 ? void 0 : _d.current) !==
                                  null && _e !== void 0
                                  ? _e
                                  : "inline",
                              ouiaId: "hit-policy-selector",
                              variant: react_core_1.SelectVariant.single,
                              onToggle: onHitPolicySelectToggle,
                              onSelect: hitPolicySelectionCallback,
                              isOpen: hitPolicySelectOpen,
                              selections: selectedHitPolicy,
                            },
                            { children: renderHitPolicyItems() }
                          ),
                          void 0
                        ),
                      ],
                    }
                  ),
                  void 0
                ),
                (0, jsx_runtime_1.jsxs)(
                  "div",
                  __assign(
                    { className: "builtin-aggregator-section" },
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)("label", { children: i18n.builtInAggregator }, void 0),
                        (0, jsx_runtime_1.jsx)(
                          react_core_1.Select,
                          __assign(
                            {
                              className: "builtin-aggregator-selector",
                              menuAppendTo:
                                (_g =
                                  (_f = boxedExpression.editorRef) === null || _f === void 0 ? void 0 : _f.current) !==
                                  null && _g !== void 0
                                  ? _g
                                  : "inline",
                              ouiaId: "builtin-aggregator-selector",
                              isDisabled: builtInAggregatorSelectDisabled,
                              variant: react_core_1.SelectVariant.single,
                              onToggle: onBuiltInAggregatorSelectToggle,
                              onSelect: builtInAggregatorSelectionCallback,
                              isOpen: builtInAggregatorSelectOpen,
                              selections: (0, api_1.getEnumKeyByEnumValue)(
                                api_1.BuiltinAggregation,
                                selectedBuiltInAggregator
                              ),
                            },
                            { children: renderBuiltInAggregationItems() }
                          ),
                          void 0
                        ),
                      ],
                    }
                  ),
                  void 0
                ),
              ],
            }
          ),
          void 0
        ),
      },
      {
        children: (0, jsx_runtime_1.jsx)(
          "div",
          __assign(
            { className: "selected-hit-policy" },
            {
              children: ""
                .concat(_.first(selectedHitPolicy))
                .concat(renderAggregator(selectedBuiltInAggregator, selectedHitPolicy)),
            }
          ),
          void 0
        ),
      }
    ),
    void 0
  );
};
exports.HitPolicySelector = HitPolicySelector;
//# sourceMappingURL=HitPolicySelector.js.map
