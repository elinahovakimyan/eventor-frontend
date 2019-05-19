import React from 'react';

import {
  Modal, Button, Icon,
} from 'antd';

import { ImageCarousel } from 'core/components';

import './ServiceModal.scss';

class ServiceModal extends React.PureComponent {
  state = {
    isModalVisible: false,
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  }

  render() {
    const { service } = this.props;

    return (
      <React.Fragment>
        <Button type="primary" onClick={this.toggleModal}>
          <Icon type="ellipsis" />
        </Button>
        <Modal
          centered
          title={service.name}
          visible={this.state.isModalVisible}
          onCancel={this.toggleModal}
          cancelText="Փակել"
          className="contact-modal"
        >
          <ImageCarousel />
          {/* {service ? (
            <ContactSection
              service={service}
            />
          ) : <Empty description="Ոչինչ չի գտնվել :(" />
          } */}
        </Modal>
      </React.Fragment>
    );
  }
}

export { ServiceModal };
