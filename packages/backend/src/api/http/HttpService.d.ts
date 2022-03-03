import { Service } from "..";
import { HttpBridge } from "./HttpBridge";
import { HttpResponse } from "./HttpResponse";
export declare abstract class HttpService implements Service {
  private bridge;
  abstract identify(): string;
  start(): Promise<void>;
  stop(): void;
  satisfyRequirements(): Promise<boolean>;
  registerHttpBridge(bridge: HttpBridge): void;
  execute(endpoint: string, body?: any): Promise<HttpResponse>;
}
//# sourceMappingURL=HttpService.d.ts.map
