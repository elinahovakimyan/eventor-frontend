import React from 'react';
import { Icon } from 'antd';

import { formatPrice } from 'shared/helpers';
import { ServiceModal } from 'shared/wrappers';

class PhotographyModal extends React.PureComponent {
  render() {
    const {
      service, isModalVisible, toggleModal, toggleService,
    } = this.props;
    const { title, description } = service;

    return (
      <ServiceModal
        imgs={service.carouselImgs}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        toggleService={toggleService}
      >
        <div className="service-content">

          <div className="text-center">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          <h4 className="provider">
            {`Մատակարար՝ ${service.providerName}`}
          </h4>

          {service.price || service.startingPrice
            ? (
              <h3>
                <Icon type="tags" />
                {' '}
                Գինը՝
                {' '}
                {service.price ? formatPrice(service.price) : ` սկսած ${formatPrice(service.startingPrice)}`}
              </h3>
            )
            : null}

          <h3>
            <Icon type="clock-circle" />
            {' '}
            Տևողությունը՝
            {' '}
            {service.duration}
            {' '}
            ժամ
          </h3>
        </div>
      </ServiceModal>
    );
  }
}

export default PhotographyModal;
