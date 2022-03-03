import { ApiDefinition, EnvelopeBus, EnvelopeBusMessage, FunctionPropertyNames } from "../api";
import { EnvelopeBusMessageManager } from "../common";
export declare class EnvelopeClient<
  ApiToProvide extends ApiDefinition<ApiToProvide>,
  ApiToConsume extends ApiDefinition<ApiToConsume>
> {
  private readonly bus;
  private readonly envelopeId?;
  targetOrigin?: string;
  associatedEnvelopeServerId?: string;
  eventListener?: any;
  readonly manager: EnvelopeBusMessageManager<ApiToProvide, ApiToConsume>;
  get channelApi(): import("../api").MessageBusClientApi<ApiToConsume>;
  constructor(bus: EnvelopeBus, envelopeId?: string | undefined);
  associate(origin: string, envelopeServerId: string): void;
  startListening(apiImpl: ApiToProvide): void;
  stopListening(): void;
  send<T>(
    message: EnvelopeBusMessage<T, FunctionPropertyNames<ApiToProvide> | FunctionPropertyNames<ApiToConsume>>
  ): void;
  receive(
    message: EnvelopeBusMessage<any, FunctionPropertyNames<ApiToProvide> | FunctionPropertyNames<ApiToConsume>>,
    apiImpl: ApiToProvide
  ): void;
}
//# sourceMappingURL=EnvelopeClient.d.ts.map
