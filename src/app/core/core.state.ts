import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromRoot from '@root/app.state';
import * as fromLayout from '@core/state/layout.reducer';
import * as fromCodebook from '@core/state/codebook.reducer';

export interface CoreState {
  layout: fromLayout.State;
  codebook: fromCodebook.State;
}

export interface State extends fromRoot.State {
  core: CoreState;
}

export const reducers: ActionReducerMap<CoreState> = {
  layout: fromLayout.reducer,
  codebook: fromCodebook.reducer
};

// createFeatureSelector function selects a piece of state from the root of the state object
export const getCoreState = createFeatureSelector<CoreState>('core');

// Codebook
// ===
export const getCodebookState = createSelector(getCoreState, (state: CoreState) => state.codebook);

export const getCodebooks = createSelector(getCodebookState, fromCodebook.getCodebooks);
export const getCodebookLoading = createSelector(getCodebookState, fromCodebook.getLoading);
// ===

// Layout
// ===
export const getLayoutState = createSelector(getCoreState, (state: CoreState) => state.layout);

export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
// ===
