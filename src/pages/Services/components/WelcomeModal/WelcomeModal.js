import React from 'react';
import { Modal } from 'antd';

// import './WelcomeModal.scss';

class WelcomeModal extends React.PureComponent {
  state = {
    isModalVisible: true,
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  }

  render() {
    const { title } = this.props;

    return (
      <Modal
        centered
        title={title}
        visible={this.state.isModalVisible}
        onCancel={this.toggleModal}
        onOk={this.toggleModal}
        okText="Պարզ է :)"
        cancelText="Փակել"
        className="welcome-modal"
      >
        <h1 className="text-center">Բարի գալուստ Eventor</h1>
        <h2 className="text-center">Կազմակերպե՛ք Ձեր երեխայի ծնունդը առցանց և արագ։</h2>

        <p className="text-center">
          Ավելի շատ հուշումներ և թե ինչ է սպասվում իրենց...
        </p>
      </Modal>
    );
  }
}

export default WelcomeModal;
