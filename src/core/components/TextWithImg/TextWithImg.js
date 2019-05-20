import React from 'react';

import './TextWithImg.scss';

class TextWithImg extends React.PureComponent {
  render() {
    const { title, imgSrc } = this.props;

    return (
      <div className="text-with-img">
        <img src={imgSrc} fill="red" alt={`eventor-${title}`} className="tab-icon" />
        <h3 className="tab-header-title">{title}</h3>
      </div>
    );
  }
}

export { TextWithImg };
