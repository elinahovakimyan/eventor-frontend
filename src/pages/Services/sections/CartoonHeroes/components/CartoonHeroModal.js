import React from 'react';
import { Icon } from 'antd';

import { formatPrice } from 'shared/helpers';
import { ServiceModal } from 'shared/wrappers';

class CartoonHeroModal extends React.PureComponent {
  render() {
    const { service, isModalVisible, toggleModal } = this.props;
    const { title, description } = service;
    const price = service.price ? formatPrice(service.price) : ` սկսած ${formatPrice(service.startingPrice)}`;

    return (
      <ServiceModal imgs={service.carouselImgs} isModalVisible={isModalVisible} toggleModal={toggleModal}>
        <div className="service-content">

          <div className="text-center">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          <h3>
            {`Մատակարար՝ ${service.providerName}`}
          </h3>

          {service.price || service.startingPrice
            ? (
              <h3>
                <Icon type="tags" />
                {` Գինը՝ ${price}`}
              </h3>
            )
            : null}

        </div>
      </ServiceModal>
    );
  }
}

export default CartoonHeroModal;
