"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWorkspaces = exports.WorkspacesContext = exports.WorkspaceFile = exports.encoder = exports.decoder = void 0;
var react_1 = require("react");
var path_1 = require("path");
exports.decoder = new TextDecoder("utf-8");
exports.encoder = new TextEncoder();
var WorkspaceFile = (function () {
  function WorkspaceFile(args) {
    this.args = args;
  }
  Object.defineProperty(WorkspaceFile.prototype, "getFileContentsAsString", {
    get: function () {
      var _this = this;
      return function () {
        return _this.getFileContents().then(function (c) {
          return exports.decoder.decode(c);
        });
      };
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(WorkspaceFile.prototype, "getFileContents", {
    get: function () {
      return this.args.getFileContents;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(WorkspaceFile.prototype, "workspaceId", {
    get: function () {
      return this.args.workspaceId;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(WorkspaceFile.prototype, "relativePath", {
    get: function () {
      return this.args.relativePath;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(WorkspaceFile.prototype, "relativePathWithoutExtension", {
    get: function () {
      return this.relativePath.split(".").slice(0, -1).join(".");
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(WorkspaceFile.prototype, "relativeDirPath", {
    get: function () {
      return (0, path_1.parse)(this.relativePath).dir;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(WorkspaceFile.prototype, "extension", {
    get: function () {
      return (0, path_1.extname)(this.relativePath).replace(".", "");
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(WorkspaceFile.prototype, "nameWithoutExtension", {
    get: function () {
      return (0, path_1.basename)(this.relativePath, ".".concat(this.extension));
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(WorkspaceFile.prototype, "name", {
    get: function () {
      return (0, path_1.basename)(this.relativePath);
    },
    enumerable: false,
    configurable: true,
  });
  return WorkspaceFile;
})();
exports.WorkspaceFile = WorkspaceFile;
exports.WorkspacesContext = (0, react_1.createContext)({});
function useWorkspaces() {
  return (0, react_1.useContext)(exports.WorkspacesContext);
}
exports.useWorkspaces = useWorkspaces;
//# sourceMappingURL=WorkspacesContext.js.map
