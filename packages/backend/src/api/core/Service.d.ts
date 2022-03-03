export interface Service {
  identify(): string;
  start(): Promise<void>;
  stop(): void;
  satisfyRequirements(): Promise<boolean>;
}
//# sourceMappingURL=Service.d.ts.map
