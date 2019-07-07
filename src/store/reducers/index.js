import { combineReducers } from 'redux';

import { birthdayReducer } from './birthday';

const rootReducer = combineReducers({
  birthday: birthdayReducer,
});

export default rootReducer;
