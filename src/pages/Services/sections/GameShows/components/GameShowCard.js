import React, { useState } from 'react';

import { formatPrice } from 'shared/helpers';
import { ServiceCard } from 'shared/wrappers';

import GameShowModal from './GameShowModal';


const GameShowCard = React.memo(({ service, isSelected, toggleService }) => {
  const [isModalVisible, toggleModal] = useState(false);

  const getCardContent = () => (
    <React.Fragment>
      <p className="service-description short-text">
        {service.description}
      </p>

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
    <>
      <ServiceCard
        service={service}
        onClick={toggleModal}
        onActionClick={() => toggleService(!isSelected)}
        isSelected={isSelected}
      >
        {service.id ? getCardContent() : null}
      </ServiceCard>

      <GameShowModal service={service} isModalVisible={isModalVisible} toggleModal={toggleModal} />
    </>
  );
});

export default GameShowCard;
