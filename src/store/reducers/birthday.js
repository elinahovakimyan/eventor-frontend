import { constants } from 'store/constants/actionTypes';

const initialState = {
  jubilee: {},
  selectedServices: {},
};

export function birthdayReducer(state = initialState, action) {
  switch (action.type) {
    case constants.UPDATE_JUBILEE_INFO: {
      return {
        ...state,
        jubilee: action.payload,
      };
    }
    case constants.UPDATE_SINGLE_JUBILEE_INFO: {
      return {
        ...state,
        jubilee: {
          [action.payload.key]: action.payload.info,
        },
      };
    }
    case constants.SELECT_VENUE: {
      return {
        ...state,
        selectedServices: {
          ...state.selectedServices,
          venue: [action.payload],
        },
      };
    }
    case constants.DESELECT_VENUE: {
      return {
        ...state,
        selectedServices: {
          ...state.selectedServices,
          venue: [],
        },
      };
    }
    case constants.SELECT_SERVICE: {
      const { serviceType, service } = action.payload;
      const selectedList = state.selectedServices[serviceType] || [];

      return {
        ...state,
        selectedServices: {
          ...state.selectedServices,
          [serviceType]: [...selectedList, service],
        },
      };
    }
    case constants.DESELECT_SERVICE: {
      const { serviceType, service } = action.payload;
      const selectedList = state.selectedServices[serviceType] || [];

      return {
        ...state,
        selectedServices: {
          ...state.selectedServices,
          [serviceType]: selectedList.filter(s => s.id !== service.id),
        },
      };
    }
    default:
      return state;
  }
}
