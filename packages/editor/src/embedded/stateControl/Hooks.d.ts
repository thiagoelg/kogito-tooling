import { EmbeddedEditorRef } from "../embedded";
export declare function useDirtyState(editor?: EmbeddedEditorRef): boolean;
export declare function useStateControlSubscription(
  editor: EmbeddedEditorRef | undefined,
  callback: (isDirty: boolean) => void | Promise<void>,
  args?: {
    throttle: number;
  }
): void;
//# sourceMappingURL=Hooks.d.ts.map
