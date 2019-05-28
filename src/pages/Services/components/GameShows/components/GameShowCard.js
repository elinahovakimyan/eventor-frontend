import React from 'react';

import { formatPrice } from 'core/helpers';
import { ServiceCard } from 'shared/wrappers';

import GameShowModal from './GameShowModal';


const GameShowCard = React.memo(({ service, isSelected, toggleService }) => {

  const getCardContent = () => (
    <React.Fragment>
      <p className="service-description one-line-text">
        {service.description}
      </p>

      <h4 className="provider">
        {`Մատակարար՝ ${service.providerName}`}
      </h4>

      <h4 className="price text-right">
        Սկսած
        {' '}
        {formatPrice(service.price)}
      </h4>
    </React.Fragment>
  );


  return (
    <ServiceCard
      service={service}
      seeMore={<GameShowModal service={service} />}
      onClick={() => toggleService(service.id)}
      isSelected={isSelected}
    >
      {service.id ? getCardContent() : null}
    </ServiceCard>
  );
});

export default GameShowCard;
