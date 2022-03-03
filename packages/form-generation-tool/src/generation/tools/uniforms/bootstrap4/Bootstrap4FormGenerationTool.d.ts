import { FormAsset, FormConfig, FormGenerationTool, FormSchema } from "../../../types";
export declare const BOOTSTRAP4_CSS_URL = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
export declare const BOOTSTRAP4_JS_URL = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js";
export declare const JQUERY_URL = "https://code.jquery.com/jquery-3.2.1.slim.min.js";
export declare class Bootstrap4FormConfig implements FormConfig {
  readonly schema: string;
  constructor(formSchema: any);
  resources: {
    styles: {
      "bootstrap.min.css": string;
    };
    scripts: {
      "jquery.js": string;
      "bootstrap.bundle.min.js": string;
    };
  };
}
export declare class Bootstrap4FormGenerationTool implements FormGenerationTool {
  type: string;
  generate(inputSchema: FormSchema): FormAsset;
}
//# sourceMappingURL=Bootstrap4FormGenerationTool.d.ts.map
