import './styles.scss';

import React from 'react';
import { Icon } from 'antd';


function GradientButton({
  onClick, text, iconType, theme, iconTheme,
}) {

  return (
    <button type="button" className={`GradientButton ${theme}-gradient-btn`} onClick={onClick}>
      <span>
        <Icon type={iconType} theme={iconTheme} />
        {text}
      </span>
    </button>
  );
}

GradientButton.defaultProps = {
  theme: 'purple',
};

export default React.memo(GradientButton);
