import React from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
// import * as emailjs from 'emailjs-com';

import { updateJubileeInfo } from 'store/actions/birthday';

import JubileeFormSteps from './components/sections/JubileeFormSteps';
import JubileeFormFooter from './components/sections/JubileeFormFooter';
import JubileeName from './components/screens/JubileeName';
import JubileeInterests from './components/screens/JubileeInterests';
import BirthdayDate from './components/screens/BirthdayDate';

import './JubileeForm.scss';

class JubileeForm extends React.PureComponent {
  state = {
    currentStep: 0,
    selectedInterests: [],
    name: [],
    birthdayDate: null,
    partyDate: null,
    partyTime: null,
    guestsNumber: null,
    isButtonLoading: false,
  }

  getCurrentContent = (currentStep) => {
    switch (currentStep) {
      case 0:
        return <JubileeName onChange={this.handleNameChange} />;
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
            onTimeChange={this.timeChange}
            onGuestNumberChange={this.guestNumberChange}
          />
        );

      default:
        return null;
    }
  }

  // answerQuestion = (key, value) => {
  //   this.setState((prevState) => ({
  //     formAnswers: {
  //       ...prevState.formAnswers,
  //       [key]: value,
  //     },
  //   }));

  //   if (key === 'gender' || key === 'age') {
  //     this.nextStep();
  //   }
  // }

  handleNameChange = (i, e) => {
    const { name } = this.state;
    const jubileeName = [...name];
    jubileeName[i] = e.target.value;

    this.setState({
      name: jubileeName,
    });
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

  birthdayDateChange = (value, dateString) => {
    this.setState({
      birthdayDate: {
        value,
        dateString,
      },
    });
  }

  partyDateChange = (value, dateString) => {
    this.setState({
      partyDate: {
        value,
        dateString,
      },
    });
  }

  timeChange = (partyTime) => {
    this.setState({
      partyTime,
    });
  }

  guestNumberChange = (guestsNumber) => {
    this.setState({
      guestsNumber,
    });
  }

  submitJubileeInfo = () => {
    this.setState({
      isButtonLoading: true,
    });

    const values = {
      name: this.state.name,
      interests: this.state.selectedInterests,
      birthdayDate: this.state.birthdayDate,
      partyDate: this.state.partyDate,
      partyTime: this.state.partyTime,
      guestsNumber: this.state.guestsNumber,
    };

    this.props.updateJubileeInfo(values);
    this.props.history.push('/services');

    // const templateParams = {
    //   reply_to: 'eventor.llc@gmail.com',
    //   from_name: 'eventor.llc@gmail.com',
    //   to_name: 'Eventor team (Jubilee Info)',
    //   message_html: JSON.stringify(values),
    // };

    // const serviceId = 'default_service';
    // const templateId = 'template_KWvTDbxq';
    // const userId = 'user_KTPrRh8HKGMZ7Uw4U0P8U';

    // emailjs.send(serviceId, templateId, templateParams, userId)
    //   .then(() => {
    //     this.setState({
    //       isButtonLoading: false,
    //     });
    //     this.props.history.push('/services');
    //   })
    //   .catch(() => {
    //     this.setState({
    //       isButtonLoading: false,
    //     });
    //   });
    this.setState({
      isButtonLoading: false,
    });

  }

  render() {
    const { currentStep, isButtonLoading } = this.state;
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
          readyLoading={isButtonLoading}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateJubileeInfo,
};

export default connect(null, mapDispatchToProps)(JubileeForm);
