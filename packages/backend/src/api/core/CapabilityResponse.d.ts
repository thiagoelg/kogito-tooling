import { CapabilityResponseStatus } from "./CapabilityResponseStatus";
interface CapabilityResponseArgs<T> {
  status: CapabilityResponseStatus;
  body?: T;
  message?: string;
}
export declare class CapabilityResponse<T> {
  readonly status: CapabilityResponseStatus;
  readonly body?: T;
  readonly message?: string;
  constructor(args: CapabilityResponseArgs<T>);
  static ok<U>(body?: U): CapabilityResponse<U>;
  static notAvailable<U>(message: string): CapabilityResponse<U>;
  static missingInfra<U>(): CapabilityResponse<U>;
}
export {};
//# sourceMappingURL=CapabilityResponse.d.ts.map
