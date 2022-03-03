import { FormSchema } from "../types";
export declare const ERROR_INVALID_FOLDER = "Path doesn't exist";
export declare const ERROR_NOT_DIRECTORY = "Path isn't a directory";
export declare const ERROR_NOT_MVN_PROJECT =
  "Cannot find 'pom.xml' in source folder, are you sure it is a Kogito Project?";
export declare function loadProjectSchemas(projectPath: string, jsonSchemaPath?: string): FormSchema[];
//# sourceMappingURL=loadProjectSchemas.d.ts.map
