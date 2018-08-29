// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // this variable is for application internal settings
  production: false,

  // it sets path after /#/ sign
  // example: '/#/{href}/...'
  href: '',

  // context root of application
  contextRoot: '',

  // path to application`s assets (config, images,...)
  assets: '',

  // define a host`s URL (if blank '', it will be relative)
  host: '',

  // REST API path
  api: '/dream-bot/api/v1'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.
