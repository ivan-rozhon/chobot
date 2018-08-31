import { RouterActions, RouterActionTypes } from '@core/state/router.actions';

export interface State {
  loading: boolean;
}

export const initialState: State = {
  loading: false
};

export function reducer(state = initialState, action: RouterActions): State {
  switch (action.type) {
    // Config Load
    // ===
    case RouterActionTypes.ConfigLoadStart: {
      return {
        ...state,
        loading: true
      };
    }

    case RouterActionTypes.ConfigLoadEnd: {
      return {
        ...state,
        loading: false
      };
    }
    // ===

    default:
      return state;
  }
}

export const getLoading = (state: State) => state.loading;
