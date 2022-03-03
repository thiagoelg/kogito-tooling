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
exports.DataTypeSelector = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_core_1 = require("@patternfly/react-core");
var React = require("react");
var react_1 = require("react");
var i18n_1 = require("../../i18n");
var _ = require("lodash");
var context_1 = require("../../context");
var DataTypeSelector = function (_a) {
  var selectedDataType = _a.selectedDataType,
    onDataTypeChange = _a.onDataTypeChange,
    menuAppendTo = _a.menuAppendTo;
  var i18n = (0, i18n_1.useBoxedExpressionEditorI18n)().i18n;
  var dataTypes = (0, context_1.useBoxedExpression)().dataTypes;
  var _b = __read((0, react_1.useState)(false), 2),
    dataTypeSelectOpen = _b[0],
    setDataTypeSelectOpen = _b[1];
  var onDataTypeSelect = (0, react_1.useCallback)(
    function (event, selection) {
      setDataTypeSelectOpen(false);
      onDataTypeChange(selection);
    },
    [onDataTypeChange]
  );
  var buildOptionsByGroup = (0, react_1.useCallback)(
    function (key, options) {
      return (0, jsx_runtime_1.jsx)(
        react_core_1.SelectGroup,
        __assign(
          { label: i18n.dataTypeDropDown[key] },
          {
            children: _.chain(options)
              .map(function (_a) {
                var name = _a.name;
                return (0,
                jsx_runtime_1.jsx)(react_core_1.SelectOption, { value: name, "data-ouia-component-id": name }, name);
              })
              .value(),
          }
        ),
        key
      );
    },
    [i18n.dataTypeDropDown]
  );
  var getDataTypes = (0, react_1.useCallback)(
    function () {
      var _a = __read(_.chain(dataTypes).partition("isCustom").value(), 2),
        customDataTypes = _a[0],
        defaultDataTypes = _a[1];
      var dataTypeGroups = [buildOptionsByGroup("default", defaultDataTypes)];
      if (!_.isEmpty(customDataTypes)) {
        dataTypeGroups.push((0, jsx_runtime_1.jsx)(react_core_1.Divider, {}, "divider"));
        dataTypeGroups.push(buildOptionsByGroup("custom", customDataTypes));
      }
      return dataTypeGroups;
    },
    [buildOptionsByGroup, dataTypes]
  );
  var onFilteringDataTypes = (0, react_1.useCallback)(
    function (_, textInput) {
      if (textInput === "") {
        return getDataTypes();
      } else {
        return getDataTypes().reduce(function (groups, group) {
          var _a, _b, _c, _d;
          var filteredGroup = React.cloneElement(group, {
            children:
              (_b = (_a = group.props) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0
                ? void 0
                : _b.filter(function (item) {
                    return item.props.value.toLowerCase().includes(textInput.toLowerCase());
                  }),
          });
          if (
            filteredGroup &&
            ((_d = (_c = filteredGroup.props) === null || _c === void 0 ? void 0 : _c.children) === null ||
            _d === void 0
              ? void 0
              : _d.length) > 0
          ) {
            groups.push(filteredGroup);
          }
          return groups;
        }, []);
      }
    },
    [getDataTypes]
  );
  var onDataTypeSelectToggle = (0, react_1.useCallback)(function (isOpen) {
    return setDataTypeSelectOpen(isOpen);
  }, []);
  return (0, jsx_runtime_1.jsx)(
    react_core_1.Select,
    __assign(
      {
        menuAppendTo: menuAppendTo,
        ouiaId: "edit-expression-data-type",
        variant: react_core_1.SelectVariant.single,
        typeAheadAriaLabel: i18n.choose,
        onToggle: onDataTypeSelectToggle,
        onSelect: onDataTypeSelect,
        onFilter: onFilteringDataTypes,
        isOpen: dataTypeSelectOpen,
        selections: selectedDataType,
        isGrouped: true,
        hasInlineFilter: true,
        inlineFilterPlaceholderText: i18n.choose,
        maxHeight: 500,
      },
      { children: getDataTypes() }
    ),
    void 0
  );
};
exports.DataTypeSelector = DataTypeSelector;
//# sourceMappingURL=DataTypeSelector.js.map
