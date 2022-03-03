"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookie = exports.getCookie = void 0;
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}
exports.getCookie = getCookie;
function setCookie(name, value) {
  var date = new Date();
  date.setTime(date.getTime() + 10 * 365 * 24 * 60 * 60);
  document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
}
exports.setCookie = setCookie;
//# sourceMappingURL=index.js.map
