import React from 'react';
import { Drawer, Icon } from 'antd';
import { Link } from 'react-router-dom';

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
        <Link to="/">
          <img className="logo-img" src={logoSrc} alt="logo" />
        </Link>
        <div>
          <a href="https://fb.com/eventor.am" target="_blank" rel="noopener noreferrer">
            <Icon type="facebook" className="header-icon" />
          </a>
          <a href="https://instagram.com/eventor.am" target="_blank" rel="noopener noreferrer">
            <Icon type="instagram" className="header-icon" />
          </a>
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
          >
            <p><Link to="/faq">Հաճախ Տրվող Հարցեր</Link></p>
            <p><Link to="/faq">Կապ Մեզ Հետ</Link></p>
            <p><Link to="/faq">Բաժանորդագրվել</Link></p>
          </Drawer>
        </div>
      </div>
    );
  }
}

export { DrawerHeader };
