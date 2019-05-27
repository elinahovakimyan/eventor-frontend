import React from 'react';
import {
  Menu, Dropdown, Icon, message, Badge,
} from 'antd';

import './Card.scss';


function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      1st menu item
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
);


class Card extends React.PureComponent {
  render() {
    return (
      <Dropdown overlay={menu}>
        <span className="card-dropdown-link ant-dropdown-link">
          <Badge count={5}>
            <Icon type="shopping-cart" />
          </Badge>
        </span>
      </Dropdown>
    );
  }
}

export { Card };
