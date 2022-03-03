"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadProjectSchemas =
  exports.ERROR_NOT_MVN_PROJECT =
  exports.ERROR_NOT_DIRECTORY =
  exports.ERROR_INVALID_FOLDER =
    void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var checks_1 = require("./checks");
var JSON_SCHEMA_PATH = "target/classes/META-INF/jsonSchema";
var JSON_SCHEMA_EXTENSION = ".json";
exports.ERROR_INVALID_FOLDER = "Path doesn't exist";
exports.ERROR_NOT_DIRECTORY = "Path isn't a directory";
exports.ERROR_NOT_MVN_PROJECT = "Cannot find 'pom.xml' in source folder, are you sure it is a Kogito Project?";
function isValidFile(schemasPath, file) {
  if (!file.endsWith(JSON_SCHEMA_EXTENSION)) {
    return false;
  }
  var stat = fs_1.default.statSync("".concat(schemasPath, "/").concat(file));
  return stat.isFile();
}
function loadProjectSchemas(projectPath, jsonSchemaPath) {
  (0, checks_1.checkKogitoProjectStructure)(projectPath);
  var schemasPath = "".concat(projectPath, "/").concat(jsonSchemaPath || JSON_SCHEMA_PATH);
  if (!fs_1.default.existsSync(schemasPath)) {
    return [];
  }
  var files = fs_1.default.readdirSync(schemasPath);
  return files
    .filter(function (file) {
      return isValidFile(schemasPath, file);
    })
    .map(function (file) {
      try {
        return {
          name: path_1.default.parse(file).name,
          schema: JSON.parse(fs_1.default.readFileSync("".concat(schemasPath, "/").concat(file), "utf8")),
        };
      } catch (err) {
        console.log('Cannot load form content for "'.concat(file, '":'), err.message);
      }
    })
    .filter(function (formSchema) {
      return formSchema !== undefined;
    });
}
exports.loadProjectSchemas = loadProjectSchemas;
//# sourceMappingURL=loadProjectSchemas.js.map
