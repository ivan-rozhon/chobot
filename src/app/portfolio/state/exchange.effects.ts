import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, concatMap, filter, tap, mergeMap } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { RouteChange } from '@core/state/router.actions';

import { ofRoute } from '@shared/operators';

import { Exchange } from '@portfolio/shared/models';
import { ExchangeService } from '@portfolio/shared/services';
import {
  ExchangeActionTypes,
  LoadList,
  LoadListComplete,
  LoadListFail,
  LoadConfig,
  LoadConfigComplete,
  LoadConfigFail,
  SaveConfig,
  SaveConfigComplete,
  SaveConfigFail,
  DeleteConfig,
  DeleteConfigComplete,
  DeleteConfigFail
} from '@portfolio/state/exchange.actions';

@Injectable()
export class ExchangeEffects {
  @Effect()
  exchangeRouted$: Observable<Action> = this.actions$.pipe(
    // watch for 'exchange-config' routes with ID
    ofRoute('exchange-config/:id'),
    map((action: RouteChange) => action.payload.params),
    // filter routes with ID
    filter((params: { id: string }) => !!params.id),
    switchMap((params: { id: string }) => of(new LoadConfig(params.id)))
  );

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

  @Effect()
  loadConfig$: Observable<Action> = this.actions$.pipe(
    ofType<LoadConfig>(ExchangeActionTypes.LoadConfig),
    map((action: LoadConfig) => action.payload),
    switchMap((id: string) =>
      this.exchangeService.getExchange(id).pipe(
        map((exchange: Exchange) => new LoadConfigComplete(exchange)),
        catchError(err => of(new LoadConfigFail(err)))
      )
    )
  );

  @Effect()
  saveConfig$: Observable<Action> = this.actions$.pipe(
    ofType<SaveConfig>(ExchangeActionTypes.SaveConfig),
    map((action: SaveConfig) => action.payload),
    concatMap((exchange: Exchange) =>
      this.exchangeService.saveExchange(exchange).pipe(
        tap(_ => {
          // exchange ID does not exist (exchange create)...
          if (!exchange.id) {
            this.router.navigate(['/portfolio']);
          }
        }),
        map((exchangeId: string) => new SaveConfigComplete()),
        catchError(err => of(new SaveConfigFail(err)))
      )
    )
  );

  @Effect()
  deleteConfig$: Observable<Action> = this.actions$.pipe(
    ofType<DeleteConfig>(ExchangeActionTypes.DeleteConfig),
    map((action: DeleteConfig) => action.payload),
    switchMap((id: string) =>
      this.exchangeService.deleteExchange(id).pipe(
        mergeMap((exchangeId: string) => [new DeleteConfigComplete(), new LoadList()]),
        catchError(err => of(new DeleteConfigFail(err)))
      )
    )
  );

  constructor(private actions$: Actions, private exchangeService: ExchangeService, private router: Router) {}
}
