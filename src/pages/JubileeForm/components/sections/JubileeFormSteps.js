import React from 'react';
import { Steps } from 'antd';

const Step = Steps.Step;

class JubileeFormSteps extends React.PureComponent {
  render() {
    const { currentStep } = this.props;

    return (
      <Steps className="steps" current={currentStep}>
        <Step title="Ծանոթանանք 🎉" />
        <Step title="Ի՞նչ ենք սիրում 🧡" />
        <Step title="Ինչպե՞ս նշենք 😇" />
      </Steps>
    );
  }
}

export default JubileeFormSteps;
