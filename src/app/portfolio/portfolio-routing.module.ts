import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioPageComponent } from '@portfolio/containers/portfolio-page/portfolio-page.component';
import { ExchangeConfigComponent } from '@portfolio/containers/exchange-config/exchange-config.component';

const routes: Routes = [
  { path: '', component: PortfolioPageComponent },
  { path: 'exchange-config', component: ExchangeConfigComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}
