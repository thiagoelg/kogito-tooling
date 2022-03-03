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
exports.useCancelableEffect = exports.Holder = exports.useController = exports.usePrevious = void 0;
var react_1 = require("react");
function usePrevious(value) {
  var ref = (0, react_1.useRef)();
  (0, react_1.useEffect)(
    function () {
      if (ref.current !== value) {
        ref.current = value;
      }
    },
    [value]
  );
  return ref.current;
}
exports.usePrevious = usePrevious;
function useController() {
  var _a = __read((0, react_1.useState)(undefined), 2),
    controller = _a[0],
    setController = _a[1];
  var ref = (0, react_1.useCallback)(function (controller) {
    setController(controller);
  }, []);
  return [controller, ref];
}
exports.useController = useController;
var Holder = (function () {
  function Holder(value) {
    var _this = this;
    this.value = value;
    this.get = function () {
      return _this.value;
    };
    this.set = function (newValue) {
      return (_this.value = newValue);
    };
  }
  return Holder;
})();
exports.Holder = Holder;
function useCancelableEffect(effect) {
  (0, react_1.useEffect)(
    function () {
      var canceled = new Holder(false);
      var effectCleanup = effect({ canceled: canceled });
      return function () {
        canceled.set(true);
        if (effectCleanup) {
          effectCleanup();
        }
      };
    },
    [effect]
  );
}
exports.useCancelableEffect = useCancelableEffect;
//# sourceMappingURL=Hooks.js.map
