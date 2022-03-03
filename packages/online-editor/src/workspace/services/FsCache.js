"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FsCache = void 0;
var kie_sandbox_fs_1 = require("@kie-tools/kie-sandbox-fs");
var DefaultBackend_1 = require("@kie-tools/kie-sandbox-fs/dist/DefaultBackend");
var DexieBackend_1 = require("@kie-tools/kie-sandbox-fs/dist/DexieBackend");
var FsCache = (function () {
  function FsCache() {
    this.fsCache = new Map();
  }
  FsCache.prototype.getOrCreateFs = function (workspaceId) {
    var fs = this.fsCache.get(workspaceId);
    if (fs) {
      return fs;
    }
    var newFs = new kie_sandbox_fs_1.default(workspaceId, {
      backend: new DefaultBackend_1.default({
        idbBackendDelegate: function (dbName, storeName) {
          return new DexieBackend_1.default(dbName, storeName);
        },
      }),
    });
    this.fsCache.set(workspaceId, newFs);
    return newFs;
  };
  return FsCache;
})();
exports.FsCache = FsCache;
//# sourceMappingURL=FsCache.js.map
