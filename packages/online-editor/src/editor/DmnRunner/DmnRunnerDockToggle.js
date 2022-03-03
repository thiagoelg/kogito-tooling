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
exports.DmnRunnerDockToggle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ToggleGroup_1 = require("@patternfly/react-core/dist/js/components/ToggleGroup");
var EditorPageDockDrawer_1 = require("../EditorPageDockDrawer");
var table_icon_1 = require("@patternfly/react-icons/dist/js/icons/table-icon");
function DmnRunnerDockToggle(props) {
  return (0, jsx_runtime_1.jsx)(
    ToggleGroup_1.ToggleGroupItem,
    {
      style: {
        borderLeft: "solid 1px",
        borderRadius: 0,
        borderColor: "rgb(211, 211, 211)",
        padding: "1px",
      },
      buttonId: EditorPageDockDrawer_1.PanelId.DMN_RUNNER_TABULAR,
      isSelected: props.isSelected,
      onChange: function () {
        return props.onChange(EditorPageDockDrawer_1.PanelId.DMN_RUNNER_TABULAR);
      },
      text: (0, jsx_runtime_1.jsxs)(
        "div",
        __assign(
          { style: { display: "flex" } },
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                "div",
                __assign(
                  { style: { paddingRight: "5px", width: "30px" } },
                  { children: (0, jsx_runtime_1.jsx)(table_icon_1.TableIcon, {}, void 0) }
                ),
                void 0
              ),
              "Run",
            ],
          }
        ),
        void 0
      ),
    },
    void 0
  );
}
exports.DmnRunnerDockToggle = DmnRunnerDockToggle;
//# sourceMappingURL=DmnRunnerDockToggle.js.map
