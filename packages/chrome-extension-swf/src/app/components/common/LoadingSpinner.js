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
exports.LoadingSpinner = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Spinner_1 = require("@patternfly/react-core/dist/js/components/Spinner");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var Bullseye_1 = require("@patternfly/react-core/dist/js/layouts/Bullseye");
function LoadingSpinner() {
  return (0, jsx_runtime_1.jsx)(
    Bullseye_1.Bullseye,
    {
      children: (0, jsx_runtime_1.jsxs)(
        "div",
        __assign(
          {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
          },
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                "div",
                { children: (0, jsx_runtime_1.jsx)(Spinner_1.Spinner, {}, void 0) },
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                Title_1.Title,
                __assign({ headingLevel: "h5" }, { children: "Loading..." }),
                void 0
              ),
            ],
          }
        ),
        void 0
      ),
    },
    void 0
  );
}
exports.LoadingSpinner = LoadingSpinner;
//# sourceMappingURL=LoadingSpinner.js.map
