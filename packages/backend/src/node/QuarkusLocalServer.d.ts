import { LocalHttpServer } from "../api";
export declare class QuarkusLocalServer extends LocalHttpServer {
  private readonly jarFilePath;
  private activeProcess;
  constructor(jarFilePath: string);
  identify(): string;
  start(): Promise<void>;
  stop(): void;
  satisfyRequirements(): Promise<boolean>;
}
//# sourceMappingURL=QuarkusLocalServer.d.ts.map
