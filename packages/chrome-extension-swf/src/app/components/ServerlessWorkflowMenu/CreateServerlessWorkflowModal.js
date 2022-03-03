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
exports.CreateServerlessWorkflowModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("@kie-tools-core/editor/dist/api");
var embedded_1 = require("@kie-tools-core/editor/dist/embedded");
var Alert_1 = require("@patternfly/react-core/dist/js/components/Alert");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var InputGroup_1 = require("@patternfly/react-core/dist/js/components/InputGroup");
var Modal_1 = require("@patternfly/react-core/dist/js/components/Modal");
var Popover_1 = require("@patternfly/react-core/dist/js/components/Popover");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var help_icon_1 = require("@patternfly/react-icons/dist/js/icons/help-icon");
var times_icon_1 = require("@patternfly/react-icons/dist/js/icons/times-icon");
var react_1 = require("react");
var i18n_1 = require("../../i18n");
var OpenShiftContext_1 = require("../../openshift/OpenShiftContext");
var OpenShiftSettingsConfig_1 = require("../../openshift/OpenShiftSettingsConfig");
var GlobalContext_1 = require("../common/GlobalContext");
var LoadingSpinner_1 = require("../common/LoadingSpinner");
var FormValiationOptions;
(function (FormValiationOptions) {
  FormValiationOptions["INITIAL"] = "INITIAL";
  FormValiationOptions["ERROR"] = "ERROR";
  FormValiationOptions["SUCCESS"] = "SUCCESS";
})(FormValiationOptions || (FormValiationOptions = {}));
var DEFAULT_NAME = "Untitled";
var DEFAULT_FILENAME = "".concat(DEFAULT_NAME, ".").concat(OpenShiftContext_1.SW_JSON_EXTENSION);
function CreateServerlessWorkflowModal(props) {
  var _this = this;
  var globals = (0, GlobalContext_1.useGlobals)();
  var openshift = (0, OpenShiftContext_1.useOpenShift)();
  var locale = (0, i18n_1.useChromeExtensionI18n)().locale;
  var _a = (0, embedded_1.useEditorRef)(),
    editor = _a.editor,
    editorRef = _a.editorRef;
  var _b = __read((0, react_1.useState)(DEFAULT_NAME), 2),
    workflowName = _b[0],
    setWorkflowName = _b[1];
  var _c = __read((0, react_1.useState)(false), 2),
    isLoading = _c[0],
    setLoading = _c[1];
  var _d = __read((0, react_1.useState)(FormValiationOptions.INITIAL), 2),
    deployStatus = _d[0],
    setDeployStatus = _d[1];
  var fileName = (0, react_1.useMemo)(
    function () {
      return "".concat(workflowName, ".").concat(OpenShiftContext_1.SW_JSON_EXTENSION);
    },
    [workflowName]
  );
  var isEditorReady = (0, react_1.useMemo)(
    function () {
      return editor === null || editor === void 0 ? void 0 : editor.isReady;
    },
    [editor]
  );
  var file = (0, react_1.useMemo)(function () {
    return {
      fileName: DEFAULT_FILENAME,
      fileExtension: OpenShiftContext_1.SW_JSON_EXTENSION,
      getFileContents: function () {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            return [2, ""];
          });
        });
      },
      isReadOnly: false,
      path: DEFAULT_FILENAME,
    };
  }, []);
  var close = (0, react_1.useCallback)(
    function () {
      setDeployStatus(FormValiationOptions.INITIAL);
      props.onClose();
    },
    [props]
  );
  var onDeploy = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var content, success;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              setDeployStatus(FormValiationOptions.INITIAL);
              return [4, editor === null || editor === void 0 ? void 0 : editor.getContent()];
            case 1:
              content = _a.sent();
              if (!content) {
                setDeployStatus(FormValiationOptions.ERROR);
                return [2];
              }
              setLoading(true);
              return [
                4,
                openshift.deploy(props.config, {
                  name: fileName,
                  content: content,
                }),
              ];
            case 2:
              success = _a.sent();
              setLoading(false);
              setDeployStatus(success ? FormValiationOptions.SUCCESS : FormValiationOptions.ERROR);
              return [2];
          }
        });
      });
    },
    [editor, openshift, props.config, fileName]
  );
  var onClearWorkflowName = (0, react_1.useCallback)(function () {
    return setWorkflowName("");
  }, []);
  var onWorkflowNameChanged = (0, react_1.useCallback)(function (newValue) {
    setWorkflowName(newValue);
  }, []);
  return (0, jsx_runtime_1.jsxs)(
    Modal_1.Modal,
    __assign(
      {
        width: "75%",
        showClose: true,
        variant: Modal_1.ModalVariant.large,
        title: "Serverless Workflow",
        isOpen: props.isOpen,
        onClose: close,
        actions: [
          (0, jsx_runtime_1.jsx)(
            Button_1.Button,
            __assign(
              {
                isDisabled:
                  !(0, OpenShiftSettingsConfig_1.isConfigValid)(props.config) || workflowName.trim().length === 0,
                variant: "primary",
                onClick: onDeploy,
                isLoading: isLoading,
                spinnerAriaValueText: isLoading ? "Loading" : undefined,
              },
              { children: isLoading ? "Deploying" : "Deploy" }
            ),
            "deploy"
          ),
        ],
      },
      {
        children: [
          deployStatus === FormValiationOptions.ERROR &&
            (0, jsx_runtime_1.jsx)(
              Alert_1.Alert,
              {
                className: "pf-u-mb-md",
                variant: "danger",
                title: "Something went wrong while deploying. Check your OpenShift connection and try again.",
                "aria-live": "polite",
                isInline: true,
                "data-testid": "alert-deploy-error",
              },
              void 0
            ),
          deployStatus === FormValiationOptions.SUCCESS &&
            (0, jsx_runtime_1.jsx)(
              Alert_1.Alert,
              {
                className: "pf-u-mb-md",
                variant: "info",
                title: "The deployment has been started successfully",
                "aria-live": "polite",
                isInline: true,
                "data-testid": "alert-deploy-success",
              },
              void 0
            ),
          (0, jsx_runtime_1.jsxs)(
            "div",
            __assign(
              { style: { marginTop: "24px" } },
              {
                children: [
                  (0, jsx_runtime_1.jsx)(
                    Form_1.Form,
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        Form_1.FormGroup,
                        __assign(
                          {
                            label: "Workflow Name",
                            labelIcon: (0, jsx_runtime_1.jsx)(
                              Popover_1.Popover,
                              __assign(
                                { bodyContent: "Workflow Name" },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    "button",
                                    __assign(
                                      {
                                        type: "button",
                                        "aria-label": "More info for workflow name field",
                                        onClick: function (e) {
                                          return e.preventDefault();
                                        },
                                        "aria-describedby": "workflow-name-field",
                                        className: "pf-c-form__group-label-help",
                                      },
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          help_icon_1.default,
                                          { noVerticalAlign: true },
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
                            isRequired: true,
                            fieldId: "workflow-name-field",
                          },
                          {
                            children: (0, jsx_runtime_1.jsxs)(
                              InputGroup_1.InputGroup,
                              {
                                children: [
                                  (0, jsx_runtime_1.jsx)(
                                    TextInput_1.TextInput,
                                    {
                                      autoComplete: "off",
                                      type: "text",
                                      id: "workflow-name-field",
                                      name: "workflow-name-field",
                                      "aria-label": "Workflow name field",
                                      "aria-describedby": "workflow-name-field-helper",
                                      value: workflowName,
                                      onChange: onWorkflowNameChanged,
                                      tabIndex: 5,
                                      "data-testid": "workflow-name-text-field",
                                    },
                                    void 0
                                  ),
                                  (0, jsx_runtime_1.jsx)(
                                    InputGroup_1.InputGroupText,
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        Button_1.Button,
                                        __assign(
                                          {
                                            isSmall: true,
                                            variant: "plain",
                                            "aria-label": "Clear workflow name button",
                                            onClick: onClearWorkflowName,
                                          },
                                          { children: (0, jsx_runtime_1.jsx)(times_icon_1.TimesIcon, {}, void 0) }
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
                          }
                        ),
                        void 0
                      ),
                    },
                    void 0
                  ),
                  (0, jsx_runtime_1.jsxs)(
                    "div",
                    __assign(
                      { style: { height: "600px", marginTop: "24px" } },
                      {
                        children: [
                          !isEditorReady && (0, jsx_runtime_1.jsx)(LoadingSpinner_1.LoadingSpinner, {}, void 0),
                          (0, jsx_runtime_1.jsx)(
                            "div",
                            __assign(
                              { style: { display: isEditorReady ? "inline" : "none" } },
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  embedded_1.EmbeddedEditor,
                                  {
                                    ref: editorRef,
                                    file: file,
                                    channelType: api_1.ChannelType.EMBEDDED,
                                    editorEnvelopeLocator: globals.envelopeLocator,
                                    locale: locale,
                                  },
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
                ],
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
exports.CreateServerlessWorkflowModal = CreateServerlessWorkflowModal;
//# sourceMappingURL=CreateServerlessWorkflowModal.js.map
