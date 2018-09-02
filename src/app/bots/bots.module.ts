import { NgModule } from '@angular/core';

// @ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// state
import { reducers } from '@bots/bots.state';
import { BotEffects } from '@bots/state/bot.effects';

// modules
import { SharedModule } from '@shared/shared.module';
import { BotsRoutingModule } from '@bots/bots-routing.module';

// services
import { BotService } from '@bots/shared/services';

// containers
import { BotsPageComponent } from '@bots/containers/bots-page/bots-page.component';
import { BotConfigComponent } from '@bots/containers/bot-config/bot-config.component';
import { BotDetailComponent } from '@bots/containers/bot-detail/bot-detail.component';

// components
import { BotListComponent } from '@bots/components/bot-list/bot-list.component';

@NgModule({
  imports: [
    // @ngrx
    StoreModule.forFeature('bots', reducers),
    EffectsModule.forFeature([BotEffects]),
    SharedModule,
    BotsRoutingModule
  ],
  declarations: [
    // containers
    BotsPageComponent,
    BotConfigComponent,
    BotDetailComponent,
    // components
    BotListComponent
  ],
  providers: [BotService]
})
export class BotsModule {}
