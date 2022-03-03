import { ReferenceDictionary } from "@kie-tools-core/i18n/dist/core";
interface ChromeExtensionDictionary extends ReferenceDictionary {
  openIn: (text: string) => string;
  seeAsDiagram: string;
  fullScreen: string;
  reset: string;
  note: string;
  single: {
    exitFullScreen: string;
    editorToolbar: {
      fixAndSeeAsDiagram: string;
      errorOpeningFile: string;
      seeAsSource: string;
      copyLinkTo: (text: string) => string;
      linkCopied: string;
      readOnly: string;
    };
  };
  pr: {
    isolated: {
      viewOriginal: string;
    };
    toolbar: {
      closeDiagram: string;
      original: string;
      changes: string;
    };
  };
  common: {
    menu: {
      createToken: string;
      placeYourToken: string;
      tokenInfo: {
        title: string;
        disclaimer: string;
        explanation: string;
        whichPermissionUserGive: string;
        permission: string;
      };
    };
  };
}
export interface ChromeExtensionI18n extends ChromeExtensionDictionary {}
export {};
//# sourceMappingURL=ChromeExtensionI18n.d.ts.map
