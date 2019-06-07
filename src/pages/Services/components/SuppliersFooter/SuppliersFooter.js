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
      <div className="service-footer">
        <div className="service-footer-actions">
          {/* <Button disabled={isPrevDisabled} onClick={onPrev}>
            <Icon type="left" />
          Նախորդը
          </Button> */}
          <Button disabled={isPrevDisabled} onClick={onPrev}>
            <Icon type="left" />
            Նախորդը
          </Button>
          {currentStep !== 4
            ? (
              <Button type="primary" onClick={onNext}>
                  Հաջորդը
                <Icon type="right" />
              </Button>
            )
            : null}
        </div>
        <p className="text-center contact-p">
          Հարցերի դեպքում՝
          {' '}
          <Icon type="phone" />
          {' '}
          055855615, 093661815
        </p>
      </div>
    );
  }
}

export default SuppliersFooter;
