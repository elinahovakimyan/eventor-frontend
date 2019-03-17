import { promisify } from 'core/helpers';

import { cartoonHeroes } from 'data';

const getCartoonHeroes = () => promisify(cartoonHeroes);

export const cartoonHeroService = {
  getCartoonHeroes,
};
