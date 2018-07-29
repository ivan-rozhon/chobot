import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '@shared/shared.module';
import { PortfolioRoutingModule } from '@portfolio/portfolio-routing.module';

// containers
import { PortfolioPageComponent } from '@portfolio/containers/portfolio-page/portfolio-page.component';
import { ExchangeComponent } from '@portfolio/containers/exchange/exchange.component';
import { ExchangeConfigComponent } from '@portfolio/containers/exchange-config/exchange-config.component';

// components
import { ExchangeListComponent } from './components/exchange-list/exchange-list.component';

@NgModule({
  imports: [SharedModule, PortfolioRoutingModule],
  declarations: [
    // containers
    PortfolioPageComponent,
    ExchangeComponent,
    ExchangeConfigComponent,
    ExchangeListComponent
  ]
})
export class PortfolioModule {}
