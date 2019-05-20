import { promisify } from 'core/helpers';

import { cakes } from 'shared/data';

const getCakes = () => promisify(cakes);

export const cakeService = {
  getCakes,
};
