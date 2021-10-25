/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const nodePath = require("path");
const nodeFs = require("fs");

/**
 * Two scenarios for nodeModulesDir:
 * (1) When using @kogito-tooling/external-assets-base library as dependency for other projects,
 *     __dirname is already on node_modules folder.
 * (2) When developing for kogito-tooling,
 *     external-assets-base is accessed directly so nodeModulesDir needs node_modules appended.
 */
const nodeModulesDir = "../.." + (__dirname.includes("node_modules") ? "" : "/node_modules");

module.exports = {
  path: () => {
    const path = nodePath.resolve(
      __dirname,
      nodeModulesDir +
        "/@kogito-tooling/vscode-lsp-extension-plugin/vscode-lsp-extension-plugin-core/target/vscode-lsp-extension-plugin-core.jar"
    );

    if (!nodeFs.existsSync(path)) {
      throw new Error(`VSCode LSP Extension Plugin :: path doesn't exist: ${path}`);
    }

    console.info(`VSCode LSP Extension Plugin :: path: ${path}`);

    return path;
  },
};
