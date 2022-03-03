import * as React from "react";
export declare type AlertDelegate<T> = (
  args: {
    close: () => void;
    secondsUntilAutoClose?: number;
  } & Partial<AlertAutoCloseArgs>,
  staticArgs: T
) => React.ReactNode;
export interface AlertAutoCloseArgs {
  durationInSeconds: number;
}
export interface AlertsController {
  closeAll(): void;
  show(key: string, staticArgs: unknown): void;
  close(key: string): void;
  set(key: string, alertDelegate: AlertDelegate<unknown>, autoCloseArgs?: AlertAutoCloseArgs): void;
}
declare type Props = {
  width: string;
};
export declare const Alerts: React.ForwardRefExoticComponent<Props & React.RefAttributes<AlertsController>>;
export declare function useAlert<T = void>(
  alertsController: AlertsController | undefined,
  delegate: AlertDelegate<T>,
  autoCloseArgs?: AlertAutoCloseArgs
): {
  close: () => void | undefined;
  show: (staticArgs: T) => void | undefined;
};
export {};
//# sourceMappingURL=Alerts.d.ts.map
