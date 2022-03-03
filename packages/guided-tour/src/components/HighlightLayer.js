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
exports.HighlightLayer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var utils_1 = require("./utils");
var contexts_1 = require("../contexts");
require("./HighlightLayer.sass");
var HighlightLayer = function () {
  var _a = (0, react_1.useContext)(contexts_1.CurrentTutorialContext),
    currentTutorial = _a.currentTutorial,
    currentStep = _a.currentStep,
    currentRefElementPosition = _a.currentRefElementPosition,
    isHighlightLayerEnabled = _a.isHighlightLayerEnabled,
    isNegativeReinforcementStateEnabled = _a.isNegativeReinforcementStateEnabled;
  var step = (0, react_1.useMemo)(
    function () {
      return (0, utils_1.getCurrentStep)(currentStep, currentTutorial);
    },
    [currentStep, currentTutorial]
  );
  var highlightEnabled = (step === null || step === void 0 ? void 0 : step.highlightEnabled) || isHighlightLayerEnabled;
  var internalRectPath = (0, react_1.useMemo)(
    function () {
      var refElementX = 0;
      var refElementY = 0;
      var refElementWidth = 0;
      var refElementHeight = 0;
      if (!isNegativeReinforcementStateEnabled && currentRefElementPosition) {
        refElementX = currentRefElementPosition.left;
        refElementY = currentRefElementPosition.top;
        refElementWidth = currentRefElementPosition.width;
        refElementHeight = currentRefElementPosition.height;
      }
      var width = window.innerWidth;
      var height = window.innerHeight;
      var PADDING = 5;
      var rectX = refElementX - PADDING;
      var rectY = refElementY - PADDING;
      var rectWidth = refElementWidth + PADDING * 2;
      var reactHeight = refElementHeight + PADDING * 2;
      if (highlightEnabled) {
        return "M0 0 H"
          .concat(width, " V")
          .concat(height, " H0Z \n              M")
          .concat(rectX, " ")
          .concat(rectY, " V")
          .concat(rectY + reactHeight, " H")
          .concat(rectX + rectWidth, " V")
          .concat(rectY, "Z");
      }
      return "";
    },
    [currentStep, currentRefElementPosition, isHighlightLayerEnabled, isNegativeReinforcementStateEnabled]
  );
  return (0, react_1.useMemo)(
    function () {
      return (0, jsx_runtime_1.jsx)(
        "svg",
        __assign(
          { style: { opacity: highlightEnabled ? 1 : 0 }, className: "kgt-svg-layer" },
          {
            children: (0, jsx_runtime_1.jsx)(
              "path",
              { d: internalRectPath, style: { fill: "rgba(0, 0, 0, .5)" } },
              void 0
            ),
          }
        ),
        void 0
      );
    },
    [internalRectPath, highlightEnabled]
  );
};
exports.HighlightLayer = HighlightLayer;
//# sourceMappingURL=HighlightLayer.js.map
