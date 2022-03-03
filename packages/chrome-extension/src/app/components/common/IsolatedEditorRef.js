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
exports.useIsolatedEditorRef = void 0;
var react_1 = require("react");
function useIsolatedEditorRef() {
  var _a = __read((0, react_1.useState)(), 2),
    isolatedEditor = _a[0],
    setIsolatedEditor = _a[1];
  var isolatedEditorRef = (0, react_1.useCallback)(function (node) {
    if (node) {
      setIsolatedEditor(node);
    }
  }, []);
  return { isolatedEditor: isolatedEditor, isolatedEditorRef: isolatedEditorRef };
}
exports.useIsolatedEditorRef = useIsolatedEditorRef;
//# sourceMappingURL=IsolatedEditorRef.js.map
