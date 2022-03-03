import * as React from "react";
import { ErrorInfo } from "react";
interface State {
  hasError: boolean;
}
interface Props {
  children: React.ReactNode;
  error: React.ReactNode;
  setHasError?: React.Dispatch<boolean>;
}
export declare class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: any);
  reset(): void;
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
  render(): React.ReactNode;
  static getDerivedStateFromError(error: Error): {
    hasError: boolean;
  };
}
export {};
//# sourceMappingURL=ErrorBoundary.d.ts.map
