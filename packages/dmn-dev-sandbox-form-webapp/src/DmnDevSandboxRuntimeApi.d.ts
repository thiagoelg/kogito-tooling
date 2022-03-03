import { DecisionResult } from "@kie-tools/form/dist/dmn";
export interface FetchDmnResultArgs {
  modelName: string;
  inputs: any;
}
export declare function fetchDmnResult(args: FetchDmnResultArgs): Promise<DecisionResult[]>;
//# sourceMappingURL=DmnDevSandboxRuntimeApi.d.ts.map
