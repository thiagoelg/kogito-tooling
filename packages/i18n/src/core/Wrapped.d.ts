export interface Wrapped<Name> {
  name: Name;
}
export declare function wrapped<Name extends string>(wrappedName: Name): Wrapped<Name>;
export declare type ExtractWrappedComponentNames<Component> = Component extends Wrapped<infer Name> ? Name : never;
//# sourceMappingURL=Wrapped.d.ts.map
