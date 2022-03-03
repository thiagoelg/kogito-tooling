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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceFsService = void 0;
var kie_sandbox_fs_1 = require("@kie-tools/kie-sandbox-fs");
var DexieBackend_1 = require("@kie-tools/kie-sandbox-fs/dist/DexieBackend");
var InMemoryBackend_1 = require("./InMemoryBackend");
var DefaultBackend_1 = require("@kie-tools/kie-sandbox-fs/dist/DefaultBackend");
var FsCache_1 = require("./FsCache");
var WorkspaceFsService = (function () {
  function WorkspaceFsService(descriptorService, fsCache) {
    if (fsCache === void 0) {
      fsCache = new FsCache_1.FsCache();
    }
    this.descriptorService = descriptorService;
    this.fsCache = fsCache;
  }
  WorkspaceFsService.prototype.getWorkspaceFs = function (workspaceId) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.descriptorService.get(workspaceId)];
          case 1:
            if (!_a.sent()) {
              throw new Error("Can't get FS for non-existent workspace '".concat(workspaceId, "'"));
            }
            return [2, this.fsCache.getOrCreateFs(workspaceId)];
        }
      });
    });
  };
  WorkspaceFsService.prototype.withInMemoryFs = function (workspaceId, callback) {
    return __awaiter(this, void 0, void 0, function () {
      var _a, fs, flush, ret;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4, this.createInMemoryWorkspaceFs(workspaceId)];
          case 1:
            (_a = _b.sent()), (fs = _a.fs), (flush = _a.flush);
            return [4, callback(fs)];
          case 2:
            ret = _b.sent();
            return [4, flush()];
          case 3:
            _b.sent();
            return [2, ret];
        }
      });
    });
  };
  WorkspaceFsService.prototype.createInMemoryWorkspaceFs = function (workspaceId) {
    return __awaiter(this, void 0, void 0, function () {
      var readEntireFs, dbName, storeName, dexieBackend, inMemoryBackend, _a, _b, _c, flush, fs;
      var _this = this;
      return __generator(this, function (_d) {
        switch (_d.label) {
          case 0:
            readEntireFs = function (dexieBackend) {
              return __awaiter(_this, void 0, void 0, function () {
                var keys, data, fsAsMapConstructorParameter, i;
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      console.debug("MEM :: Reading FS to memory");
                      return [4, dexieBackend._dexie.open()];
                    case 1:
                      _a.sent();
                      return [4, dexieBackend._dexie.table(dexieBackend._storename).toCollection().keys()];
                    case 2:
                      keys = _a.sent();
                      return [4, dexieBackend.readFileBulk(keys)];
                    case 3:
                      data = _a.sent();
                      fsAsMapConstructorParameter = [];
                      for (i = 0; i < data.length; i++) {
                        fsAsMapConstructorParameter[i] = [keys[i], data[i]];
                      }
                      return [2, fsAsMapConstructorParameter];
                  }
                });
              });
            };
            dbName = workspaceId;
            storeName = workspaceId + "_files";
            dexieBackend = new DexieBackend_1.default(dbName, storeName);
            _a = InMemoryBackend_1.InMemoryBackend.bind;
            _b = [void 0, dexieBackend];
            _c = Map.bind;
            return [4, readEntireFs(dexieBackend)];
          case 1:
            inMemoryBackend = new (_a.apply(
              InMemoryBackend_1.InMemoryBackend,
              _b.concat([new (_c.apply(Map, [void 0, _d.sent()]))()])
            ))();
            flush = function () {
              return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                  return [
                    2,
                    new Promise(function (res) {
                      setTimeout(function () {
                        return __awaiter(_this, void 0, void 0, function () {
                          var inodeBulk, dataBulk;
                          return __generator(this, function (_a) {
                            switch (_a.label) {
                              case 0:
                                inodeBulk = Array.from(inMemoryBackend.fs.keys());
                                dataBulk = Array.from(inMemoryBackend.fs.values());
                                console.debug("MEM :: Flushing in memory FS");
                                return [4, dexieBackend.writeFileBulk(inodeBulk, dataBulk)];
                              case 1:
                                _a.sent();
                                res();
                                return [2];
                            }
                          });
                        });
                      }, 500);
                    }),
                  ];
                });
              });
            };
            fs = new kie_sandbox_fs_1.default(dbName, {
              backend: new DefaultBackend_1.default({
                idbBackendDelegate: function () {
                  return inMemoryBackend;
                },
              }),
            });
            return [2, { fs: fs, flush: flush }];
        }
      });
    });
  };
  return WorkspaceFsService;
})();
exports.WorkspaceFsService = WorkspaceFsService;
//# sourceMappingURL=WorkspaceFsService.js.map
