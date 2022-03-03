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
exports.HomePage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Brand_1 = require("@patternfly/react-core/dist/js/components/Brand");
var Nav_1 = require("@patternfly/react-core/dist/js/components/Nav");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var FilesPage_1 = require("./FilesPage");
var LearnMorePage_1 = require("./LearnMorePage");
var i18n_1 = require("../common/i18n");
var NavItems;
(function (NavItems) {
  NavItems[(NavItems["FILES"] = 0)] = "FILES";
  NavItems[(NavItems["LEARN_MORE"] = 1)] = "LEARN_MORE";
})(NavItems || (NavItems = {}));
var NavState;
(function (NavState) {
  NavState[(NavState["MANUAL_OPEN"] = 0)] = "MANUAL_OPEN";
  NavState[(NavState["MANUAL_CLOSE"] = 1)] = "MANUAL_CLOSE";
  NavState[(NavState["RESIZED_OPEN"] = 2)] = "RESIZED_OPEN";
  NavState[(NavState["RESIZED_CLOSE"] = 3)] = "RESIZED_CLOSE";
})(NavState || (NavState = {}));
function HomePage(props) {
  var _a = __read((0, react_1.useState)(NavItems.FILES), 2),
    activeNavItem = _a[0],
    setActiveNavItem = _a[1];
  var _b = __read((0, react_1.useState)(NavState.RESIZED_OPEN), 2),
    navState = _b[0],
    setNavState = _b[1];
  var i18n = (0, i18n_1.useDesktopI18n)().i18n;
  var onNavSelect = (0, react_1.useCallback)(function (selectedItem) {
    setActiveNavItem(selectedItem.itemId);
  }, []);
  var onPageResize = (0, react_1.useCallback)(
    function (_a) {
      var mobileView = _a.mobileView;
      if (mobileView && navState !== NavState.MANUAL_OPEN && navState !== NavState.MANUAL_CLOSE) {
        setNavState(NavState.RESIZED_CLOSE);
      } else if (!mobileView && navState !== NavState.MANUAL_CLOSE && navState !== NavState.MANUAL_OPEN) {
        setNavState(NavState.RESIZED_OPEN);
      }
    },
    [navState]
  );
  var onNavToggle = (0, react_1.useCallback)(
    function () {
      switch (navState) {
        case NavState.RESIZED_CLOSE:
          setNavState(NavState.MANUAL_OPEN);
          break;
        case NavState.RESIZED_OPEN:
          setNavState(NavState.MANUAL_CLOSE);
          break;
        case NavState.MANUAL_CLOSE:
          setNavState(NavState.RESIZED_OPEN);
          break;
        case NavState.MANUAL_OPEN:
          setNavState(NavState.RESIZED_CLOSE);
          break;
      }
    },
    [navState]
  );
  var isNavOpen = (0, react_1.useMemo)(
    function () {
      return navState === NavState.RESIZED_OPEN || navState === NavState.MANUAL_OPEN;
    },
    [navState]
  );
  var header = (0, jsx_runtime_1.jsx)(
    Page_1.PageHeader,
    {
      showNavToggle: true,
      onNavToggle: onNavToggle,
      logo: (0, jsx_runtime_1.jsx)(
        Brand_1.Brand,
        { src: "images/BusinessModeler_Logo.svg", alt: "Business Modeler Logo" },
        void 0
      ),
    },
    void 0
  );
  var navigation = (0, jsx_runtime_1.jsx)(
    Nav_1.Nav,
    __assign(
      { onSelect: onNavSelect, theme: "dark", ouiaId: "nav-buttons" },
      {
        children: (0, jsx_runtime_1.jsxs)(
          Nav_1.NavList,
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                Nav_1.NavItem,
                __assign(
                  { itemId: NavItems.FILES, isActive: activeNavItem === NavItems.FILES, ouiaId: "files-nav" },
                  { children: i18n.terms.files }
                ),
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                Nav_1.NavItem,
                __assign(
                  {
                    itemId: NavItems.LEARN_MORE,
                    isActive: activeNavItem === NavItems.LEARN_MORE,
                    ouiaId: "learn-more-nav",
                  },
                  { children: i18n.homePage.learnMore }
                ),
                void 0
              ),
            ],
          },
          void 0
        ),
      }
    ),
    void 0
  );
  var sidebar = (0, jsx_runtime_1.jsx)(
    Page_1.PageSidebar,
    { nav: navigation, isNavOpen: isNavOpen, theme: "dark" },
    void 0
  );
  return (0, jsx_runtime_1.jsxs)(
    Page_1.Page,
    __assign(
      { header: header, sidebar: sidebar, className: "kogito--editor-landing", onPageResize: onPageResize },
      {
        children: [
          activeNavItem === NavItems.FILES &&
            (0, jsx_runtime_1.jsx)(
              FilesPage_1.FilesPage,
              { openFile: props.openFile, openFileByPath: props.openFileByPath },
              void 0
            ),
          activeNavItem === NavItems.LEARN_MORE && (0, jsx_runtime_1.jsx)(LearnMorePage_1.LearnMorePage, {}, void 0),
        ],
      }
    ),
    void 0
  );
}
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map
