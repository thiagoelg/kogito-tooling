import { HttpResponse } from "./HttpResponse";
import { HttpService } from "./HttpService";
export declare abstract class LocalHttpService extends HttpService {
  private readonly hostname;
  private port;
  registerPort(port: number): void;
  execute(path: string, body?: any): Promise<HttpResponse>;
}
//# sourceMappingURL=LocalHttpService.d.ts.map
