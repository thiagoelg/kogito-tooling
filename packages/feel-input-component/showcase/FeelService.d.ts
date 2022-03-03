import * as Monaco from "@kie-tools-core/monaco-editor";
declare global {
  interface Window {
    __KIE__FEEL__?: FeelService;
  }
}
declare namespace org {
  namespace kie {
    namespace dmn {
      namespace feel {
        namespace client {
          namespace showcase {
            class FeelJS {
              getSuggestions: (
                feelExpression: string,
                row: number,
                col: number
              ) => {
                toArray: () => string[];
              };
              evaluate(expression: string): string;
            }
          }
        }
      }
    }
  }
}
export declare class FeelService {
  private feelGwt?;
  constructor(feelGwt?: org.kie.dmn.feel.client.showcase.FeelJS);
  static getInstance(): FeelService;
  getSuggestions(feelExpression: string, row: number, col: number): Monaco.languages.CompletionItem[];
  evaluate(expression: string): string;
}
export {};
//# sourceMappingURL=FeelService.d.ts.map
