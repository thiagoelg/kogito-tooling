import { CommonI18n } from "@kie-tools/i18n-common-dictionary";
import { ReferenceDictionary } from "@kie-tools-core/i18n/dist/core";
interface DesktopDictionary extends ReferenceDictionary {
  fileOperations: {
    dialog: {
      savePreview: string;
      saveFile: string;
    };
  };
  menu: {
    open: {
      submenu: {
        file: {
          title: string;
          supported: string;
        };
        sample: string;
      };
    };
    saveAs: string;
    savePreviewAs: string;
    closeWindow: string;
    edit: {
      submenu: {
        label: string;
        selectAll: string;
      };
    };
    devMenu: {
      label: string;
      submenu: {
        showDevTools: string;
        clearUserData: string;
      };
    };
    macOsAppMenu: {
      submenu: {
        about: string;
        services: string;
        hide: string;
        hideOthers: string;
        showAll: string;
      };
    };
  };
}
export interface DesktopI18n extends DesktopDictionary, CommonI18n {}
export {};
//# sourceMappingURL=DesktopI18n.d.ts.map
