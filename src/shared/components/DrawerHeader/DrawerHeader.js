import React from 'react';
import { Drawer, Icon } from 'antd';
import { Link } from 'react-router-dom';

import { Cart } from 'shared/components';

import './DrawerHeader.scss';

class DrawerHeader extends React.PureComponent {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const logoSrc = require('assets/logo.png');

    return (
      <div id="header">
        <a href="https://eventor.am">
          <img className="logo-img" src={logoSrc} alt="logo" />
        </a>
        <div>
          <Cart />

          <Icon
            type="menu"
            className="header-icon"
            onClick={this.showDrawer}
          />
          <Drawer
            closable
            title="Ցանկ"
            placement="right"
            onClose={this.onClose}
            visible={this.state.visible}
            className="drawer-menu"
          >
            <p><Link to="/faq">Հաճախ Տրվող Հարցեր</Link></p>
            <p><Link to="/faq">Կապ Մեզ Հետ</Link></p>
            <p><Link to="/faq">Բաժանորդագրվել</Link></p>

            <a href="https://fb.com/eventor.am" target="_blank" rel="noopener noreferrer">
              <Icon type="facebook" className="header-icon" />
            </a>
            <a href="https://instagram.com/eventor.am" target="_blank" rel="noopener noreferrer">
              <Icon type="instagram" className="header-icon" />
            </a>
          </Drawer>
        </div>
      </div>
    );
  }
}

export { DrawerHeader };
