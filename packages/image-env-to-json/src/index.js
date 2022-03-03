"use strict";
var __values =
  (this && this.__values) ||
  function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var fs_1 = require("fs");
var path_1 = require("path");
var package_json_1 = require("../package.json");
var ENV_JSON_FILE = "env.json";
function main() {
  var e_1, _a;
  var program = (0, commander_1.createCommand)();
  program.name("image-env-to-json").version(package_json_1.version);
  program.showHelpAfterError("(add --help for additional information)");
  program
    .requiredOption(
      "-d, --directory <directory>",
      "directory to create or update an existing ".concat(ENV_JSON_FILE, " file")
    )
    .requiredOption("-n, --names <names...>", "environment variable names to look for")
    .parse();
  var options = program.opts();
  console.info("Looking for environment variables: ".concat(options.names.join(", ")));
  if (!(0, fs_1.existsSync)(options.directory)) {
    console.error("Directory '".concat(options.directory, "' does not exist. Please provide an existing directory."));
    process.exit(1);
  }
  var envJsonPath = (0, path_1.join)(options.directory, ENV_JSON_FILE);
  if (!(0, fs_1.existsSync)(envJsonPath)) {
    console.info("Creating ".concat(ENV_JSON_FILE, " file in '").concat(options.directory, "'"));
    (0, fs_1.writeFileSync)(envJsonPath, JSON.stringify({}));
  }
  var envJson = JSON.parse((0, fs_1.readFileSync)(envJsonPath).toString());
  var isUpdated = false;
  try {
    for (var _b = __values(options.names), _c = _b.next(); !_c.done; _c = _b.next()) {
      var name_1 = _c.value;
      var value = process.env[name_1];
      if (value !== undefined) {
        isUpdated = true;
        console.info("Setting environment variable '".concat(name_1, "' with value '").concat(value, "'"));
        envJson[name_1] = value;
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  (0, fs_1.writeFileSync)(envJsonPath, JSON.stringify(envJson, null, 2));
  if (isUpdated) {
    console.info("".concat(ENV_JSON_FILE, " file has been updated in '").concat(options.directory, "'"));
  } else {
    console.info("No environment variables have been updated in '".concat(options.directory, "'"));
  }
}
main();
//# sourceMappingURL=index.js.map
