/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    getEditor(): Chainable<JQuery<HTMLBodyElement>>;
    loadEditor(): void;
    confirmAutomaticLayoutDialogue(): void;
    ouia(
      locator: {
        ouiaType?: string;
        ouiaId: string;
      },
      opts?: Record<string, any>
    ): Chainable<Element>;
  }
}
//# sourceMappingURL=commands.d.ts.map
