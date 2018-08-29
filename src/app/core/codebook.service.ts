import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromCore from '@core/core.state';
import * as CodebookActions from '@core/state/codebook.actions';
import { DataService } from '@core/data.service';

import { Codebook, CodebookValue } from '@shared/models';

@Injectable()
export class CodebookService {
  private codebooks: Codebook[];

  // Store stream selectors:
  codebooks$: Observable<Codebook[]>;
  codebookLoading$: Observable<boolean>;

  constructor(private dataService: DataService, private store: Store<fromCore.State>) {
    // Assign store selectors:
    this.codebooks$ = this.store.pipe(select(fromCore.getCodebooks));
    this.codebookLoading$ = this.store.pipe(select(fromCore.getCodebookLoading));

    // subscribe store stream
    // (it is not necessary to unsubscribe because it lives during app life)
    this.codebooks$.subscribe((codebooks: Codebook[]) => (this.codebooks = codebooks));
  }

  /**
   * Load codebook by its name
   * @param type Name of the codebook (end of URL)
   */
  loadCodebook(type: string): Observable<Codebook> {
    return this.dataService.get<CodebookValue[]>('codebook', { type }).pipe(
      map((codebookValues: CodebookValue[]) => {
        // map incoming values to Codebook object
        return { type, values: codebookValues };
      })
    );
  }

  /**
   * Dispatch actions for load codebooks
   * @param types Names of the codebooks to load
   */
  loadCodebookAction(...types: string[]): void {
    // do not load already loaded codebooks (filter already loaded)
    const filteredTypes = types.filter((type: string) => !this.isCodebookLoaded(type));

    filteredTypes.forEach((type: string) => {
      // dispatch actions
      this.store.dispatch(new CodebookActions.Load(type));
    });
  }

  /**
   * Find codebook by name in arr of codebook
   * @param type Name of codebook to find and return values
   * @param codebooks Arr of codebooks
   */
  getCodebook(type: string, codebooks: Codebook[] = []): CodebookValue[] {
    // find requested codebook
    const codebook = codebooks.find((o: Codebook) => o.type === type);

    // if requested codebook do not exists, retuern emtpty arr
    return codebook ? codebook.values : [];
  }

  /**
   * check if codebok is already loaded
   * @param type Name of the codebook to check
   */
  private isCodebookLoaded(type: string): boolean {
    return this.codebooks.findIndex((codebook: Codebook) => codebook.type === type) !== -1;
  }
}
