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
exports.DmnFormToolbar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var Brand_1 = require("@patternfly/react-core/dist/js/components/Brand");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var ellipsis_v_icon_1 = require("@patternfly/react-icons/dist/js/icons/ellipsis-v-icon");
var external_link_alt_icon_1 = require("@patternfly/react-icons/dist/js/icons/external-link-alt-icon");
var help_icon_1 = require("@patternfly/react-icons/dist/js/icons/help-icon");
var path_1 = require("path");
var React = require("react");
var react_1 = require("react");
var react_router_1 = require("react-router");
var AppContext_1 = require("./AppContext");
var i18n_1 = require("./i18n");
var Routes_1 = require("./Routes");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
function DmnFormToolbar(props) {
  var app = (0, AppContext_1.useApp)();
  var history = (0, react_router_1.useHistory)();
  var i18n = (0, i18n_1.useDmnFormI18n)().i18n;
  var _a = __read((0, react_1.useState)(false), 2),
    isLgKebabOpen = _a[0],
    setLgKebabOpen = _a[1];
  var _b = __read((0, react_1.useState)(false), 2),
    isSmKebabOpen = _b[0],
    setSmKebabOpen = _b[1];
  var _c = __read((0, react_1.useState)(false), 2),
    modelDropdownOpen = _c[0],
    setModelDropdownOpen = _c[1];
  var onOpenSwaggerUI = (0, react_1.useCallback)(function () {
    window.open(Routes_1.routes.swaggerUi.path({}), "_blank");
  }, []);
  var openForm = (0, react_1.useCallback)(
    function (uri) {
      history.push({
        pathname: Routes_1.routes.form.path({ filePath: uri.slice(1) }),
      });
    },
    [history]
  );
  var filename = (0, react_1.useMemo)(
    function () {
      var fullFilename = (0, path_1.basename)(props.uri);
      var maxSize = 25;
      var extension = fullFilename.substring(fullFilename.lastIndexOf(".") + 1);
      var name = fullFilename.replace(".".concat(extension), "");
      if (name.length < maxSize) {
        return fullFilename;
      }
      return "".concat(name.substring(0, maxSize), "... .").concat(extension);
    },
    [props.uri]
  );
  var disclaimer = (0, react_1.useMemo)(
    function () {
      return (0, jsx_runtime_1.jsx)(
        Tooltip_1.Tooltip,
        __assign(
          {
            className: "kogito--dmn-form__toolbar-tooltip",
            maxWidth: "250px",
            content: (0, jsx_runtime_1.jsx)(
              react_components_1.I18nHtml,
              { children: i18n.formToolbar.disclaimer.description },
              void 0
            ),
          },
          {
            children: (0, jsx_runtime_1.jsxs)(
              Text_1.Text,
              __assign(
                { className: "kogito--dmn-form__toolbar-title" },
                {
                  children: [
                    i18n.formToolbar.disclaimer.title,
                    (0, jsx_runtime_1.jsx)(help_icon_1.default, { className: "pf-u-ml-sm" }, void 0),
                  ],
                }
              ),
              void 0
            ),
          }
        ),
        "disclaimer-tooltip"
      );
    },
    [i18n]
  );
  var modelDropdownItems = (0, react_1.useMemo)(
    function () {
      if (!app.data) {
        return [];
      }
      return app.data.forms
        .map(function (form) {
          return form.uri;
        })
        .filter(function (uri) {
          return uri !== props.uri;
        })
        .sort(function (a, b) {
          return a.localeCompare(b);
        })
        .map(function (uri, idx) {
          return (0, jsx_runtime_1.jsx)(
            Dropdown_1.DropdownItem,
            __assign(
              {
                id: "dmn-form-toolbar-model-dropdown-item-".concat(idx),
                component: "button",
                onClick: function () {
                  return openForm(uri);
                },
              },
              { children: (0, path_1.basename)(uri) }
            ),
            "dmn-form-toolbar-model-dropdown-item-".concat(idx)
          );
        });
    },
    [app.data, openForm, props.uri]
  );
  var dropdownItems = (0, react_1.useCallback)(
    function (dropdownId) {
      return [
        (0, jsx_runtime_1.jsx)(
          React.Fragment,
          {
            children: (0, jsx_runtime_1.jsx)(
              Dropdown_1.DropdownItem,
              __assign(
                {
                  id: "dmn-dev-sandbox-form-toolbar-kebab-open-swagger-ui-button",
                  component: "button",
                  onClick: onOpenSwaggerUI,
                  "aria-label": "Swagger UI",
                  "data-testid": "open-swagger-ui-button",
                  ouiaId: "open-swagger-ui-button",
                },
                {
                  children: (0, jsx_runtime_1.jsxs)(
                    Text_1.Text,
                    __assign(
                      { component: Text_1.TextVariants.a, className: "kogito--dmn-form__toolbar a" },
                      {
                        children: [
                          i18n.names.swaggerUI,
                          (0, jsx_runtime_1.jsx)(
                            external_link_alt_icon_1.ExternalLinkAltIcon,
                            { className: "pf-u-mx-sm" },
                            void 0
                          ),
                        ],
                      }
                    ),
                    void 0
                  ),
                }
              ),
              "dropdown-".concat(dropdownId, "-swagger-ui")
            ),
          },
          "dropdown-".concat(dropdownId, "-close")
        ),
      ];
    },
    [onOpenSwaggerUI, i18n]
  );
  return (0, jsx_runtime_1.jsx)(
    Page_1.PageHeader,
    {
      logo: (0, jsx_runtime_1.jsxs)(
        Flex_1.Flex,
        __assign(
          { alignItems: { default: "alignItemsCenter" } },
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                Flex_1.FlexItem,
                __assign(
                  { style: { display: "flex", alignItems: "center" } },
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      Brand_1.Brand,
                      {
                        src: Routes_1.routes.static.images.kieHorizontalLogoReverse.path({}),
                        alt: "Logo",
                        style: { display: "inline", height: "38px" },
                      },
                      void 0
                    ),
                  }
                ),
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                Flex_1.FlexItem,
                __assign(
                  { style: { display: "flex", alignItems: "center" } },
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      Text_1.TextContent,
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Text_1.Text,
                          __assign({ component: Text_1.TextVariants.h3 }, { children: "Sandbox" }),
                          void 0
                        ),
                      },
                      void 0
                    ),
                  }
                ),
                void 0
              ),
            ],
          }
        ),
        void 0
      ),
      headerTools: (0, jsx_runtime_1.jsxs)(
        Page_1.PageHeaderTools,
        {
          children: [
            (0, jsx_runtime_1.jsx)(
              Page_1.PageHeaderToolsGroup,
              {
                children: (0, jsx_runtime_1.jsxs)(
                  Page_1.PageHeaderToolsItem,
                  __assign(
                    {
                      visibility: {
                        default: "hidden",
                        "2xl": "visible",
                        xl: "visible",
                        lg: "hidden",
                        md: "hidden",
                        sm: "hidden",
                      },
                    },
                    {
                      children: [
                        app.data.forms.length === 1 &&
                          (0, jsx_runtime_1.jsx)(
                            Text_1.Text,
                            __assign(
                              { "data-testid": "text-filename", className: "kogito--dmn-form__toolbar-filename" },
                              { children: filename }
                            ),
                            void 0
                          ),
                        app.data.forms.length > 1 &&
                          (0, jsx_runtime_1.jsx)(
                            Dropdown_1.Dropdown,
                            {
                              onSelect: function () {
                                return setModelDropdownOpen(false);
                              },
                              toggle: (0, jsx_runtime_1.jsx)(
                                Dropdown_1.DropdownToggle,
                                __assign(
                                  {
                                    id: "dmn-dev-sandbox-form-toolbar-model-dropdown-button",
                                    onToggle: function (isOpen) {
                                      return setModelDropdownOpen(isOpen);
                                    },
                                    "data-testid": "dmn-dev-sandbox-form-toolbar-model-dropdown-button",
                                  },
                                  { children: filename }
                                ),
                                void 0
                              ),
                              isOpen: modelDropdownOpen,
                              position: Dropdown_1.DropdownPosition.right,
                              dropdownItems: modelDropdownItems,
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
            (0, jsx_runtime_1.jsxs)(
              Page_1.PageHeaderToolsGroup,
              {
                children: [
                  (0, jsx_runtime_1.jsx)(
                    Page_1.PageHeaderToolsItem,
                    __assign(
                      {
                        visibility: {
                          default: "visible",
                          "2xl": "hidden",
                          xl: "hidden",
                          lg: "visible",
                          md: "visible",
                          sm: "visible",
                        },
                      },
                      { children: disclaimer }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    Page_1.PageHeaderToolsItem,
                    __assign(
                      {
                        visibility: {
                          default: "hidden",
                          "2xl": "visible",
                          xl: "visible",
                          lg: "hidden",
                          md: "hidden",
                          sm: "hidden",
                        },
                      },
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Dropdown_1.Dropdown,
                          {
                            onSelect: function () {
                              return setLgKebabOpen(false);
                            },
                            toggle: (0, jsx_runtime_1.jsx)(
                              Dropdown_1.DropdownToggle,
                              __assign(
                                {
                                  "data-testid": "view-kebab",
                                  className: "kogito--dmn-form__toolbar-icon-button",
                                  id: "view-id-lg",
                                  toggleIndicator: null,
                                  onToggle: function (isOpen) {
                                    return setLgKebabOpen(isOpen);
                                  },
                                  ouiaId: "toolbar-button",
                                },
                                { children: (0, jsx_runtime_1.jsx)(ellipsis_v_icon_1.EllipsisVIcon, {}, void 0) }
                              ),
                              void 0
                            ),
                            isOpen: isLgKebabOpen,
                            isPlain: true,
                            dropdownItems: dropdownItems("lg"),
                            position: Dropdown_1.DropdownPosition.right,
                          },
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    Page_1.PageHeaderToolsItem,
                    __assign(
                      {
                        visibility: {
                          default: "visible",
                          "2xl": "hidden",
                          xl: "hidden",
                          lg: "visible",
                          md: "visible",
                          sm: "visible",
                        },
                      },
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Dropdown_1.Dropdown,
                          {
                            onSelect: function () {
                              return setSmKebabOpen(false);
                            },
                            toggle: (0, jsx_runtime_1.jsx)(
                              Dropdown_1.DropdownToggle,
                              __assign(
                                {
                                  "data-testid": "kebab-sm",
                                  className: "kogito--dmn-form__toolbar-icon-button",
                                  id: "kebab-id-sm",
                                  toggleIndicator: null,
                                  onToggle: function (isOpen) {
                                    return setSmKebabOpen(isOpen);
                                  },
                                  ouiaId: "small-toolbar-button",
                                },
                                { children: (0, jsx_runtime_1.jsx)(ellipsis_v_icon_1.EllipsisVIcon, {}, void 0) }
                              ),
                              void 0
                            ),
                            isOpen: isSmKebabOpen,
                            isPlain: true,
                            dropdownItems: __spreadArray([], __read(dropdownItems("sm")), false),
                            position: Dropdown_1.DropdownPosition.right,
                          },
                          void 0
                        ),
                      }
                    ),
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
      topNav: disclaimer,
      className: "kogito--dmn-form__toolbar",
      "aria-label": "Page header",
    },
    void 0
  );
}
exports.DmnFormToolbar = DmnFormToolbar;
//# sourceMappingURL=DmnFormToolbar.js.map
