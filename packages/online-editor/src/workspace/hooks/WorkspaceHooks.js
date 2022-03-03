"use strict";
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
exports.useWorkspacePromise = exports.useWorkspaceGitStatusPromise = void 0;
var WorkspacesContext_1 = require("../WorkspacesContext");
var react_1 = require("react");
var PromiseState_1 = require("./PromiseState");
var Hooks_1 = require("../../reactExt/Hooks");
var WorkspaceOrigin_1 = require("../model/WorkspaceOrigin");
var GitService_1 = require("../services/GitService");
function useWorkspaceGitStatusPromise(workspace) {
  var _this = this;
  var workspaces = (0, WorkspacesContext_1.useWorkspaces)();
  var _a = __read((0, PromiseState_1.usePromiseState)(), 2),
    isModifiedPromise = _a[0],
    setModifiedPromise = _a[1];
  var refresh = (0, react_1.useCallback)(
    function (canceled) {
      return __awaiter(_this, void 0, void 0, function () {
        var hasLocalChanges, _a, _b, head, _c, _d, remote, _e, _f;
        var _g, _h, _j;
        return __generator(this, function (_k) {
          switch (_k.label) {
            case 0:
              setModifiedPromise({ loading: true });
              if (!workspace) {
                return [2];
              }
              _b = (_a = workspaces).hasLocalChanges;
              _g = {};
              return [4, workspaces.fsService.getWorkspaceFs(workspace.descriptor.workspaceId)];
            case 1:
              return [
                4,
                _b.apply(_a, [((_g.fs = _k.sent()), (_g.workspaceId = workspace.descriptor.workspaceId), _g)]),
              ];
            case 2:
              hasLocalChanges = _k.sent();
              if (canceled.get()) {
                return [2];
              }
              if (workspace.descriptor.origin.kind === WorkspaceOrigin_1.WorkspaceKind.LOCAL) {
                setModifiedPromise({ data: { hasLocalChanges: hasLocalChanges, isSynced: true } });
                return [2];
              }
              if (
                !(
                  workspace.descriptor.origin.kind === WorkspaceOrigin_1.WorkspaceKind.GIT ||
                  workspace.descriptor.origin.kind === WorkspaceOrigin_1.WorkspaceKind.GITHUB_GIST
                )
              )
                return [3, 9];
              _d = (_c = workspaces.gitService).resolveRef;
              _h = {};
              return [4, workspaces.fsService.getWorkspaceFs(workspace.descriptor.workspaceId)];
            case 3:
              _h.fs = _k.sent();
              return [4, workspaces.getAbsolutePath({ workspaceId: workspace.descriptor.workspaceId })];
            case 4:
              return [4, _d.apply(_c, [((_h.dir = _k.sent()), (_h.ref = "HEAD"), _h)])];
            case 5:
              head = _k.sent();
              _f = (_e = workspaces.gitService).resolveRef;
              _j = {};
              return [4, workspaces.fsService.getWorkspaceFs(workspace.descriptor.workspaceId)];
            case 6:
              _j.fs = _k.sent();
              return [4, workspaces.getAbsolutePath({ workspaceId: workspace.descriptor.workspaceId })];
            case 7:
              return [
                4,
                _f.apply(_e, [
                  ((_j.dir = _k.sent()),
                  (_j.ref = ""
                    .concat(GitService_1.GIT_ORIGIN_REMOTE_NAME, "/")
                    .concat(workspace.descriptor.origin.branch)),
                  _j),
                ]),
              ];
            case 8:
              remote = _k.sent();
              if (canceled.get()) {
                return [2];
              }
              setModifiedPromise({ data: { hasLocalChanges: hasLocalChanges, isSynced: head === remote } });
              return [2];
            case 9:
              return [2];
          }
        });
      });
    },
    [workspace, workspaces, setModifiedPromise]
  );
  (0, Hooks_1.useCancelableEffect)(
    (0, react_1.useCallback)(
      function (_a) {
        var canceled = _a.canceled;
        refresh(canceled);
      },
      [refresh]
    )
  );
  return isModifiedPromise;
}
exports.useWorkspaceGitStatusPromise = useWorkspaceGitStatusPromise;
function useWorkspacePromise(workspaceId) {
  var _this = this;
  var workspaces = (0, WorkspacesContext_1.useWorkspaces)();
  var _a = __read((0, PromiseState_1.usePromiseState)(), 2),
    workspacePromise = _a[0],
    setWorkspacePromise = _a[1];
  var refresh = (0, react_1.useCallback)(
    function (canceled) {
      return __awaiter(_this, void 0, void 0, function () {
        var descriptor, files, _a, _b, error_1;
        var _c;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              if (!workspaceId) {
                return [2];
              }
              _d.label = 1;
            case 1:
              _d.trys.push([1, 5, , 6]);
              return [4, workspaces.descriptorService.get(workspaceId)];
            case 2:
              descriptor = _d.sent();
              if (canceled.get()) {
                return [2];
              }
              if (!descriptor) {
                setWorkspacePromise({ error: "Can't find Workspace with id '".concat(workspaceId, "'") });
                return [2];
              }
              _b = (_a = workspaces).getFiles;
              _c = {};
              return [4, workspaces.fsService.getWorkspaceFs(workspaceId)];
            case 3:
              return [4, _b.apply(_a, [((_c.fs = _d.sent()), (_c.workspaceId = workspaceId), _c)])];
            case 4:
              files = _d.sent();
              if (canceled.get()) {
                return [2];
              }
              setWorkspacePromise({ data: { descriptor: descriptor, files: files } });
              return [3, 6];
            case 5:
              error_1 = _d.sent();
              setWorkspacePromise({ error: "Can't find Workspace with id '".concat(workspaceId, "'") });
              return [2];
            case 6:
              return [2];
          }
        });
      });
    },
    [setWorkspacePromise, workspaceId, workspaces]
  );
  (0, Hooks_1.useCancelableEffect)(
    (0, react_1.useCallback)(
      function (_a) {
        var canceled = _a.canceled;
        refresh(canceled);
      },
      [refresh]
    )
  );
  (0, Hooks_1.useCancelableEffect)(
    (0, react_1.useCallback)(
      function (_a) {
        var canceled = _a.canceled;
        if (!workspaceId) {
          return;
        }
        var broadcastChannel = new BroadcastChannel(workspaceId);
        broadcastChannel.onmessage = function (_a) {
          var data = _a.data;
          console.debug("EVENT::WORKSPACE: ".concat(JSON.stringify(data)));
          return refresh(canceled);
        };
        return function () {
          broadcastChannel.close();
        };
      },
      [workspaceId, refresh]
    )
  );
  return workspacePromise;
}
exports.useWorkspacePromise = useWorkspacePromise;
//# sourceMappingURL=WorkspaceHooks.js.map
