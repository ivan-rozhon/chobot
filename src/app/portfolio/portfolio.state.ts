import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromRoot from '../app.state';
import * as fromExchange from '@portfolio/state/exchange.reducer';

export interface PortfolioState {
  exchange: fromExchange.State;
}

export interface State extends fromRoot.State {
  portfolio: PortfolioState;
}

export const reducers: ActionReducerMap<PortfolioState> = {
  exchange: fromExchange.reducer
};

// createFeatureSelector function selects a piece of state from the root of the state object
export const getPortfolioState = createFeatureSelector<PortfolioState>('portfolio');

// Exchange
// ===
// -- Exchange State
export const getExchangeState = createSelector(getPortfolioState, (state: PortfolioState) => state.exchange);

export const getExchanges = createSelector(getExchangeState, fromExchange.getExchanges);
export const getExchangesLoading = createSelector(getExchangeState, fromExchange.getExchangesLoading);
// ===
