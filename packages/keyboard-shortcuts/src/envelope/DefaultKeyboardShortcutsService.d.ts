/// <reference types="vscode" />
import { OperatingSystem } from "@kie-tools-core/operating-system";
import { KeyboardShortcutRegisterOpts } from "./KeyboardShortcutRegisterOpts";
export interface KeyBinding {
  combination: string;
  label: string;
  opts?: KeyboardShortcutRegisterOpts;
  listener: (e: KeyboardEvent) => boolean;
}
export declare enum ModKeys {
  CTRL = "ctrl",
  META = "meta",
  ALT = "alt",
  SHIFT = "shift",
}
export declare class DefaultKeyboardShortcutsService {
  private readonly args;
  private eventIdentifiers;
  private readonly keyBindings;
  constructor(args: { os?: OperatingSystem });
  registerKeyDownThenUp(
    combination: string,
    label: string,
    onKeyDown: (target: EventTarget | null) => Thenable<void>,
    onKeyUp: (target: EventTarget | null) => Thenable<void>,
    opts?: KeyboardShortcutRegisterOpts
  ): number;
  registerKeyPress(
    combination: string,
    label: string,
    onKeyPress: (target: EventTarget | null) => Thenable<void>,
    opts?: KeyboardShortcutRegisterOpts
  ): number;
  registerKeyPressOnce(
    combination: string,
    onKeyPress: (target: EventTarget | null) => Thenable<void>,
    opts?: KeyboardShortcutRegisterOpts
  ): number;
  deregister(id: number): void;
  private keyBindingElement;
  private combinationKeySet;
  private pressedKeySet;
  registered(): KeyBinding[];
}
//# sourceMappingURL=DefaultKeyboardShortcutsService.d.ts.map
