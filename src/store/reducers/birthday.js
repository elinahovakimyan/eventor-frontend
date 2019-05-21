import { constants } from 'store/constants/actionTypes';

const initialState = {
  jubilee: {},
};

export function birthdayReducer(state = initialState, action) {
  switch (action.type) {
    case constants.UPDATE_JUBILEE_INFO: {
      return {
        ...state,
        jubilee: action.payload,
      };
    }
    case constants.UPDATE_SINGLE_JUBILEE_INFO: {
      return {
        ...state,
        jubilee: {
          [action.payload.key]: action.payload.info,
        },
      };
    }
    default:
      return state;
  }
}
