import React from 'react';

import { getIconNameByType } from 'core/helpers/helpers';
import './ImageCard.scss';

class ImageCard extends React.PureComponent {
  render() {
    const { type, title, height } = this.props;
    const iconName = getIconNameByType(type);
    const iconSrc = require(`assets/icons/${iconName}.svg`);

    return (
      <div className="image-card" style={{ height }}>
        <div>
          <img src={iconSrc} alt={`eventor-${type}`} className="tab-icon" />
          <div className="image-card-title">
            {title}
          </div>
        </div>
      </div>
    );
  }
}

export { ImageCard };
