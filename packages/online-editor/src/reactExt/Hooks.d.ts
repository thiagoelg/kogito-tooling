import { EffectCallback } from "react";
export declare function usePrevious<T>(value: T): T | undefined;
export declare function useController<T>(): [T | undefined, (controller: T) => void];
export declare type ArrowFunction<A, B> = (a: A) => B;
export declare class Holder<T> {
  private value;
  constructor(value: T);
  readonly get: () => T;
  readonly set: (newValue: T) => T;
}
export declare type CancelableEffectParams = {
  canceled: Holder<boolean>;
};
export declare function useCancelableEffect(effect: (args: CancelableEffectParams) => ReturnType<EffectCallback>): void;
//# sourceMappingURL=Hooks.d.ts.map
