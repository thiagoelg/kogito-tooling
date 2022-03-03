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
exports.OpenInExternalEditorButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var GlobalContext_1 = require("../common/GlobalContext");
var prEditors_1 = require("../pr/prEditors");
var GitHubPageType_1 = require("../../github/GitHubPageType");
function OpenInExternalEditorButton(props) {
  var _a, _b;
  var globals = (0, GlobalContext_1.useGlobals)();
  var repoUrl = (0, react_1.useMemo)(
    function () {
      if (
        props.pageType === GitHubPageType_1.GitHubPageType.PR_HOME ||
        props.pageType === GitHubPageType_1.GitHubPageType.PR_FILES_OR_COMMITS
      ) {
        var prInfo = (0, prEditors_1.parsePrInfo)(globals.dependencies);
        return "https://github.com/".concat(prInfo.org, "/").concat(prInfo.repo, "/tree/").concat(prInfo.gitRef);
      }
      return window.location.href;
    },
    [globals.dependencies, props.pageType]
  );
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children:
        ((_a = globals.externalEditorManager) === null || _a === void 0 ? void 0 : _a.getImportRepoUrl) &&
        (0, jsx_runtime_1.jsxs)(
          "a",
          __assign(
            {
              className: props.className,
              href:
                (_b = globals.externalEditorManager) === null || _b === void 0 ? void 0 : _b.getImportRepoUrl(repoUrl),
              target: "_blank",
            },
            {
              children: [
                (0, jsx_runtime_1.jsx)("img", { alt: "ext-logo", src: globals.extensionIconUrl }, void 0),
                "Open in ",
                globals.externalEditorManager.name,
              ],
            }
          ),
          void 0
        ),
    },
    void 0
  );
}
exports.OpenInExternalEditorButton = OpenInExternalEditorButton;
//# sourceMappingURL=OpenInExternalEditorButton.js.map
