import React from 'react';
import { Icon } from 'antd';
// import { Link } from 'react-router-dom';

import { Cart } from 'shared/components';

import './DrawerHeader.scss';

function DrawerHeader() {
  const logoSrc = require('assets/logo.png');
  // const [visible, updateVisibility] = useState(false);

  return (
    <div id="header">
      <div className="header-content">

        <div className="inner-content">
          <a href="https://eventor.am">
            <img className="logo-img" src={logoSrc} alt="logo" />
          </a>
          <h4 className="desktop-contacts">
            <Icon type="phone" />
            +37495661815, +37493661815
          </h4>
          <Cart />
        </div>

        <h4 className="mobile-contacts">
          <Icon type="phone" />
          +37495661815, +37493661815
        </h4>
      </div>

    </div>
  );
}

export { DrawerHeader };
