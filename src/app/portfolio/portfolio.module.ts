import { NgModule } from '@angular/core';

// modules
import { PortfolioRoutingModule } from '@portfolio/portfolio-routing.module';

// containers
import { PortfolioPageComponent } from '@portfolio/containers/portfolio-page/portfolio-page.component';
import { ExchangeComponent } from '@portfolio/containers/exchange/exchange.component';
import { ExchangeConfigComponent } from '@portfolio/containers/exchange-config/exchange-config.component';

@NgModule({
  imports: [PortfolioRoutingModule],
  declarations: [
    // containers
    PortfolioPageComponent,
    ExchangeComponent,
    ExchangeConfigComponent
  ]
})
export class PortfolioModule {}
