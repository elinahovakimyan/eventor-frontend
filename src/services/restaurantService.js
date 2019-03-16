import { restaurantData } from '../data';

function getRestaurants() {
  const promise = new Promise(((resolve, reject) => {
    // Делаем, что-то, возможно асинхронное, тогда…
    const success = 1;
    if (success) {
      resolve(restaurantData);
    } else {
      reject(Error('Сломалось'));
    }
  }));
  return promise;
}

export const restaurantService = {
  getRestaurants,
};
