import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '@shared/shared.module';
import { BotsRoutingModule } from '@bots/bots-routing.module';

// components
import { BotsComponent } from '@bots/containers/bots.component';

@NgModule({
  imports: [SharedModule, BotsRoutingModule],
  declarations: [BotsComponent]
})
export class BotsModule {}
