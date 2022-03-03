export interface FormSchema {
  name: string;
  schema: any;
}
export declare enum FormStyle {
  PATTERNFLY = "patternfly",
  BOOTSTRAP = "bootstrap",
}
export declare enum FormAssetType {
  HTML = "html",
  TSX = "tsx",
}
export interface FormResources {
  styles: Record<string, string>;
  scripts: Record<string, string>;
}
export interface FormConfig {
  schema: string;
  resources: FormResources;
}
export interface FormAsset {
  id: string;
  assetName: string;
  content: string;
  type: FormAssetType | string;
  config: FormConfig;
}
export interface FormGenerationTool {
  type: string;
  generate: (schema: FormSchema) => FormAsset;
}
//# sourceMappingURL=types.d.ts.map
