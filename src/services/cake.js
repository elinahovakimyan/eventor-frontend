import { promisify } from 'core/helpers';

import { cakes } from 'data';

const getCakes = () => promisify(cakes);

export const cakeService = {
  getCakes,
};
