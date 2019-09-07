import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { formatPrice } from 'shared/helpers';
import { ServiceCard } from 'shared/wrappers';

import DecorationModal from './DecorationModal';


const DecorationCard = React.memo(({
  service, isSelected, toggleService, match, history,
}) => {
  const isActiveService = match.params.serviceId ? service.id === Number(match.params.serviceId) : false;
  const [isModalVisible, toggleModal] = useState(isActiveService);

  const handleModalToggle = () => {
    if (!isModalVisible) {
      history.push(`/decoration/service/${service.id}`);
      toggleModal(true);
    } else {
      history.push('/decoration');
      toggleModal(false);
    }
  };

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
        onClick={handleModalToggle}
        onActionClick={() => toggleService(!isSelected)}
        isSelected={isSelected}
      >
        {service.id ? getCardContent() : null}
      </ServiceCard>

      <DecorationModal service={service} isModalVisible={isModalVisible} toggleModal={handleModalToggle} />
    </>
  );
});

export default withRouter(DecorationCard);
