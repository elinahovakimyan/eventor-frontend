import React from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';

import { HeaderWithIcon, ServiceSlider } from 'core/components';
import {
  RESTAURANT,
  CAKE,
  DECORATION,
  GAME_SHOW,
  CARTOON_HERO,
  PHOTOGRAPHER,
  categories,
} from 'data/constants';

import { getRestaurants } from 'store/actions/restaurant';
import { getCakes } from 'store/actions/cake';
import { getDecorations } from 'store/actions/decoration';
import { getCartoonHeroes } from 'store/actions/cartoonHero';
import { getGameShows } from 'store/actions/gameShow';
import { getPhotographers } from 'store/actions/photographer';

import SuppliersGrid from './components/SuppliersGrid/SuppliersGrid';
import Filters from './components/Filters/Filters';

import './SuppliersList.scss';

const TabPane = Tabs.TabPane;

class SuppliersList extends React.PureComponent {
  componentDidMount() {
    this.props.getRestaurants();
    this.props.getCakes();
    this.props.getDecorations();
    this.props.getGameShows();
    this.props.getCartoonHeroes();
    this.props.getPhotographers();
  }

  getDataByType = (type) => {
    switch (type) {
      case RESTAURANT:
        return this.props.restaurants;
      case DECORATION:
        return this.props.decorations;
      case CAKE:
        return this.props.cakes;
      case CARTOON_HERO:
        return this.props.cartoonHeroes;
      case GAME_SHOW:
        return this.props.gameShows;
      case PHOTOGRAPHER:
        return this.props.photographers;
      default:
        return this.props.restaurants;
    }
  }

  render() {
    const { category } = this.props.match.params;
    const { history } = this.props;
    const data = this.getDataByType(category);

    return (
      <div className="suppliers-list-page">
        <Tabs
          defaultActiveKey={RESTAURANT}
          activeKey={category || RESTAURANT}
          onChange={(key) => history.push(`/service-providers/${key}`)}
        >
          {categories.map(serviceCategory => (
            <TabPane
              tab={(
                <HeaderWithIcon
                  type={serviceCategory.type}
                  title={serviceCategory.label}
                />
              )}
              key={serviceCategory.type}
            >
              <div className="tab-content">
                <div className="filters-wrapper mt-30">
                  <Filters />
                </div>
                <div className="data-wrapper">
                  <ServiceSlider
                    services={data}
                    category={category}
                    style={{ borderBottom: '0.3px solid #d8d8d8' }}
                  />

                  <SuppliersGrid services={data} category={category} />
                </div>
              </div>
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurant.restaurants,
  cakes: state.cake.cakes,
  gameShows: state.gameShow.gameShows,
  cartoonHeroes: state.cartoonHero.cartoonHeroes,
  decorations: state.decoration.decorations,
  photographers: state.photographer.photographers,
});

const mapDispatchToProps = {
  getCakes,
  getRestaurants,
  getCartoonHeroes,
  getPhotographers,
  getDecorations,
  getGameShows,
};

export default connect(mapStateToProps, mapDispatchToProps)(SuppliersList);
