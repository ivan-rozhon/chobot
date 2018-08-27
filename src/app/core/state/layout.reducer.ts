import { LayoutActions, LayoutActionTypes } from '@core/state/layout.actions';

export interface State {
  showSidenav: boolean;
}

export const initialState: State = {
  showSidenav: false
};

export function reducer(state = initialState, action: LayoutActions): State {
  switch (action.type) {
    // Toggle Sidenav
    case LayoutActionTypes.ToggleSidenav: {
      return {
        ...state,
        showSidenav: action.payload
      };
    }

    default:
      return state;
  }
}

export const getShowSidenav = (state: State): boolean => state.showSidenav;
