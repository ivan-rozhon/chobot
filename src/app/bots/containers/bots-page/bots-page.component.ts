import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromBots from '@bots/bots.state';
import * as BotActions from '@bots/state/bot.actions';
import { Bot } from '@bots/shared/models';

@Component({
  selector: 'cc-bots-page',
  templateUrl: './bots-page.component.html',
  styleUrls: ['./bots-page.component.scss']
})
export class BotsPageComponent {
  // Store selectors:
  bots$: Observable<Bot[]>;
  botsLoading$: Observable<boolean>;

  constructor(private store: Store<fromBots.State>) {
    // Assign store selectors:
    this.bots$ = store.pipe(select(fromBots.getBots));
    this.botsLoading$ = store.pipe(select(fromBots.getBotsLoading));

    // load bots
    store.dispatch(new BotActions.LoadList());
  }
}
