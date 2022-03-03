/// <reference types="react" />
interface Props {
  lastPing: string;
  lastPong: string;
  pings: number;
  pongs: number;
  onClearLogs?: () => void;
  onGetLastPingTimestamp?: () => Promise<number>;
}
export declare function StatsSidebar(props: Props): JSX.Element;
export {};
//# sourceMappingURL=StatsSidebar.d.ts.map
