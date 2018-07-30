import { Action } from '@ngrx/store';

import { Exchange } from '@portfolio/portfolio.model';
import { ExchangeActions } from '@portfolio/state/exchange.actions';

export interface State {
  exchanges: Exchange[];
  exchangesLoading: boolean;
}

export const initialState: State = {
  exchanges: [],
  exchangesLoading: false
};

export function reducer(state = initialState, action: ExchangeActions): State {
  switch (action.type) {
    default:
      return state;
  }
}
