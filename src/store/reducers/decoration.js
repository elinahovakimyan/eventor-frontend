import { constants } from 'store/constants/actionTypes';

const initialState = {
  decorations: [],
};

export function decorationReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_DECORATIONS: {
      return {
        ...state,
        decorations: action.payload,
      };
    }
    default:
      return state;
  }
}
