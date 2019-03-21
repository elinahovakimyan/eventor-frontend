import { constants } from 'store/constants/actionTypes';

const initialState = {
  gameShows: [],
};

export function gameShowReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_GAME_SHOWS: {
      return {
        ...state,
        gameShows: action.payload,
      };
    }
    default:
      return state;
  }
}
