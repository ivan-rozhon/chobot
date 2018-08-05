import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromPortfolio from '@portfolio/portfolio.state';
import * as ExchangeActions from '@portfolio/state/exchange.actions';
import { Exchange } from '@portfolio/models';

@Component({
  selector: 'cc-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent {
  exchanges$: Observable<Exchange[]>;
  exchangesLoading$: Observable<boolean>;

  constructor(private store: Store<fromPortfolio.State>) {
    this.exchanges$ = store.pipe(select(fromPortfolio.getExchanges));
    this.exchangesLoading$ = store.pipe(select(fromPortfolio.getExchangesLoading));

    // load exchanges
    store.dispatch(new ExchangeActions.LoadList());
  }
}
