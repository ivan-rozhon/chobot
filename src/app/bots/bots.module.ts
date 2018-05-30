import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BotsRoutingModule } from './bots-routing.module';

// containers
import { BotsComponent } from './containers/bots.component';

@NgModule({
  imports: [CommonModule, BotsRoutingModule],
  declarations: [BotsComponent]
})
export class BotsModule {}
