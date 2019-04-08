import React from 'react';

import { Button, Icon } from 'antd';

import './ContactSection.scss';

const EMAIL = 'email';
const PHONE = 'phone';
const ADDRESS = 'address';

const renderEventorReminder = () => (
  <p className="eventor-message">
    Չմոռանա՛ք նշել Eventor-ի մասին
    {' '}
    <span aria-label="smile" role="img">😊</span>
  </p>
);


class ContactSection extends React.PureComponent {
  state = {
    isRevealed: null,
  }

  getSecretString = (str) => {
    const secretStrLength = str.length - 4;
    const hiddenStr = '*'.repeat(secretStrLength);

    return str.slice(0, 4) + hiddenStr;
  }

  updateRevealedData = (newRevealed) => {
    this.setState((prevState) => ({
      isRevealed: prevState.isRevealed === newRevealed ? null : newRevealed,
    }));
  }

  render() {
    const { isRevealed } = this.state;
    const { email, phone, address } = this.props.contacts;

    return (
      <div className="contact-section">
        <p>Սեղմե՛ք ամբողջությամբ տեսնելու համար</p>
        {!!address && (
          <React.Fragment>
            <Button
              onClick={() => this.updateRevealedData(ADDRESS)}
              type="primary"
              className="contact-btn"
            >
              Ցույց տալ հասցեն
            </Button>
            {isRevealed === ADDRESS
              ? (
                <React.Fragment>
                  {renderEventorReminder()}
                  <p>
                    <Icon type="pushpin" />
                    {' '}
                    {address}
                  </p>
                </React.Fragment>
              )
              : null}
          </React.Fragment>
        )}

        {!!phone && (
          <React.Fragment>
            <Button
              onClick={() => this.updateRevealedData(PHONE)}
              type="primary"
              className="contact-btn"
            >
              {isRevealed === PHONE ? phone : this.getSecretString(phone)}
            </Button>

            {isRevealed === PHONE
              ? renderEventorReminder()
              : null}
          </React.Fragment>
        )}

        {!!email && (
          <React.Fragment>
            <Button
              onClick={() => this.updateRevealedData(EMAIL)}
              type="primary"
              className="contact-btn"
            >
              {isRevealed === EMAIL ? email : this.getSecretString(email)}
            </Button>

            {isRevealed === EMAIL
              ? renderEventorReminder()
              : null}
          </React.Fragment>

        )}
      </div>
    );
  }
}

export { ContactSection };
