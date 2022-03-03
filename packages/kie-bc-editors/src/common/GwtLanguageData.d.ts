export interface GwtLanguageData {
  type: string;
  editorId: string;
  gwtModuleName: string;
  resources: Resource[];
}
export interface Resource {
  type: "css" | "js";
  paths: string[];
  rel?: HTMLLinkElement["rel"];
}
//# sourceMappingURL=GwtLanguageData.d.ts.map
