import { DmnSchema } from "@kie-tools/form/dist/dmn";
import * as React from "react";
import { DmnRunnerModelPayload, DmnRunnerService } from "./DmnRunnerService";
import { DmnRunnerMode, DmnRunnerStatus } from "./DmnRunnerStatus";
export interface DmnRunnerContextType {
  inputRows: Array<object>;
  currentInputRowIndex: number;
  error: boolean;
  isExpanded: boolean;
  mode: DmnRunnerMode;
  jsonSchema?: DmnSchema;
  service: DmnRunnerService;
  status: DmnRunnerStatus;
}
export interface DmnRunnerCallbacksContextType {
  preparePayload: (formData?: any) => Promise<DmnRunnerModelPayload>;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentInputRowIndex: React.Dispatch<React.SetStateAction<number>>;
  setMode: React.Dispatch<React.SetStateAction<DmnRunnerMode>>;
  setInputRows: React.Dispatch<React.SetStateAction<any>>;
}
export declare const DmnRunnerStateContext: React.Context<DmnRunnerContextType>;
export declare const DmnRunnerDispatchContext: React.Context<DmnRunnerCallbacksContextType>;
export declare function useDmnRunnerState(): DmnRunnerContextType;
export declare function useDmnRunnerDispatch(): DmnRunnerCallbacksContextType;
//# sourceMappingURL=DmnRunnerContext.d.ts.map
