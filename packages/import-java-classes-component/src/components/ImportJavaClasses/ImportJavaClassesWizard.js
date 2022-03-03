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
exports.ImportJavaClassesWizard = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var i18n_1 = require("../../i18n");
var ImportJavaClassesWizardFirstStep_1 = require("./ImportJavaClassesWizardFirstStep");
var ImportJavaClassesWizardSecondStep_1 = require("./ImportJavaClassesWizardSecondStep");
var ImportJavaClassesWizardThirdStep_1 = require("./ImportJavaClassesWizardThirdStep");
var react_1 = require("react");
var JavaClass_1 = require("./model/JavaClass");
var DMNSimpleType_1 = require("./model/DMNSimpleType");
var JavaClassUtils_1 = require("./model/JavaClassUtils");
var react_core_1 = require("@patternfly/react-core");
var ImportJavaClassesWizard = function (_a) {
  var gwtLayerService = _a.gwtLayerService,
    javaCodeCompletionService = _a.javaCodeCompletionService;
  var i18n = (0, i18n_1.useImportJavaClassesWizardI18n)().i18n;
  var _b = __read((0, react_1.useState)([]), 2),
    javaClasses = _b[0],
    setJavaClasses = _b[1];
  var _c = __read((0, react_1.useState)(false), 2),
    isOpen = _c[0],
    setOpen = _c[1];
  var _d = __read((0, react_1.useState)("loading"), 2),
    buttonStatus = _d[0],
    setButtonStatus = _d[1];
  (0, react_1.useEffect)(
    function () {
      try {
        javaCodeCompletionService
          .isLanguageServerAvailable()
          .then(function (available) {
            setButtonStatus(available ? "enable" : "disable");
          })
          .catch(function (reason) {
            setButtonStatus("error");
            console.error(reason);
          });
      } catch (error) {
        setButtonStatus("error");
        console.error(error);
      }
    },
    [javaCodeCompletionService]
  );
  var isButtonDisabled = (0, react_1.useCallback)(
    function () {
      return "enable" !== buttonStatus;
    },
    [buttonStatus]
  );
  var isButtonLoading = (0, react_1.useCallback)(
    function () {
      return "loading" == buttonStatus;
    },
    [buttonStatus]
  );
  var defineTooltipMessage = (0, react_1.useCallback)(
    function () {
      if ("disable" === buttonStatus) {
        return i18n.modalButton.disabledMessage;
      } else if ("error" === buttonStatus) {
        return i18n.modalButton.errorMessage;
      }
      return undefined;
    },
    [buttonStatus, i18n.modalButton.disabledMessage, i18n.modalButton.errorMessage]
  );
  var updateJavaFieldsReferences = (0, react_1.useCallback)(
    function (updatedJavaClasses, previousJavaClasses) {
      var updatedJavaClassesNames = updatedJavaClasses.map(function (javaClass) {
        return javaClass.name;
      });
      var previousJavaClassesNames = previousJavaClasses.map(function (javaClass) {
        return javaClass.name;
      });
      var allFields = javaClasses
        .map(function (javaClass) {
          return javaClass.fields;
        })
        .flat(1);
      allFields.forEach(function (field) {
        if (field.dmnTypeRef === DMNSimpleType_1.DMNSimpleType.ANY && updatedJavaClassesNames.includes(field.type)) {
          field.dmnTypeRef = (0, JavaClassUtils_1.getJavaClassSimpleName)(field.type);
        } else if (previousJavaClassesNames.includes(field.type) && !updatedJavaClassesNames.includes(field.type)) {
          field.dmnTypeRef = DMNSimpleType_1.DMNSimpleType.ANY;
        }
      });
    },
    [javaClasses]
  );
  var addJavaClass = (0, react_1.useCallback)(
    function (fullClassName) {
      setJavaClasses(function (prevState) {
        if (
          !prevState.some(function (javaClass) {
            return javaClass.name === fullClassName;
          })
        ) {
          var updatedSelectedJavaClasses = __spreadArray(
            __spreadArray([], __read(prevState), false),
            [new JavaClass_1.JavaClass(fullClassName)],
            false
          );
          updatedSelectedJavaClasses.sort(function (a, b) {
            return a.name < b.name ? -1 : 1;
          });
          updateJavaFieldsReferences(updatedSelectedJavaClasses, prevState);
          return updatedSelectedJavaClasses;
        }
        return prevState;
      });
    },
    [updateJavaFieldsReferences]
  );
  var removeJavaClass = (0, react_1.useCallback)(
    function (fullClassName) {
      setJavaClasses(function (prevState) {
        var updatedSelectedJavaClasses = prevState.filter(function (javaClass) {
          return javaClass.name !== fullClassName;
        });
        updateJavaFieldsReferences(updatedSelectedJavaClasses, prevState);
        return updatedSelectedJavaClasses;
      });
    },
    [updateJavaFieldsReferences]
  );
  var updateSelectedClassesFields = (0, react_1.useCallback)(function (fullClassName, fields) {
    setJavaClasses(function (prevState) {
      var updatedJavaClasses = __spreadArray([], __read(prevState), false);
      var javaClassIndex = updatedJavaClasses.findIndex(function (javaClass) {
        return javaClass.name === fullClassName;
      });
      if (javaClassIndex > -1) {
        updatedJavaClasses[javaClassIndex].setFields(fields);
      }
      return updatedJavaClasses;
    });
  }, []);
  var isSecondStepActivatable = (0, react_1.useCallback)(
    function () {
      return javaClasses.length > 0;
    },
    [javaClasses]
  );
  var isThirdStepActivatable = (0, react_1.useCallback)(
    function () {
      return (
        javaClasses.length > 0 &&
        javaClasses.every(function (javaClass) {
          return javaClass.fieldsLoaded;
        })
      );
    },
    [javaClasses]
  );
  var handleButtonClick = (0, react_1.useCallback)(function () {
    return setOpen(function (prevState) {
      return !prevState;
    });
  }, []);
  var handleWizardClose = (0, react_1.useCallback)(
    function () {
      handleButtonClick();
      setJavaClasses([]);
    },
    [handleButtonClick]
  );
  var handleWizardSave = (0, react_1.useCallback)(
    function () {
      handleWizardClose();
      gwtLayerService.importJavaClassesInDataTypeEditor(javaClasses);
    },
    [javaClasses, handleWizardClose, gwtLayerService]
  );
  var steps = [
    {
      canJumpTo: true,
      component: (0, jsx_runtime_1.jsx)(
        ImportJavaClassesWizardFirstStep_1.ImportJavaClassesWizardFirstStep,
        {
          javaCodeCompletionService: javaCodeCompletionService,
          onAddJavaClass: addJavaClass,
          onRemoveJavaClass: removeJavaClass,
          selectedJavaClasses: javaClasses,
        },
        void 0
      ),
      enableNext: isSecondStepActivatable(),
      hideBackButton: true,
      name: i18n.modalWizard.firstStep.stepName,
    },
    {
      canJumpTo: isSecondStepActivatable(),
      component: (0, jsx_runtime_1.jsx)(
        ImportJavaClassesWizardSecondStep_1.ImportJavaClassesWizardSecondStep,
        {
          javaCodeCompletionService: javaCodeCompletionService,
          onAddJavaClass: addJavaClass,
          onSelectedJavaClassedFieldsLoaded: updateSelectedClassesFields,
          selectedJavaClasses: javaClasses,
        },
        void 0
      ),
      enableNext: isThirdStepActivatable(),
      name: i18n.modalWizard.secondStep.stepName,
    },
    {
      canJumpTo: isThirdStepActivatable(),
      component: (0, jsx_runtime_1.jsx)(
        ImportJavaClassesWizardThirdStep_1.ImportJavaClassesWizardThirdStep,
        { selectedJavaClasses: javaClasses },
        void 0
      ),
      name: i18n.modalWizard.thirdStep.stepName,
      nextButtonText: i18n.modalWizard.thirdStep.nextButtonText,
    },
  ];
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        defineTooltipMessage()
          ? (0, jsx_runtime_1.jsx)(
              react_core_1.Tooltip,
              __assign(
                { content: defineTooltipMessage() },
                {
                  children: (0, jsx_runtime_1.jsx)(
                    react_core_1.Button,
                    __assign(
                      {
                        "data-testid": "modal-wizard-button",
                        isAriaDisabled: isButtonDisabled(),
                        isLoading: isButtonLoading(),
                        onClick: handleButtonClick,
                        variant: "secondary",
                      },
                      { children: i18n.modalButton.text }
                    ),
                    void 0
                  ),
                }
              ),
              void 0
            )
          : (0, jsx_runtime_1.jsx)(
              react_core_1.Button,
              __assign(
                {
                  "data-testid": "modal-wizard-button",
                  isAriaDisabled: isButtonDisabled(),
                  isLoading: isButtonLoading(),
                  onClick: handleButtonClick,
                  variant: "secondary",
                },
                { children: i18n.modalButton.text }
              ),
              void 0
            ),
        isOpen
          ? (0, jsx_runtime_1.jsx)(
              react_core_1.Modal,
              __assign(
                {
                  description: i18n.modalWizard.description,
                  isOpen: isOpen,
                  onClose: handleWizardClose,
                  title: i18n.modalWizard.title,
                  variant: react_core_1.ModalVariant.large,
                },
                {
                  children: (0, jsx_runtime_1.jsx)(
                    react_core_1.Wizard,
                    {
                      className: "import-java-classes",
                      height: 600,
                      onClose: handleWizardClose,
                      onSave: handleWizardSave,
                      steps: steps,
                    },
                    void 0
                  ),
                }
              ),
              void 0
            )
          : null,
      ],
    },
    void 0
  );
};
exports.ImportJavaClassesWizard = ImportJavaClassesWizard;
//# sourceMappingURL=ImportJavaClassesWizard.js.map
