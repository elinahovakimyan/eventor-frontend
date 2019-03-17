import { constants } from 'store/constants/actionTypes';

const initialState = {
  cartoonHeroes: [],
};

export function cartoonHeroReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_CARTOON_HEROES: {
      return {
        ...state,
        cartoonHeroes: action.payload,
      };
    }
    default:
      return state;
  }
}
