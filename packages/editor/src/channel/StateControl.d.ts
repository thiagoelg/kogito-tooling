interface Command {
  id: string;
  undo?: () => void;
  redo?: () => void;
}
export declare class StateControl {
  private commandStack;
  private currentCommand?;
  private savedCommand?;
  private registeredCallbacks;
  constructor();
  subscribe(callback: (isDirty: boolean) => void): (isDirty: boolean) => void;
  unsubscribe(callback: (isDirty: boolean) => void): void;
  getSavedCommand(): Command | undefined;
  getCurrentCommand(): Command | undefined;
  getCommandStack(): Command[];
  getRegisteredCallbacks(): ((isDirty: boolean) => void)[];
  setSavedCommand(): void;
  private setCurrentCommand;
  isDirty(): boolean;
  undo(): void;
  redo(): void;
  private eraseRedoCommands;
  updateCommandStack(command: Command): void;
}
export {};
//# sourceMappingURL=StateControl.d.ts.map
