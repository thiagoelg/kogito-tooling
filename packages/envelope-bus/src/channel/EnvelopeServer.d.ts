import { ApiDefinition, EnvelopeBus, EnvelopeBusMessage, FunctionPropertyNames } from "../api";
import { EnvelopeBusMessageManager } from "../common";
export declare enum EnvelopeServerType {
  LOCAL = "local",
  REMOTE = "remote",
}
export declare class EnvelopeServer<
  ApiToProvide extends ApiDefinition<ApiToProvide>,
  ApiToConsume extends ApiDefinition<ApiToConsume>
> {
  readonly origin: string;
  readonly pollInit: (self: EnvelopeServer<ApiToProvide, ApiToConsume>) => Promise<any>;
  readonly type: EnvelopeServerType;
  readonly manager: EnvelopeBusMessageManager<ApiToProvide, ApiToConsume>;
  static INIT_POLLING_TIMEOUT_IN_MS: number;
  static INIT_POLLING_INTERVAL_IN_MS: number;
  initPolling?: ReturnType<typeof setInterval>;
  initPollingTimeout?: ReturnType<typeof setTimeout>;
  initialPollingSetting?: ReturnType<typeof setTimeout>;
  readonly id: string;
  get envelopeApi(): import("../api").MessageBusClientApi<ApiToConsume>;
  get shared(): import("../api").ApiSharedValueConsumers<ApiToProvide>;
  constructor(
    bus: EnvelopeBus,
    origin: string,
    pollInit: (self: EnvelopeServer<ApiToProvide, ApiToConsume>) => Promise<any>,
    type?: EnvelopeServerType,
    manager?: EnvelopeBusMessageManager<ApiToProvide, ApiToConsume>
  );
  startInitPolling(apiImpl: ApiToProvide): void;
  stopInitPolling(): void;
  receive(
    message: EnvelopeBusMessage<unknown, FunctionPropertyNames<ApiToProvide> | FunctionPropertyNames<ApiToConsume>>,
    apiImpl: ApiToProvide
  ): void;
  generateRandomId(): string;
}
//# sourceMappingURL=EnvelopeServer.d.ts.map
