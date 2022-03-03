import * as React from "react";
import { PingPongApi, PingPongChannelApi } from "../api";
export declare type EmbeddedIFramePingPongProps = {
  apiImpl: PingPongChannelApi;
  targetOrigin: string;
  name: string;
  envelopePath: string;
};
export declare const EmbeddedIFramePingPong: React.ForwardRefExoticComponent<
  EmbeddedIFramePingPongProps & React.RefAttributes<PingPongApi>
>;
//# sourceMappingURL=EmbeddedIFramePingPong.d.ts.map
