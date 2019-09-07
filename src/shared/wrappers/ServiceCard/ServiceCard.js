import React from 'react';
import { Card, Icon } from 'antd';

import './ServiceCard.scss';

const { Meta } = Card;


const ServiceCard = React.memo(({
  service, children, isSelected, onClick, onActionClick,
}) => {

  const getImageUrl = () => {
    if (service.carouselImgs) {
      return service.carouselImgs[0];
    } if (service.mainImage) {
      return service.mainImage;
    }

    return 'https://eventor-services.s3.eu-west-2.amazonaws.com/no-photo-available.png';
  };

  if (Object.keys(service)) {
    return (
      <div className={`service-card-wrapper ${isSelected ? 'selected-card' : ''}`}>
        <div className="service-card-cont" onClick={onClick}>
          <div
            className="service-card-cover"
            style={
              service.customBackground ? {
                backgroundImage: `url(${service.mainImage})`,
                backgroundSize: service.backgroundSize,
                backgroundPositionX: service.backgroundPositionX,
              } : {
                backgroundImage: `url(${getImageUrl()})`,
              }}
          />
          <div className="service-card-content">
            <Meta
              title={service.title}
              description={children}
              onClick={onClick}
            />
          </div>
        </div>
        <div className="service-card-footer">
          <button type="button" className="service-card-btn purple-gradient-btn" onClick={onActionClick}>
            <Icon type="shopping-cart" />
            {isSelected
              ? 'Հանել զամբյուղից'
              : 'Ավելացնել զամբյուղ'}
          </button>
        </div>
      </div>
    );
  }

  return null;

});

export { ServiceCard };
