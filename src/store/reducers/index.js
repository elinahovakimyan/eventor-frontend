import { combineReducers } from 'redux';

import { restaurantReducer } from './restaurant';
import { cakeReducer } from './cake';
import { decorationReducer } from './decoration';
import { gameShowReducer } from './gameShow';
import { cartoonHeroReducer } from './cartoonHero';
import { photographerReducer } from './photographer';

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  cake: cakeReducer,
  gameShow: gameShowReducer,
  cartoonHero: cartoonHeroReducer,
  photographer: photographerReducer,
  decoration: decorationReducer,
});

export default rootReducer;
