"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParseWithUrl = exports.jsonParseWithDate = void 0;
function jsonParseWithDate(json) {
  return JSON.parse(json, function (_key, value) {
    var regexISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
    return typeof value === "string" && regexISO.test(value) ? new Date(value) : value;
  });
}
exports.jsonParseWithDate = jsonParseWithDate;
function jsonParseWithUrl(json) {
  return JSON.parse(json, function (_key, value) {
    try {
      return new URL(value);
    } catch (e) {
      return value;
    }
  });
}
exports.jsonParseWithUrl = jsonParseWithUrl;
//# sourceMappingURL=JsonParse.js.map
