"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuidedTourDomUtils = void 0;
var GuidedTourDomUtils = (function () {
  function GuidedTourDomUtils() {
    this.elementId = "kgt-parent";
  }
  GuidedTourDomUtils.prototype.getGuidedTourHTMLElement = function () {
    var _a;
    this.guidedTourElement =
      (_a = this.guidedTourElement) !== null && _a !== void 0 ? _a : this.findGuidedTourElement();
    return this.guidedTourElement;
  };
  GuidedTourDomUtils.prototype.removeGuidedTourHTMLElement = function () {
    var _a;
    var guidedTourElement = this.getGuidedTourHTMLElement();
    (_a = guidedTourElement === null || guidedTourElement === void 0 ? void 0 : guidedTourElement.parentElement) ===
      null || _a === void 0
      ? void 0
      : _a.removeChild(guidedTourElement);
  };
  GuidedTourDomUtils.prototype.findGuidedTourElement = function () {
    var idSelector = "#" + this.elementId;
    var existingElement = document.getElementById(idSelector);
    return existingElement !== null && existingElement !== void 0 ? existingElement : this.createGuidedTourElement();
  };
  GuidedTourDomUtils.prototype.createGuidedTourElement = function () {
    var div = this.createDivHTMLElement();
    div.id = this.elementId;
    div.setAttribute("style", "z-index: 999999; position: fixed");
    return div;
  };
  GuidedTourDomUtils.prototype.createDivHTMLElement = function () {
    var div = document.createElement("div");
    return document.body.appendChild(div);
  };
  return GuidedTourDomUtils;
})();
exports.GuidedTourDomUtils = GuidedTourDomUtils;
//# sourceMappingURL=GuidedTourDomUtils.js.map
