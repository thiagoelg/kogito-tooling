import { JSONSchemaBridge } from "uniforms-bridge-json-schema";
export declare enum Duration {
  DaysAndTimeDuration = 0,
  YearsAndMonthsDuration = 1,
}
export declare class DmnFormJsonSchemaBridge extends JSONSchemaBridge {
  getProps(name: string, props: Record<string, any>): any;
  getType(name: string): any;
}
//# sourceMappingURL=DmnFormJsonSchemaBridge.d.ts.map
