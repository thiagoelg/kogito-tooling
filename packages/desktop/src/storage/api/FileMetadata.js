"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileMetadata = void 0;
var FileMetadata = (function () {
  function FileMetadata(name, fullName, relativeName, type, uri, storage, origin, id) {
    this.name = name;
    this.fullName = fullName;
    this.relativeName = relativeName;
    this.type = type;
    this.uri = uri;
    this.storage = storage;
    this.origin = origin;
    this.id = id;
  }
  return FileMetadata;
})();
exports.FileMetadata = FileMetadata;
//# sourceMappingURL=FileMetadata.js.map
