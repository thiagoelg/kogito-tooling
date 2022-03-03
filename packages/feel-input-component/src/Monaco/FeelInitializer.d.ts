import * as Monaco from "@kie-tools-core/monaco-editor";
import "monaco-editor/dev/vs/editor/editor.main.css";
export declare type SuggestionProvider = (
  feelExpression: string,
  row: number,
  col: number
) => Monaco.languages.CompletionItem[];
export declare const initializeFeelLanguage: () => void;
export declare const initializeMonacoTheme: () => void;
export declare const initializeFeelTokensProvider: () => void;
export declare const initializeFeelCompletionItemProvider: (suggestionProvider?: SuggestionProvider | undefined) => (
  model: Monaco.editor.ITextModel,
  position: Monaco.Position
) => {
  suggestions: Monaco.languages.CompletionItem[];
};
//# sourceMappingURL=FeelInitializer.d.ts.map
