"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBuild = exports.ListBuilds = exports.CreateBuild = void 0;
var Resource_1 = require("./Resource");
var API_ENDPOINT = "apis/build.openshift.io/v1";
var CreateBuild = (function (_super) {
  __extends(CreateBuild, _super);
  function CreateBuild(args) {
    var _this = _super.call(this, args) || this;
    _this.args = args;
    _this.BASE_IMAGE = "quay.io/caponetto/serverless-workflow-base-image:latest";
    _this.KOGITO_FOLDER = "/tmp/kogito";
    _this.PROJECT_FOLDER = "".concat(_this.KOGITO_FOLDER, "/serverless-workflow-base");
    _this.PROJECT_MAIN_RESOURCES = "".concat(_this.PROJECT_FOLDER, "/src/main/resources");
    _this.PROJECT_METAINF_RESOURCES = "".concat(_this.PROJECT_MAIN_RESOURCES, "/META-INF/resources");
    _this.QUARKUS_APP_FOLDER = "".concat(_this.PROJECT_FOLDER, "/target/quarkus-app");
    _this.DEPLOYMENTS_FOLDER = "/deployments";
    _this.POM_PATH = "".concat(_this.PROJECT_FOLDER, "/pom.xml");
    _this.MVNW_PATH = "".concat(_this.KOGITO_FOLDER, "/mvnw");
    return _this;
  }
  CreateBuild.prototype.method = function () {
    return "POST";
  };
  CreateBuild.prototype.requestBody = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [
          2,
          "\n      kind: Build\n      apiVersion: build.openshift.io/v1\n      metadata:\n        annotations:\n          openshift.io/build-config.name: "
            .concat(
              this.args.resourceName,
              "\n          openshift.io/build.number: '1'\n          openshift.io/build.pod-name: "
            )
            .concat(this.args.resourceName, "\n        name: ")
            .concat(this.args.resourceName, "\n        namespace: ")
            .concat(
              this.args.namespace,
              "\n        ownerReferences:\n          - apiVersion: build.openshift.io/v1\n            kind: BuildConfig\n            name: "
            )
            .concat(this.args.resourceName, "\n            uid: ")
            .concat(this.args.buildConfigUid, "\n            controller: true\n        labels:\n          app: ")
            .concat(this.args.resourceName, "\n          app.kubernetes.io/component: ")
            .concat(this.args.resourceName, "\n          app.kubernetes.io/instance: ")
            .concat(this.args.resourceName, "\n          app.kubernetes.io/part-of: ")
            .concat(this.args.resourceName, "\n          app.kubernetes.io/name: ")
            .concat(
              this.args.resourceName,
              "\n          app.openshift.io/runtime: quarkus\n          app.openshift.io/runtime-version: "
            )
            .concat(
              Resource_1.JAVA_RUNTIME_VERSION,
              "\n          openshift.io/build.start-policy: Serial\n          buildconfig: "
            )
            .concat(this.args.resourceName, "\n          openshift.io/build-config.name: ")
            .concat(this.args.resourceName, "\n          ")
            .concat(Resource_1.KOGITO_CREATED_BY, ": ")
            .concat(
              this.args.createdBy,
              "\n      spec:\n        output:\n          to:\n            kind: ImageStreamTag\n            name: "
            )
            .concat(
              this.args.resourceName,
              ":latest\n        triggeredBy:\n          - message: Triggered by KIE Tools - Serverless Workflow Chrome Extension (REST API)\n        strategy:\n          dockerStrategy:\n              noCache: true\n        source:\n          dockerfile: |\n            FROM "
            )
            .concat(
              this.BASE_IMAGE,
              '\n            ENV MAVEN_OPTS="-Xmx352m -Xms128m" JAVA_OPTS="-Xmx352m -Xms128m"\n            RUN echo -e $\''
            )
            .concat(this.args.file.content, "' > '")
            .concat(this.PROJECT_METAINF_RESOURCES, "/")
            .concat(this.args.file.name, "'                 && ")
            .concat(this.MVNW_PATH, " clean package -B -ntp -f ")
            .concat(this.POM_PATH, "                 && cp ")
            .concat(this.QUARKUS_APP_FOLDER, "/*.jar ")
            .concat(this.DEPLOYMENTS_FOLDER, "                 && cp -R ")
            .concat(this.QUARKUS_APP_FOLDER, "/lib/ ")
            .concat(this.DEPLOYMENTS_FOLDER, "                 && cp -R ")
            .concat(this.QUARKUS_APP_FOLDER, "/app/ ")
            .concat(this.DEPLOYMENTS_FOLDER, "                 && cp -R ")
            .concat(this.QUARKUS_APP_FOLDER, "/quarkus/ ")
            .concat(this.DEPLOYMENTS_FOLDER, "                 && rm -fr ~/.m2\n    "),
        ];
      });
    });
  };
  CreateBuild.prototype.name = function () {
    return CreateBuild.name;
  };
  CreateBuild.prototype.url = function () {
    return "".concat(this.args.host, "/").concat(API_ENDPOINT, "/namespaces/").concat(this.args.namespace, "/builds");
  };
  return CreateBuild;
})(Resource_1.ResourceFetch);
exports.CreateBuild = CreateBuild;
var ListBuilds = (function (_super) {
  __extends(ListBuilds, _super);
  function ListBuilds() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ListBuilds.prototype.method = function () {
    return "GET";
  };
  ListBuilds.prototype.requestBody = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2];
      });
    });
  };
  ListBuilds.prototype.name = function () {
    return ListBuilds.name;
  };
  ListBuilds.prototype.url = function () {
    return "".concat(this.args.host, "/").concat(API_ENDPOINT, "/namespaces/").concat(this.args.namespace, "/builds");
  };
  return ListBuilds;
})(Resource_1.ResourceFetch);
exports.ListBuilds = ListBuilds;
var DeleteBuild = (function (_super) {
  __extends(DeleteBuild, _super);
  function DeleteBuild() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  DeleteBuild.prototype.method = function () {
    return "DELETE";
  };
  DeleteBuild.prototype.requestBody = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2];
      });
    });
  };
  DeleteBuild.prototype.name = function () {
    return DeleteBuild.name;
  };
  DeleteBuild.prototype.url = function () {
    return ""
      .concat(this.args.host, "/")
      .concat(API_ENDPOINT, "/namespaces/")
      .concat(this.args.namespace, "/builds/")
      .concat(this.args.resourceName);
  };
  return DeleteBuild;
})(Resource_1.ResourceFetch);
exports.DeleteBuild = DeleteBuild;
//# sourceMappingURL=Build.js.map
