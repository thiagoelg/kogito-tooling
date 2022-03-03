"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nService = void 0;
var I18nService = (function () {
  function I18nService(onLocaleChangeSubscriptions) {
    if (onLocaleChangeSubscriptions === void 0) {
      onLocaleChangeSubscriptions = [];
    }
    this.onLocaleChangeSubscriptions = onLocaleChangeSubscriptions;
  }
  I18nService.prototype.executeOnLocaleChangeSubscriptions = function (locale) {
    this.onLocaleChangeSubscriptions.forEach(function (onLocaleChange) {
      onLocaleChange === null || onLocaleChange === void 0 ? void 0 : onLocaleChange(locale);
    });
  };
  I18nService.prototype.subscribeToLocaleChange = function (onLocaleChange) {
    this.onLocaleChangeSubscriptions.push(onLocaleChange);
    return onLocaleChange;
  };
  I18nService.prototype.unsubscribeToLocaleChange = function (onLocaleChange) {
    var index = this.onLocaleChangeSubscriptions.indexOf(onLocaleChange);
    if (index > -1) {
      this.onLocaleChangeSubscriptions.splice(index, 1);
    }
  };
  return I18nService;
})();
exports.I18nService = I18nService;
//# sourceMappingURL=I18nService.js.map
