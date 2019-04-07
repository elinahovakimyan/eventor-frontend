import { decorationService } from 'services';
import { constants } from 'store/constants/actionTypes';

export const getDecorations = () => dispatch => {
  decorationService.getDecorations()
    .then(
      decorations => {
        dispatch({
          type: constants.GET_DECORATIONS,
          payload: decorations,
        });
      },
    )
    .catch((error) => {
      dispatch(error);
    });
};

export const decorationActions = {
  getDecorations,
};
