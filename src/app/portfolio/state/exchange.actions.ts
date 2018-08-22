import { Action } from '@ngrx/store';

import { Exchange } from '@portfolio/shared/models';

export enum ExchangeActionTypes {
  // LOAD EXCHANGE LIST
  LoadList = '[Exchange] Load List',
  LoadListComplete = '[Exchange] Load List Complete',
  LoadListFail = '[Exchange] Load List Fail',
  // LOAD EXCHANGE CONFIG
  LoadConfig = '[Exchange] Load Config',
  LoadConfigComplete = '[Exchange] Load Config Complete',
  LoadConfigFail = '[Exchange] Load Config Fail'
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

// LOAD EXCHANGE CONFIG
// ===
export class LoadConfig implements Action {
  readonly type = ExchangeActionTypes.LoadConfig;
}

export class LoadConfigComplete implements Action {
  readonly type = ExchangeActionTypes.LoadConfigComplete;
}

export class LoadConfigFail implements Action {
  readonly type = ExchangeActionTypes.LoadConfigFail;
}
// ===

export type ExchangeActions =
  | LoadList
  | LoadListComplete
  | LoadListFail
  | LoadConfig
  | LoadConfigComplete
  | LoadConfigFail;
