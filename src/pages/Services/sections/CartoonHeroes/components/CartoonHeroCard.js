import React, { useState } from 'react';
import { Icon } from 'antd';

import { formatPrice } from 'shared/helpers';
import { ServiceCard } from 'shared/wrappers';

import CartoonHeroModal from './CartoonHeroModal';


const CartoonHeroCard = React.memo(({ service, isSelected, toggleService }) => {
  const [isModalVisible, toggleModal] = useState(false);

  const getCardContent = () => (
    <React.Fragment>
      <p className="service-description short-text">
        {service.description}
      </p>

      <h4 className="provider">
        <Icon type="clock-circle" />
        {` Տևողությունը՝ ${service.duration} ժամ`}
      </h4>

      {service.price || service.startingPrice
        ? (
          <h4 className="price text-right">
            {service.price ? formatPrice(service.price) : ` Սկսած ${formatPrice(service.startingPrice)}`}
          </h4>
        )
        : null}
    </React.Fragment>
  );


  return (
    <React.Fragment>
      {service.id
        ? (
          <ServiceCard
            service={service}
            onClick={toggleModal}
            onActionClick={() => toggleService(!isSelected)}
            isSelected={isSelected}
          >
            {getCardContent()}
          </ServiceCard>
        ) : null}

      <CartoonHeroModal service={service} isModalVisible={isModalVisible} toggleModal={toggleModal} />
    </React.Fragment>
  );
});

export default CartoonHeroCard;
