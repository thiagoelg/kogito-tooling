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
exports.TodoListViewPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var embedded_1 = require("@kie-tools-examples/todo-list-view/dist/embedded");
var hooks_1 = require("@kie-tools-core/envelope-bus/dist/hooks");
function TodoListViewPage() {
  var _a, _b;
  var embeddedTodoListRef = (0, react_1.useRef)(null);
  var _c = __read((0, react_1.useState)(""), 2),
    newItem = _c[0],
    setNewItem = _c[1];
  var addItem = (0, react_1.useCallback)(
    function (e) {
      var _a;
      e.preventDefault();
      if (newItem.length > 0) {
        (_a = embeddedTodoListRef.current) === null || _a === void 0 ? void 0 : _a.addItem(newItem);
        setNewItem("");
      }
    },
    [newItem]
  );
  var handleItemRemoved = (0, react_1.useCallback)(function (item) {
    window.alert("Item '".concat(item, "' removed successfully!"));
  }, []);
  (0, hooks_1.useStateAsSharedValue)(
    newItem,
    setNewItem,
    (_a = embeddedTodoListRef.current) === null || _a === void 0
      ? void 0
      : _a.envelopeServer.shared.todoList__potentialNewItem
  );
  var apiImpl = (0, react_1.useMemo)(
    function () {
      return {
        todoList__itemRemoved: handleItemRemoved,
        todoList__potentialNewItem: function () {
          return { defaultValue: "" };
        },
      };
    },
    [handleItemRemoved]
  );
  return (0, jsx_runtime_1.jsx)(
    react_core_1.Page,
    {
      children: (0, jsx_runtime_1.jsxs)(
        "div",
        __assign(
          { className: "webapp--page-main-div" },
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                "div",
                {
                  children: (0, jsx_runtime_1.jsxs)(
                    react_core_1.Nav,
                    __assign(
                      { className: "webapp--page-navigation" },
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            "div",
                            __assign(
                              { className: "webapp--page-navigation-title-div" },
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  react_core_1.Title,
                                  __assign(
                                    { className: "webapp--page-navigation-title-h3", headingLevel: "h3", size: "xl" },
                                    { children: "Actions" }
                                  ),
                                  void 0
                                ),
                              }
                            ),
                            void 0
                          ),
                          (0, jsx_runtime_1.jsxs)(
                            react_core_1.NavList,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  react_core_1.NavItem,
                                  __assign(
                                    {
                                      onClick:
                                        (_b = embeddedTodoListRef.current) === null || _b === void 0
                                          ? void 0
                                          : _b.markAllAsCompleted,
                                    },
                                    { children: "Mark all as completed" }
                                  ),
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  react_core_1.NavItem,
                                  {
                                    children: (0, jsx_runtime_1.jsxs)(
                                      "form",
                                      __assign(
                                        { onSubmit: addItem },
                                        {
                                          children: [
                                            (0, jsx_runtime_1.jsx)(
                                              "input",
                                              {
                                                type: "text",
                                                value: newItem,
                                                onChange: function (e) {
                                                  return setNewItem(e.target.value);
                                                },
                                                placeholder: "New item",
                                              },
                                              void 0
                                            ),
                                            (0, jsx_runtime_1.jsx)("button", { children: "Add" }, void 0),
                                          ],
                                        }
                                      ),
                                      void 0
                                    ),
                                  },
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
                },
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                react_core_1.PageSection,
                {
                  children: (0, jsx_runtime_1.jsx)(
                    embedded_1.EmbeddedTodoList,
                    {
                      ref: embeddedTodoListRef,
                      targetOrigin: window.location.origin,
                      envelopePath: "envelope/todo-list-view.html",
                      apiImpl: apiImpl,
                    },
                    void 0
                  ),
                },
                void 0
              ),
            ],
          }
        ),
        void 0
      ),
    },
    void 0
  );
}
exports.TodoListViewPage = TodoListViewPage;
//# sourceMappingURL=TodoListViewPage.js.map
