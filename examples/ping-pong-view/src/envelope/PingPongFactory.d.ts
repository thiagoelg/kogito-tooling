import { PingPongApi, PingPongChannelApi, PingPongInitArgs } from "../api";
import { MessageBusClientApi } from "@kie-tools-core/envelope-bus/dist/api";
export interface PingPongFactory {
  create(initArgs: PingPongInitArgs, channelApi: MessageBusClientApi<PingPongChannelApi>): () => PingPongApi | null;
}
//# sourceMappingURL=PingPongFactory.d.ts.map
