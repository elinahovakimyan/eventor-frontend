import React from 'react';
import {
  Modal, Button, Icon, Row, Col,
} from 'antd';

import { ImageCarousel } from 'core/components';
import { ServiceDetails } from 'shared/components';

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
    const {
      title, description, minPeople, maxPeople,
    } = service;

    return (
      <React.Fragment>
        <Button onClick={this.toggleModal}>
          Տեսնել ավելին
        </Button>
        <Modal
          centered
          title={service.name}
          visible={this.state.isModalVisible}
          onCancel={this.toggleModal}
          okText="Ընտրել"
          cancelText="Փակել"
          className="service-modal"
        >
          <ImageCarousel img={service.mainImage} />

          <div className="service-content">

            <div className="text-center">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>

            <Row className="basic-info">
              <Col md={12} sm={24}>
                <h3>
                  <Icon type="environment" />
                  {` Հասցե՝ ${service.address}`}
                </h3>
                <h3>
                  <Icon type="shop" />
                  {` Սրահների քանակը՝ ${service.rooms}`}
                </h3>
                <h3>
                  <Icon type="team" />
                  {` Նախատեսված է ${minPeople}-${maxPeople} հոգու համար`}
                </h3>
              </Col>
              <Col md={12} sm={24}>
                <h3>
                  <Icon type="tag" />
                  {` Մուտքավճար՝ ${service.entranceFee || 'չկա'}`}
                </h3>
                <h3>
                  <Icon type="tags" />
                  {` Փաթեթներ՝ սկսած ${service.price}`}
                </h3>
                <h3>
                  <Icon type="file-text" />
                  {' '}
                  Ծանոթանալ մենյուին
                </h3>
              </Col>
            </Row>

            <ServiceDetails details={service.details} />
          </div>


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
