"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUuid = exports.executeIfExpressionDefinitionChanged = void 0;
var lodash_1 = require("lodash");
var uuid_1 = require("uuid");
var executeIfExpressionDefinitionChanged = function (prevDef, updatedDef, functionToExecute, propertiesToCheck) {
  var customizer = propertiesToCheck
    ? function (prev, next) {
        return lodash_1.default.every(propertiesToCheck, function (prop) {
          return lodash_1.default.isEqual(prev[prop], next[prop]);
        });
      }
    : undefined;
  if (!lodash_1.default.isEqualWith(prevDef, updatedDef, customizer)) {
    functionToExecute();
  }
};
exports.executeIfExpressionDefinitionChanged = executeIfExpressionDefinitionChanged;
var generateUuid = function () {
  return "_".concat((0, uuid_1.v4)()).toLocaleUpperCase();
};
exports.generateUuid = generateUuid;
//# sourceMappingURL=BoxedExpressionEditor.js.map
