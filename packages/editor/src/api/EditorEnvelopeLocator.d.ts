import { IMinimatch } from "minimatch";
export declare class EnvelopeMapping {
  readonly type: string;
  readonly filePathGlob: string;
  readonly resourcesPathPrefix: string;
  readonly envelopePath: string;
  matcher: IMinimatch;
  constructor(type: string, filePathGlob: string, resourcesPathPrefix: string, envelopePath: string);
}
export declare class EditorEnvelopeLocator {
  readonly targetOrigin: string;
  readonly envelopeMappings: EnvelopeMapping[];
  constructor(targetOrigin: string, envelopeMappings: EnvelopeMapping[]);
  getEnvelopeMapping(path: string): EnvelopeMapping | undefined;
  hasMappingFor(path: string): boolean;
}
//# sourceMappingURL=EditorEnvelopeLocator.d.ts.map
