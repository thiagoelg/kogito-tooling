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
exports.DmnFormResult = exports.extractDifferences = exports.EvaluationStatus = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var check_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/check-circle-icon");
var info_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/info-circle-icon");
var exclamation_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-circle-icon");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var outlined_question_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/outlined-question-circle-icon");
var DescriptionList_1 = require("@patternfly/react-core/dist/js/components/DescriptionList");
var Card_1 = require("@patternfly/react-core/dist/js/components/Card");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var i18n_1 = require("./i18n");
var deep_object_diff_1 = require("deep-object-diff");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
require("./styles.scss");
var ErrorBoundary_1 = require("../common/ErrorBoundary");
var exclamation_triangle_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon");
var KOGITO_JIRA_LINK = "https://issues.jboss.org/projects/KOGITO";
var DmnFormResultStatus;
(function (DmnFormResultStatus) {
  DmnFormResultStatus[(DmnFormResultStatus["EMPTY"] = 0)] = "EMPTY";
  DmnFormResultStatus[(DmnFormResultStatus["ERROR"] = 1)] = "ERROR";
  DmnFormResultStatus[(DmnFormResultStatus["VALID"] = 2)] = "VALID";
})(DmnFormResultStatus || (DmnFormResultStatus = {}));
var DATE_REGEX = /\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2]\d|3[0-1])T(?:[0-1]\d|2[0-3]):[0-5]\d:[0-5]\dZ/;
var EvaluationStatus;
(function (EvaluationStatus) {
  EvaluationStatus["SUCCEEDED"] = "SUCCEEDED";
  EvaluationStatus["SKIPPED"] = "SKIPPED";
  EvaluationStatus["FAILED"] = "FAILED";
})((EvaluationStatus = exports.EvaluationStatus || (exports.EvaluationStatus = {})));
function extractDifferences(current, previous) {
  return current
    .map(function (decisionResult, index) {
      var _a;
      return (0,
      deep_object_diff_1.diff)((_a = previous === null || previous === void 0 ? void 0 : previous[index]) !== null && _a !== void 0 ? _a : {}, decisionResult !== null && decisionResult !== void 0 ? decisionResult : {});
    })
    .map(function (difference) {
      delete difference.messages;
      return difference;
    });
}
exports.extractDifferences = extractDifferences;
function DmnFormResult(props) {
  var _a = __read((0, react_1.useState)(DmnFormResultStatus.EMPTY), 2),
    formResultStatus = _a[0],
    setFormResultStatus = _a[1];
  var _b = __read((0, react_1.useState)(false), 2),
    formResultError = _b[0],
    setFormResultError = _b[1];
  var i18n = (0, react_1.useMemo)(
    function () {
      var _a;
      i18n_1.dmnFormI18n.setLocale((_a = props.locale) !== null && _a !== void 0 ? _a : navigator.language);
      return i18n_1.dmnFormI18n.getCurrent();
    },
    [props.locale]
  );
  var errorBoundaryRef = (0, react_1.useRef)(null);
  (0, react_1.useEffect)(
    function () {
      var _a;
      (_a = props.differences) === null || _a === void 0
        ? void 0
        : _a.forEach(function (difference, index) {
            if (Object.keys(difference).length === 0) {
              return;
            }
            var updatedResult = document.getElementById("".concat(index, "-dmn-result"));
            updatedResult === null || updatedResult === void 0
              ? void 0
              : updatedResult.classList.add("kogito--editor__dmn-form-result__leaf-updated");
          });
    },
    [props.differences]
  );
  var onAnimationEnd = (0, react_1.useCallback)(function (e, index) {
    e.preventDefault();
    e.stopPropagation();
    var updatedResult = document.getElementById("".concat(index, "-dmn-result"));
    updatedResult === null || updatedResult === void 0
      ? void 0
      : updatedResult.classList.remove("kogito--editor__dmn-form-result__leaf-updated");
  }, []);
  var openExecutionTab = (0, react_1.useCallback)(
    function () {
      var _a;
      if (props.notificationsPanel) {
        (_a = props.openExecutionTab) === null || _a === void 0 ? void 0 : _a.call(props);
      }
    },
    [props.notificationsPanel]
  );
  var resultStatus = (0, react_1.useCallback)(
    function (evaluationStatus) {
      switch (evaluationStatus) {
        case EvaluationStatus.SUCCEEDED:
          return (0, jsx_runtime_1.jsx)(
            jsx_runtime_1.Fragment,
            {
              children: (0, jsx_runtime_1.jsxs)(
                "div",
                __assign(
                  { className: "kie-tools__dmn-form-result__evaluation" },
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(check_circle_icon_1.CheckCircleIcon, {}, void 0),
                      props.notificationsPanel
                        ? (0, jsx_runtime_1.jsx)(
                            "a",
                            __assign(
                              {
                                onClick: openExecutionTab,
                                className: "kogito--editor__dmn-form-result__evaluation-link",
                              },
                              { children: i18n.result.evaluation.success }
                            ),
                            void 0
                          )
                        : (0, jsx_runtime_1.jsx)(
                            "p",
                            __assign(
                              { className: "kogito--editor__dmn-form-result__evaluation-link" },
                              { children: i18n.result.evaluation.success }
                            ),
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
        case EvaluationStatus.SKIPPED:
          return (0, jsx_runtime_1.jsx)(
            jsx_runtime_1.Fragment,
            {
              children: (0, jsx_runtime_1.jsxs)(
                "div",
                __assign(
                  { className: "kie-tools__dmn-form-result__evaluation" },
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(info_circle_icon_1.InfoCircleIcon, {}, void 0),
                      props.notificationsPanel
                        ? (0, jsx_runtime_1.jsx)(
                            "a",
                            __assign(
                              {
                                onClick: openExecutionTab,
                                className: "kogito--editor__dmn-form-result__evaluation-link",
                              },
                              { children: i18n.result.evaluation.skipped }
                            ),
                            void 0
                          )
                        : (0, jsx_runtime_1.jsx)(
                            "p",
                            __assign(
                              { className: "kogito--editor__dmn-form-result__evaluation-link" },
                              { children: i18n.result.evaluation.skipped }
                            ),
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
        case EvaluationStatus.FAILED:
          return (0, jsx_runtime_1.jsx)(
            jsx_runtime_1.Fragment,
            {
              children: (0, jsx_runtime_1.jsxs)(
                "div",
                __assign(
                  { className: "kie-tools__dmn-form-result__evaluation" },
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(exclamation_circle_icon_1.ExclamationCircleIcon, {}, void 0),
                      props.notificationsPanel
                        ? (0, jsx_runtime_1.jsx)(
                            "a",
                            __assign(
                              {
                                onClick: openExecutionTab,
                                className: "kogito--editor__dmn-form-result__evaluation-link",
                              },
                              { children: i18n.result.evaluation.failed }
                            ),
                            void 0
                          )
                        : (0, jsx_runtime_1.jsx)(
                            "p",
                            __assign(
                              { className: "kogito--editor__dmn-form-result__evaluation-link" },
                              { children: i18n.result.evaluation.failed }
                            ),
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
      }
    },
    [i18n]
  );
  var result = (0, react_1.useCallback)(
    function (dmnFormResult) {
      switch (typeof dmnFormResult) {
        case "boolean":
          return dmnFormResult
            ? (0, jsx_runtime_1.jsx)("i", { children: "true" }, void 0)
            : (0, jsx_runtime_1.jsx)("i", { children: "false" }, void 0);
        case "number":
          return dmnFormResult;
        case "string":
          if (dmnFormResult.match(DATE_REGEX)) {
            var current = new Date(dmnFormResult);
            return (0, jsx_runtime_1.jsx)(
              jsx_runtime_1.Fragment,
              {
                children: (0, jsx_runtime_1.jsx)(
                  Tooltip_1.Tooltip,
                  __assign(
                    {
                      content: (0, jsx_runtime_1.jsx)(
                        react_components_1.I18nWrapped,
                        __assign({ components: { date: current.toString() } }, { children: i18n.result.dateTooltip }),
                        void 0
                      ),
                    },
                    {
                      children: (0, jsx_runtime_1.jsxs)(
                        "div",
                        __assign(
                          { className: "kogito--editor__dmn-form-result__results-date" },
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                "p",
                                __assign(
                                  { className: "kogito--editor__dmn-form-result__results-date" },
                                  { children: dmnFormResult }
                                ),
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                outlined_question_circle_icon_1.OutlinedQuestionCircleIcon,
                                {},
                                void 0
                              ),
                            ],
                          }
                        ),
                        void 0
                      ),
                    }
                  ),
                  "date-tooltip-".concat(dmnFormResult)
                ),
              },
              void 0
            );
          }
          return dmnFormResult;
        case "object":
          if (dmnFormResult) {
            if (Array.isArray(dmnFormResult)) {
              return (0, jsx_runtime_1.jsx)(
                DescriptionList_1.DescriptionList,
                {
                  children: dmnFormResult.map(function (dmnResult, index) {
                    return (0,
                    jsx_runtime_1.jsxs)(DescriptionList_1.DescriptionListGroup, { children: [(0, jsx_runtime_1.jsx)(DescriptionList_1.DescriptionListTerm, { children: index }, void 0), dmnResult && typeof dmnResult === "object" ? (0, jsx_runtime_1.jsx)(DescriptionList_1.DescriptionListDescription, { children: result(dmnResult) }, void 0) : (0, jsx_runtime_1.jsx)(DescriptionList_1.DescriptionListDescription, { children: dmnResult }, void 0)] }, "array-result-".concat(index));
                  }),
                },
                void 0
              );
            }
            return (0, jsx_runtime_1.jsx)(
              DescriptionList_1.DescriptionList,
              {
                children: Object.entries(dmnFormResult).map(function (_a) {
                  var _b = __read(_a, 2),
                    key = _b[0],
                    value = _b[1];
                  return (0, jsx_runtime_1.jsxs)(
                    DescriptionList_1.DescriptionListGroup,
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)(DescriptionList_1.DescriptionListTerm, { children: key }, void 0),
                        value && typeof value === "object"
                          ? Object.entries(value).map(function (_a) {
                              var _b = __read(_a, 2),
                                key2 = _b[0],
                                value2 = _b[1];
                              return (0,
                              jsx_runtime_1.jsxs)(DescriptionList_1.DescriptionListGroup, { children: [(0, jsx_runtime_1.jsx)(DescriptionList_1.DescriptionListTerm, { children: key2 }, void 0), (0, jsx_runtime_1.jsx)(DescriptionList_1.DescriptionListDescription, { children: value2 }, void 0)] }, "object2-result-".concat(key2, "-").concat(value2));
                            })
                          : (0, jsx_runtime_1.jsx)(
                              DescriptionList_1.DescriptionListDescription,
                              { children: result(value) },
                              void 0
                            ),
                      ],
                    },
                    "object-result-".concat(key, "-").concat(value)
                  );
                }),
              },
              void 0
            );
          }
          return (0, jsx_runtime_1.jsx)("i", { children: "(null)" }, void 0);
        default:
          return (0, jsx_runtime_1.jsx)("i", { children: "(null)" }, void 0);
      }
    },
    [i18n]
  );
  var resultsToRender = (0, react_1.useMemo)(
    function () {
      var _a;
      return (_a = props.results) === null || _a === void 0
        ? void 0
        : _a.map(function (dmnFormResult, index) {
            return (0, jsx_runtime_1.jsx)(
              "div",
              __assign(
                { className: "kogito--editor__dmn-form-result__results" },
                {
                  children: (0, jsx_runtime_1.jsxs)(
                    Card_1.Card,
                    __assign(
                      {
                        id: "".concat(index, "-dmn-result"),
                        isFlat: true,
                        className: "kogito--editor__dmn-form-result__results-card",
                        onAnimationEnd: function (e) {
                          return onAnimationEnd(e, index);
                        },
                      },
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            Card_1.CardTitle,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Title_1.Title,
                                __assign({ headingLevel: "h2" }, { children: dmnFormResult.decisionName }),
                                void 0
                              ),
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)(
                            Card_1.CardBody,
                            __assign({ isFilled: true }, { children: result(dmnFormResult.result) }),
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)(
                            Card_1.CardFooter,
                            { children: resultStatus(dmnFormResult.evaluationStatus) },
                            void 0
                          ),
                        ],
                      }
                    ),
                    void 0
                  ),
                }
              ),
              "".concat(index, "-dmn-result")
            );
          });
    },
    [props.results, resultStatus]
  );
  var formResultErrorMessage = (0, react_1.useMemo)(
    function () {
      return (0, jsx_runtime_1.jsx)(
        "div",
        {
          children: (0, jsx_runtime_1.jsxs)(
            EmptyState_1.EmptyState,
            {
              children: [
                (0, jsx_runtime_1.jsx)(
                  EmptyState_1.EmptyStateIcon,
                  { icon: exclamation_triangle_icon_1.ExclamationTriangleIcon },
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(
                  Text_1.TextContent,
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      Text_1.Text,
                      __assign({ component: "h2" }, { children: i18n.result.error.title }),
                      void 0
                    ),
                  },
                  void 0
                ),
                (0, jsx_runtime_1.jsxs)(
                  EmptyState_1.EmptyStateBody,
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(Text_1.TextContent, { children: i18n.result.error.explanation }, void 0),
                      (0, jsx_runtime_1.jsx)("br", {}, void 0),
                      (0, jsx_runtime_1.jsx)(
                        Text_1.TextContent,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            react_components_1.I18nWrapped,
                            __assign(
                              {
                                components: {
                                  jira: (0, jsx_runtime_1.jsx)(
                                    "a",
                                    __assign(
                                      { href: KOGITO_JIRA_LINK, target: "_blank" },
                                      { children: KOGITO_JIRA_LINK }
                                    ),
                                    void 0
                                  ),
                                },
                              },
                              { children: i18n.result.error.message }
                            ),
                            void 0
                          ),
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0
                ),
              ],
            },
            void 0
          ),
        },
        void 0
      );
    },
    [i18n]
  );
  (0, react_1.useEffect)(
    function () {
      if (resultsToRender && resultsToRender.length > 0) {
        setFormResultStatus(DmnFormResultStatus.VALID);
      } else if (formResultError) {
        setFormResultStatus(DmnFormResultStatus.ERROR);
      } else {
        setFormResultStatus(DmnFormResultStatus.EMPTY);
      }
    },
    [resultsToRender, formResultError]
  );
  (0, react_1.useEffect)(
    function () {
      var _a;
      (_a = errorBoundaryRef.current) === null || _a === void 0 ? void 0 : _a.reset();
    },
    [props.results]
  );
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        formResultStatus === DmnFormResultStatus.EMPTY &&
          (0, jsx_runtime_1.jsxs)(
            EmptyState_1.EmptyState,
            {
              children: [
                (0, jsx_runtime_1.jsx)(
                  EmptyState_1.EmptyStateIcon,
                  { icon: info_circle_icon_1.InfoCircleIcon },
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(
                  Text_1.TextContent,
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      Text_1.Text,
                      __assign({ component: "h2" }, { children: i18n.result.withoutResponse.title }),
                      void 0
                    ),
                  },
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(
                  EmptyState_1.EmptyStateBody,
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      Text_1.TextContent,
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Text_1.Text,
                          { children: i18n.result.withoutResponse.explanation },
                          void 0
                        ),
                      },
                      void 0
                    ),
                  },
                  void 0
                ),
              ],
            },
            void 0
          ),
        formResultStatus === DmnFormResultStatus.ERROR && formResultErrorMessage,
        formResultStatus === DmnFormResultStatus.VALID &&
          (0, jsx_runtime_1.jsx)(
            ErrorBoundary_1.ErrorBoundary,
            __assign(
              { ref: errorBoundaryRef, setHasError: setFormResultError, error: formResultErrorMessage },
              {
                children: (0, jsx_runtime_1.jsx)(
                  "div",
                  __assign({ "data-testid": "dmn-form-result" }, { children: resultsToRender }),
                  void 0
                ),
              }
            ),
            void 0
          ),
      ],
    },
    void 0
  );
}
exports.DmnFormResult = DmnFormResult;
//# sourceMappingURL=DmnFormResult.js.map
