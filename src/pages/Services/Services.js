import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Steps } from 'antd';

import { StepTitle } from 'shared/components';
import { getIconByType } from 'shared/helpers';
import {
  categorySteps,
  VENUE,
  CARTOON_HERO,
  GAME_SHOW,
  DECORATION,
  DONE,
} from 'shared/constants';

import Venues from './sections/Venues/Venues';
import CartoonHeroes from './sections/CartoonHeroes/CartoonHeroes';
import GameShows from './sections/GameShows/GameShows';
import Decorations from './sections/Decorations/Decorations';
import Confirmation from './sections/Confirmation/Confirmation';
import ServicesFooter from './components/ServicesFooter/ServicesFooter';

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
      case CARTOON_HERO:
        return <CartoonHeroes />;
      case GAME_SHOW:
        return <GameShows />;
      case DECORATION:
        return <Decorations />;
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
          : (
            <div className="suppliers-content">
              {getGridByStep(currentCategory)}
            </div>
          )}
      </div>


      <ServicesFooter
        currentStep={currentCategory.key}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );

}

export default connect(null, null)(Services);
