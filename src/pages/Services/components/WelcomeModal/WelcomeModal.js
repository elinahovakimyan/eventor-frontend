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
          <h1>Բարի գալուստ Eventor.am</h1>
          {/* <h2 className="">Կայքը այժմ գտնվում է կառուցման փուլում։</h2> */}
          <img src={require('assets/welcome-cat.gif')} alt="welcome to eventor" style={{ width: 200 }} />

          <h2>Կազմակերպե՛ք Ձեր երեխայի ծնունդը առցանց և արագ։</h2>


          <p>
          Մեզ մոտ կարող եք գտնել և պատվիրել բոլոր անհրաժեշտ ծառայությունները
          Ձեր երեխայի ծննդյան համար։ Ինչպե՞ս։
          </p>
          <h4>1. Ընտրում եք, թե ինչ ծառայություններ եք ցանկանում,</h4>
          <h4>
          2. Այնուհետև մենք 24 ժամվա ընթացքում կապ ենք հաստատում Ձեզ հետ հաստատման կամ նոր առաջարկների համար։
          </h4>
          {/* Այստեղ դուք ընտրում եք, թե ինչ ծառայություններ եք ցանկանում, որից հետո մենք 24 ժամվա ընթացքում,
          ուսումնասիրում ենք Ձեր հայտը և կապ հաստատում հաստատման կամ նոր առաջարկների համար։ */}
        </div>
      </Modal>
    );
  }
}

export default WelcomeModal;
