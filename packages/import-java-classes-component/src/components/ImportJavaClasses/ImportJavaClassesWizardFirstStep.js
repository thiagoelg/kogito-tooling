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
exports.ImportJavaClassesWizardFirstStep = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./ImportJavaClassesWizardFirstStep.css");
var react_core_1 = require("@patternfly/react-core");
var cubes_icon_1 = require("@patternfly/react-icons/dist/js/icons/cubes-icon");
var i18n_1 = require("../../i18n");
var react_1 = require("react");
var ImportJavaClassesWizardFirstStep = function (_a) {
  var javaCodeCompletionService = _a.javaCodeCompletionService,
    onAddJavaClass = _a.onAddJavaClass,
    onRemoveJavaClass = _a.onRemoveJavaClass,
    selectedJavaClasses = _a.selectedJavaClasses;
  var i18n = (0, i18n_1.useImportJavaClassesWizardI18n)().i18n;
  var _b = __read((0, react_1.useState)(""), 2),
    searchValue = _b[0],
    setSearchValue = _b[1];
  var _c = __read((0, react_1.useState)([]), 2),
    retrievedJavaClassesNames = _c[0],
    setRetrievedJavaClassesNames = _c[1];
  var _d = __read((0, react_1.useState)(false), 2),
    isRequestLoading = _d[0],
    setRequestLoading = _d[1];
  var _e = __read((0, react_1.useState)(undefined), 2),
    requestTimer = _e[0],
    setRequestTimer = _e[1];
  var retrieveJavaClasses = (0, react_1.useCallback)(
    function (value) {
      setRequestLoading(true);
      javaCodeCompletionService
        .getClasses(value)
        .then(function (javaCodeCompletionClasses) {
          var retrievedClasses = javaCodeCompletionClasses.map(function (item) {
            return item.query;
          });
          setRetrievedJavaClassesNames(retrievedClasses);
          setRequestLoading(false);
        })
        .catch(function (reason) {
          setRetrievedJavaClassesNames([]);
          setRequestLoading(false);
          console.error(reason);
        });
    },
    [javaCodeCompletionService]
  );
  var handleSearchValueChange = (0, react_1.useCallback)(
    function (value) {
      setSearchValue(value);
      if (requestTimer) {
        clearTimeout(requestTimer);
      }
      if (value.length > 2) {
        setRequestTimer(
          global.setTimeout(function () {
            retrieveJavaClasses(value);
          }, 1000)
        );
      } else {
        setRetrievedJavaClassesNames([]);
      }
    },
    [retrieveJavaClasses, requestTimer]
  );
  var handleClearSearch = (0, react_1.useCallback)(function () {
    setSearchValue("");
    setRetrievedJavaClassesNames([]);
  }, []);
  var handleDataListCheckChange = (0, react_1.useCallback)(
    function (fullClassName) {
      if (
        !selectedJavaClasses
          .map(function (javaClass) {
            return javaClass.name;
          })
          .includes(fullClassName)
      ) {
        onAddJavaClass(fullClassName);
      } else {
        onRemoveJavaClass(fullClassName);
      }
    },
    [selectedJavaClasses, onAddJavaClass, onRemoveJavaClass]
  );
  var isDataListChecked = (0, react_1.useCallback)(
    function (fullClassName) {
      if (
        selectedJavaClasses
          .map(function (javaClass) {
            return javaClass.name;
          })
          .includes(fullClassName)
      ) {
        return true;
      } else {
        return false;
      }
    },
    [selectedJavaClasses]
  );
  var dataListClassesSet = __spreadArray(
    [],
    __read(
      new Set(
        selectedJavaClasses
          .map(function (value) {
            return value.name;
          })
          .concat(retrievedJavaClassesNames)
      )
    ),
    false
  );
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        (0, jsx_runtime_1.jsx)(
          "div",
          __assign(
            { className: "fs-search-input" },
            {
              children:
                searchValue.length < 3
                  ? (0, jsx_runtime_1.jsx)(
                      react_core_1.Tooltip,
                      __assign(
                        { content: i18n.modalWizard.firstStep.input.tooltip },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            react_core_1.SearchInput,
                            {
                              autoFocus: true,
                              onChange: handleSearchValueChange,
                              onClear: handleClearSearch,
                              placeholder: i18n.modalWizard.firstStep.input.placeholder,
                              value: searchValue,
                            },
                            void 0
                          ),
                        }
                      ),
                      void 0
                    )
                  : (0, jsx_runtime_1.jsx)(
                      react_core_1.SearchInput,
                      {
                        autoFocus: true,
                        onChange: handleSearchValueChange,
                        onClear: handleClearSearch,
                        placeholder: i18n.modalWizard.firstStep.input.placeholder,
                        value: searchValue,
                      },
                      void 0
                    ),
            }
          ),
          void 0
        ),
        isRequestLoading
          ? (0, jsx_runtime_1.jsx)(
              react_core_1.Bullseye,
              { children: (0, jsx_runtime_1.jsx)(react_core_1.Spinner, { isSVG: true }, void 0) },
              void 0
            )
          : retrievedJavaClassesNames.length > 0 || selectedJavaClasses.length > 0
          ? (0, jsx_runtime_1.jsx)(
              react_core_1.DataList,
              __assign(
                { "aria-label": "class-data-list" },
                {
                  children: dataListClassesSet.map(function (value) {
                    return (0, jsx_runtime_1.jsx)(
                      react_core_1.DataListItem,
                      __assign(
                        { name: value },
                        {
                          children: (0, jsx_runtime_1.jsxs)(
                            react_core_1.DataListItemRow,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  react_core_1.DataListCheck,
                                  {
                                    "aria-labelledby": value,
                                    checked: isDataListChecked(value),
                                    onChange: function () {
                                      return handleDataListCheckChange(value);
                                    },
                                  },
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  react_core_1.DataListCell,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      "span",
                                      __assign({ id: value }, { children: value }),
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                              ],
                            },
                            void 0
                          ),
                        }
                      ),
                      value
                    );
                  }),
                }
              ),
              void 0
            )
          : (0, jsx_runtime_1.jsx)(
              EmptyStep,
              {
                emptyStateBodyText: i18n.modalWizard.firstStep.emptyState.body,
                emptyStateTitleText: i18n.modalWizard.firstStep.emptyState.title,
              },
              void 0
            ),
      ],
    },
    void 0
  );
};
exports.ImportJavaClassesWizardFirstStep = ImportJavaClassesWizardFirstStep;
var EmptyStep = function (_a) {
  var emptyStateBodyText = _a.emptyStateBodyText,
    emptyStateTitleText = _a.emptyStateTitleText;
  return (0, jsx_runtime_1.jsxs)(
    react_core_1.EmptyState,
    {
      children: [
        (0, jsx_runtime_1.jsx)(react_core_1.EmptyStateIcon, { icon: cubes_icon_1.default }, void 0),
        (0, jsx_runtime_1.jsx)(
          react_core_1.Title,
          __assign({ headingLevel: "h6", size: "md" }, { children: emptyStateTitleText }),
          void 0
        ),
        (0, jsx_runtime_1.jsx)(react_core_1.EmptyStateBody, { children: emptyStateBodyText }, void 0),
      ],
    },
    void 0
  );
};
//# sourceMappingURL=ImportJavaClassesWizardFirstStep.js.map
