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
      <ServiceModal>
        <div className="service-content">

          <div className="text-center">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          <h3>
            <Icon type="tags" />
            {` Գինը՝ սկսած ${formatPrice(service.price)}`}
          </h3>
          <h3>
            <Icon type="clock-circle" />
            {' '}
            Տևողությունը՝ 1.5 ժամ
          </h3>
          <h3>
            <Icon type="team" />
            {' '}
            Մասնակիցների քանակը՝ 5-15
          </h3>
        </div>
      </ServiceModal>
    );
  }
}

export default CartoonHeroModal;
