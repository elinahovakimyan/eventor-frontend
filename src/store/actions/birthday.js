import { constants } from 'store/constants/actionTypes';

export const updateJubileeInfo = (jubileeInfo) => ({
  type: constants.UPDATE_JUBILEE_INFO,
  payload: jubileeInfo,
});

export const updateSingleJubileeInfo = (key, jubileeInfo) => ({
  type: constants.UPDATE_SINGLE_JUBILEE_INFO,
  payload: {
    key,
    jubileeInfo,
  },
});
