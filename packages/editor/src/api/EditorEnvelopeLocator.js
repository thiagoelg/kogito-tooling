"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorEnvelopeLocator = exports.EnvelopeMapping = void 0;
var minimatch_1 = require("minimatch");
var EnvelopeMapping = (function () {
  function EnvelopeMapping(type, filePathGlob, resourcesPathPrefix, envelopePath) {
    this.type = type;
    this.filePathGlob = filePathGlob;
    this.resourcesPathPrefix = resourcesPathPrefix;
    this.envelopePath = envelopePath;
    this.matcher = new minimatch_1.Minimatch(filePathGlob, { nocase: true });
  }
  return EnvelopeMapping;
})();
exports.EnvelopeMapping = EnvelopeMapping;
var EditorEnvelopeLocator = (function () {
  function EditorEnvelopeLocator(targetOrigin, envelopeMappings) {
    this.targetOrigin = targetOrigin;
    this.envelopeMappings = envelopeMappings;
  }
  EditorEnvelopeLocator.prototype.getEnvelopeMapping = function (path) {
    return this.envelopeMappings.find(function (mapping) {
      return mapping.matcher.match(path);
    });
  };
  EditorEnvelopeLocator.prototype.hasMappingFor = function (path) {
    return this.getEnvelopeMapping(path) !== undefined;
  };
  return EditorEnvelopeLocator;
})();
exports.EditorEnvelopeLocator = EditorEnvelopeLocator;
//# sourceMappingURL=EditorEnvelopeLocator.js.map
