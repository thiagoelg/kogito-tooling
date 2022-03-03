import * as Monaco from "@kie-tools-core/monaco-editor";
import * as React from "react";
import { SuggestionProvider } from "../Monaco";
export interface FeelInputProps {
  enabled: boolean;
  value?: string;
  suggestionProvider?: SuggestionProvider;
  onBlur?: (value: string) => void;
  onLoad?: (preview: string) => void;
  onKeyDown?: (event: Monaco.IKeyboardEvent, value: string) => void;
  onChange?: (event: Monaco.editor.IModelContentChangedEvent, value: string, preview: string) => void;
  options?: Monaco.editor.IStandaloneEditorConstructionOptions;
}
export interface FeelInputRef {
  setMonacoValue: (newValue: string) => void;
}
export declare const FeelInput: React.ForwardRefExoticComponent<FeelInputProps & React.RefAttributes<FeelInputRef>>;
//# sourceMappingURL=FeelInput.d.ts.map
