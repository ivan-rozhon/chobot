import { Action } from '@ngrx/store';

import { Exchange } from '@portfolio/portfolio.model';

export enum ExchangeActionTypes {
  // LOAD EXCHANGE LIST
  LoadList = '[Exchange] Load List',
  LoadListComplete = '[Exchange] Load List Complete',
  LoadListFail = '[Exchange] Load List Fail'
}

// LOAD EXCHANGE LIST
// ===
export class LoadList implements Action {
  readonly type = ExchangeActionTypes.LoadList;
}

export class LoadListComplete implements Action {
  readonly type = ExchangeActionTypes.LoadListComplete;

  constructor(public payload: Exchange[]) {}
}

export class LoadListFail implements Action {
  readonly type = ExchangeActionTypes.LoadListFail;

  constructor(public payload: any) {}
}
// ===

export type ExchangeActions = LoadList | LoadListComplete | LoadListFail;
