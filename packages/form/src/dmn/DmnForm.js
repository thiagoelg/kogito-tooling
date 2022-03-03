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
exports.DmnForm = exports.usePrevious = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var es6_1 = require("uniforms-patternfly/dist/es6");
var ErrorBoundary_1 = require("../common/ErrorBoundary");
var utils_1 = require("./uniforms/utils");
var DmnValidator_1 = require("./DmnValidator");
var i18n_1 = require("./i18n");
var deep_object_diff_1 = require("deep-object-diff");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var exclamation_triangle_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var exclamation_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-icon");
var cubes_icon_1 = require("@patternfly/react-icons/dist/js/icons/cubes-icon");
var cloneDeep_1 = require("lodash/cloneDeep");
var KOGITO_JIRA_LINK = "https://issues.jboss.org/projects/KOGITO";
var FormStatus;
(function (FormStatus) {
  FormStatus[(FormStatus["WITHOUT_ERROR"] = 0)] = "WITHOUT_ERROR";
  FormStatus[(FormStatus["VALIDATOR_ERROR"] = 1)] = "VALIDATOR_ERROR";
  FormStatus[(FormStatus["AUTO_GENERATION_ERROR"] = 2)] = "AUTO_GENERATION_ERROR";
  FormStatus[(FormStatus["EMPTY"] = 3)] = "EMPTY";
})(FormStatus || (FormStatus = {}));
function usePrevious(value) {
  var ref = (0, react_1.useRef)();
  (0, react_1.useEffect)(
    function () {
      ref.current = value;
    },
    [value]
  );
  return ref.current;
}
exports.usePrevious = usePrevious;
function DmnForm(props) {
  var errorBoundaryRef = (0, react_1.useRef)(null);
  var _a = __read((0, react_1.useState)(), 2),
    jsonSchemaBridge = _a[0],
    setJsonSchemaBridge = _a[1];
  var i18n = (0, react_1.useMemo)(
    function () {
      var _a;
      i18n_1.dmnFormI18n.setLocale((_a = props.locale) !== null && _a !== void 0 ? _a : navigator.language);
      return i18n_1.dmnFormI18n.getCurrent();
    },
    [props.locale]
  );
  var validator = (0, react_1.useMemo)(function () {
    return new DmnValidator_1.DmnValidator(i18n);
  }, []);
  var _b = __read((0, react_1.useState)(), 2),
    formModel = _b[0],
    setFormModel = _b[1];
  var _c = __read((0, react_1.useState)(FormStatus.EMPTY), 2),
    formStatus = _c[0],
    setFormStatus = _c[1];
  var contextPath = (0, react_1.useMemo)(function () {
    return new Map();
  }, []);
  var setCustomPlaceholders = (0, react_1.useCallback)(
    function (value) {
      if ((value === null || value === void 0 ? void 0 : value.format) === "days and time duration") {
        value.placeholder = i18n.form.preProcessing.daysAndTimePlaceholder;
      }
      if ((value === null || value === void 0 ? void 0 : value.format) === "years and months duration") {
        value.placeholder = i18n.form.preProcessing.yearsAndMonthsPlaceholder;
      }
      if ((value === null || value === void 0 ? void 0 : value.format) === "time") {
        value.placeholder = "hh:mm:ss";
      }
    },
    [i18n.form.preProcessing.daysAndTimePlaceholder, i18n.form.preProcessing.yearsAndMonthsPlaceholder]
  );
  var formDeepPreprocessing = (0, react_1.useCallback)(
    function (form, value, title) {
      var _a, _b, _c, _d, _e;
      if (title === void 0) {
        title = [""];
      }
      if (Object.hasOwnProperty.call(value, "$ref")) {
        var property = value.$ref.split("/").pop();
        if (form.definitions[property] && Object.hasOwnProperty.call(form.definitions[property], "properties")) {
          Object.entries(form.definitions[property].properties).forEach(function (_a) {
            var _b = __read(_a, 2),
              key = _b[0],
              deepValue = _b[1];
            formDeepPreprocessing(
              form,
              deepValue,
              __spreadArray(__spreadArray([], __read(title), false), [key], false)
            );
          });
        } else if (
          form.definitions[property] &&
          ((_a = form.definitions[property]) === null || _a === void 0 ? void 0 : _a.type) === "array"
        ) {
          if (
            Object.hasOwnProperty.call(
              (_b = form.definitions[property]) === null || _b === void 0 ? void 0 : _b.items,
              "properties"
            )
          ) {
            Object.entries(
              (_c = form.definitions[property]) === null || _c === void 0 ? void 0 : _c.items.properties
            ).forEach(function (_a) {
              var _b = __read(_a, 2),
                key = _b[0],
                deepValue = _b[1];
              formDeepPreprocessing(
                form,
                deepValue,
                __spreadArray(__spreadArray([], __read(title), false), [key], false)
              );
            });
          } else {
            formDeepPreprocessing(form, form.definitions[property].items, __spreadArray([], __read(title), false));
          }
        } else if (!Object.hasOwnProperty.call(form.definitions[property], "type")) {
          form.definitions[property].type = "string";
        } else if (
          ((_e =
            (_d = form === null || form === void 0 ? void 0 : form.definitions) === null || _d === void 0
              ? void 0
              : _d[property]) === null || _e === void 0
            ? void 0
            : _e["x-dmn-type"]) === "FEEL:context"
        ) {
          form.definitions[property].placeholder = '{ "x": <value> }';
          contextPath.set(title.join(""), title);
        } else if (Object.hasOwnProperty.call(form.definitions[property], "enum")) {
          form.definitions[property].placeholder = i18n.form.preProcessing.selectPlaceholder;
        } else if (Object.hasOwnProperty.call(form.definitions[property], "format")) {
          setCustomPlaceholders(form.definitions[property]);
        }
        return;
      }
      if (!Object.hasOwnProperty.call(value, "type")) {
        value.type = "string";
      }
      if ((value === null || value === void 0 ? void 0 : value["x-dmn-type"]) === "FEEL:context") {
        value.placeholder = '{ "x": <value> }';
        contextPath.set(title.join(""), title);
      }
      if (Object.hasOwnProperty.call(value, "enum")) {
        value.placeholder = i18n.form.preProcessing.selectPlaceholder;
      }
      if (Object.hasOwnProperty.call(value, "format")) {
        setCustomPlaceholders(value);
      }
    },
    [setCustomPlaceholders]
  );
  var formPreprocessing = (0, react_1.useCallback)(
    function (form) {
      var _a, _b, _c, _d;
      (_b = (_a = form.definitions) === null || _a === void 0 ? void 0 : _a.InputSet) === null || _b === void 0
        ? true
        : delete _b.required;
      if (Object.hasOwnProperty.call(form.definitions.InputSet, "properties")) {
        Object.entries(
          (_d = (_c = form.definitions.InputSet) === null || _c === void 0 ? void 0 : _c.properties) !== null &&
            _d !== void 0
            ? _d
            : {}
        ).forEach(function (_a) {
          var _b = __read(_a, 2),
            key = _b[0],
            value = _b[1];
          formDeepPreprocessing(form, value, [key]);
        });
      }
    },
    [formDeepPreprocessing]
  );
  var defaultFormValues = (0, react_1.useCallback)(function (jsonSchemaBridge) {
    var _a, _b;
    return Object.keys(
      (_b =
        (_a = jsonSchemaBridge === null || jsonSchemaBridge === void 0 ? void 0 : jsonSchemaBridge.schema) === null ||
        _a === void 0
          ? void 0
          : _a.properties) !== null && _b !== void 0
        ? _b
        : {}
    ).reduce(function (acc, property) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
      if (
        Object.hasOwnProperty.call(
          (_a = jsonSchemaBridge === null || jsonSchemaBridge === void 0 ? void 0 : jsonSchemaBridge.schema) === null ||
            _a === void 0
            ? void 0
            : _a.properties[property],
          "$ref"
        )
      ) {
        var refPath =
          (_c =
            (_b = jsonSchemaBridge === null || jsonSchemaBridge === void 0 ? void 0 : jsonSchemaBridge.schema) ===
              null || _b === void 0
              ? void 0
              : _b.properties[property].$ref.split("/").pop()) !== null && _c !== void 0
            ? _c
            : "";
        if (
          ((_e =
            (_d = jsonSchemaBridge === null || jsonSchemaBridge === void 0 ? void 0 : jsonSchemaBridge.schema) ===
              null || _d === void 0
              ? void 0
              : _d.definitions) === null || _e === void 0
            ? void 0
            : _e[refPath].type) === "object"
        ) {
          acc["".concat(property)] = {};
          return acc;
        }
        if (
          ((_h =
            (_g =
              (_f = jsonSchemaBridge === null || jsonSchemaBridge === void 0 ? void 0 : jsonSchemaBridge.schema) ===
                null || _f === void 0
                ? void 0
                : _f.definitions) === null || _g === void 0
              ? void 0
              : _g[refPath]) === null || _h === void 0
            ? void 0
            : _h.type) === "array"
        ) {
          acc["".concat(property)] = [];
          return acc;
        }
        if (
          ((_l =
            (_k =
              (_j = jsonSchemaBridge === null || jsonSchemaBridge === void 0 ? void 0 : jsonSchemaBridge.schema) ===
                null || _j === void 0
                ? void 0
                : _j.definitions) === null || _k === void 0
              ? void 0
              : _k[refPath]) === null || _l === void 0
            ? void 0
            : _l.type) === "boolean"
        ) {
          acc["".concat(property)] = false;
          return acc;
        }
      }
      if (
        ((_p =
          (_o =
            (_m = jsonSchemaBridge === null || jsonSchemaBridge === void 0 ? void 0 : jsonSchemaBridge.schema) ===
              null || _m === void 0
              ? void 0
              : _m.properties) === null || _o === void 0
            ? void 0
            : _o[property]) === null || _p === void 0
          ? void 0
          : _p.type) === "object"
      ) {
        acc["".concat(property)] = {};
        return acc;
      }
      if (
        ((_s =
          (_r =
            (_q = jsonSchemaBridge === null || jsonSchemaBridge === void 0 ? void 0 : jsonSchemaBridge.schema) ===
              null || _q === void 0
              ? void 0
              : _q.properties) === null || _r === void 0
            ? void 0
            : _r[property]) === null || _s === void 0
          ? void 0
          : _s.type) === "array"
      ) {
        acc["".concat(property)] = [];
        return acc;
      }
      if (
        ((_v =
          (_u =
            (_t = jsonSchemaBridge === null || jsonSchemaBridge === void 0 ? void 0 : jsonSchemaBridge.schema) ===
              null || _t === void 0
              ? void 0
              : _t.properties) === null || _u === void 0
            ? void 0
            : _u[property]) === null || _v === void 0
          ? void 0
          : _v.type) === "boolean"
      ) {
        acc["".concat(property)] = false;
        return acc;
      }
      return acc;
    }, {});
  }, []);
  var handleContextPath = (0, react_1.useCallback)(function (obj, path, operation) {
    var key = path === null || path === void 0 ? void 0 : path.shift();
    if (!key) {
      return;
    }
    var prop = obj[key];
    if (!prop) {
      return;
    }
    if (prop && path.length !== 0) {
      if (Array.isArray(prop)) {
        prop.forEach(function (e, index) {
          var nextKey = path === null || path === void 0 ? void 0 : path[0];
          if (Object.hasOwnProperty.call(e, nextKey)) {
            try {
              if (operation === "parse") {
                obj[key][index] = JSON.parse(e[nextKey]);
              } else if (operation === "stringify") {
                obj[key][index] = JSON.stringify(e[nextKey]);
              }
            } catch (err) {
              obj[key][index] = prop;
            }
          }
        });
        return;
      }
      return handleContextPath(prop, path, operation);
    }
    try {
      if (operation === "parse") {
        obj[key] = JSON.parse(prop);
      } else if (operation === "stringify") {
        obj[key] = JSON.stringify(prop);
      }
    } catch (err) {
      obj[key] = prop;
    }
  }, []);
  var removeDeletedPropertiesAndAddDefaultValues = (0, react_1.useCallback)(
    function (model, bridge, previousBridge) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      var propertiesDifference = (0, deep_object_diff_1.diff)(
        (_d =
          (_c =
            (_b =
              (_a = previousBridge === null || previousBridge === void 0 ? void 0 : previousBridge.schema) === null ||
              _a === void 0
                ? void 0
                : _a.definitions) === null || _b === void 0
              ? void 0
              : _b.InputSet) === null || _c === void 0
            ? void 0
            : _c.properties) !== null && _d !== void 0
          ? _d
          : {},
        (_h =
          (_g =
            (_f =
              (_e = bridge === null || bridge === void 0 ? void 0 : bridge.schema) === null || _e === void 0
                ? void 0
                : _e.definitions) === null || _f === void 0
              ? void 0
              : _f.InputSet) === null || _g === void 0
            ? void 0
            : _g.properties) !== null && _h !== void 0
          ? _h
          : {}
      );
      return Object.entries(propertiesDifference).reduce(function (form, _a) {
        var _b = __read(_a, 2),
          property = _b[0],
          value = _b[1];
        if (!value || value.type || value.$ref) {
          delete form[property];
        }
        if (value === null || value === void 0 ? void 0 : value.format) {
          form[property] = undefined;
        }
        return form;
      }, __assign(__assign({}, defaultFormValues(bridge)), model));
    },
    [defaultFormValues]
  );
  (0, react_1.useEffect)(
    function () {
      props.setFormError(function (previousFormError) {
        if (!previousFormError && formModel && Object.keys(formModel).length > 0) {
          var newFormData_1 = (0, cloneDeep_1.default)(formModel);
          contextPath.forEach(function (path) {
            var pathCopy = __spreadArray([], __read(path), false);
            handleContextPath(newFormData_1, pathCopy, "parse");
          });
          props.setFormData(newFormData_1);
        }
        return false;
      });
    },
    [contextPath, formModel, handleContextPath]
  );
  (0, react_1.useEffect)(
    function () {
      var _a;
      var form = (0, cloneDeep_1.default)((_a = props.formSchema) !== null && _a !== void 0 ? _a : {});
      if (Object.keys(form).length > 0) {
        formPreprocessing(form);
      }
      try {
        var bridge_1 = validator.getBridge(form);
        setJsonSchemaBridge(function (previousBridge) {
          if (formModel) {
            var newFormModel = removeDeletedPropertiesAndAddDefaultValues(formModel, bridge_1, previousBridge);
            if (
              Object.keys(
                (0, deep_object_diff_1.diff)(
                  formModel !== null && formModel !== void 0 ? formModel : {},
                  newFormModel !== null && newFormModel !== void 0 ? newFormModel : {}
                )
              ).length > 0
            ) {
              setFormModel(newFormModel);
            } else {
              setFormModel(formModel);
            }
          }
          return bridge_1;
        });
        setFormStatus(FormStatus.WITHOUT_ERROR);
      } catch (err) {
        console.error(err);
        setFormStatus(FormStatus.VALIDATOR_ERROR);
      }
    },
    [
      formModel,
      props.formSchema,
      formPreprocessing,
      validator,
      handleContextPath,
      removeDeletedPropertiesAndAddDefaultValues,
      contextPath,
    ]
  );
  (0, react_1.useEffect)(
    function () {
      var newFormModel = (0, cloneDeep_1.default)(props.formData);
      contextPath.forEach(function (path) {
        var pathCopy = __spreadArray([], __read(path), false);
        handleContextPath(newFormModel, pathCopy, "stringify");
      });
      setFormModel(newFormModel);
    },
    [props.name]
  );
  var onSubmit = (0, react_1.useCallback)(
    function (model) {
      var _a;
      (_a = props.onSubmit) === null || _a === void 0 ? void 0 : _a.call(props, model);
    },
    [props.onSubmit]
  );
  var onValidate = (0, react_1.useCallback)(
    function (model, error) {
      var _a;
      (_a = props.onValidate) === null || _a === void 0 ? void 0 : _a.call(props, model, error);
      setFormModel(function (previousModel) {
        if (Object.keys((0, deep_object_diff_1.diff)(model, previousModel)).length > 0) {
          return model;
        }
        return previousModel;
      });
      if (!error) {
        return;
      }
      var _b = error.details.reduce(
          function (infos, detail) {
            if (detail.keyword === "type") {
              var formFieldPath = (0, utils_1.dataPathToFormFieldPath)(detail.dataPath);
              infos.changes = __spreadArray(
                __spreadArray([], __read(infos.changes), false),
                [[formFieldPath, undefined]],
                false
              );
              return infos;
            } else if (detail.keyword === "enum") {
              var formFieldPath = (0, utils_1.dataPathToFormFieldPath)(detail.dataPath);
              infos.changes = __spreadArray(
                __spreadArray([], __read(infos.changes), false),
                [[formFieldPath, undefined]],
                false
              );
              return infos;
            }
            infos.details = __spreadArray(__spreadArray([], __read(infos.details), false), [detail], false);
            return infos;
          },
          { details: [], changes: [] }
        ),
        details = _b.details,
        changes = _b.changes;
      changes.forEach(function (_a) {
        var _b;
        var _c = __read(_a, 2),
          formFieldPath = _c[0],
          fieldValue = _c[1];
        (_b = formFieldPath === null || formFieldPath === void 0 ? void 0 : formFieldPath.split(".")) === null ||
        _b === void 0
          ? void 0
          : _b.reduce(function (deeper, field, index, array) {
              if (index === array.length - 1) {
                deeper[field] = fieldValue;
              } else {
                return deeper[field];
              }
            }, model);
      });
      return { details: details };
    },
    [props.onValidate]
  );
  var formErrorMessage = (0, react_1.useMemo)(
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
                  { icon: exclamation_icon_1.ExclamationIcon },
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(
                  Text_1.TextContent,
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      Text_1.Text,
                      __assign({ component: "h2" }, { children: i18n.form.status.autoGenerationError.title }),
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
                        { children: i18n.form.status.autoGenerationError.explanation },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)("br", {}, void 0),
                      (0, jsx_runtime_1.jsx)(
                        Text_1.TextContent,
                        {
                          children:
                            props.notificationsPanel &&
                            (0, jsx_runtime_1.jsx)(
                              react_components_1.I18nWrapped,
                              __assign(
                                {
                                  components: {
                                    link: (0, jsx_runtime_1.jsx)(
                                      "a",
                                      __assign(
                                        {
                                          onClick:
                                            props === null || props === void 0 ? void 0 : props.openValidationTab,
                                        },
                                        { children: i18n.terms.validation }
                                      ),
                                      void 0
                                    ),
                                  },
                                },
                                { children: i18n.form.status.autoGenerationError.checkNotificationPanel }
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
    [props.notificationsPanel, i18n]
  );
  (0, react_1.useEffect)(
    function () {
      var _a, _b, _c, _d, _e;
      if (props.formError) {
        setFormStatus(FormStatus.AUTO_GENERATION_ERROR);
      } else if (
        !props.formSchema ||
        Object.keys(
          (_d =
            (_c =
              (_b = (_a = props.formSchema) === null || _a === void 0 ? void 0 : _a.definitions) === null ||
              _b === void 0
                ? void 0
                : _b.InputSet) === null || _c === void 0
              ? void 0
              : _c.properties) !== null && _d !== void 0
            ? _d
            : {}
        ).length === 0
      ) {
        setFormStatus(FormStatus.EMPTY);
      } else if (jsonSchemaBridge) {
        setFormStatus(FormStatus.WITHOUT_ERROR);
        (_e = errorBoundaryRef.current) === null || _e === void 0 ? void 0 : _e.reset();
      }
    },
    [props.formError, props.formSchema, jsonSchemaBridge, formModel]
  );
  (0, react_1.useEffect)(
    function () {
      var _a;
      (_a = errorBoundaryRef.current) === null || _a === void 0 ? void 0 : _a.reset();
    },
    [props.formSchema]
  );
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        formStatus === FormStatus.VALIDATOR_ERROR &&
          (0, jsx_runtime_1.jsx)(
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
                          __assign({ component: "h2" }, { children: i18n.form.status.validatorError.title }),
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
                                    { children: i18n.form.status.validatorError.message }
                                  ),
                                  void 0
                                ),
                              },
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
            },
            void 0
          ),
        formStatus === FormStatus.AUTO_GENERATION_ERROR && formErrorMessage,
        formStatus === FormStatus.EMPTY &&
          (0, jsx_runtime_1.jsx)(
            "div",
            {
              children: (0, jsx_runtime_1.jsxs)(
                EmptyState_1.EmptyState,
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateIcon, { icon: cubes_icon_1.CubesIcon }, void 0),
                    (0, jsx_runtime_1.jsx)(
                      Text_1.TextContent,
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Text_1.Text,
                          __assign({ component: "h2" }, { children: i18n.form.status.emptyForm.title }),
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
                              __assign(
                                { component: Text_1.TextVariants.p },
                                { children: i18n.form.status.emptyForm.explanation }
                              ),
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
            },
            void 0
          ),
        formStatus === FormStatus.WITHOUT_ERROR &&
          (0, jsx_runtime_1.jsx)(
            "div",
            __assign(
              { "data-testid": "dmn-form" },
              {
                children: (0, jsx_runtime_1.jsx)(
                  ErrorBoundary_1.ErrorBoundary,
                  __assign(
                    { ref: errorBoundaryRef, setHasError: props.setFormError, error: formErrorMessage },
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        es6_1.AutoForm,
                        {
                          id: props.id,
                          model: formModel,
                          ref: props.formRef,
                          showInlineError: props.showInlineError,
                          autosave: props.autosave,
                          autosaveDelay: props.autosaveDelay,
                          schema: jsonSchemaBridge,
                          placeholder: props.placeholder,
                          onSubmit: onSubmit,
                          onValidate: onValidate,
                          errorsField: props.errorsField,
                          submitField: props.submitField,
                          validate: "onChange",
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
    },
    void 0
  );
}
exports.DmnForm = DmnForm;
//# sourceMappingURL=DmnForm.js.map
