import React from 'react';
import {
  Menu, Dropdown, Icon, message, Badge,
} from 'antd';
import { connect } from 'react-redux';

// import { filterByValues } from 'core/helpers';

import {
  getSelectedVenue, getSelectedCartoonHeroes, getSelectedDecorations, getSelectedGameShows,
} from 'store/getters';

import './Cart.scss';


function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      Ժամանցի վայր
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      Սնունդ
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="user" />
      Ժամանց
    </Menu.Item>
  </Menu>
);


class CartComp extends React.PureComponent {
  // state = {
  //   venue: filterByValues(this.props.selectedVenue)
  // }

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


const mapStateToProps = (state) => ({
  selectedVenue: getSelectedVenue(state),
  selectedCartoonHeroes: getSelectedCartoonHeroes(state),
  selectedGameShows: getSelectedGameShows(state),
  selectedDecorations: getSelectedDecorations(state),
});

// const mapDispatchToProps = {
//   getGameShows,
//   selectGameShow,
//   deselectGameShow,
// };


const Cart = connect(mapStateToProps, null)(CartComp);

export { Cart };
