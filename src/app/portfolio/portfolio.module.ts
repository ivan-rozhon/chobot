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
import { ExchangeComponent } from '@portfolio/containers/exchange/exchange.component';
import { ExchangeConfigComponent } from '@portfolio/containers/exchange-config/exchange-config.component';

// components
import { ExchangeListComponent } from '@portfolio/components/exchange-list/exchange-list.component';
import { ExchangeConfigFormComponent } from '@portfolio/components/exchange-config-form/exchange-config-form.component';

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
    // components
    ExchangeListComponent,
    ExchangeConfigFormComponent
  ],
  providers: [ExchangeService]
})
export class PortfolioModule {}
