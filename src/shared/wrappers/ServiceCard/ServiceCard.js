import React from 'react';
import { Card, Checkbox } from 'antd';

import './ServiceCard.scss';

const { Meta } = Card;


const ServiceCard = React.memo(({
  service, children, actionComponent, isSelected, onClick,
}) => {

  if (Object.keys(service)) {
    return (
      <Card
        className="service-card-wrapper"
        cover={(
          <div
            className="service-card-cover"
            onClick={onClick}
            style={{ backgroundImage: `url(${service.mainImage})` }}
          >
            <Checkbox checked={isSelected} />
          </div>
        )}
        actions={[actionComponent]}
      >
        <Meta
          title={service.title}
          description={children}
          onClick={onClick}
        />
      </Card>
    );
  }

  return null;

});

export { ServiceCard };
