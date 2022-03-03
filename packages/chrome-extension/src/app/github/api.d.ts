import { Octokit } from "@octokit/rest";
import { ContentType } from "@kie-tools-core/workspace/dist/api";
export declare function fetchFile(
  octokit: Octokit,
  org: string,
  repo: string,
  ref: string,
  path: string,
  contentType?: ContentType
): Promise<any>;
//# sourceMappingURL=api.d.ts.map
