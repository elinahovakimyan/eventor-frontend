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

// export const selectVenue = (service) => ({
//   type: constants.SELECT_VENUE,
//   payload: service,
// });

// export const deselectVenue = (service) => ({
//   type: constants.DESELECT_VENUE,
//   payload: service,
// });

export const selectVenue = (service) => ({
  type: constants.SELECT_SERVICE,
  payload: {
    serviceType: 'venue',
    service,
  },
});

export const deselectVenue = (service) => ({
  type: constants.DESELECT_SERVICE,
  payload: {
    serviceType: 'venue',
    service,
  },
});

export const selectCartoonHero = (service) => ({
  type: constants.SELECT_SERVICE,
  payload: {
    serviceType: 'cartoonHeroes',
    service,
  },
});

export const deselectCartoonHero = (service) => ({
  type: constants.DESELECT_SERVICE,
  payload: {
    serviceType: 'cartoonHeroes',
    service,
  },
});

export const selectGameShow = (service) => ({
  type: constants.SELECT_SERVICE,
  payload: {
    serviceType: 'gameShows',
    service,
  },
});

export const deselectGameShow = (service) => ({
  type: constants.DESELECT_SERVICE,
  payload: {
    serviceType: 'gameShows',
    service,
  },
});

export const selectDecoration = (service) => ({
  type: constants.SELECT_SERVICE,
  payload: {
    serviceType: 'decorations',
    service,
  },
});

export const deselectDecoration = (service) => ({
  type: constants.DESELECT_SERVICE,
  payload: {
    serviceType: 'decorations',
    service,
  },
});
