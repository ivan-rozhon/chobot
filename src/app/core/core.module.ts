import { NgModule } from '@angular/core';

import { DataService } from '@core/data.service';
import { ConfigService } from '@core/config.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: [DataService, ConfigService]
})
export class CoreModule {}
