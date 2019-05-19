import React from 'react';
import { connect } from 'react-redux';
import { Steps } from 'antd';

import { HeaderWithIcon } from 'core/components';
import { categories } from 'data/constants';

import { getRestaurants } from 'store/actions/restaurant';
import { getCakes } from 'store/actions/cake';
import { getDecorations } from 'store/actions/decoration';
import { getCartoonHeroes } from 'store/actions/cartoonHero';
import { getGameShows } from 'store/actions/gameShow';
import { getPhotographers } from 'store/actions/photographer';

import SuppliersGrid from './components/SuppliersGrid/SuppliersGrid';
import Filters from './components/Filters/Filters';
import SuppliersFooter from './components/SuppliersFooter';

import './SuppliersList.scss';

const Step = Steps.Step;
const RESTAURANT = 0;
const CARTOON_HERO = 1;
const GAME_SHOW = 2;
const DECORATION = 3;
const CAKE = 4;
const PHOTOGRAPHER = 5;

class SuppliersList extends React.PureComponent {
  state = {
    currentStep: 0,
  }

  componentDidMount() {
    this.props.getRestaurants();
    this.props.getCakes();
    this.props.getDecorations();
    this.props.getGameShows();
    this.props.getCartoonHeroes();
    this.props.getPhotographers();
  }

  getDataByStep = (step) => {
    switch (step) {
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

  handleNext = () => {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep + 1,
    }));
  }

  handlePrev = () => {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep - 1,
    }));
  }

  render() {
    const { currentStep } = this.state;
    const { category } = this.props.match.params;
    const data = this.getDataByStep(currentStep);

    return (
      <div className="suppliers-list-page">
        <Steps progressDot className="suppliers-steps" current={currentStep}>
          {categories.map(serviceCategory => (
            <Step
              title={(
                <HeaderWithIcon
                  type={serviceCategory.type}
                  title={serviceCategory.label}
                />
              )}
              key={serviceCategory.type}
            />
          ))}
        </Steps>

        <div className="tab-content suppliers-content">
          <div className="filters-wrapper mt-30">
            <Filters />
          </div>
          <div className="data-wrapper">
            <SuppliersGrid services={data} category={category} />
          </div>
        </div>


        <SuppliersFooter
          currentStep={currentStep}
          onNext={this.handleNext}
          onPrev={this.handlePrev}
        />

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
