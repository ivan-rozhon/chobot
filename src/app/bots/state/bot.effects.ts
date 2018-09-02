import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, concatMap, filter, tap, mergeMap } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { RouteChange } from '@core/state/router.actions';

import { ofRoute } from '@shared/operators';

import { Bot } from '@bots/shared/models';
import { BotService } from '@bots/shared/services';
import { BotActionTypes, LoadList, LoadListComplete, LoadListFail } from '@bots/state/bot.actions';

@Injectable()
export class BotEffects {
  // @Effect()
  // botRouted$: Observable<Action> = this.actions$.pipe(
  //   // watch for 'bot-config' routes with ID
  //   ofRoute('bot-config/:id'),
  //   map((action: RouteChange) => action.payload.params),
  //   // filter routes with ID
  //   filter((params: { id: string }) => !!params.id),
  //   switchMap((params: { id: string }) => of(new LoadConfig(params.id)))
  // );

  @Effect()
  loadList$: Observable<Action> = this.actions$.pipe(
    ofType<LoadList>(BotActionTypes.LoadList),
    switchMap(_ =>
      this.botService.getBotList().pipe(
        map((bots: Bot[]) => new LoadListComplete(bots)),
        catchError(err => of(new LoadListFail(err)))
      )
    )
  );

  constructor(private actions$: Actions, private botService: BotService) {}
}
