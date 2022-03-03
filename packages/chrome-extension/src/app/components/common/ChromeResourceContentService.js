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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceContentServiceFactory = void 0;
var api_1 = require("@kie-tools-core/workspace/dist/api");
var api_2 = require("../../github/api");
var minimatch = require("minimatch");
var ChromeResourceContentService = (function () {
  function ChromeResourceContentService(octokit, repoInfo) {
    this.octokit = octokit;
    this.repoInfo = repoInfo;
  }
  ChromeResourceContentService.prototype.get = function (path, opts) {
    opts = opts !== null && opts !== void 0 ? opts : { type: api_1.ContentType.TEXT };
    return (0, api_2.fetchFile)(
      this.octokit,
      this.repoInfo.owner,
      this.repoInfo.repo,
      this.repoInfo.gitref,
      path,
      opts.type
    )
      .then(function (resourceContent) {
        return new api_1.ResourceContent(path, resourceContent, opts.type);
      })
      .catch(function (e) {
        console.debug(e);
        console.debug("Error retrieving content from URI ".concat(path));
        return undefined;
      });
  };
  ChromeResourceContentService.prototype.list = function (pattern, opts) {
    return this.octokit.git
      .getTree(__assign({ recursive: "1", tree_sha: this.repoInfo.gitref }, this.repoInfo))
      .then(function (v) {
        var filteredPaths = v.data.tree
          .filter(function (file) {
            return file.type === "blob";
          })
          .map(function (file) {
            return file.path;
          });
        var result = minimatch.match(filteredPaths, pattern);
        return new api_1.ResourcesList(pattern, result);
      })
      .catch(function (e) {
        console.debug("Error retrieving file list for pattern ".concat(pattern));
        return new api_1.ResourcesList(pattern, []);
      });
  };
  return ChromeResourceContentService;
})();
var ResourceContentServiceFactory = (function () {
  function ResourceContentServiceFactory() {}
  ResourceContentServiceFactory.prototype.createNew = function (octokit, repoInfo) {
    return new ChromeResourceContentService(octokit, repoInfo);
  };
  return ResourceContentServiceFactory;
})();
exports.ResourceContentServiceFactory = ResourceContentServiceFactory;
//# sourceMappingURL=ChromeResourceContentService.js.map
