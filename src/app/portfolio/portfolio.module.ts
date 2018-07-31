import { NgModule } from '@angular/core';

// @ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// state
import { reducers } from '@portfolio/portfolio.state';
import { ExchangeEffects } from '@portfolio/state/exchange.effects';

// modules
import { SharedModule } from '@shared/shared.module';
import { PortfolioRoutingModule } from '@portfolio/portfolio-routing.module';

// services
import { PortfolioService } from '@portfolio/portfolio.service';

// containers
import { PortfolioPageComponent } from '@portfolio/containers/portfolio-page/portfolio-page.component';
import { ExchangeComponent } from '@portfolio/containers/exchange/exchange.component';
import { ExchangeConfigComponent } from '@portfolio/containers/exchange-config/exchange-config.component';

// components
import { ExchangeListComponent } from './components/exchange-list/exchange-list.component';

@NgModule({
  imports: [
    // @ngrx
    StoreModule.forFeature('portfolio', reducers),
    EffectsModule.forFeature([ExchangeEffects]),
    // modules
    SharedModule,
    PortfolioRoutingModule
  ],
  declarations: [
    // containers
    PortfolioPageComponent,
    ExchangeComponent,
    ExchangeConfigComponent,
    ExchangeListComponent
  ],
  providers: [PortfolioService]
})
export class PortfolioModule {}
