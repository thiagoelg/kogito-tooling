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
exports.ServerlessWorkflowMenuApp = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ReactDOM = require("react-dom");
var constants_1 = require("../../constants");
var GlobalContext_1 = require("../common/GlobalContext");
var ServerlessWorkflowManagementPage_1 = require("./ServerlessWorkflowManagementPage");
function ServerlessWorkflowMenuApp(props) {
  var globals = (0, GlobalContext_1.useGlobals)();
  var _a = __read((0, react_1.useState)(false), 2),
    menuLoaded = _a[0],
    setMenuLoaded = _a[1];
  var _b = __read((0, react_1.useState)(null), 2),
    container = _b[0],
    setContainer = _b[1];
  var _c = __read((0, react_1.useState)(false), 2),
    showPage = _c[0],
    setShowPage = _c[1];
  (0, react_1.useEffect)(
    function () {
      if (menuLoaded) {
        return;
      }
      var menuLoadedTask = window.setInterval(function () {
        setMenuLoaded(
          !!Array.from(document.querySelectorAll("div")).find(function (el) {
            return el.textContent === "Application Services";
          })
        );
      }, 500);
      return function () {
        return window.clearInterval(menuLoadedTask);
      };
    },
    [menuLoaded]
  );
  (0, react_1.useEffect)(
    function () {
      if (container || !menuLoaded) {
        return;
      }
      var resolveContainerTask = window.setInterval(function () {
        setContainer(globals.dependencies.applicationServices.menu());
      }, 500);
      return function () {
        return window.clearInterval(resolveContainerTask);
      };
    },
    [container, globals.dependencies.applicationServices, menuLoaded]
  );
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        container &&
          ReactDOM.createPortal(
            (0, jsx_runtime_1.jsx)(
              ServerlessWorkflowMenuItem,
              {
                openPage: function () {
                  return setShowPage(true);
                },
              },
              void 0
            ),
            createMenuItemContainer(props.id, globals.dependencies.applicationServices.menu())
          ),
        showPage &&
          ReactDOM.createPortal(
            (0, jsx_runtime_1.jsx)(ServerlessWorkflowManagementPage_1.ServerlessWorkflowManagementPage, {}, void 0),
            createPageContainer(
              props.id,
              globals.dependencies.applicationServices.main(),
              globals.dependencies.applicationServices.page()
            )
          ),
      ],
    },
    void 0
  );
}
exports.ServerlessWorkflowMenuApp = ServerlessWorkflowMenuApp;
function ServerlessWorkflowMenuItem(props) {
  return (0, jsx_runtime_1.jsx)(
    "li",
    __assign(
      { className: "pf-c-nav__item" },
      {
        children: (0, jsx_runtime_1.jsx)(
          "a",
          __assign({ className: "pf-c-nav__link", onClick: props.openPage }, { children: "Serverless Workflow" }),
          void 0
        ),
      }
    ),
    void 0
  );
}
function createMenuItemContainer(id, container) {
  var element = function () {
    return document.querySelector(".".concat(constants_1.SWF_MENU_ITEM_CONTAINER_CLASS, ".").concat(id));
  };
  if (!element()) {
    container.insertAdjacentHTML(
      "beforeend",
      '<div class="'.concat(constants_1.SWF_MENU_ITEM_CONTAINER_CLASS, " ").concat(id, '"></div>')
    );
  }
  return element();
}
function createPageContainer(id, container, currentPage) {
  var element = function () {
    return document.querySelector(".".concat(constants_1.SWF_PAGE_CONTAINER_CLASS, ".").concat(id));
  };
  if (!element()) {
    currentPage.style.display = "none";
    container.insertAdjacentHTML(
      "beforeend",
      '<div class="'.concat(constants_1.SWF_PAGE_CONTAINER_CLASS, " ").concat(id, '"></div>')
    );
  }
  return element();
}
//# sourceMappingURL=ServerlessWorkflowMenuApp.js.map
