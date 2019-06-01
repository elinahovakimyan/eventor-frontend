import React from 'react';
import { Icon } from 'antd';

import { formatPrice } from 'core/helpers';
import { ServiceModal } from 'shared/wrappers';

class CartoonHeroModal extends React.PureComponent {
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
    const { title, description } = service;

    return (
      <ServiceModal imgs={service.carouselImgs}>
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
        </div>
      </ServiceModal>
    );
  }
}

export default CartoonHeroModal;
