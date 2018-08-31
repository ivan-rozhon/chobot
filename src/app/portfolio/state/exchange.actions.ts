import { Action } from '@ngrx/store';

import { Exchange } from '@portfolio/shared/models';

export enum ExchangeActionTypes {
  // Load Exchange List
  LoadList = '[Exchange] Load List',
  LoadListComplete = '[Exchange] Load List Complete',
  LoadListFail = '[Exchange] Load List Fail',
  // Load Exchange Config
  LoadConfig = '[Exchange] Load Config',
  LoadConfigComplete = '[Exchange] Load Config Complete',
  LoadConfigFail = '[Exchange] Load Config Fail',
  // Save Exchange Config
  SaveConfig = '[Exchange] Save Config',
  SaveConfigComplete = '[Exchange] Save Config Complete',
  SaveConfigFail = '[Exchange] Save Config Fail'
}

// Load Exchange List
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

// Load Exchange Config
// ===
export class LoadConfig implements Action {
  readonly type = ExchangeActionTypes.LoadConfig;
}

export class LoadConfigComplete implements Action {
  readonly type = ExchangeActionTypes.LoadConfigComplete;
}

export class LoadConfigFail implements Action {
  readonly type = ExchangeActionTypes.LoadConfigFail;

  constructor(public payload: any) {}
}
// ===

// Save Exchange Config
// ===
export class SaveConfig implements Action {
  readonly type = ExchangeActionTypes.SaveConfig;

  constructor(public payload: Exchange) {}
}

export class SaveConfigComplete implements Action {
  readonly type = ExchangeActionTypes.SaveConfigComplete;
}

export class SaveConfigFail implements Action {
  readonly type = ExchangeActionTypes.SaveConfigFail;

  constructor(public payload: any) {}
}
// ===

export type ExchangeActions =
  | LoadList
  | LoadListComplete
  | LoadListFail
  | LoadConfig
  | LoadConfigComplete
  | LoadConfigFail
  | SaveConfig
  | SaveConfigComplete
  | SaveConfigFail;
