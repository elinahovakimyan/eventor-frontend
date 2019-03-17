import { gameShowService } from 'services';
import { constants } from 'store/constants/actionTypes';

export const getGameShows = () => dispatch => {
  gameShowService.getGameShows()
    .then(
      gameShows => {
        dispatch({
          type: constants.GET_GAME_SHOWS,
          payload: gameShows,
        });
      },
    )
    .catch((error) => {
      dispatch(error);
    });
};

export const gameShowActions = {
  getGameShows,
};
