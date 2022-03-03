import { FunctionCallRequest } from "./FunctionCallRequest";
import { FunctionResultType } from "./FunctionResultType";
export interface FunctionResponse {
  request: FunctionCallRequest;
  resultType: FunctionResultType;
  message: string;
  result: any;
}
//# sourceMappingURL=FunctionResponse.d.ts.map
