import React from 'react';
import { withRouter } from 'react-router-dom';

import { getIconByType } from 'core/helpers';

import './ImageCard.scss';

class ImageCard extends React.PureComponent {
  render() {
    const {
      path, type, title, height, history,
    } = this.props;
    const iconSrc = getIconByType(type);

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
