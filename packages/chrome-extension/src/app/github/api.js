"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchFile = void 0;
var api_1 = require("@kie-tools-core/workspace/dist/api");
function fetchFile(octokit, org, repo, ref, path, contentType) {
  return octokit.repos
    .getContent({
      repo: repo,
      owner: org,
      ref: ref,
      path: path,
    })
    .then(function (res) {
      return contentType === api_1.ContentType.BINARY ? res.data.content : atob(res.data.content);
    })
    .catch(function (e) {
      console.debug("Error fetching ".concat(path, " with Octokit. Fallback is 'raw.githubusercontent.com'."));
      return fetch(
        "https://raw.githubusercontent.com/".concat(org, "/").concat(repo, "/").concat(ref, "/").concat(path)
      ).then(function (res) {
        return res.ok ? res.text() : Promise.resolve(undefined);
      });
    });
}
exports.fetchFile = fetchFile;
//# sourceMappingURL=api.js.map
