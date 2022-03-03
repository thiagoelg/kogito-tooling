import * as React from "react";
import { PingPongChannelApi, PingPongInitArgs } from "@kie-tools-examples/ping-pong-view/dist/api";
import { MessageBusClientApi } from "@kie-tools-core/envelope-bus/dist/api";
interface Props {
  initArgs: PingPongInitArgs;
  channelApi: MessageBusClientApi<PingPongChannelApi>;
}
export declare const PingPongReactImpl: React.ForwardRefExoticComponent<Props & React.RefAttributes<PingPongApi>>;
export {};
//# sourceMappingURL=PingPongReactImpl.d.ts.map
