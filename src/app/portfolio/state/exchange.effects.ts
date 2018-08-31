import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, concatMap } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Exchange } from '@portfolio/shared/models';
import { ExchangeService } from '@portfolio/shared/services';
import {
  ExchangeActionTypes,
  LoadList,
  LoadListComplete,
  LoadListFail,
  SaveConfig,
  SaveConfigComplete,
  SaveConfigFail
} from '@portfolio/state/exchange.actions';

@Injectable()
export class ExchangeEffects {
  @Effect()
  loadList$: Observable<Action> = this.actions$.pipe(
    ofType<LoadList>(ExchangeActionTypes.LoadList),
    switchMap(_ =>
      this.exchangeService.getExchangeList().pipe(
        map((exchanges: Exchange[]) => new LoadListComplete(exchanges)),
        catchError(err => of(new LoadListFail(err)))
      )
    )
  );

  // @Effect()
  // saveConfig$: Observable<Action> = this.actions$.pipe(
  //   ofType<SaveConfig>(ExchangeActionTypes.SaveConfig),
  //   map((action: SaveConfig) => action.payload),
  //   concatMap((exchange: Exchange) =>
  //     this.exchangeService.
  //   )
  // );

  constructor(private actions$: Actions, private exchangeService: ExchangeService) {}
}
