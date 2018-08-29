import { Action } from '@ngrx/store';

import { Codebook } from '@shared/models';

export enum CodebookActionTypes {
  // Codebook Load
  Load = '[Codebook] Load',
  LoadComplete = '[Codebook] Load Complete',
  LoadFail = '[Codebook] Load Fail'
}

// Codebook Load
// ===
export class Load implements Action {
  readonly type = CodebookActionTypes.Load;

  constructor(public payload: string) {}
}

export class LoadComplete implements Action {
  readonly type = CodebookActionTypes.LoadComplete;

  constructor(public payload: Codebook) {}
}

export class LoadFail implements Action {
  readonly type = CodebookActionTypes.LoadFail;

  constructor(
    public payload: {
      err: any;
      type: string;
    }
  ) {}
}
// ===

export type CodebookActions = Load | LoadComplete | LoadFail;
