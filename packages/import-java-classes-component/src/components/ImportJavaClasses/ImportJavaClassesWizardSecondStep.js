"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportJavaClassesWizardSecondStep = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_core_1 = require("@patternfly/react-core");
var react_1 = require("react");
var ImportJavaClassesWizardFieldListTable_1 = require("./ImportJavaClassesWizardFieldListTable");
var JavaField_1 = require("./model/JavaField");
var DMNSimpleType_1 = require("./model/DMNSimpleType");
var JavaClassUtils_1 = require("./model/JavaClassUtils");
var ImportJavaClassesWizardSecondStep = function (_a) {
  var javaCodeCompletionService = _a.javaCodeCompletionService,
    onAddJavaClass = _a.onAddJavaClass,
    onSelectedJavaClassedFieldsLoaded = _a.onSelectedJavaClassedFieldsLoaded,
    selectedJavaClasses = _a.selectedJavaClasses;
  var generateJavaClassField = (0, react_1.useCallback)(function (name, type, javaClasses) {
    var dmnTypeRef =
      DMNSimpleType_1.JAVA_TO_DMN_MAP.get((0, JavaClassUtils_1.getJavaClassSimpleName)(type)) ||
      DMNSimpleType_1.DMNSimpleType.ANY;
    if (
      dmnTypeRef === DMNSimpleType_1.DMNSimpleType.ANY &&
      javaClasses.some(function (javaClass) {
        return javaClass.name === type;
      })
    ) {
      dmnTypeRef = (0, JavaClassUtils_1.getJavaClassSimpleName)(type);
    }
    return new JavaField_1.JavaField(name, type, dmnTypeRef);
  }, []);
  var loadJavaFields = (0, react_1.useCallback)(
    function (className) {
      try {
        javaCodeCompletionService
          .getFields(className)
          .then(function (javaCodeCompletionFields) {
            var retrievedFields = javaCodeCompletionFields.map(function (javaCodeCompletionField) {
              return generateJavaClassField(
                javaCodeCompletionField.accessor,
                javaCodeCompletionField.fqcn,
                selectedJavaClasses
              );
            });
            retrievedFields.sort(function (a, b) {
              return a.name < b.name ? -1 : 1;
            });
            onSelectedJavaClassedFieldsLoaded(className, retrievedFields);
          })
          .catch(function (reason) {
            console.error(reason);
          });
      } catch (error) {
        console.error(error);
      }
    },
    [generateJavaClassField, javaCodeCompletionService, onSelectedJavaClassedFieldsLoaded, selectedJavaClasses]
  );
  (0, react_1.useEffect)(
    function () {
      return selectedJavaClasses
        .filter(function (javaClass) {
          return !javaClass.fieldsLoaded;
        })
        .forEach(function (javaClass) {
          return loadJavaFields(javaClass.name);
        });
    },
    [selectedJavaClasses, loadJavaFields]
  );
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: selectedJavaClasses.some(function (javaClass) {
        return !javaClass.fieldsLoaded;
      })
        ? (0, jsx_runtime_1.jsx)(
            react_core_1.Bullseye,
            { children: (0, jsx_runtime_1.jsx)(react_core_1.Spinner, { isSVG: true }, void 0) },
            void 0
          )
        : (0, jsx_runtime_1.jsx)(
            ImportJavaClassesWizardFieldListTable_1.ImportJavaClassesWizardFieldListTable,
            { selectedJavaClassFields: selectedJavaClasses, loadJavaClass: onAddJavaClass },
            void 0
          ),
    },
    void 0
  );
};
exports.ImportJavaClassesWizardSecondStep = ImportJavaClassesWizardSecondStep;
//# sourceMappingURL=ImportJavaClassesWizardSecondStep.js.map
