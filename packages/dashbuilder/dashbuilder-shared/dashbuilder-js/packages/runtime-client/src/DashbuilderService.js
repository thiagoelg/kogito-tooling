"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashbuilderService = exports.embeddedRuntimeUrl = void 0;
function embeddedRuntimeUrl(url, dashboardId, page) {
  var urlBuild = new URL(url);
  urlBuild.searchParams.set("standalone", "true");
  urlBuild.searchParams.set("perspective", page);
  if (dashboardId && dashboardId !== "") {
    urlBuild.searchParams.set("import", dashboardId);
  }
  return urlBuild.href;
}
exports.embeddedRuntimeUrl = embeddedRuntimeUrl;
var DashbuilderService = (function () {
  function DashbuilderService(requestInfo) {
    this.requestInfo = requestInfo;
    this.authToken = btoa(requestInfo.user + ":" + requestInfo.password);
  }
  DashbuilderService.prototype.listDashboards = function () {
    var url = "".concat(this.requestInfo.url, "/rest/api");
    return this.request(url).then(function (obj) {
      return obj;
    });
  };
  DashbuilderService.prototype.listPages = function (id) {
    if (!id || id === "") {
      return Promise.resolve({
        runtimeModelId: id,
        pages: [],
      });
    }
    var url = "".concat(this.requestInfo.url, "/rest/api/dashboard/").concat(id);
    return this.request(url).then(function (obj) {
      return obj;
    });
  };
  DashbuilderService.prototype.request = function (url) {
    return fetch(url, {
      credentials: "include",
      mode: "cors",
      headers: new Headers({
        Authorization: "Basic ".concat(this.authToken),
      }),
    }).then(function (r) {
      return r.json();
    });
  };
  return DashbuilderService;
})();
exports.DashbuilderService = DashbuilderService;
//# sourceMappingURL=DashbuilderService.js.map
