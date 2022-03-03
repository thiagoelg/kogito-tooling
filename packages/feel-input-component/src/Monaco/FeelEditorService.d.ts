import * as Monaco from "@kie-tools-core/monaco-editor";
import { SuggestionProvider } from ".";
export declare class FeelEditorService {
  private standaloneEditor?;
  private domElement?;
  private onChange?;
  private onKeyDown?;
  private options?;
  private onBlur?;
  static getEditorBuilder(suggestionProvider?: SuggestionProvider): FeelEditorService;
  static setServiceInstance(editor: FeelEditorService | undefined): void;
  static getServiceInstance(): FeelEditorService | undefined;
  static getStandaloneEditor(): Monaco.editor.IStandaloneCodeEditor | undefined;
  static dispose(): void;
  static isInitialized(): boolean;
  withDomElement(domElement: HTMLElement): this;
  withOnChange(
    onChange?: (event: Monaco.editor.IModelContentChangedEvent, content: string, preview: string) => void
  ): this;
  withOnKeyDown(onKeyDown?: (event: Monaco.IKeyboardEvent, value: string) => void): this;
  withOnBlur(onBlur?: (value: string) => void): this;
  withOptions(options?: Monaco.editor.IStandaloneEditorConstructionOptions): this;
  createEditor(): Monaco.editor.IStandaloneCodeEditor;
  colorize(value: string): Promise<string>;
  private firstSetup;
  dispose(): void;
  private getValue;
  private createStandaloneEditor;
  private setupOnChange;
  private setupOnBlur;
  private setupOnKeyDown;
}
//# sourceMappingURL=FeelEditorService.d.ts.map
