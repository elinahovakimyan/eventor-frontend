import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { ServiceCard } from 'shared/wrappers';

import VenueModal from './VenueModal';


const VenueCard = React.memo(({
  service, isSelected, toggleService, history, match,
}) => {
  const isActiveService = match.params.serviceId ? service.id === Number(match.params.serviceId) : false;
  const [isModalVisible, toggleModal] = useState(isActiveService);

  const handleModalToggle = () => {
    if (!isModalVisible) {
      history.push(`/venue/service/${service.id}`);
      toggleModal(true);
    } else {
      history.push('/venue');
      toggleModal(false);
    }
  };

  const getCardContent = () => (
    <React.Fragment>
      <p className="service-description">
        {`${service.description.substr(0, 75)}...`}
      </p>
      {/* <h4 className="short-text">
        <Icon type="environment" />
        {` Հասցե՝ ${service.address}`}
      </h4> */}
      {/* <h4 className="short-text">
        <Icon type="shop" />
        {` Սրահների քանակը՝ ${service.rooms}`}
      </h4> */}

      <h4 className="text-right price-range">{service.priceRange}</h4>
    </React.Fragment>
  );

  return (
    <>
      <ServiceCard
        service={service}
        onClick={handleModalToggle}
        isSelected={isSelected}
        onActionClick={() => toggleService(!isSelected)}
      >
        {service.id ? getCardContent() : null}
      </ServiceCard>
      <VenueModal
        service={service}
        isModalVisible={isModalVisible}
        toggleModal={handleModalToggle}
        toggleService={toggleService}
      />
    </>
  );
});

export default withRouter(VenueCard);
