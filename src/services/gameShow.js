import { promisify } from 'core/helpers';

import { gameShows } from 'shared/data';

const getGameShows = () => promisify(gameShows);

export const gameShowService = {
  getGameShows,
};
