import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Header.scss';

class Header extends Component {

  render() {
    const logoSrc = require('assets/logo.png');
    const { history } = this.props;
    return (
      <div id="header">
        <div id="logo">
          <img className="logo-img" src={logoSrc} alt="logo" onClick={() => history.push('/')} />
        </div>
        {/* <div id="menu">
          <Link
            id="home"
            className="menu-item menu-item-plain"
            to="/"
            activeclassname="active"
          >
              Գլխավոր
          </Link>
          <Link
            id="about-us"
            to="/service-providers"
            className="menu-item menu-item-plain"
            activeclassname="active"
          >
            Մատակարարների ցանկ
          </Link>
          <Link
            id="about-us"
            to="#"
            className="menu-item menu-item-plain"
            activeclassname="active"
          >
            Մեր Մասին
          </Link>
          <Link
            id="contact-us"
            to="#"
            className="menu-item menu-item-plain"
            activeclassname="active"
          >
            Կապ Մեզ Հետ
          </Link>
          <Link
            id="new-service-provider"
            to="#"
            className="menu-item"
            activeclassname="active"
          >
            Դարձիր Գործընկեր
          </Link>
        </div> */}
      </div>
    );

  }
}

export default withRouter(Header);
