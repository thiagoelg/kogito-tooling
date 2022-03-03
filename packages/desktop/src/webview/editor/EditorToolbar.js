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
exports.EditorToolbar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var GlobalContext_1 = require("../common/GlobalContext");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var Brand_1 = require("@patternfly/react-core/dist/js/components/Brand");
var close_icon_1 = require("@patternfly/react-icons/dist/js/icons/close-icon");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip/Tooltip");
var utils_1 = require("../../common/utils");
var i18n_1 = require("../common/i18n");
function EditorToolbar(props) {
  var context = (0, react_1.useContext)(GlobalContext_1.GlobalContext);
  var i18n = (0, i18n_1.useDesktopI18n)().i18n;
  var fileExtension = (0, react_1.useMemo)(
    function () {
      return context.file.fileExtension;
    },
    [context]
  );
  var fileName = (0, react_1.useMemo)(
    function () {
      return context.file.fileName;
    },
    [context]
  );
  var title = (0, react_1.useMemo)(
    function () {
      return (0, utils_1.removeDirectories)(fileName);
    },
    [fileName]
  );
  var fileNameTitle = (0, jsx_runtime_1.jsxs)(
    "div",
    __assign(
      { "data-testid": "toolbar-title", className: "kogito--editor__toolbar-title" },
      {
        children: [
          (0, jsx_runtime_1.jsx)(
            Tooltip_1.Tooltip,
            __assign(
              {
                content: (0, jsx_runtime_1.jsx)("div", { children: fileName }, void 0),
                position: Tooltip_1.TooltipPosition.bottom,
                maxWidth: "50em",
              },
              {
                children: (0, jsx_runtime_1.jsx)(
                  Title_1.Title,
                  __assign({ headingLevel: "h3", size: "xl" }, { children: title }),
                  void 0
                ),
              }
            ),
            void 0
          ),
          props.isEdited &&
            (0, jsx_runtime_1.jsx)(
              "span",
              __assign(
                { className: "kogito--editor__toolbar-edited", "data-testid": "is-dirty-indicator" },
                { children: " - ".concat(i18n.terms.edited) }
              ),
              void 0
            ),
        ],
      }
    ),
    void 0
  );
  var headerToolbar = (0, jsx_runtime_1.jsx)(
    Page_1.PageHeaderTools,
    {
      children: (0, jsx_runtime_1.jsxs)(
        Page_1.PageHeaderToolsGroup,
        {
          children: [
            (0, jsx_runtime_1.jsx)(
              Page_1.PageHeaderToolsItem,
              {
                children: (0, jsx_runtime_1.jsx)(
                  Button_1.Button,
                  __assign(
                    {
                      "data-testid": "save-button",
                      variant: "tertiary",
                      onClick: props.onSave,
                      className: "pf-u-display-flex-on-lg",
                      "aria-label": "Save file",
                      ouiaId: "save-button",
                    },
                    { children: i18n.terms.save }
                  ),
                  void 0
                ),
              },
              void 0
            ),
            (0, jsx_runtime_1.jsx)(
              Page_1.PageHeaderToolsItem,
              {
                children: (0, jsx_runtime_1.jsx)(
                  Button_1.Button,
                  __assign(
                    {
                      variant: "plain",
                      onClick: props.onClose,
                      "aria-label": "Go to homepage",
                      "data-testid": "close-editor-button",
                      ouiaId: "close-button",
                    },
                    { children: (0, jsx_runtime_1.jsx)(close_icon_1.CloseIcon, {}, void 0) }
                  ),
                  void 0
                ),
              },
              void 0
            ),
          ],
        },
        void 0
      ),
    },
    void 0
  );
  return (0, jsx_runtime_1.jsx)(
    Page_1.PageHeader,
    {
      logo: (0, jsx_runtime_1.jsx)(
        Brand_1.Brand,
        {
          src: "images/".concat(fileExtension.toLowerCase(), "_kogito_logo.svg"),
          alt: "".concat(fileExtension, " kogito logo"),
          onClick: props.onClose,
        },
        void 0
      ),
      headerTools: headerToolbar,
      topNav: fileNameTitle,
      className: "kogito--editor__toolbar",
    },
    void 0
  );
}
exports.EditorToolbar = EditorToolbar;
//# sourceMappingURL=EditorToolbar.js.map
