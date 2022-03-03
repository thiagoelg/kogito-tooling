import { DataSet, FilterRequest } from "../dataset";
import { FunctionCallRequest, FunctionResponse } from "../function";
import { ComponentBus } from "./ComponentBus";
import { ComponentController } from "./ComponentController";
export declare class DashbuilderComponentController implements ComponentController {
  private bus;
  private componentId?;
  private callbacks;
  constructor(bus: ComponentBus, componentId?: string | undefined);
  onInit: (params: Map<string, any>) => void;
  onDataSet: (dataSet: DataSet, params?: Map<string, any>) => void;
  init(params: Map<string, any>): void;
  setOnDataSet(onDataSet: (dataSet: DataSet, params?: Map<string, any>) => void): void;
  setOnInit(onInit: (params: Map<string, any>) => void): void;
  ready(): void;
  requireConfigurationFix(message: string): void;
  configurationOk(): void;
  filter(filterRequest: FilterRequest): void;
  callFunction(functionCallRequest: FunctionCallRequest): Promise<any>;
  receiveFunctionResponse(functionResponse: FunctionResponse): void;
  setComponentBus(bus: ComponentBus): void;
  private buildFunctionKey;
}
//# sourceMappingURL=DashbuilderComponentController.d.ts.map
