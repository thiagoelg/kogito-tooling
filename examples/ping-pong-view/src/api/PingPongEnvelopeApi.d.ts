export interface PingPongEnvelopeApi {
  pingPongView__init(association: Association, initArgs: PingPongInitArgs): Promise<void>;
  pingPongView__clearLogs(): Promise<void>;
  pingPongView__getLastPingTimestamp(): Promise<number>;
}
export interface Association {
  origin: string;
  envelopeServerId: string;
}
export interface PingPongInitArgs {
  name: string;
}
//# sourceMappingURL=PingPongEnvelopeApi.d.ts.map
