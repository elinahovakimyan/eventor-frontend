import { restaurantService } from '../services';
import { restaurantConstants } from '../constants/actionTypes';

function update(restaurants) {
  return { type: restaurantConstants.GET_RESTAURANTS, restaurants };
}

function getRestaurants() {
  return dispatch => {
    restaurantService.getRestaurants()
      .then(
        restaurants => {
          dispatch(update(restaurants));
        },
      )
      .catch((error) => {
        dispatch(error);
      });
  };
}

export const restaurantActions = {
  getRestaurants,
};
