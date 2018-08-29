import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromRoot from '@root/app.state';

import * as fromCore from '@core/core.state';
import { CodebookService } from '@core/codebook.service';

import { Codebook } from '@shared/models';

@Component({
  selector: 'cc-exchange-config',
  templateUrl: './exchange-config.component.html',
  styleUrls: ['./exchange-config.component.scss']
})
export class ExchangeConfigComponent {
  // Store selectors:
  codebooks$: Observable<Codebook[]>;

  constructor(private store: Store<fromRoot.State>, private codebookService: CodebookService) {
    // Assign store selectors:
    this.codebooks$ = this.store.pipe(select(fromCore.getCodebooks));
    // Load codebooks
    this.codebookService.loadCodebookAction('exchange', 'strategy');
  }
}
