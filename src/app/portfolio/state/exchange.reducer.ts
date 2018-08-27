import { Exchange } from '@portfolio/shared/models';
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
    // Load Exchange List
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

export const getExchanges = (state: State) => state.exchanges;
export const getExchangesLoading = (state: State) => state.exchangesLoading;
