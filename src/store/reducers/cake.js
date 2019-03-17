import { constants } from 'store/constants/actionTypes';

const initialState = {
  cakes: [],
};

export function cakeReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_CAKES: {
      return {
        ...state,
        cakes: action.payload,
      };
    }
    default:
      return state;
  }
}
