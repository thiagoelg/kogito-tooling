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
exports.EditorPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_1 = require("react-router");
var Hooks_1 = require("../navigation/Hooks");
var EditorToolbar_1 = require("./EditorToolbar");
var tour_1 = require("../tour");
var i18n_1 = require("../i18n");
var api_1 = require("@kie-tools-core/editor/dist/api");
var embedded_1 = require("@kie-tools-core/editor/dist/embedded");
var Alert_1 = require("@patternfly/react-core/dist/js/components/Alert");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var DmnDevSandboxModalConfirmDeploy_1 = require("./DmnDevSandbox/DmnDevSandboxModalConfirmDeploy");
var DmnRunnerDrawer_1 = require("./DmnRunner/DmnRunnerDrawer");
var Alerts_1 = require("../alerts/Alerts");
var Hooks_2 = require("../reactExt/Hooks");
var TextEditorModal_1 = require("./TextEditor/TextEditorModal");
var WorkspacesContext_1 = require("../workspace/WorkspacesContext");
var WorkspaceFileHooks_1 = require("../workspace/hooks/WorkspaceFileHooks");
var PromiseState_1 = require("../workspace/hooks/PromiseState");
var EditorPageErrorPage_1 = require("./EditorPageErrorPage");
var OnlineEditorPage_1 = require("../pageTemplate/OnlineEditorPage");
var QueryParamsContext_1 = require("../queryParams/QueryParamsContext");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Bullseye_1 = require("@patternfly/react-core/dist/js/layouts/Bullseye");
var Spinner_1 = require("@patternfly/react-core/dist/js/components/Spinner");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
var EditorPageDockDrawer_1 = require("./EditorPageDockDrawer");
var DmnRunnerProvider_1 = require("./DmnRunner/DmnRunnerProvider");
var EditorEnvelopeLocatorContext_1 = require("../envelopeLocator/EditorEnvelopeLocatorContext");
function EditorPage(props) {
  var _this = this;
  var _a;
  var routes = (0, Hooks_1.useRoutes)();
  var editorEnvelopeLocator = (0, EditorEnvelopeLocatorContext_1.useEditorEnvelopeLocator)();
  var history = (0, react_router_1.useHistory)();
  var workspaces = (0, WorkspacesContext_1.useWorkspaces)();
  var _b = (0, i18n_1.useOnlineI18n)(),
    locale = _b.locale,
    i18n = _b.i18n;
  var _c = __read((0, Hooks_2.useController)(), 2),
    editor = _c[0],
    editorRef = _c[1];
  var _d = __read((0, Hooks_2.useController)(), 2),
    alerts = _d[0],
    alertsRef = _d[1];
  var _e = __read((0, Hooks_2.useController)(), 2),
    editorPageDock = _e[0],
    editorPageDockRef = _e[1];
  var _f = __read((0, react_1.useState)(false), 2),
    isTextEditorModalOpen = _f[0],
    setTextEditorModalOpen = _f[1];
  var _g = __read((0, react_1.useState)(false), 2),
    isFileBroken = _g[0],
    setFileBroken = _g[1];
  var lastContent = (0, react_1.useRef)();
  var workspaceFilePromise = (0, WorkspaceFileHooks_1.useWorkspaceFilePromise)(
    props.workspaceId,
    props.fileRelativePath
  );
  var _h = __read((0, react_1.useState)(), 2),
    embeddedEditorFile = _h[0],
    setEmbeddedEditorFile = _h[1];
  (0, tour_1.useDmnTour)(
    !!(editor === null || editor === void 0 ? void 0 : editor.isReady) &&
      ((_a = workspaceFilePromise.data) === null || _a === void 0 ? void 0 : _a.extension) === "dmn" &&
      !isFileBroken
  );
  var setContentErrorAlert = (0, Alerts_1.useAlert)(
    alerts,
    (0, react_1.useCallback)(
      function () {
        return (0, jsx_runtime_1.jsx)(
          Alert_1.Alert,
          {
            ouiaId: "set-content-error-alert",
            variant: "danger",
            title: i18n.editorPage.alerts.setContentError.title,
            actionLinks: (0, jsx_runtime_1.jsx)(
              Alert_1.AlertActionLink,
              __assign(
                {
                  "data-testid": "set-content-error-alert-button",
                  onClick: function () {
                    return setTextEditorModalOpen(true);
                  },
                },
                { children: i18n.editorPage.alerts.setContentError.action }
              ),
              void 0
            ),
          },
          void 0
        );
      },
      [i18n]
    )
  );
  var queryParams = (0, QueryParamsContext_1.useQueryParams)();
  (0, react_1.useEffect)(
    function () {
      if (!workspaceFilePromise.data) {
        return;
      }
      history.replace({
        pathname: routes.workspaceWithFilePath.path({
          workspaceId: workspaceFilePromise.data.workspaceId,
          fileRelativePath: workspaceFilePromise.data.relativePathWithoutExtension,
          extension: workspaceFilePromise.data.extension,
        }),
        search: queryParams.toString(),
      });
    },
    [history, routes, workspaceFilePromise, queryParams]
  );
  (0, Hooks_2.useCancelableEffect)(
    (0, react_1.useCallback)(
      function (_a) {
        var canceled = _a.canceled;
        if (!workspaceFilePromise.data) {
          return;
        }
        workspaceFilePromise.data.getFileContentsAsString().then(function (content) {
          if (canceled.get()) {
            return;
          }
          if (content === lastContent.current) {
            return;
          }
          lastContent.current = content;
          setEmbeddedEditorFile({
            path: workspaceFilePromise.data.relativePath,
            getFileContents: function () {
              return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  return [2, content];
                });
              });
            },
            isReadOnly: false,
            fileExtension: workspaceFilePromise.data.extension,
            fileName: workspaceFilePromise.data.nameWithoutExtension,
          });
        });
      },
      [workspaceFilePromise]
    )
  );
  var uniqueFileId = workspaceFilePromise.data
    ? workspaces.getUniqueFileIdentifier(workspaceFilePromise.data)
    : undefined;
  var prevUniqueFileId = (0, Hooks_2.usePrevious)(uniqueFileId);
  if (prevUniqueFileId !== uniqueFileId) {
    lastContent.current = undefined;
  }
  var saveContent = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var content, _a, _b;
        var _c;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              if (!workspaceFilePromise.data || !editor) {
                return [2];
              }
              return [4, editor.getContent()];
            case 1:
              content = _d.sent();
              lastContent.current = content;
              _b = (_a = workspaces).updateFile;
              _c = {};
              return [4, workspaces.fsService.getWorkspaceFs(workspaceFilePromise.data.workspaceId)];
            case 2:
              return [
                4,
                _b.apply(_a, [
                  ((_c.fs = _d.sent()),
                  (_c.file = workspaceFilePromise.data),
                  (_c.getNewContents = function () {
                    return Promise.resolve(content);
                  }),
                  _c),
                ]),
              ];
            case 3:
              _d.sent();
              editor === null || editor === void 0 ? void 0 : editor.getStateControl().setSavedCommand();
              return [2];
          }
        });
      });
    },
    [workspaces, editor, workspaceFilePromise]
  );
  (0, embedded_1.useStateControlSubscription)(
    editor,
    (0, react_1.useCallback)(
      function (isDirty) {
        if (!isDirty) {
          return;
        }
        saveContent();
      },
      [saveContent]
    ),
    { throttle: 200 }
  );
  (0, react_1.useEffect)(
    function () {
      alerts === null || alerts === void 0 ? void 0 : alerts.closeAll();
    },
    [alerts]
  );
  (0, react_1.useEffect)(
    function () {
      setFileBroken(false);
      setContentErrorAlert.close();
    },
    [uniqueFileId]
  );
  (0, react_1.useEffect)(
    function () {
      if (!(editor === null || editor === void 0 ? void 0 : editor.isReady) || !workspaceFilePromise.data) {
        return;
      }
      workspaceFilePromise.data.getFileContentsAsString().then(function (content) {
        if (content !== "") {
          return;
        }
        saveContent();
      });
    },
    [editor, saveContent, workspaceFilePromise]
  );
  var handleResourceContentRequest = (0, react_1.useCallback)(
    function (request) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, _b;
        var _c;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              _b = (_a = workspaces).resourceContentGet;
              _c = {};
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceId)];
            case 1:
              return [
                2,
                _b.apply(_a, [
                  ((_c.fs = _d.sent()),
                  (_c.workspaceId = props.workspaceId),
                  (_c.relativePath = request.path),
                  (_c.opts = request.opts),
                  _c),
                ]),
              ];
          }
        });
      });
    },
    [props.workspaceId, workspaces]
  );
  var handleResourceListRequest = (0, react_1.useCallback)(
    function (request) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, _b;
        var _c;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              _b = (_a = workspaces).resourceContentList;
              _c = {};
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceId)];
            case 1:
              return [
                2,
                _b.apply(_a, [
                  ((_c.fs = _d.sent()),
                  (_c.workspaceId = props.workspaceId),
                  (_c.globPattern = request.pattern),
                  (_c.opts = request.opts),
                  _c),
                ]),
              ];
          }
        });
      });
    },
    [workspaces, props.workspaceId]
  );
  var refreshEditor = (0, react_1.useCallback)(
    function () {
      alerts === null || alerts === void 0 ? void 0 : alerts.closeAll();
      setTextEditorModalOpen(false);
    },
    [alerts]
  );
  (0, react_1.useEffect)(
    function () {
      var _a;
      if (
        ((_a = workspaceFilePromise.data) === null || _a === void 0 ? void 0 : _a.extension) === "dmn" ||
        !workspaceFilePromise.data ||
        !(editor === null || editor === void 0 ? void 0 : editor.isReady)
      ) {
        return;
      }
      setTimeout(function () {
        editor === null || editor === void 0
          ? void 0
          : editor.validate().then(function (notifications) {
              editorPageDock === null || editorPageDock === void 0
                ? void 0
                : editorPageDock.setNotifications(
                    i18n.terms.validation,
                    "",
                    Array.isArray(notifications)
                      ? notifications.map(function (n) {
                          return __assign(__assign({}, n), { path: "" });
                        })
                      : []
                  );
            });
      }, 200);
    },
    [workspaceFilePromise, editor, i18n, editorPageDock]
  );
  var handleOpenFile = (0, react_1.useCallback)(
    function (relativePath) {
      return __awaiter(_this, void 0, void 0, function () {
        var file, _a, _b;
        var _c;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              if (!workspaceFilePromise.data) {
                return [2];
              }
              _b = (_a = workspaces).getFile;
              _c = {};
              return [4, workspaces.fsService.getWorkspaceFs(workspaceFilePromise.data.workspaceId)];
            case 1:
              return [
                4,
                _b.apply(_a, [
                  ((_c.fs = _d.sent()),
                  (_c.workspaceId = workspaceFilePromise.data.workspaceId),
                  (_c.relativePath = relativePath),
                  _c),
                ]),
              ];
            case 2:
              file = _d.sent();
              if (!file) {
                throw new Error(
                  "Can't find "
                    .concat(relativePath, " on Workspace '")
                    .concat(workspaceFilePromise.data.workspaceId, "'")
                );
              }
              history.push({
                pathname: routes.workspaceWithFilePath.path({
                  workspaceId: file.workspaceId,
                  fileRelativePath: file.relativePathWithoutExtension,
                  extension: file.extension,
                }),
              });
              return [2];
          }
        });
      });
    },
    [workspaceFilePromise, workspaces, history, routes]
  );
  var handleSetContentError = (0, react_1.useCallback)(
    function () {
      setFileBroken(true);
      setContentErrorAlert.show();
    },
    [setContentErrorAlert]
  );
  return (0, jsx_runtime_1.jsx)(
    OnlineEditorPage_1.OnlineEditorPage,
    {
      children: (0, jsx_runtime_1.jsx)(
        PromiseState_1.PromiseStateWrapper,
        {
          promise: workspaceFilePromise,
          pending: (0, jsx_runtime_1.jsx)(
            Bullseye_1.Bullseye,
            {
              children: (0, jsx_runtime_1.jsxs)(
                Text_1.TextContent,
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(
                      Bullseye_1.Bullseye,
                      { children: (0, jsx_runtime_1.jsx)(Spinner_1.Spinner, {}, void 0) },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    (0, jsx_runtime_1.jsx)(
                      Text_1.Text,
                      __assign({ component: Text_1.TextVariants.p }, { children: "Loading..." }),
                      void 0
                    ),
                  ],
                },
                void 0
              ),
            },
            void 0
          ),
          rejected: function (errors) {
            return (0, jsx_runtime_1.jsx)(
              EditorPageErrorPage_1.EditorPageErrorPage,
              { errors: errors, path: props.fileRelativePath },
              void 0
            );
          },
          resolved: function (file) {
            return (0, jsx_runtime_1.jsxs)(
              jsx_runtime_1.Fragment,
              {
                children: [
                  (0, jsx_runtime_1.jsx)(
                    DmnRunnerProvider_1.DmnRunnerProvider,
                    __assign(
                      { workspaceFile: file, editorPageDock: editorPageDock },
                      {
                        children: (0, jsx_runtime_1.jsxs)(
                          Page_1.Page,
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                EditorToolbar_1.EditorToolbar,
                                {
                                  workspaceFile: file,
                                  editor: editor,
                                  alerts: alerts,
                                  alertsRef: alertsRef,
                                  editorPageDock: editorPageDock,
                                },
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, void 0),
                              (0, jsx_runtime_1.jsx)(
                                Page_1.PageSection,
                                __assign(
                                  { hasOverflowScroll: true, padding: { default: "noPadding" } },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      DmnRunnerDrawer_1.DmnRunnerDrawer,
                                      __assign(
                                        { workspaceFile: file, editorPageDock: editorPageDock },
                                        {
                                          children: (0, jsx_runtime_1.jsx)(
                                            EditorPageDockDrawer_1.EditorPageDockDrawer,
                                            __assign(
                                              {
                                                ref: editorPageDockRef,
                                                isEditorReady:
                                                  editor === null || editor === void 0 ? void 0 : editor.isReady,
                                                workspaceFile: file,
                                              },
                                              {
                                                children:
                                                  embeddedEditorFile &&
                                                  (0, jsx_runtime_1.jsx)(
                                                    embedded_1.EmbeddedEditor,
                                                    {
                                                      ref: editorRef,
                                                      file: embeddedEditorFile,
                                                      kogitoWorkspace_openFile: handleOpenFile,
                                                      kogitoWorkspace_resourceContentRequest:
                                                        handleResourceContentRequest,
                                                      kogitoWorkspace_resourceListRequest: handleResourceListRequest,
                                                      kogitoEditor_setContentError: handleSetContentError,
                                                      editorEnvelopeLocator: editorEnvelopeLocator,
                                                      channelType: api_1.ChannelType.ONLINE_MULTI_FILE,
                                                      locale: locale,
                                                    },
                                                    workspaces.getUniqueFileIdentifier(file)
                                                  ),
                                              }
                                            ),
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
                        ),
                      }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    TextEditorModal_1.TextEditorModal,
                    {
                      editor: editor,
                      workspaceFile: file,
                      refreshEditor: refreshEditor,
                      isOpen: isTextEditorModalOpen,
                    },
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    DmnDevSandboxModalConfirmDeploy_1.DmnDevSandboxModalConfirmDeploy,
                    { workspaceFile: file, alerts: alerts },
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
    },
    void 0
  );
}
exports.EditorPage = EditorPage;
//# sourceMappingURL=EditorPage.js.map
