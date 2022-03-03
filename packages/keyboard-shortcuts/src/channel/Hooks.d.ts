import { MessageBusClientApi } from "@kie-tools-core/envelope-bus/dist/api";
import { KeyboardShortcutsEnvelopeApi } from "../api";
export declare function useElementsThatStopKeyboardEventsPropagation(
  element: HTMLElement | Window | undefined,
  selectors: string[]
): () => void;
export declare function useSyncedKeyboardEvents(
  envelopeApi: MessageBusClientApi<KeyboardShortcutsEnvelopeApi>,
  element?: HTMLElement | Window
): void;
//# sourceMappingURL=Hooks.d.ts.map
