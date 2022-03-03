import {
  ResourceContent,
  ResourceContentOptions,
  ResourceContentService,
  ResourceListOptions,
  ResourcesList,
} from "@kie-tools-core/workspace/dist/api";
declare class ChromeResourceContentService implements ResourceContentService {
  get(path: string, opts?: ResourceContentOptions): Promise<ResourceContent | undefined>;
  list(pattern: string, opts?: ResourceListOptions): Promise<ResourcesList>;
}
export declare class ResourceContentServiceFactory {
  createNew(): ChromeResourceContentService;
}
export {};
//# sourceMappingURL=ChromeResourceContentService.d.ts.map
