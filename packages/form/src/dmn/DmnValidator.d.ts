import { DmnFormI18n } from "./i18n";
import { Validator } from "../core";
import { DmnFormJsonSchemaBridge } from "./uniforms";
export declare const DAYS_AND_TIME: RegExp;
export declare const YEARS_AND_MONTHS: RegExp;
export declare class DmnValidator extends Validator {
  private readonly i18n;
  private readonly SCHEMA_DRAFT4;
  constructor(i18n: DmnFormI18n);
  private setupValidator;
  createValidator(jsonSchema: any): (model: any) => {
    details: any;
  } | null;
  getBridge(formSchema: any): DmnFormJsonSchemaBridge;
}
//# sourceMappingURL=DmnValidator.d.ts.map
