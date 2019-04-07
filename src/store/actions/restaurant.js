import { restaurantService } from 'services';
import { constants } from 'store/constants/actionTypes';

export const getRestaurants = () => dispatch => {
  restaurantService.getRestaurants()
    .then(
      restaurants => {
        dispatch({
          type: constants.GET_RESTAURANTS,
          payload: restaurants,
        });
      },
    )
    .catch((error) => {
      dispatch(error);
    });
};

export const restaurantActions = {
  getRestaurants,
};
