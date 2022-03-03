/// <reference types="react" />
import { ComponentController, DataSet } from "@dashbuilder-js/component-api";
import { Options, SingleSeries } from "./Data";
export declare const NOT_ENOUGH_COLUMNS_MSG_NON_TRANSPOSED =
  "Time series component expects at least 2 columns: category(LABEL or TEXT or NUMBER or DATE) and one or more series(NUMBER).";
export declare const NOT_ENOUGH_COLUMNS_MSG_TRANSPOSED =
  "Time series component expects 3 columns: category(LABEL or TEXT or NUMBER or DATE), series(TEXT) and values(NUMBER).";
export declare const SECOND_COLUMN_INVALID_MSG_TRANSPOSED = "Wrong type for second column, it should be TEXT.";
export declare const THIRD_COLUMN_INVALID_MSG_TRANSPOSED = "Wrong type for third column, it should be NUMBER.";
export declare const CHARTNAME_VALIDATION = "Please remove all special characters and spaces in Chart Name";
export declare enum Params {
  TRANSPOSED = "transposed",
  CHARTNAME = "chartName",
  SHOWAREA = "showArea",
  XAXISTYPE = "xaxisType",
  DATALABELS = "dataLabels",
  ZOOMTYPE = "type",
  ZOOMENABLED = "enabled",
  ZOOMAUTOSCALEYAXIS = "autoScaleYaxis",
  TITLETEXT = "text",
  TITLEALIGN = "align",
  TOOLBARSHOW = "show",
  TOOLBARAUTOSELECTED = "autoSelected",
}
export declare const validateParams: (params: Map<string, string | number>) => string | undefined;
export declare const validateChartName: (chartName: string | number | undefined) => string | undefined;
export declare const validateNonTransposedDataset: (ds: DataSet) => string | undefined;
export declare const validateTransposedDataset: (ds: DataSet) => string | undefined;
interface Props {
  controller: ComponentController;
}
export declare function getSeriesforNonTransposedDataset(dataset: DataSet): SingleSeries[];
export declare function getSeriesforTransposedDataset(dataset: DataSet): SingleSeries[];
export declare function getOptions(
  dataset: DataSet,
  transposed: boolean,
  chartName: string,
  type: string,
  enabled: boolean,
  autoScaleYaxis: boolean,
  text: string,
  align: string,
  show: boolean,
  autoSelected: string,
  xaxisType: string
): Options;
export declare function Chart(props: Props): JSX.Element;
export {};
//# sourceMappingURL=Chart.d.ts.map
