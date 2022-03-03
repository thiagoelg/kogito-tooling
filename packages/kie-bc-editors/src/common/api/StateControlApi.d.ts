import { KogitoCommandRegistry } from "../gwtStateControl";
export interface StateControlApi {
  registry: KogitoCommandRegistry<any>;
  setUndoCommand(undoCommand: () => void): void;
  setRedoCommand(redoCommand: () => void): void;
}
//# sourceMappingURL=StateControlApi.d.ts.map
