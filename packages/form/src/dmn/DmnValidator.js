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
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmnValidator = exports.YEARS_AND_MONTHS = exports.DAYS_AND_TIME = void 0;
var metaSchemaDraft04 = require("ajv/lib/refs/json-schema-draft-04.json");
var core_1 = require("../core");
var uniforms_1 = require("./uniforms");
exports.DAYS_AND_TIME = /^(-|\+)?P(?:([-+]?[0-9]*)D)?(?:T(?:([-+]?[0-9]*)H)?(?:([-+]?[0-9]*)M)?(?:([-+]?[0-9]*)S)?)?$/;
exports.YEARS_AND_MONTHS = /^(-|\+)?P(?:([-+]?[0-9]*)Y)?(?:([-+]?[0-9]*)M)?$/;
var DmnValidator = (function (_super) {
  __extends(DmnValidator, _super);
  function DmnValidator(i18n) {
    var _this = _super.call(this) || this;
    _this.i18n = i18n;
    _this.SCHEMA_DRAFT4 = "http://json-schema.org/draft-04/schema#";
    _this.setupValidator();
    return _this;
  }
  DmnValidator.prototype.setupValidator = function () {
    this.ajv.addMetaSchema(metaSchemaDraft04);
    this.ajv.addFormat("days and time duration", {
      type: "string",
      validate: function (data) {
        return !!data.match(exports.DAYS_AND_TIME);
      },
    });
    this.ajv.addFormat("years and months duration", {
      type: "string",
      validate: function (data) {
        return !!data.match(exports.YEARS_AND_MONTHS);
      },
    });
  };
  DmnValidator.prototype.createValidator = function (jsonSchema) {
    var _this = this;
    var validator = this.ajv.compile(jsonSchema);
    return function (model) {
      var _a, _b;
      validator(JSON.parse(JSON.stringify(model)));
      if (!((_a = validator.errors) === null || _a === void 0 ? void 0 : _a.length)) {
        return null;
      }
      return {
        details:
          (_b = validator.errors) === null || _b === void 0
            ? void 0
            : _b.map(function (error) {
                if (error.keyword === "format") {
                  if (error.params.format === "days and time duration") {
                    return __assign(__assign({}, error), { message: _this.i18n.form.validation.daysAndTimeError });
                  }
                  if (error.params.format === "years and months duration") {
                    return __assign(__assign({}, error), { message: _this.i18n.form.validation.yearsAndMonthsError });
                  }
                }
                return error;
              }),
      };
    };
  };
  DmnValidator.prototype.getBridge = function (formSchema) {
    var formDraft4 = __assign(__assign({}, formSchema), { $schema: this.SCHEMA_DRAFT4 });
    var validator = this.createValidator(formDraft4);
    return new uniforms_1.DmnFormJsonSchemaBridge(formDraft4, validator);
  };
  return DmnValidator;
})(core_1.Validator);
exports.DmnValidator = DmnValidator;
//# sourceMappingURL=DmnValidator.js.map
