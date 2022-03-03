import { ReferenceDictionary } from "@kie-tools-core/i18n/dist/core";
export interface EditorEnvelopeDictionary extends ReferenceDictionary {
  keyBindingsHelpOverlay: {
    title: string;
    categories: {
      edit: string;
      help: string;
    };
    commands: {
      undo: string;
      redo: string;
      showKeyboardOverlay: string;
    };
  };
  loadingScreen: {
    loading: string;
  };
}
export interface EditorEnvelopeI18n extends EditorEnvelopeDictionary {}
//# sourceMappingURL=EditorEnvelopeI18n.d.ts.map
