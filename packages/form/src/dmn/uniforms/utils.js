"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataPathToFormFieldPath = void 0;
function dataPathToFormFieldPath(path) {
  path = path.startsWith("/")
    ? path.replace(/\//g, ".").replace(/~0/g, "~").replace(/~1/g, "/")
    : path
        .replace(/\[('|")(.+?)\1\]/g, ".$2")
        .replace(/\[(.+?)\]/g, ".$1")
        .replace(/\\'/g, "'");
  return path.slice(1);
}
exports.dataPathToFormFieldPath = dataPathToFormFieldPath;
//# sourceMappingURL=utils.js.map
