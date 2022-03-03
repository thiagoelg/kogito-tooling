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
exports.ImportFromUrlCard = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Card_1 = require("@patternfly/react-core/dist/js/components/Card");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var code_icon_1 = require("@patternfly/react-icons/dist/js/icons/code-icon");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var react_1 = require("react");
var Hooks_1 = require("../navigation/Hooks");
var react_router_1 = require("react-router");
var ImportFromUrlForm_1 = require("../workspace/components/ImportFromUrlForm");
var ImportableUrlHooks_1 = require("../workspace/hooks/ImportableUrlHooks");
function ImportFromUrlCard() {
  var routes = (0, Hooks_1.useRoutes)();
  var history = (0, react_router_1.useHistory)();
  var _a = __read((0, react_1.useState)(""), 2),
    url = _a[0],
    setUrl = _a[1];
  var importFromUrl = (0, react_1.useCallback)(
    function () {
      history.push({
        pathname: routes.importModel.path({}),
        search: routes.importModel.queryString({ url: url }),
      });
    },
    [history, routes, url]
  );
  var importableUrl = (0, ImportableUrlHooks_1.useImportableUrl)(url);
  var buttonLabel = (0, react_1.useMemo)(
    function () {
      if (
        importableUrl.type === ImportableUrlHooks_1.UrlType.GITHUB ||
        importableUrl.type === ImportableUrlHooks_1.UrlType.GIST
      ) {
        return "Clone";
      }
      return "Import";
    },
    [importableUrl]
  );
  return (0, jsx_runtime_1.jsxs)(
    Card_1.Card,
    __assign(
      { isFullHeight: true, isLarge: true, isPlain: true, isSelected: url.length > 0 },
      {
        children: [
          (0, jsx_runtime_1.jsx)(
            Card_1.CardTitle,
            {
              children: (0, jsx_runtime_1.jsx)(
                Text_1.TextContent,
                {
                  children: (0, jsx_runtime_1.jsxs)(
                    Text_1.Text,
                    __assign(
                      { component: Text_1.TextVariants.h2 },
                      { children: [(0, jsx_runtime_1.jsx)(code_icon_1.CodeIcon, {}, void 0), "\u00A0\u00A0From URL"] }
                    ),
                    void 0
                  ),
                },
                void 0
              ),
            },
            void 0
          ),
          (0, jsx_runtime_1.jsxs)(
            Card_1.CardBody,
            {
              children: [
                (0, jsx_runtime_1.jsx)(
                  Text_1.TextContent,
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      Text_1.Text,
                      __assign(
                        { component: Text_1.TextVariants.p },
                        { children: "Import a GitHub Repository, a GitHub Gist, or any other file URL." }
                      ),
                      void 0
                    ),
                  },
                  void 0
                ),
                (0, jsx_runtime_1.jsx)("br", {}, void 0),
                (0, jsx_runtime_1.jsx)(
                  ImportFromUrlForm_1.ImportFromUrlForm,
                  { url: url, onChange: setUrl, onSubmit: importFromUrl },
                  void 0
                ),
              ],
            },
            void 0
          ),
          (0, jsx_runtime_1.jsx)(
            Card_1.CardFooter,
            {
              children: (0, jsx_runtime_1.jsx)(
                Button_1.Button,
                __assign(
                  {
                    variant: url.length > 0 ? Button_1.ButtonVariant.primary : Button_1.ButtonVariant.secondary,
                    onClick: importFromUrl,
                    ouiaId: "import-from-url-button",
                  },
                  { children: buttonLabel }
                ),
                void 0
              ),
            },
            void 0
          ),
        ],
      }
    ),
    void 0
  );
}
exports.ImportFromUrlCard = ImportFromUrlCard;
//# sourceMappingURL=ImportFromUrlCard.js.map
