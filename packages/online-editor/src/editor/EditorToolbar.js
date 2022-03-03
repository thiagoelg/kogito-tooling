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
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.KebabDropdown = exports.PushToGitHubAlertActionLinks = exports.EditorToolbar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var Toolbar_1 = require("@patternfly/react-core/dist/js/components/Toolbar");
var ellipsis_v_icon_1 = require("@patternfly/react-icons/dist/js/icons/ellipsis-v-icon");
var save_icon_1 = require("@patternfly/react-icons/dist/js/icons/save-icon");
var angle_left_icon_1 = require("@patternfly/react-icons/dist/js/icons/angle-left-icon");
var react_1 = require("react");
var i18n_1 = require("../i18n");
var KieSandboxExtendedServicesButtons_1 = require("./KieSandboxExtendedServices/KieSandboxExtendedServicesButtons");
var Hooks_1 = require("../navigation/Hooks");
var SettingsContext_1 = require("../settings/SettingsContext");
var embedded_1 = require("@kie-tools-core/editor/dist/embedded");
var react_router_1 = require("react-router");
var EmbedModal_1 = require("./EmbedModal");
var Alerts_1 = require("../alerts/Alerts");
var Alert_1 = require("@patternfly/react-core/dist/js/components/Alert");
var WorkspacesContext_1 = require("../workspace/WorkspacesContext");
var sync_icon_1 = require("@patternfly/react-icons/dist/js/icons/sync-icon");
var folder_icon_1 = require("@patternfly/react-icons/dist/js/icons/folder-icon");
var image_icon_1 = require("@patternfly/react-icons/dist/js/icons/image-icon");
var download_icon_1 = require("@patternfly/react-icons/dist/js/icons/download-icon");
var plus_icon_1 = require("@patternfly/react-icons/dist/js/icons/plus-icon");
var github_icon_1 = require("@patternfly/react-icons/dist/js/icons/github-icon");
var arrow_circle_up_icon_1 = require("@patternfly/react-icons/dist/js/icons/arrow-circle-up-icon");
var columns_icon_1 = require("@patternfly/react-icons/dist/js/icons/columns-icon");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var NewFileDropdownMenu_1 = require("./NewFileDropdownMenu");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var FileLabel_1 = require("../workspace/components/FileLabel");
var WorkspaceHooks_1 = require("../workspace/hooks/WorkspaceHooks");
var check_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/check-circle-icon");
var FileSwitcher_1 = require("./FileSwitcher");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
var KieSandboxExtendedServicesDropdownGroup_1 = require("./KieSandboxExtendedServices/KieSandboxExtendedServicesDropdownGroup");
var trash_icon_1 = require("@patternfly/react-icons/dist/js/icons/trash-icon");
var caret_down_icon_1 = require("@patternfly/react-icons/dist/js/icons/caret-down-icon");
var GitService_1 = require("../workspace/services/GitService");
var WorkspaceOrigin_1 = require("../workspace/model/WorkspaceOrigin");
var PromiseState_1 = require("../workspace/hooks/PromiseState");
var Spinner_1 = require("@patternfly/react-core/dist/js/components/Spinner");
var WorkspaceLabel_1 = require("../workspace/components/WorkspaceLabel");
var sync_alt_icon_1 = require("@patternfly/react-icons/dist/js/icons/sync-alt-icon");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var WorkspaceStatusIndicator_1 = require("../workspace/components/WorkspaceStatusIndicator");
var ImportableUrlHooks_1 = require("../workspace/hooks/ImportableUrlHooks");
var SettingsModalBody_1 = require("../settings/SettingsModalBody");
var external_link_alt_icon_1 = require("@patternfly/react-icons/dist/js/icons/external-link-alt-icon");
var CreateGitHubRepositoryModal_1 = require("./CreateGitHubRepositoryModal");
var Hooks_2 = require("../github/Hooks");
var EditorEnvelopeLocatorContext_1 = require("../envelopeLocator/EditorEnvelopeLocatorContext");
var Hooks_3 = require("../reactExt/Hooks");
var showWhenSmall = {
  default: "visible",
  "2xl": "hidden",
  xl: "hidden",
  lg: "visible",
  md: "visible",
};
var hideWhenSmall = {
  default: "hidden",
  "2xl": "visible",
  xl: "visible",
  lg: "hidden",
  md: "hidden",
};
var hideWhenTiny = {
  default: "hidden",
  "2xl": "visible",
  xl: "visible",
  lg: "visible",
  md: "hidden",
};
function EditorToolbar(props) {
  var _this = this;
  var _a, _b, _c, _d, _e, _f;
  var routes = (0, Hooks_1.useRoutes)();
  var editorEnvelopeLocator = (0, EditorEnvelopeLocatorContext_1.useEditorEnvelopeLocator)();
  var settings = (0, SettingsContext_1.useSettings)();
  var settingsDispatch = (0, SettingsContext_1.useSettingsDispatch)();
  var history = (0, react_router_1.useHistory)();
  var workspaces = (0, WorkspacesContext_1.useWorkspaces)();
  var _g = __read((0, react_1.useState)(false), 2),
    isShareDropdownOpen = _g[0],
    setShareDropdownOpen = _g[1];
  var _h = __read((0, react_1.useState)(false), 2),
    isSyncGitHubGistDropdownOpen = _h[0],
    setSyncGitHubGistDropdownOpen = _h[1];
  var _j = __read((0, react_1.useState)(false), 2),
    isSyncGitRepositoryDropdownOpen = _j[0],
    setSyncGitRepositoryDropdownOpen = _j[1];
  var _k = __read((0, react_1.useState)(false), 2),
    isLargeKebabOpen = _k[0],
    setLargeKebabOpen = _k[1];
  var _l = __read((0, react_1.useState)(false), 2),
    isSmallKebabOpen = _l[0],
    setSmallKebabOpen = _l[1];
  var _m = __read((0, react_1.useState)(false), 2),
    isEmbedModalOpen = _m[0],
    setEmbedModalOpen = _m[1];
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var isEdited = (0, embedded_1.useDirtyState)(props.editor);
  var downloadRef = (0, react_1.useRef)(null);
  var downloadAllRef = (0, react_1.useRef)(null);
  var downloadPreviewRef = (0, react_1.useRef)(null);
  var copyContentTextArea = (0, react_1.useRef)(null);
  var _o = __read((0, react_1.useState)(false), 2),
    isNewFileDropdownMenuOpen = _o[0],
    setNewFileDropdownMenuOpen = _o[1];
  var workspacePromise = (0, WorkspaceHooks_1.useWorkspacePromise)(props.workspaceFile.workspaceId);
  var _p = __read((0, react_1.useState)(false), 2),
    isGitHubGistLoading = _p[0],
    setGitHubGistLoading = _p[1];
  var _q = __read((0, react_1.useState)(undefined), 2),
    gitHubGist = _q[0],
    setGitHubGist = _q[1];
  var workspaceImportableUrl = (0, ImportableUrlHooks_1.useImportableUrl)(
    (_b = (_a = workspacePromise.data) === null || _a === void 0 ? void 0 : _a.descriptor.origin.url) === null ||
      _b === void 0
      ? void 0
      : _b.toString()
  );
  var githubAuthInfo = (0, Hooks_2.useGitHubAuthInfo)();
  var canPushToGitRepository = (0, react_1.useMemo)(
    function () {
      return !!githubAuthInfo;
    },
    [githubAuthInfo]
  );
  var navigationBlockersBypass = (0, Hooks_1.useNavigationBlockersBypass)();
  (0, Hooks_3.useCancelableEffect)(
    (0, react_1.useCallback)(
      function (_a) {
        var canceled = _a.canceled;
        if (gitHubGist || workspaceImportableUrl.type !== ImportableUrlHooks_1.UrlType.GIST) {
          return;
        }
        var gistId = workspaceImportableUrl.gistId;
        if (!gistId) {
          return;
        }
        settingsDispatch.github.octokit.gists.get({ gist_id: gistId }).then(function (_a) {
          var gist = _a.data;
          if (canceled.get()) {
            return;
          }
          if (gist) {
            setGitHubGist(gist);
          }
        });
      },
      [gitHubGist, workspaceImportableUrl, settingsDispatch.github.octokit.gists]
    )
  );
  var successfullyCreateGistAlert = (0, Alerts_1.useAlert)(
    props.alerts,
    (0, react_1.useCallback)(
      function (_a) {
        var _b, _c;
        var close = _a.close;
        if (
          ((_b = workspacePromise.data) === null || _b === void 0 ? void 0 : _b.descriptor.origin.kind) !==
          WorkspaceOrigin_1.WorkspaceKind.GITHUB_GIST
        ) {
          return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
        }
        var gistUrl =
          (_c = workspacePromise.data) === null || _c === void 0 ? void 0 : _c.descriptor.origin.url.toString();
        return (0, jsx_runtime_1.jsx)(
          Alert_1.Alert,
          {
            variant: "success",
            title: i18n.editorPage.alerts.createGist,
            actionClose: (0, jsx_runtime_1.jsx)(Alert_1.AlertActionCloseButton, { onClose: close }, void 0),
            actionLinks: (0, jsx_runtime_1.jsx)(
              Alert_1.AlertActionLink,
              __assign(
                {
                  onClick: function () {
                    return window.open(gistUrl, "_blank");
                  },
                },
                { children: gistUrl }
              ),
              void 0
            ),
          },
          void 0
        );
      },
      [i18n, workspacePromise]
    ),
    { durationInSeconds: 4 }
  );
  var loadingGistAlert = (0, Alerts_1.useAlert)(
    props.alerts,
    (0, react_1.useCallback)(
      function (_a) {
        var _b, _c;
        var close = _a.close;
        if (
          ((_b = workspacePromise.data) === null || _b === void 0 ? void 0 : _b.descriptor.origin.kind) !==
          WorkspaceOrigin_1.WorkspaceKind.GITHUB_GIST
        ) {
          return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
        }
        var gistUrl =
          (_c = workspacePromise.data) === null || _c === void 0 ? void 0 : _c.descriptor.origin.url.toString();
        return (0, jsx_runtime_1.jsx)(
          Alert_1.Alert,
          {
            variant: "info",
            title: (0, jsx_runtime_1.jsxs)(
              jsx_runtime_1.Fragment,
              {
                children: [
                  (0, jsx_runtime_1.jsx)(Spinner_1.Spinner, { size: "sm" }, void 0),
                  "\u00A0\u00A0 Updating gist...",
                ],
              },
              void 0
            ),
            actionClose: (0, jsx_runtime_1.jsx)(Alert_1.AlertActionCloseButton, { onClose: close }, void 0),
            actionLinks: (0, jsx_runtime_1.jsx)(
              Alert_1.AlertActionLink,
              __assign(
                {
                  onClick: function () {
                    return window.open(gistUrl, "_blank");
                  },
                },
                { children: gistUrl }
              ),
              void 0
            ),
          },
          void 0
        );
      },
      [workspacePromise]
    )
  );
  (0, react_1.useEffect)(
    function () {
      if (isGitHubGistLoading) {
        loadingGistAlert.show();
      } else {
        loadingGistAlert.close();
      }
    },
    [isGitHubGistLoading, loadingGistAlert]
  );
  var successfullyUpdateGistAlert = (0, Alerts_1.useAlert)(
    props.alerts,
    (0, react_1.useCallback)(
      function (_a) {
        var _b, _c;
        var close = _a.close;
        if (
          ((_b = workspacePromise.data) === null || _b === void 0 ? void 0 : _b.descriptor.origin.kind) !==
          WorkspaceOrigin_1.WorkspaceKind.GITHUB_GIST
        ) {
          return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
        }
        var gistUrl =
          (_c = workspacePromise.data) === null || _c === void 0 ? void 0 : _c.descriptor.origin.url.toString();
        return (0, jsx_runtime_1.jsx)(
          Alert_1.Alert,
          {
            variant: "success",
            title: i18n.editorPage.alerts.updateGist,
            actionClose: (0, jsx_runtime_1.jsx)(Alert_1.AlertActionCloseButton, { onClose: close }, void 0),
            actionLinks: (0, jsx_runtime_1.jsx)(
              Alert_1.AlertActionLink,
              __assign(
                {
                  onClick: function () {
                    return window.open(gistUrl, "_blank");
                  },
                },
                { children: gistUrl }
              ),
              void 0
            ),
          },
          void 0
        );
      },
      [i18n, workspacePromise]
    ),
    { durationInSeconds: 4 }
  );
  var errorAlert = (0, Alerts_1.useAlert)(
    props.alerts,
    (0, react_1.useCallback)(
      function (_a) {
        var close = _a.close;
        return (0, jsx_runtime_1.jsx)(
          Alert_1.Alert,
          {
            variant: "danger",
            title: i18n.editorPage.alerts.error,
            actionClose: (0, jsx_runtime_1.jsx)(Alert_1.AlertActionCloseButton, { onClose: close }, void 0),
          },
          void 0
        );
      },
      [i18n]
    )
  );
  var shouldIncludeDownloadSvgDropdownItem = (0, react_1.useMemo)(
    function () {
      return props.workspaceFile.extension.toLowerCase() !== "pmml";
    },
    [props.workspaceFile]
  );
  var shouldIncludeEmbedDropdownItem = (0, react_1.useMemo)(
    function () {
      return props.workspaceFile.extension.toLowerCase() !== "pmml";
    },
    [props.workspaceFile]
  );
  var onDownload = (0, react_1.useCallback)(
    function () {
      var _a, _b;
      (_a = props.editor) === null || _a === void 0 ? void 0 : _a.getStateControl().setSavedCommand();
      (_b = props.alerts) === null || _b === void 0 ? void 0 : _b.closeAll();
      props.workspaceFile.getFileContents().then(function (content) {
        if (downloadRef.current) {
          var fileBlob = new Blob([content], { type: "text/plain" });
          downloadRef.current.href = URL.createObjectURL(fileBlob);
          downloadRef.current.click();
        }
      });
    },
    [props.editor, props.workspaceFile, props.alerts]
  );
  var downloadWorkspaceZip = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var fs, zipBlob;
        var _a;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              if (!props.editor) {
                return [2];
              }
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceFile.workspaceId)];
            case 1:
              fs = _b.sent();
              return [4, workspaces.prepareZip({ fs: fs, workspaceId: props.workspaceFile.workspaceId })];
            case 2:
              zipBlob = _b.sent();
              if (downloadAllRef.current) {
                downloadAllRef.current.href = URL.createObjectURL(zipBlob);
                downloadAllRef.current.click();
              }
              if (
                !(
                  ((_a = workspacePromise.data) === null || _a === void 0 ? void 0 : _a.descriptor.origin.kind) ===
                  WorkspaceOrigin_1.WorkspaceKind.LOCAL
                )
              )
                return [3, 4];
              return [
                4,
                workspaces.createSavePoint({
                  fs: fs,
                  workspaceId: props.workspaceFile.workspaceId,
                  gitConfig: githubAuthInfo,
                }),
              ];
            case 3:
              _b.sent();
              _b.label = 4;
            case 4:
              return [2];
          }
        });
      });
    },
    [props.editor, props.workspaceFile, workspaces, workspacePromise.data, githubAuthInfo]
  );
  var downloadSvg = (0, react_1.useCallback)(
    function () {
      var _a;
      (_a = props.editor) === null || _a === void 0
        ? void 0
        : _a.getPreview().then(function (previewSvg) {
            if (downloadPreviewRef.current && previewSvg) {
              var fileBlob = new Blob([previewSvg], { type: "image/svg+xml" });
              downloadPreviewRef.current.href = URL.createObjectURL(fileBlob);
              downloadPreviewRef.current.click();
            }
          });
    },
    [props.editor]
  );
  var forceUpdateGitHubGist = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var fs, _a, _b, _c, _d, e_1;
        var _e, _f;
        return __generator(this, function (_g) {
          switch (_g.label) {
            case 0:
              _g.trys.push([0, 6, 7, 8]);
              if (!githubAuthInfo) {
                return [2];
              }
              setGitHubGistLoading(true);
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceFile.workspaceId)];
            case 1:
              fs = _g.sent();
              _b = (_a = workspaces.gitService).push;
              _e = {
                fs: fs,
              };
              return [4, workspaces.getAbsolutePath({ workspaceId: props.workspaceFile.workspaceId })];
            case 2:
              return [
                4,
                _b.apply(_a, [
                  ((_e.dir = _g.sent()),
                  (_e.remote = GitService_1.GIST_ORIGIN_REMOTE_NAME),
                  (_e.ref = GitService_1.GIST_DEFAULT_BRANCH),
                  (_e.remoteRef = "refs/heads/".concat(GitService_1.GIST_DEFAULT_BRANCH)),
                  (_e.force = true),
                  (_e.authInfo = githubAuthInfo),
                  _e),
                ]),
              ];
            case 3:
              _g.sent();
              _d = (_c = workspaces).pull;
              _f = {};
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceFile.workspaceId)];
            case 4:
              return [
                4,
                _d.apply(_c, [
                  ((_f.fs = _g.sent()),
                  (_f.workspaceId = props.workspaceFile.workspaceId),
                  (_f.authInfo = githubAuthInfo),
                  _f),
                ]),
              ];
            case 5:
              _g.sent();
              return [3, 8];
            case 6:
              e_1 = _g.sent();
              errorAlert.show();
              return [3, 8];
            case 7:
              setGitHubGistLoading(false);
              setSyncGitHubGistDropdownOpen(false);
              return [7];
            case 8:
              successfullyUpdateGistAlert.show();
              return [2];
          }
        });
      });
    },
    [workspaces, props.workspaceFile.workspaceId, githubAuthInfo, successfullyUpdateGistAlert, errorAlert]
  );
  var errorPushingGist = (0, Alerts_1.useAlert)(
    props.alerts,
    (0, react_1.useCallback)(
      function (_a) {
        var close = _a.close;
        return (0, jsx_runtime_1.jsx)(
          Alert_1.Alert,
          __assign(
            {
              variant: "danger",
              title: i18n.editorPage.alerts.errorPushingGist,
              actionLinks: [
                (0, jsx_runtime_1.jsx)(
                  Alert_1.AlertActionLink,
                  __assign(
                    {
                      onClick: function () {
                        close();
                        forceUpdateGitHubGist();
                      },
                    },
                    { children: "Force push" }
                  ),
                  "force"
                ),
                (0, jsx_runtime_1.jsx)(
                  Alert_1.AlertActionLink,
                  __assign({ onClick: close }, { children: "Dismiss" }),
                  "dismiss"
                ),
              ],
              actionClose: (0, jsx_runtime_1.jsx)(Alert_1.AlertActionCloseButton, { onClose: close }, void 0),
            },
            { children: (0, jsx_runtime_1.jsx)("b", { children: i18n.editorPage.alerts.forcePushWarning }, void 0) }
          ),
          void 0
        );
      },
      [i18n, forceUpdateGitHubGist]
    )
  );
  var updateGitHubGist = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var fs, dir, _a, _b, e_2;
        var _c;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              _d.trys.push([0, 7, 8, 9]);
              if (!githubAuthInfo) {
                return [2];
              }
              setGitHubGistLoading(true);
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceFile.workspaceId)];
            case 1:
              fs = _d.sent();
              return [4, workspaces.getAbsolutePath({ workspaceId: props.workspaceFile.workspaceId })];
            case 2:
              dir = _d.sent();
              return [
                4,
                workspaces.createSavePoint({
                  fs: fs,
                  workspaceId: props.workspaceFile.workspaceId,
                  gitConfig: githubAuthInfo,
                }),
              ];
            case 3:
              _d.sent();
              return [
                4,
                workspaces.gitService.push({
                  fs: fs,
                  dir: dir,
                  remote: GitService_1.GIST_ORIGIN_REMOTE_NAME,
                  ref: GitService_1.GIST_DEFAULT_BRANCH,
                  remoteRef: "refs/heads/".concat(GitService_1.GIST_DEFAULT_BRANCH),
                  force: false,
                  authInfo: githubAuthInfo,
                }),
              ];
            case 4:
              _d.sent();
              _b = (_a = workspaces).pull;
              _c = {};
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceFile.workspaceId)];
            case 5:
              return [
                4,
                _b.apply(_a, [
                  ((_c.fs = _d.sent()),
                  (_c.workspaceId = props.workspaceFile.workspaceId),
                  (_c.authInfo = githubAuthInfo),
                  _c),
                ]),
              ];
            case 6:
              _d.sent();
              return [3, 9];
            case 7:
              e_2 = _d.sent();
              errorPushingGist.show();
              throw e_2;
            case 8:
              setGitHubGistLoading(false);
              setSyncGitHubGistDropdownOpen(false);
              return [7];
            case 9:
              successfullyUpdateGistAlert.show();
              return [2];
          }
        });
      });
    },
    [successfullyUpdateGistAlert, githubAuthInfo, workspaces, props.workspaceFile.workspaceId, errorPushingGist]
  );
  var createGitHubGist = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var gist, fs, workspaceRootDirPath, _a, _b, err_1;
        var _c;
        var _d, _e;
        return __generator(this, function (_f) {
          switch (_f.label) {
            case 0:
              _f.trys.push([0, 10, 11, 12]);
              if (!githubAuthInfo) {
                return [2];
              }
              setGitHubGistLoading(true);
              return [
                4,
                settingsDispatch.github.octokit.gists.create({
                  description:
                    (_e = (_d = workspacePromise.data) === null || _d === void 0 ? void 0 : _d.descriptor.name) !==
                      null && _e !== void 0
                      ? _e
                      : "",
                  public: true,
                  files: {
                    "README.md": {
                      content:
                        "\nThis Gist was created from KIE Sandbox.\n\nThis file is temporary and you should not be seeing it.\nIf you are, it means that creating this Gist failed and it can safely be deleted.\n",
                    },
                  },
                }),
              ];
            case 1:
              gist = _f.sent();
              if (!gist.data.git_push_url) {
                throw new Error("Gist creation failed.");
              }
              return [
                4,
                workspaces.descriptorService.turnIntoGist(
                  props.workspaceFile.workspaceId,
                  new URL(gist.data.git_push_url)
                ),
              ];
            case 2:
              _f.sent();
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceFile.workspaceId)];
            case 3:
              fs = _f.sent();
              workspaceRootDirPath = workspaces.getAbsolutePath({ workspaceId: props.workspaceFile.workspaceId });
              return [
                4,
                workspaces.gitService.addRemote({
                  fs: fs,
                  dir: workspaceRootDirPath,
                  url: gist.data.git_push_url,
                  name: GitService_1.GIST_ORIGIN_REMOTE_NAME,
                  force: true,
                }),
              ];
            case 4:
              _f.sent();
              return [
                4,
                workspaces.gitService.branch({
                  fs: fs,
                  dir: workspaceRootDirPath,
                  checkout: true,
                  name: GitService_1.GIST_DEFAULT_BRANCH,
                }),
              ];
            case 5:
              _f.sent();
              return [
                4,
                workspaces.createSavePoint({
                  fs: fs,
                  workspaceId: props.workspaceFile.workspaceId,
                  gitConfig: githubAuthInfo,
                }),
              ];
            case 6:
              _f.sent();
              return [
                4,
                workspaces.gitService.push({
                  fs: fs,
                  dir: workspaceRootDirPath,
                  remote: GitService_1.GIST_ORIGIN_REMOTE_NAME,
                  ref: GitService_1.GIST_DEFAULT_BRANCH,
                  remoteRef: "refs/heads/".concat(GitService_1.GIST_DEFAULT_BRANCH),
                  force: true,
                  authInfo: githubAuthInfo,
                }),
              ];
            case 7:
              _f.sent();
              _b = (_a = workspaces).pull;
              _c = {};
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceFile.workspaceId)];
            case 8:
              return [
                4,
                _b.apply(_a, [
                  ((_c.fs = _f.sent()),
                  (_c.workspaceId = props.workspaceFile.workspaceId),
                  (_c.authInfo = githubAuthInfo),
                  _c),
                ]),
              ];
            case 9:
              _f.sent();
              successfullyCreateGistAlert.show();
              return [2];
            case 10:
              err_1 = _f.sent();
              errorAlert.show();
              throw err_1;
            case 11:
              setGitHubGistLoading(false);
              return [7];
            case 12:
              return [2];
          }
        });
      });
    },
    [
      settingsDispatch.github.octokit,
      workspacePromise,
      workspaces,
      props.workspaceFile.workspaceId,
      githubAuthInfo,
      successfullyCreateGistAlert,
      errorAlert,
    ]
  );
  var forkGitHubGist = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var gist_1, fs, workspaceRootDirPath, remoteName, err_2;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 6, 7, 8]);
              if (!githubAuthInfo || !(gitHubGist === null || gitHubGist === void 0 ? void 0 : gitHubGist.id)) {
                return [2];
              }
              setGitHubGistLoading(true);
              return [
                4,
                settingsDispatch.github.octokit.gists.fork({
                  gist_id: gitHubGist.id,
                }),
              ];
            case 1:
              gist_1 = _a.sent();
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceFile.workspaceId)];
            case 2:
              fs = _a.sent();
              workspaceRootDirPath = workspaces.getAbsolutePath({ workspaceId: props.workspaceFile.workspaceId });
              remoteName = gist_1.data.id;
              return [
                4,
                workspaces.gitService.addRemote({
                  fs: fs,
                  dir: workspaceRootDirPath,
                  url: gist_1.data.git_push_url,
                  name: remoteName,
                  force: true,
                }),
              ];
            case 3:
              _a.sent();
              return [
                4,
                workspaces.createSavePoint({
                  fs: fs,
                  workspaceId: props.workspaceFile.workspaceId,
                  gitConfig: githubAuthInfo,
                }),
              ];
            case 4:
              _a.sent();
              return [
                4,
                workspaces.gitService.push({
                  fs: fs,
                  dir: workspaceRootDirPath,
                  remote: remoteName,
                  ref: GitService_1.GIST_DEFAULT_BRANCH,
                  remoteRef: "refs/heads/".concat(GitService_1.GIST_DEFAULT_BRANCH),
                  force: true,
                  authInfo: githubAuthInfo,
                }),
              ];
            case 5:
              _a.sent();
              navigationBlockersBypass.execute(function () {
                history.push({
                  pathname: routes.importModel.path({}),
                  search: routes.importModel.queryString({ url: gist_1.data.html_url }),
                });
              });
              return [3, 8];
            case 6:
              err_2 = _a.sent();
              errorAlert.show();
              throw err_2;
            case 7:
              setGitHubGistLoading(false);
              return [7];
            case 8:
              return [2];
          }
        });
      });
    },
    [
      githubAuthInfo,
      gitHubGist,
      settingsDispatch.github.octokit.gists,
      workspaces,
      props.workspaceFile.workspaceId,
      navigationBlockersBypass,
      history,
      routes.importModel,
      errorAlert,
    ]
  );
  var openEmbedModal = (0, react_1.useCallback)(function () {
    setEmbedModalOpen(true);
  }, []);
  var workspaceHasNestedDirectories = (0, react_1.useMemo)(
    function () {
      var _a;
      return (
        ((_a = workspacePromise.data) === null || _a === void 0
          ? void 0
          : _a.files.filter(function (f) {
              return f.relativePath !== f.name;
            }).length) !== 0
      );
    },
    [workspacePromise]
  );
  var isGitHubGistOwner = (0, react_1.useMemo)(
    function () {
      var _a;
      return (
        (githubAuthInfo === null || githubAuthInfo === void 0 ? void 0 : githubAuthInfo.username) &&
        ((_a = gitHubGist === null || gitHubGist === void 0 ? void 0 : gitHubGist.owner) === null || _a === void 0
          ? void 0
          : _a.login) === githubAuthInfo.username
      );
    },
    [githubAuthInfo, gitHubGist]
  );
  var canCreateGitRepository = (0, react_1.useMemo)(
    function () {
      var _a, _b;
      return (
        settings.github.authStatus === SettingsContext_1.AuthStatus.SIGNED_IN &&
        ((_a = settings.github.scopes) === null || _a === void 0
          ? void 0
          : _a.includes(SettingsContext_1.GithubScopes.REPO)) &&
        ((_b = workspacePromise.data) === null || _b === void 0 ? void 0 : _b.descriptor.origin.kind) ===
          WorkspaceOrigin_1.WorkspaceKind.LOCAL
      );
    },
    [workspacePromise, settings.github.authStatus, settings.github.scopes]
  );
  var canCreateGitHubGist = (0, react_1.useMemo)(
    function () {
      var _a, _b;
      return (
        settings.github.authStatus === SettingsContext_1.AuthStatus.SIGNED_IN &&
        ((_a = settings.github.scopes) === null || _a === void 0
          ? void 0
          : _a.includes(SettingsContext_1.GithubScopes.GIST)) &&
        ((_b = workspacePromise.data) === null || _b === void 0 ? void 0 : _b.descriptor.origin.kind) ===
          WorkspaceOrigin_1.WorkspaceKind.LOCAL &&
        !workspaceHasNestedDirectories
      );
    },
    [workspacePromise, settings.github.authStatus, settings.github.scopes, workspaceHasNestedDirectories]
  );
  var canUpdateGitHubGist = (0, react_1.useMemo)(
    function () {
      var _a, _b;
      return (
        settings.github.authStatus === SettingsContext_1.AuthStatus.SIGNED_IN &&
        ((_a = settings.github.scopes) === null || _a === void 0
          ? void 0
          : _a.includes(SettingsContext_1.GithubScopes.GIST)) &&
        !!isGitHubGistOwner &&
        ((_b = workspacePromise.data) === null || _b === void 0 ? void 0 : _b.descriptor.origin.kind) ===
          WorkspaceOrigin_1.WorkspaceKind.GITHUB_GIST &&
        !workspaceHasNestedDirectories
      );
    },
    [
      workspacePromise,
      settings.github.authStatus,
      settings.github.scopes,
      workspaceHasNestedDirectories,
      isGitHubGistOwner,
    ]
  );
  var canForkGitHubGist = (0, react_1.useMemo)(
    function () {
      var _a, _b;
      return (
        settings.github.authStatus === SettingsContext_1.AuthStatus.SIGNED_IN &&
        ((_a = settings.github.scopes) === null || _a === void 0
          ? void 0
          : _a.includes(SettingsContext_1.GithubScopes.GIST)) &&
        !isGitHubGistOwner &&
        ((_b = workspacePromise.data) === null || _b === void 0 ? void 0 : _b.descriptor.origin.kind) ===
          WorkspaceOrigin_1.WorkspaceKind.GITHUB_GIST &&
        !workspaceHasNestedDirectories
      );
    },
    [
      workspacePromise,
      settings.github.authStatus,
      settings.github.scopes,
      workspaceHasNestedDirectories,
      isGitHubGistOwner,
    ]
  );
  var _r = __read((0, react_1.useState)(false), 2),
    isCreateGitHubRepositoryModalOpen = _r[0],
    setCreateGitHubRepositoryModalOpen = _r[1];
  var shareDropdownItems = (0, react_1.useMemo)(
    function () {
      var _a, _b;
      return __spreadArray(
        __spreadArray(
          [
            (0, jsx_runtime_1.jsxs)(
              Dropdown_1.DropdownGroup,
              __assign(
                { label: "Download" },
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(
                      Dropdown_1.DropdownItem,
                      __assign(
                        {
                          onClick: onDownload,
                          description: "".concat(props.workspaceFile.name, " will be downloaded"),
                          icon: (0, jsx_runtime_1.jsx)(download_icon_1.DownloadIcon, {}, void 0),
                          ouiaId: "download-file-dropdown-button",
                        },
                        { children: "Current file" }
                      ),
                      "download-file-item"
                    ),
                    shouldIncludeDownloadSvgDropdownItem &&
                      (0, jsx_runtime_1.jsx)(
                        Dropdown_1.DropdownItem,
                        __assign(
                          {
                            "data-testid": "dropdown-download-svg",
                            component: "button",
                            onClick: downloadSvg,
                            description: "Image of ".concat(
                              props.workspaceFile.name,
                              " will be downloaded in SVG format"
                            ),
                            icon: (0, jsx_runtime_1.jsx)(image_icon_1.ImageIcon, {}, void 0),
                          },
                          { children: "Current file's SVG" }
                        ),
                        "dropdown-download-svg"
                      ),
                    (0, jsx_runtime_1.jsx)(
                      Dropdown_1.DropdownItem,
                      __assign(
                        {
                          onClick: downloadWorkspaceZip,
                          description: "A zip file including all files will be downloaded",
                          icon: (0, jsx_runtime_1.jsx)(folder_icon_1.FolderIcon, {}, void 0),
                        },
                        { children: "All files" }
                      ),
                      "download-zip-item"
                    ),
                  ],
                }
              ),
              "download-group"
            ),
          ],
          __read(
            shouldIncludeEmbedDropdownItem
              ? [
                  (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, "divider-other-group"),
                  (0, jsx_runtime_1.jsx)(
                    Dropdown_1.DropdownGroup,
                    __assign(
                      { label: "Other" },
                      {
                        children: (0, jsx_runtime_1.jsxs)(
                          Dropdown_1.DropdownItem,
                          __assign(
                            {
                              "data-testid": "dropdown-embed",
                              component: "button",
                              onClick: openEmbedModal,
                              icon: (0, jsx_runtime_1.jsx)(columns_icon_1.ColumnsIcon, {}, void 0),
                            },
                            { children: [i18n.editorToolbar.embed, "..."] }
                          ),
                          "dropdown-embed"
                        ),
                      }
                    ),
                    "other-group"
                  ),
                ]
              : []
          ),
          false
        ),
        __read(
          ((_a = workspacePromise.data) === null || _a === void 0 ? void 0 : _a.descriptor.origin.kind) ===
            WorkspaceOrigin_1.WorkspaceKind.LOCAL ||
            ((_b = workspacePromise.data) === null || _b === void 0 ? void 0 : _b.descriptor.origin.kind) ===
              WorkspaceOrigin_1.WorkspaceKind.GITHUB_GIST
            ? [
                (0, jsx_runtime_1.jsxs)(
                  Dropdown_1.DropdownGroup,
                  __assign(
                    { label: i18n.names.github },
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)(
                          Tooltip_1.Tooltip,
                          __assign(
                            {
                              "data-testid": "create-github-repository-tooltip",
                              content: (0, jsx_runtime_1.jsx)(
                                "div",
                                {
                                  children:
                                    "You can't create a repository because you're not authenticated with GitHub.",
                                },
                                void 0
                              ),
                              trigger: !canCreateGitRepository ? "mouseenter click" : "",
                              position: "left",
                            },
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Dropdown_1.DropdownItem,
                                __assign(
                                  {
                                    icon: (0, jsx_runtime_1.jsx)(github_icon_1.GithubIcon, {}, void 0),
                                    "data-testid": "create-github-repository-button",
                                    component: "button",
                                    onClick: function () {
                                      return setCreateGitHubRepositoryModalOpen(true);
                                    },
                                    isDisabled: !canCreateGitRepository,
                                  },
                                  { children: "Create Repository..." }
                                ),
                                void 0
                              ),
                            }
                          ),
                          "dropdown-create-github-repository"
                        ),
                        (0, jsx_runtime_1.jsx)(
                          Tooltip_1.Tooltip,
                          __assign(
                            {
                              "data-testid": "create-github-gist-tooltip",
                              content: (0, jsx_runtime_1.jsx)(
                                "div",
                                { children: i18n.editorToolbar.cantCreateGistTooltip },
                                void 0
                              ),
                              trigger: !canCreateGitHubGist ? "mouseenter click" : "",
                              position: "left",
                            },
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Dropdown_1.DropdownItem,
                                __assign(
                                  {
                                    icon: (0, jsx_runtime_1.jsx)(github_icon_1.GithubIcon, {}, void 0),
                                    "data-testid": "create-github-gist-button",
                                    component: "button",
                                    onClick: createGitHubGist,
                                    isDisabled: !canCreateGitHubGist,
                                  },
                                  { children: i18n.editorToolbar.createGist }
                                ),
                                void 0
                              ),
                            }
                          ),
                          "dropdown-create-github-gist"
                        ),
                        !canPushToGitRepository &&
                          (0, jsx_runtime_1.jsxs)(
                            jsx_runtime_1.Fragment,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, void 0),
                                (0, jsx_runtime_1.jsx)(
                                  Dropdown_1.DropdownItem,
                                  __assign(
                                    {
                                      onClick: function () {
                                        return settingsDispatch.open(SettingsModalBody_1.SettingsTabs.GITHUB);
                                      },
                                    },
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        Button_1.Button,
                                        __assign(
                                          { isInline: true, variant: Button_1.ButtonVariant.link },
                                          { children: "Configure GitHub token..." }
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
                    }
                  ),
                  "github-group"
                ),
              ]
            : []
        ),
        false
      );
    },
    [
      canPushToGitRepository,
      onDownload,
      workspacePromise,
      props.workspaceFile,
      shouldIncludeDownloadSvgDropdownItem,
      downloadSvg,
      downloadWorkspaceZip,
      shouldIncludeEmbedDropdownItem,
      openEmbedModal,
      i18n,
      canCreateGitHubGist,
      canCreateGitRepository,
      createGitHubGist,
      settingsDispatch,
    ]
  );
  (0, react_1.useEffect)(
    function () {
      if (!workspacePromise.data) {
        return;
      }
      if (downloadRef.current) {
        downloadRef.current.download = "".concat(props.workspaceFile.name);
      }
      if (downloadAllRef.current) {
        downloadAllRef.current.download = "".concat(workspacePromise.data.descriptor.name, ".zip");
      }
      if (downloadPreviewRef.current) {
        downloadPreviewRef.current.download = "".concat(props.workspaceFile.name, ".svg");
      }
    },
    [props.workspaceFile, workspacePromise.data]
  );
  var deleteWorkspaceFile = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var nextFile, _a, _b;
        var _c;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              if (!workspacePromise.data) {
                return [2];
              }
              if (!(workspacePromise.data.files.length === 1)) return [3, 2];
              return [4, workspaces.deleteWorkspace({ workspaceId: props.workspaceFile.workspaceId })];
            case 1:
              _d.sent();
              history.push({ pathname: routes.home.path({}) });
              return [2];
            case 2:
              nextFile = workspacePromise.data.files
                .filter(function (f) {
                  return (
                    f.relativePath !== props.workspaceFile.relativePath &&
                    editorEnvelopeLocator.hasMappingFor(f.relativePath)
                  );
                })
                .pop();
              _b = (_a = workspaces).deleteFile;
              _c = {};
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceFile.workspaceId)];
            case 3:
              return [4, _b.apply(_a, [((_c.fs = _d.sent()), (_c.file = props.workspaceFile), _c)])];
            case 4:
              _d.sent();
              if (!nextFile) {
                history.push({ pathname: routes.home.path({}) });
                return [2];
              }
              history.push({
                pathname: routes.workspaceWithFilePath.path({
                  workspaceId: nextFile.workspaceId,
                  fileRelativePath: nextFile.relativePathWithoutExtension,
                  extension: nextFile.extension,
                }),
              });
              return [2];
          }
        });
      });
    },
    [routes, history, workspacePromise.data, props.workspaceFile, workspaces, editorEnvelopeLocator]
  );
  var workspaceNameRef = (0, react_1.useRef)(null);
  var resetWorkspaceName = (0, react_1.useCallback)(
    function () {
      if (workspaceNameRef.current && workspacePromise.data) {
        workspaceNameRef.current.value = workspacePromise.data.descriptor.name;
      }
    },
    [workspacePromise.data]
  );
  (0, react_1.useEffect)(resetWorkspaceName, [resetWorkspaceName]);
  var onRenameWorkspace = (0, react_1.useCallback)(
    function (newName) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!newName) {
                resetWorkspaceName();
                return [2];
              }
              if (!workspacePromise.data || newName === workspacePromise.data.descriptor.name) {
                return [2];
              }
              return [
                4,
                workspaces.renameWorkspace({
                  workspaceId: workspacePromise.data.descriptor.workspaceId,
                  newName: newName.trim(),
                }),
              ];
            case 1:
              _a.sent();
              return [2];
          }
        });
      });
    },
    [workspacePromise.data, workspaces, resetWorkspaceName]
  );
  var onWorkspaceNameKeyDown = (0, react_1.useCallback)(
    function (e) {
      e.stopPropagation();
      if (e.keyCode === 13) {
        e.currentTarget.blur();
      } else if (e.keyCode === 27) {
        resetWorkspaceName();
        e.currentTarget.blur();
      }
    },
    [resetWorkspaceName]
  );
  var deleteFileDropdownItem = (0, react_1.useMemo)(
    function () {
      return (0, jsx_runtime_1.jsx)(
        Dropdown_1.DropdownItem,
        __assign(
          { onClick: deleteWorkspaceFile },
          {
            children: (0, jsx_runtime_1.jsxs)(
              Flex_1.Flex,
              __assign(
                { flexWrap: { default: "nowrap" } },
                {
                  children: [
                    (0, jsx_runtime_1.jsxs)(
                      Flex_1.FlexItem,
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(trash_icon_1.TrashIcon, {}, void 0),
                          "\u00A0\u00A0Delete ",
                          (0, jsx_runtime_1.jsx)(
                            "b",
                            { children: '"'.concat(props.workspaceFile.nameWithoutExtension, '"') },
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
                              { extension: props.workspaceFile.extension },
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
          }
        ),
        "delete-dropdown-item"
      );
    },
    [deleteWorkspaceFile, props.workspaceFile]
  );
  var createSavePointDropdownItem = (0, react_1.useMemo)(
    function () {
      return (0, jsx_runtime_1.jsx)(
        Dropdown_1.DropdownItem,
        __assign(
          {
            icon: (0, jsx_runtime_1.jsx)(save_icon_1.SaveIcon, {}, void 0),
            onClick: function () {
              return __awaiter(_this, void 0, void 0, function () {
                var _a, _b;
                var _c;
                return __generator(this, function (_d) {
                  switch (_d.label) {
                    case 0:
                      _b = (_a = workspaces).createSavePoint;
                      _c = {};
                      return [4, workspaces.fsService.getWorkspaceFs(props.workspaceFile.workspaceId)];
                    case 1:
                      return [
                        2,
                        _b.apply(_a, [
                          ((_c.fs = _d.sent()),
                          (_c.workspaceId = props.workspaceFile.workspaceId),
                          (_c.gitConfig = githubAuthInfo),
                          _c),
                        ]),
                      ];
                  }
                });
              });
            },
            description: "Create a save point",
          },
          { children: "Commit" }
        ),
        "commit-dropdown-item"
      );
    },
    [workspaces, props.workspaceFile, githubAuthInfo]
  );
  var pushingAlert = (0, Alerts_1.useAlert)(
    props.alerts,
    (0, react_1.useCallback)(
      function (_a) {
        var _b, _c;
        var close = _a.close;
        if (
          ((_b = workspacePromise.data) === null || _b === void 0 ? void 0 : _b.descriptor.origin.kind) !==
          WorkspaceOrigin_1.WorkspaceKind.GIT
        ) {
          return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
        }
        return (0, jsx_runtime_1.jsx)(
          Alert_1.Alert,
          {
            variant: "info",
            title: (0, jsx_runtime_1.jsxs)(
              jsx_runtime_1.Fragment,
              {
                children: [
                  (0, jsx_runtime_1.jsx)(Spinner_1.Spinner, { size: "sm" }, void 0),
                  "\u00A0\u00A0 ",
                  "Pushing to '".concat(
                    (_c = workspacePromise.data) === null || _c === void 0 ? void 0 : _c.descriptor.origin.url,
                    "'..."
                  ),
                ],
              },
              void 0
            ),
          },
          void 0
        );
      },
      [workspacePromise]
    )
  );
  var pushSuccessAlert = (0, Alerts_1.useAlert)(
    props.alerts,
    (0, react_1.useCallback)(
      function (_a) {
        var _b, _c;
        var close = _a.close;
        if (
          ((_b = workspacePromise.data) === null || _b === void 0 ? void 0 : _b.descriptor.origin.kind) !==
          WorkspaceOrigin_1.WorkspaceKind.GIT
        ) {
          return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
        }
        return (0, jsx_runtime_1.jsx)(
          Alert_1.Alert,
          {
            variant: "success",
            title: "Pushed to '".concat(
              (_c = workspacePromise.data) === null || _c === void 0 ? void 0 : _c.descriptor.origin.url,
              "'"
            ),
          },
          void 0
        );
      },
      [workspacePromise]
    ),
    { durationInSeconds: 4 }
  );
  var pushErrorAlert = (0, Alerts_1.useAlert)(
    props.alerts,
    (0, react_1.useCallback)(
      function (_a) {
        var _b, _c;
        var close = _a.close;
        if (
          ((_b = workspacePromise.data) === null || _b === void 0 ? void 0 : _b.descriptor.origin.kind) !==
          WorkspaceOrigin_1.WorkspaceKind.GIT
        ) {
          return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
        }
        return (0, jsx_runtime_1.jsx)(
          Alert_1.Alert,
          {
            variant: "danger",
            title: "Error pushing to '".concat(
              (_c = workspacePromise.data) === null || _c === void 0 ? void 0 : _c.descriptor.origin.url,
              "'"
            ),
            actionClose: (0, jsx_runtime_1.jsx)(Alert_1.AlertActionCloseButton, { onClose: close }, void 0),
          },
          void 0
        );
      },
      [workspacePromise]
    )
  );
  var pullingAlert = (0, Alerts_1.useAlert)(
    props.alerts,
    (0, react_1.useCallback)(
      function (_a) {
        var _b, _c;
        var close = _a.close;
        if (
          ((_b = workspacePromise.data) === null || _b === void 0 ? void 0 : _b.descriptor.origin.kind) !==
          WorkspaceOrigin_1.WorkspaceKind.GIT
        ) {
          return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
        }
        return (0, jsx_runtime_1.jsx)(
          Alert_1.Alert,
          {
            variant: "info",
            title: (0, jsx_runtime_1.jsxs)(
              jsx_runtime_1.Fragment,
              {
                children: [
                  (0, jsx_runtime_1.jsx)(Spinner_1.Spinner, { size: "sm" }, void 0),
                  "\u00A0\u00A0 ",
                  "Pulling from '".concat(
                    (_c = workspacePromise.data) === null || _c === void 0 ? void 0 : _c.descriptor.origin.url,
                    "'..."
                  ),
                ],
              },
              void 0
            ),
          },
          void 0
        );
      },
      [workspacePromise]
    )
  );
  var pullSuccessAlert = (0, Alerts_1.useAlert)(
    props.alerts,
    (0, react_1.useCallback)(
      function (_a) {
        var _b, _c;
        var close = _a.close;
        if (
          ((_b = workspacePromise.data) === null || _b === void 0 ? void 0 : _b.descriptor.origin.kind) !==
          WorkspaceOrigin_1.WorkspaceKind.GIT
        ) {
          return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
        }
        return (0, jsx_runtime_1.jsx)(
          Alert_1.Alert,
          {
            variant: "success",
            title: "Pulled from '".concat(
              (_c = workspacePromise.data) === null || _c === void 0 ? void 0 : _c.descriptor.origin.url,
              "'"
            ),
          },
          void 0
        );
      },
      [workspacePromise]
    ),
    { durationInSeconds: 4 }
  );
  var pushNewBranch = (0, react_1.useCallback)(
    function (newBranchName) {
      return __awaiter(_this, void 0, void 0, function () {
        var fs, workspaceRootDirPath;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!githubAuthInfo || !workspacePromise.data) {
                return [2];
              }
              _a.label = 1;
            case 1:
              _a.trys.push([1, , 7, 8]);
              pushingAlert.show();
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceFile.workspaceId)];
            case 2:
              fs = _a.sent();
              return [4, workspaces.getAbsolutePath({ workspaceId: props.workspaceFile.workspaceId })];
            case 3:
              workspaceRootDirPath = _a.sent();
              return [
                4,
                workspaces.createSavePoint({
                  fs: fs,
                  workspaceId: props.workspaceFile.workspaceId,
                  gitConfig: githubAuthInfo,
                }),
              ];
            case 4:
              _a.sent();
              return [
                4,
                workspaces.gitService.branch({
                  fs: fs,
                  dir: workspaceRootDirPath,
                  checkout: false,
                  name: newBranchName,
                }),
              ];
            case 5:
              _a.sent();
              return [
                4,
                workspaces.gitService.push({
                  fs: fs,
                  dir: workspaceRootDirPath,
                  remote: GitService_1.GIT_ORIGIN_REMOTE_NAME,
                  remoteRef: "refs/heads/".concat(newBranchName),
                  ref: newBranchName,
                  force: false,
                  authInfo: githubAuthInfo,
                }),
              ];
            case 6:
              _a.sent();
              history.push({
                pathname: routes.importModel.path({}),
                search: routes.importModel.queryString({
                  url: "".concat(workspacePromise.data.descriptor.origin.url),
                  branch: newBranchName,
                }),
              });
              return [3, 8];
            case 7:
              pushingAlert.close();
              return [7];
            case 8:
              return [2];
          }
        });
      });
    },
    [githubAuthInfo, routes, history, props.workspaceFile.workspaceId, workspacePromise, workspaces, pushingAlert]
  );
  var pullErrorAlert = (0, Alerts_1.useAlert)(
    props.alerts,
    (0, react_1.useCallback)(
      function (_a, _b) {
        var _c, _d;
        var close = _a.close;
        var newBranchName = _b.newBranchName;
        if (
          ((_c = workspacePromise.data) === null || _c === void 0 ? void 0 : _c.descriptor.origin.kind) !==
          WorkspaceOrigin_1.WorkspaceKind.GIT
        ) {
          return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
        }
        return (0, jsx_runtime_1.jsxs)(
          Alert_1.Alert,
          __assign(
            {
              variant: "danger",
              title: "Error pulling from '".concat(
                (_d = workspacePromise.data) === null || _d === void 0 ? void 0 : _d.descriptor.origin.url,
                "'"
              ),
              actionClose: (0, jsx_runtime_1.jsx)(Alert_1.AlertActionCloseButton, { onClose: close }, void 0),
              actionLinks: (0, jsx_runtime_1.jsxs)(
                jsx_runtime_1.Fragment,
                {
                  children: [
                    canPushToGitRepository &&
                      (0, jsx_runtime_1.jsx)(
                        Alert_1.AlertActionLink,
                        __assign(
                          {
                            onClick: function () {
                              return pushNewBranch(newBranchName);
                            },
                          },
                          { children: "Switch to '".concat(newBranchName, "'") }
                        ),
                        void 0
                      ),
                    !canPushToGitRepository &&
                      (0, jsx_runtime_1.jsx)(
                        Alert_1.AlertActionLink,
                        __assign(
                          {
                            onClick: function () {
                              return settingsDispatch.open(SettingsModalBody_1.SettingsTabs.GITHUB);
                            },
                          },
                          { children: "Configure GitHub token..." }
                        ),
                        void 0
                      ),
                  ],
                },
                void 0
              ),
            },
            {
              children: [
                "This usually happens when your branch has conflicts with the upstream branch.",
                (0, jsx_runtime_1.jsx)("br", {}, void 0),
                (0, jsx_runtime_1.jsx)("br", {}, void 0),
                canPushToGitRepository && "You can still save your work to a new branch.",
                !canPushToGitRepository &&
                  "To be able to save your work on a new branch, please authenticate with GitHub.",
              ],
            }
          ),
          void 0
        );
      },
      [canPushToGitRepository, pushNewBranch, settingsDispatch, workspacePromise]
    )
  );
  var pullFromGitRepository = (0, react_1.useCallback)(
    function (args) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, _b, _c, _d, e_3, randomString, newBranchName;
        var _e, _f;
        var _g;
        return __generator(this, function (_h) {
          switch (_h.label) {
            case 0:
              pullingAlert.close();
              pullErrorAlert.close();
              pullSuccessAlert.close();
              if (args.showAlerts) {
                pullingAlert.show();
              }
              _b = (_a = workspaces).createSavePoint;
              _e = {};
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceFile.workspaceId)];
            case 1:
              return [
                4,
                _b.apply(_a, [
                  ((_e.fs = _h.sent()),
                  (_e.workspaceId = props.workspaceFile.workspaceId),
                  (_e.gitConfig = githubAuthInfo),
                  _e),
                ]),
              ];
            case 2:
              _h.sent();
              _h.label = 3;
            case 3:
              _h.trys.push([3, 6, 7, 8]);
              _d = (_c = workspaces).pull;
              _f = {};
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceFile.workspaceId)];
            case 4:
              return [
                4,
                _d.apply(_c, [
                  ((_f.fs = _h.sent()),
                  (_f.workspaceId = props.workspaceFile.workspaceId),
                  (_f.authInfo = githubAuthInfo),
                  _f),
                ]),
              ];
            case 5:
              _h.sent();
              if (args.showAlerts) {
                pullSuccessAlert.show();
              }
              return [3, 8];
            case 6:
              e_3 = _h.sent();
              console.error(e_3);
              if (args.showAlerts) {
                randomString = (Math.random() + 1).toString(36).substring(7);
                newBranchName = ""
                  .concat(
                    (_g = workspacePromise.data) === null || _g === void 0 ? void 0 : _g.descriptor.origin.branch,
                    "-"
                  )
                  .concat(randomString);
                pullErrorAlert.show({ newBranchName: newBranchName });
              }
              return [3, 8];
            case 7:
              if (args.showAlerts) {
                pullingAlert.close();
              }
              return [7];
            case 8:
              return [2];
          }
        });
      });
    },
    [
      pullingAlert,
      pullErrorAlert,
      pullSuccessAlert,
      workspaces,
      props.workspaceFile.workspaceId,
      githubAuthInfo,
      workspacePromise,
    ]
  );
  var pushToGitRepository = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var workspaceId, _a, _b, workspace, _c, _d, e_4;
        var _e, _f;
        return __generator(this, function (_g) {
          switch (_g.label) {
            case 0:
              pushingAlert.close();
              pushErrorAlert.close();
              pushSuccessAlert.close();
              if (!githubAuthInfo) {
                return [2];
              }
              pushingAlert.show();
              _g.label = 1;
            case 1:
              _g.trys.push([1, 9, 10, 11]);
              workspaceId = props.workspaceFile.workspaceId;
              _b = (_a = workspaces).createSavePoint;
              _e = {};
              return [4, workspaces.fsService.getWorkspaceFs(workspaceId)];
            case 2:
              return [
                4,
                _b.apply(_a, [
                  ((_e.fs = _g.sent()), (_e.workspaceId = workspaceId), (_e.gitConfig = githubAuthInfo), _e),
                ]),
              ];
            case 3:
              _g.sent();
              return [4, workspaces.descriptorService.get(workspaceId)];
            case 4:
              workspace = _g.sent();
              _d = (_c = workspaces.gitService).push;
              _f = {};
              return [4, workspaces.fsService.getWorkspaceFs(workspaceId)];
            case 5:
              _f.fs = _g.sent();
              return [4, workspaces.service.getAbsolutePath({ workspaceId: workspaceId })];
            case 6:
              return [
                4,
                _d.apply(_c, [
                  ((_f.dir = _g.sent()),
                  (_f.ref = workspace.origin.branch),
                  (_f.remote = GitService_1.GIST_ORIGIN_REMOTE_NAME),
                  (_f.remoteRef = "refs/heads/".concat(workspace.origin.branch)),
                  (_f.force = false),
                  (_f.authInfo = githubAuthInfo),
                  _f),
                ]),
              ];
            case 7:
              _g.sent();
              return [4, pullFromGitRepository({ showAlerts: false })];
            case 8:
              _g.sent();
              pushSuccessAlert.show();
              return [3, 11];
            case 9:
              e_4 = _g.sent();
              console.error(e_4);
              pushErrorAlert.show();
              return [3, 11];
            case 10:
              pushingAlert.close();
              return [7];
            case 11:
              return [2];
          }
        });
      });
    },
    [
      pullFromGitRepository,
      githubAuthInfo,
      props.workspaceFile,
      pushErrorAlert,
      pushSuccessAlert,
      pushingAlert,
      workspaces,
    ]
  );
  var isGistWorkspace = (0, react_1.useMemo)(
    function () {
      var _a;
      return (
        ((_a = workspacePromise.data) === null || _a === void 0 ? void 0 : _a.descriptor.origin.kind) ===
        WorkspaceOrigin_1.WorkspaceKind.GITHUB_GIST
      );
    },
    [(_c = workspacePromise.data) === null || _c === void 0 ? void 0 : _c.descriptor.origin.kind]
  );
  var navigationStatus = (0, Hooks_1.useNavigationStatus)();
  var navigationStatusToggle = (0, Hooks_1.useNavigationStatusToggle)();
  var confirmNavigationAlert = (0, Alerts_1.useAlert)(
    props.alerts,
    (0, react_1.useCallback)(
      function (_, _a) {
        var _b, _c, _d, _e, _f;
        var lastBlockedLocation = _a.lastBlockedLocation;
        return (0, jsx_runtime_1.jsxs)(
          Alert_1.Alert,
          __assign(
            {
              "data-testid": "unsaved-alert",
              variant: "warning",
              title:
                ((_b = workspacePromise.data) === null || _b === void 0 ? void 0 : _b.descriptor.origin.kind) ===
                WorkspaceOrigin_1.WorkspaceKind.LOCAL
                  ? i18n.editorPage.alerts.unsaved.titleLocal
                  : i18n.editorPage.alerts.unsaved.titleGit,
              actionClose: (0, jsx_runtime_1.jsx)(
                Alert_1.AlertActionCloseButton,
                { "data-testid": "unsaved-alert-close-button", onClose: navigationStatusToggle.unblock },
                void 0
              ),
              actionLinks: (0, jsx_runtime_1.jsxs)(
                jsx_runtime_1.Fragment,
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(Divider_1.Divider, { inset: { default: "insetMd" } }, void 0),
                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    (((_c = workspacePromise.data) === null || _c === void 0 ? void 0 : _c.descriptor.origin.kind) ===
                      WorkspaceOrigin_1.WorkspaceKind.LOCAL &&
                      (0, jsx_runtime_1.jsx)(
                        Alert_1.AlertActionLink,
                        __assign(
                          {
                            "data-testid": "unsaved-alert-save-button",
                            onClick: function () {
                              navigationStatusToggle.unblock();
                              return downloadWorkspaceZip();
                            },
                            style: { fontWeight: "bold" },
                          },
                          {
                            children: ""
                              .concat(i18n.terms.download, " '")
                              .concat(
                                (_d = workspacePromise.data) === null || _d === void 0 ? void 0 : _d.descriptor.name,
                                "'"
                              ),
                          }
                        ),
                        void 0
                      )) ||
                      (0, jsx_runtime_1.jsx)(
                        PushToGitHubAlertActionLinks,
                        {
                          canPush: isGistWorkspace ? canUpdateGitHubGist : canPushToGitRepository,
                          kind:
                            (_e = workspacePromise.data) === null || _e === void 0 ? void 0 : _e.descriptor.origin.kind,
                          remoteRef: ""
                            .concat(GitService_1.GIT_ORIGIN_REMOTE_NAME, "/")
                            .concat(
                              (_f = workspacePromise.data) === null || _f === void 0
                                ? void 0
                                : _f.descriptor.origin.branch
                            ),
                          onPush: function () {
                            navigationStatusToggle.unblock();
                            return isGistWorkspace ? updateGitHubGist() : pushToGitRepository();
                          },
                        },
                        void 0
                      ),
                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    (0, jsx_runtime_1.jsx)(
                      Alert_1.AlertActionLink,
                      __assign(
                        {
                          "data-testid": "unsaved-alert-close-without-save-button",
                          onClick: function () {
                            return navigationBlockersBypass.execute(function () {
                              history.push(lastBlockedLocation);
                            });
                          },
                        },
                        { children: i18n.editorPage.alerts.unsaved.proceedAnyway }
                      ),
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                  ],
                },
                void 0
              ),
            },
            {
              children: [
                (0, jsx_runtime_1.jsx)("br", {}, void 0),
                (0, jsx_runtime_1.jsx)("p", { children: i18n.editorPage.alerts.unsaved.message }, void 0),
              ],
            }
          ),
          void 0
        );
      },
      [
        (_d = workspacePromise.data) === null || _d === void 0 ? void 0 : _d.descriptor,
        i18n,
        navigationStatusToggle,
        isGistWorkspace,
        canUpdateGitHubGist,
        canPushToGitRepository,
        downloadWorkspaceZip,
        updateGitHubGist,
        pushToGitRepository,
        navigationBlockersBypass,
        history,
      ]
    )
  );
  (0, react_1.useEffect)(
    function () {
      if (navigationStatus.lastBlockedLocation) {
        confirmNavigationAlert.show({ lastBlockedLocation: navigationStatus.lastBlockedLocation });
      } else {
        confirmNavigationAlert.close();
      }
    },
    [confirmNavigationAlert, navigationStatus]
  );
  var _s = __read((0, react_1.useState)(false), 2),
    isVsCodeDropdownOpen = _s[0],
    setVsCodeDropdownOpen = _s[1];
  var createRepositorySuccessAlert = (0, Alerts_1.useAlert)(
    props.alerts,
    (0, react_1.useCallback)(function (_a, _b) {
      var close = _a.close;
      var url = _b.url;
      return (0, jsx_runtime_1.jsx)(
        Alert_1.Alert,
        {
          variant: "success",
          title: "GitHub repository created.",
          actionClose: (0, jsx_runtime_1.jsx)(Alert_1.AlertActionCloseButton, { onClose: close }, void 0),
          actionLinks: (0, jsx_runtime_1.jsx)(
            Alert_1.AlertActionLink,
            __assign(
              {
                onClick: function () {
                  return window.open(url, "_blank");
                },
              },
              { children: url }
            ),
            void 0
          ),
        },
        void 0
      );
    }, [])
  );
  var canSeeWorkspaceToolbar = (0, react_1.useMemo)(
    function () {
      var _a, _b;
      return (
        ((_a = workspacePromise.data) === null || _a === void 0 ? void 0 : _a.descriptor.origin.kind) !==
          WorkspaceOrigin_1.WorkspaceKind.LOCAL ||
        ((_b = workspacePromise.data) === null || _b === void 0 ? void 0 : _b.files.length) > 1
      );
    },
    [
      (_e = workspacePromise.data) === null || _e === void 0 ? void 0 : _e.descriptor.origin.kind,
      (_f = workspacePromise.data) === null || _f === void 0 ? void 0 : _f.files.length,
    ]
  );
  return (0, jsx_runtime_1.jsx)(
    PromiseState_1.PromiseStateWrapper,
    {
      promise: workspacePromise,
      resolved: function (workspace) {
        var _a;
        return (0, jsx_runtime_1.jsxs)(
          jsx_runtime_1.Fragment,
          {
            children: [
              (0, jsx_runtime_1.jsx)(Alerts_1.Alerts, { ref: props.alertsRef, width: "500px" }, void 0),
              (0, jsx_runtime_1.jsx)(
                Page_1.PageSection,
                __assign(
                  { type: "nav", variant: "light", padding: { default: "noPadding" } },
                  {
                    children:
                      workspace &&
                      canSeeWorkspaceToolbar &&
                      (0, jsx_runtime_1.jsxs)(
                        Flex_1.Flex,
                        __assign(
                          { justifyContent: { default: "justifyContentSpaceBetween" } },
                          {
                            children: [
                              (0, jsx_runtime_1.jsxs)(
                                Flex_1.FlexItem,
                                {
                                  children: [
                                    (0, jsx_runtime_1.jsx)(
                                      Button_1.Button,
                                      __assign(
                                        {
                                          className: "kie-tools--masthead-hoverable",
                                          variant: Button_1.ButtonVariant.plain,
                                          onClick: function () {
                                            return history.push({ pathname: routes.home.path({}) });
                                          },
                                        },
                                        {
                                          children: (0, jsx_runtime_1.jsx)(angle_left_icon_1.AngleLeftIcon, {}, void 0),
                                        }
                                      ),
                                      void 0
                                    ),
                                    "\u00A0\u00A0",
                                    (0, jsx_runtime_1.jsx)(
                                      WorkspaceLabel_1.WorkspaceLabel,
                                      { descriptor: workspace.descriptor },
                                      void 0
                                    ),
                                    "\u00A0\u00A0",
                                    (0, jsx_runtime_1.jsxs)(
                                      "div",
                                      __assign(
                                        {
                                          "data-testid": "toolbar-title-workspace",
                                          className: "kogito--editor__toolbar-name-container",
                                        },
                                        {
                                          children: [
                                            (0, jsx_runtime_1.jsx)(
                                              Title_1.Title,
                                              __assign(
                                                {
                                                  "aria-label": "EmbeddedEditorFile name",
                                                  headingLevel: "h3",
                                                  size: "md",
                                                  style: { fontStyle: "italic" },
                                                },
                                                { children: workspace.descriptor.name }
                                              ),
                                              void 0
                                            ),
                                            (0, jsx_runtime_1.jsx)(
                                              TextInput_1.TextInput,
                                              {
                                                ref: workspaceNameRef,
                                                type: "text",
                                                "aria-label": "Edit workspace name",
                                                onKeyDown: onWorkspaceNameKeyDown,
                                                className: "kogito--editor__toolbar-subtitle",
                                                onBlur: function (e) {
                                                  return onRenameWorkspace(e.target.value);
                                                },
                                                style: { fontStyle: "italic" },
                                              },
                                              void 0
                                            ),
                                          ],
                                        }
                                      ),
                                      void 0
                                    ),
                                    (0, jsx_runtime_1.jsx)(
                                      WorkspaceStatusIndicator_1.WorkspaceStatusIndicator,
                                      { workspace: workspace },
                                      void 0
                                    ),
                                  ],
                                },
                                void 0
                              ),
                              workspace.descriptor.origin.kind === WorkspaceOrigin_1.WorkspaceKind.GIT &&
                                workspaceImportableUrl.type === ImportableUrlHooks_1.UrlType.GITHUB &&
                                (0, jsx_runtime_1.jsx)(
                                  Flex_1.FlexItem,
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      Toolbar_1.Toolbar,
                                      __assign(
                                        { style: { padding: 0 } },
                                        {
                                          children: (0, jsx_runtime_1.jsx)(
                                            Toolbar_1.ToolbarItem,
                                            __assign(
                                              { style: { marginRight: 0 } },
                                              {
                                                children: (0, jsx_runtime_1.jsx)(
                                                  Dropdown_1.Dropdown,
                                                  {
                                                    isPlain: true,
                                                    onSelect: function () {
                                                      return setVsCodeDropdownOpen(false);
                                                    },
                                                    isOpen: isVsCodeDropdownOpen,
                                                    toggle: (0, jsx_runtime_1.jsxs)(
                                                      Dropdown_1.DropdownToggle,
                                                      __assign(
                                                        { toggleIndicator: null, onToggle: setVsCodeDropdownOpen },
                                                        {
                                                          children: [
                                                            (0, jsx_runtime_1.jsx)(
                                                              "img",
                                                              {
                                                                style: { width: "14px" },
                                                                alt: "vscode-logo-blue",
                                                                src: routes.static.images.vscodeLogoBlue.path({}),
                                                              },
                                                              void 0
                                                            ),
                                                            "\u00A0 \u00A0",
                                                            'Open "'.concat(workspace.descriptor.name, '"'),
                                                            "\u00A0 \u00A0",
                                                            (0, jsx_runtime_1.jsx)(
                                                              caret_down_icon_1.CaretDownIcon,
                                                              {},
                                                              void 0
                                                            ),
                                                          ],
                                                        }
                                                      ),
                                                      void 0
                                                    ),
                                                    dropdownItems: [
                                                      (0, jsx_runtime_1.jsxs)(
                                                        Dropdown_1.DropdownGroup,
                                                        {
                                                          children: [
                                                            navigationStatus.shouldBlockNavigationTo({
                                                              pathname: "__external",
                                                            }) &&
                                                              (0, jsx_runtime_1.jsxs)(
                                                                jsx_runtime_1.Fragment,
                                                                {
                                                                  children: [
                                                                    (0, jsx_runtime_1.jsx)(
                                                                      Alert_1.Alert,
                                                                      __assign(
                                                                        {
                                                                          isInline: true,
                                                                          variant: "warning",
                                                                          title: "You have new changes to push",
                                                                          actionLinks: (0, jsx_runtime_1.jsx)(
                                                                            PushToGitHubAlertActionLinks,
                                                                            {
                                                                              canPush: canPushToGitRepository,
                                                                              remoteRef: ""
                                                                                .concat(
                                                                                  GitService_1.GIT_ORIGIN_REMOTE_NAME,
                                                                                  "/"
                                                                                )
                                                                                .concat(
                                                                                  (_a = workspacePromise.data) ===
                                                                                    null || _a === void 0
                                                                                    ? void 0
                                                                                    : _a.descriptor.origin.branch
                                                                                ),
                                                                              onPush: pushToGitRepository,
                                                                            },
                                                                            void 0
                                                                          ),
                                                                        },
                                                                        {
                                                                          children: "Opening '".concat(
                                                                            workspace.descriptor.name,
                                                                            "' on vscode.dev won't show your latest changes."
                                                                          ),
                                                                        }
                                                                      ),
                                                                      void 0
                                                                    ),
                                                                    (0, jsx_runtime_1.jsx)(
                                                                      Divider_1.Divider,
                                                                      {},
                                                                      void 0
                                                                    ),
                                                                  ],
                                                                },
                                                                void 0
                                                              ),
                                                            (0, jsx_runtime_1.jsx)(
                                                              Dropdown_1.DropdownItem,
                                                              __assign(
                                                                {
                                                                  href: "https://vscode.dev/github"
                                                                    .concat(
                                                                      workspace.descriptor.origin.url.pathname.endsWith(
                                                                        ".git"
                                                                      )
                                                                        ? workspace.descriptor.origin.url.pathname.replace(
                                                                            ".git",
                                                                            ""
                                                                          )
                                                                        : workspace.descriptor.origin.url.pathname,
                                                                      "/tree/"
                                                                    )
                                                                    .concat(workspace.descriptor.origin.branch),
                                                                  target: "_blank",
                                                                  icon: (0, jsx_runtime_1.jsx)(
                                                                    external_link_alt_icon_1.ExternalLinkAltIcon,
                                                                    {},
                                                                    void 0
                                                                  ),
                                                                  description: "The '".concat(
                                                                    workspace.descriptor.origin.branch,
                                                                    "' branch will be opened."
                                                                  ),
                                                                },
                                                                { children: "vscode.dev" }
                                                              ),
                                                              void 0
                                                            ),
                                                            (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, void 0),
                                                            (0, jsx_runtime_1.jsx)(
                                                              Dropdown_1.DropdownItem,
                                                              __assign(
                                                                {
                                                                  href: "vscode://vscode.git/clone?url=".concat(
                                                                    workspace.descriptor.origin.url.toString()
                                                                  ),
                                                                  target: "_blank",
                                                                  icon: (0, jsx_runtime_1.jsx)(
                                                                    external_link_alt_icon_1.ExternalLinkAltIcon,
                                                                    {},
                                                                    void 0
                                                                  ),
                                                                  description: "The default branch will be opened.",
                                                                },
                                                                { children: "VS Code Desktop" }
                                                              ),
                                                              void 0
                                                            ),
                                                          ],
                                                        },
                                                        "open-in-vscode"
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
                                  },
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
                  { type: "nav", variant: "light", style: { paddingTop: 0, paddingBottom: "16px" } },
                  {
                    children: (0, jsx_runtime_1.jsxs)(
                      Flex_1.Flex,
                      __assign(
                        {
                          justifyContent: { default: "justifyContentSpaceBetween" },
                          alignItems: { default: "alignItemsCenter" },
                          flexWrap: { default: "nowrap" },
                        },
                        {
                          children: [
                            (0, jsx_runtime_1.jsx)(
                              Flex_1.FlexItem,
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  Page_1.PageHeaderToolsItem,
                                  __assign(
                                    { visibility: { default: "visible" } },
                                    {
                                      children: (0, jsx_runtime_1.jsxs)(
                                        Flex_1.Flex,
                                        __assign(
                                          {
                                            flexWrap: { default: "nowrap" },
                                            alignItems: { default: "alignItemsCenter" },
                                          },
                                          {
                                            children: [
                                              (0, jsx_runtime_1.jsx)(
                                                Flex_1.FlexItem,
                                                {
                                                  children: (0, jsx_runtime_1.jsx)(
                                                    FileSwitcher_1.FileSwitcher,
                                                    { workspace: workspace, workspaceFile: props.workspaceFile },
                                                    void 0
                                                  ),
                                                },
                                                void 0
                                              ),
                                              (0, jsx_runtime_1.jsx)(
                                                Flex_1.FlexItem,
                                                {
                                                  children:
                                                    (isEdited &&
                                                      (0, jsx_runtime_1.jsx)(
                                                        Tooltip_1.Tooltip,
                                                        __assign(
                                                          { content: "Saving file...", position: "bottom" },
                                                          {
                                                            children: (0, jsx_runtime_1.jsx)(
                                                              Text_1.TextContent,
                                                              __assign(
                                                                {
                                                                  style: __assign(
                                                                    { color: "gray" },
                                                                    !props.workspaceFile ? { visibility: "hidden" } : {}
                                                                  ),
                                                                },
                                                                {
                                                                  children: (0, jsx_runtime_1.jsxs)(
                                                                    Text_1.Text,
                                                                    __assign(
                                                                      {
                                                                        "aria-label": "Saving file...",
                                                                        "data-testid": "is-saving-indicator",
                                                                        component: Text_1.TextVariants.small,
                                                                      },
                                                                      {
                                                                        children: [
                                                                          (0, jsx_runtime_1.jsx)(
                                                                            "span",
                                                                            {
                                                                              children: (0, jsx_runtime_1.jsx)(
                                                                                sync_icon_1.SyncIcon,
                                                                                { size: "sm" },
                                                                                void 0
                                                                              ),
                                                                            },
                                                                            void 0
                                                                          ),
                                                                          "\u00A0",
                                                                          (0, jsx_runtime_1.jsx)(
                                                                            "span",
                                                                            { children: "Saving..." },
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
                                                          }
                                                        ),
                                                        void 0
                                                      )) ||
                                                    (0, jsx_runtime_1.jsx)(
                                                      Tooltip_1.Tooltip,
                                                      __assign(
                                                        { content: "File is saved", position: "bottom" },
                                                        {
                                                          children: (0, jsx_runtime_1.jsx)(
                                                            Text_1.TextContent,
                                                            __assign(
                                                              {
                                                                style: __assign(
                                                                  { color: "gray" },
                                                                  !props.workspaceFile ? { visibility: "hidden" } : {}
                                                                ),
                                                              },
                                                              {
                                                                children: (0, jsx_runtime_1.jsxs)(
                                                                  Text_1.Text,
                                                                  __assign(
                                                                    {
                                                                      "aria-label": "File is saved",
                                                                      "data-testid": "is-saved-indicator",
                                                                      component: Text_1.TextVariants.small,
                                                                    },
                                                                    {
                                                                      children: [
                                                                        (0, jsx_runtime_1.jsx)(
                                                                          "span",
                                                                          {
                                                                            children: (0, jsx_runtime_1.jsx)(
                                                                              check_circle_icon_1.CheckCircleIcon,
                                                                              { size: "sm" },
                                                                              void 0
                                                                            ),
                                                                          },
                                                                          void 0
                                                                        ),
                                                                        (0, jsx_runtime_1.jsxs)(
                                                                          Toolbar_1.ToolbarItem,
                                                                          __assign(
                                                                            { visibility: hideWhenTiny },
                                                                            {
                                                                              children: [
                                                                                "\u00A0",
                                                                                (0, jsx_runtime_1.jsx)(
                                                                                  "span",
                                                                                  { children: "Saved" },
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
                                                        }
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
                                      ),
                                    }
                                  ),
                                  void 0
                                ),
                              },
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              Flex_1.FlexItem,
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  Toolbar_1.Toolbar,
                                  {
                                    children: (0, jsx_runtime_1.jsxs)(
                                      Toolbar_1.ToolbarContent,
                                      __assign(
                                        { style: { paddingRight: 0 } },
                                        {
                                          children: [
                                            (0, jsx_runtime_1.jsx)(
                                              Toolbar_1.ToolbarItem,
                                              {
                                                children: (0, jsx_runtime_1.jsx)(
                                                  Dropdown_1.Dropdown,
                                                  __assign(
                                                    {
                                                      position: "right",
                                                      isOpen: isNewFileDropdownMenuOpen,
                                                      toggle: (0, jsx_runtime_1.jsxs)(
                                                        Dropdown_1.DropdownToggle,
                                                        __assign(
                                                          {
                                                            onToggle: setNewFileDropdownMenuOpen,
                                                            isPrimary: true,
                                                            toggleIndicator: caret_down_icon_1.CaretDownIcon,
                                                          },
                                                          {
                                                            children: [
                                                              (0, jsx_runtime_1.jsx)(plus_icon_1.PlusIcon, {}, void 0),
                                                              "\u00A0\u00A0New file",
                                                            ],
                                                          }
                                                        ),
                                                        void 0
                                                      ),
                                                    },
                                                    {
                                                      children: (0, jsx_runtime_1.jsx)(
                                                        NewFileDropdownMenu_1.NewFileDropdownMenu,
                                                        {
                                                          alerts: props.alerts,
                                                          workspaceId: props.workspaceFile.workspaceId,
                                                          destinationDirPath: props.workspaceFile.relativeDirPath,
                                                          onAddFile: function (file) {
                                                            return __awaiter(_this, void 0, void 0, function () {
                                                              return __generator(this, function (_a) {
                                                                setNewFileDropdownMenuOpen(false);
                                                                if (!file) {
                                                                  return [2];
                                                                }
                                                                history.push({
                                                                  pathname: routes.workspaceWithFilePath.path({
                                                                    workspaceId: file.workspaceId,
                                                                    fileRelativePath: file.relativePathWithoutExtension,
                                                                    extension: file.extension,
                                                                  }),
                                                                });
                                                                return [2];
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
                                            (0, jsx_runtime_1.jsx)(
                                              Toolbar_1.ToolbarItem,
                                              __assign(
                                                { visibility: hideWhenSmall },
                                                {
                                                  children:
                                                    props.workspaceFile.extension === "dmn" &&
                                                    (0, jsx_runtime_1.jsx)(
                                                      KieSandboxExtendedServicesButtons_1.KieSandboxExtendedServicesButtons,
                                                      { workspace: workspace, editorPageDock: props.editorPageDock },
                                                      void 0
                                                    ),
                                                }
                                              ),
                                              void 0
                                            ),
                                            workspace.descriptor.origin.kind ===
                                              WorkspaceOrigin_1.WorkspaceKind.GITHUB_GIST &&
                                              (0, jsx_runtime_1.jsx)(
                                                Toolbar_1.ToolbarItem,
                                                {
                                                  children: (0, jsx_runtime_1.jsx)(
                                                    Dropdown_1.Dropdown,
                                                    {
                                                      onSelect: function () {
                                                        return setSyncGitHubGistDropdownOpen(false);
                                                      },
                                                      isOpen: isSyncGitHubGistDropdownOpen,
                                                      position: Dropdown_1.DropdownPosition.right,
                                                      toggle: (0, jsx_runtime_1.jsx)(
                                                        Dropdown_1.DropdownToggle,
                                                        __assign(
                                                          {
                                                            id: "sync-dropdown",
                                                            "data-testid": "sync-dropdown",
                                                            onToggle: function (isOpen) {
                                                              return setSyncGitHubGistDropdownOpen(isOpen);
                                                            },
                                                          },
                                                          { children: "Sync" }
                                                        ),
                                                        void 0
                                                      ),
                                                      dropdownItems: [
                                                        (0, jsx_runtime_1.jsxs)(
                                                          Dropdown_1.DropdownGroup,
                                                          {
                                                            children: [
                                                              canForkGitHubGist &&
                                                                (0, jsx_runtime_1.jsxs)(
                                                                  jsx_runtime_1.Fragment,
                                                                  {
                                                                    children: [
                                                                      (0, jsx_runtime_1.jsx)(
                                                                        "li",
                                                                        __assign(
                                                                          { role: "menuitem" },
                                                                          {
                                                                            children: (0, jsx_runtime_1.jsx)(
                                                                              Alert_1.Alert,
                                                                              __assign(
                                                                                {
                                                                                  isInline: true,
                                                                                  variant: "info",
                                                                                  title: (0, jsx_runtime_1.jsx)(
                                                                                    "span",
                                                                                    __assign(
                                                                                      {
                                                                                        style: { whiteSpace: "nowrap" },
                                                                                      },
                                                                                      {
                                                                                        children:
                                                                                          "Can't update Gists you don't own",
                                                                                      }
                                                                                    ),
                                                                                    void 0
                                                                                  ),
                                                                                  actionLinks: (0, jsx_runtime_1.jsx)(
                                                                                    Alert_1.AlertActionLink,
                                                                                    __assign(
                                                                                      {
                                                                                        onClick: forkGitHubGist,
                                                                                        style: { fontWeight: "bold" },
                                                                                      },
                                                                                      { children: "Fork Gist" }
                                                                                    ),
                                                                                    void 0
                                                                                  ),
                                                                                },
                                                                                {
                                                                                  children:
                                                                                    "You can create a fork of '".concat(
                                                                                      workspace.descriptor.name,
                                                                                      "' to save your updates."
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
                                                                        Divider_1.Divider,
                                                                        {},
                                                                        void 0
                                                                      ),
                                                                    ],
                                                                  },
                                                                  void 0
                                                                ),
                                                              (0, jsx_runtime_1.jsx)(
                                                                Tooltip_1.Tooltip,
                                                                __assign(
                                                                  {
                                                                    "data-testid": "gist-it-tooltip",
                                                                    content: (0, jsx_runtime_1.jsx)(
                                                                      "div",
                                                                      {
                                                                        children:
                                                                          i18n.editorToolbar.cantUpdateGistTooltip,
                                                                      },
                                                                      void 0
                                                                    ),
                                                                    trigger: !canUpdateGitHubGist
                                                                      ? "mouseenter click"
                                                                      : "",
                                                                    position: "left",
                                                                  },
                                                                  {
                                                                    children: (0, jsx_runtime_1.jsxs)(
                                                                      jsx_runtime_1.Fragment,
                                                                      {
                                                                        children: [
                                                                          (0, jsx_runtime_1.jsx)(
                                                                            Dropdown_1.DropdownItem,
                                                                            __assign(
                                                                              {
                                                                                icon: (0, jsx_runtime_1.jsx)(
                                                                                  github_icon_1.GithubIcon,
                                                                                  {},
                                                                                  void 0
                                                                                ),
                                                                                onClick: updateGitHubGist,
                                                                                isDisabled: !canUpdateGitHubGist,
                                                                              },
                                                                              { children: "Update Gist" }
                                                                            ),
                                                                            void 0
                                                                          ),
                                                                          !canPushToGitRepository &&
                                                                            (0, jsx_runtime_1.jsxs)(
                                                                              jsx_runtime_1.Fragment,
                                                                              {
                                                                                children: [
                                                                                  (0, jsx_runtime_1.jsx)(
                                                                                    Divider_1.Divider,
                                                                                    {},
                                                                                    void 0
                                                                                  ),
                                                                                  (0, jsx_runtime_1.jsx)(
                                                                                    Dropdown_1.DropdownItem,
                                                                                    __assign(
                                                                                      {
                                                                                        onClick: function () {
                                                                                          return settingsDispatch.open(
                                                                                            SettingsModalBody_1
                                                                                              .SettingsTabs.GITHUB
                                                                                          );
                                                                                        },
                                                                                      },
                                                                                      {
                                                                                        children: (0,
                                                                                        jsx_runtime_1.jsx)(
                                                                                          Button_1.Button,
                                                                                          __assign(
                                                                                            {
                                                                                              isInline: true,
                                                                                              variant:
                                                                                                Button_1.ButtonVariant
                                                                                                  .link,
                                                                                            },
                                                                                            {
                                                                                              children:
                                                                                                "Configure GitHub token...",
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
                                                                    ),
                                                                  }
                                                                ),
                                                                void 0
                                                              ),
                                                            ],
                                                          },
                                                          "sync-gist-dropdown-group"
                                                        ),
                                                      ],
                                                    },
                                                    void 0
                                                  ),
                                                },
                                                void 0
                                              ),
                                            workspace.descriptor.origin.kind === WorkspaceOrigin_1.WorkspaceKind.GIT &&
                                              (0, jsx_runtime_1.jsx)(
                                                Toolbar_1.ToolbarItem,
                                                {
                                                  children: (0, jsx_runtime_1.jsx)(
                                                    Dropdown_1.Dropdown,
                                                    {
                                                      onSelect: function () {
                                                        return setSyncGitRepositoryDropdownOpen(false);
                                                      },
                                                      isOpen: isSyncGitRepositoryDropdownOpen,
                                                      position: Dropdown_1.DropdownPosition.right,
                                                      toggle: (0, jsx_runtime_1.jsx)(
                                                        Dropdown_1.DropdownToggle,
                                                        __assign(
                                                          {
                                                            id: "sync-dropdown",
                                                            "data-testid": "sync-dropdown",
                                                            onToggle: function (isOpen) {
                                                              return setSyncGitRepositoryDropdownOpen(isOpen);
                                                            },
                                                          },
                                                          { children: "Sync" }
                                                        ),
                                                        void 0
                                                      ),
                                                      dropdownItems: [
                                                        (0, jsx_runtime_1.jsxs)(
                                                          Dropdown_1.DropdownGroup,
                                                          {
                                                            children: [
                                                              (0, jsx_runtime_1.jsx)(
                                                                Dropdown_1.DropdownItem,
                                                                __assign(
                                                                  {
                                                                    icon: (0, jsx_runtime_1.jsx)(
                                                                      sync_alt_icon_1.SyncAltIcon,
                                                                      {},
                                                                      void 0
                                                                    ),
                                                                    onClick: function () {
                                                                      return pullFromGitRepository({
                                                                        showAlerts: true,
                                                                      });
                                                                    },
                                                                    description: "Get new changes made upstream at '"
                                                                      .concat(GitService_1.GIT_ORIGIN_REMOTE_NAME, "/")
                                                                      .concat(workspace.descriptor.origin.branch, "'."),
                                                                  },
                                                                  { children: "Pull" }
                                                                ),
                                                                void 0
                                                              ),
                                                              (0, jsx_runtime_1.jsx)(
                                                                Tooltip_1.Tooltip,
                                                                __assign(
                                                                  {
                                                                    "data-testid": "gist-it-tooltip",
                                                                    content: (0, jsx_runtime_1.jsx)(
                                                                      "div",
                                                                      {
                                                                        children:
                                                                          "You need to be signed in with GitHub to push to this repository.",
                                                                      },
                                                                      void 0
                                                                    ),
                                                                    trigger: !canPushToGitRepository
                                                                      ? "mouseenter click"
                                                                      : "",
                                                                    position: "left",
                                                                  },
                                                                  {
                                                                    children: (0, jsx_runtime_1.jsxs)(
                                                                      jsx_runtime_1.Fragment,
                                                                      {
                                                                        children: [
                                                                          (0, jsx_runtime_1.jsx)(
                                                                            Dropdown_1.DropdownItem,
                                                                            __assign(
                                                                              {
                                                                                icon: (0, jsx_runtime_1.jsx)(
                                                                                  arrow_circle_up_icon_1.ArrowCircleUpIcon,
                                                                                  {},
                                                                                  void 0
                                                                                ),
                                                                                onClick: pushToGitRepository,
                                                                                isDisabled: !canPushToGitRepository,
                                                                                description:
                                                                                  "Send your changes upstream to '"
                                                                                    .concat(
                                                                                      GitService_1.GIT_ORIGIN_REMOTE_NAME,
                                                                                      "/"
                                                                                    )
                                                                                    .concat(
                                                                                      workspace.descriptor.origin
                                                                                        .branch,
                                                                                      "'."
                                                                                    ),
                                                                              },
                                                                              { children: "Push" }
                                                                            ),
                                                                            void 0
                                                                          ),
                                                                          !canPushToGitRepository &&
                                                                            (0, jsx_runtime_1.jsxs)(
                                                                              jsx_runtime_1.Fragment,
                                                                              {
                                                                                children: [
                                                                                  (0, jsx_runtime_1.jsx)(
                                                                                    Divider_1.Divider,
                                                                                    {},
                                                                                    void 0
                                                                                  ),
                                                                                  (0, jsx_runtime_1.jsx)(
                                                                                    Dropdown_1.DropdownItem,
                                                                                    __assign(
                                                                                      {
                                                                                        onClick: function () {
                                                                                          return settingsDispatch.open(
                                                                                            SettingsModalBody_1
                                                                                              .SettingsTabs.GITHUB
                                                                                          );
                                                                                        },
                                                                                      },
                                                                                      {
                                                                                        children: (0,
                                                                                        jsx_runtime_1.jsx)(
                                                                                          Button_1.Button,
                                                                                          __assign(
                                                                                            {
                                                                                              isInline: true,
                                                                                              variant:
                                                                                                Button_1.ButtonVariant
                                                                                                  .link,
                                                                                            },
                                                                                            {
                                                                                              children:
                                                                                                "Configure GitHub token...",
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
                                                                    ),
                                                                  }
                                                                ),
                                                                void 0
                                                              ),
                                                            ],
                                                          },
                                                          "sync-gist-dropdown-group"
                                                        ),
                                                      ],
                                                    },
                                                    void 0
                                                  ),
                                                },
                                                void 0
                                              ),
                                            (0, jsx_runtime_1.jsx)(
                                              Toolbar_1.ToolbarItem,
                                              __assign(
                                                { visibility: hideWhenSmall },
                                                {
                                                  children: (0, jsx_runtime_1.jsx)(
                                                    Dropdown_1.Dropdown,
                                                    {
                                                      onSelect: function () {
                                                        return setShareDropdownOpen(false);
                                                      },
                                                      isOpen: isShareDropdownOpen,
                                                      dropdownItems: shareDropdownItems,
                                                      position: Dropdown_1.DropdownPosition.right,
                                                      toggle: (0, jsx_runtime_1.jsx)(
                                                        Dropdown_1.DropdownToggle,
                                                        __assign(
                                                          {
                                                            id: "share-dropdown",
                                                            "data-testid": "share-dropdown",
                                                            onToggle: function (isOpen) {
                                                              return setShareDropdownOpen(isOpen);
                                                            },
                                                          },
                                                          { children: i18n.editorToolbar.share }
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
                                            (0, jsx_runtime_1.jsx)(
                                              Toolbar_1.ToolbarItem,
                                              __assign(
                                                { visibility: hideWhenSmall, style: { marginRight: 0 } },
                                                {
                                                  children: (0, jsx_runtime_1.jsx)(
                                                    KebabDropdown,
                                                    {
                                                      id: "kebab-lg",
                                                      state: [isLargeKebabOpen, setLargeKebabOpen],
                                                      items: [
                                                        deleteFileDropdownItem,
                                                        (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, "divider-0"),
                                                        createSavePointDropdownItem,
                                                      ],
                                                    },
                                                    void 0
                                                  ),
                                                }
                                              ),
                                              void 0
                                            ),
                                            (0, jsx_runtime_1.jsx)(
                                              Toolbar_1.ToolbarItem,
                                              __assign(
                                                { visibility: showWhenSmall, style: { marginRight: 0 } },
                                                {
                                                  children: (0, jsx_runtime_1.jsx)(
                                                    KebabDropdown,
                                                    {
                                                      id: "kebab-sm",
                                                      state: [isSmallKebabOpen, setSmallKebabOpen],
                                                      items: __spreadArray(
                                                        __spreadArray(
                                                          [
                                                            deleteFileDropdownItem,
                                                            (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, "divider-0"),
                                                            createSavePointDropdownItem,
                                                            (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, "divider-1"),
                                                          ],
                                                          __read(shareDropdownItems),
                                                          false
                                                        ),
                                                        __read(
                                                          props.workspaceFile.extension !== "dmn"
                                                            ? []
                                                            : [
                                                                (0, jsx_runtime_1.jsx)(
                                                                  Divider_1.Divider,
                                                                  {},
                                                                  "divider-2"
                                                                ),
                                                                (0, jsx_runtime_1.jsx)(
                                                                  KieSandboxExtendedServicesDropdownGroup_1.KieSandboxExtendedServicesDropdownGroup,
                                                                  { workspace: workspace },
                                                                  "kie-sandbox-extended-services-group"
                                                                ),
                                                              ]
                                                        ),
                                                        false
                                                      ),
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
                  }
                ),
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                EmbedModal_1.EmbedModal,
                {
                  workspace: workspace.descriptor,
                  workspaceFile: props.workspaceFile,
                  isOpen: isEmbedModalOpen,
                  onClose: function () {
                    return setEmbedModalOpen(false);
                  },
                },
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                CreateGitHubRepositoryModal_1.CreateGitHubRepositoryModal,
                {
                  workspace: workspace.descriptor,
                  isOpen: isCreateGitHubRepositoryModalOpen,
                  onClose: function () {
                    return setCreateGitHubRepositoryModalOpen(false);
                  },
                  onSuccess: function (_a) {
                    var url = _a.url;
                    createRepositorySuccessAlert.show({ url: url });
                  },
                },
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                "textarea",
                { ref: copyContentTextArea, style: { height: 0, position: "absolute", zIndex: -1 } },
                void 0
              ),
              (0, jsx_runtime_1.jsx)("a", { ref: downloadRef }, void 0),
              (0, jsx_runtime_1.jsx)("a", { ref: downloadAllRef }, void 0),
              (0, jsx_runtime_1.jsx)("a", { ref: downloadPreviewRef }, void 0),
            ],
          },
          void 0
        );
      },
    },
    void 0
  );
}
exports.EditorToolbar = EditorToolbar;
function PushToGitHubAlertActionLinks(props) {
  var settingsDispatch = (0, SettingsContext_1.useSettingsDispatch)();
  if (props.kind === WorkspaceOrigin_1.WorkspaceKind.GIT && !props.remoteRef) {
    throw new Error("Should specify remoteRef for GIT workspaces");
  }
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        !props.canPush &&
          (0, jsx_runtime_1.jsx)(
            Alert_1.AlertActionLink,
            __assign(
              {
                onClick: function () {
                  return settingsDispatch.open(SettingsModalBody_1.SettingsTabs.GITHUB);
                },
              },
              { children: "Configure GitHub token..." }
            ),
            void 0
          ),
        props.canPush &&
          (0, jsx_runtime_1.jsx)(
            Alert_1.AlertActionLink,
            __assign(
              { onClick: props.onPush, style: { fontWeight: "bold" } },
              {
                children:
                  props.kind === WorkspaceOrigin_1.WorkspaceKind.GIT
                    ? "Push to '".concat(props.remoteRef, "'")
                    : "Update Gist",
              }
            ),
            void 0
          ),
      ],
    },
    void 0
  );
}
exports.PushToGitHubAlertActionLinks = PushToGitHubAlertActionLinks;
function KebabDropdown(props) {
  return (0, jsx_runtime_1.jsx)(
    Dropdown_1.Dropdown,
    {
      className: "kie-tools--masthead-hoverable",
      isOpen: props.state[0],
      isPlain: true,
      position: Dropdown_1.DropdownPosition.right,
      onSelect: function () {
        return props.state[1](false);
      },
      toggle: (0, jsx_runtime_1.jsx)(
        Dropdown_1.DropdownToggle,
        __assign(
          {
            id: props.id,
            toggleIndicator: null,
            onToggle: function (isOpen) {
              return props.state[1](isOpen);
            },
            ouiaId: props.id,
          },
          { children: (0, jsx_runtime_1.jsx)(ellipsis_v_icon_1.EllipsisVIcon, {}, void 0) }
        ),
        void 0
      ),
      dropdownItems: props.items,
    },
    void 0
  );
}
exports.KebabDropdown = KebabDropdown;
//# sourceMappingURL=EditorToolbar.js.map
