import { combineReducers } from 'redux';

import { venueReducer } from './venue';
import { cakeReducer } from './cake';
import { decorationReducer } from './decoration';
import { gameShowReducer } from './gameShow';
import { cartoonHeroReducer } from './cartoonHero';
import { photographerReducer } from './photographer';

const rootReducer = combineReducers({
  venue: venueReducer,
  cake: cakeReducer,
  gameShow: gameShowReducer,
  cartoonHero: cartoonHeroReducer,
  photographer: photographerReducer,
  decoration: decorationReducer,
});

export default rootReducer;
