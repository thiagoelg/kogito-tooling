import { Association, PingPongChannelApi, PingPongEnvelopeApi, PingPongInitArgs, PingPongApi } from "../api";
import { EnvelopeApiFactoryArgs } from "@kie-tools-core/envelope";
import { PingPongFactory } from "./PingPongFactory";
export declare class PingPongEnvelopeApiImpl implements PingPongEnvelopeApi {
  private readonly args;
  private readonly pingPongViewFactory;
  constructor(
    args: EnvelopeApiFactoryArgs<PingPongEnvelopeApi, PingPongChannelApi, void, {}>,
    pingPongViewFactory: PingPongFactory
  );
  pingPongApi?: () => PingPongApi | null;
  pingPongView__init(association: Association, initArgs: PingPongInitArgs): Promise<void>;
  pingPongView__clearLogs(): Promise<void>;
  pingPongView__getLastPingTimestamp(): Promise<number>;
}
//# sourceMappingURL=PingPongEnvelopeApiImpl.d.ts.map
