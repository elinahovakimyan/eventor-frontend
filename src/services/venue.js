import { promisify } from 'core/helpers';

import { venues } from 'shared/data';

const getVenues = () => promisify(venues);

export const venueService = {
  getVenues,
};
