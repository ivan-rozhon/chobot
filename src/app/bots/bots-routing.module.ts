import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotsComponent } from './containers/bots.component';

const routes: Routes = [{ path: '', component: BotsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BotsRoutingModule {}
