import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { TranslateService } from '@ngx-translate/core';

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

  constructor(private store: Store<fromRoot.State>, private translate: TranslateService) {
    this.showSidenav$ = this.store.pipe(select(fromCore.getShowSidenav));

    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');
  }

  /**
   * Open/Close Sidenav
   * @param action Which action will be done (Open == true, Close == false)
   */
  toogleSidenav(action: boolean): void {
    this.store.dispatch(new LayoutActions.ToggleSidenav(action));
  }
}
