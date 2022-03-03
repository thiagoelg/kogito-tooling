import { ReferenceDictionary, Wrapped } from "@kie-tools-core/i18n/dist/core";
import { CommonI18n } from "@kie-tools/i18n-common-dictionary";
interface DmnFormDictionary extends ReferenceDictionary {
  formToolbar: {
    disclaimer: {
      title: string;
      description: string;
    };
  };
  page: {
    error: {
      title: string;
      explanation: string;
      dmnNotSupported: string;
      uploadFiles: string;
      referToJira: Array<string | Wrapped<"jira">>;
    };
  };
  error: {
    title: string;
    notFound: string;
  };
}
export interface DmnFormI18n extends DmnFormDictionary, CommonI18n {}
export {};
//# sourceMappingURL=DmnFormI18n.d.ts.map
