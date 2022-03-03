import { HttpBridge, LocalHttpServer } from "..";
import { Service } from "./Service";
export declare class BackendManagerService implements Service {
  private readonly args;
  private readonly serviceRegistry;
  constructor(args: {
    bridge?: HttpBridge;
    localHttpServer?: LocalHttpServer;
    bootstrapServices?: Service[];
    lazyServices?: Service[];
  });
  identify(): string;
  start(): Promise<void>;
  stop(): void;
  satisfyRequirements(): Promise<boolean>;
  registerService(service: Service): Promise<boolean>;
  getService<T extends Service>(id: string): Promise<T | undefined>;
}
//# sourceMappingURL=BackendManagerService.d.ts.map
