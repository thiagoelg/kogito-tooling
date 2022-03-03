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
exports.NewFileDropdownMenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var WorkspacesContext_1 = require("../workspace/WorkspacesContext");
var FileLabel_1 = require("../workspace/components/FileLabel");
var Flex_1 = require("@patternfly/react-core/dist/js/layouts/Flex");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
var Menu_1 = require("@patternfly/react-core/dist/js/components/Menu");
var EditorEnvelopeLocatorContext_1 = require("../envelopeLocator/EditorEnvelopeLocatorContext");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Alerts_1 = require("../alerts/Alerts");
var Alert_1 = require("@patternfly/react-core/dist/js/components/Alert");
var path_1 = require("path");
var ImportFromUrlForm_1 = require("../workspace/components/ImportFromUrlForm");
var ImportableUrlHooks_1 = require("../workspace/hooks/ImportableUrlHooks");
var Hooks_1 = require("../navigation/Hooks");
function NewFileDropdownMenu(props) {
  var _this = this;
  var uploadFileInputRef = (0, react_1.useRef)(null);
  var _a = __read((0, react_1.useState)([]), 2),
    menuDrilledIn = _a[0],
    setMenuDrilledIn = _a[1];
  var _b = __read((0, react_1.useState)([]), 2),
    drilldownPath = _b[0],
    setDrilldownPath = _b[1];
  var _c = __read((0, react_1.useState)({}), 2),
    menuHeights = _c[0],
    setMenuHeights = _c[1];
  var _d = __read((0, react_1.useState)("addFileRootMenu"), 2),
    activeMenu = _d[0],
    setActiveMenu = _d[1];
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
      return prev[menuId] !== undefined ? prev : __assign(__assign({}, prev), ((_a = {}), (_a[menuId] = height), _a));
    });
  }, []);
  var workspaces = (0, WorkspacesContext_1.useWorkspaces)();
  var routes = (0, Hooks_1.useRoutes)();
  var editorEnvelopeLocator = (0, EditorEnvelopeLocatorContext_1.useEditorEnvelopeLocator)();
  var addEmptyFile = (0, react_1.useCallback)(
    function (extension) {
      return __awaiter(_this, void 0, void 0, function () {
        var file, _a, _b;
        var _c;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              _b = (_a = workspaces).addEmptyFile;
              _c = {};
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceId)];
            case 1:
              return [
                4,
                _b.apply(_a, [
                  ((_c.fs = _d.sent()),
                  (_c.workspaceId = props.workspaceId),
                  (_c.destinationDirRelativePath = props.destinationDirPath),
                  (_c.extension = extension),
                  _c),
                ]),
              ];
            case 2:
              file = _d.sent();
              return [4, props.onAddFile(file)];
            case 3:
              _d.sent();
              return [2];
          }
        });
      });
    },
    [props, workspaces]
  );
  var urlInputRef = (0, react_1.useRef)(null);
  (0, react_1.useEffect)(
    function () {
      if (activeMenu === "importFromUrlMenu") {
        setTimeout(function () {
          var _a;
          (_a = urlInputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }, 500);
      }
    },
    [activeMenu, urlInputRef]
  );
  var _e = __read((0, react_1.useState)(false), 2),
    isImporting = _e[0],
    setImporting = _e[1];
  var _f = __read((0, react_1.useState)(), 2),
    importingError = _f[0],
    setImportingError = _f[1];
  var importFromUrl = (0, react_1.useCallback)(
    function (urlString) {
      return __awaiter(_this, void 0, void 0, function () {
        var url_1, extension, name_1, response, content, file, _a, _b, e_1;
        var _c;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              if (!urlString) {
                return [2];
              }
              setImporting(true);
              setImportingError(undefined);
              _d.label = 1;
            case 1:
              _d.trys.push([1, 7, 8, 9]);
              url_1 = new URL(urlString);
              extension = (0, path_1.extname)(url_1.pathname).replace(".", "");
              name_1 = decodeURIComponent((0, path_1.basename)(url_1.pathname, (0, path_1.extname)(url_1.pathname)));
              return [4, fetch(urlString)];
            case 2:
              response = _d.sent();
              if (!response.ok) {
                setImportingError(
                  "".concat(response.status).concat(response.statusText ? "- ".concat(response.statusText) : "")
                );
                return [2];
              }
              return [4, response.text()];
            case 3:
              content = _d.sent();
              _b = (_a = workspaces).addFile;
              _c = {};
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceId)];
            case 4:
              return [
                4,
                _b.apply(_a, [
                  ((_c.fs = _d.sent()),
                  (_c.workspaceId = props.workspaceId),
                  (_c.name = name_1),
                  (_c.extension = extension),
                  (_c.content = content),
                  (_c.destinationDirRelativePath = props.destinationDirPath),
                  _c),
                ]),
              ];
            case 5:
              file = _d.sent();
              return [4, props.onAddFile(file)];
            case 6:
              _d.sent();
              return [3, 9];
            case 7:
              e_1 = _d.sent();
              setImportingError(e_1.toString());
              return [3, 9];
            case 8:
              return [7];
            case 9:
              return [2];
          }
        });
      });
    },
    [props, workspaces]
  );
  var addSample = (0, react_1.useCallback)(
    function (extension) {
      return importFromUrl(
        ""
          .concat(window.location.origin)
          .concat(window.location.pathname)
          .concat(routes.static.sample.path({ type: extension }))
      );
    },
    [importFromUrl, routes]
  );
  var successfullyUploadedAlert = (0, Alerts_1.useAlert)(
    props.alerts,
    (0, react_1.useCallback)(function (_a, staticArgs) {
      var close = _a.close;
      return (0,
      jsx_runtime_1.jsx)(Alert_1.Alert, { variant: "success", title: "Successfully uploaded ".concat(staticArgs.qtt, " file(s)."), actionClose: (0, jsx_runtime_1.jsx)(Alert_1.AlertActionCloseButton, { onClose: close }, void 0) }, void 0);
    }, []),
    { durationInSeconds: 4 }
  );
  var handleFileUpload = (0, react_1.useCallback)(
    function (e) {
      return __awaiter(_this, void 0, void 0, function () {
        var filesToUpload, uploadedFiles, fileToGoTo;
        var _this = this;
        var _a;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              return [
                4,
                Promise.all(
                  Array.from((_a = e.target.files) !== null && _a !== void 0 ? _a : []).map(function (file) {
                    return __awaiter(_this, void 0, void 0, function () {
                      var _a;
                      return __generator(this, function (_b) {
                        switch (_b.label) {
                          case 0:
                            _a = {
                              path: file.name,
                            };
                            return [
                              4,
                              new Promise(function (res) {
                                var reader = new FileReader();
                                reader.onload = function (event) {
                                  var _a;
                                  return res(
                                    WorkspacesContext_1.decoder.decode(
                                      (_a = event.target) === null || _a === void 0 ? void 0 : _a.result
                                    )
                                  );
                                };
                                reader.readAsArrayBuffer(file);
                              }),
                            ];
                          case 1:
                            return [2, ((_a.content = _b.sent()), _a)];
                        }
                      });
                    });
                  })
                ),
              ];
            case 1:
              filesToUpload = _b.sent();
              return [
                4,
                Promise.all(
                  filesToUpload.map(function (file) {
                    return __awaiter(_this, void 0, void 0, function () {
                      var _a, _b;
                      var _c;
                      return __generator(this, function (_d) {
                        switch (_d.label) {
                          case 0:
                            _b = (_a = workspaces).addFile;
                            _c = {};
                            return [4, workspaces.fsService.getWorkspaceFs(props.workspaceId)];
                          case 1:
                            return [
                              2,
                              _b.apply(_a, [
                                ((_c.fs = _d.sent()),
                                (_c.workspaceId = props.workspaceId),
                                (_c.name = file.path),
                                (_c.extension = (0, path_1.extname)(file.path).replace(".", "")),
                                (_c.content = file.content),
                                (_c.destinationDirRelativePath = props.destinationDirPath),
                                _c),
                              ]),
                            ];
                        }
                      });
                    });
                  })
                ),
              ];
            case 2:
              uploadedFiles = _b.sent();
              fileToGoTo = uploadedFiles
                .filter(function (file) {
                  return editorEnvelopeLocator.hasMappingFor(file.relativePath);
                })
                .pop();
              return [4, props.onAddFile(fileToGoTo)];
            case 3:
              _b.sent();
              successfullyUploadedAlert.show({ qtt: uploadedFiles.length });
              return [2];
          }
        });
      });
    },
    [editorEnvelopeLocator, workspaces, props, successfullyUploadedAlert]
  );
  var _g = __read((0, react_1.useState)(""), 2),
    url = _g[0],
    setUrl = _g[1];
  return (0, jsx_runtime_1.jsx)(
    Menu_1.Menu,
    __assign(
      {
        style: { boxShadow: "none", minWidth: "400px" },
        id: "addFileRootMenu",
        containsDrilldown: true,
        onDrillIn: drillIn,
        onDrillOut: drillOut,
        activeMenu: activeMenu,
        onGetMenuHeight: setHeight,
        drilldownItemPath: drilldownPath,
        drilledInMenus: menuDrilledIn,
      },
      {
        children: (0, jsx_runtime_1.jsx)(
          Menu_1.MenuContent,
          __assign(
            { menuHeight: "".concat(menuHeights[activeMenu], "px") },
            {
              children: (0, jsx_runtime_1.jsxs)(
                Menu_1.MenuList,
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(
                      Menu_1.MenuItem,
                      __assign(
                        {
                          itemId: "newBpmnItemId",
                          onClick: function () {
                            return addEmptyFile("bpmn");
                          },
                          description: "BPMN files are used to generate business workflows.",
                        },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            "b",
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                FileLabel_1.FileLabel,
                                { style: { marginBottom: "4px" }, extension: "bpmn" },
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
                      Menu_1.MenuGroup,
                      __assign(
                        { label: " " },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Menu_1.MenuItem,
                            __assign(
                              {
                                itemId: "newDmnItemId",
                                onClick: function () {
                                  return addEmptyFile("dmn");
                                },
                                description: "DMN files are used to generate decision models",
                              },
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  "b",
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      FileLabel_1.FileLabel,
                                      { style: { marginBottom: "4px" }, extension: "dmn" },
                                      void 0
                                    ),
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
                    (0, jsx_runtime_1.jsx)(
                      Menu_1.MenuGroup,
                      __assign(
                        { label: " " },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Menu_1.MenuItem,
                            __assign(
                              {
                                itemId: "newPmmlItemId",
                                onClick: function () {
                                  return addEmptyFile("pmml");
                                },
                                description: "PMML files are used to generate scorecards",
                              },
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  "b",
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      FileLabel_1.FileLabel,
                                      { style: { marginBottom: "4px" }, extension: "pmml" },
                                      void 0
                                    ),
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
                    (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, void 0),
                    (0, jsx_runtime_1.jsx)(
                      Menu_1.MenuItem,
                      __assign(
                        {
                          description: "Try sample models",
                          itemId: "samplesItemId",
                          direction: "down",
                          drilldownMenu: (0, jsx_runtime_1.jsxs)(
                            Menu_1.DrilldownMenu,
                            __assign(
                              { id: "samplesMenu" },
                              {
                                children: [
                                  (0, jsx_runtime_1.jsx)(
                                    Menu_1.MenuItem,
                                    __assign({ direction: "up" }, { children: "Back" }),
                                    void 0
                                  ),
                                  (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, void 0),
                                  (0, jsx_runtime_1.jsx)(
                                    Menu_1.MenuItem,
                                    __assign(
                                      {
                                        onClick: function () {
                                          return addSample("bpmn");
                                        },
                                        description: "BPMN files are used to generate business workflows.",
                                      },
                                      {
                                        children: (0, jsx_runtime_1.jsxs)(
                                          Flex_1.Flex,
                                          {
                                            children: [
                                              (0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { children: "Sample" }, void 0),
                                              (0, jsx_runtime_1.jsx)(
                                                Flex_1.FlexItem,
                                                {
                                                  children: (0, jsx_runtime_1.jsx)(
                                                    FileLabel_1.FileLabel,
                                                    { extension: "bpmn" },
                                                    void 0
                                                  ),
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
                                  (0, jsx_runtime_1.jsx)(
                                    Menu_1.MenuItem,
                                    __assign(
                                      {
                                        onClick: function () {
                                          return addSample("dmn");
                                        },
                                        description: "DMN files are used to generate decision models",
                                      },
                                      {
                                        children: (0, jsx_runtime_1.jsxs)(
                                          Flex_1.Flex,
                                          {
                                            children: [
                                              (0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { children: "Sample" }, void 0),
                                              (0, jsx_runtime_1.jsx)(
                                                Flex_1.FlexItem,
                                                {
                                                  children: (0, jsx_runtime_1.jsx)(
                                                    FileLabel_1.FileLabel,
                                                    { extension: "dmn" },
                                                    void 0
                                                  ),
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
                                  (0, jsx_runtime_1.jsx)(
                                    Menu_1.MenuItem,
                                    __assign(
                                      {
                                        onClick: function () {
                                          return addSample("pmml");
                                        },
                                        description: "PMML files are used to generate scorecards",
                                      },
                                      {
                                        children: (0, jsx_runtime_1.jsxs)(
                                          Flex_1.Flex,
                                          {
                                            children: [
                                              (0, jsx_runtime_1.jsx)(Flex_1.FlexItem, { children: "Sample" }, void 0),
                                              (0, jsx_runtime_1.jsx)(
                                                Flex_1.FlexItem,
                                                {
                                                  children: (0, jsx_runtime_1.jsx)(
                                                    FileLabel_1.FileLabel,
                                                    { extension: "pmml" },
                                                    void 0
                                                  ),
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
                                ],
                              }
                            ),
                            void 0
                          ),
                        },
                        { children: "Samples" }
                      ),
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, void 0),
                    (0, jsx_runtime_1.jsx)(
                      Menu_1.MenuItem,
                      __assign(
                        {
                          itemId: "importFromUrlItemId",
                          direction: "down",
                          drilldownMenu: (0, jsx_runtime_1.jsxs)(
                            Menu_1.DrilldownMenu,
                            __assign(
                              { id: "importFromUrlMenu" },
                              {
                                children: [
                                  (0, jsx_runtime_1.jsx)(
                                    Menu_1.MenuItem,
                                    __assign({ direction: "up" }, { children: "Back" }),
                                    void 0
                                  ),
                                  (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, void 0),
                                  (0, jsx_runtime_1.jsx)(
                                    Menu_1.MenuInput,
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        ImportFromUrlForm_1.ImportFromUrlForm,
                                        {
                                          importingError: importingError,
                                          allowedTypes: [
                                            ImportableUrlHooks_1.UrlType.FILE,
                                            ImportableUrlHooks_1.UrlType.GIST_FILE,
                                            ImportableUrlHooks_1.UrlType.GITHUB_FILE,
                                          ],
                                          urlInputRef: urlInputRef,
                                          url: url,
                                          onChange: function (url) {
                                            setUrl(url);
                                            setImportingError(undefined);
                                          },
                                          onSubmit: function () {
                                            return importFromUrl(url);
                                          },
                                        },
                                        void 0
                                      ),
                                    },
                                    void 0
                                  ),
                                  (0, jsx_runtime_1.jsx)(
                                    Menu_1.MenuInput,
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        Button_1.Button,
                                        __assign(
                                          {
                                            variant:
                                              url.length > 0
                                                ? Button_1.ButtonVariant.primary
                                                : Button_1.ButtonVariant.secondary,
                                            isLoading: isImporting,
                                            onClick: function () {
                                              return importFromUrl(url);
                                            },
                                          },
                                          { children: "Import" }
                                        ),
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
                        { children: "From URL" }
                      ),
                      void 0
                    ),
                    (0, jsx_runtime_1.jsxs)(
                      Menu_1.MenuItem,
                      __assign(
                        {
                          itemId: "importUploadingItemId",
                          onClick: function () {
                            var _a;
                            return (_a = uploadFileInputRef.current) === null || _a === void 0 ? void 0 : _a.click();
                          },
                        },
                        {
                          children: [
                            "Upload...",
                            (0, jsx_runtime_1.jsx)(
                              "input",
                              {
                                ref: uploadFileInputRef,
                                type: "file",
                                multiple: true,
                                style: { display: "none" },
                                onChange: handleFileUpload,
                              },
                              void 0
                            ),
                          ],
                        }
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
        ),
      }
    ),
    void 0
  );
}
exports.NewFileDropdownMenu = NewFileDropdownMenu;
//# sourceMappingURL=NewFileDropdownMenu.js.map
