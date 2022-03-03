import * as React from "react";
export declare type Pending<T> = {
  status: PromiseStateStatus.PENDING;
  data?: undefined;
  error?: undefined;
};
export declare type Resolved<T> = {
  status: PromiseStateStatus.RESOLVED;
  data: T;
  error?: undefined;
};
export declare type Rejected<T> = {
  status: PromiseStateStatus.REJECTED;
  data?: undefined;
  error: string[];
};
export declare type PromiseState<T> = Resolved<T> | Pending<T> | Rejected<T>;
export declare type Unwrapped<T> = {
  [K in keyof T]: T[K] extends PromiseState<infer U> ? U : never;
};
export declare type NewStateArgs<T> =
  | {
      loading?: false;
      data: T;
      error?: undefined;
    }
  | {
      loading?: false;
      data?: undefined;
      error: string;
    }
  | {
      loading: true;
      data?: undefined;
      error?: undefined;
    };
export declare enum PromiseStateStatus {
  PENDING = 0,
  RESOLVED = 1,
  REJECTED = 2,
}
export declare function useDelay(ms: number): PromiseState<boolean>;
export declare function useDelayedPromiseState<T>(ms: number): [PromiseState<T>, (newState: NewStateArgs<T>) => void];
export declare function usePromiseState<T>(): [PromiseState<T>, (newState: NewStateArgs<T>) => void];
export declare function useCombinedPromiseState<
  T = {
    [key: string]: PromiseState<any>;
  }
>(args: T): PromiseState<Unwrapped<T>>;
export declare function PromiseStateWrapper<T>(props: {
  promise: PromiseState<T>;
  pending?: React.ReactNode;
  resolved?: (data: Resolved<T>["data"]) => React.ReactNode;
  rejected?: (error: Rejected<T>["error"]) => React.ReactNode;
}): JSX.Element;
//# sourceMappingURL=PromiseState.d.ts.map
