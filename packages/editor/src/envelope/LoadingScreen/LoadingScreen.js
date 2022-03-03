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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingScreen = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Spinner_1 = require("@patternfly/react-core/dist/js/components/Spinner");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var Bullseye_1 = require("@patternfly/react-core/dist/js/layouts/Bullseye");
var i18n_1 = require("../i18n");
function LoadingScreen(props) {
  var _a = __read((0, react_1.useState)(true), 2),
    mustRender = _a[0],
    setMustRender = _a[1];
  var i18n = (0, i18n_1.useEditorEnvelopeI18nContext)().i18n;
  var onAnimationEnd = (0, react_1.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    setMustRender(false);
  }, []);
  var loadingScreenClassName = (0, react_1.useMemo)(
    function () {
      if (props.loading) {
        return "";
      }
      return "loading-finished";
    },
    [props.loading]
  );
  (0, react_1.useLayoutEffect)(
    function () {
      if (props.loading) {
        setMustRender(true);
      }
    },
    [props.loading]
  );
  return (
    (mustRender &&
      (0, jsx_runtime_1.jsx)(
        "div",
        __assign(
          { id: "loading-screen", className: "kie-tools--loading-screen" },
          {
            children: (0, jsx_runtime_1.jsx)(
              "div",
              __assign(
                {
                  className: "kie-tools--loading-screen ".concat(loadingScreenClassName),
                  onAnimationEnd: onAnimationEnd,
                  "data-testid": "loading-screen-div",
                },
                {
                  children: (0, jsx_runtime_1.jsx)(
                    Bullseye_1.Bullseye,
                    {
                      children: (0, jsx_runtime_1.jsxs)(
                        "div",
                        __assign(
                          { className: "kie-tools--loading-screen-spinner" },
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                "div",
                                { children: (0, jsx_runtime_1.jsx)(Spinner_1.Spinner, {}, void 0) },
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                Title_1.Title,
                                __assign({ headingLevel: "h5" }, { children: i18n.loadingScreen.loading }),
                                void 0
                              ),
                            ],
                          }
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
          }
        ),
        void 0
      )) ||
    (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0)
  );
}
exports.LoadingScreen = LoadingScreen;
//# sourceMappingURL=LoadingScreen.js.map
