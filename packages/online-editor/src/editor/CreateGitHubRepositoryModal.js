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
exports.CreateGitHubRepositoryModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Modal_1 = require("@patternfly/react-core/dist/js/components/Modal");
var WorkspacesContext_1 = require("../workspace/WorkspacesContext");
var github_icon_1 = require("@patternfly/react-icons/dist/js/icons/github-icon");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var Radio_1 = require("@patternfly/react-core/dist/js/components/Radio");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var check_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/check-circle-icon");
var users_icon_1 = require("@patternfly/react-icons/dist/js/icons/users-icon");
var lock_icon_1 = require("@patternfly/react-icons/dist/js/icons/lock-icon");
var exclamation_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-circle-icon");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var constants_1 = require("@patternfly/react-core/dist/js/helpers/constants");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
var GitService_1 = require("../workspace/services/GitService");
var SettingsContext_1 = require("../settings/SettingsContext");
var Alert_1 = require("@patternfly/react-core/dist/js/components/Alert");
var Hooks_1 = require("../github/Hooks");
var getSuggestedRepositoryName = function (name) {
  return name
    .replaceAll(" ", "-")
    .toLocaleLowerCase()
    .replace(/[^._\-\w\d]/g, "");
};
function CreateGitHubRepositoryModal(props) {
  var _this = this;
  var workspaces = (0, WorkspacesContext_1.useWorkspaces)();
  var settingsDispatch = (0, SettingsContext_1.useSettingsDispatch)();
  var githubAuthInfo = (0, Hooks_1.useGitHubAuthInfo)();
  var _a = __read((0, react_1.useState)(false), 2),
    isPrivate = _a[0],
    setPrivate = _a[1];
  var _b = __read((0, react_1.useState)(false), 2),
    isLoading = _b[0],
    setLoading = _b[1];
  var _c = __read((0, react_1.useState)(undefined), 2),
    error = _c[0],
    setError = _c[1];
  var _d = __read((0, react_1.useState)(getSuggestedRepositoryName(props.workspace.name)), 2),
    name = _d[0],
    setName = _d[1];
  (0, react_1.useEffect)(
    function () {
      setName(getSuggestedRepositoryName(props.workspace.name));
    },
    [props.workspace.name]
  );
  var create = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var repo, cloneUrl, fs, workspaceRootDirPath, err_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 8, 9, 10]);
              if (!githubAuthInfo) {
                return [2];
              }
              setError(undefined);
              setLoading(true);
              return [
                4,
                settingsDispatch.github.octokit.request("POST /user/repos", {
                  name: name,
                  private: isPrivate,
                }),
              ];
            case 1:
              repo = _a.sent();
              if (!repo.data.clone_url) {
                throw new Error("Repo creation failed.");
              }
              cloneUrl = repo.data.clone_url;
              return [4, workspaces.fsService.getWorkspaceFs(props.workspace.workspaceId)];
            case 2:
              fs = _a.sent();
              workspaceRootDirPath = workspaces.getAbsolutePath({ workspaceId: props.workspace.workspaceId });
              return [
                4,
                workspaces.gitService.addRemote({
                  fs: fs,
                  dir: workspaceRootDirPath,
                  url: cloneUrl,
                  name: GitService_1.GIT_ORIGIN_REMOTE_NAME,
                  force: true,
                }),
              ];
            case 3:
              _a.sent();
              return [
                4,
                workspaces.createSavePoint({
                  fs: fs,
                  workspaceId: props.workspace.workspaceId,
                  gitConfig: {
                    name: githubAuthInfo.name,
                    email: githubAuthInfo.email,
                  },
                }),
              ];
            case 4:
              _a.sent();
              return [
                4,
                workspaces.gitService.push({
                  fs: fs,
                  dir: workspaceRootDirPath,
                  remote: GitService_1.GIT_ORIGIN_REMOTE_NAME,
                  ref: GitService_1.GIT_DEFAULT_BRANCH,
                  remoteRef: "refs/heads/".concat(GitService_1.GIT_DEFAULT_BRANCH),
                  force: false,
                  authInfo: githubAuthInfo,
                }),
              ];
            case 5:
              _a.sent();
              return [4, workspaces.descriptorService.turnIntoGit(props.workspace.workspaceId, new URL(cloneUrl))];
            case 6:
              _a.sent();
              return [
                4,
                workspaces.renameWorkspace({
                  workspaceId: props.workspace.workspaceId,
                  newName: new URL(repo.data.html_url).pathname.substring(1),
                }),
              ];
            case 7:
              _a.sent();
              props.onClose();
              props.onSuccess({ url: repo.data.html_url });
              return [3, 10];
            case 8:
              err_1 = _a.sent();
              setError(err_1);
              throw err_1;
            case 9:
              setLoading(false);
              return [7];
            case 10:
              return [2];
          }
        });
      });
    },
    [githubAuthInfo, isPrivate, name, props, settingsDispatch.github.octokit, workspaces]
  );
  var isNameValid = (0, react_1.useMemo)(
    function () {
      return name.match(/^[._\-\w\d]+$/g);
    },
    [name]
  );
  var validated = (0, react_1.useMemo)(
    function () {
      if (isNameValid) {
        return constants_1.ValidatedOptions.success;
      } else {
        return constants_1.ValidatedOptions.error;
      }
    },
    [isNameValid]
  );
  return (0, jsx_runtime_1.jsxs)(
    Modal_1.Modal,
    __assign(
      {
        variant: Modal_1.ModalVariant.medium,
        "aria-label": "Create a new GitHub repository",
        isOpen: props.isOpen,
        onClose: props.onClose,
        title: "Create GitHub repository",
        titleIconVariant: github_icon_1.GithubIcon,
        description: "The contents of '".concat(props.workspace.name, "' will be all in the new GitHub Repository."),
        actions: [
          (0, jsx_runtime_1.jsx)(
            Button_1.Button,
            __assign(
              { isLoading: isLoading, variant: "primary", onClick: create, isDisabled: !isNameValid },
              { children: "Create" }
            ),
            "create"
          ),
        ],
      },
      {
        children: [
          (0, jsx_runtime_1.jsx)("br", {}, void 0),
          (0, jsx_runtime_1.jsxs)(
            Form_1.Form,
            __assign(
              {
                style: { padding: "0 16px 0 16px" },
                onSubmit: function (e) {
                  e.preventDefault();
                  e.stopPropagation();
                  return create();
                },
              },
              {
                children: [
                  error &&
                    (0, jsx_runtime_1.jsxs)(
                      Form_1.FormAlert,
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            Alert_1.Alert,
                            { variant: "danger", title: "Error creating GitHub Repository. " + error, isInline: true },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                        ],
                      },
                      void 0
                    ),
                  (0, jsx_runtime_1.jsx)(
                    Form_1.FormGroup,
                    __assign(
                      {
                        label: "Name",
                        isRequired: true,
                        helperTextInvalid:
                          "Invalid name. Only letters, numbers, dashes (-), dots (.), and underscores (_) are allowed.",
                        helperText: (0, jsx_runtime_1.jsx)(
                          Form_1.FormHelperText,
                          {
                            icon: (0, jsx_runtime_1.jsx)(check_circle_icon_1.CheckCircleIcon, {}, void 0),
                            isHidden: false,
                            style: { visibility: "hidden" },
                          },
                          void 0
                        ),
                        helperTextInvalidIcon: (0, jsx_runtime_1.jsx)(
                          exclamation_circle_icon_1.ExclamationCircleIcon,
                          {},
                          void 0
                        ),
                        fieldId: "github-repository-name",
                        validated: validated,
                      },
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          TextInput_1.TextInput,
                          {
                            id: "github-repo-name",
                            validated: validated,
                            isRequired: true,
                            placeholder: "Name",
                            value: name,
                            onChange: setName,
                          },
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(Divider_1.Divider, { inset: { default: "inset3xl" } }, void 0),
                  (0, jsx_runtime_1.jsxs)(
                    Form_1.FormGroup,
                    __assign(
                      {
                        helperText: (0, jsx_runtime_1.jsx)(
                          Form_1.FormHelperText,
                          {
                            icon: (0, jsx_runtime_1.jsx)(check_circle_icon_1.CheckCircleIcon, {}, void 0),
                            isHidden: false,
                            style: { visibility: "hidden" },
                          },
                          void 0
                        ),
                        helperTextInvalidIcon: (0, jsx_runtime_1.jsx)(
                          exclamation_circle_icon_1.ExclamationCircleIcon,
                          {},
                          void 0
                        ),
                        fieldId: "github-repo-visibility",
                      },
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            Radio_1.Radio,
                            {
                              isChecked: !isPrivate,
                              id: "github-repository-public",
                              name: "github-repository-public",
                              label: (0, jsx_runtime_1.jsxs)(
                                jsx_runtime_1.Fragment,
                                {
                                  children: [
                                    (0, jsx_runtime_1.jsx)(users_icon_1.UsersIcon, {}, void 0),
                                    "\u00A0\u00A0 Public",
                                  ],
                                },
                                void 0
                              ),
                              description: "Anyone on the internet can see this repository. You choose who can commit.",
                              onChange: function () {
                                return setPrivate(false);
                              },
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("br", {}, void 0),
                          (0, jsx_runtime_1.jsx)(
                            Radio_1.Radio,
                            {
                              isChecked: isPrivate,
                              id: "github-repository-private",
                              name: "github-repository-private",
                              label: (0, jsx_runtime_1.jsxs)(
                                jsx_runtime_1.Fragment,
                                {
                                  children: [
                                    (0, jsx_runtime_1.jsx)(lock_icon_1.LockIcon, {}, void 0),
                                    "\u00A0\u00A0 Private",
                                  ],
                                },
                                void 0
                              ),
                              description: "You choose who can see and commit to this repository.",
                              onChange: function () {
                                return setPrivate(true);
                              },
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
        ],
      }
    ),
    void 0
  );
}
exports.CreateGitHubRepositoryModal = CreateGitHubRepositoryModal;
//# sourceMappingURL=CreateGitHubRepositoryModal.js.map
