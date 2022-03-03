import { MessageBusClientApi } from "@kie-tools-core/envelope-bus/dist/api";
import { PingPongChannelApi, PingPongInitArgs } from "@kie-tools-examples/ping-pong-view/dist/api";
import { PingPongFactory } from "@kie-tools-examples/ping-pong-view/dist/envelope";
import { ReplaySubject, BehaviorSubject, Subject } from "rxjs";
declare global {
  interface Window {
    initArgs: PingPongInitArgs;
    channelApi: PingPongChannelApi;
  }
}
export interface LogEntry {
  line: string;
  time: number;
}
export declare class PingPongApiService implements PingPongFactory {
  channelApi: MessageBusClientApi<PingPongChannelApi>;
  initArgs: PingPongInitArgs;
  log: ReplaySubject<LogEntry>;
  logCleared: Subject<unknown>;
  lastPingTimestamp: BehaviorSubject<number>;
  dotInterval?: number;
  initialized: boolean;
  pingSubscription?: (source: string) => void;
  pongSubscription?: (source: string, replyingTo: string) => void;
  constructor();
  create(
    initArgs: PingPongInitArgs,
    channelApi: MessageBusClientApi<PingPongChannelApi>
  ): () => {
    clearLogs: () => void;
    getLastPingTimestamp: () => Promise<number>;
  };
  ping(): void;
  clearSubscriptions(): void;
  clearInterval(): void;
  ngOnDestroy(): void;
}
//# sourceMappingURL=ping-pong-api.service.d.ts.map
