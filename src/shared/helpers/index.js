import _ from 'lodash';

import {
  VENUE,
  FOOD,
  CAKE,
  DECORATION,
  GAME_SHOW,
  CARTOON_HERO,
  PHOTOGRAPHY,
  DONE,
} from 'shared/constants';

export const getIconNameByType = (type) => {
  switch (type) {
    case VENUE:
      return 'place';
    case FOOD:
      return 'cutlery';
    case DECORATION:
      return 'balloons';
    case CAKE:
      return 'cake';
    case CARTOON_HERO:
      return 'donatello';
    case GAME_SHOW:
      return 'laugh';
    case PHOTOGRAPHY:
      return 'photo-camera';
    case DONE:
      return 'work-done';
    default:
      return 'confetti';
  }
};

export const getIconByType = (type) => {
  const iconName = getIconNameByType(type);
  const iconSrc = require(`assets/icons/${iconName}.svg`);

  return iconSrc;
};


export const toggleSelection = (id, list, selectFn, deselectFn, isTrue) => {
  if (!list || !list.includes(id)) {
    selectFn(id);
  } else if (!isTrue) {
    deselectFn(id);
  }
};


// ======================= COMMON ========================

export const promisify = (data) => {
  const promise = new Promise(((resolve, reject) => {
    const success = 1;
    if (success) {
      resolve(data);
    } else {
      reject(Error('Ինչ-որ սխալ է տեղի ունեցել'));
    }
  }));

  return promise;
};

export const formatPrice = (priceNum) => {
  const formattedPrice = `${priceNum.toLocaleString()} դր.`;

  return formattedPrice;
};


export const filterByValues = (collection, property, ids) => {
  _(collection)
    .keyBy('id')
    .at(ids)
    .value();
};
