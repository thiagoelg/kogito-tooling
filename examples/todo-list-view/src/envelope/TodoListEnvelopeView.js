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
exports.TodoListEnvelopeView = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
require("./styles.scss");
var hooks_1 = require("@kie-tools-core/envelope-bus/dist/hooks");
exports.TodoListEnvelopeView = React.forwardRef(function (props, forwardedRef) {
  var _a = __read((0, react_1.useState)(), 2),
    user = _a[0],
    setUser = _a[1];
  var _b = __read((0, react_1.useState)([]), 2),
    items = _b[0],
    setItems = _b[1];
  var removeItem = (0, react_1.useCallback)(
    function (e, item) {
      e.preventDefault();
      var itemsCopy = __spreadArray([], __read(items), false);
      var i = itemsCopy.indexOf(item);
      if (i >= 0) {
        itemsCopy.splice(i, 1);
        setItems(itemsCopy);
        props.channelApi.notifications.todoList__itemRemoved.send(item.label);
      }
    },
    [items, props.channelApi]
  );
  var updateItemCompletedStatus = (0, react_1.useCallback)(
    function (e, item, completed) {
      e.preventDefault();
      var itemsCopy = __spreadArray([], __read(items), false);
      var i = itemsCopy.indexOf(item);
      if (i >= 0) {
        itemsCopy[i].completed = completed;
        setItems(itemsCopy);
      }
    },
    [items]
  );
  var allCompleted = (0, react_1.useMemo)(
    function () {
      var completedItems = items.filter(function (i) {
        return i.completed;
      });
      return items.length > 0 && completedItems.length === items.length;
    },
    [items]
  );
  (0, react_1.useImperativeHandle)(
    forwardedRef,
    function () {
      return {
        setUser: setUser,
        addItem: function (item) {
          return setItems(
            __spreadArray(__spreadArray([], __read(items), false), [{ label: item, completed: false }], false)
          );
        },
        getItems: function () {
          return items;
        },
        markAllAsCompleted: function () {
          return setItems(
            items.map(function (item) {
              return __assign(__assign({}, item), { completed: true });
            })
          );
        },
      };
    },
    [items]
  );
  var _c = __read((0, hooks_1.useSharedValue)(props.channelApi.shared.todoList__potentialNewItem), 2),
    potentialNewItem = _c[0],
    _ = _c[1];
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children:
        user &&
        (0, jsx_runtime_1.jsxs)(
          jsx_runtime_1.Fragment,
          {
            children: [
              (0, jsx_runtime_1.jsxs)(
                "p",
                { children: ["Welcome, ", (0, jsx_runtime_1.jsx)("b", { children: user }, void 0), "!"] },
                void 0
              ),
              (0, jsx_runtime_1.jsx)("hr", {}, void 0),
              (0, jsx_runtime_1.jsx)("h2", { children: "Here's your 'To do' list:" }, void 0),
              (items.length <= 0 &&
                !potentialNewItem &&
                (0, jsx_runtime_1.jsx)(
                  jsx_runtime_1.Fragment,
                  { children: (0, jsx_runtime_1.jsx)("p", { children: "Nothing to do \uD83D\uDE0E" }, void 0) },
                  void 0
                )) ||
                (0, jsx_runtime_1.jsxs)(
                  "ol",
                  {
                    children: [
                      items.map(function (item) {
                        return (0, jsx_runtime_1.jsxs)(
                          "li",
                          __assign(
                            { className: "todo-list--list-items" },
                            {
                              children: [
                                (item.completed &&
                                  (0, jsx_runtime_1.jsx)(
                                    jsx_runtime_1.Fragment,
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        "span",
                                        __assign(
                                          { className: "todo-list--list-item-completed" },
                                          { children: item.label }
                                        ),
                                        void 0
                                      ),
                                    },
                                    void 0
                                  )) ||
                                  (0, jsx_runtime_1.jsx)(
                                    jsx_runtime_1.Fragment,
                                    { children: (0, jsx_runtime_1.jsx)("span", { children: item.label }, void 0) },
                                    void 0
                                  ),
                                (0, jsx_runtime_1.jsx)("span", { children: " - " }, void 0),
                                (!item.completed &&
                                  (0, jsx_runtime_1.jsx)(
                                    "a",
                                    __assign(
                                      {
                                        href: "#",
                                        onClick: function (e) {
                                          return updateItemCompletedStatus(e, item, true);
                                        },
                                      },
                                      { children: "Mark as completed" }
                                    ),
                                    void 0
                                  )) ||
                                  (0, jsx_runtime_1.jsx)(
                                    "a",
                                    __assign(
                                      {
                                        href: "#",
                                        onClick: function (e) {
                                          return updateItemCompletedStatus(e, item, false);
                                        },
                                      },
                                      { children: "Unmark as completed" }
                                    ),
                                    void 0
                                  ),
                                (0, jsx_runtime_1.jsx)("span", { children: " / " }, void 0),
                                (0, jsx_runtime_1.jsx)(
                                  "a",
                                  __assign(
                                    {
                                      href: "#",
                                      onClick: function (e) {
                                        return removeItem(e, item);
                                      },
                                    },
                                    { children: "Remove" }
                                  ),
                                  void 0
                                ),
                              ],
                            }
                          ),
                          item.label
                        );
                      }),
                      potentialNewItem &&
                        (0, jsx_runtime_1.jsx)(
                          "li",
                          __assign(
                            { className: "todo-list--list-items", style: { color: "gray" } },
                            { children: (0, jsx_runtime_1.jsx)("i", { children: potentialNewItem }, void 0) }
                          ),
                          "potential-new-item"
                        ),
                    ],
                  },
                  void 0
                ),
              allCompleted &&
                (0, jsx_runtime_1.jsxs)(
                  jsx_runtime_1.Fragment,
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)("hr", {}, void 0),
                      (0, jsx_runtime_1.jsxs)(
                        "div",
                        {
                          children: [
                            (0, jsx_runtime_1.jsx)("b", { children: "Congratulations!" }, void 0),
                            "\u00A0",
                            "You've completed all your items! \uD83C\uDF89",
                          ],
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0
                ),
            ],
          },
          void 0
        ),
    },
    void 0
  );
});
//# sourceMappingURL=TodoListEnvelopeView.js.map
