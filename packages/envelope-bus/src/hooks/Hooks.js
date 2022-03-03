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
exports.useStateAsSharedValue =
  exports.useSharedValue =
  exports.useSubscriptionOnce =
  exports.useSubscription =
  exports.useConnectedEnvelopeServer =
    void 0;
var react_1 = require("react");
function useConnectedEnvelopeServer(envelopeServer, apiImpl) {
  (0, react_1.useEffect)(
    function () {
      var listener = function (msg) {
        return envelopeServer.receive(msg.data, apiImpl);
      };
      window.addEventListener("message", listener, false);
      envelopeServer.startInitPolling(apiImpl);
      return function () {
        envelopeServer.stopInitPolling();
        window.removeEventListener("message", listener);
      };
    },
    [envelopeServer, apiImpl]
  );
}
exports.useConnectedEnvelopeServer = useConnectedEnvelopeServer;
function useSubscription(notificationConsumer, callback) {
  (0, react_1.useEffect)(
    function () {
      var subscription = notificationConsumer.subscribe(callback);
      return function () {
        notificationConsumer.unsubscribe(subscription);
      };
    },
    [notificationConsumer, callback]
  );
}
exports.useSubscription = useSubscription;
function useSubscriptionOnce(notificationConsumer, callback) {
  (0, react_1.useEffect)(
    function () {
      var unsubscribed = false;
      var subscription = notificationConsumer.subscribe(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        callback.apply(void 0, __spreadArray([], __read(args), false));
        unsubscribed = true;
        notificationConsumer.unsubscribe(subscription);
      });
      return function () {
        if (!unsubscribed) {
          notificationConsumer.unsubscribe(subscription);
        }
      };
    },
    [callback, notificationConsumer]
  );
}
exports.useSubscriptionOnce = useSubscriptionOnce;
function useSharedValue(sharedValue) {
  var _a = __read((0, react_1.useState)(), 2),
    value = _a[0],
    setValue = _a[1];
  (0, react_1.useEffect)(
    function () {
      if (!sharedValue) {
        return;
      }
      var subscription = sharedValue.subscribe(function (newValue) {
        return setValue(newValue);
      });
      return function () {
        return sharedValue.unsubscribe(subscription);
      };
    },
    [sharedValue]
  );
  var sharedValueRef = (0, react_1.useRef)(sharedValue);
  var ret__setValue = (0, react_1.useCallback)(function (t) {
    var _a;
    (_a = sharedValueRef.current) === null || _a === void 0 ? void 0 : _a.set(t);
  }, []);
  (0, react_1.useEffect)(
    function () {
      sharedValueRef.current = sharedValue;
    },
    [sharedValue]
  );
  return [value, ret__setValue];
}
exports.useSharedValue = useSharedValue;
function useStateAsSharedValue(value, setValue, sharedValue) {
  (0, react_1.useEffect)(
    function () {
      if (!sharedValue) {
        return;
      }
      var subscription = sharedValue.subscribe(function (newValue) {
        return setValue(newValue);
      });
      return function () {
        return sharedValue.unsubscribe(subscription);
      };
    },
    [sharedValue, setValue]
  );
  (0, react_1.useEffect)(
    function () {
      sharedValue === null || sharedValue === void 0 ? void 0 : sharedValue.set(value);
    },
    [sharedValue, value]
  );
}
exports.useStateAsSharedValue = useStateAsSharedValue;
//# sourceMappingURL=Hooks.js.map
