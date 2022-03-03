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
exports.GitService =
  exports.GIT_DEFAULT_BRANCH =
  exports.GIT_ORIGIN_REMOTE_NAME =
  exports.GIST_ORIGIN_REMOTE_NAME =
  exports.GIST_DEFAULT_BRANCH =
    void 0;
var isomorphic_git_1 = require("isomorphic-git");
var web_1 = require("isomorphic-git/http/web");
exports.GIST_DEFAULT_BRANCH = "master";
exports.GIST_ORIGIN_REMOTE_NAME = "origin";
exports.GIT_ORIGIN_REMOTE_NAME = "origin";
exports.GIT_DEFAULT_BRANCH = "main";
var GitService = (function () {
  function GitService(corsProxy) {
    this.corsProxy = corsProxy;
  }
  GitService.prototype.clone = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            console.debug("GitService#clone--------begin");
            return [
              4,
              isomorphic_git_1.default.clone({
                fs: args.fs,
                http: web_1.default,
                corsProxy: this.corsProxy,
                dir: args.dir,
                url: args.repositoryUrl.href,
                singleBranch: true,
                noTags: true,
                depth: 1,
                ref: args.sourceBranch,
                onAuth: function () {
                  return args.authInfo;
                },
              }),
            ];
          case 1:
            _a.sent();
            if (!args.gitConfig) return [3, 3];
            return [4, this.setupGitConfig(args.fs, args.dir, args.gitConfig)];
          case 2:
            _a.sent();
            _a.label = 3;
          case 3:
            return [2];
        }
      });
    });
  };
  GitService.prototype.branch = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              isomorphic_git_1.default.branch({
                fs: args.fs,
                dir: args.dir,
                ref: args.name,
                checkout: args.checkout,
              }),
            ];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  GitService.prototype.addRemote = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              isomorphic_git_1.default.addRemote({
                fs: args.fs,
                dir: args.dir,
                remote: args.name,
                url: args.url,
                force: args.force,
              }),
            ];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  GitService.prototype.commit = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!args.author) return [3, 2];
            return [4, this.setupGitConfig(args.fs, args.dir, args.author)];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            return [
              4,
              isomorphic_git_1.default.commit({
                fs: args.fs,
                dir: args.dir,
                message: args.message,
                author: {
                  name: args.author.name,
                  email: args.author.email,
                },
                ref: args.targetBranch,
              }),
            ];
          case 3:
            _a.sent();
            return [
              4,
              isomorphic_git_1.default.writeRef({
                fs: args.fs,
                dir: args.dir,
                ref: "HEAD",
                force: true,
                value: args.targetBranch,
              }),
            ];
          case 4:
            _a.sent();
            return [2];
        }
      });
    });
  };
  GitService.prototype.pull = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              isomorphic_git_1.default.pull({
                fs: args.fs,
                http: web_1.default,
                corsProxy: this.corsProxy,
                dir: args.dir,
                ref: args.ref,
                singleBranch: true,
                author: args.author,
                onAuth: function () {
                  return args.authInfo;
                },
              }),
            ];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  GitService.prototype.getRemoteRef = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var url, serverRefs;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, isomorphic_git_1.default.getConfig({ fs: args.fs, path: "remote.origin.url", dir: args.dir })];
          case 1:
            url = _a.sent();
            return [
              4,
              isomorphic_git_1.default.listServerRefs({
                http: web_1.default,
                url: url,
                corsProxy: this.corsProxy,
                onAuth: function () {
                  return args.authInfo;
                },
              }),
            ];
          case 2:
            serverRefs = _a.sent();
            return [
              2,
              serverRefs.find(function (serverRef) {
                return args.remoteRef ? serverRef.ref === args.remoteRef : serverRef.ref === "HEAD";
              }),
            ];
        }
      });
    });
  };
  GitService.prototype.push = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var head, serverRemoteRef;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, isomorphic_git_1.default.listRemotes(args)];
          case 1:
            if (_a.sent().length === 0) {
              throw new Error("No remote repository found");
            }
            return [
              4,
              this.resolveRef({
                fs: args.fs,
                dir: args.dir,
                ref: "HEAD",
              }),
            ];
          case 2:
            head = _a.sent();
            return [
              4,
              this.getRemoteRef({
                fs: args.fs,
                dir: args.dir,
                remoteRef: args.remoteRef,
                authInfo: args.authInfo,
              }),
            ];
          case 3:
            serverRemoteRef = _a.sent();
            if (
              (serverRemoteRef === null || serverRemoteRef === void 0 ? void 0 : serverRemoteRef.oid) &&
              head === serverRemoteRef.oid
            )
              return [2];
            return [
              4,
              isomorphic_git_1.default.push({
                fs: args.fs,
                http: web_1.default,
                corsProxy: this.corsProxy,
                dir: args.dir,
                ref: args.ref,
                remoteRef: args.remoteRef,
                remote: args.remote,
                force: args.force,
                onAuth: function () {
                  return args.authInfo;
                },
              }),
            ];
          case 4:
            _a.sent();
            return [2];
        }
      });
    });
  };
  GitService.prototype.add = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              isomorphic_git_1.default.add({
                fs: args.fs,
                dir: args.dir,
                filepath: args.relativePath,
              }),
            ];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  GitService.prototype.setupGitConfig = function (fs, dir, config) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              isomorphic_git_1.default.setConfig({
                fs: fs,
                dir: dir,
                path: "user.name",
                value: config.name,
              }),
            ];
          case 1:
            _a.sent();
            return [
              4,
              isomorphic_git_1.default.setConfig({
                fs: fs,
                dir: dir,
                path: "user.email",
                value: config.email,
              }),
            ];
          case 2:
            _a.sent();
            return [2];
        }
      });
    });
  };
  GitService.prototype.init = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              isomorphic_git_1.default.init({
                fs: args.fs,
                dir: args.dir,
                bare: false,
                defaultBranch: exports.GIT_DEFAULT_BRANCH,
              }),
            ];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  GitService.prototype.isIgnored = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              isomorphic_git_1.default.isIgnored({
                fs: args.fs,
                dir: args.dir,
                filepath: args.filepath,
              }),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  GitService.prototype.rm = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              isomorphic_git_1.default.remove({
                fs: args.fs,
                dir: args.dir,
                filepath: args.relativePath,
              }),
            ];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  GitService.prototype.hasLocalChanges = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var files;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.unstagedModifiedFileRelativePaths(args)];
          case 1:
            files = _a.sent();
            return [2, files.length > 0];
        }
      });
    });
  };
  GitService.prototype.unstagedModifiedFileRelativePaths = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var cache, pseudoStatusMatrix, _WORKDIR, _STAGE, _FILE;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            cache = {};
            return [
              4,
              isomorphic_git_1.default.walk({
                cache: cache,
                fs: args.fs,
                dir: args.dir,
                trees: [(0, isomorphic_git_1.WORKDIR)(), (0, isomorphic_git_1.STAGE)()],
                map: function (filepath, _a) {
                  var _b = __read(_a, 2),
                    workdir = _b[0],
                    stage = _b[1];
                  return __awaiter(_this, void 0, void 0, function () {
                    var _c, workdirType, _d, stageType, _e, stageOid, _f, workdirOid, entry, result;
                    return __generator(this, function (_g) {
                      switch (_g.label) {
                        case 0:
                          _c = !stage && workdir;
                          if (!_c) return [3, 2];
                          return [
                            4,
                            isomorphic_git_1.default.isIgnored({ fs: args.fs, dir: args.dir, filepath: filepath }),
                          ];
                        case 1:
                          _c = _g.sent();
                          _g.label = 2;
                        case 2:
                          if (_c) {
                            return [2, null];
                          }
                          if (filepath.startsWith(".git")) {
                            return [2, null];
                          }
                          _d = workdir;
                          if (!_d) return [3, 4];
                          return [4, workdir.type()];
                        case 3:
                          _d = _g.sent();
                          _g.label = 4;
                        case 4:
                          workdirType = _d;
                          if (workdirType === "tree" || workdirType === "special") return [2];
                          _e = stage;
                          if (!_e) return [3, 6];
                          return [4, stage.type()];
                        case 5:
                          _e = _g.sent();
                          _g.label = 6;
                        case 6:
                          stageType = _e;
                          if (stageType === "commit") return [2, null];
                          if (stageType === "tree" || stageType === "special") return [2];
                          if (!stage) return [3, 8];
                          return [4, stage.oid()];
                        case 7:
                          _f = _g.sent();
                          return [3, 9];
                        case 8:
                          _f = undefined;
                          _g.label = 9;
                        case 9:
                          stageOid = _f;
                          if (!(workdir && !stage)) return [3, 10];
                          workdirOid = "42";
                          return [3, 12];
                        case 10:
                          if (!workdir) return [3, 12];
                          return [4, workdir.oid()];
                        case 11:
                          workdirOid = _g.sent();
                          _g.label = 12;
                        case 12:
                          entry = [undefined, undefined, workdirOid, stageOid];
                          result = entry.map(function (value) {
                            return entry.indexOf(value);
                          });
                          result.shift();
                          return [2, __spreadArray([filepath], __read(result), false)];
                      }
                    });
                  });
                },
              }),
            ];
          case 1:
            pseudoStatusMatrix = _a.sent();
            _WORKDIR = 2;
            _STAGE = 3;
            _FILE = 0;
            return [
              2,
              pseudoStatusMatrix
                .filter(function (row) {
                  return row[_WORKDIR] !== row[_STAGE];
                })
                .map(function (row) {
                  return row[_FILE];
                }),
            ];
        }
      });
    });
  };
  GitService.prototype.resolveRef = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [
          2,
          isomorphic_git_1.default.resolveRef({
            fs: args.fs,
            dir: args.dir,
            ref: args.ref,
          }),
        ];
      });
    });
  };
  return GitService;
})();
exports.GitService = GitService;
//# sourceMappingURL=GitService.js.map
