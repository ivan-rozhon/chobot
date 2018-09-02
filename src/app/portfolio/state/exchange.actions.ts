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
  SaveConfigFail = '[Exchange] Save Config Fail',
  // Delete Exchange Config
  DeleteConfig = '[Exchange] Delete Config',
  DeleteConfigComplete = '[Exchange] Delete Config Complete',
  DeleteConfigFail = '[Exchange] Delete Config Fail',
  // Clear Config
  ClearConfig = '[Exchange] Clear Config'
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

  constructor(public payload: string) {}
}

export class LoadConfigComplete implements Action {
  readonly type = ExchangeActionTypes.LoadConfigComplete;

  constructor(public payload: Exchange) {}
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

// Delete Exchange Config
// ===
export class DeleteConfig implements Action {
  readonly type = ExchangeActionTypes.DeleteConfig;

  constructor(public payload: string) {}
}

export class DeleteConfigComplete implements Action {
  readonly type = ExchangeActionTypes.DeleteConfigComplete;
}

export class DeleteConfigFail implements Action {
  readonly type = ExchangeActionTypes.DeleteConfigFail;

  constructor(public payload: any) {}
}
// ===

// Clear Config
export class ClearConfig implements Action {
  readonly type = ExchangeActionTypes.ClearConfig;
}

export type ExchangeActions =
  | LoadList
  | LoadListComplete
  | LoadListFail
  | LoadConfig
  | LoadConfigComplete
  | LoadConfigFail
  | SaveConfig
  | SaveConfigComplete
  | SaveConfigFail
  | DeleteConfig
  | DeleteConfigComplete
  | DeleteConfigFail
  | ClearConfig;
