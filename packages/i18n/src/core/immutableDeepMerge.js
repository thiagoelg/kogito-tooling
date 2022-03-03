"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.immutableDeepMerge = void 0;
function deepMerge(target, source) {
  Object.keys(source).forEach(function (key) {
    var sourceValue = source[key];
    if (!sourceValue) {
      return;
    }
    if (typeof sourceValue === "string" || typeof sourceValue === "function") {
      target[key] = sourceValue;
    } else {
      target[key] = deepMerge(createObjectCopy(target[key]), sourceValue);
    }
  });
  return target;
}
function immutableDeepMerge(target, source) {
  var targetCopy = createObjectCopy(target);
  return deepMerge(targetCopy, source);
}
exports.immutableDeepMerge = immutableDeepMerge;
function createObjectCopy(obj) {
  return Object.assign({}, obj);
}
//# sourceMappingURL=immutableDeepMerge.js.map
