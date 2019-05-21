import {
  VENUE,
  FOOD,
  CAKE,
  DECORATION,
  GAME_SHOW,
  CARTOON_HERO,
  PHOTOGRAPHER,
  DONE,
} from 'shared/data/constants';

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
    case PHOTOGRAPHER:
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
