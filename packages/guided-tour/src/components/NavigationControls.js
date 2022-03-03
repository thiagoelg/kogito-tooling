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
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationControls = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var angle_left_icon_1 = require("@patternfly/react-icons/dist/js/icons/angle-left-icon");
var angle_right_icon_1 = require("@patternfly/react-icons/dist/js/icons/angle-right-icon");
var utils_1 = require("./utils");
var contexts_1 = require("../contexts");
require("./NavigationControls.sass");
var NavigationControls = function () {
  var _a = (0, react_1.useContext)(contexts_1.CurrentTutorialContext),
    currentTutorial = _a.currentTutorial,
    currentStep = _a.currentStep,
    setCurrentStep = _a.setCurrentStep;
  var isButtonsHidden = (0, react_1.useMemo)(
    function () {
      var _a;
      return (
        ((_a = (0, utils_1.getCurrentStep)(currentStep, currentTutorial)) === null || _a === void 0
          ? void 0
          : _a.navigatorEnabled) !== true
      );
    },
    [currentStep, currentTutorial]
  );
  var numberOfSteps = (0, react_1.useMemo)(
    function () {
      return (0, utils_1.getSteps)(currentTutorial).length;
    },
    [currentTutorial]
  );
  var currentStepNumber = (currentStep !== null && currentStep !== void 0 ? currentStep : 0) + 1;
  var prev = (0, react_1.useCallback)(
    function () {
      return setCurrentStep(currentStep - 1);
    },
    [currentStep]
  );
  var next = (0, react_1.useCallback)(
    function () {
      return setCurrentStep(currentStep + 1);
    },
    [currentStep]
  );
  var stepBullets = (0, react_1.useCallback)(
    function () {
      var bullets = __spreadArray([], __read(Array(numberOfSteps).keys()), false).map(function (stepNumber) {
        var baseClassName = "kgt-nav-controls__bullet";
        var isCurrentStep = currentStepNumber === stepNumber + 1;
        var className = ""
          .concat(baseClassName, " ")
          .concat(isCurrentStep ? "".concat(baseClassName, "--current") : "");
        return (0, jsx_runtime_1.jsx)("div", __assign({ className: className }, { children: "  " }), stepNumber);
      });
      return (0, jsx_runtime_1.jsx)(
        "div",
        __assign({ className: "kgt-nav-controls__bullets" }, { children: bullets }),
        void 0
      );
    },
    [currentTutorial, currentStep]
  );
  return (0, jsx_runtime_1.jsxs)(
    "div",
    __assign(
      { className: "kgt-nav-controls" },
      {
        children: [
          (0, jsx_runtime_1.jsx)(
            Button_1.Button,
            __assign(
              {
                hidden: isButtonsHidden,
                "data-kgt-prev": "true",
                onClick: prev,
                isDisabled: currentStep === 0,
                variant: "link",
              },
              { children: (0, jsx_runtime_1.jsx)(angle_left_icon_1.AngleLeftIcon, {}, void 0) }
            ),
            void 0
          ),
          stepBullets(),
          (0, jsx_runtime_1.jsx)(
            Button_1.Button,
            __assign(
              {
                hidden: isButtonsHidden,
                "data-kgt-next": "true",
                onClick: next,
                isDisabled: currentStep === numberOfSteps - 1,
                variant: "link",
              },
              { children: (0, jsx_runtime_1.jsx)(angle_right_icon_1.AngleRightIcon, {}, void 0) }
            ),
            void 0
          ),
        ],
      }
    ),
    void 0
  );
};
exports.NavigationControls = NavigationControls;
//# sourceMappingURL=NavigationControls.js.map
