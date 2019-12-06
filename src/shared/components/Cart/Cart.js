import React from 'react';
import {
  Menu, Dropdown, Icon, Badge, Empty,
} from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { formatPrice } from 'shared/helpers';
import {
  deselectVenue, deselectGameShow, deselectCartoonHero, deselectDecoration, deselectPhotography,
} from 'store/actions/birthday';
import {
  getSelectedVenue, getSelectedCartoonHeroes,
  getSelectedDecorations, getSelectedGameShows, getSelectedPhotography,
} from 'store/getters';

import './Cart.scss';
import { selectPhotography } from '../../../store/actions';


class CartComp extends React.PureComponent {

  getContent = () => {
    const {
      selectedVenue,
      selectedCartoonHeroes,
      selectedGameShows,
      selectedDecorations,
      selectedPhotography,
    } = this.props;

    if ((!selectedVenue || !selectedVenue.length)
      && (!selectedCartoonHeroes || !selectedCartoonHeroes.length)
      && (!selectedGameShows || !selectedGameShows.length)
      && (!selectedPhotography || !selectedPhotography.length)
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
      <div className="cart-menu-wrapper">
        <Menu>
          {selectedVenue && selectedVenue.length
            ? (
              <Menu.Item key="1" className="cart-row">
                <div className="service-wrapper">
                  <img src={require('assets/icons/place.svg')} alt="place" />
                  <h4>{selectedVenue[0].title}</h4>
                </div>
                <div className="service-wrapper">
                  <p>
                    {selectedVenue[0].entranceFee
                      ? ` Մուտքավճարը՝ ${formatPrice(selectedVenue[0].entranceFee)}`
                      : ''}
                  </p>
                  <Icon type="delete" onClick={() => this.props.deselectVenue(selectedVenue[0])} />
                </div>
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
                <div className="service-wrapper">
                  <p>
                    {service.price
                      ? formatPrice(service.price)
                      : `սկսած ${formatPrice(service.startingPrice)}`}
                  </p>
                  <Icon type="delete" onClick={() => this.props.deselectCartoonHero(service)} />
                </div>
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
                <div className="service-wrapper">
                  <p>
                    {service.price
                      ? formatPrice(service.price)
                      : `սկսած ${formatPrice(service.startingPrice)}`}
                  </p>
                  <Icon type="delete" onClick={() => this.props.deselectGameShow(service)} />
                </div>
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
                <div className="service-wrapper">
                  <p>
                    {service.price
                      ? formatPrice(service.price)
                      : `սկսած ${formatPrice(service.startingPrice)}`}
                  </p>
                  <Icon type="delete" onClick={() => this.props.deselectDecoration(service)} />
                </div>
              </Menu.Item>
            ))
            : null}

          {selectedPhotography && selectedPhotography.length
            ? selectedPhotography.map(service => (

              <Menu.Item key={`4+${service.id}`} className="cart-row">
                <div className="service-wrapper">
                  <img src={require('assets/icons/photo-camera.svg')} alt="cartoon hero" />
                  <h4>{service.title}</h4>
                </div>
                <div className="service-wrapper">
                  <p>
                    {service.price
                      ? formatPrice(service.price)
                      : `սկսած ${formatPrice(service.startingPrice)}`}
                  </p>
                  <Icon type="delete" onClick={() => this.props.deselectPhotography(service)} />
                </div>
              </Menu.Item>
            ))
            : null}
        </Menu>

        <hr />

        <Link to="/done">Անցնել հաստատման էջ</Link>
      </div>
    );
  }

  getServiceCount = () => {
    const {
      selectedVenue,
      selectedCartoonHeroes,
      selectedGameShows,
      selectedDecorations,
      selectedPhotography,
    } = this.props;

    let n = 0;

    if (selectedVenue && selectedVenue.length) {
      n++;
    }
    if (selectedCartoonHeroes && selectedCartoonHeroes.length) {
      n += selectedCartoonHeroes.length;
    }
    if (selectedPhotography && selectedPhotography.length) {
      n += selectedPhotography.length;
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
        <Link to="/done" className="card-dropdown-link ant-dropdown-link">
          <Badge count={serviceN}>
            <Icon type="heart" />
          </Badge>
        </Link>
      </Dropdown>
    );
  }
}


const mapStateToProps = (state) => ({
  selectedVenue: getSelectedVenue(state),
  selectedCartoonHeroes: getSelectedCartoonHeroes(state),
  selectedGameShows: getSelectedGameShows(state),
  selectedDecorations: getSelectedDecorations(state),
  selectedPhotography: getSelectedPhotography(state),
});

const mapDispatchToProps = {
  deselectVenue,
  deselectGameShow,
  deselectCartoonHero,
  deselectDecoration,
  deselectPhotography,
};


const Cart = connect(mapStateToProps, mapDispatchToProps)(CartComp);

export { Cart };
