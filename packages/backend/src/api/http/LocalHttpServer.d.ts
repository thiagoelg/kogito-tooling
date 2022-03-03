import { Service } from "..";
export declare abstract class LocalHttpServer implements Service {
  protected port: number;
  getPort(): number;
  abstract identify(): string;
  abstract start(): Promise<void>;
  abstract stop(): void;
  abstract satisfyRequirements(): Promise<boolean>;
}
//# sourceMappingURL=LocalHttpServer.d.ts.map
