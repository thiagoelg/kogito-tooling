export declare enum UrlType {
  GIT = 0,
  GITHUB = 1,
  GIST = 2,
  GIST_FILE = 3,
  GITHUB_FILE = 4,
  FILE = 5,
  ZIP = 6,
  INVALID = 7,
}
export declare type ImportableUrl =
  | {
      type: UrlType.ZIP;
      error?: undefined;
      url: URL;
    }
  | {
      type: UrlType.FILE;
      error?: undefined;
      url: URL;
    }
  | {
      type: UrlType.GIT;
      error?: undefined;
      url: URL;
    }
  | {
      type: UrlType.GIST;
      error?: undefined;
      gistId?: string;
      url: URL;
    }
  | {
      type: UrlType.GIST_FILE;
      error?: undefined;
      url: URL;
      gistId: string;
      fileName: string;
    }
  | {
      type: UrlType.GITHUB_FILE;
      error?: undefined;
      url: URL;
      org: string;
      repo: string;
      branch: string;
      filePath: string;
    }
  | {
      type: UrlType.GITHUB;
      error?: undefined;
      url: URL;
      branch?: string;
    }
  | {
      type: UrlType.INVALID;
      error: string;
      url: string;
    };
export declare function useImportableUrl(urlString?: string, allowedUrlTypes?: UrlType[]): ImportableUrl;
//# sourceMappingURL=ImportableUrlHooks.d.ts.map
