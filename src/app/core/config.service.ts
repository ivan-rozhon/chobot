import { Injectable } from '@angular/core';

import { DataService } from '@core/data.service';
import { Config } from '@core/core.model';

@Injectable()
export class ConfigService {
  /** Actual main app config */
  config: Config;

  constructor(private dataService: DataService) {}

  /** run-time load configuration (when an application is initialized) */
  loadConfig(): Promise<Config> {
    return (
      this.dataService
        .getFile<Config>('assets/config/config.json')
        // APP_INITIALIZER only supports promises, so convert observable to promise
        .toPromise()
        .then((config: Config) => (this.config = config))
    );
  }

  /** returns loaded app config */
  getConfig(): Config {
    return this.config;
  }
}
