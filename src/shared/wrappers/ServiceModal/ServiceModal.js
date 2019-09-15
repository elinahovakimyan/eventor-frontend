import React from 'react';

import { ImageCarousel } from 'shared/components';
import Modal from 'shared/components/Modal';
import GradientButton from 'shared/components/GradientButton';

import './ServiceModal.scss';

class ServiceModal extends React.PureComponent {
  render() {
    const {
      imgs, isModalVisible, toggleModal, isImgLocal, toggleService,
    } = this.props;

    return (
      <Modal
        centered
        isOpen={!!isModalVisible}
        onClose={() => toggleModal(false)}
        className="service-modal"
      >
        <ImageCarousel imgs={imgs} isLocal={isImgLocal} />

        <div className="service-modal-content">
          {this.props.children}
        </div>

        <div className="service-modal-footer">
          <GradientButton
            text="Հետաքրքրված եմ"
            iconType="heart"
            theme="purple"
            onClick={() => {
              toggleService(true);
              toggleModal(false);
            }}
          />
        </div>
      </Modal>
    );
  }
}

export { ServiceModal };
