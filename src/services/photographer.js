import { promisify } from 'core/helpers';

import { photographers } from 'shared/data';

const getPhotographers = () => promisify(photographers);

export const photographerService = {
  getPhotographers,
};
