import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotsPageComponent } from '@bots/containers/bots-page/bots-page.component';
import { BotConfigComponent } from '@bots/containers/bot-config/bot-config.component';

const routes: Routes = [{ path: '', component: BotsPageComponent }, { path: 'config', component: BotConfigComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BotsRoutingModule {}
