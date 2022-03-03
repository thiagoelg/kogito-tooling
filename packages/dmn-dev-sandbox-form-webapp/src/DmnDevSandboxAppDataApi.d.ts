import { DmnSchema } from "@kie-tools/form/dist/dmn";
export interface FormData {
  uri: string;
  modelName: string;
  schema: DmnSchema;
}
export interface AppData {
  baseUrl: string;
  forms: FormData[];
}
export declare function fetchAppData(): Promise<AppData>;
//# sourceMappingURL=DmnDevSandboxAppDataApi.d.ts.map
