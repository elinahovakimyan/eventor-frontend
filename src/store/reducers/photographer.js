import { constants } from 'store/constants/actionTypes';

const initialState = {
  photographers: [],
};

export function photographerReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_PHOTOGRAPHERS: {
      return {
        ...state,
        photographers: action.payload,
      };
    }
    default:
      return state;
  }
}
