import React from 'react';
import { withRouter } from 'react-router-dom';

import { getIconNameByType } from 'core/helpers/helpers';
import './ImageCard.scss';

class ImageCard extends React.PureComponent {
  render() {
    const {
      path, type, title, height, history,
    } = this.props;
    const iconName = getIconNameByType(type);
    const iconSrc = require(`assets/icons/${iconName}.svg`);

    return (
      <div
        className="image-card"
        style={{ height }}
        onClick={() => {
          history.push(`/service-providers/${path}`);
        }}
      >
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

export default withRouter(ImageCard);
