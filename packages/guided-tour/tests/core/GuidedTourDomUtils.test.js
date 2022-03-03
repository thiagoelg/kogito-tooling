"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@kie-tools-core/guided-tour/dist/core");
var test_utils_1 = require("react-dom/test-utils");
describe("GuidedTourDomUtils", function () {
  var domUtils = new core_1.GuidedTourDomUtils();
  describe("getGuidedTourHTMLElement", function () {
    it("creates the guided tour element when it's not present once", function () {
      (0, test_utils_1.act)(function () {
        domUtils.getGuidedTourHTMLElement();
        domUtils.getGuidedTourHTMLElement();
      });
      expect(document.body).toMatchSnapshot();
    });
    it("always returns the same element", function () {
      var result1 = domUtils.getGuidedTourHTMLElement();
      var result2 = domUtils.getGuidedTourHTMLElement();
      expect(result1).toEqual(result2);
    });
  });
  describe("getGuidedTourHTMLElement", function () {
    it("removes the guided tour element when it exists", function () {
      (0, test_utils_1.act)(function () {
        domUtils.getGuidedTourHTMLElement();
        domUtils.removeGuidedTourHTMLElement();
      });
      expect(document.body).toMatchSnapshot();
    });
    it("does not raise any error when the guided tour element does not exist", function () {
      (0, test_utils_1.act)(function () {
        domUtils.removeGuidedTourHTMLElement();
      });
      expect(document.body).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=GuidedTourDomUtils.test.js.map
