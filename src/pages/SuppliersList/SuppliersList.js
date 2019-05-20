import React from 'react';
import { connect } from 'react-redux';
import { Steps } from 'antd';

import { TextWithImg } from 'core/components';
import { getIconByType } from 'core/helpers';
import {
  categories,
  VENUE,
  FOOD,
  // DECORATION,
  // CAKE,
  // CARTOON_HERO,
  // GAME_SHOW,
  // PHOTOGRAPHER,
} from 'shared/data/constants';

import { getCakes } from 'store/actions/cake';
import { getDecorations } from 'store/actions/decoration';
import { getCartoonHeroes } from 'store/actions/cartoonHero';
import { getGameShows } from 'store/actions/gameShow';
import { getPhotographers } from 'store/actions/photographer';

import Venues from './components/Venues/Venues';
import Food from './components/Food/Food';
import Filters from './components/Filters/Filters';
import SuppliersFooter from './components/SuppliersFooter/SuppliersFooter';

import './SuppliersList.scss';

const Step = Steps.Step;

class SuppliersList extends React.PureComponent {
  state = {
    currentStep: 0,
  }

  componentDidMount() {
    this.props.getCakes();
    this.props.getDecorations();
    this.props.getGameShows();
    this.props.getCartoonHeroes();
    this.props.getPhotographers();
  }

  getGridByStep = (step) => {
    const currentCategory = categories.find(c => c.key === step);

    switch (currentCategory.type) {
      case VENUE:
        return <Venues />;
      case FOOD:
        return <Food />;
      // case DECORATION:
      //   return this.props.decorations;
      // case CAKE:
      //   return this.props.cakes;
      // case CARTOON_HERO:
      //   return this.props.cartoonHeroes;
      // case GAME_SHOW:
      //   return this.props.gameShows;
      // case PHOTOGRAPHER:
      //   return this.props.photographers;
      default:
        return <Venues />;
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

    return (
      <div className="suppliers-list-page">
        <Steps progressDot className="suppliers-steps" current={currentStep}>
          {categories.map(serviceCategory => (
            <Step
              title={(
                <TextWithImg
                  imgSrc={getIconByType(serviceCategory.type)}
                  title={serviceCategory.label}
                />
              )}
              key={serviceCategory.type}
            />
          ))}
        </Steps>


        <div className="tab-content suppliers-content">
          <div className="filters-wrapper mt-30">
            <Filters type={currentStep} />
          </div>
          <div className="data-wrapper">
            {this.getGridByStep(currentStep)}
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
  cakes: state.cake.cakes,
  gameShows: state.gameShow.gameShows,
  cartoonHeroes: state.cartoonHero.cartoonHeroes,
  decorations: state.decoration.decorations,
  photographers: state.photographer.photographers,
});

const mapDispatchToProps = {
  getCakes,
  getCartoonHeroes,
  getPhotographers,
  getDecorations,
  getGameShows,
};

export default connect(mapStateToProps, mapDispatchToProps)(SuppliersList);
