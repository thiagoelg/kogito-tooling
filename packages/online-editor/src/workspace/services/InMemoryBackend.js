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
var __values =
  (this && this.__values) ||
  function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryBackend = void 0;
var InMemoryBackend = (function () {
  function InMemoryBackend(dexieBackend, fs) {
    if (fs === void 0) {
      fs = new Map();
    }
    this.dexieBackend = dexieBackend;
    this.fs = fs;
  }
  InMemoryBackend.prototype.saveSuperblock = function (superblock) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.fs.set("!root", superblock);
        return [2];
      });
    });
  };
  InMemoryBackend.prototype.loadSuperblock = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2, this.fs.get("!root")];
      });
    });
  };
  InMemoryBackend.prototype.readFile = function (inode) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2, this.fs.get(inode)];
      });
    });
  };
  InMemoryBackend.prototype.writeFile = function (inode, data) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.fs.set(inode, data);
        return [2];
      });
    });
  };
  InMemoryBackend.prototype.unlink = function (inode) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.fs.delete(inode);
        return [2];
      });
    });
  };
  InMemoryBackend.prototype.wipe = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        this.fs = new Map();
        return [2];
      });
    });
  };
  InMemoryBackend.prototype.close = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2];
      });
    });
  };
  InMemoryBackend.prototype.readFileBulk = function (inodeBulk) {
    return __awaiter(this, void 0, void 0, function () {
      var ret, inodeBulk_1, inodeBulk_1_1, ino;
      var e_1, _a;
      return __generator(this, function (_b) {
        ret = [];
        try {
          for (
            inodeBulk_1 = __values(inodeBulk), inodeBulk_1_1 = inodeBulk_1.next();
            !inodeBulk_1_1.done;
            inodeBulk_1_1 = inodeBulk_1.next()
          ) {
            ino = inodeBulk_1_1.value;
            ret.push(this.fs.get(ino));
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (inodeBulk_1_1 && !inodeBulk_1_1.done && (_a = inodeBulk_1.return)) _a.call(inodeBulk_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return [2, ret];
      });
    });
  };
  InMemoryBackend.prototype.writeFileBulk = function (inodeBulk, dataBulk) {
    return __awaiter(this, void 0, void 0, function () {
      var i;
      return __generator(this, function (_a) {
        for (i = 0; i < inodeBulk.length; i++) {
          this.fs.set(inodeBulk[i], dataBulk[i]);
        }
        return [2];
      });
    });
  };
  InMemoryBackend.prototype.unlinkBulk = function (inodeBulk) {
    return __awaiter(this, void 0, void 0, function () {
      var inodeBulk_2, inodeBulk_2_1, ino;
      var e_2, _a;
      return __generator(this, function (_b) {
        try {
          for (
            inodeBulk_2 = __values(inodeBulk), inodeBulk_2_1 = inodeBulk_2.next();
            !inodeBulk_2_1.done;
            inodeBulk_2_1 = inodeBulk_2.next()
          ) {
            ino = inodeBulk_2_1.value;
            this.fs.delete(ino);
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (inodeBulk_2_1 && !inodeBulk_2_1.done && (_a = inodeBulk_2.return)) _a.call(inodeBulk_2);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
        return [2];
      });
    });
  };
  return InMemoryBackend;
})();
exports.InMemoryBackend = InMemoryBackend;
//# sourceMappingURL=InMemoryBackend.js.map
