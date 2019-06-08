import React from 'react';

import './TextWithImg.scss';

class TextWithImg extends React.PureComponent {
  render() {
    const {
      title, imgSrc, onClick, color,
    } = this.props;

    return (
      <div className="text-with-img" onClick={onClick}>
        <img src={imgSrc} alt={`eventor-${title}`} className="tab-icon" />
        <h3 className="tab-header-title" style={{ color }}>{title}</h3>
      </div>
    );
  }
}

export { TextWithImg };
