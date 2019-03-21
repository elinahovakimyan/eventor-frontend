import { cartoonHeroService } from 'services';
import { constants } from 'store/constants/actionTypes';

export const getCartoonHeroes = () => dispatch => {
  cartoonHeroService.getCartoonHeroes()
    .then(
      cartoonHeroes => {
        dispatch({
          type: constants.GET_CARTOON_HEROES,
          payload: cartoonHeroes,
        });
      },
    )
    .catch((error) => {
      dispatch(error);
    });
};

export const cartoonHeroeActions = {
  getCartoonHeroes,
};
