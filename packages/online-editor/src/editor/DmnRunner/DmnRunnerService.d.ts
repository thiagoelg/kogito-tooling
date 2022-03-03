import { DmnResult, DmnSchema } from "@kie-tools/form/dist/dmn";
export interface DmnRunnerModelResource {
  URI: string;
  content: string;
}
export interface DmnRunnerModelPayload {
  mainURI: string;
  resources: DmnRunnerModelResource[];
  context?: any;
}
export declare class DmnRunnerService {
  private readonly baseUrl;
  private readonly DMN_RUNNER_VALIDATE_URL;
  private readonly DMN_RUNNER_DMN_RESULT_URL;
  private readonly DMN_RUNNER_FORM_SCHEMA_URL;
  constructor(baseUrl: string);
  result(payload: DmnRunnerModelPayload): Promise<DmnResult>;
  validate(payload: DmnRunnerModelPayload): Promise<[]>;
  formSchema(payload: DmnRunnerModelPayload): Promise<DmnSchema>;
  private isPayloadValid;
}
//# sourceMappingURL=DmnRunnerService.d.ts.map
