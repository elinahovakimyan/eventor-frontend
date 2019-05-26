import React from 'react';

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

      <h4 className="price text-right">
        {service.price}
        դր.
      </h4>
    </React.Fragment>
  );

  return (
    <ServiceCard
      service={service}
      seeMore={<DecorationModal service={service} />}
      onClick={() => toggleService(service.id)}
      isSelected={isSelected}
    >
      {service.id ? getCardContent() : null}
    </ServiceCard>
  );
});

export default DecorationCard;
