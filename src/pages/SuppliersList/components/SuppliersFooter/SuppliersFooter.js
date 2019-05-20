import React from 'react';
import { Button, Icon } from 'antd';

import './SuppliersFooter.scss';

class SuppliersFooter extends React.PureComponent {
  render() {
    const {
      onNext, onPrev, currentStep,
    } = this.props;
    const isPrevDisabled = currentStep === 0;

    return (
      <div className="footer-actions">
        <Button disabled={isPrevDisabled} onClick={onPrev}>
          <Icon type="left" />
          Նախորդը
        </Button>
        <div className="right-content">
          <p onClick={onNext}>Բաց Թողնել</p>
          <Button onClick={onNext}>
            Հաջորդը
            <Icon type="right" />
          </Button>
        </div>
      </div>
    );
  }
}

export default SuppliersFooter;