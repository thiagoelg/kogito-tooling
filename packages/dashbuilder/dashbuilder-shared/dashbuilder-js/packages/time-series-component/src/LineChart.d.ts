/// <reference types="react" />
import { Options, SingleSeries } from "./Data";
export declare type ChartType = "line" | "area";
export interface ChartProps {
  type?: ChartType;
  options: Options;
  series: SingleSeries[];
}
export declare function LineChart(props: ChartProps): JSX.Element;
//# sourceMappingURL=LineChart.d.ts.map
