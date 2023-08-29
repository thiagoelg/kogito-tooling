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

const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("@kie-tools-core/webpack-base/webpack.common.config");
const patternflyBase = require("@kie-tools-core/patternfly-base");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const webpack = require("webpack");

module.exports = (env) =>
  merge(common(env), {
    mode: "development",
    entry: {
      index: path.resolve(__dirname, "./index.tsx"),
      "dashbuilder-editor-envelope": path.resolve(__dirname, "./envelope/DashbuilderEditorEnvelopeApp.ts"),
    },
    output: {
      path: path.resolve("../dist-dev"),
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: path.resolve(__dirname, "./static/resources"), to: "./resources" },
          { from: path.resolve(__dirname, "./static/index.html"), to: "./index.html" },
          { from: path.resolve(__dirname, "./static/favicon.ico"), to: "./favicon.ico" },
          { from: path.resolve(__dirname, "../static/images"), to: "./images" },
          {
            from: path.resolve(__dirname, "../dist/dashbuilder-client"),
            to: "./dashbuilder-client",
          },
          {
            from: path.resolve(__dirname, "./static/envelope/dashbuilder-editor-envelope.html"),
            to: "./dashbuilder-editor-envelope.html",
          },
        ],
      }),
      new MonacoWebpackPlugin({
        languages: ["json"],
        customLanguages: [
          {
            label: "yaml",
            entry: ["monaco-yaml", "vs/basic-languages/yaml/yaml.contribution"],
            worker: {
              id: "monaco-yaml/yamlWorker",
              entry: "monaco-yaml/yaml.worker.js",
            },
          },
        ],
      }),
    ],
    module: {
      rules: [...patternflyBase.webpackModuleRules],
    },
    ignoreWarnings: [/Failed to parse source map/],
    resolve: {
      alias: {},
    },
    devServer: {
      historyApiFallback: false,
      static: [{ directory: path.join(__dirname) }],
      compress: true,
      port: 9007,
    },
  });
