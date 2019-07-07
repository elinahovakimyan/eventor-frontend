import React from 'react';
import { Icon } from 'antd';

import { formatPrice } from 'shared/helpers';
import { ServiceModal } from 'shared/wrappers';

class GameShowModal extends React.PureComponent {
  render() {
    const { service, isModalVisible, toggleModal } = this.props;
    const { title, description } = service;

    return (
      <ServiceModal imgs={service.carouselImgs} isModalVisible={isModalVisible} toggleModal={toggleModal}>
        <div className="service-content">

          <div className="text-center">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

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

export default GameShowModal;
