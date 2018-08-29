import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { CodebookService } from '@core/codebook.service';
import { CodebookActionTypes, Load, LoadComplete, LoadFail } from '@core/state/codebook.actions';

import { Codebook } from '@shared/models';

@Injectable()
export class CodebookEffects {
  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType<Load>(CodebookActionTypes.Load),
    map((action: Load) => action.payload),
    mergeMap((type: string) =>
      this.codebookService.loadCodebook(type).pipe(
        map((codebook: Codebook) => new LoadComplete(codebook)),
        catchError(err => of(new LoadFail({ err, type })))
      )
    )
  );

  constructor(private actions$: Actions, private codebookService: CodebookService) {}
}
