import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { PortfolioService } from '@portfolio/portfolio.service';
import { Exchange } from '@portfolio/portfolio.model';
import { ExchangeActionTypes, LoadList, LoadListComplete, LoadListFail } from '@portfolio/state/exchange.actions';

@Injectable()
export class ExchangeEffects {
  @Effect()
  loadList$: Observable<Action> = this.actions$.pipe(
    ofType<LoadList>(ExchangeActionTypes.LoadList),
    switchMap(_ =>
      this.portfolioService.getExchangeList().pipe(
        map((exchanges: Exchange[]) => new LoadListComplete(exchanges)),
        catchError(err => of(new LoadListFail(err)))
      )
    )
  );

  constructor(private actions$: Actions, private portfolioService: PortfolioService) {}
}
