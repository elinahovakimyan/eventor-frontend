import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends Component {

  render() {
    const logoSrc = require('assets/logo.png');
    return (
      <div id="header">
        <div id="logo">
          <img className="logo-img" src={logoSrc} alt="logo" />
        </div>
        <div id="menu">
          <Link
            id="home"
            className="menu-item"
            to="#"
            activeclassname="active"
          >
              Գլխավոր
          </Link>
          <Link
            id="about-us"
            to="#"
            className="menu-item"
            activeclassname="active"
          >
            Մեր Մասին
          </Link>
          <Link
            id="contact-us"
            to="#"
            className="menu-item"
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
        </div>
      </div>
    );

  }
}

export { Header };
