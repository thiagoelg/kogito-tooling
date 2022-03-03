import { ReferenceDictionary } from "@kie-tools-core/i18n/dist/core";
import { CommonI18n } from "@kie-tools/i18n-common-dictionary";
interface DesktopDictionary extends ReferenceDictionary {
  app: {
    title: string;
  };
  editorPage: {
    textEditorModal: {
      title: (fileName: string) => string;
    };
    alerts: {
      setContentError: {
        action: string;
        title: string;
      };
      copy: string;
      unsaved: {
        title: string;
        message: string;
        closeWithoutSaving: string;
      };
      saved: string;
      previewSaved: string;
    };
  };
  filesPage: {
    alerts: {
      errorFetchingFile: string;
      unexpectedErrorFetchingFile: string;
    };
    errorDetails: string;
    files: {
      title: string;
      bpmn: {
        blank: string;
        sample: string;
      };
      dmn: {
        blank: string;
        sample: string;
      };
    };
    openUrl: {
      initial: string;
      invalidExtension: string;
      invalidUrl: string;
      notFoundUrl: string;
      openFromSource: string;
      description: string;
    };
    recent: {
      title: string;
      noFilesYet: string;
    };
  };
  homePage: {
    learnMore: string;
  };
  learnMorePage: {
    readMore: string;
    bpmn: {
      title: string;
      explanation: string;
      create: string;
    };
    dmn: {
      title: string;
      explanation: string;
      learn: string;
      create: string;
    };
    about: string;
    editorsExplanation: string;
    getChromeExtension: string;
    getVsCodeExtension: string;
    redHatOpenSource: string;
    kogitoWebsite: string;
  };
}
export interface DesktopI18n extends DesktopDictionary, CommonI18n {}
export {};
//# sourceMappingURL=DesktopI18n.d.ts.map
