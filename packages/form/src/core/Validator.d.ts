import JSONSchemaBridge from "uniforms-bridge-json-schema";
export declare class Validator {
  protected readonly ajv: any;
  createValidator(jsonSchema: any): (model: any) => {
    details: any;
  } | null;
  getBridge(formSchema: any): JSONSchemaBridge;
}
//# sourceMappingURL=Validator.d.ts.map
