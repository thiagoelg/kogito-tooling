import { ApiDefinition, EnvelopeBus } from "@kie-tools-core/envelope-bus/dist/api";
import { EnvelopeClient } from "@kie-tools-core/envelope-bus/dist/envelope";
import { EnvelopeApiFactory } from "./EnvelopeApiFactory";
import { ContainerType } from "./api";
export interface EnvelopeDivConfig {
  containerType: ContainerType.DIV;
  envelopeId: string;
}
export interface EnvelopeIFrameConfig {
  containerType: ContainerType.IFRAME;
}
export declare class Envelope<
  ApiToProvide extends ApiDefinition<ApiToProvide>,
  ApiToConsume extends ApiDefinition<ApiToConsume>,
  ViewType,
  ContextType
> {
  private readonly envelopeClient;
  constructor(
    bus: EnvelopeBus,
    config?: EnvelopeDivConfig | EnvelopeIFrameConfig,
    envelopeClient?: EnvelopeClient<ApiToProvide, ApiToConsume>
  );
  get channelApi(): import("@kie-tools-core/envelope-bus/dist/api").MessageBusClientApi<ApiToConsume>;
  start(
    viewDelegate: () => Promise<() => ViewType>,
    envelopeContext: ContextType,
    apiFactory: EnvelopeApiFactory<ApiToProvide, ApiToConsume, ViewType, ContextType>
  ): Promise<EnvelopeClient<ApiToProvide, ApiToConsume>>;
}
//# sourceMappingURL=Envelope.d.ts.map
