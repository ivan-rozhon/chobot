import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotsPageComponent } from '@bots/containers/bots-page/bots-page.component';

const routes: Routes = [{ path: '', component: BotsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BotsRoutingModule {}
