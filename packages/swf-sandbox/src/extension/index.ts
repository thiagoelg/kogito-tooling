/*
 * Copyright 2022 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { basename, extname } from "path";

const REGEX = {
  supported: /(\.sw\.json|\.sw\.yaml|\.sw\.yml|\.yard\.json|\.yard\.yaml|\.yard\.yml|\.dash\.yml|\.dash\.yaml)$/,
  sw: /^.*\.sw\.(json|yml|yaml)$/,
  yard: /^.*\.yard\.(json|yml|yaml)$/,
  dash: /^.*\.dash\.(yml|yaml)$/,
};

export const GLOB_PATTERN = {
  all: "**/*",
  sw: "**/*.sw.+(json|yml|yaml)",
  yard: "**/*.yard.+(json|yml|yaml)",
  dash: "**/*.dash.+(yml|yaml)",
};

export enum FileTypes {
  SW_JSON = "sw.json",
  SW_YML = "sw.yml",
  SW_YAML = "sw.yaml",
  YARD_JSON = "yard.json",
  YARD_YML = "yard.yml",
  YARD_YAML = "yard.yaml",
  DASH_YAML = "dash.yaml",
  DASH_YML = "dash.yml",
}

export const supportedFileExtensionArray = [
  FileTypes.SW_JSON,
  FileTypes.SW_YML,
  FileTypes.SW_YAML,
  FileTypes.YARD_JSON,
  FileTypes.YARD_YML,
  FileTypes.YARD_YAML,
  FileTypes.DASH_YAML,
  FileTypes.DASH_YML,
];

export function resolveExtension(path: string): string {
  const fileName = basename(path);
  if (fileName.startsWith(".")) {
    return fileName.slice(1);
  }
  const match = REGEX.supported.exec(path.toLowerCase());
  const extension = match ? match[1] : extname(path);
  return extension ? extension.slice(1) : "";
}

export function isServerlessWorkflow(path: string): boolean {
  return REGEX.sw.test(path.toLowerCase());
}

export function isServerlessDecision(path: string): boolean {
  return REGEX.yard.test(path.toLowerCase());
}

export function isDashbuilder(path: string): boolean {
  return REGEX.dash.test(path.toLowerCase());
}

export function isSandboxAsset(path: string): boolean {
  return isServerlessWorkflow(path) || isServerlessDecision(path) || isDashbuilder(path);
}

export type SupportedFileExtensions = typeof supportedFileExtensionArray[number];
