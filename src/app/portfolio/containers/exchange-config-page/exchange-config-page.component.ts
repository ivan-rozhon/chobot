import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromRoot from '@root/app.state';

import * as fromCore from '@core/core.state';
import { CodebookService } from '@core/codebook.service';

import { Codebook } from '@shared/models';

import * as fromPortfolio from '@portfolio/portfolio.state';
import * as ExchangeActions from '@portfolio/state/exchange.actions';
import { Exchange } from '@portfolio/shared/models';

@Component({
  selector: 'cc-exchange-config-page',
  templateUrl: './exchange-config-page.component.html',
  styleUrls: ['./exchange-config-page.component.scss']
})
export class ExchangeConfigPageComponent {
  // Store selectors:
  exchange$: Observable<Exchange>;
  codebooks$: Observable<Codebook[]>;

  constructor(private store: Store<fromRoot.State>, private codebookService: CodebookService) {
    // Assign store selectors:
    this.exchange$ = this.store.pipe(select(fromPortfolio.getExchange));
    this.codebooks$ = this.store.pipe(select(fromCore.getCodebooks));
    // Load codebooks
    this.codebookService.loadCodebookAction('exchange', 'strategy');
  }

  /**
   * Save/create new exchange
   * @param exchange New/Updated exchange
   */
  saveExchange(exchange: Exchange): void {
    this.store.dispatch(new ExchangeActions.SaveConfig(exchange));
  }
}
