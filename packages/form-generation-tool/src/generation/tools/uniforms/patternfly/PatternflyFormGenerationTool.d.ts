import { FormAsset, FormConfig, FormGenerationTool, FormSchema } from "../../../types";
export declare class PatternflyFormConfig implements FormConfig {
  readonly schema: string;
  constructor(formSchema: any);
  resources: {
    styles: {};
    scripts: {};
  };
}
export declare class PatternflyFormGenerationTool implements FormGenerationTool {
  type: string;
  generate(inputSchema: FormSchema): FormAsset;
}
//# sourceMappingURL=PatternflyFormGenerationTool.d.ts.map
