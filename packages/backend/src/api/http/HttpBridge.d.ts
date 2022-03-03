import { HttpRequest } from "./HttpRequest";
import { HttpResponse } from "./HttpResponse";
export interface HttpBridge {
  request(request: HttpRequest): Promise<HttpResponse>;
}
//# sourceMappingURL=HttpBridge.d.ts.map
