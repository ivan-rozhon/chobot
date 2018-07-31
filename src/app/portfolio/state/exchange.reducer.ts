import { Exchange } from '@portfolio/portfolio.model';
import { ExchangeActions, ExchangeActionTypes } from '@portfolio/state/exchange.actions';

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
    // LOAD EXCHANGE LIST
    // ===
    case ExchangeActionTypes.LoadList: {
      return {
        ...state,
        exchangesLoading: true
      };
    }

    case ExchangeActionTypes.LoadListComplete: {
      return {
        ...state,
        exchangesLoading: false,
        exchanges: action.payload
      };
    }

    case ExchangeActionTypes.LoadListFail: {
      return {
        ...state,
        exchangesLoading: false,
        exchanges: initialState.exchanges
      };
    }
    // ===

    default:
      return state;
  }
}
