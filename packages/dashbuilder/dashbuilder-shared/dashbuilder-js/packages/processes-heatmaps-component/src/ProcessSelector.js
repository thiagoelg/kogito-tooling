"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
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
exports.ProcessSelector = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
function ProcessSelector(props) {
  var _a, _b, _c, _d, _e;
  var containerSelectRef = (0, react_1.createRef)();
  var titleRef = (0, react_1.createRef)();
  var bodyRef = (0, react_1.createRef)();
  var processSelectRef = (0, react_1.createRef)();
  var _f = __read((0, react_1.useState)(), 2),
    selectedValue = _f[0],
    setSelectedValue = _f[1];
  var onTitleClicked = (0, react_1.useCallback)(
    function (e) {
      var _a;
      (_a = titleRef.current) === null || _a === void 0 ? void 0 : _a.classList.toggle("active");
      var bodyRefEl = bodyRef.current;
      if (bodyRefEl) {
        var bodyHidden = bodyRefEl.style.display === "none";
        bodyRefEl.style.display = bodyHidden ? "block" : "none";
      }
    },
    [titleRef, bodyRef]
  );
  var onContainerSelected = (0, react_1.useCallback)(
    function (e) {
      var _a;
      var containerName = (_a = containerSelectRef.current) === null || _a === void 0 ? void 0 : _a.value;
      var selectedContainer = props.containers.filter(function (c) {
        return c.id === containerName;
      })[0];
      props.onContainerProcessSelected(selectedContainer.id, selectedContainer.processes[0]);
      setSelectedValue({ container: selectedContainer, process: selectedContainer.processes[0] });
    },
    [selectedValue, containerSelectRef.current]
  );
  var onProcessSelected = (0, react_1.useCallback)(
    function (e) {
      var _a;
      return props.onContainerProcessSelected(
        selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.container.id,
        (_a = processSelectRef.current) === null || _a === void 0 ? void 0 : _a.value
      );
    },
    [selectedValue, processSelectRef.current]
  );
  (0, react_1.useEffect)(
    function () {
      var containers = props.containers;
      if ((containers === null || containers === void 0 ? void 0 : containers.length) > 0) {
        var selectedContainer = props.selectedContainer
          ? containers.filter(function (c) {
              return c.id === props.selectedContainer;
            })[0]
          : containers[0];
        setSelectedValue({
          container: selectedContainer,
          process: props.selectedProcess
            ? selectedContainer.processes.filter(function (p) {
                return p === props.selectedProcess;
              })[0]
            : selectedContainer.processes[0],
        });
      }
    },
    [props.containers]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { className: "processSelectorContainer" },
      {
        children: (0, jsx_runtime_1.jsxs)(
          "div",
          __assign(
            { className: "container" },
            {
              children: [
                (0, jsx_runtime_1.jsx)(
                  "h5",
                  __assign(
                    { className: "cardTitle collapsible", onClick: onTitleClicked, ref: titleRef },
                    { children: (0, jsx_runtime_1.jsx)("b", { children: "Process Selector" }, void 0) }
                  ),
                  void 0
                ),
                (0, jsx_runtime_1.jsxs)(
                  "div",
                  __assign(
                    { className: "cardBody", ref: bodyRef },
                    {
                      children: [
                        props.containers &&
                          props.containers.length > 0 &&
                          (0, jsx_runtime_1.jsxs)(
                            "fieldset",
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)("legend", { children: "Container" }, void 0),
                                (0, jsx_runtime_1.jsx)(
                                  "select",
                                  __assign(
                                    {
                                      className: "containerSelector",
                                      onChange: onContainerSelected,
                                      ref: containerSelectRef,
                                      defaultValue:
                                        props.selectedContainer ||
                                        ((_a = props.containers[0]) === null || _a === void 0 ? void 0 : _a.id),
                                    },
                                    {
                                      children: props.containers.map(function (c) {
                                        return (0,
                                        jsx_runtime_1.jsx)("option", __assign({ value: c.id }, { children: c.id }), c.id);
                                      }),
                                    }
                                  ),
                                  void 0
                                ),
                              ],
                            },
                            void 0
                          ),
                        ((_c =
                          (_b =
                            selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.container) ===
                            null || _b === void 0
                            ? void 0
                            : _b.processes) === null || _c === void 0
                          ? void 0
                          : _c.length) > 0 &&
                          (0, jsx_runtime_1.jsxs)(
                            "fieldset",
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)("legend", { children: "Process" }, void 0),
                                (0, jsx_runtime_1.jsx)(
                                  "select",
                                  __assign(
                                    {
                                      onChange: onProcessSelected,
                                      ref: processSelectRef,
                                      defaultValue:
                                        props.selectedProcess ||
                                        ((_d =
                                          selectedValue === null || selectedValue === void 0
                                            ? void 0
                                            : selectedValue.container) === null || _d === void 0
                                          ? void 0
                                          : _d.processes[0]),
                                    },
                                    {
                                      children:
                                        (_e =
                                          selectedValue === null || selectedValue === void 0
                                            ? void 0
                                            : selectedValue.container) === null || _e === void 0
                                          ? void 0
                                          : _e.processes.map(function (p) {
                                              return (0,
                                              jsx_runtime_1.jsx)("option", __assign({ value: p }, { children: p }), p);
                                            }),
                                    }
                                  ),
                                  void 0
                                ),
                              ],
                            },
                            void 0
                          ),
                      ],
                    }
                  ),
                  void 0
                ),
              ],
            }
          ),
          void 0
        ),
      }
    ),
    void 0
  );
}
exports.ProcessSelector = ProcessSelector;
//# sourceMappingURL=ProcessSelector.js.map
