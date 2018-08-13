import { Action } from '@ngrx/store';

import { Bot } from '@bots/shared';

export enum BotActionTypes {
  // LOAD BOT LIST
  LoadList = '[Bot] Load List',
  LoadListComplete = '[Bot] Load List Complete',
  LoadListFail = '[Bot] Load List Fail'
}

// LOAD BOT LIST
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

export type BotActions = LoadList | LoadListComplete | LoadListFail;
