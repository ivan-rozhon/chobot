import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  ToggleSidenav = '[Layout] Toggle Sidenav'
}

export class ToggleSidenav implements Action {
  readonly type = LayoutActionTypes.ToggleSidenav;

  constructor(public payload: boolean) {}
}

export type LayoutActions = ToggleSidenav;
