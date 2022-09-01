/*
 * Copyright 2022 Red Hat, Inc. and/or its affiliates.
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

import { SwfLsNode } from "./types";

/**
 * This is very similar to `jsonc.findNodeAtLocation`, but it allows the use of '*' as a wildcard selector.
 * This means that unlike `jsonc.findNodeAtLocation`, this method always returns a list of nodes, which can be empty if no matches are found.
 *
 * @param root root node
 * @param path the location of the node to search
 * @returns an array of nodes matching the path, empty array if no matches
 */
export function findNodesAtLocation(root: SwfLsNode | undefined, path: any): SwfLsNode[] {
  if (!root) {
    return [];
  }

  let nodes: SwfLsNode[] = [root];

  for (const segment of path) {
    if (segment === "*") {
      nodes = nodes.flatMap((s) => s.children ?? []);
      continue;
    }

    if (typeof segment === "number") {
      const index = segment as number;
      nodes = nodes.flatMap((n) => {
        if (n.type !== "array" || index < 0 || !Array.isArray(n.children) || index >= n.children.length) {
          return [];
        }

        return [n.children[index]];
      });
    }

    if (typeof segment === "string") {
      nodes = nodes.flatMap((n) => {
        if (n.type !== "object" || !Array.isArray(n.children)) {
          return [];
        }

        for (const prop of n.children) {
          if (Array.isArray(prop.children) && prop.children[0].value === segment) {
            // if prop.children[1] doesn't exist, return prop.children[0].parent to have the same value of findNodeAtOffset()
            return [prop.children[1] || prop.children[0].parent];
          }
        }

        return [];
      });
    }
  }

  return nodes;
}
