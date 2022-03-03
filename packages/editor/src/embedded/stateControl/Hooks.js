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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStateControlSubscription = exports.useDirtyState = void 0;
var react_1 = require("react");
function useDirtyState(editor) {
  var _a = __read((0, react_1.useState)(false), 2),
    isDirty = _a[0],
    setIsDirty = _a[1];
  (0, react_1.useEffect)(
    function () {
      var _a;
      setIsDirty(
        (_a = editor === null || editor === void 0 ? void 0 : editor.getStateControl().isDirty()) !== null &&
          _a !== void 0
          ? _a
          : false
      );
      var callback = editor === null || editor === void 0 ? void 0 : editor.getStateControl().subscribe(setIsDirty);
      return function () {
        editor === null || editor === void 0 ? void 0 : editor.getStateControl().unsubscribe(callback);
      };
    },
    [editor]
  );
  return isDirty;
}
exports.useDirtyState = useDirtyState;
function useStateControlSubscription(editor, callback, args) {
  if (args === void 0) {
    args = { throttle: 0 };
  }
  (0, react_1.useEffect)(
    function () {
      if (!(editor === null || editor === void 0 ? void 0 : editor.isReady)) {
        return;
      }
      var timeout;
      var subscription =
        editor === null || editor === void 0
          ? void 0
          : editor.getStateControl().subscribe(function (isDirty) {
              if (args.throttle <= 0) {
                callback(isDirty);
                return;
              }
              if (timeout) {
                clearTimeout(timeout);
              }
              timeout = window.setTimeout(function () {
                callback(isDirty);
              }, args.throttle);
            });
      return function () {
        if (subscription) {
          return editor === null || editor === void 0 ? void 0 : editor.getStateControl().unsubscribe(subscription);
        }
      };
    },
    [editor, callback, args.throttle]
  );
}
exports.useStateControlSubscription = useStateControlSubscription;
//# sourceMappingURL=Hooks.js.map
