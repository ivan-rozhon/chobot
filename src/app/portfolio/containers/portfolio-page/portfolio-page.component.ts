import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromPortfolio from '@portfolio/portfolio.state';
import * as ExchangeActions from '@portfolio/state/exchange.actions';

@Component({
  selector: 'cc-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent {
  constructor(private store: Store<fromPortfolio.State>) {
    store.dispatch(new ExchangeActions.LoadList());
  }
}
