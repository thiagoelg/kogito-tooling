import { BaseEditorResources, EditorResources } from "../common/EditorResources";
export declare class BpmnEditorResources extends BaseEditorResources {
  get(args: { resourcesPathPrefix: string }): EditorResources;
  getReferencedJSPaths(
    resourcesPathPrefix: string,
    gwtModuleName: string
  ): {
    path: string;
  }[];
  getReferencedCSSPaths(
    resourcesPathPrefix: string,
    gwtModuleName: string
  ): {
    path: string;
  }[];
  getFontResources(
    resourcesPathPrefix: string,
    gwtModuleName: string
  ): (
    | {
        family: string;
        additionalStyle: string;
        sources: {
          mimeType: string;
          content: string;
          format: string;
        }[];
      }
    | {
        family: string;
        sources: {
          mimeType: string;
          content: string;
          format: string;
        }[];
        additionalStyle?: undefined;
      }
  )[];
  getEditorResourcesPath(): string;
  getTemplatePath(): string;
  getHtmlOutputPath(): string;
}
//# sourceMappingURL=BpmnEditorResources.d.ts.map
