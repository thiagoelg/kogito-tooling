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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmnFormPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var dmn_1 = require("@kie-tools/form/dist/dmn");
var Alert_1 = require("@patternfly/react-core/dist/js/components/Alert");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var exclamation_triangle_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon");
var react_1 = require("react");
var DmnDevSandboxRuntimeApi_1 = require("./DmnDevSandboxRuntimeApi");
var DmnFormToolbar_1 = require("./DmnFormToolbar");
var ErrorBoundary_1 = require("./ErrorBoundary");
var i18n_1 = require("./i18n");
var AlertTypes;
(function (AlertTypes) {
  AlertTypes["NONE"] = "NONE";
  AlertTypes["ERROR"] = "ERROR";
})(AlertTypes || (AlertTypes = {}));
var AUTO_SAVE_DELAY = 500;
var KOGITO_JIRA_LINK = "https://issues.jboss.org/projects/KOGITO";
function DmnFormPage(props) {
  var _this = this;
  var _a = (0, i18n_1.useDmnFormI18n)(),
    i18n = _a.i18n,
    locale = _a.locale;
  var _b = __read((0, react_1.useState)({}), 2),
    formInputs = _b[0],
    setFormInputs = _b[1];
  var _c = __read((0, react_1.useState)(), 2),
    formOutputs = _c[0],
    setFormOutputs = _c[1];
  var _d = __read((0, react_1.useState)(), 2),
    formOutputDiffs = _d[0],
    setFormOutputDiffs = _d[1];
  var _e = __read((0, react_1.useState)(false), 2),
    formError = _e[0],
    setFormError = _e[1];
  var _f = __read((0, react_1.useState)(AlertTypes.NONE), 2),
    openAlert = _f[0],
    setOpenAlert = _f[1];
  var _g = __read((0, react_1.useState)(false), 2),
    pageError = _g[0],
    setPageError = _g[1];
  var errorBoundaryRef = (0, react_1.useRef)(null);
  var closeAlert = (0, react_1.useCallback)(function () {
    return setOpenAlert(AlertTypes.NONE);
  }, []);
  var onSubmit = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var formOutputs_1, error_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [
                4,
                (0, DmnDevSandboxRuntimeApi_1.fetchDmnResult)({
                  modelName: props.formData.modelName,
                  inputs: formInputs,
                }),
              ];
            case 1:
              formOutputs_1 = _a.sent();
              setFormOutputs(function (previousOutputs) {
                var differences = (0, dmn_1.extractDifferences)(formOutputs_1, previousOutputs);
                if ((differences === null || differences === void 0 ? void 0 : differences.length) !== 0) {
                  setFormOutputDiffs(differences);
                }
                return formOutputs_1;
              });
              return [3, 3];
            case 2:
              error_1 = _a.sent();
              setFormOutputs(undefined);
              setOpenAlert(AlertTypes.ERROR);
              console.error(error_1);
              return [3, 3];
            case 3:
              return [2];
          }
        });
      });
    },
    [formInputs, props.formData.modelName]
  );
  var pageErrorMessage = (0, react_1.useMemo)(
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
                      __assign({ component: "h2" }, { children: i18n.page.error.title }),
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
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.Text,
                            __assign({ component: Text_1.TextVariants.p }, { children: i18n.page.error.explanation }),
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)("br", {}, void 0),
                      (0, jsx_runtime_1.jsxs)(
                        Text_1.TextContent,
                        {
                          children: [
                            i18n.page.error.dmnNotSupported,
                            (0, jsx_runtime_1.jsx)(
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
                                { children: i18n.page.error.referToJira }
                              ),
                              void 0
                            ),
                          ],
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)("br", {}, void 0),
                      (0, jsx_runtime_1.jsx)(Text_1.TextContent, { children: i18n.page.error.uploadFiles }, void 0),
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
      setPageError(false);
    },
    [props.formData.schema]
  );
  (0, react_1.useEffect)(
    function () {
      onSubmit();
    },
    [onSubmit]
  );
  return (0, jsx_runtime_1.jsxs)(
    Page_1.Page,
    __assign(
      {
        "data-testid": "dmn-form-page",
        header: (0, jsx_runtime_1.jsx)(DmnFormToolbar_1.DmnFormToolbar, { uri: props.formData.uri }, void 0),
      },
      {
        children: [
          openAlert === AlertTypes.ERROR &&
            (0, jsx_runtime_1.jsx)(
              "div",
              __assign(
                { className: "kogito--alert-container" },
                {
                  children: (0, jsx_runtime_1.jsx)(
                    Alert_1.Alert,
                    {
                      className: "kogito--alert",
                      variant: "danger",
                      title: i18n.error.title,
                      actionClose: (0, jsx_runtime_1.jsx)(
                        Alert_1.AlertActionCloseButton,
                        { onClose: closeAlert },
                        void 0
                      ),
                    },
                    void 0
                  ),
                }
              ),
              void 0
            ),
          pageError
            ? pageErrorMessage
            : (0, jsx_runtime_1.jsx)(
                ErrorBoundary_1.ErrorBoundary,
                __assign(
                  { error: pageErrorMessage, setHasError: setPageError, ref: errorBoundaryRef },
                  {
                    children: (0, jsx_runtime_1.jsxs)(
                      "div",
                      __assign(
                        { className: "kogito--dmn-form" },
                        {
                          children: [
                            (0, jsx_runtime_1.jsx)(
                              "div",
                              __assign(
                                { className: "kogito--dmn-form__content" },
                                {
                                  children: (0, jsx_runtime_1.jsxs)(
                                    Page_1.Page,
                                    __assign(
                                      { className: "kogito--dmn-form__content-page" },
                                      {
                                        children: [
                                          (0, jsx_runtime_1.jsx)(
                                            Page_1.PageSection,
                                            __assign(
                                              { className: "kogito--dmn-form__content-header inputs" },
                                              {
                                                children: (0, jsx_runtime_1.jsx)(
                                                  Text_1.TextContent,
                                                  {
                                                    children: (0, jsx_runtime_1.jsx)(
                                                      Text_1.Text,
                                                      __assign(
                                                        { component: Text_1.TextVariants.h3 },
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
                                          ),
                                          (0, jsx_runtime_1.jsx)(
                                            "div",
                                            __assign(
                                              { className: "kogito--dmn-form__content-body" },
                                              {
                                                children: (0, jsx_runtime_1.jsx)(
                                                  Page_1.PageSection,
                                                  __assign(
                                                    { className: "kogito--dmn-form__content-body-input" },
                                                    {
                                                      children: (0, jsx_runtime_1.jsx)(
                                                        dmn_1.DmnForm,
                                                        {
                                                          formData: formInputs,
                                                          setFormData: setFormInputs,
                                                          formError: formError,
                                                          setFormError: setFormError,
                                                          formSchema: props.formData.schema,
                                                          id: "form",
                                                          showInlineError: true,
                                                          notificationsPanel: false,
                                                          onSubmit: onSubmit,
                                                          placeholder: true,
                                                          autosave: true,
                                                          autosaveDelay: AUTO_SAVE_DELAY,
                                                          submitField: function () {
                                                            return (0, jsx_runtime_1.jsx)(
                                                              jsx_runtime_1.Fragment,
                                                              {},
                                                              void 0
                                                            );
                                                          },
                                                          errorsField: function () {
                                                            return (0, jsx_runtime_1.jsx)(
                                                              jsx_runtime_1.Fragment,
                                                              {},
                                                              void 0
                                                            );
                                                          },
                                                          locale: locale,
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
                                { className: "kogito--dmn-form__content" },
                                {
                                  children: (0, jsx_runtime_1.jsxs)(
                                    Page_1.Page,
                                    __assign(
                                      { className: "kogito--dmn-form__content-page" },
                                      {
                                        children: [
                                          (0, jsx_runtime_1.jsx)(
                                            Page_1.PageSection,
                                            __assign(
                                              { className: "kogito--dmn-form__content-header" },
                                              {
                                                children: (0, jsx_runtime_1.jsx)(
                                                  Text_1.TextContent,
                                                  {
                                                    children: (0, jsx_runtime_1.jsx)(
                                                      Text_1.Text,
                                                      __assign(
                                                        { component: Text_1.TextVariants.h3 },
                                                        { children: i18n.terms.outputs }
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
                                          (0, jsx_runtime_1.jsx)(
                                            "div",
                                            __assign(
                                              { className: "kogito--dmn-form__content-body" },
                                              {
                                                children: (0, jsx_runtime_1.jsx)(
                                                  Page_1.PageSection,
                                                  __assign(
                                                    {
                                                      isFilled: true,
                                                      className: "kogito--dmn-form__content-body-output",
                                                    },
                                                    {
                                                      children: (0, jsx_runtime_1.jsx)(
                                                        dmn_1.DmnFormResult,
                                                        {
                                                          results: formOutputs,
                                                          differences: formOutputDiffs,
                                                          locale: locale,
                                                          notificationsPanel: false,
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
        ],
      }
    ),
    void 0
  );
}
exports.DmnFormPage = DmnFormPage;
//# sourceMappingURL=DmnFormPage.js.map
