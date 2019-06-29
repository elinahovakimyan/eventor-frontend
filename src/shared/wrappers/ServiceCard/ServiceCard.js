import React from 'react';
import { Card, Icon } from 'antd';

import './ServiceCard.scss';

const { Meta } = Card;


const ServiceCard = React.memo(({
  service, children, isSelected, onClick, onActionClick,
}) => {

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
                backgroundImage: `url(${service.mainImage})`,
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
            Ավելացնել զամբյուղ
          </button>
        </div>
      </div>
    );
  }

  return null;

});

export { ServiceCard };
