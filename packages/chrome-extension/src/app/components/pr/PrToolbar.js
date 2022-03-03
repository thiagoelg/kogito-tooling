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
exports.PrToolbar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var FileStatusOnPr_1 = require("./FileStatusOnPr");
var i18n_1 = require("../../i18n");
function PrToolbar(props) {
  var i18n = (0, i18n_1.useChromeExtensionI18n)().i18n;
  var closeDiagram = function (e) {
    e.preventDefault();
    props.closeDiagram();
  };
  var seeAsDiagram = function (e) {
    e.preventDefault();
    props.onSeeAsDiagram();
  };
  var toggleOriginal = function (e) {
    e.preventDefault();
    props.toggleOriginal();
  };
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        !props.textMode &&
          (0, jsx_runtime_1.jsx)(
            "button",
            __assign(
              { disabled: props.textMode, className: "btn btn-sm kogito-button", onClick: closeDiagram },
              { children: i18n.pr.toolbar.closeDiagram }
            ),
            void 0
          ),
        props.textMode &&
          (0, jsx_runtime_1.jsx)(
            "button",
            __assign({ className: "btn btn-sm kogito-button", onClick: seeAsDiagram }, { children: i18n.seeAsDiagram }),
            void 0
          ),
        !props.textMode &&
          props.fileStatusOnPr === FileStatusOnPr_1.FileStatusOnPr.CHANGED &&
          props.showOriginalChangesToggle &&
          (0, jsx_runtime_1.jsxs)(
            "div",
            __assign(
              { className: "BtnGroup mr-1" },
              {
                children: [
                  (0, jsx_runtime_1.jsx)(
                    "button",
                    __assign(
                      {
                        disabled: props.originalDiagram,
                        className: "btn btn-sm BtnGroup-item " + (props.originalDiagram ? "disabled" : ""),
                        type: "button",
                        onClick: toggleOriginal,
                      },
                      { children: i18n.pr.toolbar.original }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    "button",
                    __assign(
                      {
                        disabled: !props.originalDiagram,
                        className: "btn btn-sm BtnGroup-item " + (!props.originalDiagram ? "disabled" : ""),
                        type: "button",
                        onClick: toggleOriginal,
                      },
                      { children: i18n.pr.toolbar.changes }
                    ),
                    void 0
                  ),
                ],
              }
            ),
            void 0
          ),
      ],
    },
    void 0
  );
}
exports.PrToolbar = PrToolbar;
//# sourceMappingURL=PrToolbar.js.map
