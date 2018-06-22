/** Additional request options (optional) */
export interface RequestOptions {
  accept: string;
  contentType: string;
  params?: {
    [key: string]: any;
  };
}

/** Main applicaton configuration. */
export interface Config {
  // default app variables - can be changed during app live
  defaults: {
    [key: string]: string;
  };

  // app constants - unchangeable settings
  constants: {
    [key: string]: string;
  };
}
