import React from 'react';
import { Button, Icon } from 'antd';

import './ServicesFooter.scss';

function ServicesFooter({
  onNext, onPrev, currentStep,
}) {
  const isPrevDisabled = currentStep === 0;

  return (
    <div className="service-footer">
      <Button disabled={isPrevDisabled} onClick={onPrev}>
        <Icon type="left" />
          Նախորդը
      </Button>
      {currentStep !== 4
        ? (
          <button type="button" onClick={onNext} className=" next-btn orange-gradient-btn">
            <span>Հաջորդը</span>
            <Icon type="right" />
          </button>
        )
        : null}
    </div>
  );
}

export default ServicesFooter;
