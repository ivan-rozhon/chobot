import { Action } from '@ngrx/store';

import { Bot } from '@bots/shared/models';

export enum BotActionTypes {
  // Load Bot List
  LoadList = '[Bot] Load List',
  LoadListComplete = '[Bot] Load List Complete',
  LoadListFail = '[Bot] Load List Fail',
  // Load Bot Config
  LoadConfig = '[Bot] Load Config',
  LoadConfigComplete = '[Bot] Load Config Complete',
  LoadConfigFail = '[Bot] Load Config Fail'
}

// Load Bot List
// ===
export class LoadList implements Action {
  readonly type = BotActionTypes.LoadList;
}

export class LoadListComplete implements Action {
  readonly type = BotActionTypes.LoadListComplete;

  constructor(public payload: Bot[]) {}
}

export class LoadListFail implements Action {
  readonly type = BotActionTypes.LoadListFail;

  constructor(public payload: any) {}
}
// ===

// Load Bot Config
// ===

// ===

export type BotActions = LoadList | LoadListComplete | LoadListFail;
