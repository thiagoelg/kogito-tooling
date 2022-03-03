import { DataSet } from "./dataset";
import { ComponentController } from "./controller";
export declare class ComponentApi {
  private bus;
  private controller;
  private listener;
  constructor();
  getComponentController(
    onInit?: (params: Map<string, any>) => void,
    onDataSet?: (dataSet: DataSet, params?: Map<string, any>) => void
  ): ComponentController;
  restart(): void;
  destroy(): void;
}
//# sourceMappingURL=ComponentApi.d.ts.map
