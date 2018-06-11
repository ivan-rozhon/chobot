import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { BotsRoutingModule } from './bots-routing.module';

// components
import { BotsComponent } from './containers/bots.component';

@NgModule({
  imports: [SharedModule, BotsRoutingModule],
  declarations: [BotsComponent]
})
export class BotsModule {}
