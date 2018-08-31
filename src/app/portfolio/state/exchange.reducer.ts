import { Exchange } from '@portfolio/shared/models';
import { ExchangeActions, ExchangeActionTypes } from '@portfolio/state/exchange.actions';

export interface State {
  // Exchange Config
  exchange: Exchange;
  exchangeLoading: boolean;
  // Exchange List
  exchanges: Exchange[];
  exchangesLoading: boolean;
}

export const initialState: State = {
  // Exchange Config
  exchange: null,
  exchangeLoading: false,
  // Exchange List
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

// Exchange Config
export const getExchange = (state: State): Exchange => state.exchange;
export const getExchangeLoading = (state: State): boolean => state.exchangeLoading;
// Exchange List
export const getExchanges = (state: State): Exchange[] => state.exchanges;
export const getExchangesLoading = (state: State): boolean => state.exchangesLoading;
