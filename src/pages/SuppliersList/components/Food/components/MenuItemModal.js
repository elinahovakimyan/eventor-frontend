import React from 'react';

import {
  Modal, Icon, InputNumber, Input, Row, Col,
} from 'antd';

const { TextArea } = Input;

class MenuItemModal extends React.PureComponent {
  state = {
    isModalVisible: false,
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  }

  render() {
    const { item } = this.props;

    return (
      <React.Fragment>
        <Icon type="plus-circle" onClick={this.toggleModal} />
        <Modal
          centered
          title={item.name}
          visible={this.state.isModalVisible}
          onCancel={this.toggleModal}
          okText="Ավելացնել"
          cancelText="Փակել"
          className="menu-item-modal"
        >
          <h3 className="menu-item-description">{item.description}</h3>

          <Row className="menu-form-item">
            <Col md={6} sm={24}>
              <h3>Քանակ </h3>
            </Col>
            <Col md={18} sm={24}>
              <InputNumber min={1} defaultValue={1} />
            </Col>
          </Row>

          <Row className="menu-form-item">
            <Col md={6} sm={24}>
              <h3>Նշումներ </h3>
            </Col>
            <Col md={18} sm={24}>
              <TextArea
                placeholder=""
                autosize={{ minRows: 2, maxRows: 6 }}
              />
            </Col>
          </Row>


          <h3 className="menu-item-price">
            {`Գինը՝ ${item.price} դր.`}
          </h3>
        </Modal>
      </React.Fragment>
    );
  }
}

export default MenuItemModal;
