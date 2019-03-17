import { cakeService } from 'services';
import { constants } from 'store/constants/actionTypes';

export const getCakes = () => dispatch => {
  cakeService.getCakes()
    .then(
      cakes => {
        dispatch({
          type: constants.GET_CAKES,
          payload: cakes,
        });
      },
    )
    .catch((error) => {
      dispatch(error);
    });
};

export const cakeActions = {
  getCakes,
};
