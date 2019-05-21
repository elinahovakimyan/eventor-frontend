import React from 'react';
import { Icon } from 'antd';

import JubileeFormSteps from './components/sections/JubileeFormSteps';
import JubileeFormFooter from './components/sections/JubileeFormFooter';
import JubileeName from './components/screens/JubileeName';
// import JubileeGender from './components/screens/JubileeGender';
// import JubileeAge from './components/screens/JubileeAge';
import JubileeInterests from './components/screens/JubileeInterests';
import BirthdayDate from './components/screens/BirthdayDate';
// import JubileeGuests from './components/screens/JubileeGuests';

import './JubileeForm.scss';

class JubileeForm extends React.PureComponent {
  state = {
    currentStep: 0,
    formAnswers: {},
    selectedInterests: [],
  }

  getCurrentContent = (currentStep) => {
    switch (currentStep) {
      case 0:
        return <JubileeName />;
      // case 1:
      //   return (
      //     <JubileeGender genderSelect={this.answerQuestion} />
      //   );
      // case 2:
      //   return (
      //     <JubileeAge ageSelect={this.answerQuestion} />
      //   );
      case 1:
        return (
          <JubileeInterests
            selectedInterests={this.state.selectedInterests}
            toggleInterest={this.toggleInterest}
          />
        );
      case 2:
        return (
          <BirthdayDate
            onBirthdayDateChange={this.birthdayDateChange}
            onPartyDateChange={this.partyDateChange}
          />
        );
        // case 3:
        //   return (
        //     <JubileeGuests />
        //   );

      default:
        return null;
    }
  }

  answerQuestion = (key, value) => {
    this.setState((prevState) => ({
      formAnswers: {
        ...prevState.formAnswers,
        [key]: value,
      },
    }));

    if (key === 'gender' || key === 'age') {
      this.nextStep();
    }
  }

  nextStep = () => {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep + 1,
    }));
  }

  prevStep = () => {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep - 1,
    }));
  }

  toggleInterest = (interest) => {
    const { selectedInterests } = this.state;
    let updatedInterests = [];

    if (!selectedInterests.includes(interest)) {
      updatedInterests = [...selectedInterests, interest];
    } else {
      updatedInterests = selectedInterests.filter((curInt) => interest !== curInt);
    }

    this.setState({
      selectedInterests: updatedInterests,
    });
  }

  birthdayDateChange = (date) => {
    console.log('date :', new Date(date));
  }

  partyDateChange = (date) => {
    console.log('date :', date);
  }

  submitJubileeInfo = () => {
    this.props.history.push('/service-providers');
  }

  render() {
    const { currentStep } = this.state;
    const subject = currentStep < 2 ? 'հոբելյարի' : 'միջոցառման';

    return (
      <div className="jubilee-form">
        <h1 className="text-center">
          {`Մի փոքր ${subject} մասին `}
          <Icon type="heart" theme="twoTone" />
        </h1>
        <JubileeFormSteps currentStep={currentStep} />

        <div className="jubilee-content">
          {this.getCurrentContent(currentStep)}
        </div>

        <JubileeFormFooter
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          currentStep={currentStep}
          submitJubileeInfo={this.submitJubileeInfo}
        />
      </div>
    );
  }
}

export default JubileeForm;
