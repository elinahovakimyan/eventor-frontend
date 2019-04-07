import { photographerService } from 'services';
import { constants } from 'store/constants/actionTypes';

export const getPhotographers = () => dispatch => {
  photographerService.getPhotographers()
    .then(
      photographers => {
        dispatch({
          type: constants.GET_PHOTOGRAPHERS,
          payload: photographers,
        });
      },
    )
    .catch((error) => {
      dispatch(error);
    });
};

export const photographerActions = {
  getPhotographers,
};
