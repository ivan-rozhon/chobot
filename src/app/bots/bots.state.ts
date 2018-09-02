import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromRoot from '@root/app.state';
import * as fromBot from '@bots/state/bot.reducer';

export interface BotsState {
  bot: fromBot.State;
}

export interface State extends fromRoot.State {
  bots: BotsState;
}

export const reducers: ActionReducerMap<BotsState> = {
  bot: fromBot.reducer
};

// createFeatureSelector function selects a piece of state from the root of the state object
export const getBotsState = createFeatureSelector<BotsState>('bots');

// Bot
// ===
// -- Bot State
export const getBotState = createSelector(getBotsState, (state: BotsState) => state.bot);

// -- -- Bot List
export const getBots = createSelector(getBotState, fromBot.getBots);
export const getBotsLoading = createSelector(getBotState, fromBot.getBotsLoading);
// ===
