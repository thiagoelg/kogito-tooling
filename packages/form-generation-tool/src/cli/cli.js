"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var inquirer_1 = require("inquirer");
var generation_1 = require("../generation");
var fs_1 = require("../generation/fs");
function run() {
  var validateProjectPath = function (path) {
    if (!path || path === "") {
      return "Please type a Kogito Project path";
    }
    try {
      (0, fs_1.checkKogitoProjectStructure)(path);
    } catch (err) {
      return err.message;
    }
    return true;
  };
  var isOverwriteVisible = function (answers) {
    return (0, fs_1.checkKogitoProjectHasForms)(answers.path);
  };
  var execute = function (answers) {
    var args = {
      path: answers.path,
      type: answers.type,
      overwrite: answers.overwrite,
    };
    var message =
      "\nCurrent selection:" +
      "\nProject path: ".concat(args.path) +
      "\nForm type: ".concat(args.type) +
      "".concat(args.overwrite !== undefined ? "\nOverwrite existing forms: ".concat(args.overwrite) : "", "\n");
    console.log(message);
    inquirer_1.default
      .prompt({
        name: "confirm",
        type: "confirm",
        message: "Do you want to continue?",
        default: true,
      })
      .then(function (answers) {
        if (answers.confirm) {
          (0, generation_1.generateForms)(args);
        }
        console.log("\nGood bye!");
      });
  };
  var questions = [
    {
      name: "path",
      type: "string",
      message: "Type your Kogito Project path:",
      validate: validateProjectPath,
    },
    {
      name: "overwrite",
      type: "confirm",
      message: "The project already contains forms, do you want to overwrite the existing ones?",
      default: false,
      when: isOverwriteVisible,
    },
    {
      name: "type",
      type: "list",
      message: "Select the Form type:",
      choices: ["patternfly", "bootstrap"],
      default: "patternfly",
    },
  ];
  console.log("Kogito Form Generation CLI");
  console.log("===========================");
  console.log();
  console.log("This tool will help you generate forms for User Tasks in your Kogito Projects.");
  console.log(
    "The tool will search for the User Tasks JSON schemas generated in your project, so make sure the project is build."
  );
  console.log("The generated forms will be stored as resources in your project (in src/main/resources/forms folder).");
  console.log();
  inquirer_1.default.prompt(questions).then(execute);
}
exports.run = run;
//# sourceMappingURL=cli.js.map
