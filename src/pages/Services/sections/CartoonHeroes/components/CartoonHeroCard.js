import React, { useState } from 'react';
import { Icon } from 'antd';
import { withRouter } from 'react-router-dom';

import { formatPrice } from 'shared/helpers';
import { ServiceCard } from 'shared/wrappers';

import CartoonHeroModal from './CartoonHeroModal';


const CartoonHeroCard = React.memo(({
  service, isSelected, toggleService, match, history,
}) => {
  const isActiveService = match.params.serviceId ? service.id === Number(match.params.serviceId) : false;
  const [isModalVisible, toggleModal] = useState(isActiveService);

  const handleModalToggle = () => {
    if (!isModalVisible) {
      history.push(`/cartoon_hero/service/${service.id}`);
      toggleModal(true);
    } else {
      history.push('/cartoon_hero');
      toggleModal(false);
    }
  };

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
            onClick={handleModalToggle}
            onActionClick={() => toggleService(!isSelected)}
            isSelected={isSelected}
          >
            {getCardContent()}
          </ServiceCard>
        ) : null}

      <CartoonHeroModal service={service} isModalVisible={isModalVisible} toggleModal={handleModalToggle} />
    </React.Fragment>
  );
});

export default withRouter(CartoonHeroCard);
