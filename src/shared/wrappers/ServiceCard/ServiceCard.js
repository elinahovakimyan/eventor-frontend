import React from 'react';
import { Card, Checkbox, Button } from 'antd';

import './ServiceCard.scss';

const { Meta } = Card;


const ServiceCard = React.memo(({
  service, children, seeMore, isSelected, onClick,
}) => {

  if (Object.keys(service)) {
    return (
      <Card
        className={`service-card-wrapper ${isSelected ? 'selected-card' : ''}`}
        cover={(
          <div
            className="service-card-cover"
            onClick={() => onClick(false)}
            style={
              service.customBackground ? {
                backgroundImage: `url(${service.mainImage})`,
                backgroundSize: service.backgroundSize,
                backgroundPositionX: service.backgroundPositionX
              } : {
                backgroundImage: `url(${service.mainImage})`
              }}>
            <Checkbox checked={isSelected} />
          </div>
        )}
        actions={[
          seeMore,
          <Button onClick={() => onClick(true)}>
            Ընտրել
          </Button>,
        ]}
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
