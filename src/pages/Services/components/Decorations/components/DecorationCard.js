import React from 'react';

import { formatPrice } from 'core/helpers';
import { ServiceCard } from 'shared/wrappers';

import DecorationModal from './DecorationModal';


const DecorationCard = React.memo(({ service, isSelected, toggleService }) => {

  const getCardContent = () => (
    <React.Fragment>
      <p className="service-description one-line-text">
        {service.description}
      </p>

      <h4 className="provider">
        {`Մատակարար՝ ${service.providerName}`}
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
    <ServiceCard
      service={service}
      seeMore={<DecorationModal service={service} />}
      onClick={toggleService}
      isSelected={isSelected}
    >
      {service.id ? getCardContent() : null}
    </ServiceCard>
  );
});

export default DecorationCard;
