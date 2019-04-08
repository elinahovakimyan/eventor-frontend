export const getIconNameByType = (type) => {
  switch (type) {
    case 'restaurant':
      return 'cutlery';
    case 'decoration':
      return 'balloons';
    case 'cake':
      return 'cake';
    case 'cartoon':
      return 'donatello';
    case 'game':
      return 'laugh';
    case 'photography':
      return 'photo-camera';
    default:
      return 'confetti';
  }
};
