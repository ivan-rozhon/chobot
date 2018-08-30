import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioPageComponent } from '@portfolio/containers/portfolio-page/portfolio-page.component';
import { ExchangeConfigPageComponent } from '@portfolio/containers/exchange-config-page/exchange-config-page.component';

const routes: Routes = [
  { path: '', component: PortfolioPageComponent },
  { path: 'exchange-config', component: ExchangeConfigPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}
