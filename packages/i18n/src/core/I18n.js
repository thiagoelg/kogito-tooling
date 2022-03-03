"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18n = void 0;
var immutableDeepMerge_1 = require("./immutableDeepMerge");
var I18n = (function () {
  function I18n(defaults, dictionaries, initialLocale) {
    if (initialLocale === void 0) {
      initialLocale = defaults.locale;
    }
    this.defaults = defaults;
    this.dictionaries = dictionaries;
    this.initialLocale = initialLocale;
    this.locale = initialLocale;
    this.updateDictionary();
  }
  I18n.prototype.setLocale = function (locale) {
    this.locale = locale;
    this.updateDictionary();
  };
  I18n.prototype.updateDictionary = function () {
    var _a, _b;
    var selectedDictionary =
      (_b =
        (_a = this.dictionaries.get(this.locale)) !== null && _a !== void 0
          ? _a
          : this.dictionaries.get(this.locale.split("-").shift())) !== null && _b !== void 0
        ? _b
        : {};
    this.dictionary = (0, immutableDeepMerge_1.immutableDeepMerge)(this.defaults.dictionary, selectedDictionary);
  };
  I18n.prototype.getCurrent = function () {
    return this.dictionary;
  };
  I18n.prototype.getLocale = function () {
    return this.locale;
  };
  return I18n;
})();
exports.I18n = I18n;
//# sourceMappingURL=I18n.js.map
