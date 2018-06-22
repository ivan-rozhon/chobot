import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '@shared/shared.module';
import { BotsRoutingModule } from '@bots/bots-routing.module';

// containers/components
import { BotsPageComponent } from '@bots/containers/bots-page/bots-page.component';
import { BotListComponent } from '@bots/components/bot-list/bot-list.component';

@NgModule({
  imports: [SharedModule, BotsRoutingModule],
  declarations: [BotsPageComponent, BotListComponent]
})
export class BotsModule {}
