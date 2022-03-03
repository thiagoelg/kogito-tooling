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
exports.FilesPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Alert_1 = require("@patternfly/react-core/dist/js/components/Alert");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Card_1 = require("@patternfly/react-core/dist/js/components/Card");
var Toolbar_1 = require("@patternfly/react-core/dist/js/components/Toolbar");
var InputGroup_1 = require("@patternfly/react-core/dist/js/components/InputGroup");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var Select_1 = require("@patternfly/react-core/dist/js/components/Select");
var Form_1 = require("@patternfly/react-core/dist/js/components/Form");
var Gallery_1 = require("@patternfly/react-core/dist/js/layouts/Gallery");
var Bullseye_1 = require("@patternfly/react-core/dist/js/layouts/Bullseye");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var TextInput_1 = require("@patternfly/react-core/dist/js/components/TextInput");
var Title_1 = require("@patternfly/react-core/dist/js/components/Title");
var sort_alpha_down_icon_1 = require("@patternfly/react-icons/dist/js/icons/sort-alpha-down-icon");
var electron = require("electron");
var react_1 = require("react");
var ElectronFile_1 = require("../../common/ElectronFile");
var utils_1 = require("../../common/utils");
var GlobalContext_1 = require("../common/GlobalContext");
var i18n_1 = require("../common/i18n");
var InputFileUrlState;
(function (InputFileUrlState) {
  InputFileUrlState[(InputFileUrlState["VALID"] = 0)] = "VALID";
  InputFileUrlState[(InputFileUrlState["INITIAL"] = 1)] = "INITIAL";
  InputFileUrlState[(InputFileUrlState["INVALID_URL"] = 2)] = "INVALID_URL";
  InputFileUrlState[(InputFileUrlState["NO_FILE_URL"] = 3)] = "NO_FILE_URL";
  InputFileUrlState[(InputFileUrlState["INVALID_EXTENSION"] = 4)] = "INVALID_EXTENSION";
})(InputFileUrlState || (InputFileUrlState = {}));
var ImportFileErrorType;
(function (ImportFileErrorType) {
  ImportFileErrorType[(ImportFileErrorType["NONE"] = 0)] = "NONE";
  ImportFileErrorType[(ImportFileErrorType["FETCH"] = 1)] = "FETCH";
  ImportFileErrorType[(ImportFileErrorType["RESPONSE"] = 2)] = "RESPONSE";
})(ImportFileErrorType || (ImportFileErrorType = {}));
var ALERT_AUTO_CLOSE_TIMEOUT = 3000;
var FileTypeFilter;
(function (FileTypeFilter) {
  FileTypeFilter["ALL"] = "All";
  FileTypeFilter["BPMN"] = "BPMN";
  FileTypeFilter["DMN"] = "DMN";
})(FileTypeFilter || (FileTypeFilter = {}));
var typeFilterOptions = [{ value: FileTypeFilter.ALL }, { value: FileTypeFilter.BPMN }, { value: FileTypeFilter.DMN }];
function FilesPage(props) {
  var context = (0, react_1.useContext)(GlobalContext_1.GlobalContext);
  var _a = __read((0, react_1.useState)([]), 2),
    lastOpenedFiles = _a[0],
    setLastOpenedFiles = _a[1];
  var i18n = (0, i18n_1.useDesktopI18n)().i18n;
  var _b = __read((0, react_1.useState)(""), 2),
    url = _b[0],
    setURL = _b[1];
  var _c = __read((0, react_1.useState)({ type: ImportFileErrorType.NONE }), 2),
    importFileErrorDetails = _c[0],
    setImportFileErrorDetails = _c[1];
  var _d = __read((0, react_1.useState)({ isExpanded: false, value: FileTypeFilter.ALL }), 2),
    typeFilterSelect = _d[0],
    setTypeFilterSelect = _d[1];
  var _e = __read((0, react_1.useState)(""), 2),
    searchFilter = _e[0],
    setSearchFilter = _e[1];
  var _f = __read((0, react_1.useState)(false), 2),
    sortAlphaFilter = _f[0],
    setSortAlphaFilter = _f[1];
  var _g = __read((0, react_1.useState)(InputFileUrlState.INITIAL), 2),
    inputFileUrlState = _g[0],
    setInputFileUrlState = _g[1];
  var isInputUrlValid = (0, react_1.useMemo)(
    function () {
      return inputFileUrlState === InputFileUrlState.VALID || inputFileUrlState === InputFileUrlState.INITIAL;
    },
    [inputFileUrlState]
  );
  var messageForStateInputUrl = (0, react_1.useMemo)(
    function () {
      switch (inputFileUrlState) {
        case InputFileUrlState.INITIAL:
          return i18n.filesPage.openUrl.initial;
        case InputFileUrlState.INVALID_EXTENSION:
          return i18n.filesPage.openUrl.invalidExtension;
        case InputFileUrlState.INVALID_URL:
          return i18n.filesPage.openUrl.invalidUrl;
        case InputFileUrlState.NO_FILE_URL:
          return i18n.filesPage.openUrl.notFoundUrl;
        default:
          return "";
      }
    },
    [inputFileUrlState, i18n]
  );
  var closeImportFileErrorAlert = (0, react_1.useCallback)(function () {
    return setImportFileErrorDetails({ type: ImportFileErrorType.NONE });
  }, []);
  var filteredLastOpenedFiles = (0, react_1.useMemo)(
    function () {
      if (lastOpenedFiles.filter === undefined) {
        return [];
      }
      var filteredFiles = lastOpenedFiles
        .filter(function (file) {
          var _a;
          return (_a = (0, utils_1.removeDirectories)(file.filePath)) === null || _a === void 0
            ? void 0
            : _a.toUpperCase().includes(searchFilter.toUpperCase());
        })
        .filter(function (file) {
          var fileExtension = (0, utils_1.extractFileExtension)(file.filePath);
          return (
            typeFilterSelect.value === FileTypeFilter.ALL ||
            (fileExtension === null || fileExtension === void 0
              ? void 0
              : fileExtension.toLowerCase().includes(typeFilterSelect.value.toLowerCase()))
          );
        });
      if (sortAlphaFilter) {
        return filteredFiles.sort(function (file1, file2) {
          var f1 = (0, utils_1.removeDirectories)(file1.filePath).toLowerCase();
          var f2 = (0, utils_1.removeDirectories)(file2.filePath).toLowerCase();
          if (f1 < f2) {
            return -1;
          } else if (f1 > f2) {
            return 1;
          }
          return 0;
        });
      }
      return filteredFiles;
    },
    [lastOpenedFiles, searchFilter, typeFilterSelect, sortAlphaFilter]
  );
  var onSelectTypeFilter = (0, react_1.useCallback)(function (event, selection) {
    setTypeFilterSelect({
      isExpanded: false,
      value: selection,
    });
  }, []);
  var onToggleTypeFilter = (0, react_1.useCallback)(
    function (isExpanded) {
      setTypeFilterSelect({
        isExpanded: isExpanded,
        value: typeFilterSelect.value,
      });
    },
    [typeFilterSelect]
  );
  var onChangeSearchFilter = (0, react_1.useCallback)(function (newValue) {
    setSearchFilter(newValue);
  }, []);
  var validateFileInput = (0, react_1.useCallback)(function (fileUrl) {
    var urlObject;
    try {
      urlObject = new URL(fileUrl);
    } catch (e) {
      setInputFileUrlState(InputFileUrlState.INVALID_URL);
      return;
    }
    var fileType = (0, utils_1.extractFileExtension)(urlObject.pathname);
    if (!fileType) {
      setInputFileUrlState(InputFileUrlState.NO_FILE_URL);
    } else if (!context.editorEnvelopeLocator.hasMappingFor(urlObject.pathname)) {
      setInputFileUrlState(InputFileUrlState.INVALID_EXTENSION);
    } else {
      setInputFileUrlState(InputFileUrlState.VALID);
    }
  }, []);
  var inputFileChanged = (0, react_1.useCallback)(function (fileUrl) {
    setURL(fileUrl);
    validateFileInput(fileUrl);
  }, []);
  var importFileByUrl = (0, react_1.useCallback)(
    function () {
      if (isInputUrlValid && inputFileUrlState !== InputFileUrlState.INITIAL) {
        fetch(url)
          .then(function (response) {
            if (response.ok) {
              response.text().then(function (content) {
                var file = {
                  filePath: ElectronFile_1.UNSAVED_FILE_NAME,
                  fileType: (0, utils_1.extractFileExtension)(url),
                  fileContent: content,
                };
                electron.ipcRenderer.send("setFileMenusEnabled", { enabled: true });
                props.openFile(file);
              });
            } else {
              setImportFileErrorDetails({
                type: ImportFileErrorType.RESPONSE,
                statusCode: response.status,
                description: response.statusText,
              });
            }
          })
          .catch(function (error) {
            setImportFileErrorDetails({ type: ImportFileErrorType.FETCH, description: error.toString() });
          });
      }
    },
    [isInputUrlValid, inputFileUrlState, url, props.openFile]
  );
  var importFileByUrlFormSubmit = (0, react_1.useCallback)(
    function (e) {
      e.preventDefault();
      e.stopPropagation();
      importFileByUrl();
    },
    [url]
  );
  var onInputFileUrlBlur = (0, react_1.useCallback)(
    function () {
      if (url.trim() === "") {
        setInputFileUrlState(InputFileUrlState.INITIAL);
      }
    },
    [url]
  );
  (0, react_1.useEffect)(function () {
    electron.ipcRenderer.on("returnLastOpenedFiles", function (event, data) {
      setLastOpenedFiles(data.lastOpenedFiles);
    });
    electron.ipcRenderer.send("requestLastOpenedFiles");
    return function () {
      electron.ipcRenderer.removeAllListeners("returnLastOpenedFiles");
    };
  }, []);
  (0, react_1.useEffect)(
    function () {
      if (importFileErrorDetails.type !== ImportFileErrorType.NONE) {
        var autoCloseImportFileErrorAlert_1 = setTimeout(closeImportFileErrorAlert, ALERT_AUTO_CLOSE_TIMEOUT);
        return function () {
          return clearInterval(autoCloseImportFileErrorAlert_1);
        };
      }
      return function () {};
    },
    [importFileErrorDetails, closeImportFileErrorAlert]
  );
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        importFileErrorDetails.type === ImportFileErrorType.RESPONSE &&
          (0, jsx_runtime_1.jsx)(
            "div",
            __assign(
              { className: "kogito--alert-container" },
              {
                children: (0, jsx_runtime_1.jsxs)(
                  Alert_1.Alert,
                  __assign(
                    {
                      variant: Alert_1.AlertVariant.danger,
                      title: i18n.filesPage.alerts.errorFetchingFile,
                      actionClose: (0, jsx_runtime_1.jsx)(
                        Alert_1.AlertActionCloseButton,
                        { onClose: closeImportFileErrorAlert },
                        void 0
                      ),
                    },
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)("br", {}, void 0),
                        (0, jsx_runtime_1.jsx)("b", { children: "".concat(i18n.filesPage.errorDetails, ": ") }, void 0),
                        importFileErrorDetails.statusCode,
                        importFileErrorDetails.statusCode && importFileErrorDetails.description && " - ",
                        importFileErrorDetails.description,
                      ],
                    }
                  ),
                  void 0
                ),
              }
            ),
            void 0
          ),
        importFileErrorDetails.type === ImportFileErrorType.FETCH &&
          (0, jsx_runtime_1.jsx)(
            "div",
            __assign(
              { className: "kogito--alert-container" },
              {
                children: (0, jsx_runtime_1.jsxs)(
                  Alert_1.Alert,
                  __assign(
                    {
                      variant: Alert_1.AlertVariant.danger,
                      title: i18n.filesPage.alerts.unexpectedErrorFetchingFile,
                      actionClose: (0, jsx_runtime_1.jsx)(
                        Alert_1.AlertActionCloseButton,
                        { onClose: closeImportFileErrorAlert },
                        void 0
                      ),
                    },
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)("br", {}, void 0),
                        (0, jsx_runtime_1.jsx)("b", { children: "".concat(i18n.filesPage.errorDetails, ": ") }, void 0),
                        importFileErrorDetails.description,
                      ],
                    }
                  ),
                  void 0
                ),
              }
            ),
            void 0
          ),
        (0, jsx_runtime_1.jsxs)(
          Page_1.PageSection,
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                "div",
                __assign(
                  { className: "kogito--desktop__actions-title" },
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      Text_1.TextContent,
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Title_1.Title,
                          __assign({ headingLevel: "h1" }, { children: i18n.filesPage.files.title }),
                          void 0
                        ),
                      },
                      void 0
                    ),
                  }
                ),
                void 0
              ),
              (0, jsx_runtime_1.jsxs)(
                Gallery_1.Gallery,
                __assign(
                  {
                    hasGutter: true,
                    className: "kogito--desktop__actions-gallery",
                    "data-ouia-component-id": "new-file-gallery",
                  },
                  {
                    children: [
                      (0, jsx_runtime_1.jsxs)(
                        Card_1.Card,
                        __assign(
                          {
                            className: "kogito--desktop__actions-card",
                            component: "article",
                            isHoverable: false,
                            isCompact: true,
                            onClick: function () {
                              return electron.ipcRenderer.send("createNewFile", { type: "bpmn" });
                            },
                            ouiaId: "new-blank-bpmn-file-card",
                          },
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                Card_1.CardHeader,
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    Title_1.Title,
                                    __assign(
                                      { size: "xl", headingLevel: "h3", className: "pf-u-mb-md" },
                                      { children: i18n.filesPage.files.bpmn.blank }
                                    ),
                                    void 0
                                  ),
                                },
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                Card_1.CardBody,
                                __assign(
                                  { component: "div", isFilled: true, className: "kogito--desktop__actions-card-body" },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      "img",
                                      {
                                        src: "images/file_icon_regular.svg",
                                        alt: "file icon",
                                        className: "kogito--desktop__actions-img",
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
                      (0, jsx_runtime_1.jsxs)(
                        Card_1.Card,
                        __assign(
                          {
                            className: "kogito--desktop__actions-card",
                            component: "article",
                            isHoverable: false,
                            isCompact: true,
                            onClick: function () {
                              return electron.ipcRenderer.send("createNewFile", { type: "dmn" });
                            },
                            ouiaId: "new-blank-dmn-file-card",
                          },
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                Card_1.CardHeader,
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    Title_1.Title,
                                    __assign(
                                      { size: "xl", headingLevel: "h3", className: "pf-u-mb-md" },
                                      { children: i18n.filesPage.files.dmn.blank }
                                    ),
                                    void 0
                                  ),
                                },
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                Card_1.CardBody,
                                __assign(
                                  { component: "div", isFilled: true, className: "kogito--desktop__actions-card-body" },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      "img",
                                      {
                                        src: "images/file_icon_regular.svg",
                                        alt: "file icon",
                                        className: "kogito--desktop__actions-img",
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
                      (0, jsx_runtime_1.jsxs)(
                        Card_1.Card,
                        __assign(
                          {
                            className: "kogito--desktop__actions-card",
                            component: "article",
                            isHoverable: false,
                            isCompact: true,
                            onClick: function () {
                              return electron.ipcRenderer.send("openSample", { type: "bpmn" });
                            },
                            ouiaId: "new-sample-bpmn-file-card",
                          },
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                Card_1.CardHeader,
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    Title_1.Title,
                                    __assign(
                                      { size: "xl", headingLevel: "h3", className: "pf-u-mb-md" },
                                      { children: i18n.filesPage.files.bpmn.sample }
                                    ),
                                    void 0
                                  ),
                                },
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                Card_1.CardBody,
                                __assign(
                                  { component: "div", isFilled: true, className: "kogito--desktop__actions-card-body" },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      "img",
                                      {
                                        src: "images/sample_file_icon_regular.svg",
                                        alt: "file icon",
                                        className: "kogito--desktop__actions-img",
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
                      (0, jsx_runtime_1.jsxs)(
                        Card_1.Card,
                        __assign(
                          {
                            className: "kogito--desktop__actions-card",
                            component: "article",
                            isHoverable: false,
                            isCompact: true,
                            onClick: function () {
                              return electron.ipcRenderer.send("openSample", { type: "dmn" });
                            },
                            ouiaId: "new-sample-dmn-file-card",
                          },
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                Card_1.CardHeader,
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    Title_1.Title,
                                    __assign(
                                      { size: "xl", headingLevel: "h3", className: "pf-u-mb-md" },
                                      { children: i18n.filesPage.files.dmn.sample }
                                    ),
                                    void 0
                                  ),
                                },
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                Card_1.CardBody,
                                __assign(
                                  { component: "div", isFilled: true, className: "kogito--desktop__actions-card-body" },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      "img",
                                      {
                                        src: "images/sample_file_icon_regular.svg",
                                        alt: "file icon",
                                        className: "kogito--desktop__actions-img",
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
                      (0, jsx_runtime_1.jsxs)(
                        Card_1.Card,
                        __assign(
                          { className: "kogito--desktop__actions-card--wide", ouiaId: "open-from-source-card" },
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                Card_1.CardHeader,
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    Title_1.Title,
                                    __assign(
                                      { size: "xl", headingLevel: "h3" },
                                      { children: i18n.filesPage.openUrl.openFromSource }
                                    ),
                                    void 0
                                  ),
                                },
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                Card_1.CardBody,
                                {
                                  children: (0, jsx_runtime_1.jsxs)(
                                    Text_1.TextContent,
                                    {
                                      children: [
                                        (0, jsx_runtime_1.jsx)(
                                          Text_1.Text,
                                          __assign(
                                            { component: Text_1.TextVariants.p },
                                            { children: i18n.filesPage.openUrl.description }
                                          ),
                                          void 0
                                        ),
                                        (0, jsx_runtime_1.jsx)(
                                          Form_1.Form,
                                          __assign(
                                            { onSubmit: importFileByUrlFormSubmit, disabled: !isInputUrlValid },
                                            {
                                              children: (0, jsx_runtime_1.jsx)(
                                                Form_1.FormGroup,
                                                __assign(
                                                  {
                                                    label: "URL",
                                                    fieldId: "url-text-input",
                                                    validated: isInputUrlValid ? "default" : "error",
                                                    helperText: "",
                                                    helperTextInvalid: messageForStateInputUrl,
                                                  },
                                                  {
                                                    children: (0, jsx_runtime_1.jsx)(
                                                      TextInput_1.TextInput,
                                                      {
                                                        isRequired: true,
                                                        onBlur: onInputFileUrlBlur,
                                                        validated: isInputUrlValid ? "default" : "error",
                                                        value: url,
                                                        onChange: inputFileChanged,
                                                        type: "url",
                                                        id: "url-text-input",
                                                        name: "urlText",
                                                        "aria-describedby": "url-text-input-helper",
                                                        placeholder: "URL",
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
                                      ],
                                    },
                                    void 0
                                  ),
                                },
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                Card_1.CardFooter,
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    Button_1.Button,
                                    __assign(
                                      {
                                        variant: "secondary",
                                        onClick: importFileByUrl,
                                        ouiaId: "open-from-source-button",
                                      },
                                      { children: i18n.filesPage.openUrl.openFromSource }
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
                    ],
                  }
                ),
                void 0
              ),
            ],
          },
          void 0
        ),
        (0, jsx_runtime_1.jsxs)(
          Page_1.PageSection,
          __assign(
            { variant: "light" },
            {
              children: [
                (0, jsx_runtime_1.jsx)(
                  Title_1.Title,
                  __assign(
                    { size: "2xl", headingLevel: "h3", "data-ouia-component-id": "recent-files-section-title" },
                    { children: i18n.filesPage.recent.title }
                  ),
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(
                  Toolbar_1.Toolbar,
                  {
                    children: (0, jsx_runtime_1.jsxs)(
                      Toolbar_1.ToolbarContent,
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)(
                            Toolbar_1.ToolbarItem,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Select_1.Select,
                                __assign(
                                  {
                                    onSelect: onSelectTypeFilter,
                                    onToggle: onToggleTypeFilter,
                                    isOpen: typeFilterSelect.isExpanded,
                                    selections: typeFilterSelect.value,
                                    width: "7em",
                                    ouiaId: "file-filter-select",
                                  },
                                  {
                                    children: typeFilterOptions.map(function (option, index) {
                                      return (0,
                                      jsx_runtime_1.jsx)(Select_1.SelectOption, { value: option.value }, index);
                                    }),
                                  }
                                ),
                                void 0
                              ),
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)(
                            Toolbar_1.ToolbarItem,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                InputGroup_1.InputGroup,
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    TextInput_1.TextInput,
                                    {
                                      name: "searchInput",
                                      id: "searchInput",
                                      type: "search",
                                      "aria-label": "search input example",
                                      placeholder: "Search",
                                      onChange: onChangeSearchFilter,
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
                            Toolbar_1.ToolbarItem,
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Button_1.Button,
                                __assign(
                                  {
                                    "data-testid": "orderAlphabeticallyButton",
                                    variant: "plain",
                                    "aria-label": "sort file view",
                                    className: sortAlphaFilter ? "kogito--filter-btn-pressed" : "kogito--filter-btn",
                                    onClick: function () {
                                      return setSortAlphaFilter(!sortAlphaFilter);
                                    },
                                    ouiaId: "order-alpha-button",
                                  },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      sort_alpha_down_icon_1.SortAlphaDownIcon,
                                      {},
                                      void 0
                                    ),
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
                  },
                  void 0
                ),
              ],
            }
          ),
          void 0
        ),
        (0, jsx_runtime_1.jsxs)(
          Page_1.PageSection,
          __assign(
            { isFilled: true },
            {
              children: [
                filteredLastOpenedFiles.length === 0 &&
                  (0, jsx_runtime_1.jsx)(Bullseye_1.Bullseye, { children: i18n.filesPage.recent.noFilesYet }, void 0),
                filteredLastOpenedFiles.length > 0 &&
                  (0, jsx_runtime_1.jsx)(
                    Gallery_1.Gallery,
                    __assign(
                      { hasGutter: true, className: "kogito-desktop__file-gallery" },
                      {
                        children: filteredLastOpenedFiles.map(function (file) {
                          return (0, jsx_runtime_1.jsx)(
                            Tooltip_1.Tooltip,
                            __assign(
                              { content: (0, jsx_runtime_1.jsx)("div", { children: file.filePath }, void 0) },
                              {
                                children: (0, jsx_runtime_1.jsxs)(
                                  Card_1.Card,
                                  __assign(
                                    {
                                      isCompact: true,
                                      onClick: function () {
                                        return props.openFileByPath(file.filePath);
                                      },
                                      className: "kogito--desktop__files-card",
                                      ouiaId: (0, utils_1.removeDirectories)(file.filePath) + "-recent-file-card",
                                    },
                                    {
                                      children: [
                                        (0, jsx_runtime_1.jsx)(
                                          Card_1.CardBody,
                                          {
                                            children: (0, jsx_runtime_1.jsx)(
                                              Bullseye_1.Bullseye,
                                              {
                                                children: (0, jsx_runtime_1.jsx)(
                                                  "div",
                                                  {
                                                    className: "kogito--desktop__file-img",
                                                    style: {
                                                      backgroundImage: 'url("data:image/svg+xml,'.concat(
                                                        encodeURIComponent(file.preview),
                                                        '")'
                                                      ),
                                                    },
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
                                          Card_1.CardFooter,
                                          {
                                            children: (0, jsx_runtime_1.jsx)(
                                              Title_1.Title,
                                              __assign(
                                                {
                                                  headingLevel: "h3",
                                                  size: "md",
                                                  className: "kogito--desktop__filename",
                                                },
                                                { children: (0, utils_1.removeDirectories)(file.filePath) }
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
                              }
                            ),
                            file.filePath
                          );
                        }),
                      }
                    ),
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
  );
}
exports.FilesPage = FilesPage;
//# sourceMappingURL=FilesPage.js.map
