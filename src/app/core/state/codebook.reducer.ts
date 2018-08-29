import { CodebookActions, CodebookActionTypes } from '@core/state/codebook.actions';

import { Codebook } from '@shared/models';

export interface State {
  loading: string[];
  codebooks: Codebook[];
}

export const initialState: State = {
  loading: [],
  codebooks: []
};

export function reducer(state = initialState, action: CodebookActions): State {
  switch (action.type) {
    // Codebook Load
    // ===
    case CodebookActionTypes.Load: {
      return {
        ...state,
        // check if requested codebook is already in 'loading' state
        loading:
          state.loading.findIndex(o => o === action.payload) !== -1
            ? [...state.loading]
            : [...state.loading, action.payload]
      };
    }

    case CodebookActionTypes.LoadComplete: {
      return {
        ...state,
        // remove loaded codebook from loading arr
        loading: state.loading.filter(o => o === action.payload.type),
        // add new codebook to codebook arr
        codebooks: [...state.codebooks, action.payload]
      };
    }

    case CodebookActionTypes.LoadFail: {
      return {
        ...state,
        // remove loaded codebook from loading arr
        loading: state.loading.filter(o => o === action.payload.type)
      };
    }
    // ===

    default:
      return state;
  }
}

export const getLoading = (state: State): boolean => !!state.loading.length;
export const getCodebooks = (state: State): Codebook[] => state.codebooks;
