import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromRoot from '@root/app.state';
import * as fromCore from '@core/core.state';
import * as LayoutActions from '@core/state/layout.actions';

@Component({
  selector: 'cc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.showSidenav$ = this.store.pipe(select(fromCore.getShowSidenav));
  }

  /**
   * Open/Close Sidenav
   * @param action Which action will be done (Open == true, Close == false)
   */
  toogleSidenav(action: boolean): void {
    this.store.dispatch(new LayoutActions.ToggleSidenav(action));
  }
}
