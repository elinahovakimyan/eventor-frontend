import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Steps } from 'antd';

import { StepTitle } from 'core/components';
import { getIconByType } from 'core/helpers';
// import { Filters } from 'shared/components';
import {
  categorySteps,
  VENUE,
  // FOOD,
  CARTOON_HERO,
  GAME_SHOW,
  DECORATION,
  DONE,
  // CAKE,
  // PHOTOGRAPHER,
} from 'shared/data/constants';

import Venues from './components/Venues/Venues';
// import Food from './components/Food/Food';
import CartoonHeroes from './components/CartoonHeroes/CartoonHeroes';
import GameShows from './components/GameShows/GameShows';
import Decorations from './components/Decorations/Decorations';
import Confirmation from './components/Confirmation/Confirmation';
import SuppliersFooter from './components/SuppliersFooter/SuppliersFooter';

import './Services.scss';

const Step = Steps.Step;

const initialCategory = {
  key: 0,
  type: VENUE,
  label: 'Ժամանցի Վայր',
};

function Services({ match, history }) {
  const [currentCategory, updateCurrentCategory] = useState(initialCategory);

  useEffect(() => {
    const { category } = match.params;

    if (category) {
      const newCategory = categorySteps.find(c => c.type === category);
      if (newCategory) {
        updateCurrentCategory(newCategory);
      }
    }
  }, [match]);


  const getGridByStep = () => {
    switch (currentCategory.type) {
      case VENUE:
        return <Venues />;
      // case FOOD:
      //   return <Food />;
      case CARTOON_HERO:
        return <CartoonHeroes />;
      case GAME_SHOW:
        return <GameShows />;
      case DECORATION:
        return <Decorations />;
      // case CAKE:
      //   return props.cakes;
      // case PHOTOGRAPHER:
      //   return props.photographers;
      default:
        return <Venues />;
    }
  };

  const handleNext = () => {
    const currentStep = currentCategory.key + 1;

    const newCategory = categorySteps.find(c => c.key === currentStep);

    updateCurrentCategory(newCategory);
    history.push(`/${newCategory.type}`);
    window.scrollTo(0, 0);
  };

  const handlePrev = () => {
    const currentStep = currentCategory.key - 1;
    const newCategory = categorySteps.find(c => c.key === currentStep);

    updateCurrentCategory(newCategory);
    history.push(`/${newCategory.type}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="suppliers-list-page">
      <Steps
        className="suppliers-steps"
        current={currentCategory.key}
        // direction={window.innerWidth > 768 ? 'horizontal' : 'vertical'}
      >
        {categorySteps.map(serviceCategory => (
          <Step
            icon={(
              <StepTitle
                isCompleted={serviceCategory.key < currentCategory.key}
                isActive={serviceCategory.type === currentCategory.type}
                imgSrc={getIconByType(serviceCategory.type)}
                title={serviceCategory.label}
                onClick={() => history.push(`/${serviceCategory.type}`)}
              />
            )}
            key={serviceCategory.type}
          />
        ))}
      </Steps>

      <div className="service-content">
        {currentCategory.type === DONE
          ? <Confirmation />
          // : (currentCategory.type === FOOD
          //   ? getGridByStep(currentCategory)
          : (
            <div className="suppliers-content">
              {/* <div className="filters-wrapper mt-30">
                    <Filters currentCategory={currentCategory} />
                  </div>
                  <div className="data-wrapper"> */}
              {/* <div className="services-header">
                <h2>{`Ընտրե՛ք ${currentCategory.label}`}</h2>
                <span />
                <Button>
                  <Link to="/done">Անցնել հաստատման էջ </Link>
                </Button>
              </div> */}
              {getGridByStep(currentCategory)}
              {/* </div> */}
            </div>
          )}
      </div>


      <SuppliersFooter
        currentStep={currentCategory.key}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );

}

export default connect(null, null)(Services);
