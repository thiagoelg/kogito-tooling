"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Files = void 0;
var Files = (function () {
  function Files() {}
  Files.register = function (provider) {
    this.providers.set(provider.type, provider);
  };
  Files.write = function (file, content) {
    var provider = this.providers.get(file.storage);
    if (provider) {
      return provider.write(file, content);
    }
    return Promise.resolve();
  };
  Files.read = function (file) {
    var provider = this.providers.get(file.storage);
    if (provider) {
      return provider.read(file);
    }
    return Promise.resolve("");
  };
  Files.exists = function (file) {
    var provider = this.providers.get(file.storage);
    if (provider) {
      return provider.exists(file);
    }
    return false;
  };
  Files.list = function (directory) {
    var provider = this.providers.get(directory.storage);
    if (provider) {
      return provider.list(directory);
    }
    return [];
  };
  Files.delete = function (fileOrDir) {
    var provider = this.providers.get(fileOrDir.storage);
    if (provider) {
      if (provider.isDirectory(fileOrDir)) {
        provider
          .list(fileOrDir)
          .reverse()
          .forEach(function (file) {
            return provider.remove(file);
          });
      } else {
        provider.remove(fileOrDir);
      }
    }
  };
  Files.providers = new Map();
  return Files;
})();
exports.Files = Files;
//# sourceMappingURL=Files.js.map
