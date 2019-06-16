import React from 'react';
import { Icon, Row, Col } from 'antd';

import { formatPrice } from 'core/helpers';
import { ServiceDetails } from 'shared/components';
import { ServiceModal } from 'shared/wrappers';

class VenueModal extends React.PureComponent {
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
      <ServiceModal imgs={service.carouselImgs}>
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
                {` Մուտքավճար՝ ${service.entranceFee ? formatPrice(service.entranceFee) : 'չկա'}`}
              </h3>
              {service.price
                ? (
                  <h3>
                    <Icon type="tags" />
                    {` Փաթեթներ՝ սկսած ${formatPrice(service.price)}`}
                  </h3>
                ) : null}
              {/* <h3>
                <Icon type="file-text" />
                {' '}
                Ծանոթանալ մենյուին
              </h3> */}
            </Col>
          </Row>

          <ServiceDetails details={service.details} />
        </div>
      </ServiceModal>
    );
  }
}

export default VenueModal;
