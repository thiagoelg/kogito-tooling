"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useImportableUrl = exports.UrlType = void 0;
var react_router_1 = require("react-router");
var path_1 = require("path");
var react_1 = require("react");
var EditorEnvelopeLocatorContext_1 = require("../../envelopeLocator/EditorEnvelopeLocatorContext");
var UrlType;
(function (UrlType) {
  UrlType[(UrlType["GIT"] = 0)] = "GIT";
  UrlType[(UrlType["GITHUB"] = 1)] = "GITHUB";
  UrlType[(UrlType["GIST"] = 2)] = "GIST";
  UrlType[(UrlType["GIST_FILE"] = 3)] = "GIST_FILE";
  UrlType[(UrlType["GITHUB_FILE"] = 4)] = "GITHUB_FILE";
  UrlType[(UrlType["FILE"] = 5)] = "FILE";
  UrlType[(UrlType["ZIP"] = 6)] = "ZIP";
  UrlType[(UrlType["INVALID"] = 7)] = "INVALID";
})((UrlType = exports.UrlType || (exports.UrlType = {})));
function useImportableUrl(urlString, allowedUrlTypes) {
  var editorEnvelopeLocator = (0, EditorEnvelopeLocatorContext_1.useEditorEnvelopeLocator)();
  return (0, react_1.useMemo)(
    function () {
      var _a;
      var ifAllowed = function (url) {
        if (allowedUrlTypes && !allowedUrlTypes.includes(url.type)) {
          return { type: UrlType.INVALID, error: "URL not allowed", url: url.url.toString() };
        }
        return url;
      };
      if (!urlString) {
        return { type: UrlType.INVALID, error: "Empty URL", url: "" };
      }
      var url;
      try {
        url = new URL(urlString);
      } catch (e) {
        return { type: UrlType.INVALID, error: "Invalid URL", url: urlString };
      }
      if (url.host === "github.com" || url.host === "raw.githubusercontent.com") {
        var defaultBranchMatch = (0, react_router_1.matchPath)(url.pathname, {
          path: "/:org/:repo",
          exact: true,
          strict: true,
          sensitive: false,
        });
        var customBranchMatch = (0, react_router_1.matchPath)(url.pathname, {
          path: "/:org/:repo/tree/:tree",
          exact: true,
          strict: true,
          sensitive: false,
        });
        if (defaultBranchMatch) {
          return ifAllowed({ type: UrlType.GITHUB, url: url });
        }
        if (customBranchMatch) {
          var branch = customBranchMatch.params.tree;
          var customBranchUrl = new URL(urlString);
          customBranchUrl.pathname = customBranchUrl.pathname.replace("/tree/".concat(branch), "");
          return ifAllowed({ type: UrlType.GITHUB, url: customBranchUrl, branch: branch });
        }
        var gitHubFileMatch = (0, react_router_1.matchPath)(url.pathname, {
          path: "/:org/:repo/blob/:tree/:path*",
          exact: true,
          strict: true,
          sensitive: false,
        });
        if (gitHubFileMatch) {
          return ifAllowed({
            type: UrlType.GITHUB_FILE,
            url: url,
            org: gitHubFileMatch.params.org,
            repo: gitHubFileMatch.params.repo,
            branch: gitHubFileMatch.params.tree,
            filePath: gitHubFileMatch.params.path,
          });
        }
        var gitHubRawFileMatch = (0, react_router_1.matchPath)(url.pathname, {
          path: "/:org/:repo/:tree/:path*",
          exact: true,
          strict: true,
          sensitive: false,
        });
        if (gitHubRawFileMatch) {
          return ifAllowed({
            type: UrlType.GITHUB_FILE,
            url: url,
            org: gitHubRawFileMatch.params.org,
            repo: gitHubRawFileMatch.params.repo,
            branch: gitHubRawFileMatch.params.tree,
            filePath: gitHubRawFileMatch.params.path,
          });
        }
        return { type: UrlType.INVALID, error: "Unsupported GitHub URL", url: urlString };
      }
      if (url.host === "gist.github.com" || url.host === "gist.githubusercontent.com") {
        var gistMatch = (0, react_router_1.matchPath)(url.pathname, {
          path: "/:user/:gistId",
          exact: true,
          strict: true,
        });
        var rawGistMatch = (0, react_router_1.matchPath)(url.pathname, {
          path: "/:user/:gistId/raw/:fileId/:fileName",
          exact: true,
          strict: true,
        });
        var directGistMatch = (0, react_router_1.matchPath)(url.pathname, {
          path: "/:gistId",
          exact: true,
          strict: true,
        });
        if (!gistMatch && !rawGistMatch && !directGistMatch) {
          return { type: UrlType.INVALID, error: "Unsupported Gist URL", url: urlString };
        }
        if (gistMatch && url.hash) {
          return ifAllowed({
            type: UrlType.GIST_FILE,
            url: url,
            gistId: gistMatch.params.gistId,
            fileName: url.hash.replace("#file-", "").replace(/-([^-]*)$/, ".$1"),
          });
        }
        if (rawGistMatch) {
          return ifAllowed({
            type: UrlType.GIST_FILE,
            url: url,
            gistId: rawGistMatch.params.gistId,
            fileName: rawGistMatch.params.fileName,
          });
        }
        return ifAllowed({
          type: UrlType.GIST,
          url: url,
          gistId:
            (_a = gistMatch !== null && gistMatch !== void 0 ? gistMatch : directGistMatch) === null || _a === void 0
              ? void 0
              : _a.params.gistId.replace(".git", ""),
        });
      }
      var extension = (0, path_1.extname)(url.pathname).replace(".", "");
      if (!extension) {
        return { type: UrlType.INVALID, error: "Can't determine file extension from URL", url: urlString };
      }
      if (extension === "git") {
        return ifAllowed({ type: UrlType.GIT, url: url });
      }
      if (!editorEnvelopeLocator.hasMappingFor(url.pathname)) {
        return {
          type: UrlType.INVALID,
          error: "Unsupported extension for '".concat(url.pathname, "'"),
          url: urlString,
        };
      }
      return ifAllowed({ type: UrlType.FILE, url: url });
    },
    [editorEnvelopeLocator, urlString, allowedUrlTypes]
  );
}
exports.useImportableUrl = useImportableUrl;
//# sourceMappingURL=ImportableUrlHooks.js.map
