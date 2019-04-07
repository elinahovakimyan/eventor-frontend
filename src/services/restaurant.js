import { promisify } from 'core/helpers';

import { restaurants } from 'data';

const getRestaurants = () => promisify(restaurants);

export const restaurantService = {
  getRestaurants,
};
