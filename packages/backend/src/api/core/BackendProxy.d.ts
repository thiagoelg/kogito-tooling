import { BackendManagerService } from "./BackendManagerService";
import { Capability } from "./Capability";
import { CapabilityResponse } from "./CapabilityResponse";
export declare class BackendProxy {
  protected backendManager: BackendManagerService | undefined;
  registerBackendManager(backendManager: BackendManagerService): void;
  withCapability<T extends Capability, U>(
    serviceId: string,
    consumer: (capability: T) => Promise<CapabilityResponse<U>>
  ): Promise<CapabilityResponse<U>>;
  stopServices(): void;
}
//# sourceMappingURL=BackendProxy.d.ts.map
