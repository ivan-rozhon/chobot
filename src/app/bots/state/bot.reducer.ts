import { Bot } from '@bots/shared/models';
import { BotActions, BotActionTypes } from '@bots/state/bot.actions';

export interface State {
  // Bot List
  bots: Bot[];
  botsLoading: boolean;
}

export const initialState: State = {
  // Bot List
  bots: [],
  botsLoading: false
};

export function reducer(state = initialState, action: BotActions): State {
  switch (action.type) {
    // Load Bot List
    // ===
    case BotActionTypes.LoadList: {
      return {
        ...state,
        botsLoading: true
      };
    }

    case BotActionTypes.LoadListComplete: {
      return {
        ...state,
        botsLoading: false,
        bots: action.payload
      };
    }

    case BotActionTypes.LoadListFail: {
      return {
        ...state,
        botsLoading: false,
        bots: initialState.bots
      };
    }
    // ===

    default:
      return state;
  }
}

// Bot List
export const getBots = (state: State): Bot[] => state.bots;
export const getBotsLoading = (state: State): boolean => state.botsLoading;
