import KieSandboxFs from "@kie-tools/kie-sandbox-fs";
import { WorkspaceDescriptorService } from "./WorkspaceDescriptorService";
import { FsCache } from "./FsCache";
export declare class WorkspaceFsService {
  private readonly descriptorService;
  private readonly fsCache;
  constructor(descriptorService: WorkspaceDescriptorService, fsCache?: FsCache);
  getWorkspaceFs(workspaceId: string): Promise<any>;
  withInMemoryFs<T>(workspaceId: string, callback: (fs: KieSandboxFs) => Promise<T>): Promise<T>;
  private createInMemoryWorkspaceFs;
}
//# sourceMappingURL=WorkspaceFsService.d.ts.map
