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

export const selectVenue = (id) => ({
  type: constants.SELECT_VENUE,
  payload: id,
});

export const deselectVenue = (id) => ({
  type: constants.DESELECT_VENUE,
  payload: id,
});

export const selectCartoonHero = (serviceId) => ({
  type: constants.SELECT_SERVICE,
  payload: {
    serviceType: 'cartoonHeroes',
    serviceId,
  },
});

export const deselectCartoonHero = (serviceId) => ({
  type: constants.DESELECT_SERVICE,
  payload: {
    serviceType: 'cartoonHeroes',
    serviceId,
  },
});

export const selectGameShow = (serviceId) => ({
  type: constants.SELECT_SERVICE,
  payload: {
    serviceType: 'gameShows',
    serviceId,
  },
});

export const deselectGameShow = (serviceId) => ({
  type: constants.DESELECT_SERVICE,
  payload: {
    serviceType: 'gameShows',
    serviceId,
  },
});

export const selectDecoration = (serviceId) => ({
  type: constants.SELECT_SERVICE,
  payload: {
    serviceType: 'decorations',
    serviceId,
  },
});

export const deselectDecoration = (serviceId) => ({
  type: constants.DESELECT_SERVICE,
  payload: {
    serviceType: 'decorations',
    serviceId,
  },
});
