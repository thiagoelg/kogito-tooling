"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDirectories = exports.removeFileExtension = exports.extractFileExtension = void 0;
function extractFileExtension(fileName) {
  var _a, _b;
  return (_b = (_a = fileName.split(".").pop()) === null || _a === void 0 ? void 0 : _a.match(/[\w\d]+/)) === null ||
    _b === void 0
    ? void 0
    : _b.pop();
}
exports.extractFileExtension = extractFileExtension;
function removeFileExtension(fileName) {
  var fileExtension = extractFileExtension(fileName);
  if (!fileExtension) {
    return fileName;
  }
  return fileName.substr(0, fileName.length - fileExtension.length - 1);
}
exports.removeFileExtension = removeFileExtension;
function removeDirectories(filePath) {
  return filePath.split("/").pop();
}
exports.removeDirectories = removeDirectories;
//# sourceMappingURL=utils.js.map
