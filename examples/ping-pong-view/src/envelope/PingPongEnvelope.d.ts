import { EnvelopeBus } from "@kie-tools-core/envelope-bus/dist/api";
import { EnvelopeDivConfig, EnvelopeIFrameConfig } from "@kie-tools-core/envelope";
import { PingPongChannelApi, PingPongEnvelopeApi } from "../api";
import { PingPongFactory } from "./PingPongFactory";
export declare type PingPongViewType = HTMLElement | void;
export declare function init(args: {
  config: EnvelopeDivConfig | EnvelopeIFrameConfig;
  bus: EnvelopeBus;
  pingPongViewFactory: PingPongFactory;
}): Promise<
  import("@kie-tools-core/envelope-bus/dist/envelope").EnvelopeClient<PingPongEnvelopeApi, PingPongChannelApi>
>;
//# sourceMappingURL=PingPongEnvelope.d.ts.map
