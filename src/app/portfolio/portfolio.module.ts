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
import { ExchangeService } from '@portfolio/shared/services';

// containers
import { PortfolioPageComponent } from '@portfolio/containers/portfolio-page/portfolio-page.component';
import { ExchangePageComponent } from '@portfolio/containers/exchange-page/exchange-page.component';
import { ExchangeConfigPageComponent } from '@portfolio/containers/exchange-config-page/exchange-config-page.component';

// components
import { ExchangeListComponent } from '@portfolio/components/exchange-list/exchange-list.component';
import { ExchangeConfigComponent } from '@portfolio/components/exchange-config/exchange-config.component';

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
    ExchangePageComponent,
    ExchangeConfigPageComponent,
    // components
    ExchangeListComponent,
    ExchangeConfigComponent
  ],
  providers: [ExchangeService]
})
export class PortfolioModule {}
