/// <reference types="jest" />
import { HttpService, LocalHttpServer, LocalHttpService, Service } from "@kie-tools-core/backend/dist/api";
export declare class DummyLocalHttpServer extends LocalHttpServer {
  identify(): string;
  start(): Promise<void>;
  stop(): void;
  satisfyRequirements(): Promise<boolean>;
}
export declare class DummyHttpService extends HttpService {
  identify(): string;
}
export declare class DummyLocalHttpService extends LocalHttpService {
  identify(): string;
}
export declare function createMockedService(id: string, reqSatisfied?: boolean): jest.Mocked<Service>;
//# sourceMappingURL=dummyServices.d.ts.map
