import React from 'react';
import { connect } from 'react-redux';
import { Steps } from 'antd';

import { TextWithImg } from 'core/components';
import { getIconByType } from 'core/helpers';
import { Filters } from 'shared/components';
import {
  categorySteps,
  VENUE,
  FOOD,
  CARTOON_HERO,
  GAME_SHOW,
  DECORATION,
  DONE,
  // CAKE,
  // PHOTOGRAPHER,
} from 'shared/data/constants';

import WelcomeModal from './components/WelcomeModal/WelcomeModal';
import Venues from './components/Venues/Venues';
import Food from './components/Food/Food';
import CartoonHeroes from './components/CartoonHeroes/CartoonHeroes';
import GameShows from './components/GameShows/GameShows';
import Decorations from './components/Decorations/Decorations';
import Confirmation from './components/Confirmation/Confirmation';
import SuppliersFooter from './components/SuppliersFooter/SuppliersFooter';

import './Services.scss';

const Step = Steps.Step;

class Services extends React.PureComponent {
  state = {
    currentCategory: {
      key: 0,
      type: VENUE,
      label: 'Ժամանցի Վայր',
    },
  }

  getGridByStep = (currentCategory) => {
    switch (currentCategory.type) {
      case VENUE:
        return <Venues />;
      case FOOD:
        return <Food />;
      case CARTOON_HERO:
        return <CartoonHeroes />;
      case GAME_SHOW:
        return <GameShows />;
      case DECORATION:
        return <Decorations />;
      // case CAKE:
      //   return this.props.cakes;
      // case PHOTOGRAPHER:
      //   return this.props.photographers;
      default:
        return <Venues />;
    }
  }

  handleNext = () => {
    this.setState((prevState) => {
      const currentStep = prevState.currentCategory.key + 1;

      return ({
        currentCategory: categorySteps.find(c => c.key === currentStep),
      });
    });
  }

  handlePrev = () => {
    this.setState((prevState) => {
      const currentStep = prevState.currentCategory.key - 1;

      return ({
        currentCategory: categorySteps.find(c => c.key === currentStep),
      });
    });
  }

  render() {
    const { currentCategory } = this.state;

    return (
      <div className="suppliers-list-page">
        <WelcomeModal />

        <Steps progressDot className="suppliers-steps" current={currentCategory.key}>
          {categorySteps.map(serviceCategory => (
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


        {currentCategory.type === DONE
          ? <Confirmation />
          : (currentCategory.type === FOOD
            ? this.getGridByStep(currentCategory)
            : (
              <div className="tab-content suppliers-content">
                <div className="filters-wrapper mt-30">
                  <Filters currentCategory={currentCategory} />
                </div>
                <div className="data-wrapper">
                  <h2 className="text-center">{`Ընտրե՛ք ${currentCategory.label}ը`}</h2>
                  {this.getGridByStep(currentCategory)}
                </div>
              </div>
            )
          )}


        <SuppliersFooter
          currentStep={currentCategory.key}
          onNext={this.handleNext}
          onPrev={this.handlePrev}
        />
      </div>
    );
  }
}

export default connect(null, null)(Services);
