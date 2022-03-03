import * as React from "react";
import { PingPongApi, PingPongChannelApi } from "../api";
export declare type EmbeddedDivPingPongProps = {
  apiImpl: PingPongChannelApi;
  targetOrigin: string;
  name: string;
  renderView: (container: HTMLDivElement, envelopeId?: string) => Promise<void>;
};
export declare const EmbeddedDivPingPong: React.ForwardRefExoticComponent<
  EmbeddedDivPingPongProps & React.RefAttributes<PingPongApi>
>;
//# sourceMappingURL=EmbeddedDivPingPong.d.ts.map
