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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.DmnRunnerDrawerPanelContent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var Drawer_1 = require("@patternfly/react-core/dist/js/components/Drawer");
var DmnRunnerContext_1 = require("./DmnRunnerContext");
var DmnRunnerStatus_1 = require("./DmnRunnerStatus");
var table_icon_1 = require("@patternfly/react-icons/dist/js/icons/table-icon");
var i18n_1 = require("../../i18n");
var dmn_1 = require("@kie-tools/form/dist/dmn");
var Hooks_1 = require("../../reactExt/Hooks");
var ErrorBoundary_1 = require("../../reactExt/ErrorBoundary");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var exclamation_triangle_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon");
var EditorPageDockDrawer_1 = require("../EditorPageDockDrawer");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var plus_icon_1 = require("@patternfly/react-icons/dist/js/icons/plus-icon");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var caret_down_icon_1 = require("@patternfly/react-icons/dist/js/icons/caret-down-icon");
var Toolbar_1 = require("@patternfly/react-core/dist/js/components/Toolbar");
var KOGITO_JIRA_LINK = "https://issues.jboss.org/projects/KOGITO";
var ButtonPosition;
(function (ButtonPosition) {
  ButtonPosition[(ButtonPosition["INPUT"] = 0)] = "INPUT";
  ButtonPosition[(ButtonPosition["OUTPUT"] = 1)] = "OUTPUT";
})(ButtonPosition || (ButtonPosition = {}));
var DMN_RUNNER_MIN_WIDTH_TO_ROW_DIRECTION = 711;
var AUTO_SAVE_DELAY = 500;
function DmnRunnerDrawerPanelContent(props) {
  var _this = this;
  var _a = (0, i18n_1.useOnlineI18n)(),
    i18n = _a.i18n,
    locale = _a.locale;
  var formRef = (0, react_1.useRef)(null);
  var dmnRunnerState = (0, DmnRunnerContext_1.useDmnRunnerState)();
  var dmnRunnerDispatch = (0, DmnRunnerContext_1.useDmnRunnerDispatch)();
  var _b = __read((0, react_1.useState)(false), 2),
    drawerError = _b[0],
    setDrawerError = _b[1];
  var errorBoundaryRef = (0, react_1.useRef)(null);
  var _c = __read((0, react_1.useState)(), 2),
    dmnRunnerResults = _c[0],
    setDmnRunnerResults = _c[1];
  var _d = __read((0, react_1.useState)(), 2),
    dmnRunnerResponseDiffs = _d[0],
    setDmnRunnerResponseDiffs = _d[1];
  var _e = __read(
      (0, react_1.useState)({
        contentWidth: "50%",
        contentHeight: "100%",
        contentFlexDirection: "row",
        buttonPosition: ButtonPosition.OUTPUT,
      }),
      2
    ),
    dmnRunnerStylesConfig = _e[0],
    setDmnRunnerStylesConfig = _e[1];
  var onResize = (0, react_1.useCallback)(function (width) {
    if (width === 0) {
      return;
    }
    if (width > DMN_RUNNER_MIN_WIDTH_TO_ROW_DIRECTION) {
      setDmnRunnerStylesConfig({
        buttonPosition: ButtonPosition.OUTPUT,
        contentWidth: "50%",
        contentHeight: "100%",
        contentFlexDirection: "row",
      });
    } else {
      setDmnRunnerStylesConfig({
        buttonPosition: ButtonPosition.INPUT,
        contentWidth: "100%",
        contentHeight: "50%",
        contentFlexDirection: "column",
      });
    }
  }, []);
  var setExecutionNotifications = (0, react_1.useCallback)(
    function (result) {
      var _a, _b, _c, _d;
      var decisionNameByDecisionId =
        (_a = result.decisionResults) === null || _a === void 0
          ? void 0
          : _a.reduce(function (acc, decisionResult) {
              return acc.set(decisionResult.decisionId, decisionResult.decisionName);
            }, new Map());
      var messagesBySourceId =
        (_b = result.messages) === null || _b === void 0
          ? void 0
          : _b.reduce(function (acc, message) {
              var messageEntry = acc.get(message.sourceId);
              if (!messageEntry) {
                acc.set(message.sourceId, [message]);
              } else {
                acc.set(
                  message.sourceId,
                  __spreadArray(__spreadArray([], __read(messageEntry), false), [message], false)
                );
              }
              return acc;
            }, new Map());
      var notifications = __spreadArray(
        [],
        __read(
          (_c =
            messagesBySourceId === null || messagesBySourceId === void 0 ? void 0 : messagesBySourceId.entries()) !==
            null && _c !== void 0
            ? _c
            : []
        ),
        false
      ).flatMap(function (_a) {
        var _b;
        var _c = __read(_a, 2),
          sourceId = _c[0],
          messages = _c[1];
        var path =
          (_b =
            decisionNameByDecisionId === null || decisionNameByDecisionId === void 0
              ? void 0
              : decisionNameByDecisionId.get(sourceId)) !== null && _b !== void 0
            ? _b
            : "";
        return messages.map(function (message) {
          return {
            type: "PROBLEM",
            path: path,
            severity: message.severity,
            message: "".concat(message.messageType, ": ").concat(message.message),
          };
        });
      });
      (_d = props.editorPageDock) === null || _d === void 0
        ? void 0
        : _d.setNotifications(i18n.terms.execution, "", notifications);
    },
    [props.editorPageDock, i18n.terms.execution]
  );
  var updateDmnRunnerResults = (0, react_1.useCallback)(
    function (formData) {
      return __awaiter(_this, void 0, void 0, function () {
        var payload, result_1, e_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (dmnRunnerState.status !== DmnRunnerStatus_1.DmnRunnerStatus.AVAILABLE) {
                return [2];
              }
              _a.label = 1;
            case 1:
              _a.trys.push([1, 4, , 5]);
              return [4, dmnRunnerDispatch.preparePayload(formData)];
            case 2:
              payload = _a.sent();
              return [4, dmnRunnerState.service.result(payload)];
            case 3:
              result_1 = _a.sent();
              if (Object.hasOwnProperty.call(result_1, "details") && Object.hasOwnProperty.call(result_1, "stack")) {
                dmnRunnerDispatch.setError(true);
                return [2];
              }
              setExecutionNotifications(result_1);
              setDmnRunnerResults(function (previousDmnRunnerResult) {
                if (!result_1 || !result_1.decisionResults) {
                  return;
                }
                var differences = (0, dmn_1.extractDifferences)(result_1.decisionResults, previousDmnRunnerResult);
                if ((differences === null || differences === void 0 ? void 0 : differences.length) !== 0) {
                  setDmnRunnerResponseDiffs(differences);
                }
                return result_1.decisionResults;
              });
              return [3, 5];
            case 4:
              e_1 = _a.sent();
              setDmnRunnerResults(undefined);
              return [3, 5];
            case 5:
              return [2];
          }
        });
      });
    },
    [dmnRunnerState.service, dmnRunnerState.status, dmnRunnerDispatch, setExecutionNotifications]
  );
  (0, react_1.useEffect)(
    function () {
      if (dmnRunnerState.isExpanded && dmnRunnerState.mode === DmnRunnerStatus_1.DmnRunnerMode.FORM) {
        updateDmnRunnerResults(dmnRunnerState.inputRows[dmnRunnerState.currentInputRowIndex]);
      }
    },
    [
      dmnRunnerState.inputRows,
      dmnRunnerState.currentInputRowIndex,
      updateDmnRunnerResults,
      dmnRunnerState.isExpanded,
      dmnRunnerState.mode,
    ]
  );
  var previousFormError = (0, Hooks_1.usePrevious)(dmnRunnerState.error);
  (0, react_1.useEffect)(
    function () {
      if (dmnRunnerState.error) {
        updateDmnRunnerResults(dmnRunnerState.inputRows[dmnRunnerState.currentInputRowIndex]);
      } else if (previousFormError) {
        setTimeout(function () {
          var _a, _b;
          (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit();
          Object.keys(
            (_b = dmnRunnerState.inputRows[dmnRunnerState.currentInputRowIndex]) !== null && _b !== void 0 ? _b : {}
          ).forEach(function (propertyName) {
            var _a, _b;
            (_a = formRef.current) === null || _a === void 0
              ? void 0
              : _a.change(
                  propertyName,
                  (_b = dmnRunnerState.inputRows[dmnRunnerState.currentInputRowIndex]) === null || _b === void 0
                    ? void 0
                    : _b[propertyName]
                );
          });
        }, 0);
      }
    },
    [
      dmnRunnerState.error,
      dmnRunnerState.inputRows,
      dmnRunnerState.currentInputRowIndex,
      updateDmnRunnerResults,
      previousFormError,
    ]
  );
  var openValidationTab = (0, react_1.useCallback)(
    function () {
      var _a, _b, _c;
      (_a = props.editorPageDock) === null || _a === void 0
        ? void 0
        : _a.toggle(EditorPageDockDrawer_1.PanelId.NOTIFICATIONS_PANEL);
      (_c = (_b = props.editorPageDock) === null || _b === void 0 ? void 0 : _b.getNotificationsPanel()) === null ||
      _c === void 0
        ? void 0
        : _c.setActiveTab(i18n.terms.validation);
    },
    [props.editorPageDock, i18n]
  );
  var openExecutionTab = (0, react_1.useCallback)(
    function () {
      var _a, _b, _c;
      (_a = props.editorPageDock) === null || _a === void 0
        ? void 0
        : _a.toggle(EditorPageDockDrawer_1.PanelId.NOTIFICATIONS_PANEL);
      (_c = (_b = props.editorPageDock) === null || _b === void 0 ? void 0 : _b.getNotificationsPanel()) === null ||
      _c === void 0
        ? void 0
        : _c.setActiveTab(i18n.terms.execution);
    },
    [props.editorPageDock, i18n]
  );
  var drawerErrorMessage = (0, react_1.useMemo)(
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
                      __assign({ component: "h2" }, { children: i18n.dmnRunner.drawer.error.title }),
                      void 0
                    ),
                  },
                  void 0
                ),
                (0, jsx_runtime_1.jsxs)(
                  EmptyState_1.EmptyStateBody,
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        Text_1.TextContent,
                        { children: i18n.dmnRunner.drawer.error.explanation },
                        void 0
                      ),
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
                              { children: i18n.dmnRunner.drawer.error.message }
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
      var _a;
      (_a = errorBoundaryRef.current) === null || _a === void 0 ? void 0 : _a.reset();
      setDrawerError(false);
    },
    [dmnRunnerState.jsonSchema]
  );
  var setFormData = (0, react_1.useCallback)(
    function (newFormData) {
      dmnRunnerDispatch.setInputRows(function (previousData) {
        var newData = __spreadArray([], __read(previousData), false);
        newData[dmnRunnerState.currentInputRowIndex] = newFormData;
        return newData;
      });
    },
    [dmnRunnerState.currentInputRowIndex, dmnRunnerDispatch]
  );
  var _f = __read((0, react_1.useState)(null), 2),
    selectedRow = _f[0],
    selectRow = _f[1];
  var _g = __read((0, react_1.useState)(false), 2),
    rowSelectionIsOpen = _g[0],
    openRowSelection = _g[1];
  var onSelectRow = (0, react_1.useCallback)(function (event) {
    openRowSelection(false);
  }, []);
  var rowOptions = (0, react_1.useMemo)(
    function () {
      return dmnRunnerState.inputRows.map(function (_, rowIndex) {
        return (0, jsx_runtime_1.jsxs)(
          Dropdown_1.DropdownItem,
          __assign(
            {
              component: "button",
              onClick: function () {
                selectRow("Row ".concat(rowIndex + 1));
                dmnRunnerDispatch.setCurrentInputRowIndex(rowIndex);
              },
            },
            { children: ["Row ", rowIndex + 1] }
          ),
          rowIndex
        );
      });
    },
    [dmnRunnerState.inputRows]
  );
  var formData = (0, react_1.useMemo)(
    function () {
      return dmnRunnerState.inputRows[dmnRunnerState.currentInputRowIndex];
    },
    [dmnRunnerState.inputRows, dmnRunnerState.currentInputRowIndex]
  );
  var onAddNewRow = (0, react_1.useCallback)(
    function () {
      dmnRunnerDispatch.setInputRows(function (previousData) {
        var newData = __spreadArray(__spreadArray([], __read(previousData), false), [{}], false);
        dmnRunnerDispatch.setCurrentInputRowIndex(newData.length - 1);
        selectRow("Row ".concat(newData.length));
        return newData;
      });
    },
    [dmnRunnerDispatch]
  );
  var onChangeToTableView = (0, react_1.useCallback)(
    function () {
      var _a;
      dmnRunnerDispatch.setMode(DmnRunnerStatus_1.DmnRunnerMode.TABLE);
      (_a = props.editorPageDock) === null || _a === void 0
        ? void 0
        : _a.toggle(EditorPageDockDrawer_1.PanelId.DMN_RUNNER_TABULAR);
    },
    [dmnRunnerDispatch, props.editorPageDock]
  );
  return (0, jsx_runtime_1.jsx)(
    Drawer_1.DrawerPanelContent,
    __assign(
      {
        id: "kogito-panel-content",
        className: "kogito--editor__drawer-content-panel",
        defaultSize: "".concat(DMN_RUNNER_MIN_WIDTH_TO_ROW_DIRECTION, "px"),
        onResize: onResize,
        isResizable: true,
        minSize: "361px",
      },
      {
        children: drawerError
          ? drawerErrorMessage
          : (0, jsx_runtime_1.jsx)(
              ErrorBoundary_1.ErrorBoundary,
              __assign(
                { error: drawerErrorMessage, setHasError: setDrawerError, ref: errorBoundaryRef },
                {
                  children: (0, jsx_runtime_1.jsxs)(
                    "div",
                    __assign(
                      {
                        className: "kogito--editor__dmn-runner",
                        style: { flexDirection: dmnRunnerStylesConfig.contentFlexDirection },
                      },
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            "div",
                            __assign(
                              {
                                className: "kogito--editor__dmn-runner-content",
                                style: {
                                  width: dmnRunnerStylesConfig.contentWidth,
                                  height: dmnRunnerStylesConfig.contentHeight,
                                },
                              },
                              {
                                children: (0, jsx_runtime_1.jsxs)(
                                  Page_1.Page,
                                  __assign(
                                    { className: "kogito--editor__dmn-runner-content-page" },
                                    {
                                      children: [
                                        (0, jsx_runtime_1.jsxs)(
                                          Page_1.PageSection,
                                          __assign(
                                            { className: "kogito--editor__dmn-runner-content-header" },
                                            {
                                              children: [
                                                (0, jsx_runtime_1.jsxs)(
                                                  Flex_1.Flex,
                                                  __assign(
                                                    {
                                                      flexWrap: { default: "nowrap" },
                                                      style: { width: "100%" },
                                                      justifyContent: { default: "justifyContentSpaceBetween" },
                                                      alignItems: { default: "alignItemsCenter" },
                                                    },
                                                    {
                                                      children: [
                                                        (0, jsx_runtime_1.jsx)(
                                                          Flex_1.FlexItem,
                                                          {
                                                            children:
                                                              dmnRunnerState.inputRows.length <= 1
                                                                ? (0, jsx_runtime_1.jsx)(
                                                                    Button_1.Button,
                                                                    __assign(
                                                                      {
                                                                        variant: Button_1.ButtonVariant.plain,
                                                                        className: "kie-tools--masthead-hoverable",
                                                                        style: { cursor: "default" },
                                                                      },
                                                                      {
                                                                        children: (0, jsx_runtime_1.jsx)(
                                                                          Text_1.TextContent,
                                                                          {
                                                                            children: (0, jsx_runtime_1.jsx)(
                                                                              Text_1.Text,
                                                                              __assign(
                                                                                { component: "h3" },
                                                                                { children: i18n.terms.inputs }
                                                                              ),
                                                                              void 0
                                                                            ),
                                                                          },
                                                                          void 0
                                                                        ),
                                                                      }
                                                                    ),
                                                                    void 0
                                                                  )
                                                                : (0, jsx_runtime_1.jsx)(
                                                                    "div",
                                                                    {
                                                                      children: (0, jsx_runtime_1.jsx)(
                                                                        Dropdown_1.Dropdown,
                                                                        {
                                                                          className: "kie-tools--masthead-hoverable",
                                                                          isPlain: true,
                                                                          "aria-label": "Select Row Input",
                                                                          toggle: (0, jsx_runtime_1.jsx)(
                                                                            Dropdown_1.DropdownToggle,
                                                                            __assign(
                                                                              {
                                                                                toggleIndicator: null,
                                                                                onToggle: function () {
                                                                                  return openRowSelection(function (
                                                                                    prevState
                                                                                  ) {
                                                                                    return !prevState;
                                                                                  });
                                                                                },
                                                                              },
                                                                              {
                                                                                children: (0, jsx_runtime_1.jsx)(
                                                                                  Text_1.TextContent,
                                                                                  {
                                                                                    children: (0, jsx_runtime_1.jsxs)(
                                                                                      Text_1.Text,
                                                                                      __assign(
                                                                                        { component: "h3" },
                                                                                        {
                                                                                          children: [
                                                                                            i18n.terms.inputs,
                                                                                            " (Row ",
                                                                                            dmnRunnerState.currentInputRowIndex +
                                                                                              1,
                                                                                            ")",
                                                                                            " ",
                                                                                            (0, jsx_runtime_1.jsx)(
                                                                                              caret_down_icon_1.CaretDownIcon,
                                                                                              {},
                                                                                              void 0
                                                                                            ),
                                                                                          ],
                                                                                        }
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
                                                                          onSelect: onSelectRow,
                                                                          dropdownItems: rowOptions,
                                                                          isOpen: rowSelectionIsOpen,
                                                                        },
                                                                        void 0
                                                                      ),
                                                                    },
                                                                    void 0
                                                                  ),
                                                          },
                                                          void 0
                                                        ),
                                                        (0, jsx_runtime_1.jsxs)(
                                                          Flex_1.FlexItem,
                                                          {
                                                            children: [
                                                              (0, jsx_runtime_1.jsx)(
                                                                Toolbar_1.ToolbarItem,
                                                                {
                                                                  children: (0, jsx_runtime_1.jsx)(
                                                                    Tooltip_1.Tooltip,
                                                                    __assign(
                                                                      { content: "Add new input row" },
                                                                      {
                                                                        children: (0, jsx_runtime_1.jsx)(
                                                                          Button_1.Button,
                                                                          __assign(
                                                                            {
                                                                              className:
                                                                                "kie-tools--masthead-hoverable",
                                                                              variant: Button_1.ButtonVariant.plain,
                                                                              onClick: onAddNewRow,
                                                                            },
                                                                            {
                                                                              children: (0, jsx_runtime_1.jsx)(
                                                                                plus_icon_1.PlusIcon,
                                                                                {},
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
                                                                },
                                                                void 0
                                                              ),
                                                              (0, jsx_runtime_1.jsx)(
                                                                Toolbar_1.ToolbarItem,
                                                                {
                                                                  children: (0, jsx_runtime_1.jsx)(
                                                                    Tooltip_1.Tooltip,
                                                                    __assign(
                                                                      { content: "Switch to table view" },
                                                                      {
                                                                        children: (0, jsx_runtime_1.jsx)(
                                                                          Button_1.Button,
                                                                          __assign(
                                                                            {
                                                                              ouiaId: "switch-dmn-runner-to-table-view",
                                                                              className:
                                                                                "kie-tools--masthead-hoverable",
                                                                              variant: Button_1.ButtonVariant.plain,
                                                                              onClick: onChangeToTableView,
                                                                            },
                                                                            {
                                                                              children: (0, jsx_runtime_1.jsx)(
                                                                                table_icon_1.TableIcon,
                                                                                {},
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
                                                                },
                                                                void 0
                                                              ),
                                                            ],
                                                          },
                                                          void 0
                                                        ),
                                                      ],
                                                    }
                                                  ),
                                                  void 0
                                                ),
                                                dmnRunnerStylesConfig.buttonPosition === ButtonPosition.INPUT &&
                                                  (0, jsx_runtime_1.jsx)(
                                                    Drawer_1.DrawerCloseButton,
                                                    {
                                                      onClick: function (e) {
                                                        dmnRunnerDispatch.setExpanded(false);
                                                      },
                                                    },
                                                    void 0
                                                  ),
                                              ],
                                            }
                                          ),
                                          void 0
                                        ),
                                        (0, jsx_runtime_1.jsx)(
                                          "div",
                                          __assign(
                                            { className: "kogito--editor__dmn-runner-drawer-content-body" },
                                            {
                                              children: (0, jsx_runtime_1.jsx)(
                                                Page_1.PageSection,
                                                __assign(
                                                  { className: "kogito--editor__dmn-runner-drawer-content-body-input" },
                                                  {
                                                    children: (0, jsx_runtime_1.jsx)(
                                                      dmn_1.DmnForm,
                                                      {
                                                        name: selectedRow,
                                                        formData: formData,
                                                        setFormData: setFormData,
                                                        formError: dmnRunnerState.error,
                                                        setFormError: dmnRunnerDispatch.setError,
                                                        formSchema: dmnRunnerState.jsonSchema,
                                                        id: "form",
                                                        formRef: formRef,
                                                        showInlineError: true,
                                                        autosave: true,
                                                        autosaveDelay: AUTO_SAVE_DELAY,
                                                        placeholder: true,
                                                        errorsField: function () {
                                                          return (0, jsx_runtime_1.jsx)(
                                                            jsx_runtime_1.Fragment,
                                                            {},
                                                            void 0
                                                          );
                                                        },
                                                        submitField: function () {
                                                          return (0, jsx_runtime_1.jsx)(
                                                            jsx_runtime_1.Fragment,
                                                            {},
                                                            void 0
                                                          );
                                                        },
                                                        locale: locale,
                                                        notificationsPanel: true,
                                                        openValidationTab: openValidationTab,
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
                                      ],
                                    }
                                  ),
                                  void 0
                                ),
                              }
                            ),
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)(
                            "div",
                            __assign(
                              {
                                className: "kogito--editor__dmn-runner-content",
                                style: {
                                  width: dmnRunnerStylesConfig.contentWidth,
                                  height: dmnRunnerStylesConfig.contentHeight,
                                },
                              },
                              {
                                children: (0, jsx_runtime_1.jsxs)(
                                  Page_1.Page,
                                  __assign(
                                    { className: "kogito--editor__dmn-runner-content-page" },
                                    {
                                      children: [
                                        (0, jsx_runtime_1.jsxs)(
                                          Page_1.PageSection,
                                          __assign(
                                            { className: "kogito--editor__dmn-runner-content-header" },
                                            {
                                              children: [
                                                (0, jsx_runtime_1.jsx)(
                                                  Text_1.TextContent,
                                                  {
                                                    children: (0, jsx_runtime_1.jsx)(
                                                      Text_1.Text,
                                                      __assign({ component: "h3" }, { children: i18n.terms.outputs }),
                                                      void 0
                                                    ),
                                                  },
                                                  void 0
                                                ),
                                                dmnRunnerStylesConfig.buttonPosition === ButtonPosition.OUTPUT &&
                                                  (0, jsx_runtime_1.jsx)(
                                                    Drawer_1.DrawerCloseButton,
                                                    {
                                                      onClick: function (e) {
                                                        return dmnRunnerDispatch.setExpanded(false);
                                                      },
                                                    },
                                                    void 0
                                                  ),
                                              ],
                                            }
                                          ),
                                          void 0
                                        ),
                                        (0, jsx_runtime_1.jsx)(
                                          "div",
                                          __assign(
                                            { className: "kogito--editor__dmn-runner-drawer-content-body" },
                                            {
                                              children: (0, jsx_runtime_1.jsx)(
                                                Page_1.PageSection,
                                                __assign(
                                                  {
                                                    className: "kogito--editor__dmn-runner-drawer-content-body-output",
                                                  },
                                                  {
                                                    children: (0, jsx_runtime_1.jsx)(
                                                      dmn_1.DmnFormResult,
                                                      {
                                                        results: dmnRunnerResults,
                                                        differences: dmnRunnerResponseDiffs,
                                                        locale: locale,
                                                        notificationsPanel: true,
                                                        openExecutionTab: openExecutionTab,
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
                                      ],
                                    }
                                  ),
                                  void 0
                                ),
                              }
                            ),
                            void 0
                          ),
                        ],
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
}
exports.DmnRunnerDrawerPanelContent = DmnRunnerDrawerPanelContent;
//# sourceMappingURL=DmnRunnerDrawerPanelContent.js.map
