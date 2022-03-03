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
exports.UploadCard = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var path_1 = require("path");
var WorkspacesContext_1 = require("../workspace/WorkspacesContext");
var react_dropzone_1 = require("react-dropzone");
var Bullseye_1 = require("@patternfly/react-core/dist/js/layouts/Bullseye");
var Card_1 = require("@patternfly/react-core/dist/js/components/Card");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Hooks_1 = require("../navigation/Hooks");
var react_router_1 = require("react-router");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Spinner_1 = require("@patternfly/react-core/dist/js/components/Spinner");
var upload_icon_1 = require("@patternfly/react-icons/dist/js/icons/upload-icon");
var Divider_1 = require("@patternfly/react-core/dist/js/components/Divider");
var Split_1 = require("@patternfly/react-core/dist/js/layouts/Split");
var UploadType;
(function (UploadType) {
  UploadType[(UploadType["NONE"] = 0)] = "NONE";
  UploadType[(UploadType["FILES"] = 1)] = "FILES";
  UploadType[(UploadType["FOLDER"] = 2)] = "FOLDER";
  UploadType[(UploadType["DND"] = 3)] = "DND";
})(UploadType || (UploadType = {}));
function UploadCard(props) {
  var _this = this;
  var routes = (0, Hooks_1.useRoutes)();
  var history = (0, react_router_1.useHistory)();
  var workspaces = (0, WorkspacesContext_1.useWorkspaces)();
  var _a = __read((0, react_1.useState)(UploadType.NONE), 2),
    uploading = _a[0],
    setUploading = _a[1];
  var createWorkspaceFromUploadedFolder = (0, react_1.useCallback)(
    function (type, acceptedFiles) {
      return __awaiter(_this, void 0, void 0, function () {
        function resolveRelativePath(args) {
          if (!args.file.path) {
            return args.file.name;
          }
          if (args.keepRootDirs) {
            return !(0, path_1.isAbsolute)(args.file.path)
              ? args.file.path
              : args.file.path.substring(args.file.path.indexOf("/") + 1);
          }
          return (0, path_1.isAbsolute)(args.file.path)
            ? args.file.path.substring(args.file.path.indexOf("/", 1) + 1)
            : args.file.path.substring(args.file.path.indexOf("/") + 1);
        }
        var uploadedRootDirs, localFiles, preferredName, _a, workspace, suggestedFirstFile;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              if (acceptedFiles.length === 0) {
                return [2];
              }
              uploadedRootDirs = acceptedFiles.reduce(function (acc, file) {
                if (!file.path) {
                  return acc.add(file.name);
                }
                return acc.add(
                  (0, path_1.isAbsolute)(file.path)
                    ? file.path.substring(1, file.path.indexOf("/", 1))
                    : file.path.substring(0, file.path.indexOf("/"))
                );
              }, new Set());
              localFiles = Array.from(acceptedFiles !== null && acceptedFiles !== void 0 ? acceptedFiles : []).map(
                function (file) {
                  var path = resolveRelativePath({
                    file: file,
                    keepRootDirs: uploadedRootDirs.size > 1,
                  });
                  return {
                    path: path,
                    getFileContents: function () {
                      return new Promise(function (res) {
                        var reader = new FileReader();
                        reader.onload = function (event) {
                          var _a;
                          return res((_a = event.target) === null || _a === void 0 ? void 0 : _a.result);
                        };
                        reader.readAsArrayBuffer(file);
                      });
                    },
                  };
                }
              );
              preferredName =
                uploadedRootDirs.size !== 1
                  ? undefined
                  : __spreadArray([], __read(uploadedRootDirs), false)[0] === localFiles[0].path
                  ? undefined
                  : __spreadArray([], __read(uploadedRootDirs), false)[0];
              setUploading(type);
              _b.label = 1;
            case 1:
              _b.trys.push([1, , 3, 4]);
              return [
                4,
                workspaces.createWorkspaceFromLocal({
                  useInMemoryFs: true,
                  localFiles: localFiles,
                  preferredName: preferredName,
                }),
              ];
            case 2:
              (_a = _b.sent()), (workspace = _a.workspace), (suggestedFirstFile = _a.suggestedFirstFile);
              if (!suggestedFirstFile) {
                return [2, props.expandWorkspace(workspace.workspaceId)];
              }
              history.push({
                pathname: routes.workspaceWithFilePath.path({
                  workspaceId: workspace.workspaceId,
                  fileRelativePath: suggestedFirstFile.relativePathWithoutExtension,
                  extension: suggestedFirstFile.extension,
                }),
              });
              return [3, 4];
            case 3:
              return [7];
            case 4:
              return [2];
          }
        });
      });
    },
    [props, workspaces, history, routes]
  );
  var _b = (0, react_dropzone_1.useDropzone)({
      onDrop: function (acceptedFiles) {
        return createWorkspaceFromUploadedFolder(UploadType.DND, acceptedFiles);
      },
      noClick: true,
      noKeyboard: true,
      noDragEventsBubbling: false,
    }),
    acceptedFiles = _b.acceptedFiles,
    getRootProps = _b.getRootProps,
    getInputProps = _b.getInputProps,
    isDragActive = _b.isDragActive,
    draggedFiles = _b.draggedFiles;
  var uploadFilesInputRef = (0, react_1.useRef)(null);
  var uploadFolderInputRef = (0, react_1.useRef)(null);
  return (0, jsx_runtime_1.jsxs)(
    "div",
    __assign(
      {},
      getRootProps(),
      { className: "dropzone", style: { position: "relative" } },
      {
        children: [
          (isDragActive || uploading === UploadType.DND) &&
            (0, jsx_runtime_1.jsxs)(
              "div",
              __assign(
                {
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    margin: "8px",
                    width: "calc(100% - 16px)",
                    height: "calc(100% - 16px)",
                    backdropFilter: "blur(2px)",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    border: "5px  dashed lightgray",
                    borderRadius: "16px",
                    pointerEvents: "none",
                    zIndex: 999,
                  },
                },
                {
                  children: [
                    uploading === UploadType.DND &&
                      (0, jsx_runtime_1.jsx)(
                        Bullseye_1.Bullseye,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsxs)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.h3 },
                                  {
                                    children: [
                                      (0, jsx_runtime_1.jsx)(Spinner_1.Spinner, { size: "md" }, void 0),
                                      "\u00A0\u00A0 Uploading ",
                                      acceptedFiles.length,
                                      " file(s).",
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
                    isDragActive &&
                      (0, jsx_runtime_1.jsx)(
                        Bullseye_1.Bullseye,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.TextContent,
                            {
                              children: (0, jsx_runtime_1.jsxs)(
                                Text_1.Text,
                                __assign(
                                  { component: Text_1.TextVariants.h3 },
                                  { children: ["Upload ", draggedFiles.length, " items(s)."] }
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
                }
              ),
              void 0
            ),
          (0, jsx_runtime_1.jsx)("input", __assign({ id: "upload-field" }, getInputProps()), void 0),
          (0, jsx_runtime_1.jsxs)(
            Card_1.Card,
            __assign(
              { isFullHeight: true, isLarge: true, isPlain: true },
              {
                children: [
                  (0, jsx_runtime_1.jsx)(
                    Card_1.CardTitle,
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        Text_1.TextContent,
                        {
                          children: (0, jsx_runtime_1.jsxs)(
                            Text_1.Text,
                            __assign(
                              { component: Text_1.TextVariants.h2 },
                              {
                                children: [
                                  (0, jsx_runtime_1.jsx)(upload_icon_1.UploadIcon, {}, void 0),
                                  "\u00A0\u00A0Upload",
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
                  (0, jsx_runtime_1.jsx)(
                    Card_1.CardBody,
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        Text_1.TextContent,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            Text_1.Text,
                            __assign(
                              { component: Text_1.TextVariants.p },
                              { children: "Drag & drop files and folders here..." }
                            ),
                            void 0
                          ),
                        },
                        void 0
                      ),
                    },
                    void 0
                  ),
                  (0, jsx_runtime_1.jsxs)(
                    Card_1.CardFooter,
                    {
                      children: [
                        (0, jsx_runtime_1.jsxs)(
                          Split_1.Split,
                          __assign(
                            { isWrappable: false, style: { alignItems: "center" } },
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  Split_1.SplitItem,
                                  __assign(
                                    { isFilled: true },
                                    { children: (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, void 0) }
                                  ),
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  Split_1.SplitItem,
                                  __assign({ style: { padding: "0 16px 0 16px", color: "gray" } }, { children: "or" }),
                                  void 0
                                ),
                                (0, jsx_runtime_1.jsx)(
                                  Split_1.SplitItem,
                                  __assign(
                                    { isFilled: true },
                                    { children: (0, jsx_runtime_1.jsx)(Divider_1.Divider, {}, void 0) }
                                  ),
                                  void 0
                                ),
                              ],
                            }
                          ),
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)("br", {}, void 0),
                        (0, jsx_runtime_1.jsx)(
                          Button_1.Button,
                          __assign(
                            {
                              style: { paddingLeft: 0 },
                              iconPosition: "right",
                              icon:
                                uploading === UploadType.FILES
                                  ? (0, jsx_runtime_1.jsx)(
                                      Spinner_1.Spinner,
                                      { size: "md", style: { marginLeft: "8px" } },
                                      void 0
                                    )
                                  : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0),
                              variant: Button_1.ButtonVariant.link,
                              onClick: function () {
                                var _a;
                                return (_a = uploadFilesInputRef.current) === null || _a === void 0
                                  ? void 0
                                  : _a.click();
                              },
                            },
                            { children: "Select files..." }
                          ),
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          "input",
                          {
                            type: "file",
                            ref: uploadFilesInputRef,
                            style: { display: "none" },
                            multiple: true,
                            onChange: function (e) {
                              var _a;
                              return createWorkspaceFromUploadedFolder(
                                UploadType.FILES,
                                Array.from((_a = e.target.files) !== null && _a !== void 0 ? _a : [])
                              );
                            },
                          },
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)("br", {}, void 0),
                        (0, jsx_runtime_1.jsx)(
                          Button_1.Button,
                          __assign(
                            {
                              style: { paddingLeft: 0 },
                              iconPosition: "right",
                              icon:
                                uploading === UploadType.FOLDER
                                  ? (0, jsx_runtime_1.jsx)(
                                      Spinner_1.Spinner,
                                      { size: "md", style: { marginLeft: "8px" } },
                                      void 0
                                    )
                                  : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0),
                              variant: Button_1.ButtonVariant.link,
                              onClick: function () {
                                var _a;
                                return (_a = uploadFolderInputRef.current) === null || _a === void 0
                                  ? void 0
                                  : _a.click();
                              },
                            },
                            { children: "Select folder..." }
                          ),
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          "input",
                          {
                            type: "file",
                            ref: uploadFolderInputRef,
                            style: { display: "none" },
                            webkitdirectory: "",
                            onChange: function (e) {
                              var _a;
                              var files = Array.from((_a = e.target.files) !== null && _a !== void 0 ? _a : []).map(
                                function (f) {
                                  f.path = f.webkitRelativePath;
                                  return f;
                                }
                              );
                              return createWorkspaceFromUploadedFolder(UploadType.FOLDER, files);
                            },
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
        ],
      }
    ),
    void 0
  );
}
exports.UploadCard = UploadCard;
//# sourceMappingURL=UploadCard.js.map
