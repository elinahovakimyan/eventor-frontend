import { promisify } from 'core/helpers';

import { gameShows } from 'data';

const getGameShows = () => promisify(gameShows);

export const gameShowService = {
  getGameShows,
};
