import React from 'react';

import { Icon } from 'antd';

import './TextWithIcon.scss';

class TextWithIcon extends React.PureComponent {
  render() {
    const { iconType, text, isActive } = this.props;

    return (
      <div className={`text-with-icon ${isActive ? 'detail-active' : ''}`}>
        <Icon type={iconType} className="detail-icon" />
        <h3 className="detail-text">{text}</h3>
      </div>
    );
  }
}

export { TextWithIcon };
