import { promisify } from 'core/helpers';

import { photographers } from 'data';

const getPhotographers = () => promisify(photographers);

export const photographerService = {
  getPhotographers,
};
