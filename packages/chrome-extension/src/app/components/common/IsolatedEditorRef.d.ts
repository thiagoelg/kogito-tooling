export declare type IsolatedEditorRef = {
  setContent(content: string): Promise<void>;
};
export declare function useIsolatedEditorRef(): {
  isolatedEditor: IsolatedEditorRef | undefined;
  isolatedEditorRef: (node: IsolatedEditorRef) => void;
};
//# sourceMappingURL=IsolatedEditorRef.d.ts.map
