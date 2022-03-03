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
exports.FileLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Label_1 = require("@patternfly/react-core/dist/js/components/Label");
var bpmnLabel = { color: "green", label: "Workflow" };
var dmnLabel = { color: "blue", label: "Decision" };
var pmmlLabel = { color: "purple", label: "Scorecard" };
var labelColors = new Map([
  ["bpmn", bpmnLabel],
  ["BPMN", bpmnLabel],
  ["bpmn2", bpmnLabel],
  ["BPMN2", bpmnLabel],
  ["dmn", dmnLabel],
  ["DMN", dmnLabel],
  ["pmml", pmmlLabel],
  ["PMML", pmmlLabel],
]);
function FileLabel(props) {
  var _a, _b, _c, _d, _e;
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children:
        props.extension &&
        (0, jsx_runtime_1.jsx)(
          Label_1.Label,
          __assign(
            {
              style: (_a = props.style) !== null && _a !== void 0 ? _a : {},
              color:
                (_c = (_b = labelColors.get(props.extension)) === null || _b === void 0 ? void 0 : _b.color) !== null &&
                _c !== void 0
                  ? _c
                  : "grey",
            },
            {
              children:
                (_e = (_d = labelColors.get(props.extension)) === null || _d === void 0 ? void 0 : _d.label) !== null &&
                _e !== void 0
                  ? _e
                  : props.extension.toUpperCase(),
            }
          ),
          void 0
        ),
    },
    void 0
  );
}
exports.FileLabel = FileLabel;
//# sourceMappingURL=FileLabel.js.map
