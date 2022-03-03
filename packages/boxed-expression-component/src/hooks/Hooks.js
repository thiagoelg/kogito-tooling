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
exports.useContextMenuHandler = void 0;
var react_1 = require("react");
function useContextMenuHandler(domEventTarget) {
  if (domEventTarget === void 0) {
    domEventTarget = document;
  }
  var wrapperRef = (0, react_1.useRef)(null);
  var _a = __read((0, react_1.useState)("0px"), 2),
    xPos = _a[0],
    setXPos = _a[1];
  var _b = __read((0, react_1.useState)("0px"), 2),
    yPos = _b[0],
    setYPos = _b[1];
  var _c = __read((0, react_1.useState)(false), 2),
    contextMenuVisible = _c[0],
    setContextMenuVisible = _c[1];
  var eventTarget = (0, react_1.useRef)();
  var hideContextMenu = (0, react_1.useCallback)(
    function () {
      contextMenuVisible && setContextMenuVisible(false);
    },
    [contextMenuVisible]
  );
  var showContextMenu = (0, react_1.useCallback)(
    function (event) {
      if (wrapperRef.current && wrapperRef.current === event.target) {
        event.preventDefault();
        eventTarget.current = event.target;
        setXPos("".concat(event.pageX, "px"));
        setYPos("".concat(event.pageY, "px"));
        setContextMenuVisible(true);
      }
    },
    [setXPos, setYPos]
  );
  (0, react_1.useEffect)(function () {
    document.addEventListener("click", hideContextMenu);
    domEventTarget.addEventListener("contextmenu", hideContextMenu);
    domEventTarget.addEventListener("contextmenu", showContextMenu);
    return function () {
      document.removeEventListener("click", hideContextMenu);
      domEventTarget.removeEventListener("contextmenu", hideContextMenu);
      domEventTarget.removeEventListener("contextmenu", showContextMenu);
    };
  });
  return {
    contextMenuRef: wrapperRef,
    contextMenuXPos: xPos,
    contextMenuYPos: yPos,
    contextMenuVisibility: contextMenuVisible,
    setContextMenuVisibility: setContextMenuVisible,
    targetElement: eventTarget.current,
  };
}
exports.useContextMenuHandler = useContextMenuHandler;
//# sourceMappingURL=Hooks.js.map
