import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '@shared/shared.module';
import { BotsRoutingModule } from '@bots/bots-routing.module';

// containers
import { BotsPageComponent } from '@bots/containers/bots-page/bots-page.component';
import { BotConfigComponent } from './containers/bot-config/bot-config.component';
import { BotDetailComponent } from './containers/bot-detail/bot-detail.component';
// components
import { BotListComponent } from '@bots/components/bot-list/bot-list.component';

@NgModule({
  imports: [SharedModule, BotsRoutingModule],
  declarations: [
    // containers
    BotsPageComponent,
    BotConfigComponent,
    BotDetailComponent,
    // components
    BotListComponent
  ]
})
export class BotsModule {}
