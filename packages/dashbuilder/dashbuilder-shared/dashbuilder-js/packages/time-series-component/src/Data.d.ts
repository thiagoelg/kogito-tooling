export interface Options {
  chart: {
    id: string;
    zoom: {
      type: string;
      enabled: boolean;
      autoScaleYaxis: boolean;
    };
    toolbar: {
      show: boolean;
      autoSelected: string;
    };
  };
  title: {
    text: string;
    align: string;
  };
  xaxis: {
    type: string;
    categories: Array<string | number>;
  };
  dataLabels: {
    enabled: boolean;
  };
}
export interface SingleSeries {
  name: string;
  data: Array<string | number>;
}
//# sourceMappingURL=Data.d.ts.map
