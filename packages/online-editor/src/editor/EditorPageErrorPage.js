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
exports.EditorPageErrorPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var react_core_1 = require("@patternfly/react-core");
var exclamation_triangle_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var react_1 = require("react");
var Hooks_1 = require("../navigation/Hooks");
var react_router_1 = require("react-router");
var ClipboardCopy_1 = require("@patternfly/react-core/dist/js/components/ClipboardCopy");
function EditorPageErrorPage(props) {
  var routes = (0, Hooks_1.useRoutes)();
  var history = (0, react_router_1.useHistory)();
  var _a = __read((0, react_1.useState)(false), 2),
    showDetails = _a[0],
    setShowDetails = _a[1];
  var returnHome = (0, react_1.useCallback)(
    function () {
      history.push({ pathname: routes.home.path({}) });
    },
    [history, routes]
  );
  var detailsString = (0, react_1.useMemo)(
    function () {
      return props.errors.join("\n");
    },
    [props.errors]
  );
  return (0, jsx_runtime_1.jsxs)(
    Page_1.PageSection,
    __assign(
      { isFilled: true, padding: { default: "noPadding" } },
      {
        children: [
          (0, jsx_runtime_1.jsx)("br", {}, void 0),
          (0, jsx_runtime_1.jsx)("br", {}, void 0),
          (0, jsx_runtime_1.jsx)("br", {}, void 0),
          (0, jsx_runtime_1.jsx)("br", {}, void 0),
          (0, jsx_runtime_1.jsx)("br", {}, void 0),
          (0, jsx_runtime_1.jsxs)(
            EmptyState_1.EmptyState,
            {
              children: [
                (0, jsx_runtime_1.jsx)(
                  react_core_1.EmptyStateIcon,
                  { icon: exclamation_triangle_icon_1.ExclamationTriangleIcon },
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(
                  Text_1.TextContent,
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      Text_1.Text,
                      __assign({ component: "h2" }, { children: "Can't open file" }),
                      void 0
                    ),
                  },
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(
                  EmptyState_1.EmptyStateBody,
                  {
                    children: (0, jsx_runtime_1.jsxs)(
                      Page_1.PageSection,
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            __assign(
                              { style: { textOverflow: "ellipsis", overflow: "hidden" } },
                              { children: 'There was an error opening "'.concat(props.path, '".') }
                            ),
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          props.errors &&
                            (0, jsx_runtime_1.jsxs)(
                              jsx_runtime_1.Fragment,
                              {
                                children: [
                                  (0, jsx_runtime_1.jsx)(
                                    Button_1.Button,
                                    __assign(
                                      {
                                        variant: Button_1.ButtonVariant.link,
                                        onClick: function () {
                                          return setShowDetails(function (prev) {
                                            return !prev;
                                          });
                                        },
                                      },
                                      { children: showDetails ? "Hide details" : "Show details" }
                                    ),
                                    void 0
                                  ),
                                  showDetails &&
                                    (0, jsx_runtime_1.jsx)(
                                      Page_1.PageSection,
                                      __assign(
                                        {
                                          variant: "light",
                                          isFilled: true,
                                          style: { height: "100%", minWidth: "1000px" },
                                        },
                                        {
                                          children: (0, jsx_runtime_1.jsx)(
                                            ClipboardCopy_1.ClipboardCopy,
                                            __assign(
                                              {
                                                variant: ClipboardCopy_1.ClipboardCopyVariant.expansion,
                                                isReadOnly: true,
                                                hoverTip: "Copy",
                                                clickTip: "Copied",
                                              },
                                              { children: "".concat(detailsString) }
                                            ),
                                            void 0
                                          ),
                                        }
                                      ),
                                      void 0
                                    ),
                                ],
                              },
                              void 0
                            ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                        ],
                      },
                      void 0
                    ),
                  },
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(
                  Button_1.Button,
                  __assign(
                    { variant: Button_1.ButtonVariant.tertiary, onClick: returnHome },
                    { children: "Return home" }
                  ),
                  void 0
                ),
              ],
            },
            void 0
          ),
        ],
      }
    ),
    void 0
  );
}
exports.EditorPageErrorPage = EditorPageErrorPage;
//# sourceMappingURL=EditorPageErrorPage.js.map
