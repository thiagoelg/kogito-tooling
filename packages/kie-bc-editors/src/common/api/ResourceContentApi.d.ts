import { ResourceContentOptions, ResourceListOptions } from "@kie-tools-core/workspace/dist/api";
export interface ResourceContentApi {
  get(path: string, opts?: ResourceContentOptions): Promise<string | undefined>;
  list(pattern: string, opts?: ResourceListOptions): Promise<string[]>;
}
//# sourceMappingURL=ResourceContentApi.d.ts.map
