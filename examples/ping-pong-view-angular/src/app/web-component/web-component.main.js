"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var web_component_module_1 = require("./web-component.module");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var bootstrap = function () {
  return (0, platform_browser_dynamic_1.platformBrowserDynamic)().bootstrapModule(
    web_component_module_1.WebComponentModule
  );
};
bootstrap().catch(function (err) {
  return console.error(err);
});
//# sourceMappingURL=web-component.main.js.map
