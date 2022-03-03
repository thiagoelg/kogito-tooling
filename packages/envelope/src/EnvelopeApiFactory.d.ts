import { ApiDefinition } from "@kie-tools-core/envelope-bus/dist/api";
import { EnvelopeClient } from "@kie-tools-core/envelope-bus/dist/envelope";
export interface EnvelopeApiFactoryArgs<
  ApiToProvide extends ApiDefinition<ApiToProvide>,
  ApiToConsume extends ApiDefinition<ApiToConsume>,
  ViewType,
  ContextType
> {
  viewDelegate: () => Promise<() => ViewType>;
  envelopeContext: ContextType;
  envelopeClient: EnvelopeClient<ApiToProvide, ApiToConsume>;
}
export interface EnvelopeApiFactory<
  ApiToProvide extends ApiDefinition<ApiToProvide>,
  ApiToConsume extends ApiDefinition<ApiToConsume>,
  ViewType,
  ContextType
> {
  create(args: EnvelopeApiFactoryArgs<ApiToProvide, ApiToConsume, ViewType, ContextType>): ApiToProvide;
}
//# sourceMappingURL=EnvelopeApiFactory.d.ts.map
