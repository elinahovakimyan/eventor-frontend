import React from 'react';

import './TextWithImg.scss';

class TextWithImg extends React.PureComponent {
  render() {
    const { title, imgSrc, onClick } = this.props;

    return (
      <div className="text-with-img" onClick={onClick}>
        <img src={imgSrc} fill="red" alt={`eventor-${title}`} className="tab-icon" />
        <h3 className="tab-header-title">{title}</h3>
      </div>
    );
  }
}

export { TextWithImg };
