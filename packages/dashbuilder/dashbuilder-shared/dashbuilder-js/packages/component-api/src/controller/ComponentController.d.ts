import { DataSet, FilterRequest } from "../dataset";
import { FunctionCallRequest } from "../function";
export interface ComponentController {
  setOnInit(onInit: (params: Map<string, any>) => void): void;
  setOnDataSet(onDataSet: (dataSet: DataSet, params?: Map<string, any>) => void): void;
  ready(): void;
  requireConfigurationFix(message: string): void;
  configurationOk(): void;
  filter(filterRequest: FilterRequest): void;
  callFunction(functionCallRequest: FunctionCallRequest): Promise<any>;
}
//# sourceMappingURL=ComponentController.d.ts.map
