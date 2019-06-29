import React, { useState } from 'react';
import { Icon } from 'antd';

import { ServiceCard } from 'shared/wrappers';

import VenueModal from './VenueModal';


const VenueCard = React.memo(({ service, isSelected, toggleService }) => {
  const [isModalVisible, toggleModal] = useState(false);

  const getCardContent = () => (
    <React.Fragment>
      <p className="service-description">
        {`${service.description.substr(0, 75)}...`}
      </p>
      <h4 className="short-text">
        <Icon type="environment" />
        {` Հասցե՝ ${service.address}`}
      </h4>
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
        onClick={toggleModal}
        isSelected={isSelected}
        onActionClick={() => toggleService(!isSelected)}
      >
        {service.id ? getCardContent() : null}
      </ServiceCard>
      <VenueModal service={service} isModalVisible={isModalVisible} toggleModal={toggleModal} />
    </>
  );
});

export default VenueCard;
