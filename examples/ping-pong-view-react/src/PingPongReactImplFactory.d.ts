import { MessageBusClientApi } from "@kie-tools-core/envelope-bus/dist/api";
import * as React from "react";
import { PingPongFactory } from "@kie-tools-examples/ping-pong-view/dist/envelope";
import { PingPongChannelApi, PingPongInitArgs } from "@kie-tools-examples/ping-pong-view/dist/api";
export declare class PingPongReactImplFactory implements PingPongFactory {
  private setView;
  constructor(setView: React.Dispatch<React.SetStateAction<React.ReactElement>>);
  create(initArgs: PingPongInitArgs, channelApi: MessageBusClientApi<PingPongChannelApi>): () => any;
}
//# sourceMappingURL=PingPongReactImplFactory.d.ts.map
