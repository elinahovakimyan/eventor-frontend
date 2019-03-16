import { combineReducers } from 'redux';

import { restaurantReducer } from './restaurantReducer';

const rootReducer = combineReducers({
  restaurantReducer,
});

export default rootReducer;
