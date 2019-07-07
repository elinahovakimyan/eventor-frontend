import React, { useState } from 'react';
import { Drawer, Icon } from 'antd';
// import { Link } from 'react-router-dom';

import { Cart } from 'shared/components';

import './DrawerHeader.scss';

function DrawerHeader() {
  const logoSrc = require('assets/logo.png');
  const [visible, updateVisibility] = useState(false);

  return (
    <div id="header">
      <div className="header-content">

        <a href="https://eventor.am">
          <img className="logo-img" src={logoSrc} alt="logo" />
        </a>
        <div>
          <Cart />

          <Icon
            type="menu"
            className="header-icon"
            onClick={() => updateVisibility(true)}
          />
          <Drawer
            closable
            title="Ցանկ"
            placement="right"
            onClose={() => updateVisibility(false)}
            visible={visible}
            className="drawer-menu"
          >
            {/* <Link><Link to="/faq">Հաճախ Տրվող Հարցեր</Link></Link>
              <p><Link to="/faq">Կապ Մեզ Հետ</Link></p>
              <p><Link to="/faq">Բաժանորդագրվել</Link></p> */}

            <h3>
              Մանրամասների համար՝
            </h3>
            <h4>
              <Icon type="phone" />
              +37455855615
            </h4>
            <h4>
              <Icon type="phone" />
              +37493661815
            </h4>

            <a href="https://fb.com/eventor.am" target="_blank" rel="noopener noreferrer">
              <Icon type="facebook" className="header-icon" />
            </a>
            <a href="https://instagram.com/eventor.am" target="_blank" rel="noopener noreferrer">
              <Icon type="instagram" className="header-icon" />
            </a>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export { DrawerHeader };
