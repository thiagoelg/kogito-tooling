"use strict";
var __values =
  (this && this.__values) ||
  function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniformsSchema = void 0;
var cloneDeep_1 = require("lodash/cloneDeep");
var get_1 = require("lodash/get");
var set_1 = require("lodash/set");
var unset_1 = require("lodash/unset");
var getUniformsSchema = function (schema) {
  var e_1, _a;
  var schemaClone = (0, cloneDeep_1.default)(schema);
  if (schemaClone.properties) {
    try {
      for (var _b = __values(Object.keys(schemaClone.properties)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var key = _c.value;
        var property = schemaClone.properties[key];
        var isInput = (0, get_1.default)(property, "input", false);
        var isOutput = (0, get_1.default)(property, "output", false);
        (0, unset_1.default)(property, "input");
        (0, unset_1.default)(property, "output");
        if (isInput && !isOutput) {
          (0, set_1.default)(property, "uniforms.disabled", true);
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  }
  return schemaClone;
};
exports.getUniformsSchema = getUniformsSchema;
//# sourceMappingURL=UniformsSchemaUtils.js.map
