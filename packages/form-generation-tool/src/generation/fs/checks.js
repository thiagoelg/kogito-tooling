"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkKogitoProjectHasForms = exports.checkKogitoProjectStructure = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var loadProjectSchemas_1 = require("./loadProjectSchemas");
var storeFormAsset_1 = require("./storeFormAsset");
function checkKogitoProjectStructure(projectPath) {
  if (!fs_1.default.existsSync(projectPath)) {
    throw new Error(loadProjectSchemas_1.ERROR_INVALID_FOLDER);
  }
  var sourceStat = fs_1.default.statSync(projectPath);
  if (!sourceStat.isDirectory()) {
    throw new Error(loadProjectSchemas_1.ERROR_NOT_DIRECTORY);
  }
  if (!fs_1.default.existsSync("".concat(projectPath, "/pom.xml"))) {
    throw new Error(loadProjectSchemas_1.ERROR_NOT_MVN_PROJECT);
  }
}
exports.checkKogitoProjectStructure = checkKogitoProjectStructure;
function checkKogitoProjectHasForms(projectPath) {
  var formsPath = path_1.default.join(projectPath, storeFormAsset_1.FORM_STORAGE_FOLDER);
  return fs_1.default.existsSync(formsPath);
}
exports.checkKogitoProjectHasForms = checkKogitoProjectHasForms;
//# sourceMappingURL=checks.js.map
