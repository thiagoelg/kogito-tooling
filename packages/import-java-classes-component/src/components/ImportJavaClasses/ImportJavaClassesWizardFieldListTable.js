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
exports.ImportJavaClassesWizardFieldListTable = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./ImportJavaClassesWizardFieldListTable.css");
var react_table_1 = require("@patternfly/react-table");
var react_core_1 = require("@patternfly/react-core");
var DMNSimpleType_1 = require("./model/DMNSimpleType");
var JavaClassUtils_1 = require("./model/JavaClassUtils");
var react_1 = require("react");
var i18n_1 = require("../../i18n");
var ImportJavaClassesWizardFieldListTable = function (props) {
  return (0, jsx_runtime_1.jsx)(
    react_table_1.TableComposable,
    __assign(
      { "aria-label": "field-table" },
      {
        children: props.selectedJavaClassFields.map(function (javaClass, index) {
          return (0,
          jsx_runtime_1.jsx)(TableJavaClassItem, { javaClass: javaClass, index: index, loadJavaClass: props.loadJavaClass }, javaClass.name);
        }),
      }
    ),
    void 0
  );
};
exports.ImportJavaClassesWizardFieldListTable = ImportJavaClassesWizardFieldListTable;
var TableJavaClassItem = function (_a) {
  var javaClass = _a.javaClass,
    index = _a.index,
    loadJavaClass = _a.loadJavaClass;
  var i18n = (0, i18n_1.useImportJavaClassesWizardI18n)().i18n;
  var _b = __read((0, react_1.useState)(true), 2),
    isExpanded = _b[0],
    setExpanded = _b[1];
  var isFetchable = (0, react_1.useCallback)(function (field) {
    return field.dmnTypeRef === DMNSimpleType_1.DMNSimpleType.ANY;
  }, []);
  var parentRow = (0, jsx_runtime_1.jsxs)(
    react_table_1.Tr,
    {
      children: [
        (0, jsx_runtime_1.jsx)(
          react_table_1.Td,
          {
            expand:
              javaClass.fields && javaClass.fields.length > 0
                ? {
                    rowIndex: index,
                    isExpanded: isExpanded,
                    onToggle: function () {
                      return setExpanded(function (prevState) {
                        return !prevState;
                      });
                    },
                  }
                : undefined,
          },
          "".concat(javaClass.name, "_td0")
        ),
        (0, jsx_runtime_1.jsxs)(
          react_table_1.Td,
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                "span",
                {
                  children: (0, jsx_runtime_1.jsx)(
                    "strong",
                    { children: (0, JavaClassUtils_1.getJavaClassSimpleName)(javaClass.name) },
                    void 0
                  ),
                },
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                "span",
                __assign({ className: "dmn-type-name" }, { children: "(Structure)" }),
                void 0
              ),
            ],
          },
          "".concat(javaClass.name, "_td1")
        ),
      ],
    },
    "".concat(javaClass.name, "_tr")
  );
  var childRow =
    javaClass.fields && javaClass.fields.length > 0
      ? javaClass.fields.map(function (field) {
          return (0, jsx_runtime_1.jsxs)(
            react_table_1.Tr,
            __assign(
              { isExpanded: isExpanded },
              {
                children: [
                  (0, jsx_runtime_1.jsx)(react_table_1.Td, {}, "".concat(field.name, "_td0")),
                  (0, jsx_runtime_1.jsx)(
                    react_table_1.Td,
                    {
                      children: (0, jsx_runtime_1.jsxs)(
                        react_table_1.ExpandableRowContent,
                        {
                          children: [
                            (0, jsx_runtime_1.jsx)("span", { children: field.name }, void 0),
                            (0, jsx_runtime_1.jsx)(
                              "span",
                              __assign({ className: "dmn-type-name" }, { children: "(".concat(field.dmnTypeRef, ")") }),
                              void 0
                            ),
                            loadJavaClass &&
                              isFetchable(field) &&
                              (0, jsx_runtime_1.jsx)(
                                react_core_1.Button,
                                __assign(
                                  {
                                    className: "fetch-button",
                                    onClick: function () {
                                      return loadJavaClass(field.type);
                                    },
                                    variant: "primary",
                                    isSmall: true,
                                  },
                                  {
                                    children: ""
                                      .concat(i18n.modalWizard.fieldTable.fetchButtonLabel, ' "')
                                      .concat((0, JavaClassUtils_1.getJavaClassSimpleName)(field.type), '" class'),
                                  }
                                ),
                                void 0
                              ),
                          ],
                        },
                        void 0
                      ),
                    },
                    "".concat(field.name, "_td1")
                  ),
                ],
              }
            ),
            "".concat(field.name, "_tr")
          );
        })
      : undefined;
  return (0, jsx_runtime_1.jsxs)(
    react_table_1.Tbody,
    __assign({ isExpanded: isExpanded }, { children: [parentRow, childRow] }),
    index
  );
};
//# sourceMappingURL=ImportJavaClassesWizardFieldListTable.js.map
