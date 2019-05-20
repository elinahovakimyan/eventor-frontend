import { promisify } from 'core/helpers';

import { cartoonHeroes } from 'shared/data';

const getCartoonHeroes = () => promisify(cartoonHeroes);

export const cartoonHeroService = {
  getCartoonHeroes,
};
