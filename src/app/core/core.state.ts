import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromRoot from '@root/app.state';
import * as fromLayout from '@core/state/layout.reducer';

export interface CoreState {
  layout: fromLayout.State;
}

export interface State extends fromRoot.State {
  core: CoreState;
}

export const reducers: ActionReducerMap<CoreState> = {
  layout: fromLayout.reducer
};

// createFeatureSelector function selects a piece of state from the root of the state object
export const getCoreState = createFeatureSelector<CoreState>('core');

// Layout
// ===
export const getLayoutState = createSelector(getCoreState, (state: CoreState) => state.layout);

export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
// ===
