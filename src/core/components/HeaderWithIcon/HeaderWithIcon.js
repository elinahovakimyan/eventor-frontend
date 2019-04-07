import React from 'react';

import {
  RESTAURANT,
  CAKE,
  DECORATION,
  GAME_SHOW,
  CARTOON_HERO,
  PHOTOGRAPHER,
} from 'data/constants';

import './HeaderWithIcon.scss';

const getIconNameByType = (type) => {
  switch (type) {
    case RESTAURANT:
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
    default:
      return 'confetti';
  }
};

class HeaderWithIcon extends React.PureComponent {
  render() {
    const { type, title } = this.props;
    const iconName = getIconNameByType(type);
    const iconSrc = require(`assets/icons/${iconName}.svg`);

    return (
      <div className="header-with-icon">
        <img src={iconSrc} fill="red" alt={`eventor-${type}`} className="tab-icon" />
        <h3 className="tab-header-title">{title}</h3>
      </div>
    );
  }
}

export { HeaderWithIcon };
