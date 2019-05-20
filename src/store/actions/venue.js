import { venueService } from 'services';
import { constants } from 'store/constants/actionTypes';

export const getVenues = () => dispatch => {
  venueService.getVenues()
    .then(
      venues => {
        dispatch({
          type: constants.GET_VENUES,
          payload: venues,
        });
      },
    )
    .catch((error) => {
      dispatch(error);
    });
};

export const venueActions = {
  getVenues,
};
