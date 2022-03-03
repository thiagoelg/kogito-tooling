"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@kie-tools-core/i18n/dist/core");
var english = {
  test: "this is a test",
};
var portuguese = {
  test: "isso é um teste",
};
var defaults = { locale: "en", dictionary: english };
var dictionaries = new Map([
  ["en", english],
  ["pt", portuguese],
]);
describe("I18n", function () {
  describe("new", function () {
    it("startingLocale", function () {
      var i18n = new core_1.I18n(defaults, dictionaries, "pt");
      expect(i18n.getLocale()).toEqual("pt");
      expect(i18n.getCurrent().test).toEqual(portuguese.test);
    });
    it("default locale", function () {
      var i18n = new core_1.I18n(defaults, dictionaries);
      expect(i18n.getLocale()).toEqual("en");
      expect(i18n.getCurrent().test).toEqual(english.test);
    });
  });
  it("setLocale", function () {
    var i18n = new core_1.I18n(defaults, dictionaries);
    expect(i18n.getLocale()).toEqual("en");
    expect(i18n.getCurrent().test).toEqual(english.test);
    i18n.setLocale("pt");
    expect(i18n.getLocale()).toEqual("pt");
    expect(i18n.getCurrent().test).toEqual(portuguese.test);
  });
});
//# sourceMappingURL=I18n.test.js.map
