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
exports.DmnRunnerDrawer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var DmnRunnerDrawerPanelContent_1 = require("./DmnRunnerDrawerPanelContent");
var Drawer_1 = require("@patternfly/react-core/dist/js/components/Drawer");
var DmnRunnerContext_1 = require("./DmnRunnerContext");
var DmnRunnerStatus_1 = require("./DmnRunnerStatus");
function DmnRunnerDrawer(props) {
  var dmnRunnerState = (0, DmnRunnerContext_1.useDmnRunnerState)();
  return (0, jsx_runtime_1.jsx)(
    Drawer_1.Drawer,
    __assign(
      {
        isInline: true,
        isExpanded: dmnRunnerState.isExpanded && dmnRunnerState.mode === DmnRunnerStatus_1.DmnRunnerMode.FORM,
      },
      {
        children: (0, jsx_runtime_1.jsx)(
          Drawer_1.DrawerContent,
          __assign(
            {
              className: !dmnRunnerState.isExpanded
                ? "kogito--editor__drawer-content-onClose"
                : "kogito--editor__drawer-content-open",
              panelContent: (0, jsx_runtime_1.jsx)(
                DmnRunnerDrawerPanelContent_1.DmnRunnerDrawerPanelContent,
                { workspaceFile: props.workspaceFile, editorPageDock: props.editorPageDock },
                void 0
              ),
            },
            {
              children: (0, jsx_runtime_1.jsx)(
                Drawer_1.DrawerContentBody,
                __assign({ className: "kogito--editor__drawer-content-body" }, { children: props.children }),
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
exports.DmnRunnerDrawer = DmnRunnerDrawer;
//# sourceMappingURL=DmnRunnerDrawer.js.map
