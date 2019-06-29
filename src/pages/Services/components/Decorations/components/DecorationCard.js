import React, { useState } from 'react';

import { formatPrice } from 'core/helpers';
import { ServiceCard } from 'shared/wrappers';

import DecorationModal from './DecorationModal';


const DecorationCard = React.memo(({ service, isSelected, toggleService }) => {
  const [isModalVisible, toggleModal] = useState(false);

  const getCardContent = () => (
    <React.Fragment>
      <p className="service-description short-text">
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
    <>
      <ServiceCard
        service={service}
        onClick={toggleModal}
        onActionClick={() => toggleService(!isSelected)}
        isSelected={isSelected}
      >
        {service.id ? getCardContent() : null}
      </ServiceCard>

      <DecorationModal service={service} isModalVisible={isModalVisible} toggleModal={toggleModal} />
    </>
  );
});

export default DecorationCard;
