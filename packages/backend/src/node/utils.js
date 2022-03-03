"use strict";
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
exports.killProcess = exports.isJavaAvailable = exports.isMavenAvailable = void 0;
var cp = require("child_process");
var os = require("os");
var semver_1 = require("semver");
function isMavenAvailable(version) {
  return new Promise(function (resolve) {
    cp.exec("mvn -version", function (error, stdout, _) {
      if (error) {
        resolve(false);
        return;
      }
      var firstLine = stdout.toString().split("\n")[0];
      var regexMatch = new RegExp("^(Apache Maven) (\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:[_\\.](\\d+))?)?)?").exec(
        firstLine
      );
      if (!regexMatch) {
        resolve(false);
        return;
      }
      if (!version) {
        resolve(!!regexMatch);
        return;
      }
      var _a = __read(regexMatch, 5),
        major = _a[2],
        minor = _a[3],
        patch = _a[4];
      var requiredVersion = Object.values(version).join(".");
      var actualVersion = ""
        .concat(+major, ".")
        .concat(minor ? +minor : 0, ".")
        .concat(patch ? +patch : 0);
      resolve((0, semver_1.lte)(requiredVersion, actualVersion));
    });
  });
}
exports.isMavenAvailable = isMavenAvailable;
function isJavaAvailable(version) {
  return new Promise(function (resolve) {
    cp.exec("java -version", function (error, _, stderr) {
      if (error) {
        resolve(false);
        return;
      }
      var firstLine = stderr.toString().split("\n")[0];
      var regexMatch = new RegExp(
        '^(java|openjdk) (version) "?(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:[_\\.](\\d+))?)?)?"?'
      ).exec(firstLine);
      if (!regexMatch) {
        resolve(false);
        return;
      }
      if (!version) {
        resolve(!!regexMatch);
        return;
      }
      var _a = __read(regexMatch, 6),
        major = _a[3],
        minor = _a[4],
        patch = _a[5];
      var requiredVersion = Object.values(version).join(".");
      var actualVersion = ""
        .concat(+major, ".")
        .concat(minor ? +minor : 0, ".")
        .concat(patch ? +patch : 0);
      resolve((0, semver_1.lte)(requiredVersion, actualVersion));
    });
  });
}
exports.isJavaAvailable = isJavaAvailable;
function killProcess(process) {
  switch (os.platform()) {
    case "win32":
      cp.spawn("taskkill", ["/pid", process.pid.toString(), "/f", "/t"]);
      break;
    case "darwin":
    case "linux":
    default:
      process.kill("SIGINT");
      break;
  }
}
exports.killProcess = killProcess;
//# sourceMappingURL=utils.js.map
