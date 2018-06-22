import { ConfigService } from '@core/config.service';

// app config initialization function
export const appInitializerFn = (config: ConfigService) => {
  return () => {
    return config.loadConfig();
  };
};
