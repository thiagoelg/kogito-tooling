"use strict";
var __values =
  (this && this.__values) ||
  function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSyncedKeyboardEvents = exports.useElementsThatStopKeyboardEventsPropagation = void 0;
var react_1 = require("react");
function getChannelKeyboardEvent(keyboardEvent) {
  var _a;
  return {
    altKey: keyboardEvent.altKey,
    ctrlKey: keyboardEvent.ctrlKey,
    shiftKey: keyboardEvent.shiftKey,
    metaKey: keyboardEvent.metaKey,
    code: keyboardEvent.code,
    type: keyboardEvent.type,
    channelOriginalTargetTagName: (_a = keyboardEvent.target) === null || _a === void 0 ? void 0 : _a.tagName,
  };
}
function useElementsThatStopKeyboardEventsPropagation(element, selectors) {
  if (element === void 0) {
    element = window;
  }
  var stopPropagation = function (ev) {
    ev.stopPropagation();
  };
  var target = element === window ? document : element;
  var elementsStoppingPropagation = selectors.flatMap(function (selector) {
    var e_1, _a;
    var es = Array.from(target.querySelectorAll(selector));
    try {
      for (var es_1 = __values(es), es_1_1 = es_1.next(); !es_1_1.done; es_1_1 = es_1.next()) {
        var e = es_1_1.value;
        e.addEventListener("keydown", stopPropagation);
        e.addEventListener("keyup", stopPropagation);
        e.addEventListener("keypress", stopPropagation);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (es_1_1 && !es_1_1.done && (_a = es_1.return)) _a.call(es_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    return es;
  });
  return function () {
    elementsStoppingPropagation === null || elementsStoppingPropagation === void 0
      ? void 0
      : elementsStoppingPropagation.forEach(function (e) {
          e.removeEventListener("keydown", stopPropagation);
          e.removeEventListener("keyup", stopPropagation);
          e.removeEventListener("keypress", stopPropagation);
        });
  };
}
exports.useElementsThatStopKeyboardEventsPropagation = useElementsThatStopKeyboardEventsPropagation;
function useSyncedKeyboardEvents(envelopeApi, element) {
  if (element === void 0) {
    element = window;
  }
  (0, react_1.useEffect)(
    function () {
      var listener = function (keyboardEvent) {
        var channelKeyboardEvent = getChannelKeyboardEvent(keyboardEvent);
        console.debug("New keyboard event (".concat(JSON.stringify(channelKeyboardEvent), ")!"));
        envelopeApi.notifications.kogitoKeyboardShortcuts_channelKeyboardEvent.send(channelKeyboardEvent);
      };
      element.addEventListener("keydown", listener);
      element.addEventListener("keyup", listener);
      element.addEventListener("keypress", listener);
      return function () {
        element.removeEventListener("keydown", listener);
        element.removeEventListener("keyup", listener);
        element.removeEventListener("keypress", listener);
      };
    },
    [envelopeApi, element]
  );
}
exports.useSyncedKeyboardEvents = useSyncedKeyboardEvents;
//# sourceMappingURL=Hooks.js.map
