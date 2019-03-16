import { restaurantConstants } from '../constants/actionTypes';

const initialState = {
  restaurants: [],
};

export function restaurantReducer(state = initialState, action) {
  switch (action.type) {
    case restaurantConstants.GET_RESTAURANTS: {
      return {
        ...state,
        restaurants: action.restaurants,
      };
    }
    default:
      return state;
  }
}
