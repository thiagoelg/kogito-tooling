"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInitialAsyncCallEffect =
  exports.useIsolatedEditorTogglingEffect =
  exports.useEffectAfterFirstRender =
    void 0;
var react_1 = require("react");
function useEffectAfterFirstRender(func, deps) {
  var firstRender = (0, react_1.useRef)(true);
  (0, react_1.useEffect)(function () {
    if (!firstRender.current) {
      func();
    } else {
      firstRender.current = false;
    }
  }, deps);
}
exports.useEffectAfterFirstRender = useEffectAfterFirstRender;
function useIsolatedEditorTogglingEffect(textMode, iframeContainer, githubTextEditorToReplace) {
  (0, react_1.useLayoutEffect)(
    function () {
      if (textMode) {
        githubTextEditorToReplace.classList.remove("hidden");
        iframeContainer.classList.add("hidden");
      } else {
        githubTextEditorToReplace.classList.add("hidden");
        iframeContainer.classList.remove("hidden");
      }
    },
    [textMode]
  );
}
exports.useIsolatedEditorTogglingEffect = useIsolatedEditorTogglingEffect;
function useInitialAsyncCallEffect(promise, callback) {
  (0, react_1.useEffect)(function () {
    var canceled = false;
    promise().then(function (arg) {
      if (canceled) {
        return;
      }
      callback(arg);
    });
    return function () {
      canceled = true;
    };
  }, []);
}
exports.useInitialAsyncCallEffect = useInitialAsyncCallEffect;
//# sourceMappingURL=customEffects.js.map
