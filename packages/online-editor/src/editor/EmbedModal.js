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
exports.EmbedModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Modal_1 = require("@patternfly/react-core/dist/js/components/Modal");
var Radio_1 = require("@patternfly/react-core/dist/js/components/Radio");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var ClipboardCopy_1 = require("@patternfly/react-core/dist/js/components/ClipboardCopy");
var i18n_1 = require("../i18n");
var WorkspaceOrigin_1 = require("../workspace/model/WorkspaceOrigin");
var Stack_1 = require("@patternfly/react-core/dist/js/layouts/Stack");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var editorStandaloneClassMapping = new Map([
  [
    "bpmn",
    { libraryName: "BpmnEditor", scriptUrl: "https://kiegroup.github.io/kogito-online/standalone/bpmn/index.js" },
  ],
  [
    "bpmn2",
    { libraryName: "BpmnEditor", scriptUrl: "https://kiegroup.github.io/kogito-online/standalone/bpmn/index.js" },
  ],
  ["dmn", { libraryName: "DmnEditor", scriptUrl: "https://kiegroup.github.io/kogito-online/standalone/dmn/index.js" }],
]);
var ContentSource;
(function (ContentSource) {
  ContentSource[(ContentSource["CURRENT_CONTENT"] = 0)] = "CURRENT_CONTENT";
  ContentSource[(ContentSource["GIST"] = 1)] = "GIST";
})(ContentSource || (ContentSource = {}));
function EmbedModal(props) {
  var _a = __read((0, react_1.useState)(""), 2),
    embedCode = _a[0],
    setEmbedCode = _a[1];
  var _b = __read(
      (0, react_1.useState)(
        props.workspace.origin.kind === WorkspaceOrigin_1.WorkspaceKind.GITHUB_GIST
          ? ContentSource.GIST
          : ContentSource.CURRENT_CONTENT
      ),
      2
    ),
    contentSource = _b[0],
    setContentSource = _b[1];
  var _c = __read((0, react_1.useState)(""), 2),
    editorContent = _c[0],
    setEditorContent = _c[1];
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  (0, react_1.useEffect)(
    function () {
      if (props.isOpen) {
        props.workspaceFile.getFileContentsAsString().then(setEditorContent);
      }
    },
    [props.workspaceFile, props.isOpen]
  );
  var isGist = (0, react_1.useMemo)(
    function () {
      return props.workspace.origin.kind === WorkspaceOrigin_1.WorkspaceKind.GITHUB_GIST;
    },
    [props.workspace]
  );
  var getCurrentContentScript = (0, react_1.useCallback)(function (content, libraryName) {
    var fileContent = content.replace(/(\r\n|\n|\r)/gm, "");
    return "\n<script>\n  "
      .concat(libraryName, ".open({container: document.body, readOnly: true, initialContent: '")
      .concat(fileContent, '\', origin: "*" })\n</script>\n');
  }, []);
  var getGithubGistScript = (0, react_1.useCallback)(
    function (libraryName) {
      var gistId = props.workspace.origin.url.toString().split("/").pop().replace(".git", "");
      return '\n<script type="module">\n  import {Octokit} from "https://cdn.skypack.dev/@octokit/rest";\n  async function main() {\n    const gist = await new Octokit().gists.get({ gist_id: "'
        .concat(gistId, '" });\n    ')
        .concat(
          libraryName,
          '.open({\n      container: document.body,\n      readOnly: true,\n      initialContent: await fetch(gist.data.files["'
        )
        .concat(
          props.workspaceFile.relativePath,
          '"].raw_url).then(r => r.text()),\n      origin: "*",\n      resources: new Map([...Object.keys(gist.data.files)].map(n => ([n, { contentType: "text", content: fetch(gist.data.files[n].raw_url).then(r => r.text()) }])))\n    });\n  }\n  main();\n</script>\n'
        );
    },
    [props.workspace, props.workspaceFile]
  );
  var getStandaloneEditorIframeSrcdoc = (0, react_1.useCallback)(function (contentScript, standaloneEditorLibraryUrl) {
    return '<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <title></title>\n      <style>\n        html,\n        body,\n        iframe {\n          margin: 0;\n          border: 0;\n          padding: 0;\n          height: 100%;\n          width: 100%;\n        }\n      </style>\n      <script src="'
      .concat(standaloneEditorLibraryUrl, '"></script>\n    </head>\n    <body>\n      ')
      .concat(contentScript, "\n    </body>\n    </html>");
  }, []);
  (0, react_1.useEffect)(
    function () {
      if (
        props.workspaceFile.extension !== "bpmn" &&
        props.workspaceFile.extension !== "bpmn2" &&
        props.workspaceFile.extension !== "dmn"
      ) {
        return;
      }
      var iframe = document.createElement("iframe");
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.style.border = "0";
      var _a = editorStandaloneClassMapping.get(props.workspaceFile.extension),
        libraryName = _a.libraryName,
        scriptUrl = _a.scriptUrl;
      var script =
        contentSource === ContentSource.CURRENT_CONTENT
          ? getCurrentContentScript(editorContent, libraryName)
          : getGithubGistScript(libraryName);
      iframe.srcdoc = getStandaloneEditorIframeSrcdoc(script, scriptUrl);
      setEmbedCode(iframe.outerHTML);
    },
    [
      contentSource,
      editorContent,
      getCurrentContentScript,
      getGithubGistScript,
      getStandaloneEditorIframeSrcdoc,
      props.workspaceFile,
    ]
  );
  return (0, jsx_runtime_1.jsx)(
    Modal_1.Modal,
    __assign(
      {
        variant: Modal_1.ModalVariant.medium,
        "aria-label": "Embed the editor and content in your page",
        isOpen: props.isOpen,
        onClose: props.onClose,
        title: i18n.embedModal.title,
        description: i18n.embedModal.description,
      },
      {
        children: (0, jsx_runtime_1.jsxs)(
          "div",
          __assign(
            { style: { padding: "0 16px 0 16px" } },
            {
              children: [
                (0, jsx_runtime_1.jsx)(
                  Radio_1.Radio,
                  {
                    "aria-label": "Current content source option",
                    id: "current-content",
                    isChecked: contentSource === ContentSource.CURRENT_CONTENT,
                    name: "Current content",
                    label: i18n.embedModal.source.current.label,
                    description: i18n.embedModal.source.current.description,
                    onChange: function () {
                      return setContentSource(ContentSource.CURRENT_CONTENT);
                    },
                  },
                  void 0
                ),
                (0, jsx_runtime_1.jsx)("br", {}, void 0),
                (0, jsx_runtime_1.jsx)(
                  Tooltip_1.Tooltip,
                  __assign(
                    {
                      "aria-label": "Only available when editing a file from a GitHub gist",
                      content: (0, jsx_runtime_1.jsx)("p", { children: i18n.embedModal.source.gist.tooltip }, void 0),
                      trigger: !isGist ? "mouseenter click" : "",
                    },
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        Radio_1.Radio,
                        {
                          "aria-label": "GitHub gist source option",
                          id: "github-gist",
                          isDisabled: !isGist,
                          name: "GitHub gist",
                          label: i18n.embedModal.source.gist.label,
                          isChecked: contentSource === ContentSource.GIST,
                          description: i18n.embedModal.source.gist.description,
                          onChange: function () {
                            return setContentSource(ContentSource.GIST);
                          },
                        },
                        void 0
                      ),
                    }
                  ),
                  void 0
                ),
                (0, jsx_runtime_1.jsx)("br", {}, void 0),
                (0, jsx_runtime_1.jsxs)(
                  Stack_1.Stack,
                  __assign(
                    { hasGutter: true },
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)(
                          Stack_1.StackItem,
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              Text_1.TextContent,
                              {
                                children: (0, jsx_runtime_1.jsx)(
                                  Text_1.Text,
                                  __assign(
                                    { component: Text_1.TextVariants.h4 },
                                    { children: i18n.embedModal.embedCode }
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
                          Stack_1.StackItem,
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              ClipboardCopy_1.ClipboardCopy,
                              __assign(
                                {
                                  isCode: true,
                                  clickTip: "Copied",
                                  hoverTip: "Copy",
                                  variant: ClipboardCopy_1.ClipboardCopyVariant.expansion,
                                  "aria-label": "Embed code",
                                },
                                {
                                  children: embedCode
                                    .split("\n")
                                    .map(function (line) {
                                      return line.trim();
                                    })
                                    .join(""),
                                }
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
      }
    ),
    void 0
  );
}
exports.EmbedModal = EmbedModal;
//# sourceMappingURL=EmbedModal.js.map
