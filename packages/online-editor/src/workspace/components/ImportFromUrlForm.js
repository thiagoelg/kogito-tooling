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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportFromUrlForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var check_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/check-circle-icon");
var exclamation_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-circle-icon");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var react_1 = require("react");
var ImportableUrlHooks_1 = require("../hooks/ImportableUrlHooks");
var constants_1 = require("@patternfly/react-core/dist/js/helpers/constants");
function ImportFromUrlForm(props) {
  var importableUrl = (0, ImportableUrlHooks_1.useImportableUrl)(props.url, props.allowedTypes);
  var onSubmit = (0, react_1.useCallback)(
    function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (importableUrl.error) {
        return;
      }
      props.onSubmit();
    },
    [importableUrl.error, props]
  );
  var validatedOption = (0, react_1.useMemo)(
    function () {
      if (!props.url) {
        return constants_1.ValidatedOptions.default;
      }
      if (importableUrl.error || props.importingError) {
        return constants_1.ValidatedOptions.error;
      }
      return constants_1.ValidatedOptions.success;
    },
    [props.url, props.importingError, importableUrl.error]
  );
  var displayError = (0, react_1.useMemo)(
    function () {
      if (importableUrl.error) {
        return importableUrl.error;
      }
      if (props.importingError) {
        return "Error: ".concat(props.importingError);
      }
      return "";
    },
    [importableUrl.error, props.importingError]
  );
  return (0, jsx_runtime_1.jsx)(
    Form_1.Form,
    __assign(
      { onSubmit: onSubmit },
      {
        children: (0, jsx_runtime_1.jsx)(
          Form_1.FormGroup,
          __assign(
            {
              helperTextInvalid: displayError,
              helperText: (0, jsx_runtime_1.jsx)(
                Form_1.FormHelperText,
                {
                  icon: (0, jsx_runtime_1.jsx)(check_circle_icon_1.CheckCircleIcon, {}, void 0),
                  isHidden: false,
                  style: { visibility: "hidden" },
                },
                void 0
              ),
              helperTextInvalidIcon: (0, jsx_runtime_1.jsx)(
                exclamation_circle_icon_1.ExclamationCircleIcon,
                {},
                void 0
              ),
              fieldId: "import-url-form-input",
              validated: validatedOption,
            },
            {
              children: (0, jsx_runtime_1.jsx)(
                TextInput_1.TextInput,
                {
                  ref: props.urlInputRef,
                  id: "import-url-form-input",
                  ouiaId: "import-url-form-input",
                  validated: validatedOption,
                  isRequired: true,
                  placeholder: "URL",
                  value: props.url,
                  onChange: props.onChange,
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
  );
}
exports.ImportFromUrlForm = ImportFromUrlForm;
//# sourceMappingURL=ImportFromUrlForm.js.map
