import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { formatPrice } from 'shared/helpers';
import { ServiceCard } from 'shared/wrappers';

import GameShowModal from './GameShowModal';


const GameShowCard = React.memo(({
  service, isSelected, toggleService, match, history,
}) => {
  const isActiveService = match.params.serviceId ? service.id === Number(match.params.serviceId) : false;
  const [isModalVisible, toggleModal] = useState(isActiveService);

  const handleModalToggle = () => {
    if (!isModalVisible) {
      history.push(`/game_show/service/${service.id}`);
      toggleModal(true);
    } else {
      history.push('/game_show');
      toggleModal(false);
    }
  };

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
        onClick={handleModalToggle}
        onActionClick={() => toggleService(!isSelected)}
        isSelected={isSelected}
      >
        {service.id ? getCardContent() : null}
      </ServiceCard>

      <GameShowModal
        service={service}
        isModalVisible={isModalVisible}
        toggleModal={handleModalToggle}
        toggleService={toggleService}
      />
    </>
  );
});

export default withRouter(GameShowCard);
