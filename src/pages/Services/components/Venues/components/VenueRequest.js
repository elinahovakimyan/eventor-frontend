import React from 'react';
import * as emailjs from 'emailjs-com';
import { Icon, Modal, Input } from 'antd';


class VenueRequest extends React.PureComponent {
  state = {
    isModalVisible: false,
    okText: 'Ուղարկել',
    email: '',
    suggestions: '',
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  }

  handleSubmit = () => {
    const { email, suggestions } = this.state;

    if (suggestions || email) {
      const values = { email, suggestions };

      this.setState({
        okText: 'Ուղարկվում է...',
      });

      const templateParams = {
        reply_to: 'reply_to_value',
        from_name: values.email,
        to_name: 'New Venue Request',
        message_html: JSON.stringify(values),
      };

      const serviceId = 'default_service';
      const templateId = 'template_KWvTDbxq';
      const userId = 'user_KTPrRh8HKGMZ7Uw4U0P8U';

      emailjs.send(serviceId, templateId, templateParams, userId)
        .then(() => {
          this.setState({
            isModalVisible: false,
            okText: 'Ուղարկել',
          });
          this.props.form.resetFields();
        })
        .catch(() => {
          this.setState({
            isModalVisible: false,
            okText: 'Ուղարկել',
          });
        });

    } else {
      this.setState({
        isModalVisible: false,
      });
    }
  }

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value,
    });
  }

  render() {
    const { email, suggestions } = this.state;
    return (
      <>
        <div className="venue-request" onClick={this.toggleModal}>
          <Icon type="question-circle" />
          <h3>Չգտա՞ք Ձեր նախընտրած վայրը...</h3>
        </div>

        <Modal
          centered
          visible={this.state.isModalVisible}
          onCancel={this.toggleModal}
          onOk={this.handleSubmit}
          okText={this.state.okText}
          title="Նշե՛ք, թե որ վայրը կցանկանայիք տեսնել մեր հարթակում"
          cancelText="Փակել"
          className="venue-request-modal"
        >
          <div>
            <h4>Էլ. Հասցե.</h4>
            <Input
              value={email}
              onChange={(e) => this.handleChange(e, 'email')}
              placeholder="Ձեր էլեկտրոնային հասցեն"
            />

            <br />
            <br />

            <h4>Առաջարկվող վայր(եր)ի անունը.</h4>
            <Input
              value={suggestions}
              onChange={(e) => this.handleChange(e, 'suggestions')}
              placeholder="Նշե՛ք անունները"
            />
          </div>
        </Modal>
      </>
    );
  }
}

export default VenueRequest;
