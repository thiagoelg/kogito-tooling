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
exports.WorkspaceLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var WorkspaceOrigin_1 = require("../model/WorkspaceOrigin");
var Label_1 = require("@patternfly/react-core/dist/js/components/Label");
var github_icon_1 = require("@patternfly/react-icons/dist/js/icons/github-icon");
var gitlab_icon_1 = require("@patternfly/react-icons/dist/js/icons/gitlab-icon");
var code_branch_icon_1 = require("@patternfly/react-icons/dist/js/icons/code-branch-icon");
var pending_icon_1 = require("@patternfly/react-icons/dist/js/icons/pending-icon");
var react_1 = require("react");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var code_icon_1 = require("@patternfly/react-icons/dist/js/icons/code-icon");
var ImportableUrlHooks_1 = require("../hooks/ImportableUrlHooks");
function WorkspaceLabel(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
  var workspaceImportableUrl = (0, ImportableUrlHooks_1.useImportableUrl)(
    (_b = (_a = props.descriptor) === null || _a === void 0 ? void 0 : _a.origin.url) === null || _b === void 0
      ? void 0
      : _b.toString()
  );
  var gitLabel = (0, react_1.useMemo)(
    function () {
      var _a, _b;
      if (
        ((_a = props.descriptor) === null || _a === void 0 ? void 0 : _a.origin.kind) !==
        WorkspaceOrigin_1.WorkspaceKind.GIT
      ) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
      }
      if (workspaceImportableUrl.type === ImportableUrlHooks_1.UrlType.GITHUB) {
        return (0, jsx_runtime_1.jsxs)(
          Label_1.Label,
          { children: [(0, jsx_runtime_1.jsx)(github_icon_1.GithubIcon, {}, void 0), "\u00A0\u00A0Repository"] },
          void 0
        );
      } else if (
        (_b = props.descriptor) === null || _b === void 0 ? void 0 : _b.origin.url.toString().includes("gitlab")
      ) {
        return (0, jsx_runtime_1.jsxs)(
          Label_1.Label,
          { children: [(0, jsx_runtime_1.jsx)(gitlab_icon_1.GitlabIcon, {}, void 0), "\u00A0\u00A0Repository"] },
          void 0
        );
      } else {
        return (0, jsx_runtime_1.jsxs)(
          Label_1.Label,
          { children: [(0, jsx_runtime_1.jsx)(code_icon_1.CodeIcon, {}, void 0), "\u00A0\u00A0Git repository"] },
          void 0
        );
      }
    },
    [props.descriptor, workspaceImportableUrl]
  );
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        ((_c = props.descriptor) === null || _c === void 0 ? void 0 : _c.origin.kind) ===
          WorkspaceOrigin_1.WorkspaceKind.GIT &&
          (0, jsx_runtime_1.jsx)(
            Tooltip_1.Tooltip,
            __assign(
              {
                content: "'"
                  .concat(
                    (_d = props.descriptor) === null || _d === void 0 ? void 0 : _d.name,
                    "' is linked to a Git Repository. "
                  )
                  .concat((_e = props.descriptor) === null || _e === void 0 ? void 0 : _e.origin.url.toString()),
                position: "right",
              },
              {
                children: (0, jsx_runtime_1.jsxs)(
                  jsx_runtime_1.Fragment,
                  {
                    children: [
                      gitLabel,
                      "\u00A0\u00A0",
                      (0, jsx_runtime_1.jsxs)(
                        Label_1.Label,
                        {
                          children: [
                            (0, jsx_runtime_1.jsx)(code_branch_icon_1.CodeBranchIcon, {}, void 0),
                            "\u00A0\u00A0",
                            (_f = props.descriptor) === null || _f === void 0 ? void 0 : _f.origin.branch,
                          ],
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0
                ),
              }
            ),
            void 0
          ),
        ((_g = props.descriptor) === null || _g === void 0 ? void 0 : _g.origin.kind) ===
          WorkspaceOrigin_1.WorkspaceKind.GITHUB_GIST &&
          (0, jsx_runtime_1.jsx)(
            Tooltip_1.Tooltip,
            __assign(
              {
                content: "'"
                  .concat(
                    (_h = props.descriptor) === null || _h === void 0 ? void 0 : _h.name,
                    "' is linked to a GitHub Gist. "
                  )
                  .concat((_j = props.descriptor) === null || _j === void 0 ? void 0 : _j.origin.url.toString()),
                position: "right",
              },
              {
                children: (0, jsx_runtime_1.jsxs)(
                  Label_1.Label,
                  { children: [(0, jsx_runtime_1.jsx)(github_icon_1.GithubIcon, {}, void 0), "\u00A0\u00A0Gist"] },
                  void 0
                ),
              }
            ),
            void 0
          ),
        ((_k = props.descriptor) === null || _k === void 0 ? void 0 : _k.origin.kind) ===
          WorkspaceOrigin_1.WorkspaceKind.LOCAL &&
          (0, jsx_runtime_1.jsx)(
            Tooltip_1.Tooltip,
            __assign(
              {
                content: "'".concat(
                  (_l = props.descriptor) === null || _l === void 0 ? void 0 : _l.name,
                  "' is saved directly in the browser. Incognito windows don't have access to it."
                ),
                position: "right",
              },
              {
                children: (0, jsx_runtime_1.jsxs)(
                  Label_1.Label,
                  {
                    children: [(0, jsx_runtime_1.jsx)(pending_icon_1.PendingIcon, {}, void 0), "\u00A0\u00A0Ephemeral"],
                  },
                  void 0
                ),
              }
            ),
            void 0
          ),
      ],
    },
    void 0
  );
}
exports.WorkspaceLabel = WorkspaceLabel;
//# sourceMappingURL=WorkspaceLabel.js.map
