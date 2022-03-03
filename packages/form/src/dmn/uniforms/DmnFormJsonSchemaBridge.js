"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmnFormJsonSchemaBridge = exports.Duration = void 0;
var uniforms_bridge_json_schema_1 = require("uniforms-bridge-json-schema");
var Duration;
(function (Duration) {
  Duration[(Duration["DaysAndTimeDuration"] = 0)] = "DaysAndTimeDuration";
  Duration[(Duration["YearsAndMonthsDuration"] = 1)] = "YearsAndMonthsDuration";
})((Duration = exports.Duration || (exports.Duration = {})));
var DmnFormJsonSchemaBridge = (function (_super) {
  __extends(DmnFormJsonSchemaBridge, _super);
  function DmnFormJsonSchemaBridge() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  DmnFormJsonSchemaBridge.prototype.getProps = function (name, props) {
    var _a;
    var finalProps = _super.prototype.getProps.call(this, name, props);
    if (finalProps.label) {
      finalProps.label = (_a = name.split(".").pop()) !== null && _a !== void 0 ? _a : name;
    }
    return finalProps;
  };
  DmnFormJsonSchemaBridge.prototype.getType = function (name) {
    var fieldFormat = _super.prototype.getField.call(this, name).format;
    if (fieldFormat === "days and time duration") {
      return String;
    }
    if (fieldFormat === "years and months duration") {
      return String;
    }
    return _super.prototype.getType.call(this, name);
  };
  return DmnFormJsonSchemaBridge;
})(uniforms_bridge_json_schema_1.JSONSchemaBridge);
exports.DmnFormJsonSchemaBridge = DmnFormJsonSchemaBridge;
//# sourceMappingURL=DmnFormJsonSchemaBridge.js.map
