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
exports.EmptyDialog = exports.NegativeReinforcementDialog = exports.StepDialog = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Modal_1 = require("@patternfly/react-core/dist/js/components/Modal");
var book_icon_1 = require("@patternfly/react-icons/dist/js/icons/book-icon");
var times_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/times-circle-icon");
var __1 = require("..");
var contexts_1 = require("../../contexts");
var i18n_1 = require("../../i18n");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
function renderContent(content, dismiss, nextStep, prevStep) {
  if (typeof content === "function") {
    return content({ dismiss: dismiss, nextStep: nextStep, prevStep: prevStep });
  }
  if (typeof content === "string") {
    return (0, jsx_runtime_1.jsx)("div", { dangerouslySetInnerHTML: { __html: content } }, void 0);
  }
  return content;
}
var StepDialog = function (content, onCloseAction) {
  var _a = (0, react_1.useContext)(contexts_1.CurrentTutorialContext),
    currentStep = _a.currentStep,
    setCurrentStep = _a.setCurrentStep;
  var nextStep = (0, react_1.useCallback)(
    function () {
      return setCurrentStep(currentStep + 1);
    },
    [currentStep]
  );
  var prevStep = (0, react_1.useCallback)(
    function () {
      return setCurrentStep(currentStep - 1);
    },
    [currentStep]
  );
  return function () {
    return (0, jsx_runtime_1.jsxs)(
      jsx_runtime_1.Fragment,
      {
        children: [
          (0, jsx_runtime_1.jsx)(Modal_1.ModalBoxCloseButton, { onClose: onCloseAction }, void 0),
          renderContent(content, onCloseAction, nextStep, prevStep),
          (0, jsx_runtime_1.jsx)(__1.NavigationControls, {}, void 0),
        ],
      },
      void 0
    );
  };
};
exports.StepDialog = StepDialog;
var NegativeReinforcementDialog = function (step, onCloseAction) {
  var _a;
  var _b = (0, react_1.useContext)(contexts_1.CurrentTutorialContext),
    isHighlightLayerEnabled = _b.isHighlightLayerEnabled,
    setIsHighlightLayerEnabled = _b.setIsHighlightLayerEnabled;
  var negativeReinforcementMessage =
    (_a = step === null || step === void 0 ? void 0 : step.negativeReinforcementMessage) !== null && _a !== void 0
      ? _a
      : "";
  var showSuggestion = (0, react_1.useCallback)(function () {
    return setIsHighlightLayerEnabled(false);
  }, []);
  var i18n = (0, i18n_1.useGuidedTourI18n)().i18n;
  if (!isHighlightLayerEnabled) {
    return function () {
      return (0, jsx_runtime_1.jsxs)(
        jsx_runtime_1.Fragment,
        {
          children: [
            (0, jsx_runtime_1.jsx)(Modal_1.ModalBoxCloseButton, { onClose: onCloseAction }, void 0),
            (0, jsx_runtime_1.jsxs)(
              EmptyState_1.EmptyState,
              __assign(
                { variant: EmptyState_1.EmptyStateVariant.small },
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateIcon, { icon: book_icon_1.BookIcon }, void 0),
                    (0, jsx_runtime_1.jsx)(
                      Title_1.Title,
                      __assign({ headingLevel: "h4", size: "lg" }, { children: "".concat(i18n.great, "!") }),
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      EmptyState_1.EmptyStateBody,
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Text_1.Text,
                          __assign({ className: "pf-c-content" }, { children: negativeReinforcementMessage }),
                          void 0
                        ),
                      },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      EmptyState_1.EmptyStateSecondaryActions,
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Button_1.Button,
                          __assign({ onClick: onCloseAction, variant: "link" }, { children: i18n.skipTour }),
                          void 0
                        ),
                      },
                      void 0
                    ),
                  ],
                }
              ),
              void 0
            ),
          ],
        },
        void 0
      );
    };
  } else {
    return function () {
      return (0, jsx_runtime_1.jsxs)(
        jsx_runtime_1.Fragment,
        {
          children: [
            (0, jsx_runtime_1.jsx)(Modal_1.ModalBoxCloseButton, { onClose: onCloseAction }, void 0),
            (0, jsx_runtime_1.jsxs)(
              EmptyState_1.EmptyState,
              __assign(
                { variant: EmptyState_1.EmptyStateVariant.small },
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateIcon, { icon: book_icon_1.BookIcon }, void 0),
                    (0, jsx_runtime_1.jsx)(
                      Title_1.Title,
                      __assign({ headingLevel: "h4", size: "lg" }, { children: i18n.stop }),
                      void 0
                    ),
                    (0, jsx_runtime_1.jsxs)(
                      EmptyState_1.EmptyStateBody,
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            Text_1.Text,
                            __assign({ className: "pf-c-content" }, { children: i18n.notFollowing }),
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsx)(
                            Text_1.Text,
                            __assign(
                              { className: "pf-c-content" },
                              {
                                children: (0, jsx_runtime_1.jsxs)(
                                  react_components_1.I18nHtml,
                                  { children: [i18n.options, " :-)"] },
                                  void 0
                                ),
                              }
                            ),
                            void 0
                          ),
                        ],
                      },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      Button_1.Button,
                      __assign({ "data-kgt-continue": "true", onClick: showSuggestion }, { children: i18n.continue }),
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      EmptyState_1.EmptyStateSecondaryActions,
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Button_1.Button,
                          __assign({ onClick: onCloseAction, variant: "link" }, { children: i18n.skipTour }),
                          void 0
                        ),
                      },
                      void 0
                    ),
                  ],
                }
              ),
              void 0
            ),
          ],
        },
        void 0
      );
    };
  }
};
exports.NegativeReinforcementDialog = NegativeReinforcementDialog;
var EmptyDialog = function (onCloseAction) {
  var i18n = (0, i18n_1.useGuidedTourI18n)().i18n;
  return function () {
    return (0, jsx_runtime_1.jsx)(
      jsx_runtime_1.Fragment,
      {
        children: (0, jsx_runtime_1.jsxs)(
          EmptyState_1.EmptyState,
          __assign(
            { variant: EmptyState_1.EmptyStateVariant.small },
            {
              children: [
                (0, jsx_runtime_1.jsx)(
                  EmptyState_1.EmptyStateIcon,
                  { icon: times_circle_icon_1.TimesCircleIcon },
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(
                  Title_1.Title,
                  __assign({ headingLevel: "h4", size: "lg" }, { children: i18n.oops }),
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateBody, { children: i18n.somethingWrong }, void 0),
                (0, jsx_runtime_1.jsx)(
                  Button_1.Button,
                  __assign({ onClick: onCloseAction }, { children: i18n.skipTour }),
                  void 0
                ),
              ],
            }
          ),
          void 0
        ),
      },
      void 0
    );
  };
};
exports.EmptyDialog = EmptyDialog;
//# sourceMappingURL=GuidedTourContent.js.map
