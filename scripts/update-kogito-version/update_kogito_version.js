/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const fs = require("fs");
const path = require("path");
const execSync = require("child_process").execSync;

const newMavenVersion = process.argv[3];
const newImagesTag = process.argv[5];
if (!newMavenVersion) {
  console.error("Usage 'node update_kogito_version.js --maven [version] --images-tag [tag]'");
  return 1;
}

if (process.argv[2] !== "--maven" || process.argv[4] !== "--images-tag") {
  console.error("Arguments need to be passed in the correct order.");
  console.error(`Argv: ${process.argv.join(", ")}`);
  console.error("Usage 'node update_kogito_version.js --maven [version] --images-tag [tag]'");
  process.exit(1);
}

const execOpts = { stdio: "inherit" };

try {
  console.info("[update-kogito-version] Updating 'packages/root-env/env/index.js'...");
  const rootEnvPath = path.resolve(__dirname, "../../packages/root-env/env/index.js");
  fs.writeFileSync(
    rootEnvPath,
    fs
      .readFileSync(rootEnvPath, "utf-8")
      .replace(
        /KOGITO_RUNTIME_version:[\s\n]*{[\s\n]*default:[\s\n]*".*"/,
        `KOGITO_RUNTIME_version: {\n      default: "${newMavenVersion}"`
      )
  );

  console.info(
    "[update-kogito-version] Updating 'packages/kogito-serverless-operator/test/testdata/.../02-sonataflow_platform.yaml'..."
  );
  const sonataflowPlatformFiles = fs
    .readdirSync(path.resolve(__dirname, "../../packages/kogito-serverless-operator/test/testdata"), {
      recursive: true,
    })
    .filter((fileName) => fileName.endsWith("02-sonataflow_platform.yaml"));
  sonataflowPlatformFiles.forEach((filePath) => {
    const fullFilePath = path.resolve(
      __dirname,
      path.join("../../packages/kogito-serverless-operator/test/testdata"),
      filePath
    );
    fs.writeFileSync(
      fullFilePath,
      fs
        .readFileSync(fullFilePath, "utf-8")
        .replace(
          /org\.kie:kie-addons-quarkus-persistence-jdbc:[^,\n]*/,
          `org.kie:kie-addons-quarkus-persistence-jdbc:${newMavenVersion}`
        )
        .replace(
          /org\.kie\.kogito:kogito-addons-quarkus-jobs-knative-eventing:[^,\n]*/,
          `org.kie.kogito:kogito-addons-quarkus-jobs-knative-eventing:${newMavenVersion}`
        )
    );
  });

  console.info("[update-kogito-version] Updating 'serverless-logic-web-tools-base-builder-image/env/index.js'...");
  const serverlessLogicWebToolsBaseBuilderImageEnvPath = path.resolve(
    __dirname,
    "../../packages/serverless-logic-web-tools-base-builder-image/env/index.js"
  );
  fs.writeFileSync(
    serverlessLogicWebToolsBaseBuilderImageEnvPath,
    fs
      .readFileSync(serverlessLogicWebToolsBaseBuilderImageEnvPath, "utf-8")
      .replace(
        /SERVERLESS_LOGIC_WEB_TOOLS__baseBuilderKogitoImageTag:[\s\n]*{[\s\n]*default:[\s\n]*".*"/,
        `SERVERLESS_LOGIC_WEB_TOOLS__baseBuilderKogitoImageTag: {\n        default: "${newImagesTag}"`
      )
  );

  console.info(
    "[update-kogito-version] Updating 'packages/serverless-logic-web-tools-swf-dev-mode-image/env/index.js'..."
  );
  const serverlessLogicWebToolsSwfDevModeImageEnvPath = path.resolve(
    __dirname,
    "../../packages/serverless-logic-web-tools-swf-dev-mode-image/env/index.js"
  );
  fs.writeFileSync(
    serverlessLogicWebToolsSwfDevModeImageEnvPath,
    fs
      .readFileSync(serverlessLogicWebToolsSwfDevModeImageEnvPath, "utf-8")
      .replace(
        /SERVERLESS_LOGIC_WEB_TOOLS_DEVMODE_IMAGE__kogitoBaseBuilderImageTag:[\s\n]*{[\s\n]*default:[\s\n]*".*"/,
        `SERVERLESS_LOGIC_WEB_TOOLS_DEVMODE_IMAGE__kogitoBaseBuilderImageTag: {\n        default: "${newImagesTag}"`
      )
  );

  console.info(`[update-kogito-version] Bootstrapping with updated Kogito version...`);
  execSync(`pnpm bootstrap`, execOpts);

  console.info(`[update-kogito-version] Formatting files...`);
  execSync(`pnpm pretty-quick`, execOpts);

  console.info(
    `[update-kogito-version] Updated Kogito to '${newMavenVersion}' (Maven) and '${newImagesTag}' (Images tag).`
  );
  console.info(`[update-kogito-version] Done.`);
} catch (error) {
  console.error(error);
  console.error("");
  console.error(`[update-kogito-version] Error updating Kogito version. There might be undesired unstaged changes.`);
}
