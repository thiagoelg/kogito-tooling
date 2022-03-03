import { RefObject } from "react";
import { PingPongApi } from "@kie-tools-examples/ping-pong-view/dist/api";
export declare function usePingPongApiCallbacks(refs: RefObject<PingPongApi>[]): {
  onClearLogs: () => void;
  onGetLastPingTimestamp: () => Promise<number>;
};
export declare function usePingPongChannelApi(): {
  pingsCount: number;
  pongsCount: number;
  lastPing: string;
  lastPong: string;
  apiImpl: PingPongChannelApi;
};
//# sourceMappingURL=hooks.d.ts.map
