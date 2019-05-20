import { constants } from 'store/constants/actionTypes';

const initialState = {
  venues: [],
};

export function venueReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_VENUES: {
      return {
        ...state,
        venues: action.payload,
      };
    }
    default:
      return state;
  }
}
