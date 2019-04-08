import React from 'react';

import {
  Modal, Button, Icon, Empty,
} from 'antd';

import { ContactSection } from 'core/components';

import './ContactModal.scss';

class ContactModal extends React.PureComponent {
  state = {
    isModalVisible: false,
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  }

  render() {
    const { contacts } = this.props;

    return (
      <React.Fragment>
        <Button type="primary" onClick={this.toggleModal}>
          <Icon type="phone" />
        </Button>
        <Modal
          centered
          title="Կապ հաստատել մատակարարի հետ"
          visible={this.state.isModalVisible}
          onCancel={this.toggleModal}
          cancelText="Փակել"
          className="contact-modal"
        >
          {contacts ? (
            <ContactSection
              contacts={contacts}
            />
          ) : <Empty description="Ոչինչ չի գտնվել :(" />
          }
        </Modal>
      </React.Fragment>
    );
  }
}

export { ContactModal };
