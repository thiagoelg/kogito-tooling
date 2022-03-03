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
exports.WorkspaceStatusIndicator = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var WorkspaceHooks_1 = require("../hooks/WorkspaceHooks");
var react_1 = require("react");
var WorkspaceOrigin_1 = require("../model/WorkspaceOrigin");
var PromiseState_1 = require("../hooks/PromiseState");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var sync_icon_1 = require("@patternfly/react-icons/dist/js/icons/sync-icon");
var security_icon_1 = require("@patternfly/react-icons/dist/js/icons/security-icon");
var check_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/check-circle-icon");
var Hooks_1 = require("../../reactExt/Hooks");
var Hooks_2 = require("../../navigation/Hooks");
var react_router_1 = require("react-router");
function Indicator(props) {
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        (props.workspace.descriptor.origin.kind === WorkspaceOrigin_1.WorkspaceKind.GITHUB_GIST ||
          props.workspace.descriptor.origin.kind === WorkspaceOrigin_1.WorkspaceKind.GIT) &&
          (0, jsx_runtime_1.jsx)(
            jsx_runtime_1.Fragment,
            {
              children:
                (!props.isSynced &&
                  (0, jsx_runtime_1.jsx)(
                    Title_1.Title,
                    __assign(
                      { headingLevel: "h6", style: { display: "inline", padding: "10px", cursor: "default" } },
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Tooltip_1.Tooltip,
                          __assign(
                            { content: "There are new changes since your last sync.", position: "right" },
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                "small",
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    security_icon_1.SecurityIcon,
                                    { color: "gray" },
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
                (0, jsx_runtime_1.jsx)(
                  Title_1.Title,
                  __assign(
                    { headingLevel: "h6", style: { display: "inline", padding: "10px", cursor: "default" } },
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        Tooltip_1.Tooltip,
                        __assign(
                          { content: "All files are synced.", position: "right" },
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              "small",
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  check_circle_icon_1.CheckCircleIcon,
                                  { color: "green" },
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
                ),
            },
            void 0
          ),
        props.hasLocalChanges &&
          (0, jsx_runtime_1.jsx)(
            Title_1.Title,
            __assign(
              { headingLevel: "h6", style: { display: "inline", padding: "10px", cursor: "default" } },
              {
                children: (0, jsx_runtime_1.jsx)(
                  Tooltip_1.Tooltip,
                  __assign(
                    { content: "You have local changes.", position: "right" },
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        "small",
                        { children: (0, jsx_runtime_1.jsx)("i", { children: "M" }, void 0) },
                        void 0
                      ),
                    }
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
  );
}
function WorkspaceStatusIndicator(props) {
  var routes = (0, Hooks_2.useRoutes)();
  var workspaceGitStatusPromise = (0, WorkspaceHooks_1.useWorkspaceGitStatusPromise)(props.workspace);
  var isEverythingPersistedByTheUser = (0, react_1.useMemo)(
    function () {
      return (
        workspaceGitStatusPromise.data &&
        workspaceGitStatusPromise.data.isSynced &&
        !workspaceGitStatusPromise.data.hasLocalChanges
      );
    },
    [workspaceGitStatusPromise]
  );
  (0, Hooks_2.useNavigationBlocker)(
    "block-navigation-for-".concat(props.workspace.descriptor.workspaceId),
    (0, react_1.useCallback)(
      function (_a) {
        var location = _a.location;
        var match = (0, react_router_1.matchPath)(location.pathname, {
          strict: true,
          exact: true,
          sensitive: false,
          path: routes.workspaceWithFilePath.path({
            workspaceId: ":workspaceId",
            fileRelativePath: ":fileRelativePath",
            extension: ":extension",
          }),
        });
        if (
          (match === null || match === void 0 ? void 0 : match.params.workspaceId) ===
          props.workspace.descriptor.workspaceId
        ) {
          return false;
        }
        return !isEverythingPersistedByTheUser;
      },
      [routes, isEverythingPersistedByTheUser, props.workspace.descriptor.workspaceId]
    )
  );
  var prev = (0, Hooks_1.usePrevious)(workspaceGitStatusPromise);
  return (0, jsx_runtime_1.jsx)(
    PromiseState_1.PromiseStateWrapper,
    {
      promise: workspaceGitStatusPromise,
      pending: (0, jsx_runtime_1.jsx)(
        jsx_runtime_1.Fragment,
        {
          children:
            ((prev === null || prev === void 0 ? void 0 : prev.data) &&
              (0, jsx_runtime_1.jsx)(
                Indicator,
                {
                  workspace: props.workspace,
                  hasLocalChanges: prev.data.hasLocalChanges,
                  isSynced: prev.data.isSynced,
                },
                void 0
              )) ||
            (0, jsx_runtime_1.jsx)(
              Title_1.Title,
              __assign(
                { headingLevel: "h6", style: { display: "inline", padding: "10px", cursor: "default" } },
                {
                  children: (0, jsx_runtime_1.jsx)(
                    Tooltip_1.Tooltip,
                    __assign(
                      { content: "Checking status...", position: "right" },
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          "small",
                          { children: (0, jsx_runtime_1.jsx)(sync_icon_1.SyncIcon, { color: "gray" }, void 0) },
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                }
              ),
              void 0
            ),
        },
        void 0
      ),
      resolved: function (_a) {
        var hasLocalChanges = _a.hasLocalChanges,
          isSynced = _a.isSynced;
        return (0, jsx_runtime_1.jsx)(
          Indicator,
          { workspace: props.workspace, hasLocalChanges: hasLocalChanges, isSynced: isSynced },
          void 0
        );
      },
    },
    void 0
  );
}
exports.WorkspaceStatusIndicator = WorkspaceStatusIndicator;
//# sourceMappingURL=WorkspaceStatusIndicator.js.map
