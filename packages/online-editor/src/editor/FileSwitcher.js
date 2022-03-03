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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.FilesDropdownModeIcons =
  exports.FileMenuItem =
  exports.FileName =
  exports.FilesMenuItems =
  exports.SearchableFilesMenuGroup =
  exports.FileSvg =
  exports.WorkspacesMenuItems =
  exports.FileSwitcher =
    void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var WorkspacesContext_1 = require("../workspace/WorkspacesContext");
var Hooks_1 = require("../navigation/Hooks");
var React = require("react");
var react_1 = require("react");
var path_1 = require("path");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var react_router_dom_1 = require("react-router-dom");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var FileLabel_1 = require("../workspace/components/FileLabel");
var Toggle_1 = require("@patternfly/react-core/dist/js/components/Dropdown/Toggle");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var Popover_1 = require("@patternfly/react-core/dist/js/components/Popover");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
var Menu_1 = require("@patternfly/react-core/dist/js/components/Menu");
var caret_down_icon_1 = require("@patternfly/react-icons/dist/js/icons/caret-down-icon");
var folder_icon_1 = require("@patternfly/react-icons/dist/js/icons/folder-icon");
var image_icon_1 = require("@patternfly/react-icons/dist/js/icons/image-icon");
var th_large_icon_1 = require("@patternfly/react-icons/dist/js/icons/th-large-icon");
var list_icon_1 = require("@patternfly/react-icons/dist/js/icons/list-icon");
var WorkspacesHooks_1 = require("../workspace/hooks/WorkspacesHooks");
var PromiseState_1 = require("../workspace/hooks/PromiseState");
var Split_1 = require("@patternfly/react-core/dist/js/layouts/Split");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var WorkspacesFiles_1 = require("../workspace/hooks/WorkspacesFiles");
var Skeleton_1 = require("@patternfly/react-core/dist/js/components/Skeleton");
var Card_1 = require("@patternfly/react-core/dist/js/components/Card");
var Gallery_1 = require("@patternfly/react-core/dist/js/layouts/Gallery");
var Hooks_2 = require("../reactExt/Hooks");
var react_router_1 = require("react-router");
var Bullseye_1 = require("@patternfly/react-core/dist/js/layouts/Bullseye");
var EmptyState_1 = require("@patternfly/react-core/dist/js/components/EmptyState");
var cubes_icon_1 = require("@patternfly/react-icons/dist/js/icons/cubes-icon");
var arrow_right_icon_1 = require("@patternfly/react-icons/dist/js/icons/arrow-right-icon");
var arrow_left_icon_1 = require("@patternfly/react-icons/dist/js/icons/arrow-left-icon");
var WorkspaceLabel_1 = require("../workspace/components/WorkspaceLabel");
var EditorEnvelopeLocatorContext_1 = require("../envelopeLocator/EditorEnvelopeLocatorContext");
var ROOT_MENU_ID = "rootMenu";
var FilesDropdownMode;
(function (FilesDropdownMode) {
  FilesDropdownMode[(FilesDropdownMode["LIST_MODELS"] = 0)] = "LIST_MODELS";
  FilesDropdownMode[(FilesDropdownMode["LIST_MODELS_AND_OTHERS"] = 1)] = "LIST_MODELS_AND_OTHERS";
  FilesDropdownMode[(FilesDropdownMode["CAROUSEL"] = 2)] = "CAROUSEL";
})(FilesDropdownMode || (FilesDropdownMode = {}));
var MIN_FILE_SWITCHER_PANEL_WIDTH_IN_PX = 400;
function FileSwitcher(props) {
  var _this = this;
  var workspaces = (0, WorkspacesContext_1.useWorkspaces)();
  var workspaceFileNameRef = (0, react_1.useRef)(null);
  var _a = __read((0, react_1.useState)(true), 2),
    newFileNameValid = _a[0],
    setNewFileNameValid = _a[1];
  var _b = __read((0, react_1.useState)(FilesDropdownMode.LIST_MODELS), 2),
    filesDropdownMode = _b[0],
    setFilesDropdownMode = _b[1];
  var resetWorkspaceFileName = (0, react_1.useCallback)(
    function () {
      if (workspaceFileNameRef.current) {
        workspaceFileNameRef.current.value = props.workspaceFile.nameWithoutExtension;
        setNewFileNameValid(true);
      }
    },
    [props.workspaceFile]
  );
  var checkNewFileName = (0, react_1.useCallback)(
    function (newFileNameWithoutExtension) {
      return __awaiter(_this, void 0, void 0, function () {
        var trimmedNewFileNameWithoutExtension, newRelativePath, hasConflictingFileName, _a, _b, hasForbiddenCharacters;
        var _c;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              trimmedNewFileNameWithoutExtension = newFileNameWithoutExtension.trim();
              if (trimmedNewFileNameWithoutExtension === props.workspaceFile.nameWithoutExtension) {
                setNewFileNameValid(true);
                return [2];
              }
              newRelativePath = (0, path_1.join)(
                props.workspaceFile.relativeDirPath,
                "".concat(trimmedNewFileNameWithoutExtension, ".").concat(props.workspaceFile.extension)
              );
              _b = (_a = workspaces).existsFile;
              _c = {};
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceFile.workspaceId)];
            case 1:
              return [
                4,
                _b.apply(_a, [
                  ((_c.fs = _d.sent()),
                  (_c.workspaceId = props.workspaceFile.workspaceId),
                  (_c.relativePath = newRelativePath),
                  _c),
                ]),
              ];
            case 2:
              hasConflictingFileName = _d.sent();
              hasForbiddenCharacters = !/^[\w\d_.\-()\s]+$/gi.test(newFileNameWithoutExtension);
              setNewFileNameValid(!hasConflictingFileName && !hasForbiddenCharacters);
              return [2];
          }
        });
      });
    },
    [props.workspaceFile, workspaces]
  );
  var renameWorkspaceFile = (0, react_1.useCallback)(
    function (newFileName) {
      return __awaiter(_this, void 0, void 0, function () {
        var trimmedNewFileName, _a, _b;
        var _c;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              trimmedNewFileName = newFileName === null || newFileName === void 0 ? void 0 : newFileName.trim();
              if (!trimmedNewFileName || !newFileNameValid) {
                resetWorkspaceFileName();
                return [2];
              }
              if (trimmedNewFileName === props.workspaceFile.nameWithoutExtension) {
                resetWorkspaceFileName();
                return [2];
              }
              _b = (_a = workspaces).renameFile;
              _c = {};
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceFile.workspaceId)];
            case 1:
              return [
                4,
                _b.apply(_a, [
                  ((_c.fs = _d.sent()),
                  (_c.file = props.workspaceFile),
                  (_c.newFileNameWithoutExtension = trimmedNewFileName.trim()),
                  _c),
                ]),
              ];
            case 2:
              _d.sent();
              return [2];
          }
        });
      });
    },
    [props.workspaceFile, workspaces, resetWorkspaceFileName, newFileNameValid]
  );
  var handleWorkspaceFileNameKeyDown = (0, react_1.useCallback)(
    function (e) {
      e.stopPropagation();
      if (newFileNameValid && e.keyCode === 13) {
        e.currentTarget.blur();
        setPopoverVisible(false);
      } else if (e.keyCode === 27) {
        resetWorkspaceFileName();
        e.currentTarget.blur();
        setPopoverVisible(false);
      }
    },
    [newFileNameValid, resetWorkspaceFileName]
  );
  (0, react_1.useEffect)(resetWorkspaceFileName, [resetWorkspaceFileName]);
  var _c = __read((0, react_1.useState)(false), 2),
    isFilesDropdownOpen = _c[0],
    setFilesDropdownOpen = _c[1];
  var _d = __read((0, react_1.useState)(false), 2),
    isPopoverVisible = _d[0],
    setPopoverVisible = _d[1];
  var _e = __read((0, react_1.useState)([]), 2),
    menuDrilledIn = _e[0],
    setMenuDrilledIn = _e[1];
  var _f = __read((0, react_1.useState)([]), 2),
    drilldownPath = _f[0],
    setDrilldownPath = _f[1];
  var _g = __read((0, react_1.useState)({}), 2),
    menuHeights = _g[0],
    setMenuHeights = _g[1];
  var _h = __read((0, react_1.useState)(ROOT_MENU_ID), 2),
    activeMenu = _h[0],
    setActiveMenu = _h[1];
  (0, react_1.useEffect)(
    function () {
      setMenuHeights({});
    },
    [props.workspace, filesDropdownMode, activeMenu]
  );
  (0, react_1.useEffect)(
    function () {
      setFilesDropdownMode(function (prev) {
        return prev === FilesDropdownMode.LIST_MODELS_AND_OTHERS ? FilesDropdownMode.LIST_MODELS : prev;
      });
    },
    [activeMenu]
  );
  (0, react_1.useEffect)(
    function () {
      if (isFilesDropdownOpen) {
        return;
      }
      setMenuDrilledIn([ROOT_MENU_ID]);
      setDrilldownPath([props.workspace.descriptor.workspaceId]);
      setActiveMenu("dd".concat(props.workspace.descriptor.workspaceId));
    },
    [isFilesDropdownOpen, props.workspace.descriptor.workspaceId]
  );
  var drillIn = (0, react_1.useCallback)(function (fromMenuId, toMenuId, pathId) {
    setMenuDrilledIn(function (prev) {
      return __spreadArray(__spreadArray([], __read(prev), false), [fromMenuId], false);
    });
    setDrilldownPath(function (prev) {
      return __spreadArray(__spreadArray([], __read(prev), false), [pathId], false);
    });
    setActiveMenu(toMenuId);
  }, []);
  var drillOut = (0, react_1.useCallback)(function (toMenuId) {
    setMenuDrilledIn(function (prev) {
      return prev.slice(0, prev.length - 1);
    });
    setDrilldownPath(function (prev) {
      return prev.slice(0, prev.length - 1);
    });
    setActiveMenu(toMenuId);
  }, []);
  var setHeight = (0, react_1.useCallback)(function (menuId, height) {
    setMenuHeights(function (prev) {
      var _a;
      return prev[menuId] === height ? prev : __assign(__assign({}, prev), ((_a = {}), (_a[menuId] = height), _a));
    });
  }, []);
  var workspacesMenuItems = (0, react_1.useMemo)(
    function () {
      if (activeMenu === "dd".concat(props.workspace.descriptor.workspaceId)) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
      }
      return (0, jsx_runtime_1.jsx)(
        WorkspacesMenuItems,
        {
          activeMenu: activeMenu,
          currentWorkspace: props.workspace,
          onSelectFile: function () {
            return setFilesDropdownOpen(false);
          },
          filesDropdownMode: filesDropdownMode,
          setFilesDropdownMode: setFilesDropdownMode,
        },
        void 0
      );
    },
    [activeMenu, filesDropdownMode, props.workspace]
  );
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: (0, jsx_runtime_1.jsx)(
        Flex_1.Flex,
        __assign(
          { alignItems: { default: "alignItemsCenter" }, flexWrap: { default: "nowrap" } },
          {
            children: (0, jsx_runtime_1.jsx)(
              Flex_1.FlexItem,
              __assign(
                { style: { display: "flex", alignItems: "baseline" } },
                {
                  children: (0, jsx_runtime_1.jsx)(
                    Dropdown_1.Dropdown,
                    __assign(
                      {
                        style: { position: "relative" },
                        position: "left",
                        className: "kie-tools--masthead-hoverable",
                        isOpen: isFilesDropdownOpen,
                        isPlain: true,
                        toggle: (0, jsx_runtime_1.jsx)(
                          Toggle_1.Toggle,
                          __assign(
                            {
                              onToggle: function (isOpen) {
                                return setFilesDropdownOpen(function (prev) {
                                  if (workspaceFileNameRef.current === document.activeElement) {
                                    return prev;
                                  } else {
                                    return isOpen;
                                  }
                                });
                              },
                              id: "editor-page-masthead-files-dropdown-toggle",
                            },
                            {
                              children: (0, jsx_runtime_1.jsxs)(
                                Flex_1.Flex,
                                __assign(
                                  { flexWrap: { default: "nowrap" }, alignItems: { default: "alignItemsCenter" } },
                                  {
                                    children: [
                                      (0, jsx_runtime_1.jsx)(Flex_1.FlexItem, {}, void 0),
                                      (0, jsx_runtime_1.jsx)(
                                        Flex_1.FlexItem,
                                        {
                                          children: (0, jsx_runtime_1.jsx)(
                                            "b",
                                            {
                                              children: (0, jsx_runtime_1.jsx)(
                                                FileLabel_1.FileLabel,
                                                { extension: props.workspaceFile.extension },
                                                void 0
                                              ),
                                            },
                                            void 0
                                          ),
                                        },
                                        void 0
                                      ),
                                      (0, jsx_runtime_1.jsx)(
                                        Popover_1.Popover,
                                        __assign(
                                          {
                                            hasAutoWidth: true,
                                            distance: 15,
                                            showClose: false,
                                            shouldClose: function () {
                                              return setPopoverVisible(false);
                                            },
                                            hideOnOutsideClick: true,
                                            enableFlip: false,
                                            withFocusTrap: false,
                                            bodyContent: (0, jsx_runtime_1.jsxs)(
                                              jsx_runtime_1.Fragment,
                                              {
                                                children: [
                                                  (0, jsx_runtime_1.jsx)(folder_icon_1.FolderIcon, {}, void 0),
                                                  "\u00A0\u00A0",
                                                  props.workspaceFile.relativeDirPath.split("/").join(" > "),
                                                ],
                                              },
                                              void 0
                                            ),
                                            isVisible: isPopoverVisible,
                                            position: "bottom-start",
                                          },
                                          {
                                            children: (0, jsx_runtime_1.jsx)(
                                              Flex_1.FlexItem,
                                              {
                                                children: (0, jsx_runtime_1.jsxs)(
                                                  "div",
                                                  __assign(
                                                    {
                                                      "data-testid": "toolbar-title",
                                                      className: "kogito--editor__toolbar-name-container ".concat(
                                                        newFileNameValid ? "" : "invalid"
                                                      ),
                                                    },
                                                    {
                                                      children: [
                                                        (0, jsx_runtime_1.jsx)(
                                                          Title_1.Title,
                                                          __assign(
                                                            {
                                                              "aria-label": "EmbeddedEditorFile name",
                                                              headingLevel: "h3",
                                                              size: "2xl",
                                                              style: { fontWeight: "bold" },
                                                            },
                                                            { children: props.workspaceFile.nameWithoutExtension }
                                                          ),
                                                          void 0
                                                        ),
                                                        (0, jsx_runtime_1.jsx)(
                                                          Tooltip_1.Tooltip,
                                                          __assign(
                                                            {
                                                              content: (0, jsx_runtime_1.jsx)(
                                                                Text_1.Text,
                                                                __assign(
                                                                  { component: Text_1.TextVariants.p },
                                                                  {
                                                                    children:
                                                                      "A file already exists at this location or this name has invalid characters. Please choose a different name.",
                                                                  }
                                                                ),
                                                                void 0
                                                              ),
                                                              position: "bottom",
                                                              trigger: "manual",
                                                              isVisible: !newFileNameValid,
                                                              className: "kogito--editor__light-tooltip",
                                                            },
                                                            {
                                                              children: (0, jsx_runtime_1.jsx)(
                                                                TextInput_1.TextInput,
                                                                {
                                                                  style: { fontWeight: "bold" },
                                                                  onClick: function (e) {
                                                                    e.stopPropagation();
                                                                    if (
                                                                      props.workspaceFile.relativePath !==
                                                                      props.workspaceFile.name
                                                                    ) {
                                                                      setPopoverVisible(true);
                                                                    }
                                                                  },
                                                                  onKeyDown: handleWorkspaceFileNameKeyDown,
                                                                  onChange: checkNewFileName,
                                                                  ref: workspaceFileNameRef,
                                                                  type: "text",
                                                                  "aria-label": "Edit file name",
                                                                  className: "kogito--editor__toolbar-title",
                                                                  onBlur: function (e) {
                                                                    return renameWorkspaceFile(e.target.value);
                                                                  },
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
                                              },
                                              void 0
                                            ),
                                          }
                                        ),
                                        void 0
                                      ),
                                      (0, jsx_runtime_1.jsx)(
                                        Flex_1.FlexItem,
                                        {
                                          children: (0, jsx_runtime_1.jsx)(caret_down_icon_1.CaretDownIcon, {}, void 0),
                                        },
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
                        ),
                      },
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Menu_1.Menu,
                          __assign(
                            {
                              style: {
                                boxShadow: "none",
                                minWidth:
                                  activeMenu === ROOT_MENU_ID
                                    ? "400px"
                                    : filesDropdownMode === FilesDropdownMode.CAROUSEL
                                    ? "calc(100vw - 16px)"
                                    : filesDropdownMode === FilesDropdownMode.LIST_MODELS
                                    ? "".concat(MIN_FILE_SWITCHER_PANEL_WIDTH_IN_PX, "px")
                                    : filesDropdownMode === FilesDropdownMode.LIST_MODELS_AND_OTHERS
                                    ? "".concat(MIN_FILE_SWITCHER_PANEL_WIDTH_IN_PX * 2, "px")
                                    : "",
                              },
                              id: ROOT_MENU_ID,
                              containsDrilldown: true,
                              drilldownItemPath: drilldownPath,
                              drilledInMenus: menuDrilledIn,
                              activeMenu: activeMenu,
                              onDrillIn: drillIn,
                              onDrillOut: drillOut,
                              onGetMenuHeight: setHeight,
                            },
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Menu_1.MenuContent,
                                __assign(
                                  {
                                    maxMenuHeight: "800px",
                                    menuHeight:
                                      activeMenu === ROOT_MENU_ID
                                        ? undefined
                                        : "".concat(menuHeights[activeMenu], "px"),
                                    style: { overflow: "hidden" },
                                  },
                                  {
                                    children: (0, jsx_runtime_1.jsxs)(
                                      Menu_1.MenuList,
                                      {
                                        children: [
                                          (0, jsx_runtime_1.jsx)(
                                            Menu_1.MenuItem,
                                            __assign(
                                              {
                                                itemId: props.workspace.descriptor.workspaceId,
                                                description: "Current",
                                                direction: "down",
                                                drilldownMenu: (0, jsx_runtime_1.jsx)(
                                                  Menu_1.DrilldownMenu,
                                                  __assign(
                                                    { id: "dd".concat(props.workspace.descriptor.workspaceId) },
                                                    {
                                                      children: (0, jsx_runtime_1.jsx)(
                                                        FilesMenuItems,
                                                        {
                                                          shouldFocusOnSearch:
                                                            activeMenu ===
                                                            "dd".concat(props.workspace.descriptor.workspaceId),
                                                          filesDropdownMode: filesDropdownMode,
                                                          setFilesDropdownMode: setFilesDropdownMode,
                                                          workspaceDescriptor: props.workspace.descriptor,
                                                          workspaceFiles: props.workspace.files,
                                                          currentWorkspaceFile: props.workspaceFile,
                                                          onSelectFile: function () {
                                                            return setFilesDropdownOpen(false);
                                                          },
                                                        },
                                                        void 0
                                                      ),
                                                    }
                                                  ),
                                                  void 0
                                                ),
                                              },
                                              { children: props.workspace.descriptor.name }
                                            ),
                                            void 0
                                          ),
                                          workspacesMenuItems,
                                        ],
                                      },
                                      void 0
                                    ),
                                  }
                                ),
                                void 0
                              ),
                            }
                          ),
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                }
              ),
              void 0
            ),
          }
        ),
        void 0
      ),
    },
    void 0
  );
}
exports.FileSwitcher = FileSwitcher;
function WorkspacesMenuItems(props) {
  var editorEnvelopeLocator = (0, EditorEnvelopeLocatorContext_1.useEditorEnvelopeLocator)();
  var workspaceDescriptorsPromise = (0, WorkspacesHooks_1.useWorkspaceDescriptorsPromise)();
  var workspaceFilesPromise = (0, WorkspacesFiles_1.useWorkspacesFilesPromise)(workspaceDescriptorsPromise.data);
  var combined = (0, PromiseState_1.useCombinedPromiseState)({
    workspaceDescriptors: workspaceDescriptorsPromise,
    workspaceFiles: workspaceFilesPromise,
  });
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        (0, jsx_runtime_1.jsx)(Divider_1.Divider, { component: "li" }, void 0),
        (0, jsx_runtime_1.jsx)(
          PromiseState_1.PromiseStateWrapper,
          {
            promise: combined,
            pending: (0, jsx_runtime_1.jsxs)(
              "div",
              __assign(
                { style: { padding: "8px" } },
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(Skeleton_1.Skeleton, {}, void 0),
                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    (0, jsx_runtime_1.jsx)(Skeleton_1.Skeleton, { width: "80%" }, void 0),
                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    (0, jsx_runtime_1.jsx)(Skeleton_1.Skeleton, {}, void 0),
                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    (0, jsx_runtime_1.jsx)(Skeleton_1.Skeleton, { width: "80%" }, void 0),
                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    (0, jsx_runtime_1.jsx)(Skeleton_1.Skeleton, {}, void 0),
                    (0, jsx_runtime_1.jsx)("br", {}, void 0),
                    (0, jsx_runtime_1.jsx)(Skeleton_1.Skeleton, { width: "80%" }, void 0),
                  ],
                }
              ),
              void 0
            ),
            resolved: function (_a) {
              var workspaceDescriptors = _a.workspaceDescriptors,
                workspaceFiles = _a.workspaceFiles;
              return (0, jsx_runtime_1.jsx)(
                jsx_runtime_1.Fragment,
                {
                  children: workspaceDescriptors
                    .sort(function (a, b) {
                      return new Date(a.lastUpdatedDateISO) < new Date(b.lastUpdatedDateISO) ? 1 : -1;
                    })
                    .filter(function (descriptor) {
                      return descriptor.workspaceId !== props.currentWorkspace.descriptor.workspaceId;
                    })
                    .map(function (descriptor) {
                      var _a;
                      return (0, jsx_runtime_1.jsxs)(
                        React.Fragment,
                        {
                          children: [
                            workspaceFiles.get(descriptor.workspaceId).length === 1 &&
                              (0, jsx_runtime_1.jsx)(
                                FileMenuItem,
                                {
                                  file: workspaceFiles.get(descriptor.workspaceId)[0],
                                  onSelectFile: props.onSelectFile,
                                },
                                void 0
                              ),
                            workspaceFiles.get(descriptor.workspaceId).length > 1 &&
                              (0, jsx_runtime_1.jsxs)(
                                Menu_1.MenuItem,
                                __assign(
                                  {
                                    itemId: descriptor.workspaceId,
                                    description: ""
                                      .concat(workspaceFiles.get(descriptor.workspaceId).length, " files, ")
                                      .concat(
                                        workspaceFiles.get(descriptor.workspaceId).filter(function (f) {
                                          return editorEnvelopeLocator.hasMappingFor(f.relativePath);
                                        }).length,
                                        " models"
                                      ),
                                    direction: "down",
                                    drilldownMenu: (0, jsx_runtime_1.jsx)(
                                      Menu_1.DrilldownMenu,
                                      __assign(
                                        { id: "dd".concat(descriptor.workspaceId) },
                                        {
                                          children: (0, jsx_runtime_1.jsx)(
                                            FilesMenuItems,
                                            {
                                              shouldFocusOnSearch:
                                                props.activeMenu === "dd".concat(descriptor.workspaceId),
                                              filesDropdownMode: props.filesDropdownMode,
                                              setFilesDropdownMode: props.setFilesDropdownMode,
                                              workspaceDescriptor: descriptor,
                                              workspaceFiles:
                                                (_a = workspaceFiles.get(descriptor.workspaceId)) !== null &&
                                                _a !== void 0
                                                  ? _a
                                                  : [],
                                              onSelectFile: props.onSelectFile,
                                            },
                                            void 0
                                          ),
                                        }
                                      ),
                                      void 0
                                    ),
                                  },
                                  {
                                    children: [
                                      (0, jsx_runtime_1.jsx)(folder_icon_1.FolderIcon, {}, void 0),
                                      "\u00A0\u00A0",
                                      descriptor.name,
                                      "\u00A0\u00A0",
                                      (0, jsx_runtime_1.jsx)(
                                        WorkspaceLabel_1.WorkspaceLabel,
                                        { descriptor: descriptor },
                                        void 0
                                      ),
                                    ],
                                  }
                                ),
                                void 0
                              ),
                          ],
                        },
                        descriptor.workspaceId
                      );
                    }),
                },
                void 0
              );
            },
          },
          void 0
        ),
      ],
    },
    void 0
  );
}
exports.WorkspacesMenuItems = WorkspacesMenuItems;
function FileSvg(props) {
  var _this = this;
  var workspaces = (0, WorkspacesContext_1.useWorkspaces)();
  var imgRef = (0, react_1.useRef)(null);
  var _a = __read((0, PromiseState_1.usePromiseState)(), 2),
    svg = _a[0],
    setSvg = _a[1];
  (0, Hooks_2.useCancelableEffect)(
    (0, react_1.useCallback)(
      function (_a) {
        var canceled = _a.canceled;
        Promise.resolve()
          .then(function () {
            return __awaiter(_this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                return [2, workspaces.svgService.getSvg(props.workspaceFile)];
              });
            });
          })
          .then(function (file) {
            return __awaiter(_this, void 0, void 0, function () {
              var _a, _b, _c;
              var _d;
              return __generator(this, function (_e) {
                switch (_e.label) {
                  case 0:
                    if (canceled.get()) {
                      return [2];
                    }
                    if (!file) return [3, 2];
                    _a = setSvg;
                    _d = {};
                    _c = (_b = WorkspacesContext_1.decoder).decode;
                    return [4, file.getFileContents()];
                  case 1:
                    _a.apply(void 0, [((_d.data = _c.apply(_b, [_e.sent()])), _d)]);
                    return [3, 3];
                  case 2:
                    setSvg({ error: "Can't find SVG for '".concat(props.workspaceFile.relativePath, "'") });
                    _e.label = 3;
                  case 3:
                    return [2];
                }
              });
            });
          });
      },
      [props.workspaceFile, workspaces, setSvg]
    )
  );
  (0, react_1.useEffect)(
    function () {
      if (svg.data) {
        var blob = new Blob([svg.data], { type: "image/svg+xml" });
        var url_1 = URL.createObjectURL(blob);
        imgRef.current.addEventListener(
          "load",
          function () {
            return URL.revokeObjectURL(url_1);
          },
          { once: true }
        );
        imgRef.current.src = url_1;
      }
    },
    [svg]
  );
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: (0, jsx_runtime_1.jsx)(
        PromiseState_1.PromiseStateWrapper,
        {
          pending: (0, jsx_runtime_1.jsx)(Skeleton_1.Skeleton, { height: "180px", style: { margin: "10px" } }, void 0),
          rejected: function () {
            return (0, jsx_runtime_1.jsx)(
              "div",
              __assign(
                { style: { height: "180px", margin: "10px", borderRadius: "5px", backgroundColor: "#EEE" } },
                {
                  children: (0, jsx_runtime_1.jsx)(
                    Bullseye_1.Bullseye,
                    { children: (0, jsx_runtime_1.jsx)(image_icon_1.ImageIcon, { size: "xl", color: "gray" }, void 0) },
                    void 0
                  ),
                }
              ),
              void 0
            );
          },
          promise: svg,
          resolved: function () {
            return (0, jsx_runtime_1.jsx)(
              "img",
              { style: { height: "194px" }, ref: imgRef, alt: "SVG for " + props.workspaceFile.relativePath },
              void 0
            );
          },
        },
        void 0
      ),
    },
    void 0
  );
}
exports.FileSvg = FileSvg;
function SearchableFilesMenuGroup(props) {
  var _a = __read((0, react_1.useState)(""), 2),
    search = _a[0],
    setSearch = _a[1];
  var searchInputRef = (0, react_1.useRef)(null);
  (0, react_1.useEffect)(
    function () {
      if (props.shouldFocusOnSearch) {
        setTimeout(function () {
          var _a;
          (_a = searchInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }, 500);
      }
    },
    [props.shouldFocusOnSearch, props.filesDropdownMode]
  );
  var filteredFiles = (0, react_1.useMemo)(
    function () {
      return props.allFiles.filter(function (file) {
        return file.name.toLowerCase().includes(search.toLowerCase());
      });
    },
    [props.allFiles, search]
  );
  return (0, jsx_runtime_1.jsxs)(
    Menu_1.MenuGroup,
    __assign(
      { label: props.label },
      {
        children: [
          (0, jsx_runtime_1.jsx)(
            Menu_1.MenuInput,
            {
              children: (0, jsx_runtime_1.jsx)(
                TextInput_1.TextInput,
                {
                  ref: searchInputRef,
                  value: search,
                  "aria-label": "Other files menu items",
                  iconVariant: "search",
                  type: "search",
                  onChange: function (value) {
                    return setSearch(value);
                  },
                },
                void 0
              ),
            },
            void 0
          ),
          filteredFiles.length === 0 &&
            search &&
            (0, jsx_runtime_1.jsx)(
              Bullseye_1.Bullseye,
              {
                children: (0, jsx_runtime_1.jsxs)(
                  EmptyState_1.EmptyState,
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(EmptyState_1.EmptyStateIcon, { icon: cubes_icon_1.CubesIcon }, void 0),
                      (0, jsx_runtime_1.jsx)(
                        Title_1.Title,
                        __assign(
                          { headingLevel: "h4", size: "lg" },
                          { children: "No files match '".concat(search, "'.") }
                        ),
                        void 0
                      ),
                    ],
                  },
                  void 0
                ),
              },
              void 0
            ),
          (0, jsx_runtime_1.jsx)(
            "div",
            __assign(
              { style: { maxHeight: props.maxHeight, overflowY: "auto" } },
              { children: filteredFiles.length > 0 && props.children({ filteredFiles: filteredFiles }) }
            ),
            void 0
          ),
        ],
      }
    ),
    void 0
  );
}
exports.SearchableFilesMenuGroup = SearchableFilesMenuGroup;
function FilesMenuItems(props) {
  var history = (0, react_router_1.useHistory)();
  var routes = (0, Hooks_1.useRoutes)();
  var editorEnvelopeLocator = (0, EditorEnvelopeLocatorContext_1.useEditorEnvelopeLocator)();
  var sortedAndFilteredFiles = (0, react_1.useMemo)(
    function () {
      return props.workspaceFiles
        .sort(function (a, b) {
          return a.relativePath.localeCompare(b.relativePath);
        })
        .filter(function (file) {
          var _a;
          return (
            file.relativePath !==
            ((_a = props.currentWorkspaceFile) === null || _a === void 0 ? void 0 : _a.relativePath)
          );
        });
    },
    [props.workspaceFiles, props.currentWorkspaceFile]
  );
  var models = (0, react_1.useMemo)(
    function () {
      return sortedAndFilteredFiles.filter(function (file) {
        return editorEnvelopeLocator.hasMappingFor(file.relativePath);
      });
    },
    [editorEnvelopeLocator, sortedAndFilteredFiles]
  );
  var otherFiles = (0, react_1.useMemo)(
    function () {
      return sortedAndFilteredFiles.filter(function (file) {
        return !editorEnvelopeLocator.hasMappingFor(file.relativePath);
      });
    },
    [editorEnvelopeLocator, sortedAndFilteredFiles]
  );
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        (0, jsx_runtime_1.jsx)(
          Split_1.Split,
          {
            children: (0, jsx_runtime_1.jsx)(
              Split_1.SplitItem,
              __assign(
                { isFilled: true },
                {
                  children: (0, jsx_runtime_1.jsx)(
                    Menu_1.MenuItem,
                    __assign({ direction: "up", itemId: props.workspaceDescriptor.workspaceId }, { children: "All" }),
                    void 0
                  ),
                }
              ),
              void 0
            ),
          },
          void 0
        ),
        (0, jsx_runtime_1.jsx)(Divider_1.Divider, { component: "li" }, void 0),
        (0, jsx_runtime_1.jsxs)(
          Split_1.Split,
          {
            children: [
              (props.filesDropdownMode === FilesDropdownMode.LIST_MODELS ||
                props.filesDropdownMode === FilesDropdownMode.LIST_MODELS_AND_OTHERS) &&
                (0, jsx_runtime_1.jsx)(
                  Split_1.SplitItem,
                  __assign(
                    { isFilled: true, style: { minWidth: "".concat(MIN_FILE_SWITCHER_PANEL_WIDTH_IN_PX, "px") } },
                    {
                      children: (0, jsx_runtime_1.jsxs)(
                        jsx_runtime_1.Fragment,
                        {
                          children: [
                            (0, jsx_runtime_1.jsx)(
                              SearchableFilesMenuGroup,
                              __assign(
                                {
                                  maxHeight: "500px",
                                  filesDropdownMode: props.filesDropdownMode,
                                  shouldFocusOnSearch: props.shouldFocusOnSearch,
                                  label: "Models in '".concat(props.workspaceDescriptor.name, "'"),
                                  allFiles: models,
                                },
                                {
                                  children: function (_a) {
                                    var filteredFiles = _a.filteredFiles;
                                    return filteredFiles.map(function (file) {
                                      return (0,
                                      jsx_runtime_1.jsx)(FileMenuItem, { file: file, onSelectFile: props.onSelectFile }, file.relativePath);
                                    });
                                  },
                                }
                              ),
                              void 0
                            ),
                            otherFiles.length > 0 &&
                              (0, jsx_runtime_1.jsxs)(
                                jsx_runtime_1.Fragment,
                                {
                                  children: [
                                    (0, jsx_runtime_1.jsx)(Divider_1.Divider, { component: "li" }, void 0),
                                    (0, jsx_runtime_1.jsx)(
                                      Menu_1.MenuGroup,
                                      {
                                        children: (0, jsx_runtime_1.jsx)(
                                          Menu_1.MenuList,
                                          {
                                            children: (0, jsx_runtime_1.jsxs)(
                                              Menu_1.MenuItem,
                                              __assign(
                                                {
                                                  onClick: function (e) {
                                                    e.stopPropagation();
                                                    props.setFilesDropdownMode(function (prev) {
                                                      return prev === FilesDropdownMode.LIST_MODELS
                                                        ? FilesDropdownMode.LIST_MODELS_AND_OTHERS
                                                        : FilesDropdownMode.LIST_MODELS;
                                                    });
                                                  },
                                                },
                                                {
                                                  children: [
                                                    props.filesDropdownMode === FilesDropdownMode.LIST_MODELS
                                                      ? "View other files"
                                                      : "Hide other files",
                                                    "\u00A0\u00A0",
                                                    props.filesDropdownMode === FilesDropdownMode.LIST_MODELS
                                                      ? (0, jsx_runtime_1.jsx)(
                                                          arrow_right_icon_1.ArrowRightIcon,
                                                          {},
                                                          void 0
                                                        )
                                                      : (0, jsx_runtime_1.jsx)(
                                                          arrow_left_icon_1.ArrowLeftIcon,
                                                          {},
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
                    }
                  ),
                  void 0
                ),
              props.filesDropdownMode === FilesDropdownMode.LIST_MODELS_AND_OTHERS &&
                (0, jsx_runtime_1.jsx)(
                  Split_1.SplitItem,
                  __assign(
                    { isFilled: true, style: { minWidth: "".concat(MIN_FILE_SWITCHER_PANEL_WIDTH_IN_PX, "px") } },
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        SearchableFilesMenuGroup,
                        __assign(
                          {
                            maxHeight: "500px",
                            filesDropdownMode: props.filesDropdownMode,
                            shouldFocusOnSearch: props.shouldFocusOnSearch,
                            label: "Other files in '".concat(props.workspaceDescriptor.name, "'"),
                            allFiles: otherFiles,
                          },
                          {
                            children: function (_a) {
                              var filteredFiles = _a.filteredFiles;
                              return filteredFiles.map(function (file) {
                                return (0,
                                jsx_runtime_1.jsx)(Menu_1.MenuItem, { children: (0, jsx_runtime_1.jsx)(FileName, { file: file }, void 0) }, file.relativePath);
                              });
                            },
                          }
                        ),
                        void 0
                      ),
                    }
                  ),
                  void 0
                ),
              props.filesDropdownMode === FilesDropdownMode.CAROUSEL &&
                (0, jsx_runtime_1.jsx)(
                  Split_1.SplitItem,
                  __assign(
                    { isFilled: true },
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        SearchableFilesMenuGroup,
                        __assign(
                          {
                            maxHeight: "500px",
                            filesDropdownMode: props.filesDropdownMode,
                            shouldFocusOnSearch: props.shouldFocusOnSearch,
                            label: "Models in '".concat(props.workspaceDescriptor.name, "'"),
                            allFiles: models,
                          },
                          {
                            children: function (_a) {
                              var filteredFiles = _a.filteredFiles;
                              return (0, jsx_runtime_1.jsx)(
                                Gallery_1.Gallery,
                                __assign(
                                  { hasGutter: true, style: { padding: "8px" } },
                                  {
                                    children: filteredFiles.map(function (file) {
                                      return (0, jsx_runtime_1.jsxs)(
                                        Card_1.Card,
                                        __assign(
                                          {
                                            isSelectable: true,
                                            isRounded: true,
                                            isCompact: true,
                                            isHoverable: true,
                                            isFullHeight: true,
                                            onClick: function () {
                                              history.push({
                                                pathname: routes.workspaceWithFilePath.path({
                                                  workspaceId: file.workspaceId,
                                                  fileRelativePath: file.relativePathWithoutExtension,
                                                  extension: file.extension,
                                                }),
                                              });
                                              props.onSelectFile();
                                            },
                                          },
                                          {
                                            children: [
                                              (0, jsx_runtime_1.jsx)(
                                                Card_1.CardHeader,
                                                {
                                                  children: (0, jsx_runtime_1.jsx)(
                                                    Card_1.CardHeaderMain,
                                                    {
                                                      children: (0, jsx_runtime_1.jsx)(
                                                        Card_1.CardTitle,
                                                        {
                                                          children: (0, jsx_runtime_1.jsxs)(
                                                            Flex_1.Flex,
                                                            __assign(
                                                              { flexWrap: { default: "nowrap" } },
                                                              {
                                                                children: [
                                                                  (0, jsx_runtime_1.jsx)(
                                                                    Flex_1.FlexItem,
                                                                    {
                                                                      children: (0, jsx_runtime_1.jsx)(
                                                                        Text_1.TextContent,
                                                                        {
                                                                          children: (0, jsx_runtime_1.jsx)(
                                                                            Text_1.Text,
                                                                            __assign(
                                                                              { component: Text_1.TextVariants.h4 },
                                                                              { children: file.nameWithoutExtension }
                                                                            ),
                                                                            void 0
                                                                          ),
                                                                        },
                                                                        void 0
                                                                      ),
                                                                    },
                                                                    void 0
                                                                  ),
                                                                  (0, jsx_runtime_1.jsx)(
                                                                    Flex_1.FlexItem,
                                                                    {
                                                                      children: (0, jsx_runtime_1.jsx)(
                                                                        FileLabel_1.FileLabel,
                                                                        { extension: file.extension },
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
                                                      ),
                                                    },
                                                    void 0
                                                  ),
                                                },
                                                void 0
                                              ),
                                              (0, jsx_runtime_1.jsx)(
                                                Card_1.CardBody,
                                                __assign(
                                                  { style: { padding: 0 } },
                                                  {
                                                    children: (0, jsx_runtime_1.jsx)(
                                                      FileSvg,
                                                      { workspaceFile: file },
                                                      void 0
                                                    ),
                                                  }
                                                ),
                                                void 0
                                              ),
                                            ],
                                          }
                                        ),
                                        file.relativePath
                                      );
                                    }),
                                  }
                                ),
                                void 0
                              );
                            },
                          }
                        ),
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
  );
}
exports.FilesMenuItems = FilesMenuItems;
function FileName(props) {
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        (0, jsx_runtime_1.jsxs)(
          Flex_1.Flex,
          __assign(
            { flexWrap: { default: "nowrap" } },
            {
              children: [
                (0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { children: props.file.nameWithoutExtension }, void 0),
                (0, jsx_runtime_1.jsx)(
                  Flex_1.FlexItem,
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      FileLabel_1.FileLabel,
                      { extension: props.file.extension },
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
        (0, jsx_runtime_1.jsxs)(
          "div",
          __assign(
            { className: "pf-c-dropdown__menu-item-description" },
            { children: [props.file.relativeDirPath.split("/").join(" > "), "\u00A0"] }
          ),
          void 0
        ),
      ],
    },
    void 0
  );
}
exports.FileName = FileName;
function FileMenuItem(props) {
  var routes = (0, Hooks_1.useRoutes)();
  return (0, jsx_runtime_1.jsx)(
    Menu_1.MenuItem,
    __assign(
      { onClick: props.onSelectFile },
      {
        children: (0, jsx_runtime_1.jsx)(
          react_router_dom_1.Link,
          __assign(
            {
              to: routes.workspaceWithFilePath.path({
                workspaceId: props.file.workspaceId,
                fileRelativePath: props.file.relativePathWithoutExtension,
                extension: props.file.extension,
              }),
            },
            { children: (0, jsx_runtime_1.jsx)(FileName, { file: props.file }, void 0) }
          ),
          void 0
        ),
      }
    ),
    void 0
  );
}
exports.FileMenuItem = FileMenuItem;
function FilesDropdownModeIcons(props) {
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        props.filesDropdownMode === FilesDropdownMode.CAROUSEL &&
          (0, jsx_runtime_1.jsx)(
            Button_1.Button,
            __assign(
              {
                className: "kie-tools--masthead-hoverable",
                variant: "plain",
                "aria-label": "Switch to list view",
                onClick: function (e) {
                  e.stopPropagation();
                  props.setFilesDropdownMode(FilesDropdownMode.LIST_MODELS);
                },
              },
              { children: (0, jsx_runtime_1.jsx)(list_icon_1.ListIcon, {}, void 0) }
            ),
            void 0
          ),
        (props.filesDropdownMode === FilesDropdownMode.LIST_MODELS ||
          props.filesDropdownMode === FilesDropdownMode.LIST_MODELS_AND_OTHERS) &&
          (0, jsx_runtime_1.jsx)(
            Button_1.Button,
            __assign(
              {
                className: "kie-tools--masthead-hoverable",
                variant: "plain",
                "aria-label": "Switch to carousel view",
                onClick: function (e) {
                  e.stopPropagation();
                  props.setFilesDropdownMode(FilesDropdownMode.CAROUSEL);
                },
              },
              { children: (0, jsx_runtime_1.jsx)(th_large_icon_1.ThLargeIcon, {}, void 0) }
            ),
            void 0
          ),
      ],
    },
    void 0
  );
}
exports.FilesDropdownModeIcons = FilesDropdownModeIcons;
//# sourceMappingURL=FileSwitcher.js.map
