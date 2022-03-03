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
exports.useWorkspaceFilePromise = void 0;
var react_1 = require("react");
var WorkspacesContext_1 = require("../WorkspacesContext");
var Hooks_1 = require("../../reactExt/Hooks");
var PromiseState_1 = require("./PromiseState");
function useWorkspaceFilePromise(workspaceId, relativePath) {
  var _this = this;
  var workspaces = (0, WorkspacesContext_1.useWorkspaces)();
  var _a = __read((0, PromiseState_1.usePromiseState)(), 2),
    workspaceFilePromise = _a[0],
    setWorkspaceFilePromise = _a[1];
  var refresh = (0, react_1.useCallback)(
    function (workspaceId, relativePath, canceled) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, _b;
        var _c;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              _b = (_a = workspaces).getFile;
              _c = {};
              return [4, workspaces.fsService.getWorkspaceFs(workspaceId)];
            case 1:
              _b.apply(_a, [
                ((_c.fs = _d.sent()), (_c.workspaceId = workspaceId), (_c.relativePath = relativePath), _c),
              ]).then(function (workspaceFile) {
                if (canceled.get()) {
                  return;
                }
                if (!workspaceFile) {
                  setWorkspaceFilePromise({
                    error: "File '".concat(relativePath, "' not found in Workspace '").concat(workspaceId, "'"),
                  });
                  return;
                }
                setWorkspaceFilePromise({ data: workspaceFile });
              });
              return [2];
          }
        });
      });
    },
    [workspaces, setWorkspaceFilePromise]
  );
  (0, Hooks_1.useCancelableEffect)(
    (0, react_1.useCallback)(
      function (_a) {
        var canceled = _a.canceled;
        if (!relativePath || !workspaceId) {
          return;
        }
        refresh(workspaceId, relativePath, canceled);
      },
      [relativePath, workspaceId, refresh]
    )
  );
  (0, Hooks_1.useCancelableEffect)(
    (0, react_1.useCallback)(
      function (_a) {
        var canceled = _a.canceled;
        if (!relativePath || !workspaceId) {
          return;
        }
        var uniqueFileIdentifier = workspaces.getUniqueFileIdentifier({
          workspaceId: workspaceId,
          relativePath: relativePath,
        });
        console.debug("Subscribing to " + uniqueFileIdentifier);
        var broadcastChannel = new BroadcastChannel(uniqueFileIdentifier);
        broadcastChannel.onmessage = function (_a) {
          var data = _a.data;
          console.debug("EVENT::WORKSPACE_FILE: ".concat(JSON.stringify(data)));
          if (data.type === "MOVE" || data.type == "RENAME") {
            refresh(workspaceId, data.newRelativePath, canceled);
          }
          if (data.type === "UPDATE" || data.type === "DELETE" || data.type === "ADD") {
            refresh(workspaceId, data.relativePath, canceled);
          }
        };
        console.debug("Subscribing to " + workspaceId);
        var broadcastChannel2 = new BroadcastChannel(workspaceId);
        broadcastChannel2.onmessage = function (_a) {
          var data = _a.data;
          console.debug("EVENT::WORKSPACE: ".concat(JSON.stringify(data)));
          if (data.type === "PULL") {
            refresh(workspaceId, relativePath, canceled);
          }
        };
        return function () {
          console.debug("Unsubscribing to " + uniqueFileIdentifier);
          broadcastChannel.close();
        };
      },
      [relativePath, workspaceId, workspaces, refresh]
    )
  );
  return workspaceFilePromise;
}
exports.useWorkspaceFilePromise = useWorkspaceFilePromise;
//# sourceMappingURL=WorkspaceFileHooks.js.map
