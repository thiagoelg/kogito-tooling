"use strict";
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.dialog = exports.showSaveDialogMock = exports.BrowserWindow = exports.ipcMain = exports.ipcRenderer = void 0;
var mockIpcRendererEvents = new Map();
var mockIpcMainEvents = new Map();
exports.ipcRenderer = {
  on: function (channel, listener) {
    mockIpcRendererEvents.set(channel, listener);
  },
  send: function (channel) {
    var _a, _b;
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    (_a = mockIpcRendererEvents.get(channel)) === null || _a === void 0
      ? void 0
      : _a.apply(void 0, __spreadArray([undefined], __read(args), false));
    (_b = mockIpcMainEvents.get(channel)) === null || _b === void 0
      ? void 0
      : _b.apply(void 0, __spreadArray([undefined], __read(args), false));
  },
  removeListener: function (channel, callback) {
    mockIpcRendererEvents.delete(channel);
  },
  removeAllListeners: function (channel) {
    mockIpcRendererEvents.delete(channel);
  },
};
exports.ipcMain = {
  on: function (channel, listener) {
    mockIpcMainEvents.set(channel, listener);
  },
  removeAllListeners: function (channel) {
    mockIpcMainEvents.delete(channel);
  },
};
var BrowserWindow = (function () {
  function BrowserWindow(options) {}
  return BrowserWindow;
})();
exports.BrowserWindow = BrowserWindow;
exports.showSaveDialogMock = jest.fn(function (browserWindow, options) {
  return Promise.resolve();
});
exports.dialog = {
  showSaveDialog: exports.showSaveDialogMock,
};
//# sourceMappingURL=electron.js.map
