import * as Monaco from "@kie-tools-core/monaco-editor";
export declare const MONACO_FEEL_LANGUAGE = "feel-language";
export declare const MONACO_FEEL_THEME = "feel-theme";
export declare const feelTheme: () => Monaco.editor.IStandaloneThemeData;
export declare const feelTokensConfig: () => Monaco.languages.IMonarchLanguage;
export declare const feelDefaultConfig: (
  options?: Monaco.editor.IStandaloneEditorConstructionOptions | undefined
) => Monaco.editor.IStandaloneEditorConstructionOptions;
export declare const feelDefaultSuggestions: () => Monaco.languages.CompletionItem[];
//# sourceMappingURL=FeelConfigs.d.ts.map
