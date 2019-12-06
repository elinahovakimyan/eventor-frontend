
export const VENUE = 'venue';
export const FOOD = 'food';
export const DECORATION = 'decoration';
export const CAKE = 'cake';
export const CARTOON_HERO = 'cartoon_hero';
export const GAME_SHOW = 'game_show';
export const PHOTOGRAPHY = 'PHOTOGRAPHY';
export const DONE = 'done';

export const categories = [
  {
    key: 0,
    type: VENUE,
    label: 'Ժամանցի Վայր',
  },
  // {
  //   key: 1,
  //   type: FOOD,
  //   label: 'Սնունդ',
  // },
  {
    key: 1,
    type: CARTOON_HERO,
    label: 'Մուլտհերոս',
  },
  {
    key: 2,
    type: GAME_SHOW,
    label: 'Խաղային Շոու',
  },
  {
    key: 3,
    type: DECORATION,
    label: 'Ձևավորում',
  },
  // {
  //   key: 5,
  //   type: CAKE,
  //   label: 'Թխվածք',
  // },
  // {
  //   key: 6,
  //   type: PHOTOGRAPHY,
  //   label: 'Լուսանկարիչ',
  // },
];


export const categorySteps = [
  ...categories,
  {
    key: 4,
    type: DONE,
    label: 'Հաստատել',
  },
];
