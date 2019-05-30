import React from 'react';
import {
  Menu, Dropdown, Icon, Badge, Empty,
} from 'antd';
import { connect } from 'react-redux';

import {
  deselectVenue, deselectGameShow, deselectCartoonHero, deselectDecoration,
} from 'store/actions/birthday';
import {
  getSelectedVenue, getSelectedCartoonHeroes, getSelectedDecorations, getSelectedGameShows,
} from 'store/getters';

import './Cart.scss';


class CartComp extends React.PureComponent {

  getContent = () => {
    const {
      selectedVenue,
      selectedCartoonHeroes,
      selectedGameShows,
      selectedDecorations,
    } = this.props;

    if ((!selectedVenue || !selectedVenue.length)
      && (!selectedCartoonHeroes || !selectedCartoonHeroes.length)
      && (!selectedGameShows || !selectedGameShows.length)
      && (!selectedDecorations || !selectedDecorations.length)) {
      return (
        <Menu>
          <Menu.Item>
            <Empty description="Ոչինչ չեք ընտրել" />
          </Menu.Item>
        </Menu>
      );
    }

    return (
      <Menu>
        {selectedVenue && selectedVenue.length
          ? (
            <Menu.Item key="1" className="cart-row">
              <div className="service-wrapper">
                <img src={require('assets/icons/place.svg')} alt="place" />
                <h4>{selectedVenue[0].title}</h4>
              </div>
              <Icon type="delete" onClick={() => this.props.deselectVenue(selectedVenue[0])} />
            </Menu.Item>
          )
          : null}
        {selectedCartoonHeroes && selectedCartoonHeroes.length
          ? selectedCartoonHeroes.map(service => (

            <Menu.Item key={`2+${service.id}`} className="cart-row">
              <div className="service-wrapper">
                <img src={require('assets/icons/donatello.svg')} alt="cartoon hero" />
                <h4>{service.title}</h4>
              </div>
              <Icon type="delete" onClick={() => this.props.deselectCartoonHero(service)} />
            </Menu.Item>
          ))
          : null}
        {selectedGameShows && selectedGameShows.length
          ? selectedGameShows.map(service => (

            <Menu.Item key={`3+${service.id}`} className="cart-row">
              <div className="service-wrapper">
                <img src={require('assets/icons/laugh.svg')} alt="cartoon hero" />
                <h4>{service.title}</h4>
              </div>
              <Icon type="delete" onClick={() => this.props.deselectGameShow(service)} />
            </Menu.Item>
          ))
          : null}
        {selectedDecorations && selectedDecorations.length
          ? selectedDecorations.map(service => (

            <Menu.Item key={`4+${service.id}`} className="cart-row">
              <div className="service-wrapper">
                <img src={require('assets/icons/balloons.svg')} alt="cartoon hero" />
                <h4>{service.title}</h4>
              </div>
              <Icon type="delete" onClick={() => this.props.deselectDecoration(service)} />
            </Menu.Item>
          ))
          : null}
      </Menu>
    );
  }

  getServiceCount = () => {
    const {
      selectedVenue,
      selectedCartoonHeroes,
      selectedGameShows,
      selectedDecorations,
    } = this.props;

    let n = 0;

    if (selectedVenue && selectedVenue.length) {
      n++;
    }
    if (selectedCartoonHeroes && selectedCartoonHeroes.length) {
      n += selectedCartoonHeroes.length;
    }
    if (selectedGameShows && selectedGameShows.length) {
      n += selectedGameShows.length;
    }
    if (selectedDecorations && selectedDecorations.length) {
      n += selectedDecorations.length;
    }

    return n;

  }

  render() {
    const serviceN = this.getServiceCount();

    return (
      <Dropdown overlay={this.getContent()}>
        <span className="card-dropdown-link ant-dropdown-link">
          <Badge count={serviceN}>
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

const mapDispatchToProps = {
  deselectVenue,
  deselectGameShow,
  deselectCartoonHero,
  deselectDecoration,
};


const Cart = connect(mapStateToProps, mapDispatchToProps)(CartComp);

export { Cart };
