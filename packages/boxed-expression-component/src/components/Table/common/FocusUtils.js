"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.focusNextTextArea = exports.blurActiveElement = exports.focusTextArea = void 0;
var focusTextArea = function (textarea) {
  var value = (textarea === null || textarea === void 0 ? void 0 : textarea.value) || "";
  textarea === null || textarea === void 0 ? void 0 : textarea.focus();
  textarea === null || textarea === void 0 ? void 0 : textarea.setSelectionRange(value.length, value.length);
};
exports.focusTextArea = focusTextArea;
var blurActiveElement = function () {
  if (!document.activeElement) {
    return;
  }
  var activeElement = document.activeElement;
  activeElement.blur();
};
exports.blurActiveElement = blurActiveElement;
var focusNextTextArea = function (currentTextArea) {
  if (!currentTextArea) {
    return;
  }
  var textAreas = document.querySelectorAll("textarea");
  var indexOfCurrent = [].slice.call(textAreas).indexOf(currentTextArea);
  var indexOfNext = indexOfCurrent < textAreas.length - 1 ? indexOfCurrent + 1 : 0;
  textAreas.item(indexOfNext).focus();
};
exports.focusNextTextArea = focusNextTextArea;
//# sourceMappingURL=FocusUtils.js.map
