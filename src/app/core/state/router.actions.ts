import { NavigationExtras } from '@angular/router';

import { Action } from '@ngrx/store';

export enum RouterActionTypes {
  Go = '[Router] Go',
  Back = '[Router] Back',
  Forward = '[Router] Forward',
  RouteChange = '[Router] Route Change',
  ConfigLoadStart = '[Router] Config Load Start',
  ConfigLoadEnd = '[Router] Config Load End'
}

export class Go implements Action {
  readonly type = RouterActionTypes.Go;

  constructor(
    public payload: {
      path: any[];
      queryParams?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class Back implements Action {
  readonly type = RouterActionTypes.Back;
}

export class Forward implements Action {
  readonly type = RouterActionTypes.Forward;
}

export class RouteChange implements Action {
  readonly type = RouterActionTypes.RouteChange;

  constructor(public payload: { params: any; path: string }) {}
}

export class ConfigLoadStart implements Action {
  readonly type = RouterActionTypes.ConfigLoadStart;
}

export class ConfigLoadEnd implements Action {
  readonly type = RouterActionTypes.ConfigLoadEnd;
}

export type RouterActions = Go | Back | Forward | RouteChange | ConfigLoadStart | ConfigLoadEnd;
