/// <reference types="vscode" />
export interface KeyboardShortcutsApi {
  registerKeyPress(combination: string, label: string, onKeyPress: () => Thenable<void>, opts?: Opts): number;
  registerKeyDownThenUp(
    combination: string,
    label: string,
    onKeyDown: () => Thenable<void>,
    onKeyUp: () => Thenable<void>,
    opts?: Opts
  ): number;
  deregister(id: number): void;
}
export interface Opts {
  hidden?: boolean;
  element?: EventTarget;
  repeat?: boolean;
}
//# sourceMappingURL=KeyboardShorcutsApi.d.ts.map
