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
        className="welcome-modal text-center"
      >
        <div className="text-center">
          <h1>Ծնունդների կազմակերպումը այսքան արագ չի եղել։</h1>
          {/* <h2 className="">Կայքը այժմ գտնվում է կառուցման փուլում։</h2> */}
          <img src={require('assets/welcome-cat.gif')} alt="welcome to eventor" style={{ width: 200 }} />

          <h2>Գործընթացը շատ պարզ է.</h2>

          <h4>1. Պատվիրե՛ք բոլոր անհրաժեշտ ծառայություններն առցանց,</h4>
          <h4>2. Սպասե՛ք հետզանգի մանրամասների քննարկման համար։</h4>
        </div>
      </Modal>
    );
  }
}

export default WelcomeModal;
