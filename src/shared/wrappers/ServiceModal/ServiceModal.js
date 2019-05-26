import React from 'react';
import { Modal, Button } from 'antd';

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
    const { title } = this.props;

    return (
      <React.Fragment>
        <Button onClick={this.toggleModal}>
          Ավելին
        </Button>
        <Modal
          centered
          title={title}
          visible={this.state.isModalVisible}
          onCancel={this.toggleModal}
          okText="Ընտրել"
          cancelText="Փակել"
          className="service-modal"
        >
          <ImageCarousel />

          {this.props.children}
        </Modal>
      </React.Fragment>
    );
  }
}

export { ServiceModal };
