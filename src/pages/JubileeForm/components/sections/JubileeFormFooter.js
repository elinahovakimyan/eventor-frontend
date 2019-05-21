import React from 'react';
import { Button, Icon } from 'antd';

class JubileeFormFooter extends React.PureComponent {
  render() {
    const {
      nextStep, prevStep, currentStep, submitJubileeInfo, readyLoading,
    } = this.props;
    const isPrevDisabled = currentStep === 0;

    return (
      <div className="footer-actions">
        <Button disabled={isPrevDisabled} onClick={prevStep}>
          <Icon type="left" />
          Նախորդը
        </Button>
        {currentStep < 2 ? (
          <Button onClick={nextStep}>
            Հաջորդը
            <Icon type="right" />
          </Button>
        ) : (
          <Button onClick={submitJubileeInfo}>
            Պատրաստ եմ
            {readyLoading
              ? <Icon type="loading" />
              : <Icon type="smile" />
            }
          </Button>
        )}
      </div>
    );
  }
}

export default JubileeFormFooter;
