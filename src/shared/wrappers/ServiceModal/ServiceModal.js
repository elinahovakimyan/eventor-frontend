import React from 'react';
import { Modal } from 'antd';

import { ImageCarousel } from 'shared/components';

import './ServiceModal.scss';

class ServiceModal extends React.PureComponent {
  render() {
    const {
      title, imgs, isModalVisible, toggleModal, isImgLocal,
    } = this.props;

    return (
      <Modal
        centered
        title={title}
        visible={!!isModalVisible}
        onCancel={() => toggleModal(false)}
        // onOk={handleSelection}
        // okText="Ընտրել"
        cancelText="Փակել"
        className="service-modal"
      >
        <ImageCarousel imgs={imgs} isLocal={isImgLocal} />

        {this.props.children}
      </Modal>
    );
  }
}

export { ServiceModal };
