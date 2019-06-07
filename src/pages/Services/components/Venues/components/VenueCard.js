import React from 'react';
import { Icon } from 'antd';

import { ServiceCard } from 'shared/wrappers';

import VenueModal from './VenueModal';


const CartoonHeroCard = React.memo(({ service, isSelected, toggleService }) => {

  const getCardContent = () => (
    <React.Fragment>
      <p className="service-description">
        {`${service.description.substr(0, 75)}...`}
      </p>
      <h4 className="one-line-text">
        <Icon type="environment" />
        {` Հասցե՝ ${service.address}`}
      </h4>
      <h4 className="one-line-text">
        <Icon type="shop" />
        {` Սրահների քանակը՝ ${service.rooms}`}
      </h4>

      <h4 className="text-right price-range">{service.priceRange}</h4>
    </React.Fragment>
  );

  return (
    <ServiceCard
      service={service}
      seeMore={<VenueModal service={service} />}
      onClick={toggleService}
      isSelected={isSelected}
    >
      {service.id ? getCardContent() : null}
    </ServiceCard>
  );
});

export default CartoonHeroCard;
