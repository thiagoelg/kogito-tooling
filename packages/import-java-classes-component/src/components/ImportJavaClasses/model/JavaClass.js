"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaClass = void 0;
var JavaClass = (function () {
  function JavaClass(name) {
    this.name = name;
    this.fields = [];
    this.fieldsLoaded = false;
  }
  JavaClass.prototype.setFields = function (fields) {
    this.fields = fields;
    this.fieldsLoaded = true;
  };
  return JavaClass;
})();
exports.JavaClass = JavaClass;
//# sourceMappingURL=JavaClass.js.map
