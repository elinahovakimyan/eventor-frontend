import { constants } from 'store/constants/actionTypes';

const initialState = {
  restaurants: [],
};

export function restaurantReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_RESTAURANTS: {
      return {
        ...state,
        restaurants: action.payload,
      };
    }
    default:
      return state;
  }
}
