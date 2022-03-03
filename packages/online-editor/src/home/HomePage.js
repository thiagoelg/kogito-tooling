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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.FileDataListItem =
  exports.WorkspacesListDrawerPanelContent =
  exports.NewModelCard =
  exports.WorkspaceCard =
  exports.WorkspaceCardError =
  exports.WorkspaceLoadingCard =
  exports.HomePage =
    void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var Label_1 = require("@patternfly/react-core/dist/js/components/Label");
var EditorEnvelopeLocatorContext_1 = require("../envelopeLocator/EditorEnvelopeLocatorContext");
var react_router_1 = require("react-router");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Card_1 = require("@patternfly/react-core/dist/js/components/Card");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var Stack_1 = require("@patternfly/react-core/dist/js/layouts/Stack");
var Grid_1 = require("@patternfly/react-core/dist/js/layouts/Grid");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var cubes_icon_1 = require("@patternfly/react-icons/dist/js/icons/cubes-icon");
var WorkspacesContext_1 = require("../workspace/WorkspacesContext");
var OnlineEditorPage_1 = require("../pageTemplate/OnlineEditorPage");
var WorkspacesHooks_1 = require("../workspace/hooks/WorkspacesHooks");
var WorkspaceHooks_1 = require("../workspace/hooks/WorkspaceHooks");
var folder_icon_1 = require("@patternfly/react-icons/dist/js/icons/folder-icon");
var task_icon_1 = require("@patternfly/react-icons/dist/js/icons/task-icon");
var exclamation_triangle_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon");
var FileLabel_1 = require("../workspace/components/FileLabel");
var PromiseState_1 = require("../workspace/hooks/PromiseState");
var Skeleton_1 = require("@patternfly/react-core/dist/js/components/Skeleton");
var Gallery_1 = require("@patternfly/react-core/dist/js/layouts/Gallery");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
var Drawer_1 = require("@patternfly/react-core/dist/js/components/Drawer");
var react_router_dom_1 = require("react-router-dom");
var DeleteDropdownWithConfirmation_1 = require("../editor/DeleteDropdownWithConfirmation");
var QueryParamsContext_1 = require("../queryParams/QueryParamsContext");
var Routes_1 = require("../navigation/Routes");
var Bullseye_1 = require("@patternfly/react-core/dist/js/layouts/Bullseye");
var RelativeDate_1 = require("../dates/RelativeDate");
var DataList_1 = require("@patternfly/react-core/dist/js/components/DataList");
var ExpandableSection_1 = require("@patternfly/react-core/dist/js/components/ExpandableSection");
var WorkspaceLabel_1 = require("../workspace/components/WorkspaceLabel");
var UploadCard_1 = require("./UploadCard");
var ImportFromUrlCard_1 = require("./ImportFromUrlCard");
var WorkspaceOrigin_1 = require("../workspace/model/WorkspaceOrigin");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var plus_icon_1 = require("@patternfly/react-icons/dist/js/icons/plus-icon");
var NewFileDropdownMenu_1 = require("../editor/NewFileDropdownMenu");
var Alerts_1 = require("../alerts/Alerts");
var Hooks_1 = require("../reactExt/Hooks");
var Spinner_1 = require("@patternfly/react-core/dist/js/components/Spinner");
var Hooks_2 = require("../navigation/Hooks");
var ErrorBoundary_1 = require("../reactExt/ErrorBoundary");
function HomePage() {
  var routes = (0, Hooks_2.useRoutes)();
  var history = (0, react_router_1.useHistory)();
  var workspaceDescriptorsPromise = (0, WorkspacesHooks_1.useWorkspaceDescriptorsPromise)();
  var expandedWorkspaceId = (0, QueryParamsContext_1.useQueryParam)(Routes_1.QueryParams.EXPAND);
  var queryParams = (0, QueryParamsContext_1.useQueryParams)();
  var closeExpandedWorkspace = (0, react_1.useCallback)(
    function () {
      history.replace({
        pathname: routes.home.path({}),
        search: queryParams.without(Routes_1.QueryParams.EXPAND).toString(),
      });
    },
    [history, routes, queryParams]
  );
  var expandWorkspace = (0, react_1.useCallback)(
    function (workspaceId) {
      var expand = workspaceId !== expandedWorkspaceId ? workspaceId : undefined;
      if (!expand) {
        closeExpandedWorkspace();
        return;
      }
      history.replace({
        pathname: routes.home.path({}),
        search: routes.home.queryString({ expand: expand }),
      });
    },
    [closeExpandedWorkspace, history, routes, expandedWorkspaceId]
  );
  (0, react_1.useEffect)(
    function () {
      if (
        workspaceDescriptorsPromise.data &&
        !workspaceDescriptorsPromise.data
          .map(function (f) {
            return f.workspaceId;
          })
          .includes(expandedWorkspaceId)
      ) {
        closeExpandedWorkspace();
      }
    },
    [workspaceDescriptorsPromise, closeExpandedWorkspace, expandedWorkspaceId]
  );
  var buildInfo = (0, react_1.useMemo)(function () {
    return process.env["WEBPACK_REPLACE__buildInfo"];
  }, []);
  return (0, jsx_runtime_1.jsxs)(
    OnlineEditorPage_1.OnlineEditorPage,
    {
      children: [
        (0, jsx_runtime_1.jsx)(
          Page_1.PageSection,
          __assign(
            { isFilled: false },
            {
              children: (0, jsx_runtime_1.jsxs)(
                Grid_1.Grid,
                __assign(
                  { hasGutter: true },
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        Grid_1.GridItem,
                        __assign(
                          { sm: 12, xl: 6 },
                          {
                            children: (0, jsx_runtime_1.jsxs)(
                              Page_1.PageSection,
                              __assign(
                                { variant: "light", isFilled: true, style: { height: "100%" } },
                                {
                                  children: [
                                    (0, jsx_runtime_1.jsx)(
                                      Text_1.TextContent,
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          Text_1.Text,
                                          __assign({ component: Text_1.TextVariants.h1 }, { children: "Create" }),
                                          void 0
                                        ),
                                      },
                                      void 0
                                    ),
                                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                                    (0, jsx_runtime_1.jsx)(
                                      Divider_1.Divider,
                                      { inset: { default: "insetXl" } },
                                      void 0
                                    ),
                                    (0, jsx_runtime_1.jsxs)(
                                      Gallery_1.Gallery,
                                      __assign(
                                        {
                                          hasGutter: true,
                                          minWidths: { sm: "calc(33% - 16px)", default: "100%" },
                                          style: { height: "calc(100% - 32px)" },
                                        },
                                        {
                                          children: [
                                            (0, jsx_runtime_1.jsx)(
                                              NewModelCard,
                                              {
                                                title: "Workflow",
                                                extension: "bpmn",
                                                description: "BPMN files are used to generate business workflows.",
                                              },
                                              void 0
                                            ),
                                            (0, jsx_runtime_1.jsx)(
                                              NewModelCard,
                                              {
                                                title: "Decision",
                                                extension: "dmn",
                                                description: "DMN files are used to generate decision models",
                                              },
                                              void 0
                                            ),
                                            (0, jsx_runtime_1.jsx)(
                                              NewModelCard,
                                              {
                                                title: "Scorecard",
                                                extension: "pmml",
                                                description: "PMML files are used to generate scorecards",
                                              },
                                              void 0
                                            ),
                                          ],
                                        }
                                      ),
                                      void 0
                                    ),
                                  ],
                                }
                              ),
                              void 0
                            ),
                          }
                        ),
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        Grid_1.GridItem,
                        __assign(
                          { sm: 12, xl: 6 },
                          {
                            children: (0, jsx_runtime_1.jsxs)(
                              Page_1.PageSection,
                              __assign(
                                { variant: "light", isFilled: true, style: { height: "100%" } },
                                {
                                  children: [
                                    (0, jsx_runtime_1.jsx)(
                                      Text_1.TextContent,
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          Text_1.Text,
                                          __assign({ component: Text_1.TextVariants.h1 }, { children: "Import" }),
                                          void 0
                                        ),
                                      },
                                      void 0
                                    ),
                                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                                    (0, jsx_runtime_1.jsx)(
                                      Divider_1.Divider,
                                      { inset: { default: "insetXl" } },
                                      void 0
                                    ),
                                    (0, jsx_runtime_1.jsxs)(
                                      Gallery_1.Gallery,
                                      __assign(
                                        {
                                          hasGutter: true,
                                          minWidths: { sm: "calc(50% - 16px)", default: "100%" },
                                          style: { height: "calc(100% - 32px)" },
                                        },
                                        {
                                          children: [
                                            (0, jsx_runtime_1.jsx)(ImportFromUrlCard_1.ImportFromUrlCard, {}, void 0),
                                            (0, jsx_runtime_1.jsx)(
                                              UploadCard_1.UploadCard,
                                              { expandWorkspace: expandWorkspace },
                                              void 0
                                            ),
                                          ],
                                        }
                                      ),
                                      void 0
                                    ),
                                  ],
                                }
                              ),
                              void 0
                            ),
                          }
                        ),
                        void 0
                      ),
                    ],
                  }
                ),
                void 0
              ),
            }
          ),
          void 0
        ),
        (0, jsx_runtime_1.jsx)(
          Page_1.PageSection,
          __assign(
            { isFilled: true, variant: "light", hasOverflowScroll: false },
            {
              children: (0, jsx_runtime_1.jsx)(
                PromiseState_1.PromiseStateWrapper,
                {
                  promise: workspaceDescriptorsPromise,
                  rejected: function (e) {
                    return (0, jsx_runtime_1.jsxs)(
                      jsx_runtime_1.Fragment,
                      { children: ["Error fetching workspaces: ", e + ""] },
                      void 0
                    );
                  },
                  resolved: function (workspaceDescriptors) {
                    return (0, jsx_runtime_1.jsxs)(
                      Drawer_1.Drawer,
                      __assign(
                        { isExpanded: !!expandedWorkspaceId, isInline: true },
                        {
                          children: [
                            (0, jsx_runtime_1.jsxs)(
                              Drawer_1.DrawerSection,
                              {
                                children: [
                                  (0, jsx_runtime_1.jsx)(
                                    Text_1.TextContent,
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        Text_1.Text,
                                        __assign({ component: Text_1.TextVariants.h1 }, { children: "Recent models" }),
                                        void 0
                                      ),
                                    },
                                    void 0
                                  ),
                                  (0, jsx_runtime_1.jsx)("br", {}, void 0),
                                ],
                              },
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              Drawer_1.DrawerContent,
                              __assign(
                                {
                                  panelContent: (0, jsx_runtime_1.jsx)(
                                    WorkspacesListDrawerPanelContent,
                                    { workspaceId: expandedWorkspaceId, onClose: closeExpandedWorkspace },
                                    void 0
                                  ),
                                },
                                {
                                  children: (0, jsx_runtime_1.jsxs)(
                                    Drawer_1.DrawerContentBody,
                                    {
                                      children: [
                                        workspaceDescriptors.length > 0 &&
                                          (0, jsx_runtime_1.jsx)(
                                            Stack_1.Stack,
                                            __assign(
                                              { hasGutter: true, style: { padding: "10px" } },
                                              {
                                                children: workspaceDescriptors
                                                  .sort(function (a, b) {
                                                    return new Date(a.lastUpdatedDateISO) <
                                                      new Date(b.lastUpdatedDateISO)
                                                      ? 1
                                                      : -1;
                                                  })
                                                  .map(function (workspace) {
                                                    return (0, jsx_runtime_1.jsx)(
                                                      Stack_1.StackItem,
                                                      {
                                                        children: (0, jsx_runtime_1.jsx)(
                                                          ErrorBoundary_1.ErrorBoundary,
                                                          __assign(
                                                            {
                                                              error: (0, jsx_runtime_1.jsx)(
                                                                WorkspaceCardError,
                                                                { workspace: workspace },
                                                                void 0
                                                              ),
                                                            },
                                                            {
                                                              children: (0, jsx_runtime_1.jsx)(
                                                                WorkspaceCard,
                                                                {
                                                                  workspaceId: workspace.workspaceId,
                                                                  onSelect: function () {
                                                                    return expandWorkspace(workspace.workspaceId);
                                                                  },
                                                                  isSelected:
                                                                    workspace.workspaceId === expandedWorkspaceId,
                                                                },
                                                                void 0
                                                              ),
                                                            }
                                                          ),
                                                          void 0
                                                        ),
                                                      },
                                                      workspace.workspaceId
                                                    );
                                                  }),
                                              }
                                            ),
                                            void 0
                                          ),
                                        workspaceDescriptors.length === 0 &&
                                          (0, jsx_runtime_1.jsx)(
                                            Bullseye_1.Bullseye,
                                            {
                                              children: (0, jsx_runtime_1.jsxs)(
                                                EmptyState_1.EmptyState,
                                                {
                                                  children: [
                                                    (0, jsx_runtime_1.jsx)(
                                                      EmptyState_1.EmptyStateIcon,
                                                      { icon: cubes_icon_1.CubesIcon },
                                                      void 0
                                                    ),
                                                    (0, jsx_runtime_1.jsx)(
                                                      Title_1.Title,
                                                      __assign(
                                                        { headingLevel: "h4", size: "lg" },
                                                        { children: "Nothing here" }
                                                      ),
                                                      void 0
                                                    ),
                                                    (0, jsx_runtime_1.jsx)(
                                                      EmptyState_1.EmptyStateBody,
                                                      { children: "Start by adding a new model" },
                                                      void 0
                                                    ),
                                                  ],
                                                },
                                                void 0
                                              ),
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
                          ],
                        }
                      ),
                      void 0
                    );
                  },
                },
                void 0
              ),
            }
          ),
          void 0
        ),
        buildInfo &&
          (0, jsx_runtime_1.jsx)(
            "div",
            __assign(
              { className: "kie-tools--build-info" },
              { children: (0, jsx_runtime_1.jsx)(Label_1.Label, { children: buildInfo }, void 0) }
            ),
            void 0
          ),
      ],
    },
    void 0
  );
}
exports.HomePage = HomePage;
function WorkspaceLoadingCard() {
  return (0, jsx_runtime_1.jsx)(
    Card_1.Card,
    {
      children: (0, jsx_runtime_1.jsxs)(
        Card_1.CardBody,
        {
          children: [
            (0, jsx_runtime_1.jsx)(Skeleton_1.Skeleton, { fontSize: "sm", width: "40%" }, void 0),
            (0, jsx_runtime_1.jsx)("br", {}, void 0),
            (0, jsx_runtime_1.jsx)(Skeleton_1.Skeleton, { fontSize: "sm", width: "70%" }, void 0),
          ],
        },
        void 0
      ),
    },
    void 0
  );
}
exports.WorkspaceLoadingCard = WorkspaceLoadingCard;
function WorkspaceCardError(props) {
  var workspaces = (0, WorkspacesContext_1.useWorkspaces)();
  return (0, jsx_runtime_1.jsx)(
    Card_1.Card,
    __assign(
      { isSelected: false, isSelectable: true, isHoverable: true, isCompact: true },
      {
        children: (0, jsx_runtime_1.jsxs)(
          Card_1.CardHeader,
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                Card_1.CardHeaderMain,
                {
                  children: (0, jsx_runtime_1.jsx)(
                    Flex_1.Flex,
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        Flex_1.FlexItem,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Card_1.CardTitle,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Text_1.TextContent,
                                {
                                  children: (0, jsx_runtime_1.jsxs)(
                                    Text_1.Text,
                                    __assign(
                                      { component: Text_1.TextVariants.h3 },
                                      {
                                        children: [
                                          (0, jsx_runtime_1.jsx)(
                                            exclamation_triangle_icon_1.ExclamationTriangleIcon,
                                            {},
                                            void 0
                                          ),
                                          "\u00A0\u00A0",
                                          "There was an error obtaining information for '".concat(
                                            props.workspace.workspaceId,
                                            "'"
                                          ),
                                        ],
                                      }
                                    ),
                                    void 0
                                  ),
                                },
                                void 0
                              ),
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                    },
                    void 0
                  ),
                },
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                Card_1.CardActions,
                {
                  children: (0, jsx_runtime_1.jsx)(
                    DeleteDropdownWithConfirmation_1.DeleteDropdownWithConfirmation,
                    {
                      onDelete: function () {
                        return workspaces.deleteWorkspace({ workspaceId: props.workspace.workspaceId });
                      },
                      item: (0, jsx_runtime_1.jsxs)(
                        jsx_runtime_1.Fragment,
                        {
                          children: [
                            "Delete ",
                            (0, jsx_runtime_1.jsx)("b", { children: '"'.concat(props.workspace.name, '"') }, void 0),
                          ],
                        },
                        void 0
                      ),
                    },
                    void 0
                  ),
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
  );
}
exports.WorkspaceCardError = WorkspaceCardError;
function WorkspaceCard(props) {
  var _a;
  var editorEnvelopeLocator = (0, EditorEnvelopeLocatorContext_1.useEditorEnvelopeLocator)();
  var routes = (0, Hooks_2.useRoutes)();
  var history = (0, react_router_1.useHistory)();
  var workspaces = (0, WorkspacesContext_1.useWorkspaces)();
  var _b = __read((0, react_1.useState)(false), 2),
    isHovered = _b[0],
    setHovered = _b[1];
  var workspacePromise = (0, WorkspaceHooks_1.useWorkspacePromise)(props.workspaceId);
  var editableFiles = (0, react_1.useMemo)(
    function () {
      var _a, _b;
      return (_b =
        (_a = workspacePromise.data) === null || _a === void 0
          ? void 0
          : _a.files.filter(function (file) {
              return editorEnvelopeLocator.hasMappingFor(file.relativePath);
            })) !== null && _b !== void 0
        ? _b
        : [];
    },
    [editorEnvelopeLocator, (_a = workspacePromise.data) === null || _a === void 0 ? void 0 : _a.files]
  );
  var workspaceName = (0, react_1.useMemo)(
    function () {
      return workspacePromise.data ? workspacePromise.data.descriptor.name : null;
    },
    [workspacePromise.data]
  );
  return (0, jsx_runtime_1.jsx)(
    PromiseState_1.PromiseStateWrapper,
    {
      promise: workspacePromise,
      pending: (0, jsx_runtime_1.jsx)(WorkspaceLoadingCard, {}, void 0),
      rejected: function () {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: "ERROR" }, void 0);
      },
      resolved: function (workspace) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (0, jsx_runtime_1.jsx)(
          jsx_runtime_1.Fragment,
          {
            children:
              (editableFiles.length === 1 &&
                workspace.descriptor.origin.kind === WorkspaceOrigin_1.WorkspaceKind.LOCAL &&
                (0, jsx_runtime_1.jsxs)(
                  Card_1.Card,
                  __assign(
                    {
                      isSelected: props.isSelected,
                      isSelectable: true,
                      onMouseOver: function () {
                        return setHovered(true);
                      },
                      onMouseLeave: function () {
                        return setHovered(false);
                      },
                      isHoverable: true,
                      isCompact: true,
                      style: { cursor: "pointer" },
                      onClick: function () {
                        history.push({
                          pathname: routes.workspaceWithFilePath.path({
                            workspaceId: editableFiles[0].workspaceId,
                            fileRelativePath: editableFiles[0].relativePathWithoutExtension,
                            extension: editableFiles[0].extension,
                          }),
                        });
                      },
                    },
                    {
                      children: [
                        (0, jsx_runtime_1.jsxs)(
                          Card_1.CardHeader,
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                react_router_dom_1.Link,
                                __assign(
                                  {
                                    to: routes.workspaceWithFilePath.path({
                                      workspaceId: editableFiles[0].workspaceId,
                                      fileRelativePath: editableFiles[0].relativePathWithoutExtension,
                                      extension: editableFiles[0].extension,
                                    }),
                                  },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Card_1.CardHeaderMain,
                                      __assign(
                                        { style: { width: "100%" } },
                                        {
                                          children: (0, jsx_runtime_1.jsxs)(
                                            Flex_1.Flex,
                                            {
                                              children: [
                                                (0, jsx_runtime_1.jsx)(
                                                  Flex_1.FlexItem,
                                                  {
                                                    children: (0, jsx_runtime_1.jsx)(
                                                      Card_1.CardTitle,
                                                      {
                                                        children: (0, jsx_runtime_1.jsx)(
                                                          Text_1.TextContent,
                                                          {
                                                            children: (0, jsx_runtime_1.jsxs)(
                                                              Text_1.Text,
                                                              __assign(
                                                                {
                                                                  component: Text_1.TextVariants.h3,
                                                                  style: {
                                                                    textOverflow: "ellipsis",
                                                                    overflow: "hidden",
                                                                  },
                                                                },
                                                                {
                                                                  children: [
                                                                    (0, jsx_runtime_1.jsx)(
                                                                      task_icon_1.TaskIcon,
                                                                      {},
                                                                      void 0
                                                                    ),
                                                                    "\u00A0\u00A0",
                                                                    editableFiles[0].nameWithoutExtension,
                                                                  ],
                                                                }
                                                              ),
                                                              void 0
                                                            ),
                                                          },
                                                          void 0
                                                        ),
                                                      },
                                                      void 0
                                                    ),
                                                  },
                                                  void 0
                                                ),
                                                (0, jsx_runtime_1.jsx)(
                                                  Flex_1.FlexItem,
                                                  {
                                                    children: (0, jsx_runtime_1.jsx)(
                                                      "b",
                                                      {
                                                        children: (0, jsx_runtime_1.jsx)(
                                                          FileLabel_1.FileLabel,
                                                          { extension: editableFiles[0].extension },
                                                          void 0
                                                        ),
                                                      },
                                                      void 0
                                                    ),
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
                                  }
                                ),
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                Card_1.CardActions,
                                {
                                  children:
                                    isHovered &&
                                    (0, jsx_runtime_1.jsx)(
                                      DeleteDropdownWithConfirmation_1.DeleteDropdownWithConfirmation,
                                      {
                                        onDelete: function () {
                                          return workspaces.deleteWorkspace({ workspaceId: props.workspaceId });
                                        },
                                        item: (0, jsx_runtime_1.jsxs)(
                                          Flex_1.Flex,
                                          __assign(
                                            { flexWrap: { default: "nowrap" } },
                                            {
                                              children: [
                                                (0, jsx_runtime_1.jsxs)(
                                                  Flex_1.FlexItem,
                                                  {
                                                    children: [
                                                      "Delete ",
                                                      (0, jsx_runtime_1.jsx)(
                                                        "b",
                                                        {
                                                          children: '"'.concat(
                                                            editableFiles[0].nameWithoutExtension,
                                                            '"'
                                                          ),
                                                        },
                                                        void 0
                                                      ),
                                                    ],
                                                  },
                                                  void 0
                                                ),
                                                (0, jsx_runtime_1.jsx)(
                                                  Flex_1.FlexItem,
                                                  {
                                                    children: (0, jsx_runtime_1.jsx)(
                                                      "b",
                                                      {
                                                        children: (0, jsx_runtime_1.jsx)(
                                                          FileLabel_1.FileLabel,
                                                          { extension: editableFiles[0].extension },
                                                          void 0
                                                        ),
                                                      },
                                                      void 0
                                                    ),
                                                  },
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
                                },
                                void 0
                              ),
                            ],
                          },
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          Card_1.CardBody,
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              Text_1.TextContent,
                              {
                                children: (0, jsx_runtime_1.jsxs)(
                                  Text_1.Text,
                                  __assign(
                                    { component: Text_1.TextVariants.p },
                                    {
                                      children: [
                                        (0, jsx_runtime_1.jsx)("b", { children: "Created: " }, void 0),
                                        (0, jsx_runtime_1.jsx)(
                                          RelativeDate_1.RelativeDate,
                                          {
                                            date: new Date(
                                              (_b =
                                                (_a = workspacePromise.data) === null || _a === void 0
                                                  ? void 0
                                                  : _a.descriptor.createdDateISO) !== null && _b !== void 0
                                                ? _b
                                                : ""
                                            ),
                                          },
                                          void 0
                                        ),
                                        (0, jsx_runtime_1.jsx)("b", { children: ", Last updated: " }, void 0),
                                        (0, jsx_runtime_1.jsx)(
                                          RelativeDate_1.RelativeDate,
                                          {
                                            date: new Date(
                                              (_d =
                                                (_c = workspacePromise.data) === null || _c === void 0
                                                  ? void 0
                                                  : _c.descriptor.lastUpdatedDateISO) !== null && _d !== void 0
                                                ? _d
                                                : ""
                                            ),
                                          },
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
                          },
                          void 0
                        ),
                      ],
                    }
                  ),
                  void 0
                )) ||
              (0, jsx_runtime_1.jsxs)(
                Card_1.Card,
                __assign(
                  {
                    isSelected: props.isSelected,
                    isSelectable: true,
                    onMouseOver: function () {
                      return setHovered(true);
                    },
                    onMouseLeave: function () {
                      return setHovered(false);
                    },
                    isHoverable: true,
                    isCompact: true,
                    style: { cursor: "pointer" },
                    onClick: props.onSelect,
                  },
                  {
                    children: [
                      (0, jsx_runtime_1.jsxs)(
                        Card_1.CardHeader,
                        {
                          children: [
                            (0, jsx_runtime_1.jsx)(
                              Card_1.CardHeaderMain,
                              __assign(
                                { style: { width: "100%" } },
                                {
                                  children: (0, jsx_runtime_1.jsxs)(
                                    Flex_1.Flex,
                                    {
                                      children: [
                                        (0, jsx_runtime_1.jsx)(
                                          Flex_1.FlexItem,
                                          {
                                            children: (0, jsx_runtime_1.jsx)(
                                              Card_1.CardTitle,
                                              {
                                                children: (0, jsx_runtime_1.jsx)(
                                                  Text_1.TextContent,
                                                  {
                                                    children: (0, jsx_runtime_1.jsxs)(
                                                      Text_1.Text,
                                                      __assign(
                                                        {
                                                          component: Text_1.TextVariants.h3,
                                                          style: { textOverflow: "ellipsis", overflow: "hidden" },
                                                        },
                                                        {
                                                          children: [
                                                            (0, jsx_runtime_1.jsx)(
                                                              folder_icon_1.FolderIcon,
                                                              {},
                                                              void 0
                                                            ),
                                                            "\u00A0\u00A0",
                                                            workspaceName,
                                                            "\u00A0\u00A0",
                                                            (0, jsx_runtime_1.jsx)(
                                                              WorkspaceLabel_1.WorkspaceLabel,
                                                              {
                                                                descriptor:
                                                                  (_e = workspacePromise.data) === null || _e === void 0
                                                                    ? void 0
                                                                    : _e.descriptor,
                                                              },
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
                                              },
                                              void 0
                                            ),
                                          },
                                          void 0
                                        ),
                                        (0, jsx_runtime_1.jsx)(
                                          Flex_1.FlexItem,
                                          {
                                            children: (0, jsx_runtime_1.jsx)(
                                              Text_1.Text,
                                              __assign(
                                                { component: Text_1.TextVariants.p },
                                                {
                                                  children: ""
                                                    .concat(workspace.files.length, " files, ")
                                                    .concat(
                                                      editableFiles === null || editableFiles === void 0
                                                        ? void 0
                                                        : editableFiles.length,
                                                      " models"
                                                    ),
                                                }
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
                                }
                              ),
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              Card_1.CardActions,
                              {
                                children:
                                  isHovered &&
                                  (0, jsx_runtime_1.jsx)(
                                    DeleteDropdownWithConfirmation_1.DeleteDropdownWithConfirmation,
                                    {
                                      onDelete: function () {
                                        return workspaces.deleteWorkspace({ workspaceId: props.workspaceId });
                                      },
                                      item: (0, jsx_runtime_1.jsxs)(
                                        jsx_runtime_1.Fragment,
                                        {
                                          children: [
                                            "Delete ",
                                            (0, jsx_runtime_1.jsx)(
                                              "b",
                                              {
                                                children: '"'.concat(
                                                  (_f = workspacePromise.data) === null || _f === void 0
                                                    ? void 0
                                                    : _f.descriptor.name,
                                                  '"'
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
                                  ),
                              },
                              void 0
                            ),
                          ],
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        Card_1.CardBody,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsxs)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.p },
                                  {
                                    children: [
                                      (0, jsx_runtime_1.jsx)("b", { children: "Created: " }, void 0),
                                      (0, jsx_runtime_1.jsx)(
                                        RelativeDate_1.RelativeDate,
                                        {
                                          date: new Date(
                                            (_h =
                                              (_g = workspacePromise.data) === null || _g === void 0
                                                ? void 0
                                                : _g.descriptor.createdDateISO) !== null && _h !== void 0
                                              ? _h
                                              : ""
                                          ),
                                        },
                                        void 0
                                      ),
                                      (0, jsx_runtime_1.jsx)("b", { children: ", Last updated: " }, void 0),
                                      (0, jsx_runtime_1.jsx)(
                                        RelativeDate_1.RelativeDate,
                                        {
                                          date: new Date(
                                            (_k =
                                              (_j = workspacePromise.data) === null || _j === void 0
                                                ? void 0
                                                : _j.descriptor.lastUpdatedDateISO) !== null && _k !== void 0
                                              ? _k
                                              : ""
                                          ),
                                        },
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
                        },
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
      },
    },
    void 0
  );
}
exports.WorkspaceCard = WorkspaceCard;
function NewModelCard(props) {
  var routes = (0, Hooks_2.useRoutes)();
  return (0, jsx_runtime_1.jsxs)(
    Card_1.Card,
    __assign(
      { isFullHeight: true, isPlain: true, isLarge: true },
      {
        children: [
          (0, jsx_runtime_1.jsx)(
            Card_1.CardTitle,
            {
              children: (0, jsx_runtime_1.jsx)(
                FileLabel_1.FileLabel,
                { style: { fontSize: "0.8em" }, extension: props.extension },
                void 0
              ),
            },
            void 0
          ),
          (0, jsx_runtime_1.jsx)(
            Card_1.CardBody,
            {
              children: (0, jsx_runtime_1.jsx)(
                Text_1.TextContent,
                {
                  children: (0, jsx_runtime_1.jsx)(
                    Text_1.Text,
                    __assign({ component: Text_1.TextVariants.p }, { children: props.description }),
                    void 0
                  ),
                },
                void 0
              ),
            },
            void 0
          ),
          (0, jsx_runtime_1.jsx)(
            Card_1.CardFooter,
            {
              children: (0, jsx_runtime_1.jsxs)(
                Grid_1.Grid,
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(
                      react_router_dom_1.Link,
                      __assign(
                        { to: { pathname: routes.newModel.path({ extension: props.extension }) } },
                        {
                          children: (0, jsx_runtime_1.jsxs)(
                            Button_1.Button,
                            __assign(
                              {
                                variant: Button_1.ButtonVariant.secondary,
                                ouiaId: "new-".concat(props.extension, "-button"),
                              },
                              { children: ["New ", props.title] }
                            ),
                            void 0
                          ),
                        }
                      ),
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      react_router_dom_1.Link,
                      __assign(
                        {
                          to: {
                            pathname: routes.importModel.path({}),
                            search: routes.importModel.queryString({
                              url: ""
                                .concat(window.location.origin)
                                .concat(window.location.pathname)
                                .concat(
                                  routes.static.sample.path({
                                    type: props.extension,
                                  })
                                ),
                            }),
                          },
                        },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Button_1.Button,
                            __assign(
                              {
                                variant: Button_1.ButtonVariant.link,
                                style: { paddingLeft: "2px" },
                                ouiaId: "try-".concat(props.extension, "-sample-button"),
                              },
                              { children: "Try sample" }
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
            },
            void 0
          ),
        ],
      }
    ),
    void 0
  );
}
exports.NewModelCard = NewModelCard;
function WorkspacesListDrawerPanelContent(props) {
  var _this = this;
  var _a, _b;
  var routes = (0, Hooks_2.useRoutes)();
  var editorEnvelopeLocator = (0, EditorEnvelopeLocatorContext_1.useEditorEnvelopeLocator)();
  var workspacePromise = (0, WorkspaceHooks_1.useWorkspacePromise)(props.workspaceId);
  var otherFiles = (0, react_1.useMemo)(
    function () {
      var _a, _b;
      return (
        (_b = (_a = workspacePromise.data) === null || _a === void 0 ? void 0 : _a.files) !== null && _b !== void 0
          ? _b
          : []
      )
        .sort(function (a, b) {
          return a.relativePath.localeCompare(b.relativePath);
        })
        .filter(function (file) {
          return !editorEnvelopeLocator.hasMappingFor(file.relativePath);
        });
    },
    [editorEnvelopeLocator, (_a = workspacePromise.data) === null || _a === void 0 ? void 0 : _a.files]
  );
  var models = (0, react_1.useMemo)(
    function () {
      var _a, _b;
      return (
        (_b = (_a = workspacePromise.data) === null || _a === void 0 ? void 0 : _a.files) !== null && _b !== void 0
          ? _b
          : []
      )
        .sort(function (a, b) {
          return a.relativePath.localeCompare(b.relativePath);
        })
        .filter(function (file) {
          return editorEnvelopeLocator.hasMappingFor(file.relativePath);
        });
    },
    [editorEnvelopeLocator, (_b = workspacePromise.data) === null || _b === void 0 ? void 0 : _b.files]
  );
  var _c = __read((0, react_1.useState)(false), 2),
    isNewFileDropdownMenuOpen = _c[0],
    setNewFileDropdownMenuOpen = _c[1];
  var _d = __read((0, Hooks_1.useController)(), 2),
    alerts = _d[0],
    alertsRef = _d[1];
  return (0, jsx_runtime_1.jsx)(
    Drawer_1.DrawerPanelContent,
    __assign(
      { isResizable: true, minSize: "40%", maxSize: "80%" },
      {
        children: (0, jsx_runtime_1.jsx)(
          PromiseState_1.PromiseStateWrapper,
          {
            promise: workspacePromise,
            pending: (0, jsx_runtime_1.jsx)(
              Drawer_1.DrawerPanelBody,
              {
                children: (0, jsx_runtime_1.jsx)(
                  Bullseye_1.Bullseye,
                  { children: (0, jsx_runtime_1.jsx)(Spinner_1.Spinner, {}, void 0) },
                  void 0
                ),
              },
              void 0
            ),
            resolved: function (workspace) {
              var _a;
              return (0, jsx_runtime_1.jsxs)(
                jsx_runtime_1.Fragment,
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(Alerts_1.Alerts, { width: "100%", ref: alertsRef }, void 0),
                    (0, jsx_runtime_1.jsxs)(
                      Drawer_1.DrawerHead,
                      {
                        children: [
                          (0, jsx_runtime_1.jsxs)(
                            Flex_1.Flex,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  Flex_1.FlexItem,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Text_1.TextContent,
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          Text_1.Text,
                                          __assign(
                                            { component: Text_1.TextVariants.h3 },
                                            {
                                              children: "Models in '".concat(
                                                (_a = workspacePromise.data) === null || _a === void 0
                                                  ? void 0
                                                  : _a.descriptor.name,
                                                "'"
                                              ),
                                            }
                                          ),
                                          void 0
                                        ),
                                      },
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  Flex_1.FlexItem,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Dropdown_1.Dropdown,
                                      __assign(
                                        {
                                          isPlain: true,
                                          position: "left",
                                          isOpen: isNewFileDropdownMenuOpen,
                                          toggle: (0, jsx_runtime_1.jsx)(
                                            Dropdown_1.DropdownToggle,
                                            __assign(
                                              {
                                                className: "kie-tools--masthead-hoverable",
                                                toggleIndicator: null,
                                                onToggle: setNewFileDropdownMenuOpen,
                                              },
                                              { children: (0, jsx_runtime_1.jsx)(plus_icon_1.PlusIcon, {}, void 0) }
                                            ),
                                            void 0
                                          ),
                                        },
                                        {
                                          children: (0, jsx_runtime_1.jsx)(
                                            NewFileDropdownMenu_1.NewFileDropdownMenu,
                                            {
                                              alerts: alerts,
                                              workspaceId: workspace.descriptor.workspaceId,
                                              destinationDirPath: "",
                                              onAddFile: function () {
                                                return __awaiter(_this, void 0, void 0, function () {
                                                  return __generator(this, function (_a) {
                                                    return [2, setNewFileDropdownMenuOpen(false)];
                                                  });
                                                });
                                              },
                                            },
                                            void 0
                                          ),
                                        }
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
                          (workspace.descriptor.origin.kind === WorkspaceOrigin_1.WorkspaceKind.GITHUB_GIST ||
                            workspace.descriptor.origin.kind === WorkspaceOrigin_1.WorkspaceKind.GIT) &&
                            (0, jsx_runtime_1.jsx)(
                              Text_1.TextContent,
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  Text_1.Text,
                                  __assign(
                                    { component: Text_1.TextVariants.small },
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        "i",
                                        { children: workspace.descriptor.origin.url.toString() },
                                        void 0
                                      ),
                                    }
                                  ),
                                  void 0
                                ),
                              },
                              void 0
                            ),
                          (0, jsx_runtime_1.jsx)(
                            Drawer_1.DrawerActions,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Drawer_1.DrawerCloseButton,
                                { onClick: props.onClose },
                                void 0
                              ),
                            },
                            void 0
                          ),
                        ],
                      },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsxs)(
                      Drawer_1.DrawerPanelBody,
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            DataList_1.DataList,
                            __assign(
                              { "aria-label": "models-data-list" },
                              {
                                children: models.map(function (file) {
                                  var _a;
                                  return (0, jsx_runtime_1.jsx)(
                                    react_router_dom_1.Link,
                                    __assign(
                                      {
                                        to: routes.workspaceWithFilePath.path({
                                          workspaceId:
                                            (_a = workspace.descriptor.workspaceId) !== null && _a !== void 0 ? _a : "",
                                          fileRelativePath: file.relativePathWithoutExtension,
                                          extension: file.extension,
                                        }),
                                      },
                                      { children: (0, jsx_runtime_1.jsx)(FileDataListItem, { file: file }, void 0) }
                                    ),
                                    file.relativePath
                                  );
                                }),
                              }
                            ),
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          otherFiles.length > 0 &&
                            (0, jsx_runtime_1.jsx)(
                              ExpandableSection_1.ExpandableSection,
                              __assign(
                                {
                                  toggleTextCollapsed: "View other files",
                                  toggleTextExpanded: "Hide other files",
                                  className: "plain",
                                },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    DataList_1.DataList,
                                    __assign(
                                      { "aria-label": "other-files-data-list" },
                                      {
                                        children: otherFiles.map(function (file) {
                                          return (0,
                                          jsx_runtime_1.jsx)(FileDataListItem, { file: file }, file.relativePath);
                                        }),
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
                    ),
                  ],
                },
                void 0
              );
            },
          },
          void 0
        ),
      }
    ),
    void 0
  );
}
exports.WorkspacesListDrawerPanelContent = WorkspacesListDrawerPanelContent;
function FileDataListItem(props) {
  return (0, jsx_runtime_1.jsx)(
    DataList_1.DataListItem,
    {
      children: (0, jsx_runtime_1.jsx)(
        DataList_1.DataListItemRow,
        {
          children: (0, jsx_runtime_1.jsx)(
            DataList_1.DataListItemCells,
            {
              dataListCells: [
                (0, jsx_runtime_1.jsxs)(
                  DataList_1.DataListCell,
                  __assign(
                    { isFilled: false },
                    {
                      children: [
                        (0, jsx_runtime_1.jsxs)(
                          Flex_1.Flex,
                          __assign(
                            { flexWrap: { default: "nowrap" } },
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  Flex_1.FlexItem,
                                  { children: props.file.nameWithoutExtension },
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  Flex_1.FlexItem,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      FileLabel_1.FileLabel,
                                      { extension: props.file.extension },
                                      void 0
                                    ),
                                  },
                                  void 0
                                ),
                              ],
                            }
                          ),
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          Text_1.TextContent,
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              Text_1.Text,
                              __assign(
                                { component: Text_1.TextVariants.small },
                                { children: props.file.relativeDirPath.split("/").join(" > ") }
                              ),
                              void 0
                            ),
                          },
                          void 0
                        ),
                      ],
                    }
                  ),
                  "link"
                ),
              ],
            },
            void 0
          ),
        },
        void 0
      ),
    },
    void 0
  );
}
exports.FileDataListItem = FileDataListItem;
//# sourceMappingURL=HomePage.js.map
