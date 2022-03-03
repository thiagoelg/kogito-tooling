/// <reference types="react" />
export interface SvgNodeValue {
  nodeId: string;
  value: number;
}
export interface SvgHeatmapProps {
  svgNodesValues: SvgNodeValue[];
  svgContent: string;
  width?: string;
  height?: string;
}
export declare function SvgHeatmap(props: SvgHeatmapProps): JSX.Element;
//# sourceMappingURL=SvgHeatmap.d.ts.map
