import {
  ResourceContent,
  ResourceContentOptions,
  ResourceContentService,
  ResourceListOptions,
  ResourcesList,
} from "@kie-tools-core/workspace/dist/api";
import { RepoInfo } from "./RepoInfo";
import { Octokit } from "@octokit/rest";
declare class ChromeResourceContentService implements ResourceContentService {
  private readonly repoInfo;
  private readonly octokit;
  constructor(octokit: Octokit, repoInfo: RepoInfo);
  get(path: string, opts?: ResourceContentOptions): Promise<ResourceContent | undefined>;
  list(pattern: string, opts?: ResourceListOptions): Promise<ResourcesList>;
}
export declare class ResourceContentServiceFactory {
  createNew(octokit: Octokit, repoInfo: RepoInfo): ChromeResourceContentService;
}
export {};
//# sourceMappingURL=ChromeResourceContentService.d.ts.map
