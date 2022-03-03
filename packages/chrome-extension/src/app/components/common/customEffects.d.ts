import { DependencyList, EffectCallback } from "react";
export declare function useEffectAfterFirstRender(func: () => ReturnType<EffectCallback>, deps: DependencyList): void;
export declare function useIsolatedEditorTogglingEffect(
  textMode: boolean,
  iframeContainer: HTMLElement,
  githubTextEditorToReplace: HTMLElement
): void;
export declare function useInitialAsyncCallEffect<T>(promise: () => Promise<T>, callback: (a: T) => void): void;
//# sourceMappingURL=customEffects.d.ts.map
