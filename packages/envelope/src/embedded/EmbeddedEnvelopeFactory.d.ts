import { ApiDefinition } from "@kie-tools-core/envelope-bus/dist/api";
import { EnvelopeServer } from "@kie-tools-core/envelope-bus/dist/channel";
import * as React from "react";
import { ContainerType } from "../api";
export interface EnvelopeDivConfig {
  containerType: ContainerType.DIV;
}
export interface EnvelopeIFrameConfig {
  containerType: ContainerType.IFRAME;
  envelopePath: string;
}
export interface EmbeddedEnvelopeProps<
  ApiToProvide extends ApiDefinition<ApiToProvide>,
  ApiToConsume extends ApiDefinition<ApiToConsume>,
  Ref
> {
  refDelegate: (envelopeServer: EnvelopeServer<ApiToProvide, ApiToConsume>) => Ref;
  apiImpl: ApiToProvide;
  origin: string;
  config: EnvelopeDivConfig | EnvelopeIFrameConfig;
  pollInit: (
    envelopeServer: EnvelopeServer<ApiToProvide, ApiToConsume>,
    container: () => HTMLDivElement | HTMLIFrameElement
  ) => Promise<any>;
}
export declare function RefForwardingEmbeddedEnvelope<
  ApiToProvide extends ApiDefinition<ApiToProvide>,
  ApiToConsume extends ApiDefinition<ApiToConsume>,
  Ref
>(props: EmbeddedEnvelopeProps<ApiToProvide, ApiToConsume, Ref>, forwardRef: React.RefObject<Ref>): JSX.Element;
export declare const EmbeddedEnvelope: React.ForwardRefExoticComponent<
  EmbeddedEnvelopeProps<
    ApiDefinition<ApiDefinition<ApiDefinition<any>>>,
    ApiDefinition<ApiDefinition<ApiDefinition<any>>>,
    unknown
  > &
    React.RefAttributes<unknown>
>;
//# sourceMappingURL=EmbeddedEnvelopeFactory.d.ts.map
